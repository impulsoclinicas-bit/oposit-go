import { temas, Tema, TEMAS_POR_SIMULACRO } from "@/lib/temario";
import { getSimulacros } from "@/lib/simulacros";
import { FECHA_EXAMEN_OFICIAL } from "@/lib/convocatoria";

export type SemanaPlan = {
  numero: number;
  tipo: "estudio" | "repaso";
  temas: Tema[];
  simulacroSlug?: string;
  simulacroTitulo?: string;
  /** En semanas de repaso: nº de simulacros completos (examen oficial) recomendados esa semana. */
  simulacrosCompletosSemana?: number;
};

// En la recta final (últimas semanas de repaso), en vez de una sola
// autoevaluación por bloque se recomienda entrenar el ritmo del examen
// real: repetir el simulacro completo varias veces por semana.
const SIMULACROS_COMPLETOS_POR_SEMANA_REPASO = 2;

export type ObjetivoPlan = "convocatoria-actual" | "con-calma";

export type PlanEstudio = {
  semanas: SemanaPlan[];
  weeksAvailable: number;
  hoursPerWeek: number;
  examDate: string | null;
  generadoEn: string;
};

const MIN_SEMANAS = 4;
const MAX_SEMANAS = 52;
// Horizonte por defecto para quien prefiere prepararse con calma en vez de
// apurar la convocatoria vigente.
const SEMANAS_CON_CALMA = 24;

function semanasHastaFecha(fecha: Date): number {
  const hoy = new Date();
  const dias = Math.ceil((fecha.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
  const semanas = Math.ceil(dias / 7);
  return Math.min(MAX_SEMANAS, Math.max(MIN_SEMANAS, semanas));
}

export function generarPlanEstudio(input: {
  objetivo: ObjetivoPlan;
  hoursPerWeek: number;
  /** Primer tema a partir del cual planificar (su lote de entrada en el calendario compartido; ver `desbloqueo.ts`). Por defecto 1 (acceso completo). */
  temaEntrada?: number;
}): PlanEstudio {
  const usaConvocatoriaActual = input.objetivo === "convocatoria-actual";
  const weeksAvailable = usaConvocatoriaActual
    ? semanasHastaFecha(FECHA_EXAMEN_OFICIAL)
    : SEMANAS_CON_CALMA;

  const temaEntrada = input.temaEntrada ?? 1;
  const temasOrdenados = temas
    .filter((t) => t.numero >= temaEntrada)
    .sort((a, b) => a.numero - b.numero);
  const simulacros = getSimulacros();

  // Las últimas semanas se dedican solo a repaso general y simulacros
  // completos, nunca menos de una.
  const semanasRepaso = Math.max(1, Math.round(weeksAvailable * 0.15));
  const semanasEstudio = Math.max(1, weeksAvailable - semanasRepaso);

  const temasPorSemana = Math.max(1, Math.ceil(temasOrdenados.length / semanasEstudio));

  const semanas: SemanaPlan[] = [];
  let cursor = 0;

  for (let i = 0; i < semanasEstudio; i++) {
    const temasSemana = temasOrdenados.slice(cursor, cursor + temasPorSemana);
    if (temasSemana.length === 0) break;
    cursor += temasPorSemana;

    // Si esta tanda de temas completa un lote de desbloqueo (o el
    // temario entero), sugerimos hacer el simulacro del bloque
    // correspondiente esa misma semana como autoevaluación.
    const ultimoTema = temasSemana[temasSemana.length - 1];
    const cierraLote =
      ultimoTema.numero % TEMAS_POR_SIMULACRO === 0 || ultimoTema.numero === temas.length;
    const simulacroDisponible = cierraLote
      ? simulacros.find((s) => s.bloque === ultimoTema.bloque)
      : undefined;

    semanas.push({
      numero: semanas.length + 1,
      tipo: "estudio",
      temas: temasSemana,
      simulacroSlug: simulacroDisponible?.slug,
      simulacroTitulo: simulacroDisponible?.titulo,
    });
  }

  // Fase de repaso: se vuelve a recorrer todo el temario accesible desde
  // el principio (no hay temas nuevos que dar), pero cada semana repasa
  // más temas que la anterior — recalculado según las semanas que
  // quedan hasta el examen — para intensificar el repaso cuanto más
  // cerca esté la convocatoria. En paralelo, cada semana de repaso
  // recomienda hacer el simulacro completo (examen oficial) varias veces,
  // en vez de un único simulacro por bloque. Si se acaba generando un
  // plan nuevo tras pasar la convocatoria (para la siguiente), esta fase
  // no aparece: se vuelve a partir de cero con el ritmo normal de estudio.
  let repasoCursor = 0;
  for (let i = 0; i < semanasRepaso; i++) {
    const semanasRepasoRestantes = semanasRepaso - i;
    const temasRepasoSemana: Tema[] = [];
    if (temasOrdenados.length > 0) {
      const temasEstaSemana = Math.max(
        1,
        Math.ceil(temasOrdenados.length / semanasRepasoRestantes)
      );
      for (let k = 0; k < temasEstaSemana; k++) {
        temasRepasoSemana.push(temasOrdenados[repasoCursor % temasOrdenados.length]);
        repasoCursor++;
      }
    }

    const simulacro = simulacros[i % simulacros.length];
    const esUltima = i === semanasRepaso - 1;
    semanas.push({
      numero: semanas.length + 1,
      tipo: "repaso",
      temas: temasRepasoSemana,
      simulacroSlug: esUltima ? undefined : simulacro?.slug,
      simulacroTitulo: esUltima
        ? "Repaso final de todos los bloques + simulacros que peor te hayan salido"
        : simulacro?.titulo,
      simulacrosCompletosSemana: SIMULACROS_COMPLETOS_POR_SEMANA_REPASO,
    });
  }

  return {
    semanas,
    weeksAvailable,
    hoursPerWeek: input.hoursPerWeek,
    examDate: usaConvocatoriaActual ? FECHA_EXAMEN_OFICIAL.toISOString() : null,
    generadoEn: new Date().toISOString(),
  };
}
