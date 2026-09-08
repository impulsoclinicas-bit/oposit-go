import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "pic-01",
    enunciado: "¿Qué ley regula en España la protección de las infraestructuras críticas?",
    opciones: [
      "La Ley 8/2011, de 28 de abril, por la que se establecen medidas para la protección de las infraestructuras críticas",
      "La Ley Orgánica 4/2015",
      "La Ley 5/2014, de Seguridad Privada",
      "La Ley 36/2015, de Seguridad Nacional",
    ],
    correcta: 0,
    explicacion:
      "La Ley 8/2011, de 28 de abril, establece las estrategias y estructuras para dirigir y coordinar las actuaciones de las Administraciones Públicas en materia de protección de infraestructuras críticas frente a atentados terroristas u otras amenazas.",
  },
  {
    id: "pic-02",
    enunciado: "Según el artículo 2 de la Ley 8/2011, ¿qué es una infraestructura crítica?",
    opciones: [
      "Cualquier instalación pública, sin excepción",
      "Una infraestructura estratégica cuyo funcionamiento es indispensable y no permite soluciones alternativas, de modo que su perturbación o destrucción tendría un grave impacto sobre los servicios esenciales",
      "Únicamente las centrales nucleares",
      "Solo las infraestructuras de titularidad militar",
    ],
    correcta: 1,
    explicacion:
      "El art. 2.e) define las infraestructuras críticas como las infraestructuras estratégicas cuyo funcionamiento es indispensable y no permite soluciones alternativas, por lo que su perturbación o destrucción tendría un grave impacto sobre los servicios esenciales.",
  },
  {
    id: "pic-03",
    enunciado: "¿Qué es un servicio esencial según el artículo 2.a) de la Ley 8/2011?",
    opciones: [
      "Cualquier servicio prestado por una empresa privada",
      "El necesario para el mantenimiento de las funciones sociales básicas, la salud, la seguridad, el bienestar social y económico de los ciudadanos, o el eficaz funcionamiento de las Instituciones del Estado y las Administraciones Públicas",
      "Únicamente el suministro eléctrico",
      "Solo los servicios sanitarios públicos",
    ],
    correcta: 1,
    explicacion:
      "El art. 2.a) define el servicio esencial como el necesario para el mantenimiento de las funciones sociales básicas, la salud, la seguridad, el bienestar social y económico de los ciudadanos, o el eficaz funcionamiento de las Instituciones del Estado y las Administraciones Públicas.",
  },
  {
    id: "pic-04",
    enunciado: "¿Qué órgano es responsable del Catálogo Nacional de Infraestructuras Estratégicas?",
    opciones: [
      "El Centro Nacional de Inteligencia, en exclusiva",
      "El Ministerio del Interior, a través de la Secretaría de Estado de Seguridad",
      "Cada comunidad autónoma de forma independiente",
      "El Ministerio de Defensa",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.1 atribuye al Ministerio del Interior, a través de la Secretaría de Estado de Seguridad, la responsabilidad del Catálogo Nacional de Infraestructuras Estratégicas, que incluye las clasificadas como críticas o críticas europeas.",
  },
  {
    id: "pic-05",
    enunciado: "¿Qué órgano ministerial se encarga del impulso, coordinación y supervisión de las actividades de protección de infraestructuras críticas?",
    opciones: [
      "El Centro Nacional para la Protección de las Infraestructuras Críticas (CNPIC)",
      "La Comisión Nacional del Mercado de Valores",
      "La Dirección General de Tráfico",
      "El Instituto Nacional de Ciberseguridad (INCIBE), en exclusiva",
    ],
    correcta: 0,
    explicacion:
      "El art. 7 crea el CNPIC como órgano ministerial, dependiente orgánicamente de la Secretaría de Estado de Seguridad, encargado del impulso, la coordinación y la supervisión de las actividades de protección de las infraestructuras críticas.",
  },
  {
    id: "pic-06",
    enunciado: "¿Qué infraestructuras quedan exceptuadas de la aplicación de la Ley 8/2011, según su artículo 3.2?",
    opciones: [
      "Ninguna, la ley se aplica sin excepciones",
      "Las dependientes del Ministerio de Defensa y de las Fuerzas y Cuerpos de Seguridad, que se rigen por su propia normativa",
      "Solo las infraestructuras de titularidad privada",
      "Las infraestructuras de comunicaciones exclusivamente",
    ],
    correcta: 1,
    explicacion:
      "El art. 3.2 excluye de la aplicación de la ley a las infraestructuras dependientes del Ministerio de Defensa y de las Fuerzas y Cuerpos de Seguridad, que se rigen a efectos de control administrativo por su propia normativa.",
  },
  {
    id: "pic-07",
    enunciado: "¿Qué es un operador crítico, conforme al artículo 2.m) de la Ley 8/2011?",
    opciones: [
      "Cualquier ciudadano que resida cerca de una infraestructura crítica",
      "La entidad u organismo responsable de las inversiones o del funcionamiento diario de una instalación, red, sistema o equipo designado como infraestructura crítica",
      "Únicamente los organismos públicos",
      "Solo las empresas de seguridad privada",
    ],
    correcta: 1,
    explicacion:
      "El art. 2.m) define a los operadores críticos como las entidades u organismos responsables de las inversiones o del funcionamiento diario de una instalación, red, sistema o equipo designado como infraestructura crítica.",
  },
  {
    id: "pic-08",
    enunciado: "Según el artículo 13, ¿qué figura debe designar el operador crítico por cada infraestructura considerada Crítica o Crítica Europea?",
    opciones: [
      "Un Delegado de Seguridad de la Infraestructura Crítica",
      "Un notario",
      "Un interventor del Tribunal de Cuentas",
      "Un representante sindical",
    ],
    correcta: 0,
    explicacion:
      "El art. 13.1.f) obliga al operador crítico a designar un Delegado de Seguridad por cada una de sus infraestructuras consideradas Críticas o Críticas Europeas, comunicando su designación a los órganos correspondientes.",
  },
  {
    id: "pic-09",
    enunciado: "¿Qué habilitación debe tener el Responsable de Seguridad y Enlace que designan los operadores críticos, según el artículo 16.2?",
    opciones: [
      "Ninguna habilitación específica",
      "La habilitación de Director de Seguridad expedida por el Ministerio del Interior conforme a la normativa de seguridad privada, o la equivalente según su normativa específica",
      "Ser necesariamente miembro de las Fuerzas Armadas",
      "Ser funcionario de la Administración de Justicia",
    ],
    correcta: 1,
    explicacion:
      "El art. 16.2 exige que el Responsable de Seguridad y Enlace cuente con la habilitación de Director de Seguridad expedida por el Ministerio del Interior según la normativa de seguridad privada, o la habilitación equivalente según su normativa específica.",
  },
  {
    id: "pic-10",
    enunciado: "¿Cuáles son los instrumentos de planificación del Sistema de Protección de Infraestructuras Críticas, según el artículo 14?",
    opciones: [
      "Solo el Plan Nacional de Protección de las Infraestructuras Críticas",
      "El Plan Nacional, los Planes Estratégicos Sectoriales, los Planes de Seguridad del Operador, los Planes de Protección Específicos y los Planes de Apoyo Operativo",
      "Únicamente los planes de emergencia municipales",
      "Solo los planes que elabore cada operador crítico de forma autónoma, sin intervención pública",
    ],
    correcta: 1,
    explicacion:
      "El art. 14.1 enumera cinco instrumentos de planificación: el Plan Nacional de Protección de las Infraestructuras Críticas, los Planes Estratégicos Sectoriales, los Planes de Seguridad del Operador, los Planes de Protección Específicos y los Planes de Apoyo Operativo.",
  },
  {
    id: "pic-11",
    enunciado: "¿Cuál es el objetivo general de la Estrategia Nacional de Ciberseguridad 2019?",
    opciones: [
      "Prohibir el uso de internet en las Administraciones Públicas",
      "Garantizar el uso seguro y fiable del ciberespacio, protegiendo los derechos y libertades de los ciudadanos y promoviendo el progreso socioeconómico",
      "Crear un cuerpo policial exclusivo para delitos informáticos",
      "Sustituir a la Ley 8/2011 de infraestructuras críticas",
    ],
    correcta: 1,
    explicacion:
      "La Estrategia Nacional de Ciberseguridad 2019 fija como objetivo general que España garantice el uso seguro y fiable del ciberespacio, protegiendo los derechos y las libertades de los ciudadanos y promoviendo el progreso socioeconómico.",
  },
  {
    id: "pic-12",
    enunciado: "¿Cuáles son, entre otros, los tres ámbitos en los que se desenvuelve la lucha contra la cibercriminalidad según la Estrategia Nacional de Ciberseguridad 2019 (Objetivo II)?",
    opciones: [
      "El ciberespacio como objetivo directo de los hechos delictivos, como medio clave para su comisión, y como medio u objeto de investigación de cualquier hecho ilícito",
      "Solo la investigación policial, sin cooperación judicial",
      "Exclusivamente la ciberdefensa militar",
      "Solo la protección de infraestructuras críticas",
    ],
    correcta: 0,
    explicacion:
      "El Objetivo II de la Estrategia distingue tres ámbitos de la lucha contra la cibercriminalidad: el ciberespacio como objetivo directo de los hechos delictivos o de la amenaza, como medio clave para su comisión, y como medio u objeto directo de investigación de cualquier hecho ilícito.",
  },
  {
    id: "pic-13",
    enunciado: "Según el artículo 14.1 de la Ley 8/2011, ¿qué instrumentos de planificación se establecen para la protección de las infraestructuras críticas?",
    opciones: [
      "El Plan Nacional de Protección de las Infraestructuras Críticas, los Planes Estratégicos Sectoriales, los Planes de Seguridad del Operador, los Planes de Protección Específicos y los Planes de Apoyo Operativo",
      "Únicamente un plan único de ámbito nacional, sin ninguna distinción sectorial",
      "Solo los planes elaborados directamente por cada Comunidad Autónoma",
      "Exclusivamente los planes de emergencia municipal",
    ],
    correcta: 0,
    explicacion:
      "El art. 14.1 establece cinco instrumentos de planificación: el Plan Nacional de Protección de las Infraestructuras Críticas, los Planes Estratégicos Sectoriales, los Planes de Seguridad del Operador, los Planes de Protección Específicos (elaborados por los propios operadores críticos) y los Planes de Apoyo Operativo (elaborados por el Cuerpo Policial competente en la demarcación).",
  },
  {
    id: "pic-14",
    enunciado: "Según el artículo 16, ¿qué habilitación debe tener el Responsable de Seguridad y Enlace designado por un operador crítico?",
    opciones: [
      "La habilitación de Director de Seguridad expedida por el Ministerio del Interior conforme a la normativa de seguridad privada, o una habilitación equivalente según su normativa específica",
      "Ninguna habilitación específica, basta con ser empleado del operador crítico",
      "El título de Policía Nacional en activo",
      "Una licenciatura en Derecho, sin ninguna otra habilitación",
    ],
    correcta: 0,
    explicacion:
      "El art. 16.2 exige que el Responsable de Seguridad y Enlace, que cada operador crítico debe nombrar y comunicar al Ministerio del Interior, cuente con la habilitación de Director de Seguridad expedida por el Ministerio del Interior según la normativa de seguridad privada, o con una habilitación equivalente conforme a su normativa específica.",
  },
  {
    id: "pic-15",
    enunciado: "Según el artículo 17, ¿a quién deben comunicar los operadores críticos la existencia de un Delegado de Seguridad de la Infraestructura Crítica?",
    opciones: [
      "A las Delegaciones del Gobierno o, en su caso, al órgano competente de la Comunidad Autónoma con competencias para la protección de personas y bienes y el mantenimiento del orden público donde se ubique la infraestructura",
      "Únicamente al Centro Nacional de Inteligencia",
      "A cualquier Ayuntamiento del territorio nacional, sin necesidad de que la infraestructura se ubique en su término",
      "No existe obligación de comunicación alguna sobre esta figura",
    ],
    correcta: 0,
    explicacion:
      "El art. 17.1 exige que los operadores con infraestructuras consideradas Críticas o Críticas Europeas comuniquen a las Delegaciones del Gobierno o, en su caso, al órgano competente de la Comunidad Autónoma con competencias estatutarias en protección de personas y bienes y mantenimiento del orden público donde se ubique la infraestructura, la existencia de un Delegado de Seguridad para dicha infraestructura.",
  },
  {
    id: "pic-16",
    enunciado: "Según el artículo 6 de la Ley 8/2011, ¿qué órgano es responsable del Sistema de Protección de las Infraestructuras Críticas nacionales?",
    opciones: [
      "La Secretaría de Estado de Seguridad, como órgano superior del Ministerio del Interior",
      "El Consejo de Ministros en pleno",
      "Cada Comunidad Autónoma de forma independiente",
      "El Centro Nacional de Inteligencia en exclusiva",
    ],
    correcta: 0,
    explicacion:
      "El art. 6 de la Ley 8/2011 designa a la Secretaría de Estado de Seguridad, órgano superior del Ministerio del Interior, como responsable del Sistema de Protección de las Infraestructuras Críticas nacionales, ejerciendo sus competencias con la asistencia de los demás integrantes del Sistema, principalmente el CNPIC.",
  },
  {
    id: "pic-17",
    enunciado: "Según el artículo 7.1 de la Ley 8/2011, ¿qué es el CNPIC?",
    opciones: [
      "El Centro Nacional para la Protección de las Infraestructuras Críticas, órgano ministerial encargado del impulso, la coordinación y supervisión de las actividades encomendadas a la Secretaría de Estado de Seguridad en esta materia",
      "Un organismo internacional dependiente de la Unión Europea",
      "Una empresa privada de seguridad contratada por el Estado",
      "Un cuerpo especial de la Guardia Civil",
    ],
    correcta: 0,
    explicacion:
      "El art. 7.1 de la Ley 8/2011 crea el Centro Nacional para la Protección de las Infraestructuras Críticas (CNPIC) como órgano ministerial encargado del impulso, la coordinación y supervisión de todas las actividades que la Secretaría de Estado de Seguridad tiene encomendadas en relación con la protección de las infraestructuras críticas en el territorio nacional.",
  },
  {
    id: "pic-18",
    enunciado: "Según el artículo 7.3 de la Ley 8/2011, ¿qué corresponde al CNPIC respecto del Catálogo Nacional de Infraestructuras Estratégicas?",
    opciones: [
      "La realización de altas, bajas y modificaciones de infraestructuras en el Catálogo, así como la determinación de la criticidad de las infraestructuras estratégicas incluidas en él",
      "Ninguna competencia, el Catálogo lo gestiona directamente el Consejo de Ministros",
      "Solo la custodia física del documento en papel",
      "La publicación íntegra y pública del Catálogo en el Boletín Oficial del Estado",
    ],
    correcta: 0,
    explicacion:
      "El art. 7.3 de la Ley 8/2011 atribuye al CNPIC la realización de altas, bajas y modificaciones de infraestructuras en el Catálogo Nacional de Infraestructuras Estratégicas, así como la determinación de la criticidad de las infraestructuras estratégicas incluidas en el mismo.",
  },
  {
    id: "pic-19",
    enunciado: "Según el artículo 8 de la Ley 8/2011, ¿qué papel desempeñan los ministerios y organismos integrados en el Sistema de Protección de Infraestructuras Críticas?",
    opciones: [
      "Impulsar, en el ámbito de sus competencias, las políticas de seguridad del Gobierno sobre los distintos sectores estratégicos, velar por su aplicación y actuar como puntos de contacto especializados, colaborando con el Ministerio del Interior a través de la Secretaría de Estado de Seguridad",
      "Sustituir por completo a la Secretaría de Estado de Seguridad en la dirección del Sistema",
      "No tienen ninguna función específica dentro del Sistema",
      "Actuar exclusivamente como órganos consultivos sin ninguna responsabilidad ejecutiva",
    ],
    correcta: 0,
    explicacion:
      "El art. 8 de la Ley 8/2011 encomienda a los ministerios y organismos designados para cada sector estratégico impulsar, en el ámbito de sus competencias, las políticas de seguridad del Gobierno sobre los distintos sectores estratégicos nacionales, velar por su aplicación y actuar como puntos de contacto especializados, colaborando con el Ministerio del Interior a través de la Secretaría de Estado de Seguridad.",
  },
  {
    id: "pic-20",
    enunciado: "Según el artículo 9 de la Ley 8/2011, ¿qué facultades tienen los Delegados del Gobierno en las Comunidades Autónomas respecto de las infraestructuras críticas de su demarcación?",
    opciones: [
      "Ninguna, esta materia es competencia exclusiva del Ministerio del Interior en Madrid",
      "Bajo la autoridad del Secretario de Estado de Seguridad, intervenir a través de las Fuerzas y Cuerpos de Seguridad en la implantación de los Planes de Protección Específico y de Apoyo Operativo, y proponer la declaración de una zona como crítica",
      "Solo pueden emitir informes no vinculantes, sin capacidad de intervención",
      "Aprobar directamente el Catálogo Nacional de Infraestructuras Estratégicas",
    ],
    correcta: 1,
    explicacion:
      "El art. 9 de la Ley 8/2011 atribuye a los Delegados del Gobierno, bajo la autoridad del Secretario de Estado de Seguridad, facultades respecto de las infraestructuras críticas de su demarcación, incluyendo la intervención, a través de las Fuerzas y Cuerpos de Seguridad, en la implantación de los Planes de Protección Específico y de Apoyo Operativo, así como la propuesta de declaración de una zona como crítica.",
  },
  {
    id: "pic-21",
    enunciado: "Según el artículo 10 de la Ley 8/2011, ¿participan las Comunidades Autónomas con competencias en protección de personas y bienes en el Sistema de Protección de Infraestructuras Críticas?",
    opciones: [
      "No, el Sistema es de competencia exclusiva estatal, sin ninguna participación autonómica",
      "Sí, participan en el proceso de declaración de una zona como crítica, en la aprobación del Plan de Apoyo Operativo correspondiente, en el Grupo de Trabajo Interdepartamental, y son miembros de la Comisión Nacional para la Protección de las Infraestructuras Críticas",
      "Solo pueden participar como observadoras, sin derecho a voto en ningún órgano",
      "Solo participan las Comunidades Autónomas insulares",
    ],
    correcta: 1,
    explicacion:
      "El art. 10 de la Ley 8/2011 reconoce a las Comunidades Autónomas con competencias estatutariamente reconocidas en protección de personas y bienes y mantenimiento del orden público el derecho a participar en el proceso de declaración de zona crítica, en la aprobación del Plan de Apoyo Operativo, en las reuniones del Grupo de Trabajo Interdepartamental, y su condición de miembros de la Comisión Nacional para la Protección de las Infraestructuras Críticas.",
  },
  {
    id: "pic-22",
    enunciado: "Según el artículo 11 de la Ley 8/2011, ¿qué es la Comisión Nacional para la Protección de las Infraestructuras Críticas?",
    opciones: [
      "Un órgano colegiado adscrito a la Secretaría de Estado de Seguridad, competente para aprobar los Planes Estratégicos Sectoriales y designar a los operadores críticos, a propuesta del Grupo de Trabajo Interdepartamental",
      "Un tribunal administrativo con funciones exclusivamente sancionadoras",
      "Un órgano dependiente directamente de la Unión Europea",
      "Una comisión parlamentaria de investigación",
    ],
    correcta: 0,
    explicacion:
      "El art. 11 de la Ley 8/2011 crea la Comisión Nacional para la Protección de las Infraestructuras Críticas como órgano colegiado adscrito a la Secretaría de Estado de Seguridad, competente para aprobar los Planes Estratégicos Sectoriales y para designar a los operadores críticos, a propuesta del Grupo de Trabajo Interdepartamental.",
  },
  {
    id: "pic-23",
    enunciado: "Según el artículo 12 de la Ley 8/2011, ¿cuál es una de las funciones del Grupo de Trabajo Interdepartamental para la Protección de las Infraestructuras Críticas?",
    opciones: [
      "La elaboración de los diferentes Planes Estratégicos Sectoriales y la propuesta a la Comisión de la designación de los operadores críticos por cada sector estratégico",
      "Sustituir a la Comisión Nacional en la aprobación definitiva de los planes",
      "Ejercer funciones jurisdiccionales sobre los operadores críticos",
      "Representar a España en organismos internacionales de defensa",
    ],
    correcta: 0,
    explicacion:
      "El art. 12 de la Ley 8/2011 atribuye al Grupo de Trabajo Interdepartamental, en todo caso, la elaboración de los diferentes Planes Estratégicos Sectoriales y la propuesta a la Comisión Nacional de la designación de los operadores críticos por cada uno de los sectores estratégicos definidos.",
  },
  {
    id: "pic-24",
    enunciado: "Según el artículo 15 de la Ley 8/2011, ¿qué garantías deben cumplir los sistemas, comunicaciones e información relativos a la protección de infraestructuras críticas?",
    opciones: [
      "Ninguna garantía especial, se tratan como información pública ordinaria",
      "Deben contar con las medidas de seguridad necesarias que garanticen su confidencialidad, integridad y disponibilidad, según el nivel de clasificación que les sea asignado",
      "Solo deben garantizar su disponibilidad, sin exigencias de confidencialidad",
      "Deben publicarse íntegramente en el Boletín Oficial del Estado",
    ],
    correcta: 1,
    explicacion:
      "El art. 15 de la Ley 8/2011 exige que los sistemas, las comunicaciones y la información referida a la protección de las infraestructuras críticas cuenten con las medidas de seguridad necesarias que garanticen su confidencialidad, integridad y disponibilidad, según el nivel de clasificación que les sea asignado.",
  },
  {
    id: "pic-25",
    enunciado: "Según el artículo 18 de la Ley 8/2011, ¿quién debe garantizar la seguridad de los datos clasificados relativos a las propias infraestructuras?",
    opciones: [
      "El operador crítico, mediante los medios de protección y los sistemas de información adecuados que reglamentariamente se determinen",
      "Exclusivamente el CNPIC, sin ninguna implicación del operador",
      "El Centro Nacional de Inteligencia, con exclusión de cualquier otro órgano",
      "Ningún sujeto está obligado específicamente a esta garantía",
    ],
    correcta: 0,
    explicacion:
      "El art. 18 de la Ley 8/2011 obliga al operador crítico a garantizar la seguridad de los datos clasificados relativos a sus propias infraestructuras, mediante los medios de protección y los sistemas de información adecuados que reglamentariamente se determinen.",
  },
  {
    id: "pic-26",
    enunciado: "¿Qué es un Plan de Seguridad del Operador (PSO) dentro del Sistema de Protección de Infraestructuras Críticas?",
    opciones: [
      "El documento estratégico definidor de las políticas generales del operador crítico para garantizar la seguridad del conjunto de instalaciones o sistemas de su propiedad o gestión, elaborado en aplicación de la Ley 8/2011 y su Reglamento",
      "Un sinónimo exacto del Plan Nacional de Protección de las Infraestructuras Críticas",
      "Un plan que solo pueden elaborar las Administraciones Públicas, nunca los operadores privados",
      "Un documento sin ningún valor normativo, de carácter meramente orientativo",
    ],
    correcta: 0,
    explicacion:
      "El Plan de Seguridad del Operador (PSO), previsto en el desarrollo reglamentario de la Ley 8/2011, es el documento estratégico definidor de las políticas generales del operador crítico para garantizar la seguridad del conjunto de instalaciones o sistemas de su propiedad o gestión, constituyendo uno de los instrumentos de planificación del Sistema junto al Plan Nacional de Protección de las Infraestructuras Críticas, los Planes Estratégicos Sectoriales, los Planes de Protección Específicos y los Planes de Apoyo Operativo.",
  },
  {
    id: "pic-27",
    enunciado: "¿Qué es un Plan de Protección Específico (PPE) dentro del Sistema de Protección de Infraestructuras Críticas?",
    opciones: [
      "El documento operativo donde se definen las medidas concretas ya adoptadas y las previstas por adoptar por los operadores críticos, para garantizar la seguridad integral de una infraestructura crítica concreta",
      "Un plan de evacuación exclusivo para emergencias de tipo incendio",
      "Un sinónimo exacto del Plan de Apoyo Operativo",
      "Un documento que solo redacta el Ministerio del Interior, sin intervención del operador",
    ],
    correcta: 0,
    explicacion:
      "El Plan de Protección Específico (PPE) es el documento operativo, elaborado por el operador crítico para cada una de sus infraestructuras consideradas críticas, donde se definen las medidas concretas ya adoptadas y las previstas para garantizar la seguridad integral (física y lógica) de dicha infraestructura, siendo distinto del Plan de Apoyo Operativo (PAO), que recoge las medidas policiales de protección a adoptar por las Fuerzas y Cuerpos de Seguridad.",
  },
  {
    id: "pic-28",
    enunciado: "¿Qué diferencia hay entre una infraestructura «crítica» y una infraestructura «crítica europea», conforme a la Ley 8/2011?",
    opciones: [
      "Son sinónimos exactos, sin ninguna diferencia jurídica",
      "La infraestructura crítica europea es aquella infraestructura crítica situada en un Estado miembro cuya perturbación o destrucción tendría un impacto significativo en, al menos, dos Estados miembros de la Unión Europea, exigiendo procedimientos de consulta transfronteriza adicionales",
      "Solo existen infraestructuras críticas europeas, no infraestructuras críticas puramente nacionales",
      "La infraestructura crítica europea es de menor relevancia que la infraestructura crítica nacional",
    ],
    correcta: 1,
    explicacion:
      "La Ley 8/2011 distingue las infraestructuras críticas de ámbito nacional de las infraestructuras críticas europeas, que son aquellas cuya perturbación o destrucción tendría un impacto significativo en, al menos, dos Estados miembros de la Unión Europea, en aplicación de la Directiva 2008/114/CE, exigiendo su designación un procedimiento de consulta bilateral entre los Estados miembros afectados.",
  },
  {
    id: "pic-29",
    enunciado: "¿Cuáles son, con carácter general, los sectores estratégicos considerados en el Catálogo Nacional de Infraestructuras Estratégicas?",
    opciones: [
      "Únicamente el sector energético, sin ninguna otra materia",
      "Diversos sectores, entre ellos la Administración, el espacio, la industria nuclear, la industria química, las instalaciones de investigación, el agua, la energía, la salud, las tecnologías de la información y las comunicaciones, el transporte, la alimentación, y el sistema financiero y tributario",
      "Solo los sectores relacionados directamente con la defensa nacional",
      "Únicamente los sectores gestionados por empresas públicas",
    ],
    correcta: 1,
    explicacion:
      "El Catálogo Nacional de Infraestructuras Estratégicas, previsto en el art. 4 de la Ley 8/2011 y desarrollado reglamentariamente, comprende diversos sectores estratégicos: Administración, espacio, industria nuclear, industria química, instalaciones de investigación, agua, energía, salud, tecnologías de la información y las comunicaciones, transporte, alimentación, y sistema financiero y tributario, entre otros.",
  },
  {
    id: "pic-30",
    enunciado: "¿Qué papel desempeñan las Fuerzas y Cuerpos de Seguridad en la protección de las infraestructuras críticas?",
    opciones: [
      "Ninguno, esta materia es competencia exclusiva de las empresas de seguridad privada contratadas por los operadores",
      "Intervienen en la implantación de los Planes de Protección Específico y de Apoyo Operativo, coordinándose con los operadores críticos y sus Responsables de Seguridad y Enlace, bajo la dirección de la Secretaría de Estado de Seguridad a través de los Delegados del Gobierno",
      "Solo intervienen tras haberse producido un ataque terrorista efectivo",
      "Actúan exclusivamente como asesores técnicos, sin ninguna capacidad operativa",
    ],
    correcta: 1,
    explicacion:
      "Las Fuerzas y Cuerpos de Seguridad desempeñan un papel esencial en la implantación de los Planes de Protección Específico y de Apoyo Operativo, coordinándose con los operadores críticos y sus Responsables de Seguridad y Enlace, bajo la dirección de la Secretaría de Estado de Seguridad, ejercida en el territorio a través de los Delegados del Gobierno conforme al art. 9 de la Ley 8/2011.",
  },
];
