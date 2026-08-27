import { temas, TEMAS_POR_SIMULACRO } from "@/lib/temario";
import { FECHA_EXAMEN_OFICIAL } from "@/lib/convocatoria";

// El contenido no se abre entero al suscribirse: se desbloquea por lotes de
// TEMAS_POR_SIMULACRO temas (y su simulacro correspondiente). El primer lote
// está disponible desde el día de alta. El ritmo "normal" es un lote al mes,
// pero si alguien se suscribe cuando ya queda poco para la convocatoria
// vigente, el ritmo se acelera automáticamente para que todo el temario
// esté abierto con margen de repaso antes del examen — nunca al revés.

const DIAS_MES = 30;
const MARGEN_REPASO_DIAS = 21;
const NUMERO_LOTES = Math.ceil(temas.length / TEMAS_POR_SIMULACRO);

const MS_POR_DIA = 24 * 60 * 60 * 1000;

/** Días entre el desbloqueo de un lote y el siguiente, para un alta concreta. */
function intervaloDiasEntreLotes(subscriptionStartedAt: Date): number {
  if (NUMERO_LOTES <= 1) return DIAS_MES;
  const diasHastaExamen =
    (FECHA_EXAMEN_OFICIAL.getTime() - subscriptionStartedAt.getTime()) / MS_POR_DIA;
  const diasDisponibles = diasHastaExamen - MARGEN_REPASO_DIAS;
  if (diasDisponibles <= 0) return 0;
  const intervaloNecesario = diasDisponibles / (NUMERO_LOTES - 1);
  return Math.min(DIAS_MES, Math.max(1, intervaloNecesario));
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
  const intervalo = intervaloDiasEntreLotes(subscriptionStartedAt);
  if (intervalo <= 0) return temas.length;
  const diasTranscurridos = (ahora.getTime() - subscriptionStartedAt.getTime()) / MS_POR_DIA;
  const lotesDesbloqueados = Math.floor(diasTranscurridos / intervalo) + 1;
  return Math.min(temas.length, lotesDesbloqueados * TEMAS_POR_SIMULACRO);
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
  const intervalo = intervaloDiasEntreLotes(subscriptionStartedAt);
  const fecha = new Date(subscriptionStartedAt);
  fecha.setDate(fecha.getDate() + Math.round(lote * intervalo));
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
  const intervalo = intervaloDiasEntreLotes(subscriptionStartedAt);
  const fecha = new Date(subscriptionStartedAt);
  fecha.setDate(fecha.getDate() + Math.round((numeroSimulacro - 1) * intervalo));
  return fecha;
}
