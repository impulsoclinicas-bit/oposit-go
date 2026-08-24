import type { Resumen } from "@/lib/temaContenido";
import { resumen as constitucionEspanola1978 } from "./constitucion-espanola-1978";
import { resumen as derechosDeberesFundamentales } from "./derechos-deberes-fundamentales";
import { resumen as laCorona } from "./la-corona";
import { resumen as lasCortesGenerales } from "./las-cortes-generales";
import { resumen as gobiernoAdministracion } from "./gobierno-administracion";
import { resumen as codigoCivilPersonaCapacidad } from "./codigo-civil-persona-capacidad";
import { resumen as tribunalConstitucional } from "./tribunal-constitucional";
import { resumen as defensorDelPueblo } from "./defensor-del-pueblo";
import { resumen as estadosAlarmaExcepcionSitio } from "./estados-alarma-excepcion-sitio";
import { resumen as fiscaliaEuropea } from "./fiscalia-europea";
import { resumen as estatutoBasicoEmpleadoPublico } from "./estatuto-basico-empleado-publico";
import { resumen as estructuraMinisterioInterior } from "./estructura-ministerio-interior";
import { resumen as leyOrganicaFuerzasCuerposSeguridad } from "./ley-organica-fuerzas-cuerpos-seguridad";
import { resumen as leyRegimenJuridicoSectorPublico } from "./ley-regimen-juridico-sector-publico";
import { resumen as leyDelGobierno } from "./ley-del-gobierno";
import { resumen as leyOrganicaPoliciaNacional } from "./ley-organica-policia-nacional";

const registroResumenes: Record<string, Resumen> = {
  "constitucion-espanola-1978": constitucionEspanola1978,
  "derechos-deberes-fundamentales": derechosDeberesFundamentales,
  "la-corona": laCorona,
  "las-cortes-generales": lasCortesGenerales,
  "gobierno-administracion": gobiernoAdministracion,
  "codigo-civil-persona-capacidad": codigoCivilPersonaCapacidad,
  "tribunal-constitucional": tribunalConstitucional,
  "defensor-del-pueblo": defensorDelPueblo,
  "estados-alarma-excepcion-sitio": estadosAlarmaExcepcionSitio,
  "fiscalia-europea": fiscaliaEuropea,
  "estatuto-basico-empleado-publico": estatutoBasicoEmpleadoPublico,
  "estructura-ministerio-interior": estructuraMinisterioInterior,
  "ley-organica-fuerzas-cuerpos-seguridad": leyOrganicaFuerzasCuerposSeguridad,
  "ley-regimen-juridico-sector-publico": leyRegimenJuridicoSectorPublico,
  "ley-del-gobierno": leyDelGobierno,
  "ley-organica-policia-nacional": leyOrganicaPoliciaNacional,
};

export function getResumenByTema(temaSlug: string): Resumen | undefined {
  return registroResumenes[temaSlug];
}
