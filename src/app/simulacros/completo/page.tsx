import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import {
  getPreguntasSimulacroCompleto,
  PREGUNTAS_SIMULACRO_COMPLETO,
} from "@/lib/simulacros";
import { requireActiveUser } from "@/lib/auth-helpers";
import { getNumeroTemasDesbloqueados } from "@/lib/desbloqueo";

export const metadata: Metadata = {
  title: "Simulacro completo",
  description:
    "Examen completo tipo test, hasta 100 preguntas y 50 minutos, igual que el examen oficial de la Escala Básica.",
  alternates: { canonical: "/simulacros/completo" },
};

export default async function SimulacroCompletoPage() {
  const user = await requireActiveUser("/simulacros/completo");
  const numeroTemasDesbloqueados = getNumeroTemasDesbloqueados(user.subscriptionStartedAt);
  const preguntas = getPreguntasSimulacroCompleto(numeroTemasDesbloqueados);

  return (
    <>
      <PageHero
        eyebrow="Simulacro completo"
        title="Examen completo, como el día del examen"
        description={`Combina preguntas de todos los temas que ya tienes desbloqueados (hasta ${PREGUNTAS_SIMULACRO_COMPLETO} preguntas). A medida que se abran más temas, el simulacro completo crece con ellos.`}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Simulacros", href: "/simulacros" },
          { label: "Simulacro completo", href: "/simulacros/completo" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <p className="mb-4 text-sm text-brand-700">
            Cronómetro de 50 minutos para 100 preguntas, igual que el
            examen oficial: al llegar a cero, el test se corrige solo.
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
