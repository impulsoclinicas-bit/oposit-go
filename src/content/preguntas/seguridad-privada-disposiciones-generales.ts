import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "sp-01",
    enunciado: "¿Qué ley regula actualmente la seguridad privada en España?",
    opciones: [
      "La Ley 23/1992",
      "La Ley 5/2014, de 4 de abril, de Seguridad Privada",
      "La Ley Orgánica 4/2015",
      "El Real Decreto 2364/1994",
    ],
    correcta: 1,
    explicacion:
      "La Ley 5/2014, de 4 de abril, de Seguridad Privada, sustituyó a la anterior Ley 23/1992 y regula la prestación de actividades y servicios de seguridad privada, que tienen la consideración de complementarios y subordinados respecto de la seguridad pública (art. 1).",
  },
  {
    id: "sp-02",
    enunciado: "Según el artículo 2.1 de la Ley 5/2014, ¿cómo se define la seguridad privada?",
    opciones: [
      "Como una función exclusiva de las Fuerzas y Cuerpos de Seguridad",
      "Como el conjunto de actividades, servicios, funciones y medidas de seguridad prestadas por empresas de seguridad, despachos de detectives y personal de seguridad privada para proteger personas y bienes",
      "Como un servicio público gratuito prestado por el Estado",
      "Como la actividad exclusiva de vigilancia en edificios oficiales",
    ],
    correcta: 1,
    explicacion:
      "El art. 2.1 define la seguridad privada como el conjunto de actividades, servicios, funciones y medidas de seguridad adoptadas por personas físicas o jurídicas, realizadas por empresas de seguridad, despachos de detectives y personal de seguridad privada, para proteger personas y bienes.",
  },
  {
    id: "sp-03",
    enunciado: "¿Qué actividades quedan fuera del ámbito de la Ley de Seguridad Privada por tratarse de autoprotección (art. 7)?",
    opciones: [
      "Las que un despacho de detectives realiza para un tercero",
      "Las cautelas o diligencias que los propios interesados adoptan por sí y para sí mismos, sin contraprestación ni servicio a terceros",
      "Cualquier actividad realizada por una empresa de seguridad privada",
      "La vigilancia de edificios públicos",
    ],
    correcta: 1,
    explicacion:
      "El art. 7.1 excluye del ámbito de la ley las actuaciones de autoprotección: las cautelas que los propios interesados adoptan directamente para proteger su entorno personal o patrimonial, sin contraprestación ni prestación de un servicio a terceros.",
  },
  {
    id: "sp-04",
    enunciado: "¿Qué perfiles integran el personal de seguridad privada según el artículo 26.1?",
    opciones: [
      "Solo los vigilantes de seguridad",
      "Vigilantes de seguridad (y vigilantes de explosivos), escoltas privados, guardas rurales (y sus especialidades), jefes de seguridad, directores de seguridad y detectives privados",
      "Únicamente policías en excedencia",
      "Solo el personal de las empresas de seguridad, sin los detectives",
    ],
    correcta: 1,
    explicacion:
      "El art. 26.1 integra en el personal de seguridad privada a los vigilantes de seguridad y su especialidad de vigilantes de explosivos, los escoltas privados, los guardas rurales y sus especialidades de guardas de caza y guardapescas marítimos, los jefes de seguridad, los directores de seguridad y los detectives privados.",
  },
  {
    id: "sp-05",
    enunciado: "¿A quién corresponde la habilitación del personal de seguridad privada, con carácter general?",
    opciones: [
      "Al Ministerio de Justicia",
      "A la Dirección General de la Policía, excepto la de los guardas rurales y sus especialidades, que corresponde a la Dirección General de la Guardia Civil",
      "A cada comunidad autónoma sin excepción",
      "A las propias empresas de seguridad privada",
    ],
    correcta: 1,
    explicacion:
      "El art. 27.3 atribuye la habilitación de todo el personal de seguridad privada a la Dirección General de la Policía, salvo la de los guardas rurales y sus especialidades, que corresponde a la Dirección General de la Guardia Civil.",
  },
  {
    id: "sp-06",
    enunciado: "¿Cuál de los siguientes es un requisito general para obtener la habilitación como personal de seguridad privada (art. 28.1)?",
    opciones: [
      "Ser licenciado en Derecho",
      "Carecer de antecedentes penales por delitos dolosos",
      "Tener más de 45 años",
      "Haber sido miembro de las Fuerzas Armadas durante al menos 10 años",
    ],
    correcta: 1,
    explicacion:
      "El art. 28.1 exige, entre otros requisitos, ser mayor de edad, poseer la capacidad física y aptitud psicológica necesarias, la formación previa requerida, y carecer de antecedentes penales por delitos dolosos.",
  },
  {
    id: "sp-07",
    enunciado: "¿Pueden los vigilantes de seguridad interrogar a la persona que detienen conforme al artículo 32.1.d)?",
    opciones: [
      "Sí, de forma ilimitada",
      "No podrán proceder al interrogatorio, si bien la anotación de sus datos personales para comunicarlos a las autoridades no se considera interrogatorio",
      "Solo si el detenido lo autoriza expresamente",
      "Sí, pero únicamente sobre su identidad",
    ],
    correcta: 1,
    explicacion:
      "El art. 32.1.d) permite a los vigilantes detener y poner inmediatamente a disposición de las Fuerzas y Cuerpos de Seguridad a los delincuentes, pero no podrán interrogarlos, sin que se considere interrogatorio la anotación de sus datos personales.",
  },
  {
    id: "sp-08",
    enunciado: "¿Qué límite tienen los escoltas privados para impedir o restringir la libre circulación de personas, según el artículo 33.2?",
    opciones: [
      "Pueden hacerlo siempre que lo consideren necesario",
      "Solo pueden hacerlo si resultare imprescindible por una agresión o intento manifiesto de agresión a la persona protegida o a ellos mismos, debiendo poner al detenido a disposición de las Fuerzas y Cuerpos de Seguridad sin interrogarlo",
      "Nunca pueden restringir la libre circulación bajo ninguna circunstancia",
      "Solo con autorización judicial previa en cada caso",
    ],
    correcta: 1,
    explicacion:
      "El art. 33.2 permite a los escoltas impedir o restringir la libre circulación únicamente cuando resulte imprescindible por una agresión o un intento manifiesto de agresión, debiendo poner al detenido inmediatamente a disposición de las Fuerzas y Cuerpos de Seguridad sin interrogatorio.",
  },
  {
    id: "sp-09",
    enunciado: "¿Pueden los detectives privados investigar delitos perseguibles de oficio, según el artículo 37.4?",
    opciones: [
      "Sí, siempre que el cliente lo solicite expresamente",
      "No; deben denunciar inmediatamente ante la autoridad competente cualquier hecho de esa naturaleza que conozcan y poner a su disposición la información obtenida",
      "Sí, pero solo con autorización del Ministerio del Interior",
      "Solo en delitos patrimoniales de escasa cuantía",
    ],
    correcta: 1,
    explicacion:
      "El art. 37.4 prohíbe a los detectives privados investigar delitos perseguibles de oficio, obligándoles a denunciar inmediatamente ante la autoridad competente cualquier hecho de esta naturaleza que llegue a su conocimiento.",
  },
  {
    id: "sp-10",
    enunciado: "¿Cómo clasifica el artículo 56 de la Ley 5/2014 las infracciones en materia de seguridad privada, y en qué plazos prescriben?",
    opciones: [
      "Solo en graves y leves, prescribiendo todas al año",
      "En leves, graves y muy graves, que prescriben a los seis meses, al año y a los dos años, respectivamente",
      "En una única categoría, con plazo único de prescripción de tres años",
      "En administrativas y penales, sin plazo de prescripción",
    ],
    correcta: 1,
    explicacion:
      "El art. 56 clasifica las infracciones en leves, graves y muy graves, con plazos de prescripción de seis meses, un año y dos años respectivamente.",
  },
  {
    id: "sp-11",
    enunciado: "¿Cuál es la cuantía de la multa por infracciones muy graves cometidas por empresas de seguridad privada, según el artículo 61.1?",
    opciones: [
      "De 300 a 3.000 euros",
      "De 3.001 a 30.000 euros",
      "De 30.001 a 600.000 euros",
      "No se prevén multas, solo el cierre de la empresa",
    ],
    correcta: 2,
    explicacion:
      "El art. 61.1.a) fija para las infracciones muy graves de las empresas de seguridad privada una multa de 30.001 a 600.000 euros, pudiendo además imponerse la extinción de la autorización o el cierre de la empresa.",
  },
  {
    id: "sp-12",
    enunciado: "¿A quién corresponde imponer las sanciones por infracciones leves en materia de seguridad privada, en el ámbito de la Administración General del Estado (art. 66.1.e)?",
    opciones: [
      "Al Ministro del Interior",
      "Al Director General de la Policía",
      "A los Delegados y Subdelegados del Gobierno",
      "Al Secretario de Estado de Seguridad",
    ],
    correcta: 2,
    explicacion:
      "El art. 66.1 distribuye la potestad sancionadora: el Ministro del Interior para la extinción de autorizaciones y habilitaciones, el Secretario de Estado de Seguridad para el resto de sanciones por infracciones muy graves, el Director General de la Policía para las graves, y los Delegados y Subdelegados del Gobierno para las leves.",
  },
  {
    id: "sp-13",
    enunciado: "¿Qué órgano gestiona el Registro Nacional de Seguridad Privada, según el artículo 11?",
    opciones: [
      "El Ministerio de Justicia",
      "El Ministerio del Interior",
      "Cada ayuntamiento de forma independiente",
      "El Consejo General del Poder Judicial",
    ],
    correcta: 1,
    explicacion:
      "El art. 11 atribuye al Ministerio del Interior el Registro Nacional de Seguridad Privada, en el que se inscribe de oficio el personal, las empresas de seguridad privada y los despachos de detectives privados, entre otros sujetos.",
  },
  {
    id: "sp-14",
    enunciado: "¿Cuál es la sanción máxima al personal de seguridad privada por infracciones muy graves, según el artículo 62.1?",
    opciones: [
      "Multa de 6.001 a 30.000 euros y extinción de la habilitación",
      "Únicamente un apercibimiento",
      "Multa de 300 a 1.000 euros",
      "Inhabilitación perpetua sin posibilidad de multa",
    ],
    correcta: 0,
    explicacion:
      "El art. 62.1 prevé para las infracciones muy graves del personal una multa de 6.001 a 30.000 euros y la extinción de la habilitación, que impide obtenerla de nuevo por un plazo de entre uno y dos años.",
  },
];
