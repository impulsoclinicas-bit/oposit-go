import type { Resumen } from "@/lib/temaContenido";
import { resumen as codigoCivilPersonaCapacidad } from "./codigo-civil-persona-capacidad";
import { resumen as tribunalConstitucional } from "./tribunal-constitucional";
import { resumen as defensorDelPueblo } from "./defensor-del-pueblo";
import { resumen as estadosAlarmaExcepcionSitio } from "./estados-alarma-excepcion-sitio";
import { resumen as fiscaliaEuropea } from "./fiscalia-europea";
import { resumen as estatutoBasicoEmpleadoPublico } from "./estatuto-basico-empleado-publico";
import { resumen as estructuraMinisterioInterior } from "./estructura-ministerio-interior";

const registroResumenes: Record<string, Resumen> = {
  "codigo-civil-persona-capacidad": codigoCivilPersonaCapacidad,
  "tribunal-constitucional": tribunalConstitucional,
  "defensor-del-pueblo": defensorDelPueblo,
  "estados-alarma-excepcion-sitio": estadosAlarmaExcepcionSitio,
  "fiscalia-europea": fiscaliaEuropea,
  "estatuto-basico-empleado-publico": estatutoBasicoEmpleadoPublico,
  "estructura-ministerio-interior": estructuraMinisterioInterior,
};

export function getResumenByTema(temaSlug: string): Resumen | undefined {
  return registroResumenes[temaSlug];
}
