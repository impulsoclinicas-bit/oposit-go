import type { Pregunta } from "@/lib/preguntas";
import { preguntas as constitucionEspanola1978 } from "./constitucion-espanola-1978";
import { preguntas as laCorona } from "./la-corona";
import { preguntas as lasCortesGenerales } from "./las-cortes-generales";
import { preguntas as gobiernoAdministracion } from "./gobierno-administracion";
import { preguntas as tribunalConstitucional } from "./tribunal-constitucional";
import { preguntas as estadosAlarmaExcepcionSitio } from "./estados-alarma-excepcion-sitio";
import { preguntas as fiscaliaEuropea } from "./fiscalia-europea";
import { preguntas as derechosDeberesFundamentales } from "./derechos-deberes-fundamentales";
import { preguntas as defensorDelPueblo } from "./defensor-del-pueblo";
import { preguntas as leyRegimenJuridicoSectorPublico } from "./ley-regimen-juridico-sector-publico";
import { preguntas as leyDelGobierno } from "./ley-del-gobierno";
import { preguntas as estatutoBasicoEmpleadoPublico } from "./estatuto-basico-empleado-publico";
import { preguntas as estructuraMinisterioInterior } from "./estructura-ministerio-interior";
import { preguntas as leyOrganicaPoliciaNacional } from "./ley-organica-policia-nacional";
import { preguntas as leyOrganicaFuerzasCuerposSeguridad } from "./ley-organica-fuerzas-cuerpos-seguridad";
import { preguntas as elDerecho } from "./el-derecho";
import { preguntas as laUnionEuropea } from "./la-union-europea";
import { preguntas as leyOrganicaProteccionSeguridadCiudadana } from "./ley-organica-proteccion-seguridad-ciudadana";
import { preguntas as derechoPenalParteGeneral } from "./derecho-penal-parte-general";
import { preguntas as derechoProcesalPenal } from "./derecho-procesal-penal";
import { preguntas as proteccionDatosCaracterPersonal } from "./proteccion-datos-caracter-personal";
import { preguntas as seguridadPrivadaDisposicionesGenerales } from "./seguridad-privada-disposiciones-generales";
import { preguntas as proteccionInfraestructurasCriticas } from "./proteccion-infraestructuras-criticas";

// Banco de preguntas por tema. Los temas que todavía no tienen batería
// redactada simplemente no aparecen aquí: `getPreguntasByTema` devuelve un
// array vacío y la UI muestra el aviso de "en preparación".
//
// Varios temas del temario real (45 temas, ver temario.ts) agrupan lo que
// antes eran varios temas más pequeños ya redactados; por eso varios
// bancos se concatenan en un único tema (p. ej. "la-constitucion-espanola-i"
// reúne Constitución + Corona + Cortes + Gobierno + Tribunal Constitucional
// + estados de alarma + Fiscalía Europea).
const bancoPreguntas: Record<string, Pregunta[]> = {
  "la-constitucion-espanola-i": [
    ...constitucionEspanola1978,
    ...laCorona,
    ...lasCortesGenerales,
    ...gobiernoAdministracion,
    ...tribunalConstitucional,
    ...estadosAlarmaExcepcionSitio,
  ],
  "la-constitucion-espanola-ii": [...derechosDeberesFundamentales, ...defensorDelPueblo],
  "organizacion-administracion-general-estado": [
    ...leyRegimenJuridicoSectorPublico,
    ...leyDelGobierno,
  ],
  "los-funcionarios-publicos": estatutoBasicoEmpleadoPublico,
  "el-ministerio-del-interior": estructuraMinisterioInterior,
  "la-direccion-general-de-la-policia": leyOrganicaPoliciaNacional,
  "ley-organica-fuerzas-cuerpos-seguridad": leyOrganicaFuerzasCuerposSeguridad,
  "el-derecho": elDerecho,
  "la-union-europea": [...laUnionEuropea, ...fiscaliaEuropea],
  "ley-organica-proteccion-seguridad-ciudadana": leyOrganicaProteccionSeguridadCiudadana,
  "derecho-penal-parte-general": derechoPenalParteGeneral,
  "derecho-procesal-penal": derechoProcesalPenal,
  "proteccion-datos-caracter-personal": proteccionDatosCaracterPersonal,
  "seguridad-privada-disposiciones-generales": seguridadPrivadaDisposicionesGenerales,
  "proteccion-infraestructuras-criticas": proteccionInfraestructurasCriticas,
};

export function getPreguntasByTema(temaSlug: string): Pregunta[] {
  return bancoPreguntas[temaSlug] ?? [];
}

export function getTotalPreguntasTemario(): number {
  return Object.values(bancoPreguntas).reduce((acc, p) => acc + p.length, 0);
}
