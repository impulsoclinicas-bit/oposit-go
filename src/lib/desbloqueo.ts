import { temas, TEMAS_POR_SIMULACRO } from "@/lib/temario";

// El contenido no se abre entero al suscribirse: se desbloquea por lotes de
// TEMAS_POR_SIMULACRO temas (y su simulacro correspondiente) una vez al mes,
// contando desde `subscriptionStartedAt`. El primer lote (temas 1-N) está
// disponible desde el día de alta, sin esperar un mes.

function mesesTranscurridos(desde: Date, hasta: Date): number {
  let meses =
    (hasta.getFullYear() - desde.getFullYear()) * 12 +
    (hasta.getMonth() - desde.getMonth());
  if (hasta.getDate() < desde.getDate()) meses -= 1;
  return Math.max(0, meses);
}

/**
 * Nº de temas desbloqueados a día de hoy. Si no hay fecha de alta
 * registrada (cuentas creadas antes de tener esta función, o entorno sin
 * BD), no se bloquea nada: se prefiere pecar de generoso a romper el
 * acceso de alguien que ya pagaba.
 */
export function getNumeroTemasDesbloqueados(
  subscriptionStartedAt: Date | null,
  ahora: Date = new Date()
): number {
  if (!subscriptionStartedAt) return temas.length;
  const meses = mesesTranscurridos(subscriptionStartedAt, ahora);
  return Math.min(temas.length, (meses + 1) * TEMAS_POR_SIMULACRO);
}

export function isTemaDesbloqueado(
  numero: number,
  subscriptionStartedAt: Date | null,
  ahora: Date = new Date()
): boolean {
  return numero <= getNumeroTemasDesbloqueados(subscriptionStartedAt, ahora);
}

/** Primer día en que un tema concreto pasa a estar disponible. */
export function getFechaDesbloqueoTema(numero: number, subscriptionStartedAt: Date): Date {
  const lote = Math.ceil(numero / TEMAS_POR_SIMULACRO) - 1;
  const fecha = new Date(subscriptionStartedAt);
  fecha.setMonth(fecha.getMonth() + lote);
  return fecha;
}

export function getNumeroSimulacrosDesbloqueados(
  subscriptionStartedAt: Date | null,
  ahora: Date = new Date()
): number {
  return Math.ceil(
    getNumeroTemasDesbloqueados(subscriptionStartedAt, ahora) / TEMAS_POR_SIMULACRO
  );
}

export function isSimulacroDesbloqueado(
  numeroSimulacro: number,
  subscriptionStartedAt: Date | null,
  ahora: Date = new Date()
): boolean {
  return numeroSimulacro <= getNumeroSimulacrosDesbloqueados(subscriptionStartedAt, ahora);
}

export function getFechaDesbloqueoSimulacro(
  numeroSimulacro: number,
  subscriptionStartedAt: Date
): Date {
  const fecha = new Date(subscriptionStartedAt);
  fecha.setMonth(fecha.getMonth() + (numeroSimulacro - 1));
  return fecha;
}
