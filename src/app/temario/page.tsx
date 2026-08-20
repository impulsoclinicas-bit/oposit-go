import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { GatedBanner } from "@/components/GatedBanner";
import { bloques, getTemasByBloque } from "@/lib/temario";

export const metadata: Metadata = {
  title: "Temario",
  description:
    "Temario completo de la oposición a Policía Nacional (Escala Básica) organizado por bloques: jurídico, social y técnico-científico.",
  alternates: { canonical: "/temario" },
};

export default function TemarioPage() {
  return (
    <>
      <PageHero
        eyebrow="Temario"
        title="Temario de la oposición a Policía Nacional"
        description="Cada tema incluye batería de preguntas tipo test. Los esquemas y resúmenes se van publicando progresivamente."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Temario", href: "/temario" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-12">
          <GatedBanner>
            El listado de temas es público. Para hacer los tests, ver los
            esquemas y los resúmenes de cada tema hace falta ser alumno.
          </GatedBanner>

          {bloques.map((bloque) => {
            const temasBloque = getTemasByBloque(bloque.slug);
            return (
              <div key={bloque.slug}>
                <h2 className="text-2xl font-bold text-brand-900">{bloque.nombre}</h2>
                <p className="mt-1 max-w-2xl text-sm text-brand-700">{bloque.descripcion}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {temasBloque.map((tema) => (
                    <li key={tema.slug}>
                      <Link
                        href={`/temario/${tema.slug}`}
                        className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4 shadow-sm transition-colors hover:border-brand-400"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-800 text-xs font-bold text-white">
                          {tema.numero}
                        </span>
                        <span>
                          <span className="block font-semibold text-brand-900">
                            {tema.titulo} <span aria-hidden="true">🔒</span>
                          </span>
                          <span className="mt-1 block text-xs text-brand-600">
                            {tema.descripcion}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
