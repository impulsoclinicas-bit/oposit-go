import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import { siteConfig } from "@/lib/site";

export async function POST(request: NextRequest) {
  if (!isStripeConfigured()) {
    return NextResponse.json({ error: "No configurado" }, { status: 503 });
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { stripeCustomerId: true },
  });

  if (!user?.stripeCustomerId) {
    return NextResponse.json(
      { error: "No tienes ninguna suscripción asociada." },
      { status: 400 }
    );
  }

  const origin = request.headers.get("origin") ?? siteConfig.url;
  const portalSession = await getStripe().billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${origin}/cuenta`,
  });

  return NextResponse.json({ url: portalSession.url });
}
