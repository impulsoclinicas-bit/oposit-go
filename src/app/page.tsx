import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PoliceBadge } from "@/components/icons/PoliceBadge";
import { PatrolCar } from "@/components/icons/PatrolCar";
import { siteConfig } from "@/lib/site";
import { bloques, temas } from "@/lib/temario";
import { getSimulacros } from "@/lib/simulacros";
import { getTotalPreguntasTemario } from "@/content/preguntas";
import { getTotalPreguntasPsicotecnicos } from "@/content/psicotecnicos";
import { noticias } from "@/lib/noticias";

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
    titulo: "Pruebas psicotécnicas",
    descripcion:
      "Series numéricas, series de letras, sinónimos/antónimos y analogías verbales: la otra parte del primer ejercicio.",
  },
  {
    titulo: "Simulacro cada 5 temas",
    descripcion:
      "Combina preguntas de varios temas en un simulacro tipo test, igual que el examen real, para medir tu nivel por bloques.",
  },
  {
    titulo: "Esquema, resumen y plan de estudio",
    descripcion:
      "Repaso rápido por tema y un calendario semana a semana adaptado a tu fecha de examen.",
  },
];

const faqItems = [
  {
    question: "¿Qué incluye la suscripción mensual?",
    answer:
      "Acceso completo a las baterías de preguntas de cada tema, las pruebas psicotécnicas, los simulacros tipo test cada 5 temas, los esquemas y resúmenes de cada tema, y un plan de estudio personalizado según tu fecha de examen. Todo desde el móvil o el ordenador.",
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
  const totalPreguntas = getTotalPreguntasTemario() + getTotalPreguntasPsicotecnicos();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 text-white sm:py-28">
        <PoliceBadge className="pointer-events-none absolute -right-16 -top-16 h-96 w-96 opacity-10" />
        <Container className="relative grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              Toda la info de la convocatoria + preparación real
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Prepara tu oposición a Policía Nacional con tests reales, tema a tema
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              Convocatoria, plazas y fechas siempre actualizadas, gratis y
              sin registro. Y cuando quieras ir en serio: más de{" "}
              {totalPreguntas} preguntas tipo test, psicotécnicos, esquemas,
              resúmenes y simulacros por una suscripción mensual de bajo
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
                href="/recursos"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Probar gratis, sin registro
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <PatrolCar className="h-auto w-full max-w-[240px]" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-accent-300">
              De un vistazo
            </p>
            <ul className="mt-4 space-y-3 text-sm text-brand-100">
              <li>✓ Más de {totalPreguntas} preguntas tipo test</li>
              <li>✓ {temas.length} temas organizados en {bloques.length} bloques</li>
              <li>✓ {simulacros.length} simulacros tipo test</li>
              <li>✓ Corrección y explicación al instante</li>
              <li>✓ Cancela cuando quieras, sin permanencia</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-100 bg-white py-6">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-brand-800">
            <span className="font-semibold text-brand-900">
              Convocatoria 2026 en curso:
            </span>{" "}
            2.704 plazas de Escala Básica. Primer ejercicio el 26 de
            septiembre de 2026.
          </p>
          <Link
            href="/convocatoria"
            className="shrink-0 text-sm font-semibold text-brand-800 hover:text-brand-900"
          >
            Ver todos los detalles →
          </Link>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
              Últimas noticias de la convocatoria
            </h2>
            <Link
              href="/convocatoria"
              className="hidden shrink-0 text-sm font-semibold text-brand-800 hover:text-brand-900 sm:block"
            >
              Ver todas →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {noticias.slice(0, 2).map((noticia) => (
              <div
                key={noticia.titulo}
                className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {noticia.fecha}
                </p>
                <h3 className="mt-1 font-bold text-brand-900">{noticia.titulo}</h3>
                <p className="mt-1 text-sm text-brand-700">{noticia.resumen}</p>
              </div>
            ))}
          </div>
          <Link
            href="/convocatoria"
            className="mt-6 inline-block text-sm font-semibold text-brand-800 hover:text-brand-900 sm:hidden"
          >
            Ver todas las noticias →
          </Link>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Así funciona Oposit&amp;go
          </h2>
          <p className="mt-2 max-w-2xl text-brand-700">
            Una parte es abierta para cualquier visitante; el contenido de
            estudio en profundidad es para alumnos con suscripción.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
                Acceso libre · sin registro
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-800">
                <li>Información y noticias de la convocatoria en curso</li>
                <li>Listado completo del temario (los títulos, no los tests)</li>
                <li>Varios tests de muestra y un esquema de ejemplo</li>
              </ul>
              <Link
                href="/recursos"
                className="mt-4 inline-block text-sm font-semibold text-brand-800 hover:text-brand-900"
              >
                Ir a recursos gratuitos →
              </Link>
            </div>
            <div className="rounded-xl border border-accent-300 bg-brand-950 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
                🔒 Zona de alumnos · suscripción
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-100">
                <li>Batería completa de preguntas de cada tema</li>
                <li>Pruebas psicotécnicas por categorías</li>
                <li>Esquemas y resúmenes de repaso</li>
                <li>Simulacros combinados y plan de estudio personalizado</li>
              </ul>
              <Link
                href="/precios"
                className="mt-4 inline-block text-sm font-semibold text-accent-300 hover:text-accent-200"
              >
                Ver planes →
              </Link>
            </div>
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

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50/60 px-6 py-10 text-center">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            ¿Quieres probar antes de suscribirte?
          </h2>
          <p className="max-w-xl text-brand-700">
            Haz un par de tests gratis, sin registrarte, y comprueba cómo
            corregimos y explicamos cada pregunta al instante.
          </p>
          <Link
            href="/recursos"
            className="rounded-md bg-brand-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
          >
            Ir a los recursos gratuitos
          </Link>
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
