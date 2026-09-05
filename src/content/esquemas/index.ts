import type { Esquema } from "@/lib/temaContenido";
import { esquema as constitucionEspanola1978 } from "./constitucion-espanola-1978";
import { esquema as laCorona } from "./la-corona";
import { esquema as lasCortesGenerales } from "./las-cortes-generales";
import { esquema as gobiernoAdministracion } from "./gobierno-administracion";
import { esquema as tribunalConstitucional } from "./tribunal-constitucional";
import { esquema as estadosAlarmaExcepcionSitio } from "./estados-alarma-excepcion-sitio";
import { esquema as fiscaliaEuropea } from "./fiscalia-europea";
import { esquema as derechosDeberesFundamentales } from "./derechos-deberes-fundamentales";
import { esquema as defensorDelPueblo } from "./defensor-del-pueblo";
import { esquema as leyRegimenJuridicoSectorPublico } from "./ley-regimen-juridico-sector-publico";
import { esquema as leyDelGobierno } from "./ley-del-gobierno";
import { esquema as estatutoBasicoEmpleadoPublico } from "./estatuto-basico-empleado-publico";
import { esquema as estructuraMinisterioInterior } from "./estructura-ministerio-interior";
import { esquema as leyOrganicaPoliciaNacional } from "./ley-organica-policia-nacional";
import { esquema as leyOrganicaFuerzasCuerposSeguridad } from "./ley-organica-fuerzas-cuerpos-seguridad";
import { esquema as elDerecho } from "./el-derecho";
import { esquema as laUnionEuropea } from "./la-union-europea";
import { esquema as leyOrganicaProteccionSeguridadCiudadana } from "./ley-organica-proteccion-seguridad-ciudadana";
import { esquema as derechoPenalParteGeneral } from "./derecho-penal-parte-general";
import { esquema as derechoProcesalPenal } from "./derecho-procesal-penal";
import { esquema as proteccionDatosCaracterPersonal } from "./proteccion-datos-caracter-personal";
import { esquema as seguridadPrivadaDisposicionesGenerales } from "./seguridad-privada-disposiciones-generales";
import { esquema as proteccionInfraestructurasCriticas } from "./proteccion-infraestructuras-criticas";
import { esquema as libreCirculacionResidenciaCiudadanosUe } from "./libre-circulacion-residencia-ciudadanos-ue";
import { esquema as infraccionesExtranjeriaRegimenSancionador } from "./infracciones-extranjeria-regimen-sancionador";
import { esquema as laProteccionInternacional } from "./la-proteccion-internacional";

// Igual que con las preguntas: los temas sin entrada aquí muestran el aviso
// de "próximamente disponible" en la página del tema. Ver el comentario en
// content/preguntas/index.ts sobre por qué varios esquemas se concatenan
// en un único tema del temario real de 45 temas.
const registroEsquemas: Record<string, Esquema> = {
  "la-constitucion-espanola-i": {
    secciones: [
      ...constitucionEspanola1978.secciones,
      ...laCorona.secciones,
      ...lasCortesGenerales.secciones,
      ...gobiernoAdministracion.secciones,
      ...tribunalConstitucional.secciones,
      ...estadosAlarmaExcepcionSitio.secciones,
    ],
  },
  "la-constitucion-espanola-ii": {
    secciones: [...derechosDeberesFundamentales.secciones, ...defensorDelPueblo.secciones],
  },
  "organizacion-administracion-general-estado": {
    secciones: [...leyRegimenJuridicoSectorPublico.secciones, ...leyDelGobierno.secciones],
  },
  "los-funcionarios-publicos": estatutoBasicoEmpleadoPublico,
  "el-ministerio-del-interior": estructuraMinisterioInterior,
  "la-direccion-general-de-la-policia": leyOrganicaPoliciaNacional,
  "ley-organica-fuerzas-cuerpos-seguridad": leyOrganicaFuerzasCuerposSeguridad,
  "el-derecho": elDerecho,
  "la-union-europea": {
    secciones: [...laUnionEuropea.secciones, ...fiscaliaEuropea.secciones],
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

export function getEsquemaByTema(temaSlug: string): Esquema | undefined {
  return registroEsquemas[temaSlug];
}
