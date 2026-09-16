export type CategoriaPsicotecnica = {
  slug: string;
  titulo: string;
  descripcion: string;
};

// Las cinco categorías del primer ejercicio que se entrenan con texto:
// series numéricas y de letras, sinónimos/antónimos, analogías verbales, y
// figuras y matrices (razonamiento espacial), representadas con símbolos
// en vez de imágenes.
export const categoriasPsicotecnicas: CategoriaPsicotecnica[] = [
  {
    slug: "series-numericas",
    titulo: "Series numéricas",
    descripcion:
      "Encuentra el patrón (sumas, multiplicaciones, diferencias crecientes...) y averigua el siguiente número de la serie.",
  },
  {
    slug: "series-alfabeticas",
    titulo: "Series de letras",
    descripcion:
      "Igual que las series numéricas, pero con el alfabeto: identifica el salto entre letras y continúa la serie.",
  },
  {
    slug: "sinonimos-antonimos",
    titulo: "Sinónimos y antónimos",
    descripcion:
      "Agilidad verbal: encuentra la palabra que significa lo mismo (o lo contrario) que la palabra dada.",
  },
  {
    slug: "analogias-verbales",
    titulo: "Analogías verbales",
    descripcion:
      "Completa la relación \"A es a B como C es a...\": el tipo de pregunta más habitual en razonamiento verbal.",
  },
  {
    slug: "figuras-matrices",
    titulo: "Figuras y matrices",
    descripcion:
      "Razonamiento espacial: continúa la serie de figuras que rotan o crecen, o encuentra la figura que completa la matriz 3x3.",
  },
];

export function getCategoriaPsicotecnica(
  slug: string
): CategoriaPsicotecnica | undefined {
  return categoriasPsicotecnicas.find((c) => c.slug === slug);
}

// Tamaño y cronómetro del simulacro psicotécnico completo (mezcla las
// cinco categorías, con contrarreloj, como el examen real).
export const PREGUNTAS_SIMULACRO_PSICOTECNICO = 20;
export const SEGUNDOS_POR_PREGUNTA_PSICOTECNICO = 40;
