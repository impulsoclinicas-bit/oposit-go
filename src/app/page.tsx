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
      "Test tipo examen para cada tema, con corrección al instante y explicación de cada respuesta. Cada intento combina las preguntas y sus opciones en un orden distinto.",
  },
  {
    titulo: "Esquema y resumen de cada tema",
    descripcion:
      "Por cada tema del temario: un esquema para repasar de un vistazo y un resumen que fija lo esencial antes del test.",
  },
  {
    titulo: "Pruebas psicotécnicas",
    descripcion:
      "Series numéricas, series de letras, sinónimos y antónimos, y analogías verbales: la otra parte del primer ejercicio.",
  },
  {
    titulo: "Simulacros con cronómetro",
    descripcion:
      "Un simulacro cada 5 temas y un simulacro completo (hasta 100 preguntas), con el mismo cronómetro que el examen oficial.",
  },
  {
    titulo: "Plan de estudio personalizado",
    descripcion:
      "Respondes un breve cuestionario al darte de alta y generamos un calendario semana a semana con el temario y los repasos, ajustado a la convocatoria vigente.",
  },
  {
    titulo: "Temario que se abre por bloques",
    descripcion:
      "5 temas nuevos cada mes, con su simulacro correspondiente, para asimilar el contenido de forma progresiva en lugar de afrontarlo todo de una vez.",
  },
];

const fechas = [
  { hito: "Publicación en el BOE", fecha: "10 de julio de 2026" },
  { hito: "Plazo de solicitudes", fecha: "13 a 31 de julio de 2026" },
  { hito: "Primer ejercicio (conocimientos y psicotécnicos)", fecha: "26 de septiembre de 2026" },
  { hito: "Pruebas físicas", fecha: "Segunda quincena de octubre de 2026" },
];

const fases = [
  {
    titulo: "Conocimientos",
    detalle: "Cuestionario tipo test de 100 preguntas sobre el temario, a responder en 50 minutos.",
  },
  {
    titulo: "Psicotécnicos y personalidad",
    detalle: "Se hacen el mismo día que el examen de conocimientos: series, razonamiento, cuestionario de personalidad y prueba biográfica.",
  },
  {
    titulo: "Aptitud física",
    detalle: "Circuito de agilidad, fuerza (dominadas o suspensión en barra) y resistencia (1.000 metros). Puntuación de 0 a 10, media mínima 5. No las preparamos aquí.",
  },
];

const faqItems = [
  {
    question: "¿Qué incluye la suscripción mensual?",
    answer:
      "Tests ilimitados de cada tema, esquemas y resúmenes, pruebas psicotécnicas, simulacros con cronómetro (por bloques y completo) y un plan de estudio personalizado a partir del cuestionario que respondes al darte de alta. El temario se abre por bloques de 5 temas al mes, con su simulacro correspondiente, en lugar de estar disponible entero desde el primer día.",
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
  {
    question: "¿Por qué el temario se abre poco a poco y no entero desde el primer día?",
    answer:
      `Para favorecer un ritmo de estudio ordenado, en lugar de presentarte los ${temas.length} temas todos a la vez. Al suscribirte tienes ya disponibles los 5 primeros temas y su simulacro; cada mes se abren 5 temas más con su simulacro correspondiente, mientras el simulacro completo va creciendo con todo lo que ya tienes desbloqueado.`,
  },
];

export default function HomePage() {
  const simulacros = getSimulacros();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 text-white sm:py-28">
        <PoliceBadge className="pointer-events-none absolute -right-16 -top-16 h-96 w-96 opacity-10" />
        <Container className="relative grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              Información oficial de la convocatoria y preparación real
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Prepara la oposición a Policía Nacional con tests reales, tema a tema
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              Convocatoria, plazas y fechas siempre actualizadas: gratis y
              sin registro. Con la suscripción, además: tests ilimitados,
              pruebas psicotécnicas, esquemas, resúmenes y simulacros, con
              una cuota mensual asequible y sin permanencia.
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
              <li>✓ Tests ilimitados: cada intento genera una combinación nueva</li>
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
            La convocatoria, paso a paso
          </h2>
          <p className="mt-2 max-w-2xl text-brand-700">
            2.704 plazas de Escala Básica convocadas en julio de 2026. Esto
            es lo esencial del proceso; el resto de detalles y la
            documentación oficial, en{" "}
            <Link href="/convocatoria" className="underline">
              la página de la convocatoria
            </Link>
            .
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="overflow-x-auto rounded-xl border border-brand-200 bg-white shadow-sm">
              <table className="w-full min-w-[320px] text-left text-sm">
                <tbody>
                  {fechas.map((f, i) => (
                    <tr
                      key={f.hito}
                      className={i !== fechas.length - 1 ? "border-b border-brand-100" : ""}
                    >
                      <td className="px-5 py-3 font-semibold text-brand-900">{f.hito}</td>
                      <td className="px-5 py-3 text-brand-700">{f.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-bold text-brand-900">La fase de oposición</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {fases.map((fase) => (
                  <div
                    key={fase.titulo}
                    className="rounded-xl border border-brand-200 bg-white p-4 shadow-sm"
                  >
                    <p className="font-semibold text-brand-900">{fase.titulo}</p>
                    <p className="mt-1 text-xs text-brand-700">{fase.detalle}</p>
                  </div>
                ))}
              </div>
              <h3 className="mt-5 font-bold text-brand-900">Después de aprobar: la academia</h3>
              <p className="mt-2 text-sm text-brand-700">
                Quien aprueba la oposición hace un curso selectivo en la
                Escuela Nacional de Policía (Ávila), de varios meses, y
                después un periodo de prácticas en centros y dependencias
                policiales antes de la incorporación definitiva.
              </p>
            </div>
          </div>
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
            Todo lo que necesitas para preparar el examen
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            Prueba varios tests gratuitos, sin registro, y comprueba cómo
            corregimos y explicamos cada pregunta al instante.
          </p>
          <Link
            href="/recursos"
            className="rounded-md bg-brand-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
          >
            Pruébanos gratis
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
