import type { Pregunta } from "@/lib/preguntas";
import { preguntas as constitucionEspanola1978 } from "@/content/preguntas/constitucion-espanola-1978";
import { preguntas as leyOrganicaPoliciaNacional } from "@/content/preguntas/ley-organica-policia-nacional";

export type RecursoGratis = {
  slug: string;
  titulo: string;
  descripcion: string;
  preguntas: Pregunta[];
};

// Muestra gratuita: un extracto real (no el banco completo) de dos temas del
// temario, para que cualquier persona pueda probar el formato de test y la
// autocorrección sin necesidad de darse de alta. El resto de preguntas de
// estos temas, y el resto de temas, están en la zona de alumnos.
export const recursosGratis: RecursoGratis[] = [
  {
    slug: "constitucion-espanola-basico",
    titulo: "Test gratis: Constitución Española (nivel básico)",
    descripcion:
      "8 preguntas de muestra sobre la Constitución de 1978, con corrección y explicación al instante.",
    preguntas: constitucionEspanola1978.slice(0, 8),
  },
  {
    slug: "ley-organica-policia-nacional-basico",
    titulo: "Test gratis: Ley Orgánica de la Policía Nacional",
    descripcion:
      "8 preguntas de muestra sobre la Ley Orgánica 9/2015, con corrección y explicación al instante.",
    preguntas: leyOrganicaPoliciaNacional.slice(0, 8),
  },
];

export function getRecursoGratisBySlug(slug: string): RecursoGratis | undefined {
  return recursosGratis.find((r) => r.slug === slug);
}
