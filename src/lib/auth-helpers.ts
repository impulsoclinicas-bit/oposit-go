import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export type ActiveUser = {
  id: string;
  email: string;
  subscriptionStartedAt: Date | null;
};

/**
 * Subscription status is re-read from the DB (not trusted from the JWT) so a
 * cancellation reflected via the Stripe webhook takes effect immediately,
 * without waiting for the opositor to log in again.
 */
export async function getActiveUser(): Promise<ActiveUser | null> {
  const session = await auth();
  if (!session?.user?.id) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      email: true,
      subscriptionStatus: true,
      subscriptionStartedAt: true,
    },
  });
  if (!user || user.subscriptionStatus !== "active") return null;

  return {
    id: user.id,
    email: user.email,
    subscriptionStartedAt: user.subscriptionStartedAt,
  };
}

export async function requireActiveUser(redirectTo: string): Promise<ActiveUser> {
  const user = await getActiveUser();
  if (!user) {
    redirect(`/precios?next=${encodeURIComponent(redirectTo)}`);
  }
  return user;
}

export type AccesoSimulacros = {
  id: string;
  email: string;
  subscriptionStartedAt: Date | null;
  /** true si el acceso viene de la suscripción mensual (desbloqueo progresivo); false si viene solo del pase de simulacros (todo el temario mezclado, sin progresión). */
  viaSuscripcion: boolean;
};

/**
 * Igual que requireActiveUser, pero también deja pasar a quien solo tiene
 * el pase de simulacros (pago único, sin temario por temas ni
 * esquemas/resúmenes) mientras no haya caducado. Solo debe usarse en las
 * páginas que el pase sí cubre: los simulacros completos de temario y de
 * psicotécnicos.
 */
export async function requireAccesoSimulacros(redirectTo: string): Promise<AccesoSimulacros> {
  const session = await auth();
  if (!session?.user?.id) {
    redirect(`/precios?next=${encodeURIComponent(redirectTo)}`);
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      email: true,
      subscriptionStatus: true,
      subscriptionStartedAt: true,
      paseSimulacrosExpiraEn: true,
    },
  });

  const viaSuscripcion = user?.subscriptionStatus === "active";
  const viaPase = Boolean(user?.paseSimulacrosExpiraEn && user.paseSimulacrosExpiraEn > new Date());

  if (!user || (!viaSuscripcion && !viaPase)) {
    redirect(`/precios?next=${encodeURIComponent(redirectTo)}`);
  }

  return {
    id: user.id,
    email: user.email,
    subscriptionStartedAt: user.subscriptionStartedAt,
    viaSuscripcion,
  };
}
