import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { categoriasPsicotecnicas } from "@/lib/psicotecnicos";
import { requireActiveUser } from "@/lib/auth-helpers";
import { isRectaFinal } from "@/lib/convocatoria";
import { RectaFinalBanner } from "@/components/RectaFinalBanner";

export const metadata: Metadata = {
  title: "Psicotécnicos",
  description:
    "Practica las pruebas psicotécnicas del examen: series numéricas, series de letras, sinónimos y antónimos, y analogías verbales.",
  alternates: { canonical: "/psicotecnicos" },
};

export default async function PsicotecnicosPage() {
  await requireActiveUser("/psicotecnicos");

  return (
    <>
      <PageHero
        eyebrow="Psicotécnicos"
        title="Series, sinónimos y analogías"
        description="El primer ejercicio no es solo temario: también incluye pruebas psicotécnicas. Practica aquí la parte verbal y numérica."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Psicotécnicos", href: "/psicotecnicos" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container className="space-y-6">
          {isRectaFinal() && <RectaFinalBanner />}

          <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-5 text-sm text-brand-800">
            El examen psicotécnico real también incluye ejercicios de
            figuras y matrices (razonamiento espacial). Aquí encontrarás la
            parte verbal y numérica, que es la que más se entrena con
            práctica repetida.
          </div>

          <Link
            href="/psicotecnicos/completo"
            className="block rounded-xl border-2 border-accent-400 bg-brand-950 p-6 text-white shadow-sm transition-colors hover:border-accent-300"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">
              Examen completo
            </p>
            <h2 className="mt-1 text-xl font-bold">Simulacro psicotécnico completo</h2>
            <p className="mt-2 text-sm text-brand-100">
              Mezcla las cuatro categorías en una sola tanda cronometrada,
              igual que el día del examen.
            </p>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2">
            {categoriasPsicotecnicas.map((categoria) => (
              <Link
                key={categoria.slug}
                href={`/psicotecnicos/${categoria.slug}`}
                className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm transition-colors hover:border-brand-400"
              >
                <h2 className="font-bold text-brand-900">{categoria.titulo}</h2>
                <p className="mt-2 text-sm text-brand-700">{categoria.descripcion}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-500">
                  Preguntas ilimitadas
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
