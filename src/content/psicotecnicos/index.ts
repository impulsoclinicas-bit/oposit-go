import type { Pregunta } from "@/lib/preguntas";
import { preguntas as seriesNumericas } from "./series-numericas";
import { preguntas as seriesAlfabeticas } from "./series-alfabeticas";
import { preguntas as sinonimosAntonimos } from "./sinonimos-antonimos";
import { preguntas as analogiasVerbales } from "./analogias-verbales";

const bancoPsicotecnicos: Record<string, Pregunta[]> = {
  "series-numericas": seriesNumericas,
  "series-alfabeticas": seriesAlfabeticas,
  "sinonimos-antonimos": sinonimosAntonimos,
  "analogias-verbales": analogiasVerbales,
};

export function getPreguntasByCategoriaPsicotecnica(slug: string): Pregunta[] {
  return bancoPsicotecnicos[slug] ?? [];
}

export function getTotalPreguntasPsicotecnicos(): number {
  return Object.values(bancoPsicotecnicos).reduce((acc, p) => acc + p.length, 0);
}
