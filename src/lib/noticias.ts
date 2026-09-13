export type Noticia = {
  fecha: string;
  titulo: string;
  resumen: string;
};

// Hitos de la convocatoria en curso, de más reciente a más antiguo. Se
// actualiza a mano con cada novedad relevante (BOE, portal del aspirante,
// prensa especializada).
export const noticias: Noticia[] = [
  {
    fecha: "27 ago. 2026",
    titulo: "Cierre del plazo de subsanación",
    resumen:
      "Terminó el plazo de 10 días hábiles (14 a 27 de agosto) para subsanar defectos en la lista de admitidos o reclamar contra la de excluidos. La lista definitiva, con la fecha, sede y aula concretas del examen, se confirma en el Portal del Aspirante.",
  },
  {
    fecha: "13 ago. 2026",
    titulo: "Publicada la lista provisional de admitidos y excluidos",
    resumen:
      "La Dirección General de la Policía publicó en el BOE (BOE-A-2026-17632, Resolución de 6 de agosto de 2026) la relación de personas admitidas y excluidas a la Escala Básica. Quien figure como excluido tenía 10 días hábiles desde la publicación para subsanar su instancia.",
  },
  {
    fecha: "12 ago. 2026",
    titulo: "Consulta anticipada en el Portal del Aspirante",
    resumen:
      "Un día antes de la publicación oficial, ya se podía consultar de forma individualizada el estado de cada instancia en el Portal del Aspirante de la Policía Nacional.",
  },
  {
    fecha: "31 jul. 2026",
    titulo: "Cierre del plazo de solicitudes",
    resumen:
      "Terminó el plazo para presentar instancias, abierto desde el 13 de julio.",
  },
  {
    fecha: "10 jul. 2026",
    titulo: "Publicación de la convocatoria en el BOE",
    resumen:
      "Resolución de 7 de julio de 2026 de la Dirección General de la Policía: 2.704 plazas de Escala Básica y bajada del ratio de aptos por plaza a 1,75.",
  },
];
