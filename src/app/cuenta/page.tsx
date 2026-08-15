import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PortalButton } from "@/components/PortalButton";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

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
    },
  });

  const intentos = await prisma.quizAttempt.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

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
    </>
  );
}
