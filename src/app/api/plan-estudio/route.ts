import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma, isDbConfigured } from "@/lib/db";
import { generarPlanEstudio } from "@/lib/plan-estudio";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id || !isDbConfigured()) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const examDate =
    typeof body?.examDate === "string" && body.examDate ? body.examDate : null;
  const weeksAvailable = Number.isFinite(body?.weeksAvailable)
    ? Number(body.weeksAvailable)
    : null;
  const hoursPerWeek = Number.isFinite(body?.hoursPerWeek)
    ? Math.min(60, Math.max(1, Number(body.hoursPerWeek)))
    : 6;

  if (!examDate && !weeksAvailable) {
    return NextResponse.json(
      { error: "Indica una fecha de examen o el número de semanas disponibles" },
      { status: 400 }
    );
  }

  const plan = generarPlanEstudio({ examDate, weeksAvailable, hoursPerWeek });

  await prisma.studyPlan.upsert({
    where: { userId: session.user.id },
    create: {
      userId: session.user.id,
      examDate: examDate ? new Date(examDate) : null,
      hoursPerWeek,
      semanas: plan.semanas,
    },
    update: {
      examDate: examDate ? new Date(examDate) : null,
      hoursPerWeek,
      semanas: plan.semanas,
    },
  });

  return NextResponse.json({ plan });
}
