import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { isDbConfigured } from "@/lib/db";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id || !isDbConfigured()) {
    return NextResponse.json({ saved: false });
  }

  const body = await request.json().catch(() => null);
  const temaSlug = typeof body?.temaSlug === "string" ? body.temaSlug : null;
  const score = Number.isFinite(body?.score) ? Number(body.score) : null;
  const total = Number.isFinite(body?.total) ? Number(body.total) : null;
  const preguntasFalladas: string[] = Array.isArray(body?.preguntasFalladas)
    ? body.preguntasFalladas.filter((id: unknown) => typeof id === "string")
    : [];
  const preguntasAcertadas: string[] = Array.isArray(body?.preguntasAcertadas)
    ? body.preguntasAcertadas.filter((id: unknown) => typeof id === "string")
    : [];

  if (!temaSlug || score === null || total === null) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const userId = session.user.id;

  await Promise.all([
    prisma.quizAttempt.create({
      data: { userId, temaSlug, score, total },
    }),
    ...preguntasFalladas.map((preguntaId) =>
      prisma.preguntaFallada.upsert({
        where: { userId_preguntaId: { userId, preguntaId } },
        update: { vecesFallada: { increment: 1 }, ultimaVez: new Date(), temaSlug },
        create: { userId, preguntaId, temaSlug },
      })
    ),
    // Si ahora la acierta, ya no está "floja": se quita de la lista de repaso.
    ...preguntasAcertadas.map((preguntaId) =>
      prisma.preguntaFallada.deleteMany({ where: { userId, preguntaId } })
    ),
  ]);

  return NextResponse.json({ saved: true });
}
