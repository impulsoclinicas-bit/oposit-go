import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "lopd-01",
    enunciado: "¿Qué normas regulan actualmente la protección de datos de carácter personal en España?",
    opciones: [
      "Únicamente la LO 15/1999",
      "El Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)",
      "Solo el RGPD, sin desarrollo interno",
      "El Código Penal exclusivamente",
    ],
    correcta: 1,
    explicacion:
      "La protección de datos en España se rige por el Reglamento (UE) 2016/679 general de protección de datos (RGPD), de aplicación directa, y por la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), que lo completa y desarrolla, derogando la anterior LO 15/1999.",
  },
  {
    id: "lopd-02",
    enunciado: "¿Qué ley regula específicamente el tratamiento de datos personales por las Fuerzas y Cuerpos de Seguridad con fines penales?",
    opciones: [
      "La Ley Orgánica 3/2018 exclusivamente",
      "La Ley Orgánica 7/2021, de protección de datos personales tratados para fines de prevención, detección, investigación y enjuiciamiento de infracciones penales y de ejecución de sanciones penales",
      "El Reglamento (UE) 2016/679",
      "La Ley 39/2015",
    ],
    correcta: 1,
    explicacion:
      "La Ley Orgánica 7/2021, de 26 de mayo, traspone la Directiva (UE) 2016/680 y regula el tratamiento de datos personales por parte de las autoridades competentes, entre ellas las Fuerzas y Cuerpos de Seguridad, con fines de prevención, detección, investigación y enjuiciamiento de infracciones penales.",
  },
  {
    id: "lopd-03",
    enunciado: "Según el RGPD, ¿qué se entiende por \"dato personal\"?",
    opciones: [
      "Únicamente el nombre y apellidos de una persona",
      "Toda información sobre una persona física identificada o identificable",
      "Solo los datos incluidos en registros públicos",
      "Exclusivamente los datos biométricos",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.1 RGPD define \"dato personal\" como toda información sobre una persona física identificada o identificable (el \"interesado\"); se considera identificable toda persona cuya identidad pueda determinarse, directa o indirectamente.",
  },
  {
    id: "lopd-04",
    enunciado: "¿Cuáles son los principios relativos al tratamiento de datos recogidos en el artículo 5 del RGPD?",
    opciones: [
      "Solo el principio de confidencialidad",
      "Licitud, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva",
      "Únicamente el principio de minimización de datos",
      "Solo la limitación de la finalidad y la exactitud",
    ],
    correcta: 1,
    explicacion:
      "El art. 5 RGPD enumera los principios: licitud, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva (accountability) del responsable del tratamiento.",
  },
  {
    id: "lopd-05",
    enunciado: "¿Qué autoridad es competente en España para el control del cumplimiento de la normativa de protección de datos?",
    opciones: [
      "El Ministerio del Interior",
      "La Agencia Española de Protección de Datos (AEPD)",
      "El Consejo General del Poder Judicial",
      "El Defensor del Pueblo",
    ],
    correcta: 1,
    explicacion:
      "La Agencia Española de Protección de Datos (AEPD) es la autoridad administrativa independiente encargada de velar por el cumplimiento de la normativa de protección de datos en España (arts. 44 y siguientes de la LOPDGDD).",
  },
  {
    id: "lopd-06",
    enunciado: "¿Cuáles son los derechos que el RGPD y la LOPDGDD reconocen a las personas respecto de sus datos personales?",
    opciones: [
      "Únicamente el derecho de acceso",
      "Entre otros, los derechos de acceso, rectificación, supresión (\"al olvido\"), limitación del tratamiento, portabilidad y oposición",
      "Solo el derecho al olvido",
      "Solo el derecho de oposición a la publicidad",
    ],
    correcta: 1,
    explicacion:
      "El RGPD (capítulo III) y la LOPDGDD reconocen a los interesados, entre otros, los derechos de acceso, rectificación, supresión (derecho al olvido), limitación del tratamiento, portabilidad de los datos y oposición.",
  },
  {
    id: "lopd-07",
    enunciado: "¿Qué se entiende por consentimiento del interesado a efectos del RGPD?",
    opciones: [
      "Cualquier silencio o inacción del interesado",
      "Toda manifestación de voluntad libre, específica, informada e inequívoca del interesado por la que acepta, mediante una declaración o una clara acción afirmativa, el tratamiento de sus datos",
      "Un consentimiento tácito presumido salvo oposición expresa",
      "El consentimiento otorgado por un tercero en nombre del interesado, sin representación legal",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.11 RGPD define el consentimiento como toda manifestación de voluntad libre, específica, informada e inequívoca por la que el interesado acepta, mediante una declaración o una clara acción afirmativa, el tratamiento de datos personales que le conciernen.",
  },
  {
    id: "lopd-08",
    enunciado: "¿Qué son las categorías especiales de datos personales conforme al artículo 9 del RGPD?",
    opciones: [
      "Los datos relativos al domicilio y teléfono",
      "Datos que revelen el origen étnico o racial, opiniones políticas, convicciones religiosas, afiliación sindical, datos genéticos, biométricos, de salud o relativos a la vida u orientación sexual",
      "Solamente los datos bancarios",
      "Todos los datos personales sin distinción",
    ],
    correcta: 1,
    explicacion:
      "El art. 9 RGPD define las categorías especiales de datos (datos \"sensibles\"): origen étnico o racial, opiniones políticas, convicciones religiosas o filosóficas, afiliación sindical, datos genéticos, datos biométricos dirigidos a identificar de manera unívoca a una persona, datos relativos a la salud, y datos relativos a la vida sexual o la orientación sexual, cuyo tratamiento está sujeto a garantías reforzadas.",
  },
  {
    id: "lopd-09",
    enunciado: "¿Qué es el Delegado de Protección de Datos (DPO)?",
    opciones: [
      "Un cargo político nombrado por el Gobierno",
      "La persona designada por el responsable o encargado del tratamiento para informar y asesorar sobre las obligaciones en materia de protección de datos y supervisar su cumplimiento",
      "El director de la Agencia Española de Protección de Datos",
      "Un funcionario judicial",
    ],
    correcta: 1,
    explicacion:
      "El Delegado de Protección de Datos (arts. 37-39 RGPD) es la persona designada por el responsable o encargado del tratamiento para informar y asesorar sobre las obligaciones que impone la normativa de protección de datos y supervisar su cumplimiento; su designación es obligatoria en determinados supuestos, entre ellos las Administraciones Públicas.",
  },
  {
    id: "lopd-10",
    enunciado: "¿Qué finalidades habilitan el tratamiento de datos personales por las Fuerzas y Cuerpos de Seguridad conforme a la Ley Orgánica 7/2021?",
    opciones: [
      "Cualquier finalidad, sin restricción",
      "Exclusivamente la prevención, detección, investigación y enjuiciamiento de infracciones penales y la ejecución de sanciones penales, incluidas la protección y prevención frente a amenazas para la seguridad pública",
      "Solo fines estadísticos",
      "Únicamente el control del tráfico",
    ],
    correcta: 1,
    explicacion:
      "La LO 7/2021 regula el tratamiento de datos personales por las autoridades competentes exclusivamente para fines de prevención, detección, investigación y enjuiciamiento de infracciones penales o de ejecución de sanciones penales, incluidas la protección y la prevención frente a las amenazas contra la seguridad pública.",
  },
  {
    id: "lopd-11",
    enunciado: "¿Qué régimen sancionador establece el RGPD para las infracciones más graves en materia de protección de datos?",
    opciones: [
      "No prevé sanciones económicas",
      "Multas administrativas de hasta 20.000.000 EUR o, tratándose de una empresa, de una cuantía equivalente al 4% del volumen de negocio total anual, si esta cifra es mayor",
      "Solo apercibimiento, sin multas",
      "Prisión para el responsable del tratamiento en todo caso",
    ],
    correcta: 1,
    explicacion:
      "El art. 83.5 RGPD prevé, para las infracciones más graves, multas administrativas de hasta 20.000.000 EUR o, tratándose de una empresa, de una cuantía equivalente al 4% como máximo del volumen de negocio total anual del ejercicio financiero anterior, si esta cifra fuera mayor.",
  },
  {
    id: "lopd-12",
    enunciado: "¿Qué es una \"violación de la seguridad de los datos personales\" (brecha de seguridad) según el RGPD?",
    opciones: [
      "Cualquier actualización del sistema informático",
      "Toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos",
      "Solo el robo físico de un ordenador",
      "El cambio de contraseña de un usuario",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.12 RGPD define la violación de la seguridad de los datos personales como toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos. El responsable debe notificarla a la autoridad de control en el plazo de 72 horas, salvo que sea improbable que constituya un riesgo para los derechos y libertades de las personas.",
  },
];
