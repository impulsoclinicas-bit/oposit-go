import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { QuizRunner } from "@/components/QuizRunner";
import { recursosGratis } from "@/lib/recursos-gratis";
import { getTotalPreguntasTemario } from "@/content/preguntas";
import { getTotalPreguntasPsicotecnicos } from "@/content/psicotecnicos";

export const metadata: Metadata = {
  title: "Recursos gratuitos",
  description:
    "Tests gratuitos tipo examen para practicar antes de la oposición a Policía Nacional, con corrección y explicación al instante. Sin registro.",
  alternates: { canonical: "/recursos" },
};

const fasesEsquema = [
  {
    titulo: "1. Oposición",
    detalle: "Test de conocimientos + psicotécnicos, aptitud física, prueba biográfica",
  },
  { titulo: "2. Curso selectivo", detalle: "Escuela Nacional de Policía (Ávila)" },
  { titulo: "3. Prácticas", detalle: "En centros y dependencias policiales" },
];

export default function RecursosPage() {
  const totalPreguntas = getTotalPreguntasTemario() + getTotalPreguntasPsicotecnicos();

  return (
    <>
      <PageHero
        eyebrow="Gratis, sin registro"
        title="Recursos gratuitos para opositores"
        description="Practica ya mismo con tests reales tipo examen. Responde, corrige y lee la explicación de cada pregunta, sin darte de alta ni pagar nada."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Recursos gratuitos", href: "/recursos" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-5 text-sm text-brand-800">
            Esto es una muestra de lo que hay dentro. En la zona de alumnos
            tienes más de {totalPreguntas} preguntas tipo test, con el mismo
            formato que el examen oficial: batería completa de cada tema,
            psicotécnicos, esquemas y resúmenes, y simulacros combinados —
            todo por una suscripción mensual de bajo coste, sin permanencia.
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-brand-900">
              Esquema de ejemplo: fases del proceso selectivo
            </h2>
            <p className="mt-1 text-sm text-brand-700">
              Así es un esquema de repaso: el resumen visual de un tema en
              tres golpes de vista.{" "}
              <Link href="/convocatoria" className="underline">
                Más detalle en la página de la convocatoria
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
              {fasesEsquema.map((fase, i) => (
                <div key={fase.titulo} className="flex flex-1 items-center gap-2">
                  <div className="flex-1 rounded-xl border-2 border-brand-800 bg-white p-5 text-center shadow-sm">
                    <p className="font-bold text-brand-900">{fase.titulo}</p>
                    <p className="mt-1 text-xs text-brand-600">{fase.detalle}</p>
                  </div>
                  {i < fasesEsquema.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden shrink-0 text-2xl text-accent-500 sm:block"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-16">
            {recursosGratis.map((recurso) => (
              <div key={recurso.slug} id={recurso.slug}>
                <h2 className="text-2xl font-bold text-brand-900">{recurso.titulo}</h2>
                <p className="mt-1 text-sm text-brand-700">{recurso.descripcion}</p>
                <div className="mt-6">
                  <QuizRunner
                    temaSlug={recurso.slug}
                    preguntas={recurso.preguntas}
                    volverHref="/recursos"
                    volverLabel="Volver a recursos gratuitos"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Te ha servido? Hay mucho más dentro"
        description="Batería completa de cada tema, psicotécnicos, esquemas, resúmenes y simulacros combinados. Suscripción mensual sin permanencia."
        primaryLabel="Ver planes"
        primaryHref="/precios"
        secondaryLabel="Ver el temario completo"
        secondaryHref="/temario"
      />
    </>
  );
}
