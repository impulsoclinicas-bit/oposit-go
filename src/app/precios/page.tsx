import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { BuyButton } from "@/components/BuyButton";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios",
  description: `Suscripción mensual a Oposit&go por ${siteConfig.precioMensualEur.toFixed(2)} €/mes: baterías de preguntas, simulacros, esquemas y resúmenes para la oposición a Policía Nacional.`,
  alternates: { canonical: "/precios" },
};

const incluye = [
  "Batería de preguntas, esquema y resumen de cada tema del temario",
  "Pruebas psicotécnicas: series numéricas, series de letras, sinónimos/antónimos y analogías verbales",
  "Simulacro cada 5 temas y simulacro completo, ambos con cronómetro",
  "Plan de estudio personalizado según tu fecha de examen",
  "Corrección y explicación al instante en cada pregunta",
  "Acceso desde el móvil, tablet u ordenador",
  "Cancela cuando quieras, sin permanencia",
];

const faqItems = [
  {
    question: "¿Hay permanencia mínima?",
    answer:
      "No. Es una suscripción mensual que se renueva automáticamente. Puedes cancelarla cuando quieras desde tu cuenta y mantienes el acceso hasta que termine el periodo ya pagado.",
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
    question: "¿Tengo acceso a todo el temario desde el primer día?",
    answer:
      "Tienes disponibles los 5 primeros temas y su simulacro nada más suscribirte. El resto se abre a razón de 5 temas (con su simulacro) cada mes, mientras las pruebas psicotécnicas y el simulacro completo están accesibles siempre. Es para poder ir asimilando bloque a bloque, no para limitar el acceso.",
  },
];

export default function PreciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        title="Un único plan, sin letra pequeña"
        description="Una suscripción mensual. Los 5 primeros temas y su simulacro están disponibles desde el primer día; el resto se va abriendo 5 temas al mes."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Precios", href: "/precios" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-2xl border border-brand-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Plan mensual
            </p>
            <p className="mt-2 text-4xl font-bold text-brand-950">
              {siteConfig.precioMensualEur.toFixed(2)} €
              <span className="text-base font-medium text-brand-500"> /mes</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-800">
              {incluye.map((item) => (
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

          <div className="space-y-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-8">
            <h2 className="font-bold text-brand-900">¿Cómo funciona?</h2>
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
                <span className="font-semibold">3. Empieza a estudiar.</span>{" "}
                Ya tienes disponibles los 5 primeros temas, sus tests,
                esquemas y resúmenes, y su simulacro.
              </li>
              <li>
                <span className="font-semibold">4. Cada mes, 5 temas más.</span>{" "}
                El resto del temario se va abriendo automáticamente, sin que
                tengas que hacer nada.
              </li>
            </ol>
          </div>
        </Container>
      </section>

      <FaqSection items={faqItems} />
    </>
  );
}
