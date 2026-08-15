import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const token = typeof body?.token === "string" ? body.token : null;
  const password = typeof body?.password === "string" ? body.password : null;

  if (!token || !password || password.length < 8) {
    return NextResponse.json(
      { error: "Token o contraseña inválidos (mínimo 8 caracteres)." },
      { status: 400 }
    );
  }

  const activationToken = await prisma.activationToken.findUnique({
    where: { token },
  });

  if (
    !activationToken ||
    activationToken.usedAt ||
    activationToken.expiresAt < new Date()
  ) {
    return NextResponse.json(
      { error: "El enlace de activación no es válido o ha caducado." },
      { status: 400 }
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.$transaction([
    prisma.user.update({
      where: { id: activationToken.userId },
      data: { passwordHash },
    }),
    prisma.activationToken.update({
      where: { id: activationToken.id },
      data: { usedAt: new Date() },
    }),
  ]);

  return NextResponse.json({ success: true });
}
