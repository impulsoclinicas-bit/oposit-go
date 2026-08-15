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

  if (!temaSlug || score === null || total === null) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  await prisma.quizAttempt.create({
    data: { userId: session.user.id, temaSlug, score, total },
  });

  return NextResponse.json({ saved: true });
}
