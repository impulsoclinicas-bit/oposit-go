import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { categoriasPsicotecnicas } from "@/lib/psicotecnicos";
import { getPreguntasByCategoriaPsicotecnica } from "@/content/psicotecnicos";
import { requireActiveUser } from "@/lib/auth-helpers";

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
        <Container>
          <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-5 text-sm text-brand-800">
            El examen psicotécnico real también incluye ejercicios de
            figuras y matrices (razonamiento espacial). Aquí encontrarás la
            parte verbal y numérica, que es la que más se entrena con
            práctica repetida.
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {categoriasPsicotecnicas.map((categoria) => {
              const total = getPreguntasByCategoriaPsicotecnica(categoria.slug).length;
              return (
                <Link
                  key={categoria.slug}
                  href={`/psicotecnicos/${categoria.slug}`}
                  className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm transition-colors hover:border-brand-400"
                >
                  <h2 className="font-bold text-brand-900">{categoria.titulo}</h2>
                  <p className="mt-2 text-sm text-brand-700">{categoria.descripcion}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-500">
                    {total} preguntas
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
