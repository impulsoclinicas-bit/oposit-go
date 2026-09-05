import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { BuyButton } from "@/components/BuyButton";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios",
  description: `Suscripción mensual a Oposit&go por ${siteConfig.precioMensualEur.toFixed(2)} €/mes, o pase de simulacros ilimitados por ${siteConfig.precioPaseSimulacrosEur.toFixed(2)} € de pago único: baterías de preguntas, simulacros, esquemas y resúmenes para la oposición a Policía Nacional.`,
  alternates: { canonical: "/precios" },
};

const incluyeMensual = [
  "Tests ilimitados: esquema, resumen y batería de preguntas de cada tema",
  "Pruebas psicotécnicas: series numéricas, series de letras, sinónimos y antónimos, y analogías verbales",
  "Un simulacro cada 5 temas y un simulacro completo, ambos con cronómetro",
  "Plan de estudio personalizado a partir de un breve cuestionario inicial",
  "Corrección y explicación al instante en cada pregunta",
  "Acceso desde el móvil, la tableta o el ordenador",
  "Sin permanencia: puedes cancelar en cualquier momento",
];

const incluyePase = [
  "Simulacro de temario completo, con cronómetro, combinando los 45 temas desde el primer día",
  "Simulacro psicotécnico completo, con cronómetro, combinando las cuatro categorías",
  "Corrección y explicación de cada pregunta al finalizar cada simulacro",
  "Cada simulacro se genera con una combinación distinta de preguntas: práctica sin límite",
  "Válido desde la contratación hasta la fecha de la convocatoria vigente",
];

const noIncluyePase = [
  "Batería de preguntas, esquema o resumen de cada tema",
  "Descarga en PDF de esquemas y resúmenes",
  "Simulacros por bloques de 5 temas ni categorías psicotécnicas individuales",
];

const faqItems = [
  {
    question: "¿Hay permanencia mínima en el plan mensual?",
    answer:
      "No. Es una suscripción mensual de renovación automática. Puedes cancelarla en cualquier momento desde tu cuenta y conservas el acceso hasta el final del periodo ya abonado.",
  },
  {
    question: "¿En qué se diferencia el pase de simulacros del plan mensual?",
    answer:
      "El plan mensual da acceso a la totalidad del contenido —temario por temas, esquemas, resúmenes y simulacros—, con el temario desbloqueándose de forma progresiva. El pase de simulacros es un pago único, sin temario por temas ni esquemas ni resúmenes: incluye únicamente los dos simulacros completos (de temario y psicotécnico), con acceso ilimitado desde el primer día hasta la fecha del examen.",
  },
  {
    question: "¿Hasta cuándo tiene validez el pase de simulacros?",
    answer:
      "Desde el momento de la compra hasta la fecha oficial de la convocatoria vigente. Si adquieres un nuevo pase para una convocatoria posterior, la validez se actualiza a esa nueva fecha.",
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer:
      "El pago se procesa de forma segura a través de Stripe (tarjeta de crédito o débito). No almacenamos los datos de tu tarjeta.",
  },
  {
    question: "¿Qué ocurre después de pagar?",
    answer:
      "Recibirás un correo electrónico inmediato para crear tu contraseña y acceder sin demora a todo el contenido disponible.",
  },
  {
    question: "¿Preparáis las pruebas físicas o la entrevista?",
    answer:
      "No. Oposit&go no es una academia: nos centramos en la parte que se prepara mediante test, esquemas y repaso (temario y psicotécnicos). No entrenamos la prueba de aptitud física ni la prueba biográfica o entrevista.",
  },
  {
    question: "¿Tengo acceso a todo el temario desde el primer día con el plan mensual?",
    answer:
      "Dispones de los 5 primeros temas y su simulacro desde el momento de la suscripción. El resto se desbloquea a razón de 5 temas (con su simulacro correspondiente) cada mes, mientras las pruebas psicotécnicas y el simulacro completo están disponibles en todo momento. El objetivo es asimilar el contenido bloque a bloque, no restringir el acceso.",
  },
];

export default function PreciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        title="Dos formas de prepararte, sin letra pequeña"
        description="El plan mensual, pensado para trabajar el temario completo de manera progresiva. El pase de simulacros, un pago único dirigido a quienes ya dominan el temario y solo necesitan entrenar el ritmo del examen."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Precios", href: "/precios" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-brand-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Plan mensual
            </p>
            <p className="mt-2 text-4xl font-bold text-brand-950">
              {siteConfig.precioMensualEur.toFixed(2)} €
              <span className="text-base font-medium text-brand-500"> /mes</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-800">
              {incluyeMensual.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-success-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <BuyButton className="w-full rounded-md bg-accent-500 px-6 py-3 text-center text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400" />
            </div>
            <p className="mt-3 text-center text-xs text-brand-500">
              Pago seguro con Stripe. Sin permanencia.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Pase de simulacros
            </p>
            <p className="mt-2 text-4xl font-bold text-brand-950">
              {siteConfig.precioPaseSimulacrosEur.toFixed(2)} €
              <span className="text-base font-medium text-brand-500"> pago único</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-800">
              {incluyePase.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-success-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-500">
              No incluye
            </p>
            <ul className="mt-2 space-y-2 text-sm text-brand-600">
              {noIncluyePase.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <BuyButton
                endpoint="/api/checkout-pase-simulacros"
                label="Comprar el pase"
                className="w-full rounded-md border-2 border-brand-900 px-6 py-3 text-center text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
              />
            </div>
            <p className="mt-3 text-center text-xs text-brand-500">
              Pago único con Stripe. Válido hasta la convocatoria vigente.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="space-y-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-8">
          <h2 className="font-bold text-brand-900">¿Cómo funciona el plan mensual?</h2>
          <ol className="space-y-3 text-sm text-brand-800">
            <li>
              <span className="font-semibold">1. Suscríbete.</span> Realiza
              el pago de forma segura con tarjeta a través de Stripe.
            </li>
            <li>
              <span className="font-semibold">2. Activa tu cuenta.</span>{" "}
              Recibirás un correo electrónico inmediato para crear tu
              contraseña.
            </li>
            <li>
              <span className="font-semibold">3. Cuestionario de estudio.</span>{" "}
              Respondes unas breves preguntas sobre cómo quieres
              prepararte y generamos tu plan de estudio personalizado.
            </li>
            <li>
              <span className="font-semibold">4. Empieza a estudiar.</span>{" "}
              Dispones de inmediato de los 5 primeros temas, sus tests,
              esquemas y resúmenes, y su simulacro correspondiente.
            </li>
            <li>
              <span className="font-semibold">5. Cada mes, 5 temas más.</span>{" "}
              El resto del temario se desbloquea automáticamente, sin
              ninguna acción por tu parte.
            </li>
          </ol>
        </Container>
      </section>

      <FaqSection items={faqItems} />
    </>
  );
}
