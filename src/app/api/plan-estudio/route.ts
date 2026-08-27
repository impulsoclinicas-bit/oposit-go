import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma, isDbConfigured } from "@/lib/db";
import { generarPlanEstudio, ObjetivoPlan } from "@/lib/plan-estudio";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id || !isDbConfigured()) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const objetivo: ObjetivoPlan =
    body?.objetivo === "con-calma" ? "con-calma" : "convocatoria-actual";
  const hoursPerWeek = Number.isFinite(body?.hoursPerWeek)
    ? Math.min(60, Math.max(1, Number(body.hoursPerWeek)))
    : 6;

  const plan = generarPlanEstudio({ objetivo, hoursPerWeek });

  await prisma.studyPlan.upsert({
    where: { userId: session.user.id },
    create: {
      userId: session.user.id,
      examDate: plan.examDate ? new Date(plan.examDate) : null,
      hoursPerWeek,
      semanas: plan.semanas,
    },
    update: {
      examDate: plan.examDate ? new Date(plan.examDate) : null,
      hoursPerWeek,
      semanas: plan.semanas,
    },
  });

  return NextResponse.json({ plan });
}
