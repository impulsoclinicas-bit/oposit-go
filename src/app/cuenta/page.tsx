import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PortalButton } from "@/components/PortalButton";
import { PlanEstudioForm } from "@/components/PlanEstudioForm";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import type { SemanaPlan } from "@/lib/plan-estudio";
import { getNumeroTemasDesbloqueados, getFechaDesbloqueoTema } from "@/lib/desbloqueo";
import { temas } from "@/lib/temario";

export const metadata: Metadata = {
  title: "Mi cuenta",
  alternates: { canonical: "/cuenta" },
  robots: { index: false, follow: false },
};

const ESTADO_LABEL: Record<string, string> = {
  active: "Activa",
  past_due: "Pago pendiente",
  canceled: "Cancelada",
  none: "Sin suscripción",
};

export default async function CuentaPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login?next=/cuenta");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      email: true,
      subscriptionStatus: true,
      currentPeriodEnd: true,
      stripeCustomerId: true,
      subscriptionStartedAt: true,
    },
  });

  const temasDesbloqueados = getNumeroTemasDesbloqueados(user?.subscriptionStartedAt ?? null);
  const siguienteTema = temas.find((t) => t.numero === temasDesbloqueados + 1);
  const fechaSiguienteLote =
    siguienteTema && user?.subscriptionStartedAt
      ? getFechaDesbloqueoTema(siguienteTema.numero, user.subscriptionStartedAt)
      : null;

  const intentos = await prisma.quizAttempt.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  const studyPlan = await prisma.studyPlan.findUnique({
    where: { userId: session.user.id },
  });

  const temasCompletados = new Set(
    (
      await prisma.quizAttempt.findMany({
        where: { userId: session.user.id },
        select: { temaSlug: true },
        distinct: ["temaSlug"],
      })
    ).map((i) => i.temaSlug)
  );

  const semanas = (studyPlan?.semanas as unknown as SemanaPlan[] | undefined) ?? [];

  return (
    <>
      <PageHero
        title="Mi cuenta"
        description={user?.email}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Mi cuenta", href: "/cuenta" },
        ]}
      />

      {semanas.length === 0 && (
        <section className="py-16 sm:py-20">
          <Container className="mx-auto max-w-xl rounded-2xl border border-accent-300 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-brand-900">
              Antes de nada, tu plan de estudio
            </h2>
            <p className="mt-2 text-sm text-brand-700">
              Ya sabemos cuándo es la convocatoria vigente. Con este
              cuestionario te armamos un calendario semana a semana con el
              temario, los simulacros y el repaso final.
            </p>
            <div className="mt-6 text-left">
              <PlanEstudioForm tienePlan={false} />
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-brand-900">Suscripción</h2>
            <p className="mt-2 text-sm text-brand-700">
              Estado:{" "}
              <span className="font-semibold text-brand-900">
                {ESTADO_LABEL[user?.subscriptionStatus ?? "none"]}
              </span>
            </p>
            {user?.currentPeriodEnd && (
              <p className="mt-1 text-sm text-brand-700">
                Próxima renovación:{" "}
                {new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
                  user.currentPeriodEnd
                )}
              </p>
            )}
            {user?.subscriptionStatus === "active" && (
              <div className="mt-4 rounded-md bg-brand-50 p-3 text-sm text-brand-800">
                <p>
                  Temario desbloqueado:{" "}
                  <span className="font-semibold">
                    {temasDesbloqueados} de {temas.length} temas
                  </span>
                </p>
                {siguienteTema && fechaSiguienteLote && (
                  <p className="mt-1 text-xs text-brand-600">
                    El siguiente lote (temas {siguienteTema.numero}-
                    {Math.min(siguienteTema.numero + 4, temas.length)}) se
                    abre el{" "}
                    {new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
                      fechaSiguienteLote
                    )}
                    .
                  </p>
                )}
              </div>
            )}
            <div className="mt-4">
              {user?.stripeCustomerId ? (
                <PortalButton />
              ) : (
                <Link
                  href="/precios"
                  className="rounded-md bg-accent-500 px-4 py-2 text-sm font-semibold text-brand-950 hover:bg-accent-400"
                >
                  Suscribirme
                </Link>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-brand-900">Últimos resultados</h2>
            {intentos.length === 0 ? (
              <p className="mt-2 text-sm text-brand-700">
                Todavía no has hecho ningún test.{" "}
                <Link href="/temario" className="font-semibold underline">
                  Empieza por el temario
                </Link>
                .
              </p>
            ) : (
              <ul className="mt-3 space-y-2 text-sm">
                {intentos.map((intento) => (
                  <li
                    key={intento.id}
                    className="flex items-center justify-between rounded-md bg-brand-50 px-3 py-2"
                  >
                    <span className="text-brand-800">{intento.temaSlug}</span>
                    <span className="font-semibold text-brand-900">
                      {intento.score}/{intento.total}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      {semanas.length > 0 && (
      <section className="pb-16 sm:pb-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm lg:sticky lg:top-20 lg:self-start">
            <h2 className="font-bold text-brand-900">Tu plan de estudio</h2>
            <p className="mt-2 text-sm text-brand-700">
              ¿Cambian tus horas disponibles? Vuelve a responder el
              cuestionario y regeneramos el calendario.
            </p>
            <div className="mt-4">
              <PlanEstudioForm tienePlan />
            </div>
          </div>

          <div>
              <ol className="space-y-4">
                {semanas.map((semana) => (
                  <li
                    key={semana.numero}
                    className={`rounded-xl border p-5 shadow-sm ${
                      semana.tipo === "repaso"
                        ? "border-accent-300 bg-accent-50"
                        : "border-brand-200 bg-white"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-bold text-brand-900">
                        Semana {semana.numero}
                        {semana.tipo === "repaso" && " · Repaso"}
                      </h3>
                    </div>

                    {semana.temas.length > 0 && (
                      <ul className="mt-3 space-y-1.5 text-sm">
                        {semana.temas.map((tema) => {
                          const hecho = temasCompletados.has(tema.slug);
                          return (
                            <li key={tema.slug} className="flex items-center gap-2">
                              <span
                                aria-hidden="true"
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                                  hecho
                                    ? "bg-success-500 text-white"
                                    : "border border-brand-300 text-transparent"
                                }`}
                              >
                                ✓
                              </span>
                              <Link
                                href={`/temario/${tema.slug}`}
                                className="text-brand-800 hover:underline"
                              >
                                Tema {tema.numero}. {tema.titulo}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {semana.simulacroSlug && (
                      <p className="mt-3 text-sm text-brand-700">
                        Cierra la semana con{" "}
                        <Link
                          href={`/simulacros/${semana.simulacroSlug}`}
                          className="font-semibold text-brand-900 underline"
                        >
                          {semana.simulacroTitulo}
                        </Link>
                        .
                      </p>
                    )}

                    {semana.tipo === "repaso" && !semana.simulacroSlug && (
                      <p className="mt-3 text-sm text-brand-800">
                        {semana.simulacroTitulo}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
          </div>
        </Container>
      </section>
      )}
    </>
  );
}
