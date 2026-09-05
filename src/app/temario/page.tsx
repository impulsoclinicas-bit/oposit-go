import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { bloques, getTemasByBloque } from "@/lib/temario";
import { getActiveUser } from "@/lib/auth-helpers";
import { isTemaDesbloqueado, getFechaDesbloqueoTema } from "@/lib/desbloqueo";

export const metadata: Metadata = {
  title: "Temario",
  description:
    "Temario completo de la oposición a Policía Nacional (Escala Básica) organizado por bloques: jurídico, social y técnico-científico.",
  alternates: { canonical: "/temario" },
};

export default async function TemarioPage() {
  const user = await getActiveUser();

  return (
    <>
      <PageHero
        eyebrow="Temario"
        title="Temario de la oposición a Policía Nacional"
        description="Cada tema incluye batería de preguntas tipo test, esquema y resumen. El contenido se desbloquea por bloques de 5 temas al mes."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Temario", href: "/temario" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-12">
          {bloques.map((bloque) => {
            const temasBloque = getTemasByBloque(bloque.slug);
            return (
              <div key={bloque.slug}>
                <h2 className="text-2xl font-bold text-brand-900">{bloque.nombre}</h2>
                <p className="mt-1 max-w-2xl text-sm text-brand-700">{bloque.descripcion}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {temasBloque.map((tema) => {
                    const desbloqueado = user
                      ? isTemaDesbloqueado(tema.numero, user.subscriptionStartedAt)
                      : true;
                    const fecha =
                      user && !desbloqueado && user.subscriptionStartedAt
                        ? getFechaDesbloqueoTema(tema.numero, user.subscriptionStartedAt)
                        : null;
                    return (
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
                              {tema.titulo}
                            </span>
                            <span className="mt-1 block text-xs text-brand-600">
                              {tema.descripcion}
                            </span>
                            {user && !desbloqueado && (
                              <span className="mt-1 block text-xs font-semibold text-accent-600">
                                🔒 Se desbloquea{" "}
                                {fecha
                                  ? `el ${new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(fecha)}`
                                  : "próximamente"}
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
