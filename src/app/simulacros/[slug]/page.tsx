import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import { getSimulacroBySlug, getPreguntasSimulacro, getSimulacros } from "@/lib/simulacros";
import { requireActiveUser } from "@/lib/auth-helpers";

export function generateStaticParams() {
  return getSimulacros().map((simulacro) => ({ slug: simulacro.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const simulacro = getSimulacroBySlug(slug);
  if (!simulacro) return {};
  return {
    title: simulacro.titulo,
    alternates: { canonical: `/simulacros/${simulacro.slug}` },
  };
}

export default async function SimulacroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const simulacro = getSimulacroBySlug(slug);
  if (!simulacro) notFound();

  await requireActiveUser(`/simulacros/${slug}`);

  const preguntas = getPreguntasSimulacro(simulacro);

  return (
    <>
      <PageHero
        eyebrow="Simulacro"
        title={simulacro.titulo}
        description={`Combina preguntas de los temas ${simulacro.temas[0].numero} a ${simulacro.temas[simulacro.temas.length - 1].numero}.`}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Simulacros", href: "/simulacros" },
          { label: simulacro.titulo, href: `/simulacros/${simulacro.slug}` },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <QuizRunner temaSlug={simulacro.slug} preguntas={preguntas} />
        </Container>
      </section>
    </>
  );
}
