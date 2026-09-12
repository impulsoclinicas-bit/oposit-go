import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { getStripe, isStripeConfiguredPonerseAlDia } from "@/lib/stripe";
import { siteConfig } from "@/lib/site";
import { getTemasAtrasados } from "@/lib/desbloqueo";

export async function POST(request: NextRequest) {
  if (!isStripeConfiguredPonerseAlDia()) {
    return NextResponse.json(
      { error: "El cobro automático no está configurado todavía." },
      { status: 503 }
    );
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Tienes que iniciar sesión." }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      email: true,
      subscriptionStatus: true,
      subscriptionStartedAt: true,
      catchUpTemarioEn: true,
    },
  });
  if (!user || user.subscriptionStatus !== "active") {
    return NextResponse.json({ error: "Necesitas una suscripción activa." }, { status: 403 });
  }

  // El precio se calcula en el servidor, nunca se acepta desde el cliente.
  const temasAtrasados = getTemasAtrasados({
    subscriptionStartedAt: user.subscriptionStartedAt,
    catchUpTemarioComprado: Boolean(user.catchUpTemarioEn),
  });

  if (temasAtrasados <= 0) {
    return NextResponse.json(
      { error: "No tienes temas atrasados: ya estás al día con el temario." },
      { status: 400 }
    );
  }

  const origin = request.headers.get("origin") ?? siteConfig.url;
  const importeEur = temasAtrasados * siteConfig.precioPorTemaAtrasadoEur;

  const checkoutSession = await getStripe().checkout.sessions.create({
    mode: "payment",
    customer_email: user.email,
    line_items: [
      {
        price_data: {
          currency: "eur",
          unit_amount: Math.round(importeEur * 100),
          product_data: {
            name: `Ponerse al día: ${temasAtrasados} temas atrasados`,
            description:
              "Acceso permanente a los temas del temario anteriores a tu lote de entrada.",
          },
        },
        quantity: 1,
      },
    ],
    metadata: { producto: "ponerse-al-dia", userId: user.id, temasAtrasados: String(temasAtrasados) },
    success_url: `${origin}/cuenta?ponerse_al_dia=ok`,
    cancel_url: `${origin}/cuenta`,
    billing_address_collection: "auto",
  });

  if (!checkoutSession.url) {
    return NextResponse.json({ error: "No se pudo iniciar el pago." }, { status: 500 });
  }

  return NextResponse.json({ url: checkoutSession.url });
}
