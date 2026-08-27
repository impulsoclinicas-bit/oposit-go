import type { Resumen } from "@/lib/temaContenido";
import { resumen as constitucionEspanola1978 } from "./constitucion-espanola-1978";
import { resumen as laCorona } from "./la-corona";
import { resumen as lasCortesGenerales } from "./las-cortes-generales";
import { resumen as gobiernoAdministracion } from "./gobierno-administracion";
import { resumen as tribunalConstitucional } from "./tribunal-constitucional";
import { resumen as estadosAlarmaExcepcionSitio } from "./estados-alarma-excepcion-sitio";
import { resumen as fiscaliaEuropea } from "./fiscalia-europea";
import { resumen as derechosDeberesFundamentales } from "./derechos-deberes-fundamentales";
import { resumen as defensorDelPueblo } from "./defensor-del-pueblo";
import { resumen as leyRegimenJuridicoSectorPublico } from "./ley-regimen-juridico-sector-publico";
import { resumen as leyDelGobierno } from "./ley-del-gobierno";
import { resumen as estatutoBasicoEmpleadoPublico } from "./estatuto-basico-empleado-publico";
import { resumen as estructuraMinisterioInterior } from "./estructura-ministerio-interior";
import { resumen as leyOrganicaPoliciaNacional } from "./ley-organica-policia-nacional";
import { resumen as leyOrganicaFuerzasCuerposSeguridad } from "./ley-organica-fuerzas-cuerpos-seguridad";

const registroResumenes: Record<string, Resumen> = {
  "la-constitucion-espanola-i": {
    parrafos: [
      ...constitucionEspanola1978.parrafos,
      ...laCorona.parrafos,
      ...lasCortesGenerales.parrafos,
      ...gobiernoAdministracion.parrafos,
      ...tribunalConstitucional.parrafos,
      ...estadosAlarmaExcepcionSitio.parrafos,
      ...fiscaliaEuropea.parrafos,
    ],
  },
  "la-constitucion-espanola-ii": {
    parrafos: [...derechosDeberesFundamentales.parrafos, ...defensorDelPueblo.parrafos],
  },
  "organizacion-administracion-general-estado": {
    parrafos: [...leyRegimenJuridicoSectorPublico.parrafos, ...leyDelGobierno.parrafos],
  },
  "los-funcionarios-publicos": estatutoBasicoEmpleadoPublico,
  "el-ministerio-del-interior": estructuraMinisterioInterior,
  "la-direccion-general-de-la-policia": leyOrganicaPoliciaNacional,
  "ley-organica-fuerzas-cuerpos-seguridad": leyOrganicaFuerzasCuerposSeguridad,
};

export function getResumenByTema(temaSlug: string): Resumen | undefined {
  return registroResumenes[temaSlug];
}
