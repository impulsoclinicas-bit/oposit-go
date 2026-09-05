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
];
