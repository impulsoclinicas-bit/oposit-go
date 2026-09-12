import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID);
}

export function isStripeConfiguredPaseSimulacros(): boolean {
  return Boolean(
    process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID_PASE_SIMULACROS
  );
}

// El pase de "ponerse al día" no usa un Price ID fijo: su precio depende
// de cuántos temas atrasados tenga cada alumno, así que se crea con un
// precio dinámico (price_data) en el momento de la compra.
export function isStripeConfiguredPonerseAlDia(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY no está configurada.");
  }
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return stripeClient;
}
