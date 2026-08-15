import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { bloques, temas } from "@/lib/temario";
import { getSimulacros } from "@/lib/simulacros";

export const metadata: Metadata = {
  title: `${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const beneficios = [
  {
    titulo: "Batería de preguntas por tema",
    descripcion:
      "Test tipo examen para cada tema del temario, con corrección al instante y explicación de cada respuesta.",
  },
  {
    titulo: "Simulacro cada 5 temas",
    descripcion:
      "Combina preguntas de varios temas en un simulacro tipo test, igual que el examen real, para medir tu nivel por bloques.",
  },
  {
    titulo: "Esquema y resumen por tema",
    descripcion:
      "Contenido de repaso rápido para memorizar lo esencial de cada tema antes de hacer el test.",
  },
  {
    titulo: "Contenido actualizado",
    descripcion:
      "Revisamos el temario cada convocatoria para que siempre estudies con la normativa vigente.",
  },
];

const faqItems = [
  {
    question: "¿Qué incluye la suscripción mensual?",
    answer:
      "Acceso completo a las baterías de preguntas de cada tema, los simulacros tipo test cada 5 temas y, progresivamente, los esquemas y resúmenes de cada tema. Todo desde el móvil o el ordenador.",
  },
  {
    question: "¿Puedo cancelar cuándo quiera?",
    answer:
      "Sí. Es una suscripción mensual sin permanencia: puedes cancelarla en cualquier momento desde tu cuenta y seguirás teniendo acceso hasta el final del periodo ya pagado.",
  },
  {
    question: "¿Cómo me doy de alta?",
    answer:
      "Eliges el plan, pagas de forma segura con Stripe y te enviamos un email para crear tu contraseña y activar tu cuenta al instante.",
  },
  {
    question: "¿El temario es el oficial de la convocatoria?",
    answer:
      "Trabajamos con el temario oficial de la Escala Básica de Policía Nacional y lo revisamos con cada convocatoria publicada en el BOE.",
  },
];

export default function HomePage() {
  const simulacros = getSimulacros();

  return (
    <>
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 text-white sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              Oposición a Policía Nacional
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Prepara tu oposición a Policía Nacional con tests reales, tema a tema
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              Baterías de preguntas, simulacros cada 5 temas y (próximamente)
              esquemas y resúmenes. Todo por una suscripción mensual de bajo
              coste, sin permanencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/precios"
                className="rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400"
              >
                Ver planes desde {siteConfig.precioMensualEur.toFixed(2)} €/mes
              </Link>
              <Link
                href="/temario"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ver el temario completo
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              De un vistazo
            </p>
            <ul className="mt-4 space-y-3 text-sm text-brand-100">
              <li>✓ {temas.length} temas organizados en {bloques.length} bloques</li>
              <li>✓ {simulacros.length} simulacros tipo test</li>
              <li>✓ Corrección y explicación al instante</li>
              <li>✓ Cancela cuando quieras, sin permanencia</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Todo lo que necesitas para aprobar el test
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((b) => (
              <div
                key={b.titulo}
                className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-brand-900">{b.titulo}</h3>
                <p className="mt-2 text-sm text-brand-700">{b.descripcion}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Temario organizado por bloques
          </h2>
          <p className="mt-2 max-w-2xl text-brand-700">
            Estudia con la misma estructura que se usa en el examen oficial:
            jurídico, social y técnico-científico.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {bloques.map((bloque) => (
              <div
                key={bloque.slug}
                className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-brand-900">{bloque.nombre}</h3>
                <p className="mt-2 text-sm text-brand-700">{bloque.descripcion}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {temas.filter((t) => t.bloque === bloque.slug).length} temas
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/temario"
              className="text-sm font-semibold text-brand-800 hover:text-brand-900"
            >
              Ver el temario completo →
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Empieza a preparar tu oposición hoy mismo"
        description={`Acceso completo por ${siteConfig.precioMensualEur.toFixed(2)} €/mes. Sin permanencia, cancela cuando quieras.`}
        primaryLabel="Suscribirme ahora"
        primaryHref="/precios"
        secondaryLabel="Ver el temario"
        secondaryHref="/temario"
      />

      <FaqSection items={faqItems} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Oposit&go — Preparación oposición Policía Nacional",
          description: siteConfig.description,
          provider: { "@id": `${siteConfig.url}/#organization` },
          offers: {
            "@type": "Offer",
            price: siteConfig.precioMensualEur,
            priceCurrency: "EUR",
            category: "Subscription",
          },
        }}
      />
    </>
  );
}
