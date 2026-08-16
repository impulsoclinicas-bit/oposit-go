import type { Pregunta } from "@/lib/preguntas";
import { preguntas as constitucionEspanola1978 } from "./constitucion-espanola-1978";
import { preguntas as derechosDeberesFundamentales } from "./derechos-deberes-fundamentales";
import { preguntas as laCorona } from "./la-corona";
import { preguntas as lasCortesGenerales } from "./las-cortes-generales";
import { preguntas as gobiernoAdministracion } from "./gobierno-administracion";
import { preguntas as codigoCivilPersonaCapacidad } from "./codigo-civil-persona-capacidad";
import { preguntas as tribunalConstitucional } from "./tribunal-constitucional";
import { preguntas as defensorDelPueblo } from "./defensor-del-pueblo";
import { preguntas as estadosAlarmaExcepcionSitio } from "./estados-alarma-excepcion-sitio";
import { preguntas as fiscaliaEuropea } from "./fiscalia-europea";
import { preguntas as estatutoBasicoEmpleadoPublico } from "./estatuto-basico-empleado-publico";
import { preguntas as estructuraMinisterioInterior } from "./estructura-ministerio-interior";
import { preguntas as leyOrganicaFuerzasCuerposSeguridad } from "./ley-organica-fuerzas-cuerpos-seguridad";
import { preguntas as leyRegimenJuridicoSectorPublico } from "./ley-regimen-juridico-sector-publico";
import { preguntas as leyDelGobierno } from "./ley-del-gobierno";

// Banco de preguntas por tema. Los temas que todavía no tienen batería
// redactada simplemente no aparecen aquí: `getPreguntasByTema` devuelve un
// array vacío y la UI muestra el aviso de "en preparación".
const bancoPreguntas: Record<string, Pregunta[]> = {
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
};

export function getPreguntasByTema(temaSlug: string): Pregunta[] {
  return bancoPreguntas[temaSlug] ?? [];
}
