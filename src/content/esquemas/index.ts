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
import { esquema as derechoPenalParteEspecial } from "./derecho-penal-parte-especial";
import { esquema as delitosPatrimonioOrdenSocioeconomico } from "./delitos-patrimonio-orden-socioeconomico";
import { esquema as delitosContraElOrdenPublico } from "./delitos-contra-el-orden-publico";
import { esquema as delitosInformaticos } from "./delitos-informaticos";
import { esquema as estatutoVictimaDelDelito } from "./estatuto-victima-del-delito";
import { esquema as politicasIgualdadViolenciaGenero } from "./politicas-igualdad-violencia-genero";
import { esquema as introduccionPrevencionRiesgosLaborales } from "./introduccion-prevencion-riesgos-laborales";
import { esquema as marcoNormativoPrevencionRiesgosLaborales } from "./marco-normativo-prevencion-riesgos-laborales";
import { esquema as origenArmasDeFuego } from "./origen-armas-de-fuego";
import { esquema as elVehiculoPrioritario } from "./el-vehiculo-prioritario";
import { esquema as seguridadConduccionVehiculosPrioritarios } from "./seguridad-conduccion-vehiculos-prioritarios";
import { esquema as derechosHumanos } from "./derechos-humanos";
import { esquema as globalizacionAntiglobalizacion } from "./globalizacion-antiglobalizacion";
import { esquema as actitudesValoresSociales } from "./actitudes-valores-sociales";
import { esquema as principiosEticosSociedadActual } from "./principios-eticos-sociedad-actual";
import { esquema as laInmigracion } from "./la-inmigracion";
import { esquema as conceptoGeografiaHumana } from "./concepto-geografia-humana";
import { esquema as laSeguridad } from "./la-seguridad";
import { esquema as drogodependencias } from "./drogodependencias";
import { esquema as desarrolloSostenible } from "./desarrollo-sostenible";
import { esquema as gramaticaLenguaEspanola } from "./gramatica-lengua-espanola";
import { esquema as ortografiaLenguaEspanola } from "./ortografia-lengua-espanola";
import { esquema as fundamentosSistemasOperativos } from "./fundamentos-sistemas-operativos";
import { esquema as redesInformaticas } from "./redes-informaticas";
import { esquema as laInteligencia } from "./la-inteligencia";
import { esquema as ciberdelincuenciaAgentesAmenaza } from "./ciberdelincuencia-agentes-amenaza";
import { esquema as prevencionRiesgosLaboralesSeguridadVial } from "./prevencion-riesgos-laborales-seguridad-vial";

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
  "derecho-penal-parte-especial": derechoPenalParteEspecial,
  "delitos-patrimonio-orden-socioeconomico": delitosPatrimonioOrdenSocioeconomico,
  "delitos-contra-el-orden-publico": delitosContraElOrdenPublico,
  "delitos-informaticos": delitosInformaticos,
  "estatuto-victima-del-delito": estatutoVictimaDelDelito,
  "politicas-igualdad-violencia-genero": politicasIgualdadViolenciaGenero,
  "introduccion-prevencion-riesgos-laborales": introduccionPrevencionRiesgosLaborales,
  "marco-normativo-prevencion-riesgos-laborales": marcoNormativoPrevencionRiesgosLaborales,
  "origen-armas-de-fuego": origenArmasDeFuego,
  "el-vehiculo-prioritario": elVehiculoPrioritario,
  "seguridad-conduccion-vehiculos-prioritarios": seguridadConduccionVehiculosPrioritarios,
  "derechos-humanos": derechosHumanos,
  "globalizacion-antiglobalizacion": globalizacionAntiglobalizacion,
  "actitudes-valores-sociales": actitudesValoresSociales,
  "principios-eticos-sociedad-actual": principiosEticosSociedadActual,
  "la-inmigracion": laInmigracion,
  "concepto-geografia-humana": conceptoGeografiaHumana,
  "la-seguridad": laSeguridad,
  "drogodependencias": drogodependencias,
  "desarrollo-sostenible": desarrolloSostenible,
  "gramatica-lengua-espanola": gramaticaLenguaEspanola,
  "ortografia-lengua-espanola": ortografiaLenguaEspanola,
  "fundamentos-sistemas-operativos": fundamentosSistemasOperativos,
  "redes-informaticas": redesInformaticas,
  "la-inteligencia": laInteligencia,
  "ciberdelincuencia-agentes-amenaza": ciberdelincuenciaAgentesAmenaza,
  "prevencion-riesgos-laborales-seguridad-vial": prevencionRiesgosLaboralesSeguridadVial,
};

export function getEsquemaByTema(temaSlug: string): Esquema | undefined {
  return registroEsquemas[temaSlug];
}
