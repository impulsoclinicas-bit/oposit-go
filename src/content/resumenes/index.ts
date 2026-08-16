import type { Resumen } from "@/lib/temaContenido";
import { resumen as codigoCivilPersonaCapacidad } from "./codigo-civil-persona-capacidad";
import { resumen as tribunalConstitucional } from "./tribunal-constitucional";
import { resumen as defensorDelPueblo } from "./defensor-del-pueblo";
import { resumen as estadosAlarmaExcepcionSitio } from "./estados-alarma-excepcion-sitio";
import { resumen as fiscaliaEuropea } from "./fiscalia-europea";

const registroResumenes: Record<string, Resumen> = {
  "codigo-civil-persona-capacidad": codigoCivilPersonaCapacidad,
  "tribunal-constitucional": tribunalConstitucional,
  "defensor-del-pueblo": defensorDelPueblo,
  "estados-alarma-excepcion-sitio": estadosAlarmaExcepcionSitio,
  "fiscalia-europea": fiscaliaEuropea,
};

export function getResumenByTema(temaSlug: string): Resumen | undefined {
  return registroResumenes[temaSlug];
}
