import { temas, bloques, Tema } from "@/lib/temario";
import { getPreguntasByTema } from "@/content/preguntas";
import { Pregunta } from "@/lib/preguntas";

export type Simulacro = {
  slug: string;
  bloque: Tema["bloque"];
  nombreBloque: string;
  titulo: string;
};

// Un simulacro por bloque, siempre disponible desde que se desbloquea el
// primer tema de ese bloque (ver `isSimulacroBloqueDesbloqueado` en
// `desbloqueo.ts`). No son huecos fijos: cada vez que se hace, se genera
// una selección nueva al azar entre TODOS los temas ya desbloqueados de
// ese bloque, así que crece según avanza el desbloqueo y nunca se agota.
//
// El tamaño de cada uno reparte, en la misma proporción que el simulacro
// completo (100 preguntas repartidas entre los 45 temas), el peso real de
// cada bloque en el temario: 26 jurídico + 11 social + 8 técnico → 58 + 24
// + 18 = 100.
export const PREGUNTAS_SIMULACRO_BLOQUE: Record<Tema["bloque"], number> = {
  juridico: 58,
  social: 24,
  "tecnico-cientifico": 18,
};

export function getSimulacros(): Simulacro[] {
  return bloques.map((bloque) => ({
    slug: `simulacro-${bloque.slug}`,
    bloque: bloque.slug,
    nombreBloque: bloque.nombre,
    titulo: `Simulacro · ${bloque.nombre}`,
  }));
}

export function getSimulacroBySlug(slug: string): Simulacro | undefined {
  return getSimulacros().find((s) => s.slug === slug);
}

export function getPreguntasSimulacro(
  simulacro: Simulacro,
  numeroTemasDesbloqueados: number
): Pregunta[] {
  const temasDisponibles = temas
    .filter((t) => t.bloque === simulacro.bloque && t.numero <= numeroTemasDesbloqueados)
    .sort((a, b) => a.numero - b.numero);
  return temasDisponibles.flatMap((tema) => getPreguntasByTema(tema.slug));
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
