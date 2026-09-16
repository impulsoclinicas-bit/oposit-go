import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { SubscriptionStatus } from "@prisma/client";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import { isDbConfigured } from "@/lib/db";
import { isEmailConfigured, sendActivationEmail, sendAdminAlertEmail } from "@/lib/email";
import { generateToken } from "@/lib/tokens";
import { siteConfig } from "@/lib/site";
import { FECHA_EXAMEN_OFICIAL } from "@/lib/convocatoria";

function mapStripeStatus(status: Stripe.Subscription.Status): SubscriptionStatus {
  switch (status) {
    case "active":
    case "trialing":
      return SubscriptionStatus.active;
    case "past_due":
    case "unpaid":
      return SubscriptionStatus.past_due;
    default:
      return SubscriptionStatus.canceled;
  }
}

async function issueActivationLink(userId: string, email: string, origin: string) {
  const token = generateToken();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  await prisma.activationToken.create({ data: { token, userId, expiresAt } });

  if (isEmailConfigured()) {
    await sendActivationEmail(email, `${origin}/activar-cuenta?token=${token}`);
  }
}

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY || !isDbConfigured()) {
    return NextResponse.json({ error: "No configurado" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Falta la firma del webhook" }, { status: 400 });
  }

  const payload = await request.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Firma inválida" }, { status: 400 });
  }

  const origin = request.headers.get("origin") ?? siteConfig.url;

  try {
    await procesarEvento(event, stripe, origin);
  } catch (error) {
    // Un fallo aquí a media operación es grave: alguien puede haber pagado
    // sin obtener acceso, y hoy no lo detectaría nadie salvo por queja del
    // alumno. Avisamos al titular por email y devolvemos error para que
    // Stripe reintente la entrega del webhook.
    const mensaje = error instanceof Error ? error.message : String(error);
    console.error(`[webhook stripe] error procesando ${event.type} (${event.id}):`, error);
    if (isEmailConfigured()) {
      await sendAdminAlertEmail(
        "fallo procesando un pago",
        `Evento: ${event.type}\nID del evento: ${event.id}\nError: ${mensaje}\n\nRevisa el pago en Stripe y, si corresponde, da acceso a mano.`
      ).catch((e) => console.error("[webhook stripe] no se pudo enviar la alerta:", e));
    }
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

async function procesarEvento(event: Stripe.Event, stripe: Stripe, origin: string) {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.mode === "payment" && session.metadata?.producto === "ponerse-al-dia") {
        const userId = session.metadata?.userId;
        if (!userId) break;
        await prisma.user.update({
          where: { id: userId },
          data: { catchUpTemarioEn: new Date() },
        });
        break;
      }

      if (session.mode === "payment" && session.metadata?.producto === "pase-simulacros") {
        const email = session.customer_details?.email ?? session.customer_email;
        const customerId = session.customer as string | null;
        if (!email) break;

        const user = await prisma.user.upsert({
          where: { email: email.toLowerCase() },
          update: {
            stripeCustomerId: customerId ?? undefined,
            paseSimulacrosExpiraEn: FECHA_EXAMEN_OFICIAL,
          },
          create: {
            email: email.toLowerCase(),
            stripeCustomerId: customerId,
            paseSimulacrosExpiraEn: FECHA_EXAMEN_OFICIAL,
          },
        });

        if (!user.passwordHash) {
          await issueActivationLink(user.id, user.email, origin);
        }
        break;
      }

      if (session.mode !== "subscription") break;

      const email = session.customer_details?.email ?? session.customer_email;
      const customerId = session.customer as string | null;
      const subscriptionId = session.subscription as string | null;
      if (!email || !customerId || !subscriptionId) break;

      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const currentPeriodEnd = new Date(subscription.items.data[0].current_period_end * 1000);

      // subscriptionStartedAt se fija en CADA alta, incluidas las
      // reactivaciones tras cancelar: el calendario compartido del
      // temario (ver `src/lib/curso.ts`) trata a quien vuelve como a un
      // alumno nuevo, sin conservar el lote de entrada que tuviera antes.
      const user = await prisma.user.upsert({
        where: { email: email.toLowerCase() },
        update: {
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscriptionId,
          subscriptionStatus: SubscriptionStatus.active,
          currentPeriodEnd,
          subscriptionStartedAt: new Date(),
        },
        create: {
          email: email.toLowerCase(),
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscriptionId,
          subscriptionStatus: SubscriptionStatus.active,
          currentPeriodEnd,
          subscriptionStartedAt: new Date(),
        },
      });

      if (!user.passwordHash) {
        await issueActivationLink(user.id, user.email, origin);
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const currentPeriodEnd = new Date(subscription.items.data[0].current_period_end * 1000);
      await prisma.user.updateMany({
        where: { stripeSubscriptionId: subscription.id },
        data: {
          subscriptionStatus: mapStripeStatus(subscription.status),
          currentPeriodEnd,
        },
      });
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      await prisma.user.updateMany({
        where: { stripeSubscriptionId: subscription.id },
        data: { subscriptionStatus: SubscriptionStatus.canceled },
      });
      break;
    }

    default:
      break;
  }
}
