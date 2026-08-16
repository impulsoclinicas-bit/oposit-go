import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import { getBloque, getTemaBySlug, temas } from "@/lib/temario";
import { getPreguntasByTema } from "@/content/preguntas";
import { getEsquemaByTema } from "@/content/esquemas";
import { getResumenByTema } from "@/content/resumenes";
import { requireActiveUser } from "@/lib/auth-helpers";

export function generateStaticParams() {
  return temas.map((tema) => ({ slug: tema.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tema = getTemaBySlug(slug);
  if (!tema) return {};
  return {
    title: `Tema ${tema.numero}. ${tema.titulo}`,
    description: tema.descripcion,
    alternates: { canonical: `/temario/${tema.slug}` },
  };
}

export default async function TemaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tema = getTemaBySlug(slug);
  if (!tema) notFound();

  await requireActiveUser(`/temario/${slug}`);

  const bloque = getBloque(tema.bloque);
  const preguntas = getPreguntasByTema(tema.slug);
  const esquema = getEsquemaByTema(tema.slug);
  const resumen = getResumenByTema(tema.slug);

  return (
    <>
      <PageHero
        eyebrow={bloque?.nombre}
        title={`Tema ${tema.numero}. ${tema.titulo}`}
        description={tema.descripcion}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Temario", href: "/temario" },
          { label: `Tema ${tema.numero}`, href: `/temario/${tema.slug}` },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-brand-900">Esquema del tema</h2>
            {esquema ? (
              <div className="mt-4 space-y-4">
                {esquema.secciones.map((seccion) => (
                  <div key={seccion.titulo}>
                    <h3 className="text-sm font-semibold text-brand-800">
                      {seccion.titulo}
                    </h3>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-brand-700">
                      {seccion.puntos.map((punto, i) => (
                        <li key={i}>{punto}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-brand-700">
                Próximamente disponible.
              </p>
            )}
          </div>
          <div className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-brand-900">Resumen del tema</h2>
            {resumen ? (
              <div className="mt-4 space-y-3">
                {resumen.parrafos.map((parrafo, i) => (
                  <p key={i} className="text-sm text-brand-700">
                    {parrafo}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-brand-700">
                Próximamente disponible.
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">
            Batería de preguntas ({preguntas.length})
          </h2>
          <p className="mt-1 text-sm text-brand-700">
            Responde todas las preguntas y pulsa &ldquo;Corregir test&rdquo; para ver tu resultado.
          </p>
          <div className="mt-6">
            <QuizRunner temaSlug={tema.slug} preguntas={preguntas} />
          </div>
        </Container>
      </section>
    </>
  );
}
