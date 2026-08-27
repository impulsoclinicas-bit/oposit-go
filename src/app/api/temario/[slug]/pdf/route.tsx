import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { getTemaBySlug } from "@/lib/temario";
import { getEsquemaByTema } from "@/content/esquemas";
import { getResumenByTema } from "@/content/resumenes";
import { requireActiveUser } from "@/lib/auth-helpers";
import { isTemaDesbloqueado } from "@/lib/desbloqueo";
import { TemaPdfDocument } from "@/lib/pdf/TemaPdfDocument";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tema = getTemaBySlug(slug);
  if (!tema) {
    return NextResponse.json({ error: "Tema no encontrado" }, { status: 404 });
  }

  const user = await requireActiveUser(`/temario/${slug}`);

  if (!isTemaDesbloqueado(tema.numero, user.subscriptionStartedAt)) {
    return NextResponse.json({ error: "Este tema todavía no está disponible" }, { status: 403 });
  }

  const esquema = getEsquemaByTema(tema.slug);
  const resumen = getResumenByTema(tema.slug);

  if (!esquema && !resumen) {
    return NextResponse.json(
      { error: "El esquema y el resumen de este tema están en preparación" },
      { status: 404 }
    );
  }

  const buffer = await renderToBuffer(
    <TemaPdfDocument
      numero={tema.numero}
      titulo={tema.titulo}
      descripcion={tema.descripcion}
      esquema={esquema}
      resumen={resumen}
    />
  );

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="tema-${tema.numero}-${tema.slug}.pdf"`,
      "Cache-Control": "private, no-store",
    },
  });
}
