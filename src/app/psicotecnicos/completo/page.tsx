import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import {
  PREGUNTAS_SIMULACRO_PSICOTECNICO,
  SEGUNDOS_POR_PREGUNTA_PSICOTECNICO,
} from "@/lib/psicotecnicos";
import { getPreguntasSimulacroPsicotecnico } from "@/content/psicotecnicos";
import { requireAccesoSimulacros } from "@/lib/auth-helpers";

export const metadata: Metadata = {
  title: "Simulacro psicotécnico completo",
  description:
    "Examen psicotécnico completo, contrarreloj, mezclando series numéricas, series de letras, sinónimos y antónimos, y analogías verbales.",
  alternates: { canonical: "/psicotecnicos/completo" },
};

export default async function SimulacroPsicotecnicoCompletoPage() {
  await requireAccesoSimulacros("/psicotecnicos/completo");
  const preguntas = getPreguntasSimulacroPsicotecnico();

  return (
    <>
      <PageHero
        eyebrow="Simulacro psicotécnico completo"
        title="Simulacro psicotécnico completo, contrarreloj"
        description="Combina las cuatro categorías (series numéricas, series de letras, sinónimos y antónimos, y analogías verbales) en una única prueba cronometrada, para entrenar el ritmo del examen real."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Psicotécnicos", href: "/psicotecnicos" },
          { label: "Simulacro completo", href: "/psicotecnicos/completo" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <p className="mb-4 text-sm text-brand-700">
            Cronómetro de {SEGUNDOS_POR_PREGUNTA_PSICOTECNICO} segundos por
            pregunta: al agotarse el tiempo, el test se corrige
            automáticamente. Al finalizar, puedes generar una nueva
            combinación de preguntas de inmediato.
          </p>
          <QuizRunner
            temaSlug="psicotecnico-completo"
            preguntas={preguntas}
            tamanoTest={PREGUNTAS_SIMULACRO_PSICOTECNICO}
            segundosPorPregunta={SEGUNDOS_POR_PREGUNTA_PSICOTECNICO}
            volverHref="/psicotecnicos"
            volverLabel="Volver a psicotécnicos"
          />
        </Container>
      </section>
    </>
  );
}
