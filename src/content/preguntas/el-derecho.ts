import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "der1-01",
    enunciado: "¿Cuál de las siguientes NO es una acepción habitual del término \"Derecho\"?",
    opciones: [
      "Derecho objetivo: conjunto de normas jurídicas",
      "Derecho subjetivo: facultad de exigir algo amparada por una norma",
      "Ciencia del Derecho: estudio sistemático de las normas jurídicas",
      "Costumbre: uso reiterado sin ninguna intención de crear derecho",
    ],
    correcta: 3,
    explicacion:
      "La costumbre solo es fuente del Derecho cuando se practica con la convicción de que es jurídicamente obligatoria (opinio iuris); un simple uso social reiterado sin esa intención no es Derecho.",
  },
  {
    id: "der1-02",
    enunciado: "Según el artículo 1.1 del Código Civil, ¿cuáles son las fuentes del ordenamiento jurídico español?",
    opciones: [
      "La ley, la jurisprudencia y los tratados internacionales",
      "La ley, la costumbre y los principios generales del derecho",
      "La Constitución, las leyes orgánicas y los reglamentos",
      "La ley, el reglamento y la doctrina",
    ],
    correcta: 1,
    explicacion:
      "El art. 1.1 CC establece que las fuentes del ordenamiento jurídico español son la ley, la costumbre y los principios generales del derecho.",
  },
  {
    id: "der1-03",
    enunciado: "¿Qué carácter tiene la costumbre como fuente del Derecho respecto de la ley?",
    opciones: [
      "Prevalece siempre sobre la ley",
      "Solo rige en defecto de ley aplicable, y siempre que no sea contraria a la moral o al orden público",
      "Tiene el mismo rango que la Constitución",
      "No es fuente del Derecho en España",
    ],
    correcta: 1,
    explicacion:
      "El art. 1.3 CC señala que la costumbre solo rige en defecto de ley aplicable, siempre que no sea contraria a la moral o al orden público y resulte probada.",
  },
  {
    id: "der1-04",
    enunciado: "¿Qué son los principios generales del derecho, según el Código Civil?",
    opciones: [
      "Fuente exclusiva para los jueces, sin aplicación por la Administración",
      "Se aplican en defecto de ley o costumbre, sin perjuicio de su carácter informador del ordenamiento",
      "Solo se aplican en materia penal",
      "Tienen rango superior a la Constitución",
    ],
    correcta: 1,
    explicacion:
      "El art. 1.4 CC establece que los principios generales del derecho se aplicarán en defecto de ley o costumbre, sin perjuicio de su carácter informador del ordenamiento jurídico.",
  },
  {
    id: "der1-05",
    enunciado: "¿Qué principio establece que la ignorancia de las leyes no excusa de su cumplimiento?",
    opciones: [
      "Principio de irretroactividad",
      "Principio de jerarquía normativa",
      "Principio de ignorancia de la ley (art. 6.1 CC)",
      "Principio de publicidad",
    ],
    correcta: 2,
    explicacion:
      "El art. 6.1 CC dispone que la ignorancia de las leyes no excusa de su cumplimiento, salvo lo dispuesto para el error de derecho en los casos que la ley prevea expresamente.",
  },
  {
    id: "der1-06",
    enunciado: "Según el artículo 9.3 de la Constitución, ¿qué principio garantiza que las leyes desfavorables o restrictivas de derechos no se apliquen a hechos anteriores a su entrada en vigor?",
    opciones: [
      "Principio de jerarquía normativa",
      "Principio de irretroactividad",
      "Principio de seguridad jurídica",
      "Principio de responsabilidad",
    ],
    correcta: 1,
    explicacion:
      "El art. 9.3 CE garantiza la irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales.",
  },
  {
    id: "der1-07",
    enunciado: "¿Cuál de estos principios TAMBIÉN garantiza el artículo 9.3 de la Constitución?",
    opciones: [
      "La jerarquía normativa, la publicidad de las normas y la seguridad jurídica",
      "La libertad ideológica y religiosa",
      "El derecho a la tutela judicial efectiva",
      "La presunción de inocencia",
    ],
    correcta: 0,
    explicacion:
      "El art. 9.3 CE garantiza el principio de legalidad, la jerarquía normativa, la publicidad de las normas, la irretroactividad de lo desfavorable, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad de los poderes públicos.",
  },
  {
    id: "der1-08",
    enunciado: "En la jerarquía normativa, ¿qué ocurre cuando una norma de rango inferior contradice a una de rango superior?",
    opciones: [
      "Prevalece la norma más reciente, sea cual sea su rango",
      "Prevalece la norma inferior si es más específica",
      "La norma inferior es nula de pleno derecho por infringir el principio de jerarquía normativa",
      "Ambas normas coexisten y se aplica la que el juez prefiera",
    ],
    correcta: 2,
    explicacion:
      "El principio de jerarquía normativa (art. 9.3 CE y art. 1.2 CC) implica que las normas de rango inferior no pueden contradecir a las de rango superior; si lo hacen, son nulas de pleno derecho.",
  },
  {
    id: "der1-09",
    enunciado: "¿Cuándo entran en vigor las leyes en España, si no se dispone otra cosa?",
    opciones: [
      "El mismo día de su publicación en el BOE",
      "A los veinte días de su completa publicación en el BOE, salvo que en ellas se disponga otra cosa",
      "A los treinta días de su aprobación por las Cortes",
      "Cuando lo determine el Tribunal Constitucional",
    ],
    correcta: 1,
    explicacion:
      "El art. 2.1 CC establece que las leyes entrarán en vigor a los veinte días de su completa publicación en el BOE, si en ellas no se dispone otra cosa (la conocida \"vacatio legis\").",
  },
  {
    id: "der1-10",
    enunciado: "¿Qué es la analogía como técnica de aplicación del Derecho?",
    opciones: [
      "Aplicar una norma a un supuesto no contemplado en ella cuando hay identidad de razón con otro sí regulado",
      "Derogar una norma por otra posterior",
      "Interpretar la Constitución conforme a los tratados internacionales",
      "Aplicar siempre la norma más favorable al reo",
    ],
    correcta: 0,
    explicacion:
      "El art. 4.1 CC recoge la analogía: procederá la aplicación analógica de las normas cuando estas no contemplen un supuesto específico, pero regulen otro semejante entre los que se aprecie identidad de razón.",
  },
  {
    id: "der1-11",
    enunciado: "¿Está permitida la aplicación analógica de las leyes penales, sancionadoras, excepcionales o de ámbito temporal?",
    opciones: [
      "Sí, siempre que beneficie al reo",
      "No; el art. 4.2 CC excluye estas leyes de la aplicación analógica",
      "Sí, sin ninguna restricción",
      "Solo si lo autoriza el Tribunal Constitucional",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.2 CC excluye expresamente de la analogía a las leyes penales, las excepcionales y las de ámbito temporal.",
  },
  {
    id: "der1-12",
    enunciado: "¿Cómo deben interpretarse las normas jurídicas según el artículo 3.1 del Código Civil?",
    opciones: [
      "Únicamente según el sentido literal de sus palabras",
      "Según el sentido propio de sus palabras, en relación con el contexto, los antecedentes históricos y legislativos, y la realidad social del tiempo en que han de ser aplicadas, atendiendo fundamentalmente a su espíritu y finalidad",
      "Siempre conforme a la interpretación más restrictiva posible",
      "Exclusivamente conforme a la jurisprudencia del Tribunal Supremo",
    ],
    correcta: 1,
    explicacion:
      "El art. 3.1 CC recoge los criterios de interpretación: sentido propio de las palabras, contexto, antecedentes históricos y legislativos, realidad social del tiempo, y espíritu y finalidad de la norma.",
  },
];
