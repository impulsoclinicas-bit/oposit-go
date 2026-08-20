import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { GatedBanner } from "@/components/GatedBanner";
import { getSimulacros } from "@/lib/simulacros";

export const metadata: Metadata = {
  title: "Simulacros",
  description:
    "Simulacros tipo test de la oposición a Policía Nacional: cada 5 temas se combina un simulacro para practicar como en el examen real.",
  alternates: { canonical: "/simulacros" },
};

export default function SimulacrosPage() {
  const simulacros = getSimulacros();

  return (
    <>
      <PageHero
        eyebrow="Simulacros"
        title="Simulacros tipo test"
        description="Cada 5 temas se genera un simulacro que combina preguntas de todo el tramo, igual que en el examen real."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Simulacros", href: "/simulacros" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-8">
          <GatedBanner>
            Los simulacros combinados son para alumnos. Puedes probar el
            formato gratis en los tests de muestra de{" "}
            <Link href="/recursos" className="font-semibold underline">
              recursos gratuitos
            </Link>
            .
          </GatedBanner>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {simulacros.map((simulacro) => (
              <li key={simulacro.slug}>
                <Link
                  href={`/simulacros/${simulacro.slug}`}
                  className="block rounded-xl border border-brand-100 bg-white p-6 shadow-sm transition-colors hover:border-brand-400"
                >
                  <h2 className="font-bold text-brand-900">
                    {simulacro.titulo} <span aria-hidden="true">🔒</span>
                  </h2>
                  <p className="mt-2 text-sm text-brand-700">
                    {simulacro.temas.length} temas combinados
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
