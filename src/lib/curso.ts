import { temas, TEMAS_POR_SIMULACRO } from "@/lib/temario";

// Calendario compartido del temario: TODOS los alumnos activos ven el
// mismo lote de temas en una fecha dada, independientemente de cuándo se
// hayan apuntado. Se actualiza a mano cuando arranca un ciclo nuevo (tras
// cada convocatoria), igual que FECHA_EXAMEN_OFICIAL en `convocatoria.ts`.
export const CURSO_INICIO = new Date("2025-11-01T00:00:00");

const DIAS_MES = 30;
const MS_POR_DIA = 24 * 60 * 60 * 1000;
const NUMERO_LOTES = Math.ceil(temas.length / TEMAS_POR_SIMULACRO);

/** Nº de lote (1-based) vigente en una fecha dada, sin techo todavía. */
function getLoteEnFecha(fecha: Date): number {
  const diasTranscurridos = (fecha.getTime() - CURSO_INICIO.getTime()) / MS_POR_DIA;
  return Math.floor(Math.max(0, diasTranscurridos) / DIAS_MES) + 1;
}

/**
 * Nº de temas que el calendario compartido tiene abiertos hoy: igual para
 * todo el mundo, crece 5 temas al mes y nunca retrocede (una vez abierto un
 * tema, se queda abierto).
 */
export function getNumeroTemasCalendario(ahora: Date = new Date()): number {
  const lote = Math.min(getLoteEnFecha(ahora), NUMERO_LOTES);
  return Math.min(temas.length, lote * TEMAS_POR_SIMULACRO);
}

/**
 * Primer tema al que da acceso el calendario a partir de una fecha de
 * entrada dada (alta o última reactivación): el "lote de entrada" de ese
 * alumno. No da acceso a los temas anteriores a ese lote salvo que compre
 * el pase de ponerse al día.
 */
export function getPrimerTemaDeEntrada(fechaEntrada: Date): number {
  const lote = Math.min(getLoteEnFecha(fechaEntrada), NUMERO_LOTES);
  return Math.max(1, (lote - 1) * TEMAS_POR_SIMULACRO + 1);
}

/** Fecha en la que el calendario compartido abre un tema concreto. */
export function getFechaAperturaTema(numero: number): Date {
  const lote = Math.ceil(numero / TEMAS_POR_SIMULACRO);
  const fecha = new Date(CURSO_INICIO);
  fecha.setDate(fecha.getDate() + (lote - 1) * DIAS_MES);
  return fecha;
}
