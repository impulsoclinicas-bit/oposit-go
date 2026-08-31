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
  "Pruebas psicotécnicas: series numéricas, series de letras, sinónimos/antónimos y analogías verbales",
  "Simulacro cada 5 temas y simulacro completo, ambos con cronómetro",
  "Plan de estudio personalizado a partir de un cuestionario al darte de alta",
  "Corrección y explicación al instante en cada pregunta",
  "Acceso desde el móvil, tablet u ordenador",
  "Cancela cuando quieras, sin permanencia",
];

const incluyePase = [
  "Simulacro de temario completo ilimitado: los 45 temas mezclados, con cronómetro, desde el primer día",
  "Simulacro psicotécnico completo ilimitado: las cuatro categorías mezcladas, con cronómetro",
  "Corrección y explicación de cada pregunta al terminar cada simulacro",
  "Cada test se genera al momento con una combinación distinta: no se acaban",
  "Válido hasta la fecha de la convocatoria vigente",
];

const noIncluyePase = [
  "Temario por temas (batería de preguntas, esquema ni resumen de cada tema)",
  "PDF de esquemas y resúmenes",
  "Simulacros por bloques de 5 temas ni categorías psicotécnicas por separado",
];

const faqItems = [
  {
    question: "¿Hay permanencia mínima en el plan mensual?",
    answer:
      "No. Es una suscripción mensual que se renueva automáticamente. Puedes cancelarla cuando quieras desde tu cuenta y mantienes el acceso hasta que termine el periodo ya pagado.",
  },
  {
    question: "¿En qué se diferencia el pase de simulacros del plan mensual?",
    answer:
      "El plan mensual da acceso a todo: temario por temas, esquemas, resúmenes y simulacros, con el temario abriéndose poco a poco. El pase de simulacros es un pago único, sin temario por temas ni esquemas ni resúmenes: solo los dos simulacros completos (temario y psicotécnico), con todo el contenido disponible desde el primer día y sin límite de repeticiones, hasta la fecha del examen.",
  },
  {
    question: "¿Hasta cuándo dura el pase de simulacros?",
    answer:
      "Desde el momento en que lo contratas hasta la fecha oficial de la convocatoria vigente. Si compras un pase nuevo para una convocatoria posterior, la fecha se actualiza a esa nueva convocatoria.",
  },
  {
    question: "¿Cómo se hace el pago?",
    answer:
      "El pago se procesa de forma segura con Stripe (tarjeta de crédito o débito). No almacenamos los datos de tu tarjeta.",
  },
  {
    question: "¿Qué pasa después de pagar?",
    answer:
      "Te enviamos un email al instante para que crees tu contraseña y accedas ya mismo a todo el contenido disponible.",
  },
  {
    question: "¿Preparáis las pruebas físicas o la entrevista?",
    answer:
      "No. Oposit&go no es una academia: nos centramos en la parte que se prepara con test, esquemas y repaso (temario y psicotécnicos). No entrenamos las pruebas de aptitud física ni la prueba biográfica/entrevista.",
  },
  {
    question: "¿Tengo acceso a todo el temario desde el primer día con el plan mensual?",
    answer:
      "Tienes disponibles los 5 primeros temas y su simulacro nada más suscribirte. El resto se abre a razón de 5 temas (con su simulacro) cada mes, mientras las pruebas psicotécnicas y el simulacro completo están accesibles siempre. Es para poder ir asimilando bloque a bloque, no para limitar el acceso.",
  },
];

export default function PreciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        title="Dos formas de prepararte, sin letra pequeña"
        description="El plan mensual, para llevar el temario entero paso a paso. O el pase de simulacros, un pago único para quien ya se sabe el temario y solo quiere coger ritmo de examen."
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
              Pago seguro con Stripe. Cancela cuando quieras.
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
              <span className="font-semibold">1. Suscríbete.</span> Pagas de
              forma segura con tarjeta a través de Stripe.
            </li>
            <li>
              <span className="font-semibold">2. Activa tu cuenta.</span>{" "}
              Te llega un email al instante para crear tu contraseña.
            </li>
            <li>
              <span className="font-semibold">3. Cuestionario de estudio.</span>{" "}
              Un par de preguntas sobre cómo quieres prepararte, y te
              armamos tu plan de estudio.
            </li>
            <li>
              <span className="font-semibold">4. Empieza a estudiar.</span>{" "}
              Ya tienes disponibles los 5 primeros temas, sus tests,
              esquemas y resúmenes, y su simulacro.
            </li>
            <li>
              <span className="font-semibold">5. Cada mes, 5 temas más.</span>{" "}
              El resto del temario se va abriendo automáticamente, sin que
              tengas que hacer nada.
            </li>
          </ol>
        </Container>
      </section>

      <FaqSection items={faqItems} />
    </>
  );
}
