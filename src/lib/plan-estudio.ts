import { temas, Tema } from "@/lib/temario";
import { getSimulacros } from "@/lib/simulacros";

export type SemanaPlan = {
  numero: number;
  tipo: "estudio" | "repaso";
  temas: Tema[];
  simulacroSlug?: string;
  simulacroTitulo?: string;
};

export type PlanEstudio = {
  semanas: SemanaPlan[];
  weeksAvailable: number;
  hoursPerWeek: number;
  examDate: string | null;
  generadoEn: string;
};

const MIN_SEMANAS = 4;
const MAX_SEMANAS = 52;
const SEMANAS_POR_DEFECTO = 16;

export function semanasHastaExamen(examDateISO: string): number {
  const hoy = new Date();
  const examen = new Date(examDateISO);
  const dias = Math.ceil((examen.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
  const semanas = Math.ceil(dias / 7);
  return Math.min(MAX_SEMANAS, Math.max(MIN_SEMANAS, semanas));
}

export function generarPlanEstudio(input: {
  examDate?: string | null;
  weeksAvailable?: number | null;
  hoursPerWeek: number;
}): PlanEstudio {
  const weeksAvailable = input.examDate
    ? semanasHastaExamen(input.examDate)
    : Math.min(
        MAX_SEMANAS,
        Math.max(MIN_SEMANAS, input.weeksAvailable ?? SEMANAS_POR_DEFECTO)
      );

  const temasOrdenados = [...temas].sort((a, b) => a.numero - b.numero);
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

    // Si esta tanda de temas completa (o cruza) un grupo de simulacro,
    // sugerimos hacerlo esa misma semana como autoevaluación.
    const ultimoNumero = temasSemana[temasSemana.length - 1].numero;
    const simulacroDisponible = simulacros.find(
      (s) => s.temas[s.temas.length - 1].numero === ultimoNumero
    );

    semanas.push({
      numero: semanas.length + 1,
      tipo: "estudio",
      temas: temasSemana,
      simulacroSlug: simulacroDisponible?.slug,
      simulacroTitulo: simulacroDisponible?.titulo,
    });
  }

  for (let i = 0; i < semanasRepaso; i++) {
    const simulacro = simulacros[i % simulacros.length];
    const esUltima = i === semanasRepaso - 1;
    semanas.push({
      numero: semanas.length + 1,
      tipo: "repaso",
      temas: [],
      simulacroSlug: esUltima ? undefined : simulacro?.slug,
      simulacroTitulo: esUltima
        ? "Repaso final de todos los bloques + simulacros que peor te hayan salido"
        : simulacro?.titulo,
    });
  }

  return {
    semanas,
    weeksAvailable,
    hoursPerWeek: input.hoursPerWeek,
    examDate: input.examDate ?? null,
    generadoEn: new Date().toISOString(),
  };
}
