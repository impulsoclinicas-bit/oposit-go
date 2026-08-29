// Fecha del primer ejercicio de la convocatoria vigente. Se actualiza a
// mano en cuanto se publique la fecha de la siguiente convocatoria; todo lo
// que dependa de "cuándo es el examen" (como el plan de estudio) lee de
// aquí en vez de pedírselo al alumno, porque como plataforma lo tenemos
// siempre actualizado.
export const FECHA_EXAMEN_OFICIAL = new Date("2026-09-26T00:00:00");

const MS_POR_DIA = 24 * 60 * 60 * 1000;

// En la recta final (últimos dos meses antes del examen) ya no toca
// aprender contenido nuevo, sino coger ritmo de examen: por eso a partir de
// aquí se anima a hacer todos los simulacros oficiales que se quiera, tanto
// de temario como de psicotécnicos, en vez de uno de vez en cuando.
export const DIAS_RECTA_FINAL = 60;

/** Días que faltan para el examen (negativo si ya ha pasado). */
export function getDiasHastaExamen(ahora: Date = new Date()): number {
  return Math.ceil((FECHA_EXAMEN_OFICIAL.getTime() - ahora.getTime()) / MS_POR_DIA);
}

export function isRectaFinal(ahora: Date = new Date()): boolean {
  const dias = getDiasHastaExamen(ahora);
  return dias >= 0 && dias <= DIAS_RECTA_FINAL;
}
