import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import { categoriasPsicotecnicas, getCategoriaPsicotecnica } from "@/lib/psicotecnicos";
import { getPreguntasByCategoriaPsicotecnica } from "@/content/psicotecnicos";
import { requireActiveUser } from "@/lib/auth-helpers";

export function generateStaticParams() {
  return categoriasPsicotecnicas.map((categoria) => ({ slug: categoria.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoria = getCategoriaPsicotecnica(slug);
  if (!categoria) return {};
  return {
    title: categoria.titulo,
    description: categoria.descripcion,
    alternates: { canonical: `/psicotecnicos/${categoria.slug}` },
  };
}

export default async function CategoriaPsicotecnicaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoria = getCategoriaPsicotecnica(slug);
  if (!categoria) notFound();

  await requireActiveUser(`/psicotecnicos/${slug}`);

  const preguntas = getPreguntasByCategoriaPsicotecnica(categoria.slug);

  return (
    <>
      <PageHero
        eyebrow="Psicotécnicos"
        title={categoria.titulo}
        description={categoria.descripcion}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Psicotécnicos", href: "/psicotecnicos" },
          { label: categoria.titulo, href: `/psicotecnicos/${categoria.slug}` },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Preguntas ilimitadas</h2>
          <p className="mt-1 text-sm text-brand-700">
            Responde todas las preguntas y pulsa &ldquo;Corregir
            test&rdquo; para ver tu resultado. Al finalizar, dispondrás de
            un nuevo test generado automáticamente.
          </p>
          <div className="mt-6">
            <QuizRunner
              temaSlug={`psicotecnico-${categoria.slug}`}
              preguntas={preguntas}
              volverHref="/psicotecnicos"
              volverLabel="Volver a psicotécnicos"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
