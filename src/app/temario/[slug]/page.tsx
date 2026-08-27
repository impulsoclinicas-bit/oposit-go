import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuizRunner } from "@/components/QuizRunner";
import { getBloque, getTemaBySlug, temas } from "@/lib/temario";
import { getPreguntasByTema } from "@/content/preguntas";
import { getEsquemaByTema } from "@/content/esquemas";
import { getResumenByTema } from "@/content/resumenes";
import { requireActiveUser } from "@/lib/auth-helpers";
import { isTemaDesbloqueado, getFechaDesbloqueoTema } from "@/lib/desbloqueo";

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

  const user = await requireActiveUser(`/temario/${slug}`);

  const bloque = getBloque(tema.bloque);
  const preguntas = getPreguntasByTema(tema.slug);
  const esquema = getEsquemaByTema(tema.slug);
  const resumen = getResumenByTema(tema.slug);

  const desbloqueado = isTemaDesbloqueado(tema.numero, user.subscriptionStartedAt);

  if (!desbloqueado) {
    const fecha = user.subscriptionStartedAt
      ? getFechaDesbloqueoTema(tema.numero, user.subscriptionStartedAt)
      : null;
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
        <section className="py-16 sm:py-24">
          <Container>
            <div className="mx-auto max-w-xl rounded-xl border border-dashed border-brand-300 bg-brand-50 p-8 text-center">
              <p className="text-3xl" aria-hidden="true">🔒</p>
              <p className="mt-2 font-semibold text-brand-900">
                Este tema todavía no está disponible
              </p>
              <p className="mt-1 text-sm text-brand-700">
                El contenido se abre por bloques, 5 temas al mes, para que
                puedas ir asentando cada bloque antes de pasar al
                siguiente.
                {fecha && (
                  <>
                    {" "}Este tema se desbloquea el{" "}
                    <span className="font-semibold">
                      {new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(fecha)}
                    </span>
                    .
                  </>
                )}
              </p>
              <Link
                href="/temario"
                className="mt-4 inline-block text-sm font-semibold text-brand-800 hover:text-brand-900"
              >
                ← Volver al temario
              </Link>
            </div>
          </Container>
        </section>
      </>
    );
  }

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
          <h2 className="text-2xl font-bold text-brand-900">Batería de preguntas ilimitada</h2>
          <p className="mt-1 text-sm text-brand-700">
            Cada vez que entras se genera un test nuevo. En cuanto acabes
            uno, ya tienes otro distinto esperándote. Responde todas y pulsa
            &ldquo;Corregir test&rdquo; para ver tu resultado.
          </p>
          <div className="mt-6">
            <QuizRunner temaSlug={tema.slug} preguntas={preguntas} tamanoTest={15} />
          </div>
        </Container>
      </section>
    </>
  );
}
