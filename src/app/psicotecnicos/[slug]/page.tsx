import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import { categoriasPsicotecnicas, getCategoriaPsicotecnica } from "@/lib/psicotecnicos";
import { getPreguntasByCategoriaPsicotecnica } from "@/content/psicotecnicos";
import { requireActiveUser } from "@/lib/auth-helpers";

// Tamaño de cada test individual: con un banco de 30 preguntas por
// categoría, cada intento muestrea 16 al azar en vez de mostrarlas
// siempre todas, igual que hace el temario con sus tests de tamaño fijo
// sobre un banco más grande (así el test no se repite igual cada vez).
const TAMANO_TEST_CATEGORIA = 16;

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
              tamanoTest={TAMANO_TEST_CATEGORIA}
              volverHref="/psicotecnicos"
              volverLabel="Volver a psicotécnicos"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
