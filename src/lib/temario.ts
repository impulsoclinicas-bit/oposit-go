// Estructura del temario de Oposit&go para la oposición a Policía Nacional
// (Escala Básica). Los bloques y el orden siguen el esquema clásico usado en
// las últimas convocatorias (Jurídico / Social / Técnico-científico), pero
// el listado exacto y numerado de temas debe cotejarse cada año con el temario
// oficial publicado en el BOE de la convocatoria vigente antes de venderlo
// como "temario oficial actualizado". Aquí ya están escritos como contenido
// real y utilizable; añadir o reordenar temas es tan sencillo como editar
// este array.

export type Tema = {
  slug: string;
  numero: number;
  bloque: "juridico" | "social" | "tecnico-cientifico";
  titulo: string;
  descripcion: string;
};

export type Bloque = {
  slug: Tema["bloque"];
  nombre: string;
  descripcion: string;
};

export const bloques: Bloque[] = [
  {
    slug: "juridico",
    nombre: "Ciencias Jurídicas",
    descripcion:
      "Constitución, derechos fundamentales, organización del Estado, Unión Europea y normativa penal y procesal básica.",
  },
  {
    slug: "social",
    nombre: "Ciencias Sociales",
    descripcion:
      "Igualdad, violencia de género, inmigración y extranjería, seguridad vial y actualidad institucional.",
  },
  {
    slug: "tecnico-cientifico",
    nombre: "Materias Técnico-Científicas",
    descripcion:
      "Informática, ofimática, actuación policial y conocimientos científico-técnicos aplicados a la seguridad.",
  },
];

// Cada 5 temas se genera un simulacro tipo test que combina preguntas de
// ese tramo (ver `simulacros.ts`).
export const TEMAS_POR_SIMULACRO = 5;

export const temas: Tema[] = [
  // Bloque I — Jurídico
  {
    slug: "constitucion-espanola-1978",
    numero: 1,
    bloque: "juridico",
    titulo: "La Constitución Española de 1978: estructura y características",
    descripcion:
      "Antecedentes, proceso constituyente, estructura del texto, principios y valores superiores del ordenamiento.",
  },
  {
    slug: "derechos-deberes-fundamentales",
    numero: 2,
    bloque: "juridico",
    titulo: "Derechos y deberes fundamentales. Su garantía y suspensión",
    descripcion:
      "Título I de la Constitución: derechos fundamentales, garantías, el Defensor del Pueblo y los estados de alarma, excepción y sitio.",
  },
  {
    slug: "la-corona",
    numero: 3,
    bloque: "juridico",
    titulo: "La Corona. Funciones constitucionales del Rey",
    descripcion:
      "Sucesión, regencia, tutela y las funciones que la Constitución atribuye a la Jefatura del Estado.",
  },
  {
    slug: "las-cortes-generales",
    numero: 4,
    bloque: "juridico",
    titulo: "Las Cortes Generales: Congreso y Senado",
    descripcion:
      "Composición, elección, funciones legislativas y de control, y el procedimiento de elaboración de las leyes.",
  },
  {
    slug: "gobierno-administracion",
    numero: 5,
    bloque: "juridico",
    titulo: "El Gobierno y la Administración. El Poder Judicial",
    descripcion:
      "Composición y funciones del Gobierno, relaciones con las Cortes, y organización del Poder Judicial y el CGPJ.",
  },
  {
    slug: "organizacion-territorial-estado",
    numero: 6,
    bloque: "juridico",
    titulo: "La organización territorial del Estado. Las Comunidades Autónomas",
    descripcion:
      "Principios de la organización territorial, Estatutos de Autonomía, competencias y la Administración Local.",
  },
  {
    slug: "union-europea",
    numero: 7,
    bloque: "juridico",
    titulo: "La Unión Europea: instituciones y funcionamiento",
    descripcion:
      "Origen y evolución de la UE, principales instituciones (Consejo, Comisión, Parlamento, Tribunal de Justicia) y derecho comunitario.",
  },
  {
    slug: "ley-organica-fuerzas-cuerpos-seguridad",
    numero: 8,
    bloque: "juridico",
    titulo: "Ley Orgánica de Fuerzas y Cuerpos de Seguridad",
    descripcion:
      "Principios básicos de actuación, disposiciones estatutarias comunes y estructura de las FCS.",
  },
  {
    slug: "ley-organica-policia-nacional",
    numero: 9,
    bloque: "juridico",
    titulo: "Régimen del personal de la Policía Nacional",
    descripcion:
      "Estructura, escalas y categorías del Cuerpo Nacional de Policía, derechos y deberes del funcionario policial.",
  },
  {
    slug: "introduccion-derecho-penal",
    numero: 10,
    bloque: "juridico",
    titulo: "Introducción al Derecho Penal: el delito y sus formas",
    descripcion:
      "Concepto de delito, elementos del tipo, autoría y participación, y clasificación de las penas en el Código Penal.",
  },
  {
    slug: "codigo-civil-persona-capacidad",
    numero: 11,
    bloque: "juridico",
    titulo: "Código Civil: la persona, la nacionalidad y la capacidad",
    descripcion:
      "Fuentes del derecho, nacionalidad española, vecindad civil, tutela y guarda de menores, mayoría de edad y medidas de apoyo a personas con discapacidad.",
  },
  {
    slug: "tribunal-constitucional",
    numero: 12,
    bloque: "juridico",
    titulo: "El Tribunal Constitucional",
    descripcion:
      "Composición, competencias, recurso de inconstitucionalidad, recurso de amparo y efectos de las sentencias.",
  },
  {
    slug: "defensor-del-pueblo",
    numero: 13,
    bloque: "juridico",
    titulo: "El Defensor del Pueblo",
    descripcion:
      "Elección, prerrogativas, tramitación de quejas y facultades del alto comisionado de las Cortes Generales.",
  },
  {
    slug: "estados-alarma-excepcion-sitio",
    numero: 14,
    bloque: "juridico",
    titulo: "Los estados de alarma, excepción y sitio",
    descripcion:
      "Supuestos, declaración, duración y efectos de cada uno de los tres estados excepcionales previstos en la Constitución.",
  },
  {
    slug: "fiscalia-europea",
    numero: 15,
    bloque: "juridico",
    titulo: "La Fiscalía Europea en España",
    descripcion:
      "Competencia de los Fiscales europeos delegados, control judicial y procedimiento de investigación de delitos que perjudican los intereses financieros de la UE.",
  },
  {
    slug: "estatuto-basico-empleado-publico",
    numero: 26,
    bloque: "juridico",
    titulo: "El Estatuto Básico del Empleado Público",
    descripcion:
      "Clases de empleados públicos, acceso al empleo público, adquisición y pérdida de la condición de funcionario, situaciones administrativas y régimen de provisión de puestos.",
  },
  {
    slug: "estructura-ministerio-interior",
    numero: 27,
    bloque: "juridico",
    titulo: "Estructura orgánica básica del Ministerio del Interior",
    descripcion:
      "Secretaría de Estado de Seguridad, Dirección General de la Policía y de la Guardia Civil, y demás órganos superiores y directivos del Departamento.",
  },
  {
    slug: "ley-regimen-juridico-sector-publico",
    numero: 28,
    bloque: "juridico",
    titulo: "La Ley de Régimen Jurídico del Sector Público",
    descripcion:
      "Órganos administrativos y competencia, potestad sancionadora, responsabilidad patrimonial, y organización de la Administración General del Estado y su sector público institucional.",
  },
  {
    slug: "ley-del-gobierno",
    numero: 29,
    bloque: "juridico",
    titulo: "La Ley del Gobierno",
    descripcion:
      "Composición y órganos del Gobierno, estatuto de sus miembros, Gobierno en funciones, iniciativa legislativa y control del Gobierno.",
  },

  // Bloque II — Social
  {
    slug: "igualdad-genero",
    numero: 16,
    bloque: "social",
    titulo: "Igualdad efectiva entre mujeres y hombres",
    descripcion:
      "Principios de la Ley Orgánica de Igualdad, políticas públicas y actuación policial con perspectiva de género.",
  },
  {
    slug: "violencia-genero",
    numero: 17,
    bloque: "social",
    titulo: "Violencia de género: marco legal y protocolos de actuación",
    descripcion:
      "Ley Orgánica de medidas de protección integral, órdenes de protección y el sistema VioGén.",
  },
  {
    slug: "extranjeria-inmigracion",
    numero: 18,
    bloque: "social",
    titulo: "Extranjería e inmigración",
    descripcion:
      "Régimen general de entrada y permanencia de extranjeros, situaciones administrativas y competencias policiales.",
  },
  {
    slug: "seguridad-vial",
    numero: 19,
    bloque: "social",
    titulo: "Seguridad vial: normativa básica de tráfico",
    descripcion:
      "Ley sobre Tráfico y Seguridad Vial, señalización, infracciones y actuación en accidentes.",
  },
  {
    slug: "actualidad-institucional",
    numero: 20,
    bloque: "social",
    titulo: "Actualidad institucional y organización del Estado autonómico",
    descripcion:
      "Instituciones del Estado, actualidad política y administrativa relevante para la oposición.",
  },

  // Bloque III — Técnico-científico
  {
    slug: "informatica-basica",
    numero: 21,
    bloque: "tecnico-cientifico",
    titulo: "Informática básica y ofimática",
    descripcion:
      "Fundamentos de hardware y software, redes, seguridad informática y manejo de herramientas ofimáticas.",
  },
  {
    slug: "actuacion-policial-basica",
    numero: 22,
    bloque: "tecnico-cientifico",
    titulo: "Actuación policial básica y atención a la ciudadanía",
    descripcion:
      "Protocolos de identificación, detención, atestados y atención a víctimas.",
  },
  {
    slug: "primeros-auxilios",
    numero: 23,
    bloque: "tecnico-cientifico",
    titulo: "Primeros auxilios aplicados a la actuación policial",
    descripcion:
      "Soporte vital básico, actuación ante emergencias sanitarias frecuentes en el servicio policial.",
  },
  {
    slug: "criminalistica-basica",
    numero: 24,
    bloque: "tecnico-cientifico",
    titulo: "Nociones básicas de criminalística y policía científica",
    descripcion:
      "Inspección ocular técnico-policial, cadena de custodia e introducción a la identificación.",
  },
  {
    slug: "seguridad-privada-ciudadana",
    numero: 25,
    bloque: "tecnico-cientifico",
    titulo: "Seguridad ciudadana y seguridad privada",
    descripcion:
      "Ley de Seguridad Ciudadana, coordinación con seguridad privada y régimen sancionador.",
  },
];

export function getTemaBySlug(slug: string): Tema | undefined {
  return temas.find((t) => t.slug === slug);
}

export function getTemasByBloque(bloque: Tema["bloque"]): Tema[] {
  return temas.filter((t) => t.bloque === bloque).sort((a, b) => a.numero - b.numero);
}

export function getBloque(slug: Tema["bloque"]): Bloque | undefined {
  return bloques.find((b) => b.slug === slug);
}
