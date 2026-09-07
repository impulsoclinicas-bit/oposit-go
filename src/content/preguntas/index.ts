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
import { preguntas as libreCirculacionResidenciaCiudadanosUe } from "./libre-circulacion-residencia-ciudadanos-ue";
import { preguntas as infraccionesExtranjeriaRegimenSancionador } from "./infracciones-extranjeria-regimen-sancionador";
import { preguntas as laProteccionInternacional } from "./la-proteccion-internacional";
import { preguntas as derechoPenalParteEspecial } from "./derecho-penal-parte-especial";
import { preguntas as delitosPatrimonioOrdenSocioeconomico } from "./delitos-patrimonio-orden-socioeconomico";
import { preguntas as delitosContraElOrdenPublico } from "./delitos-contra-el-orden-publico";
import { preguntas as delitosInformaticos } from "./delitos-informaticos";
import { preguntas as estatutoVictimaDelDelito } from "./estatuto-victima-del-delito";
import { preguntas as politicasIgualdadViolenciaGenero } from "./politicas-igualdad-violencia-genero";
import { preguntas as introduccionPrevencionRiesgosLaborales } from "./introduccion-prevencion-riesgos-laborales";
import { preguntas as marcoNormativoPrevencionRiesgosLaborales } from "./marco-normativo-prevencion-riesgos-laborales";
import { preguntas as origenArmasDeFuego } from "./origen-armas-de-fuego";
import { preguntas as elVehiculoPrioritario } from "./el-vehiculo-prioritario";
import { preguntas as seguridadConduccionVehiculosPrioritarios } from "./seguridad-conduccion-vehiculos-prioritarios";
import { preguntas as derechosHumanos } from "./derechos-humanos";
import { preguntas as globalizacionAntiglobalizacion } from "./globalizacion-antiglobalizacion";
import { preguntas as actitudesValoresSociales } from "./actitudes-valores-sociales";
import { preguntas as principiosEticosSociedadActual } from "./principios-eticos-sociedad-actual";
import { preguntas as laInmigracion } from "./la-inmigracion";
import { preguntas as conceptoGeografiaHumana } from "./concepto-geografia-humana";
import { preguntas as laSeguridad } from "./la-seguridad";
import { preguntas as drogodependencias } from "./drogodependencias";
import { preguntas as desarrolloSostenible } from "./desarrollo-sostenible";
import { preguntas as gramaticaLenguaEspanola } from "./gramatica-lengua-espanola";
import { preguntas as ortografiaLenguaEspanola } from "./ortografia-lengua-espanola";
import { preguntas as fundamentosSistemasOperativos } from "./fundamentos-sistemas-operativos";
import { preguntas as redesInformaticas } from "./redes-informaticas";
import { preguntas as laInteligencia } from "./la-inteligencia";
import { preguntas as ciberdelincuenciaAgentesAmenaza } from "./ciberdelincuencia-agentes-amenaza";
import { preguntas as prevencionRiesgosLaboralesSeguridadVial } from "./prevencion-riesgos-laborales-seguridad-vial";

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

export function getPreguntasByTema(temaSlug: string): Pregunta[] {
  return bancoPreguntas[temaSlug] ?? [];
}

export function getTotalPreguntasTemario(): number {
  return Object.values(bancoPreguntas).reduce((acc, p) => acc + p.length, 0);
}
