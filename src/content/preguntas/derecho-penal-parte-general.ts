import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "dpg-01",
    enunciado: "Según el artículo 10 del Código Penal, ¿qué son los delitos?",
    opciones: [
      "Cualquier conducta contraria a la moral social",
      "Las acciones y omisiones dolosas o imprudentes penadas por la ley",
      "Únicamente las conductas dolosas",
      "Solo las conductas tipificadas como faltas administrativas",
    ],
    correcta: 1,
    explicacion:
      "El art. 10 CP define los delitos como las acciones y omisiones dolosas o imprudentes penadas por la ley.",
  },
  {
    id: "dpg-02",
    enunciado: "¿Cuáles son los elementos esenciales del delito según la doctrina y el Código Penal?",
    opciones: [
      "Solo la tipicidad",
      "Acción u omisión típica, antijurídica y culpable",
      "Únicamente la culpabilidad",
      "La peligrosidad del autor",
    ],
    correcta: 1,
    explicacion:
      "El delito se define dogmáticamente como una acción u omisión típica (prevista en la ley), antijurídica (contraria al ordenamiento y no amparada por una causa de justificación) y culpable (imputable a su autor).",
  },
  {
    id: "dpg-03",
    enunciado: "¿Qué principio recoge el artículo 25.1 de la Constitución y el artículo 1 del Código Penal, según el cual nadie puede ser condenado por una acción u omisión que no constituya delito según la legislación vigente en el momento de producirse?",
    opciones: [
      "Principio de proporcionalidad",
      "Principio de legalidad penal (nullum crimen, nulla poena sine lege)",
      "Principio de intervención mínima",
      "Principio de culpabilidad",
    ],
    correcta: 1,
    explicacion:
      "El principio de legalidad penal, recogido en el art. 25.1 CE y el art. 1 CP, exige que el delito y la pena estén previamente establecidos por una ley, en su vertiente de lex previa, scripta, stricta y certa.",
  },
  {
    id: "dpg-04",
    enunciado: "¿Qué diferencia existe entre autor y cómplice en el Código Penal?",
    opciones: [
      "No existe diferencia, ambos reciben la misma pena",
      "El autor realiza el hecho por sí solo, conjuntamente o por medio de otro del que se sirve como instrumento; el cómplice coopera con actos anteriores o simultáneos no esenciales",
      "El cómplice siempre recibe mayor pena que el autor",
      "Solo el autor puede ser condenado penalmente",
    ],
    correcta: 1,
    explicacion:
      "El art. 28 CP define como autores a quienes realizan el hecho por sí solos, conjuntamente o por medio de otro del que se sirven como instrumento, así como a los inductores y cooperadores necesarios; el art. 29 CP define como cómplices a quienes cooperan a la ejecución del hecho con actos anteriores o simultáneos no incluidos en el art. 28.",
  },
  {
    id: "dpg-05",
    enunciado: "¿Qué pena se impone, con carácter general, al cómplice de un delito respecto de la del autor?",
    opciones: [
      "La misma pena que al autor",
      "La pena inferior en grado a la fijada por la ley para los autores del mismo delito",
      "Una multa fija independientemente del delito",
      "El cómplice queda siempre exento de pena",
    ],
    correcta: 1,
    explicacion:
      "El art. 63 CP establece que a los cómplices de un delito consumado o intentado se les impondrá la pena inferior en grado a la fijada por la ley para los autores del mismo delito.",
  },
  {
    id: "dpg-06",
    enunciado: "¿Cómo clasifica el artículo 33 del Código Penal las penas según su gravedad?",
    opciones: [
      "En penas leves y graves solamente",
      "En penas graves, menos graves y leves",
      "En penas principales y accesorias solamente",
      "En penas privativas de libertad y pecuniarias solamente",
    ],
    correcta: 1,
    explicacion:
      "El art. 33 CP clasifica las penas, según su naturaleza y duración, en graves, menos graves y leves, además de distinguir entre penas privativas de libertad, privativas de otros derechos y multa.",
  },
  {
    id: "dpg-07",
    enunciado: "¿Cuál de las siguientes es una pena privativa de libertad conforme al Código Penal?",
    opciones: ["La multa", "La prisión permanente revisable", "La inhabilitación especial", "La suspensión de empleo"],
    correcta: 1,
    explicacion:
      "Las penas privativas de libertad en el Código Penal español son la prisión, la prisión permanente revisable y la responsabilidad personal subsidiaria por impago de multa (art. 35 CP).",
  },
  {
    id: "dpg-08",
    enunciado: "¿Qué causas de justificación exime de responsabilidad criminal el artículo 20 del Código Penal?",
    opciones: [
      "Solo la legítima defensa",
      "Entre otras, la legítima defensa, el estado de necesidad y el cumplimiento de un deber o el ejercicio legítimo de un derecho",
      "Únicamente el miedo insuperable",
      "Solo la minoría de edad",
    ],
    correcta: 1,
    explicacion:
      "El art. 20 CP recoge como eximentes de la responsabilidad criminal, entre otras, la legítima defensa (20.4), el estado de necesidad (20.5) y el obrar en cumplimiento de un deber o en el ejercicio legítimo de un derecho, oficio o cargo (20.7), junto con causas relativas a la imputabilidad (anomalía psíquica, intoxicación plena, alteraciones de la percepción, minoría de 14 años prevista en el art. 19).",
  },
  {
    id: "dpg-09",
    enunciado: "¿A partir de qué edad se exige responsabilidad penal conforme al Código Penal?",
    opciones: [
      "A partir de los 14 años",
      "A partir de los 18 años, rigiendo para los menores de esa edad la Ley Orgánica reguladora de la responsabilidad penal de los menores",
      "A partir de los 16 años",
      "No existe límite de edad",
    ],
    correcta: 1,
    explicacion:
      "El art. 19 CP establece que los menores de dieciocho años no serán responsables criminalmente con arreglo al Código Penal, aplicándoseles, en su caso, la Ley Orgánica reguladora de la responsabilidad penal de los menores (LO 5/2000).",
  },
  {
    id: "dpg-10",
    enunciado: "¿Qué son las circunstancias atenuantes y agravantes de la responsabilidad criminal?",
    opciones: [
      "Elementos que determinan si existe o no delito",
      "Circunstancias que, sin excluir la responsabilidad criminal, modulan la pena a imponer dentro del marco legal",
      "Causas que extinguen la responsabilidad penal",
      "Sinónimo de las causas de justificación",
    ],
    correcta: 1,
    explicacion:
      "Las circunstancias modificativas de la responsabilidad criminal (arts. 21 a 23 CP) —atenuantes, agravantes y mixta de parentesco— no excluyen la existencia del delito, pero inciden en la individualización de la pena dentro del marco legal previsto para cada tipo.",
  },
  {
    id: "dpg-11",
    enunciado: "¿Cuáles son las causas de extinción de la responsabilidad criminal recogidas en el artículo 130 del Código Penal?",
    opciones: [
      "Únicamente la muerte del reo",
      "Entre otras, la muerte del reo, el cumplimiento de la condena, la prescripción del delito o de la pena, y el indulto",
      "Solo la prescripción",
      "Solo el indulto y el perdón del ofendido",
    ],
    correcta: 1,
    explicacion:
      "El art. 130 CP enumera como causas de extinción de la responsabilidad criminal, entre otras, la muerte del reo, el cumplimiento de la condena, la remisión definitiva de la pena, la prescripción del delito, la prescripción de la pena, el indulto y el perdón del ofendido en los delitos que así lo prevean.",
  },
  {
    id: "dpg-12",
    enunciado: "¿Qué diferencia existe entre delito doloso y delito imprudente?",
    opciones: [
      "No hay diferencia relevante en el Código Penal",
      "En el doloso el autor conoce y quiere el resultado (o acepta su probabilidad); en el imprudente el resultado se produce por infracción del deber de cuidado, sin quererlo el autor",
      "El delito imprudente siempre conlleva mayor pena",
      "El dolo solo se aplica a las faltas administrativas",
    ],
    correcta: 1,
    explicacion:
      "El dolo implica conocimiento y voluntad de realizar el tipo penal (o, en el dolo eventual, aceptación de su probable producción); la imprudencia (art. 12 CP) supone la causación del resultado por infracción del deber objetivo de cuidado, sin intención de producirlo. Las conductas imprudentes solo se castigan cuando la ley expresamente lo prevé.",
  },
];
