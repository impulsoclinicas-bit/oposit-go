import { temas, Tema, TEMAS_POR_SIMULACRO } from "@/lib/temario";
import { getPreguntasByTema } from "@/content/preguntas";
import { Pregunta } from "@/lib/preguntas";

export type Simulacro = {
  slug: string;
  numero: number;
  titulo: string;
  temas: Tema[];
};

// Preguntas por tema que entran en el simulacro combinado (el resto de la
// batería de cada tema queda solo para practicar tema a tema).
const PREGUNTAS_POR_TEMA_EN_SIMULACRO = 6;

export function getSimulacros(): Simulacro[] {
  const ordenados = [...temas].sort((a, b) => a.numero - b.numero);
  const grupos: Simulacro[] = [];

  for (let i = 0; i < ordenados.length; i += TEMAS_POR_SIMULACRO) {
    const grupo = ordenados.slice(i, i + TEMAS_POR_SIMULACRO);
    const numero = grupos.length + 1;
    grupos.push({
      slug: `simulacro-${numero}`,
      numero,
      titulo: `Simulacro ${numero} · temas ${grupo[0].numero}-${grupo[grupo.length - 1].numero}`,
      temas: grupo,
    });
  }

  return grupos;
}

export function getSimulacroBySlug(slug: string): Simulacro | undefined {
  return getSimulacros().find((s) => s.slug === slug);
}

export function getPreguntasSimulacro(simulacro: Simulacro): Pregunta[] {
  return simulacro.temas.flatMap((tema) =>
    getPreguntasByTema(tema.slug).slice(0, PREGUNTAS_POR_TEMA_EN_SIMULACRO)
  );
}

// Simulacro completo: como el examen real, hasta 100 preguntas repartidas
// entre todos los temas ya desbloqueados (no hace falta esperar a tener
// el temario entero para poder hacer un examen completo; simplemente
// crece según se van abriendo más temas).
export const PREGUNTAS_SIMULACRO_COMPLETO = 100;

export function getPreguntasSimulacroCompleto(numeroTemasDesbloqueados: number): Pregunta[] {
  const temasDisponibles = [...temas]
    .filter((t) => t.numero <= numeroTemasDesbloqueados)
    .sort((a, b) => a.numero - b.numero);
  return temasDisponibles.flatMap((tema) => getPreguntasByTema(tema.slug));
}
