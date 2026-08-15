import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export type ActiveUser = {
  id: string;
  email: string;
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
    select: { id: true, email: true, subscriptionStatus: true },
  });
  if (!user || user.subscriptionStatus !== "active") return null;

  return { id: user.id, email: user.email };
}

export async function requireActiveUser(redirectTo: string): Promise<ActiveUser> {
  const user = await getActiveUser();
  if (!user) {
    redirect(`/precios?next=${encodeURIComponent(redirectTo)}`);
  }
  return user;
}
