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
import { resumen as elDerecho } from "./el-derecho";
import { resumen as laUnionEuropea } from "./la-union-europea";
import { resumen as leyOrganicaProteccionSeguridadCiudadana } from "./ley-organica-proteccion-seguridad-ciudadana";
import { resumen as derechoPenalParteGeneral } from "./derecho-penal-parte-general";
import { resumen as derechoProcesalPenal } from "./derecho-procesal-penal";
import { resumen as proteccionDatosCaracterPersonal } from "./proteccion-datos-caracter-personal";
import { resumen as seguridadPrivadaDisposicionesGenerales } from "./seguridad-privada-disposiciones-generales";
import { resumen as proteccionInfraestructurasCriticas } from "./proteccion-infraestructuras-criticas";
import { resumen as libreCirculacionResidenciaCiudadanosUe } from "./libre-circulacion-residencia-ciudadanos-ue";
import { resumen as infraccionesExtranjeriaRegimenSancionador } from "./infracciones-extranjeria-regimen-sancionador";
import { resumen as laProteccionInternacional } from "./la-proteccion-internacional";

const registroResumenes: Record<string, Resumen> = {
  "la-constitucion-espanola-i": {
    parrafos: [
      ...constitucionEspanola1978.parrafos,
      ...laCorona.parrafos,
      ...lasCortesGenerales.parrafos,
      ...gobiernoAdministracion.parrafos,
      ...tribunalConstitucional.parrafos,
      ...estadosAlarmaExcepcionSitio.parrafos,
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
  "el-derecho": elDerecho,
  "la-union-europea": {
    parrafos: [...laUnionEuropea.parrafos, ...fiscaliaEuropea.parrafos],
  },
  "ley-organica-proteccion-seguridad-ciudadana": leyOrganicaProteccionSeguridadCiudadana,
  "derecho-penal-parte-general": derechoPenalParteGeneral,
  "derecho-procesal-penal": derechoProcesalPenal,
  "proteccion-datos-caracter-personal": proteccionDatosCaracterPersonal,
  "seguridad-privada-disposiciones-generales": seguridadPrivadaDisposicionesGenerales,
  "proteccion-infraestructuras-criticas": proteccionInfraestructurasCriticas,
  "libre-circulacion-residencia-ciudadanos-ue": libreCirculacionResidenciaCiudadanosUe,
  "infracciones-extranjeria-regimen-sancionador": infraccionesExtranjeriaRegimenSancionador,
  "la-proteccion-internacional": laProteccionInternacional,
};

export function getResumenByTema(temaSlug: string): Resumen | undefined {
  return registroResumenes[temaSlug];
}
