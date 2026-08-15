import type { Pregunta } from "@/lib/preguntas";
import { preguntas as constitucionEspanola1978 } from "./constitucion-espanola-1978";
import { preguntas as derechosDeberesFundamentales } from "./derechos-deberes-fundamentales";
import { preguntas as laCorona } from "./la-corona";
import { preguntas as lasCortesGenerales } from "./las-cortes-generales";
import { preguntas as gobiernoAdministracion } from "./gobierno-administracion";

// Banco de preguntas por tema. Los temas que todavía no tienen batería
// redactada simplemente no aparecen aquí: `getPreguntasByTema` devuelve un
// array vacío y la UI muestra el aviso de "en preparación".
const bancoPreguntas: Record<string, Pregunta[]> = {
  "constitucion-espanola-1978": constitucionEspanola1978,
  "derechos-deberes-fundamentales": derechosDeberesFundamentales,
  "la-corona": laCorona,
  "las-cortes-generales": lasCortesGenerales,
  "gobierno-administracion": gobiernoAdministracion,
};

export function getPreguntasByTema(temaSlug: string): Pregunta[] {
  return bancoPreguntas[temaSlug] ?? [];
}
