import { NextRequest, NextResponse } from "next/server";
import { getStripe, isStripeConfiguredPaseSimulacros } from "@/lib/stripe";
import { siteConfig } from "@/lib/site";

export async function POST(request: NextRequest) {
  if (!isStripeConfiguredPaseSimulacros()) {
    return NextResponse.json(
      { error: "El cobro automático no está configurado todavía." },
      { status: 503 }
    );
  }

  const origin = request.headers.get("origin") ?? siteConfig.url;

  const checkoutSession = await getStripe().checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: process.env.STRIPE_PRICE_ID_PASE_SIMULACROS!, quantity: 1 }],
    metadata: { producto: "pase-simulacros" },
    success_url: `${origin}/activar-cuenta?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/precios`,
    allow_promotion_codes: true,
    billing_address_collection: "auto",
  });

  if (!checkoutSession.url) {
    return NextResponse.json(
      { error: "No se pudo iniciar el pago." },
      { status: 500 }
    );
  }

  return NextResponse.json({ url: checkoutSession.url });
}
