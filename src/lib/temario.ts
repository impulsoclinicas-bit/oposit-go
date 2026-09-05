// Estructura del temario de Oposit&go para la oposición a Policía Nacional
// (Escala Básica, categoría Policía): 45 temas en 3 bloques (26 jurídico +
// 11 social + 8 técnico-científico), que es la estructura real del temario
// oficial de esta oposición.
//
// Aviso de fiabilidad: los títulos del Bloque I (Jurídico) están cotejados
// contra el código electrónico del BOE "Normativa para ingreso en la
// Policía Nacional, Escalas Básica y Ejecutiva", que agrupa por materia
// toda la normativa vigente relevante para el ingreso. Ese documento
// confirma el agrupamiento temático de prácticamente todo el Bloque I
// (solo queda marcado con "⚠" el tema introductorio de prevención de
// riesgos laborales, por no corresponder a una ley concreta) y además da el texto
// consolidado de cada ley, que es la fuente que se usa para redactar
// esquemas, resúmenes y preguntas con precisión. Ojo: ese código es una
// recopilación de normativa, no el "Anexo" numerado de una convocatoria
// concreta, así que el desglose exacto en temas (p. ej. si la
// Constitución ocupa uno o dos temas) puede variar ligeramente entre
// academias; se ha mantenido el criterio de división ya usado aquí salvo
// que hubiera un motivo claro para cambiarlo. Los títulos de los Bloques
// II (Social) y III (Técnico-Científico) siguen sin cotejar contra el BOE
// (no son normativa, por lo que no aparecen en ese código) y se apoyan en
// la coincidencia entre varias academias independientes.

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
      "Constitución, organización del Estado, Unión Europea, Policía Nacional, derecho penal y procesal, extranjería y seguridad ciudadana.",
  },
  {
    slug: "social",
    nombre: "Ciencias Sociales",
    descripcion:
      "Derechos humanos, valores sociales, inmigración, seguridad, drogodependencias y lengua española.",
  },
  {
    slug: "tecnico-cientifico",
    nombre: "Materias Técnico-Científicas",
    descripcion:
      "Informática, ciberdelincuencia, armas de fuego, conducción de vehículos prioritarios y prevención de riesgos laborales.",
  },
];

// Cada 5 temas se genera un simulacro tipo test que combina preguntas de
// ese tramo (ver `simulacros.ts`). Con 45 temas salen 9 simulacros por
// bloques (el último de solo 5) más el simulacro completo.
export const TEMAS_POR_SIMULACRO = 5;

export const temas: Tema[] = [
  // ---------- Bloque I — Ciencias Jurídicas (1-26) ----------
  {
    slug: "el-derecho",
    numero: 1,
    bloque: "juridico",
    titulo: "El Derecho",
    descripcion: "Concepto de Derecho, fuentes del ordenamiento jurídico y su aplicación.",
  },
  {
    slug: "la-constitucion-espanola-i",
    numero: 2,
    bloque: "juridico",
    titulo: "La Constitución Española (I)",
    descripcion:
      "Proceso constituyente, estructura y principios de la Constitución, y organización institucional del Estado: la Corona, las Cortes Generales, el Gobierno, el Poder Judicial y el Tribunal Constitucional.",
  },
  {
    slug: "la-constitucion-espanola-ii",
    numero: 3,
    bloque: "juridico",
    titulo: "La Constitución Española (II)",
    descripcion:
      "Título I: derechos y deberes fundamentales, sus garantías y su suspensión, y el Defensor del Pueblo.",
  },
  {
    slug: "la-union-europea",
    numero: 4,
    bloque: "juridico",
    titulo: "La Unión Europea",
    descripcion:
      "Origen y evolución, derecho derivado, instituciones, el TJUE, y la cooperación policial y judicial internacional (Europol, Eurojust y la Fiscalía Europea, LO 9/2021).",
  },
  {
    slug: "organizacion-administracion-general-estado",
    numero: 5,
    bloque: "juridico",
    titulo: "La organización y funcionamiento de la Administración General del Estado",
    descripcion:
      "Principios de organización y funcionamiento, relaciones con la ciudadanía, órganos superiores y directivos, y el Gobierno: composición, organización y funciones.",
  },
  {
    slug: "los-funcionarios-publicos",
    numero: 6,
    bloque: "juridico",
    titulo: "Los funcionarios públicos",
    descripcion: "Concepto y clases, y adquisición y pérdida de la condición de funcionario.",
  },
  {
    slug: "el-ministerio-del-interior",
    numero: 7,
    bloque: "juridico",
    titulo: "El Ministerio del Interior",
    descripcion:
      "Estructura orgánica básica del Ministerio del Interior y la Secretaría de Estado de Seguridad.",
  },
  {
    slug: "la-direccion-general-de-la-policia",
    numero: 8,
    bloque: "juridico",
    titulo: "La Dirección General de la Policía",
    descripcion:
      "Estructura y funciones de la Dirección General de la Policía; régimen del personal, escalas y categorías del Cuerpo Nacional de Policía.",
  },
  {
    slug: "ley-organica-fuerzas-cuerpos-seguridad",
    numero: 9,
    bloque: "juridico",
    titulo: "La Ley Orgánica 2/1986, de Fuerzas y Cuerpos de Seguridad",
    descripcion: "Principios básicos de actuación y disposiciones estatutarias comunes de las FCS.",
  },
  {
    slug: "libre-circulacion-residencia-ciudadanos-ue",
    numero: 10,
    bloque: "juridico",
    titulo: "Entrada, libre circulación y residencia de ciudadanos de la UE y del EEE",
    descripcion: "Régimen de entrada y residencia de ciudadanos comunitarios en España.",
  },
  {
    slug: "infracciones-extranjeria-regimen-sancionador",
    numero: 11,
    bloque: "juridico",
    titulo: "Las infracciones en materia de extranjería y su régimen sancionador",
    descripcion: "Régimen sancionador de la Ley Orgánica de Extranjería.",
  },
  {
    slug: "la-proteccion-internacional",
    numero: 12,
    bloque: "juridico",
    titulo: "La protección internacional",
    descripcion: "Derecho de asilo y protección subsidiaria.",
  },
  {
    slug: "seguridad-privada-disposiciones-generales",
    numero: 13,
    bloque: "juridico",
    titulo: "Disposiciones generales en materia de seguridad privada en España",
    descripcion: "Marco legal de la seguridad privada y su coordinación con la seguridad pública.",
  },
  {
    slug: "ley-organica-proteccion-seguridad-ciudadana",
    numero: 14,
    bloque: "juridico",
    titulo: "La Ley Orgánica 4/2015, de protección de la seguridad ciudadana",
    descripcion: "Actuaciones de las FCS y régimen sancionador de la Ley de Seguridad Ciudadana.",
  },
  {
    slug: "proteccion-infraestructuras-criticas",
    numero: 15,
    bloque: "juridico",
    titulo: "Medidas para la protección de infraestructuras críticas",
    descripcion:
      "Sistema de protección de infraestructuras críticas y Estrategia Nacional de Ciberseguridad.",
  },
  {
    slug: "derecho-penal-parte-general",
    numero: 16,
    bloque: "juridico",
    titulo: "Derecho Penal: Parte General",
    descripcion: "El delito, la pena, autoría y participación, y clasificación de las penas.",
  },
  {
    slug: "derecho-penal-parte-especial",
    numero: 17,
    bloque: "juridico",
    titulo: "Derecho Penal: Parte Especial",
    descripcion: "Delitos en particular del Código Penal.",
  },
  {
    slug: "delitos-patrimonio-orden-socioeconomico",
    numero: 18,
    bloque: "juridico",
    titulo: "Delitos contra el patrimonio y contra el orden socioeconómico",
    descripcion: "Hurto, robo, estafa y demás delitos patrimoniales.",
  },
  {
    slug: "delitos-contra-el-orden-publico",
    numero: 19,
    bloque: "juridico",
    titulo: "Delitos contra el orden público",
    descripcion: "Atentado, resistencia, desórdenes públicos y figuras afines.",
  },
  {
    slug: "delitos-informaticos",
    numero: 20,
    bloque: "juridico",
    titulo: "Delitos informáticos",
    descripcion: "Delitos relacionados con las tecnologías de la información.",
  },
  {
    slug: "derecho-procesal-penal",
    numero: 21,
    bloque: "juridico",
    titulo: "Derecho Procesal Penal",
    descripcion: "Detención, habeas corpus, Ministerio Fiscal y Policía Judicial.",
  },
  {
    slug: "estatuto-victima-del-delito",
    numero: 22,
    bloque: "juridico",
    titulo: "La Ley 4/2015, del Estatuto de la víctima del delito",
    descripcion: "Derechos de las víctimas en el proceso penal.",
  },
  {
    slug: "politicas-igualdad-violencia-genero",
    numero: 23,
    bloque: "juridico",
    titulo: "Políticas de igualdad y contra la violencia de género",
    descripcion:
      "Ley Orgánica 1/2004 de medidas de protección integral contra la violencia de género, Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres, y Ley 4/2023 para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI.",
  },
  {
    slug: "introduccion-prevencion-riesgos-laborales",
    numero: 24,
    bloque: "juridico",
    titulo: "Introducción a la Prevención de Riesgos Laborales",
    descripcion: "⚠ Conceptos básicos de prevención de riesgos laborales.",
  },
  {
    slug: "marco-normativo-prevencion-riesgos-laborales",
    numero: 25,
    bloque: "juridico",
    titulo: "Marco normativo básico en prevención de riesgos laborales",
    descripcion: "Ley 31/1995 y sus reglamentos de desarrollo.",
  },
  {
    slug: "proteccion-datos-caracter-personal",
    numero: 26,
    bloque: "juridico",
    titulo: "La protección de datos de carácter personal",
    descripcion: "Ley Orgánica 3/2018 y Ley Orgánica 7/2021 de protección de datos.",
  },

  // ---------- Bloque II — Ciencias Sociales (27-37) ----------
  {
    slug: "derechos-humanos",
    numero: 27,
    bloque: "social",
    titulo: "Derechos humanos",
    descripcion: "Declaración Universal de los Derechos Humanos y sistemas de protección.",
  },
  {
    slug: "globalizacion-antiglobalizacion",
    numero: 28,
    bloque: "social",
    titulo: "Globalización y antiglobalización",
    descripcion: "Fenómeno de la globalización y sus movimientos críticos.",
  },
  {
    slug: "actitudes-valores-sociales",
    numero: 29,
    bloque: "social",
    titulo: "Actitudes y valores sociales",
    descripcion: "Formación de actitudes y valores en la sociedad actual.",
  },
  {
    slug: "principios-eticos-sociedad-actual",
    numero: 30,
    bloque: "social",
    titulo: "Principios éticos de la sociedad actual",
    descripcion: "Ética social y deontología profesional.",
  },
  {
    slug: "la-inmigracion",
    numero: 31,
    bloque: "social",
    titulo: "La inmigración",
    descripcion: "Fenómeno migratorio en España y su gestión social.",
  },
  {
    slug: "concepto-geografia-humana",
    numero: 32,
    bloque: "social",
    titulo: "Concepto de geografía humana",
    descripcion: "Distribución de la población y el territorio.",
  },
  {
    slug: "la-seguridad",
    numero: 33,
    bloque: "social",
    titulo: "La seguridad",
    descripcion: "Concepto de seguridad ciudadana en la sociedad actual.",
  },
  {
    slug: "drogodependencias",
    numero: 34,
    bloque: "social",
    titulo: "Drogodependencias",
    descripcion: "Tipos de sustancias, efectos y estrategias de prevención.",
  },
  {
    slug: "desarrollo-sostenible",
    numero: 35,
    bloque: "social",
    titulo: "El desarrollo sostenible",
    descripcion: "Concepto de desarrollo sostenible y sus objetivos.",
  },
  {
    slug: "gramatica-lengua-espanola",
    numero: 36,
    bloque: "social",
    titulo: "Gramática de la lengua española",
    descripcion: "Morfología y sintaxis del español.",
  },
  {
    slug: "ortografia-lengua-espanola",
    numero: 37,
    bloque: "social",
    titulo: "Ortografía de la lengua española",
    descripcion: "Normas ortográficas del español.",
  },

  // ---------- Bloque III — Materias Técnico-Científicas (38-45) ----------
  {
    slug: "fundamentos-sistemas-operativos",
    numero: 38,
    bloque: "tecnico-cientifico",
    titulo: "Fundamentos de sistemas operativos",
    descripcion: "Conceptos básicos de sistemas operativos.",
  },
  {
    slug: "redes-informaticas",
    numero: 39,
    bloque: "tecnico-cientifico",
    titulo: "Redes informáticas",
    descripcion: "Fundamentos de redes y comunicaciones.",
  },
  {
    slug: "la-inteligencia",
    numero: 40,
    bloque: "tecnico-cientifico",
    titulo: "Inteligencia",
    descripcion: "Concepto y ciclo de inteligencia aplicado a la seguridad.",
  },
  {
    slug: "ciberdelincuencia-agentes-amenaza",
    numero: 41,
    bloque: "tecnico-cientifico",
    titulo: "Ciberdelincuencia y agentes de la amenaza",
    descripcion: "Tipos de amenazas y actores en el ciberespacio.",
  },
  {
    slug: "origen-armas-de-fuego",
    numero: 42,
    bloque: "tecnico-cientifico",
    titulo: "Origen de las armas de fuego",
    descripcion:
      "Historia y clasificación básica de las armas de fuego, y su régimen legal según el Reglamento de Armas.",
  },
  {
    slug: "el-vehiculo-prioritario",
    numero: 43,
    bloque: "tecnico-cientifico",
    titulo: "El vehículo prioritario",
    descripcion: "Concepto y régimen de circulación de los vehículos prioritarios.",
  },
  {
    slug: "seguridad-conduccion-vehiculos-prioritarios",
    numero: 44,
    bloque: "tecnico-cientifico",
    titulo: "La seguridad en la conducción de vehículos prioritarios",
    descripcion: "Técnicas y normas de seguridad en la conducción prioritaria.",
  },
  {
    slug: "prevencion-riesgos-laborales-seguridad-vial",
    numero: 45,
    bloque: "tecnico-cientifico",
    titulo: "Prevención de riesgos laborales en seguridad vial",
    descripcion: "Riesgos laborales asociados a la actuación en vía pública.",
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
