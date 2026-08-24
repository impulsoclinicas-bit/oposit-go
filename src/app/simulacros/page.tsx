import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { getSimulacros } from "@/lib/simulacros";
import { getActiveUser } from "@/lib/auth-helpers";
import { isSimulacroDesbloqueado, getFechaDesbloqueoSimulacro } from "@/lib/desbloqueo";

export const metadata: Metadata = {
  title: "Simulacros",
  description:
    "Simulacros tipo test de la oposición a Policía Nacional, con cronómetro: cada 5 temas se combina un simulacro, y hay un simulacro completo tipo examen oficial.",
  alternates: { canonical: "/simulacros" },
};

export default async function SimulacrosPage() {
  const simulacros = getSimulacros();
  const user = await getActiveUser();

  return (
    <>
      <PageHero
        eyebrow="Simulacros"
        title="Simulacros tipo test, con cronómetro"
        description="Cada 5 temas se genera un simulacro que combina preguntas de todo el tramo, igual que en el examen real, con el mismo cronómetro (30 segundos por pregunta)."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Simulacros", href: "/simulacros" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-8">
          <Link
            href="/simulacros/completo"
            className="block rounded-xl border-2 border-accent-400 bg-brand-950 p-6 text-white shadow-sm transition-colors hover:border-accent-300"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">
              Examen completo
            </p>
            <h2 className="mt-1 text-xl font-bold">Simulacro completo</h2>
            <p className="mt-2 text-sm text-brand-100">
              Hasta 100 preguntas y 50 minutos de cronómetro, igual que el
              examen oficial. Combina todos los temas que ya tengas
              desbloqueados.
            </p>
          </Link>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {simulacros.map((simulacro) => {
              const desbloqueado = user
                ? isSimulacroDesbloqueado(simulacro.numero, user.subscriptionStartedAt)
                : true;
              const fecha =
                user && !desbloqueado && user.subscriptionStartedAt
                  ? getFechaDesbloqueoSimulacro(simulacro.numero, user.subscriptionStartedAt)
                  : null;
              return (
                <li key={simulacro.slug}>
                  <Link
                    href={`/simulacros/${simulacro.slug}`}
                    className="block rounded-xl border border-brand-100 bg-white p-6 shadow-sm transition-colors hover:border-brand-400"
                  >
                    <h2 className="font-bold text-brand-900">{simulacro.titulo}</h2>
                    <p className="mt-2 text-sm text-brand-700">
                      {simulacro.temas.length} temas combinados
                    </p>
                    {user && !desbloqueado && (
                      <p className="mt-1 text-xs font-semibold text-accent-600">
                        🔒 Se desbloquea{" "}
                        {fecha
                          ? `el ${new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(fecha)}`
                          : "próximamente"}
                      </p>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
