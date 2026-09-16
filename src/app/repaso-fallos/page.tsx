import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { QuizRunner } from "@/components/QuizRunner";
import { requireActiveUser } from "@/lib/auth-helpers";
import { prisma } from "@/lib/db";
import { getPreguntaPorId } from "@/content/preguntas";
import type { Pregunta } from "@/lib/preguntas";

export const metadata: Metadata = {
  title: "Repasar fallos",
  alternates: { canonical: "/repaso-fallos" },
  robots: { index: false, follow: false },
};

export default async function RepasoFallosPage() {
  const user = await requireActiveUser("/repaso-fallos");

  const falladas = await prisma.preguntaFallada.findMany({
    where: { userId: user.id },
    orderBy: { vecesFallada: "desc" },
  });

  const preguntas: Pregunta[] = falladas
    .map((f) => getPreguntaPorId(f.preguntaId))
    .filter((p): p is Pregunta => Boolean(p));

  return (
    <>
      <PageHero
        eyebrow="Mi cuenta"
        title="Repasar fallos"
        description="Todas las preguntas que has fallado en algún test, del temario o de psicotécnicos. En cuanto la aciertes, desaparece de esta lista."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Mi cuenta", href: "/cuenta" },
          { label: "Repasar fallos", href: "/repaso-fallos" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          {preguntas.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-xl border border-dashed border-brand-300 bg-brand-50 p-8 text-center">
              <p className="text-3xl" aria-hidden="true">🎉</p>
              <p className="mt-2 font-semibold text-brand-900">
                No tienes preguntas pendientes de repasar
              </p>
              <p className="mt-1 text-sm text-brand-700">
                En cuanto falles alguna en un test, aparecerá aquí hasta que la aciertes.
              </p>
              <Link
                href="/cuenta"
                className="mt-4 inline-block text-sm font-semibold text-brand-800 hover:text-brand-900"
              >
                ← Volver a mi cuenta
              </Link>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm text-brand-700">
                {preguntas.length} preguntas por repasar. Responde todas y
                pulsa &ldquo;Corregir test&rdquo;: las que aciertes ahora
                saldrán de esta lista.
              </p>
              <QuizRunner
                temaSlug="repaso-fallos"
                preguntas={preguntas}
                volverHref="/cuenta"
                volverLabel="Volver a mi cuenta"
              />
            </>
          )}
        </Container>
      </section>
    </>
  );
}
