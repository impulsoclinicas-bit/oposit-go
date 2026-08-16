import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "cc-01",
    enunciado: "Según el artículo 1 del Código Civil, ¿cuáles son las fuentes del ordenamiento jurídico español?",
    opciones: [
      "La ley, la jurisprudencia y la costumbre",
      "La ley, la costumbre y los principios generales del derecho",
      "La Constitución, la ley y los reglamentos",
      "La ley y los tratados internacionales únicamente",
    ],
    correcta: 1,
    explicacion:
      "El art. 1.1 CC establece que las fuentes del ordenamiento jurídico español son la ley, la costumbre y los principios generales del derecho.",
  },
  {
    id: "cc-02",
    enunciado: "¿Cuándo entran en vigor las leyes según el artículo 2.1 del Código Civil, salvo que dispongan otra cosa?",
    opciones: [
      "Inmediatamente tras su publicación",
      "A los veinte días de su completa publicación en el BOE",
      "A los treinta días de su aprobación por las Cortes",
      "El primer día del año siguiente a su publicación",
    ],
    correcta: 1,
    explicacion:
      "El art. 2.1 CC dispone que las leyes entrarán en vigor a los veinte días de su completa publicación en el BOE, si en ellas no se dispone otra cosa (vacatio legis).",
  },
  {
    id: "cc-03",
    enunciado: "Según el artículo 8.1 del Código Civil, las leyes penales, de policía y de seguridad pública obligan:",
    opciones: [
      "Solo a los ciudadanos españoles",
      "A todos los que se hallen en territorio español",
      "Únicamente a los residentes legales",
      "Solo durante los estados de alarma, excepción o sitio",
    ],
    correcta: 1,
    explicacion:
      "El art. 8.1 CC establece que las leyes penales, las de policía y las de seguridad pública obligan a todos los que se hallen en territorio español.",
  },
  {
    id: "cc-04",
    enunciado: "¿En qué caso NO se considera español de origen según el artículo 17 CC?",
    opciones: [
      "El nacido de padre o madre españoles",
      "El nacido en España de padres extranjeros si al menos uno de ellos nació también en España",
      "El nacido fuera de España cuyos padres extranjeros residen legalmente en territorio español",
      "El nacido en España de padres extranjeros si ambos carecen de nacionalidad",
    ],
    correcta: 2,
    explicacion:
      "El art. 17 CC no contempla como español de origen al nacido fuera de España de padres extranjeros por el mero hecho de su residencia legal; sí lo son, entre otros supuestos, los recogidos en las opciones a), b) y d).",
  },
  {
    id: "cc-05",
    enunciado: "¿Cuántos años de residencia se exigen con carácter general para adquirir la nacionalidad española por residencia (art. 22 CC)?",
    opciones: ["Cinco años", "Ocho años", "Diez años", "Quince años"],
    correcta: 2,
    explicacion:
      "El art. 22.1 CC exige diez años de residencia con carácter general, reduciéndose a cinco para los refugiados y a dos para nacionales de países iberoamericanos y asimilados.",
  },
  {
    id: "cc-06",
    enunciado: "¿Cuántos años de residencia se exigen para la nacionalidad española a los nacionales de origen de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial, Portugal o a los sefardíes?",
    opciones: ["Un año", "Dos años", "Cinco años", "Diez años"],
    correcta: 1,
    explicacion:
      "El art. 22.1 CC reduce a dos años el plazo de residencia exigido para nacionales de origen de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial, Portugal o sefardíes.",
  },
  {
    id: "cc-07",
    enunciado:
      "¿Cuál de estos NO es un requisito común para adquirir la nacionalidad española por opción, carta de naturaleza o residencia según el artículo 23 CC?",
    opciones: [
      "Jurar o prometer fidelidad al Rey y obediencia a la Constitución y las leyes",
      "Renunciar a la nacionalidad anterior, salvo excepciones",
      "Inscribir la adquisición en el Registro Civil",
      "Acreditar diez años de residencia legal ininterrumpida",
    ],
    correcta: 3,
    explicacion:
      "El art. 23 CC exige el juramento de fidelidad, la renuncia a la nacionalidad anterior (con excepciones) y la inscripción registral; el requisito de residencia de diez años corresponde, en su caso, al art. 22 y no es un requisito común a las tres vías.",
  },
  {
    id: "cc-08",
    enunciado: "¿En qué momento se adquiere la personalidad civil según el artículo 30 del Código Civil?",
    opciones: [
      "En el momento de la concepción",
      "En el momento del nacimiento con vida, tras el entero desprendimiento del seno materno",
      "A los 24 horas de vida",
      "Cuando se inscribe el nacimiento en el Registro Civil",
    ],
    correcta: 1,
    explicacion:
      "El art. 30 CC establece que la personalidad se adquiere en el momento del nacimiento con vida, una vez producido el entero desprendimiento del seno materno.",
  },
  {
    id: "cc-09",
    enunciado: "¿Cómo se define el domicilio de las personas naturales según el artículo 40 CC?",
    opciones: [
      "El lugar donde estén empadronadas",
      "El lugar de su residencia habitual",
      "El lugar de nacimiento",
      "El lugar donde ejerzan su actividad profesional",
    ],
    correcta: 1,
    explicacion:
      "El art. 40 CC dispone que, para el ejercicio de los derechos y el cumplimiento de las obligaciones civiles, el domicilio de las personas naturales es el lugar de su residencia habitual.",
  },
  {
    id: "cc-10",
    enunciado: "¿Bajo la vigilancia de qué órgano se ejerce la tutela de menores según el artículo 209 CC?",
    opciones: [
      "El Defensor del Pueblo",
      "El Ministerio Fiscal",
      "El Consejo General del Poder Judicial",
      "La Policía Nacional",
    ],
    correcta: 1,
    explicacion:
      "El art. 209 CC establece que la tutela se ejercerá bajo la vigilancia del Ministerio Fiscal, que actuará de oficio o a instancia de la persona menor de edad o de cualquier interesado.",
  },
  {
    id: "cc-11",
    enunciado: "¿A qué edad se alcanza la mayoría de edad según el artículo 240 del Código Civil?",
    opciones: ["16 años cumplidos", "18 años cumplidos", "21 años cumplidos", "Depende de la Comunidad Autónoma"],
    correcta: 1,
    explicacion: "El art. 240 CC establece que la mayor edad empieza a los dieciocho años cumplidos.",
  },
  {
    id: "cc-12",
    enunciado:
      "Para la emancipación por concesión de quienes ejercen la patria potestad (art. 241 CC), ¿qué edad mínima debe tener el menor?",
    opciones: ["14 años cumplidos", "16 años cumplidos", "17 años cumplidos", "18 años cumplidos"],
    correcta: 1,
    explicacion:
      "El art. 241 CC exige que el menor tenga dieciséis años cumplidos y que consienta la emancipación, que se otorga por escritura pública o comparecencia ante el encargado del Registro Civil.",
  },
  {
    id: "cc-13",
    enunciado:
      "Las medidas de apoyo a las personas con discapacidad reguladas en el Título XI del Código Civil sustituyeron a:",
    opciones: [
      "La patria potestad prorrogada exclusivamente",
      "El antiguo sistema de incapacitación judicial",
      "El sistema de adopción",
      "El régimen de vecindad civil",
    ],
    correcta: 1,
    explicacion:
      "La reforma del Título XI sustituyó el antiguo sistema de incapacitación y modificación de la capacidad de obrar por un modelo de apoyos (guarda de hecho, curatela, defensor judicial) basado en el respeto a la voluntad, deseos y preferencias de la persona.",
  },
  {
    id: "cc-14",
    enunciado:
      "Según el artículo 268 CC, ¿cuál es el plazo máximo ordinario de revisión de las medidas de apoyo adoptadas judicialmente?",
    opciones: [
      "Un año",
      "Tres años, excepcionalmente hasta seis",
      "Cinco años en todo caso",
      "No existe plazo de revisión",
    ],
    correcta: 1,
    explicacion:
      "El art. 268 CC establece que las medidas de apoyo adoptadas judicialmente se revisarán periódicamente en un plazo máximo de tres años, que excepcionalmente y de forma motivada puede ampliarse hasta seis.",
  },
  {
    id: "cc-15",
    enunciado: "¿Qué medida de apoyo se aplica cuando la necesidad de apoyo a una persona con discapacidad es solo ocasional, aunque sea recurrente (art. 250 CC)?",
    opciones: ["La curatela", "El defensor judicial", "La guarda de hecho obligatoria", "La tutela"],
    correcta: 1,
    explicacion:
      "El art. 250 CC prevé el nombramiento de defensor judicial cuando la necesidad de apoyo se precise de forma ocasional, aunque sea recurrente, reservando la curatela para el apoyo continuado.",
  },
];
