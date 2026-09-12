import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import {
  getPreguntasSimulacroCompleto,
  PREGUNTAS_SIMULACRO_COMPLETO,
} from "@/lib/simulacros";
import { requireAccesoSimulacros } from "@/lib/auth-helpers";
import { getRangoTemasAccesibles } from "@/lib/desbloqueo";
import { temas } from "@/lib/temario";

export const metadata: Metadata = {
  title: "Simulacro completo",
  description:
    "Simulacro completo tipo test, hasta 100 preguntas en 50 minutos, en las condiciones del examen oficial de la Escala Básica.",
  alternates: { canonical: "/simulacros/completo" },
};

export default async function SimulacroCompletoPage() {
  const user = await requireAccesoSimulacros("/simulacros/completo");
  // Vía suscripción: solo los temas a los que da acceso su calendario y su
  // pase de ponerse al día. Vía pase de simulacros: todo el temario
  // mezclado desde el primer día, sin ninguna restricción.
  const rango = user.viaSuscripcion
    ? getRangoTemasAccesibles(user)
    : { desde: 1, hasta: temas.length };
  const preguntas = getPreguntasSimulacroCompleto(rango);

  return (
    <>
      <PageHero
        eyebrow="Simulacro completo"
        title="Simulacro completo, en las condiciones del examen oficial"
        description={`Combina preguntas de todos los temas ya desbloqueados, hasta un máximo de ${PREGUNTAS_SIMULACRO_COMPLETO}. A medida que se desbloqueen nuevos temas, el simulacro completo se amplía automáticamente.`}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Simulacros", href: "/simulacros" },
          { label: "Simulacro completo", href: "/simulacros/completo" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <p className="mb-4 text-sm text-brand-700">
            Cronómetro de 50 minutos para 100 preguntas, en las mismas
            condiciones que el examen oficial: al agotarse el tiempo, el
            test se corrige automáticamente.
          </p>
          <QuizRunner
            temaSlug="simulacro-completo"
            preguntas={preguntas}
            tamanoTest={PREGUNTAS_SIMULACRO_COMPLETO}
            segundosPorPregunta={30}
            volverHref="/simulacros"
            volverLabel="Volver a simulacros"
          />
        </Container>
      </section>
    </>
  );
}
