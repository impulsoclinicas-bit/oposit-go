import Link from "next/link";
import { getDiasHastaExamen } from "@/lib/convocatoria";

/**
 * Se muestra en los últimos dos meses antes del examen (ver
 * `isRectaFinal` en convocatoria.ts). En esta fase ya no toca descubrir
 * temario nuevo, sino coger ritmo de examen: por eso anima a hacer todos
 * los simulacros oficiales que se quiera, en vez de uno de vez en cuando.
 */
export function RectaFinalBanner() {
  const dias = getDiasHastaExamen();

  return (
    <div className="rounded-xl border-2 border-accent-400 bg-brand-950 p-5 text-white shadow-sm sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">
        Recta final · {dias <= 0 ? "el examen es hoy" : `quedan ${dias} días para el examen`}
      </p>
      <p className="mt-2 text-sm text-brand-100">
        En esta fase ya no se trata de descubrir contenido nuevo, sino de
        coger ritmo de examen: practica tantos simulacros oficiales como
        necesites, de temario y de psicotécnicos. Cada simulacro se genera
        de nuevo en cada intento, así que la práctica es realmente
        ilimitada.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/simulacros/completo"
          className="rounded-md bg-accent-400 px-4 py-2 text-sm font-semibold text-brand-950 hover:bg-accent-300"
        >
          Simulacro de temario completo
        </Link>
        <Link
          href="/psicotecnicos/completo"
          className="rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
        >
          Simulacro psicotécnico completo
        </Link>
      </div>
    </div>
  );
}
