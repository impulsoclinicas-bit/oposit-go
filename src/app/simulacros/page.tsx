import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { getSimulacros } from "@/lib/simulacros";
import { getTemasByBloque } from "@/lib/temario";
import { getActiveUser } from "@/lib/auth-helpers";
import {
  isSimulacroBloqueDesbloqueado,
  getFechaDesbloqueoSimulacroBloque,
  getNumeroTemasDesbloqueados,
} from "@/lib/desbloqueo";
import { isRectaFinal } from "@/lib/convocatoria";
import { RectaFinalBanner } from "@/components/RectaFinalBanner";

export const metadata: Metadata = {
  title: "Simulacros",
  description:
    "Simulacros tipo test de la oposición a Policía Nacional, con cronómetro: un simulacro por bloque que se regenera con preguntas nuevas cada vez, y un simulacro completo en las condiciones del examen oficial.",
  alternates: { canonical: "/simulacros" },
};

export default async function SimulacrosPage() {
  const simulacros = getSimulacros();
  const user = await getActiveUser();
  const numeroTemasDesbloqueados = user
    ? getNumeroTemasDesbloqueados(user.subscriptionStartedAt)
    : undefined;

  return (
    <>
      <PageHero
        eyebrow="Simulacros"
        title="Simulacros tipo test, con cronómetro"
        description="Un simulacro por bloque (jurídico, social y técnico-científico) que se regenera con una selección nueva de preguntas cada vez que lo haces, a partir de todo lo que ya tienes desbloqueado de ese bloque. Mismas condiciones que el examen real, con idéntico cronómetro (30 segundos por pregunta)."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Simulacros", href: "/simulacros" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-8">
          {isRectaFinal() && <RectaFinalBanner />}

          <Link
            href="/simulacros/completo"
            className="block rounded-xl border-2 border-accent-400 bg-brand-950 p-6 text-white shadow-sm transition-colors hover:border-accent-300"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">
              Examen completo
            </p>
            <h2 className="mt-1 text-xl font-bold">Simulacro completo</h2>
            <p className="mt-2 text-sm text-brand-100">
              Hasta 100 preguntas y 50 minutos de cronómetro, en las
              condiciones del examen oficial. Combina todos los temas ya
              desbloqueados.
            </p>
          </Link>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {simulacros.map((simulacro) => {
              const temasBloque = getTemasByBloque(simulacro.bloque);
              const desbloqueado = user
                ? isSimulacroBloqueDesbloqueado(simulacro.bloque, user.subscriptionStartedAt)
                : true;
              const fecha =
                user && !desbloqueado && user.subscriptionStartedAt
                  ? getFechaDesbloqueoSimulacroBloque(simulacro.bloque, user.subscriptionStartedAt)
                  : null;
              const temasDesbloqueadosBloque = numeroTemasDesbloqueados
                ? temasBloque.filter((t) => t.numero <= numeroTemasDesbloqueados).length
                : temasBloque.length;
              return (
                <li key={simulacro.slug}>
                  <Link
                    href={`/simulacros/${simulacro.slug}`}
                    className="block rounded-xl border border-brand-100 bg-white p-6 shadow-sm transition-colors hover:border-brand-400"
                  >
                    <h2 className="font-bold text-brand-900">{simulacro.titulo}</h2>
                    <p className="mt-2 text-sm text-brand-700">
                      {temasDesbloqueadosBloque} de {temasBloque.length} temas del bloque
                      desbloqueados · se regenera cada vez
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
