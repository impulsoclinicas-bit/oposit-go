export type CategoriaPsicotecnica = {
  slug: string;
  titulo: string;
  descripcion: string;
};

// Las pruebas psicotécnicas del examen real también incluyen ejercicios de
// figuras y matrices (razonamiento espacial), que por su naturaleza gráfica
// no se recogen aquí. Estas categorías cubren la parte verbal y numérica,
// que es la que más peso suele tener y la más entrenable con práctica.
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
];

export function getCategoriaPsicotecnica(
  slug: string
): CategoriaPsicotecnica | undefined {
  return categoriasPsicotecnicas.find((c) => c.slug === slug);
}

// Tamaño y cronómetro del simulacro psicotécnico completo (mezcla las
// cuatro categorías, con contrarreloj, como el examen real).
export const PREGUNTAS_SIMULACRO_PSICOTECNICO = 20;
export const SEGUNDOS_POR_PREGUNTA_PSICOTECNICO = 40;
