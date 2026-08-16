import type { Esquema } from "@/lib/temaContenido";
import { esquema as codigoCivilPersonaCapacidad } from "./codigo-civil-persona-capacidad";
import { esquema as tribunalConstitucional } from "./tribunal-constitucional";
import { esquema as defensorDelPueblo } from "./defensor-del-pueblo";
import { esquema as estadosAlarmaExcepcionSitio } from "./estados-alarma-excepcion-sitio";
import { esquema as fiscaliaEuropea } from "./fiscalia-europea";
import { esquema as estatutoBasicoEmpleadoPublico } from "./estatuto-basico-empleado-publico";
import { esquema as estructuraMinisterioInterior } from "./estructura-ministerio-interior";

// Igual que con las preguntas: los temas sin entrada aquí muestran el aviso
// de "próximamente disponible" en la página del tema.
const registroEsquemas: Record<string, Esquema> = {
  "codigo-civil-persona-capacidad": codigoCivilPersonaCapacidad,
  "tribunal-constitucional": tribunalConstitucional,
  "defensor-del-pueblo": defensorDelPueblo,
  "estados-alarma-excepcion-sitio": estadosAlarmaExcepcionSitio,
  "fiscalia-europea": fiscaliaEuropea,
  "estatuto-basico-empleado-publico": estatutoBasicoEmpleadoPublico,
  "estructura-ministerio-interior": estructuraMinisterioInterior,
};

export function getEsquemaByTema(temaSlug: string): Esquema | undefined {
  return registroEsquemas[temaSlug];
}
