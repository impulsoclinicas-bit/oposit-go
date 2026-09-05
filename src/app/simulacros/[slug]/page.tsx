import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import { getSimulacroBySlug, getPreguntasSimulacro, getSimulacros } from "@/lib/simulacros";
import { requireActiveUser } from "@/lib/auth-helpers";
import { isSimulacroDesbloqueado, getFechaDesbloqueoSimulacro } from "@/lib/desbloqueo";

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

  const user = await requireActiveUser(`/simulacros/${slug}`);

  const desbloqueado = isSimulacroDesbloqueado(simulacro.numero, user.subscriptionStartedAt);

  if (!desbloqueado) {
    const fecha = user.subscriptionStartedAt
      ? getFechaDesbloqueoSimulacro(simulacro.numero, user.subscriptionStartedAt)
      : null;
    return (
      <>
        <PageHero
          eyebrow="Simulacro"
          title={simulacro.titulo}
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Simulacros", href: "/simulacros" },
            { label: simulacro.titulo, href: `/simulacros/${simulacro.slug}` },
          ]}
        />
        <section className="py-16 sm:py-24">
          <Container>
            <div className="mx-auto max-w-xl rounded-xl border border-dashed border-brand-300 bg-brand-50 p-8 text-center">
              <p className="text-3xl" aria-hidden="true">🔒</p>
              <p className="mt-2 font-semibold text-brand-900">
                Este simulacro todavía no está disponible
              </p>
              <p className="mt-1 text-sm text-brand-700">
                Se desbloquea junto con sus temas correspondientes.
                {fecha && (
                  <>
                    {" "}Disponible el{" "}
                    <span className="font-semibold">
                      {new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(fecha)}
                    </span>
                    .
                  </>
                )}
              </p>
              <Link
                href="/simulacros"
                className="mt-4 inline-block text-sm font-semibold text-brand-800 hover:text-brand-900"
              >
                ← Volver a simulacros
              </Link>
            </div>
          </Container>
        </section>
      </>
    );
  }

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
          <p className="mb-4 text-sm text-brand-700">
            Cronómetro activo, en las condiciones del examen oficial (30
            segundos por pregunta): al agotarse el tiempo, el test se
            corrige automáticamente.
          </p>
          <QuizRunner
            temaSlug={simulacro.slug}
            preguntas={preguntas}
            segundosPorPregunta={30}
            volverHref="/simulacros"
            volverLabel="Volver a simulacros"
          />
        </Container>
      </section>
    </>
  );
}
