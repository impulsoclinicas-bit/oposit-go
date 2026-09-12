import { Tema, getPrimerTemaDeBloque, getTemasByBloque } from "@/lib/temario";
import {
  getNumeroTemasCalendario,
  getPrimerTemaDeEntrada,
  getFechaAperturaTema,
} from "@/lib/curso";

// El temario se reparte con un calendario compartido (ver `curso.ts`): 5
// temas nuevos al mes, iguales para todo el mundo, que nunca se cierran
// una vez abiertos. Pero cada alumno solo tiene acceso, por su
// suscripción, a partir del lote que estuviera vigente cuando se dio de
// alta (o se reactivó tras cancelar) — no hay retroactividad automática.
// Quien se apunta tarde puede comprar el pase de "ponerse al día" para
// acceder también a los temas anteriores a su lote de entrada.

export type AccesoTemario = {
  /** Fecha de alta o de la última reactivación: fija el lote de entrada. */
  subscriptionStartedAt: Date | null;
  /** true si ha comprado el pase de ponerse al día (accede a todo lo anterior a su lote de entrada). */
  catchUpTemarioComprado: boolean;
};

function getTemaEntrada(acceso: AccesoTemario): number {
  if (acceso.catchUpTemarioComprado) return 1;
  if (!acceso.subscriptionStartedAt) return 1;
  return getPrimerTemaDeEntrada(acceso.subscriptionStartedAt);
}

/** Nº de temas que el calendario compartido tiene abiertos hoy (igual para todo el mundo). */
export function getNumeroTemasDesbloqueados(ahora: Date = new Date()): number {
  return getNumeroTemasCalendario(ahora);
}

export function isTemaDesbloqueado(
  numero: number,
  acceso: AccesoTemario,
  ahora: Date = new Date()
): boolean {
  return numero >= getTemaEntrada(acceso) && numero <= getNumeroTemasDesbloqueados(ahora);
}

/**
 * true si el tema ya lo ha abierto el calendario compartido (otros
 * alumnos ya lo tienen), pero este alumno no lo tiene por haberse dado de
 * alta después: se soluciona comprando el pase de ponerse al día, no
 * esperando una fecha.
 */
export function requierePaseParaPonerseAlDia(
  numero: number,
  acceso: AccesoTemario,
  ahora: Date = new Date()
): boolean {
  if (acceso.catchUpTemarioComprado) return false;
  return numero < getTemaEntrada(acceso) && numero <= getNumeroTemasDesbloqueados(ahora);
}

/** Primer día en que un tema concreto pasa a estar disponible en el calendario. */
export function getFechaDesbloqueoTema(numero: number): Date {
  return getFechaAperturaTema(numero);
}

/** Rango de temas [desde, hasta] al que tiene acceso un alumno: para simulacros y plan de estudio. */
export function getRangoTemasAccesibles(
  acceso: AccesoTemario,
  ahora: Date = new Date()
): { desde: number; hasta: number } {
  return { desde: getTemaEntrada(acceso), hasta: getNumeroTemasDesbloqueados(ahora) };
}

/** Nº de temas ya abiertos por el calendario que quedan por delante del lote de entrada del alumno (candidatos al pase de ponerse al día). */
export function getTemasAtrasados(acceso: AccesoTemario, ahora: Date = new Date()): number {
  if (acceso.catchUpTemarioComprado) return 0;
  const entrada = getTemaEntrada({ ...acceso, catchUpTemarioComprado: false });
  return Math.max(0, entrada - 1);
}

/** Un simulacro de bloque está disponible en cuanto el alumno tiene algún tema accesible de ese bloque. */
export function isSimulacroBloqueDesbloqueado(
  bloque: Tema["bloque"],
  acceso: AccesoTemario,
  ahora: Date = new Date()
): boolean {
  return getTemasByBloque(bloque).some((t) => isTemaDesbloqueado(t.numero, acceso, ahora));
}

export function getFechaDesbloqueoSimulacroBloque(bloque: Tema["bloque"]): Date {
  return getFechaAperturaTema(getPrimerTemaDeBloque(bloque).numero);
}
