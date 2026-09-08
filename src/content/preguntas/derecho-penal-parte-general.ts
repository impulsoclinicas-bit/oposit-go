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
  {
    id: "dpg-13",
    enunciado: "¿Qué diferencia existe entre el delito «consumado» y la «tentativa» de delito, según los artículos 15 y 16 del Código Penal?",
    opciones: [
      "El delito consumado realiza todos los elementos del tipo penal; en la tentativa, el sujeto da principio a la ejecución del delito directamente por hechos exteriores, practicando todos o parte de los actos que objetivamente deberían producir el resultado, y este no se produce por causas independientes de la voluntad del autor",
      "No existe ninguna diferencia jurídica entre ambas figuras",
      "La tentativa se castiga siempre con la misma pena que el delito consumado",
      "La tentativa solo puede darse en los delitos imprudentes",
    ],
    correcta: 0,
    explicacion:
      "El art. 15 CP castiga tanto el delito consumado como la tentativa; el art. 16.1 CP define la tentativa como dar principio a la ejecución del delito directamente por hechos exteriores, practicando todos o parte de los actos que objetivamente deberían producir el resultado, sin que este se produzca por causas independientes de la voluntad del autor, castigándose con la pena inferior en uno o dos grados a la del delito consumado (art. 62 CP).",
  },
  {
    id: "dpg-14",
    enunciado: "Según el artículo 28.b) del Código Penal, ¿quién es considerado «inductor» a efectos de responsabilidad como autor?",
    opciones: [
      "Quien induce directamente a otro u otros a ejecutar el hecho delictivo",
      "Quien simplemente conoce que se va a cometer un delito, sin intervenir en él",
      "Quien presta ayuda posterior a la comisión del delito, ocultando al autor",
      "Quien únicamente presencia la comisión del delito sin intervenir",
    ],
    correcta: 0,
    explicacion:
      "El art. 28, párrafo segundo, letra a) del Código Penal considera autores, entre otros, a quienes inducen directamente a otro u otros a ejecutar el hecho delictivo, equiparando su responsabilidad penal a la del autor material, pese a no ejecutar personalmente la conducta típica.",
  },
  {
    id: "dpg-15",
    enunciado: "¿Qué es la agravante de reincidencia, prevista en el artículo 22.8 del Código Penal?",
    opciones: [
      "Circunstancia que concurre cuando, al delinquir, el culpable haya sido condenado ejecutoriamente por un delito comprendido en el mismo título del Código Penal, siempre que sea de la misma naturaleza",
      "Un sinónimo exacto de habitualidad delictiva sin ninguna condena previa",
      "Una circunstancia que exime completamente de responsabilidad penal",
      "Una circunstancia que solo se aplica a los delitos contra el patrimonio",
    ],
    correcta: 0,
    explicacion:
      "El art. 22.8 CP define la reincidencia como la circunstancia agravante que concurre cuando, al delinquir, el culpable haya sido condenado ejecutoriamente por un delito comprendido en el mismo título del Código Penal, siempre que sea de la misma naturaleza, no computándose los antecedentes penales cancelados o que debieran serlo.",
  },
  {
    id: "dpg-16",
    enunciado: "Según el artículo 31 bis del Código Penal, ¿pueden las personas jurídicas ser penalmente responsables?",
    opciones: [
      "No, la responsabilidad penal es siempre exclusiva de las personas físicas",
      "Sí, en los supuestos previstos en el Código, por los delitos cometidos en su nombre o por su cuenta y en su beneficio directo o indirecto por sus representantes legales o por quienes están sometidos a su autoridad, con determinadas causas de exención",
      "Sí, pero únicamente en los delitos contra la Hacienda Pública",
      "Sí, y su responsabilidad excluye siempre la de la persona física que cometió el delito",
    ],
    correcta: 1,
    explicacion:
      "El art. 31 bis CP, introducido en 2010 y reformado posteriormente, establece la responsabilidad penal de las personas jurídicas en los supuestos previstos en el Código, previendo además causas de exención cuando la entidad haya implantado y ejecutado eficazmente modelos de organización y gestión (compliance) idóneos para prevenir delitos.",
  },
  {
    id: "dpg-17",
    enunciado: "Según el artículo 76 del Código Penal, ¿cuál es, con carácter general, el límite máximo de cumplimiento efectivo de la condena quien haya sido condenado por varios delitos?",
    opciones: [
      "No existe ningún límite, se cumplen todas las penas sucesivamente sin tope",
      "El triple del tiempo de la pena más grave impuesta, sin que pueda exceder, con carácter general, de veinte años, con topes superiores (25, 30 o 40 años) en supuestos de especial gravedad",
      "Siempre un máximo fijo de quince años, sea cual sea el número de delitos",
      "El doble de la pena más grave, sin excepciones",
    ],
    correcta: 1,
    explicacion:
      "El art. 76.1 CP establece que el máximo de cumplimiento efectivo no podrá exceder del triple de la pena más grave impuesta, con un tope general de veinte años, que puede elevarse excepcionalmente a 25, 30 o 40 años en los supuestos que el propio precepto detalla (pluralidad de delitos graves, terrorismo, prisión permanente revisable).",
  },
  {
    id: "dpg-18",
    enunciado: "Según el artículo 77 del Código Penal, ¿cómo se sanciona el concurso ideal de delitos, cuando un solo hecho constituye dos o más infracciones?",
    opciones: [
      "Se suman siempre todas las penas de cada delito por separado, sin límite",
      "Se aplica, en su mitad superior, la pena prevista para la infracción más grave, sin que pueda exceder de la suma de las penas que corresponderían de penarse separadamente",
      "Se aplica automáticamente la pena mínima prevista para la infracción más leve",
      "El concurso ideal no está regulado en el Código Penal español",
    ],
    correcta: 1,
    explicacion:
      "El art. 77 CP regula el concurso ideal (un solo hecho constituye dos o más delitos) y el concurso medial (un delito es medio necesario para cometer otro), aplicando en el primer caso la pena de la infracción más grave en su mitad superior, con el límite de la suma de las penas que corresponderían de penarse por separado.",
  },
  {
    id: "dpg-19",
    enunciado: "Según el artículo 80 del Código Penal, ¿qué es la suspensión de la ejecución de las penas privativas de libertad?",
    opciones: [
      "Un indulto parcial de la pena",
      "La facultad de los jueces y tribunales, mediante resolución motivada, de dejar en suspenso la ejecución de penas privativas de libertad no superiores a dos años, cuando sea razonable esperar que su ejecución no sea necesaria para evitar la comisión de nuevos delitos",
      "Un beneficio automático que se aplica de oficio a toda condena, sin ningún requisito",
      "Una figura reservada exclusivamente a los delitos leves",
    ],
    correcta: 1,
    explicacion:
      "El art. 80 CP permite a los jueces y tribunales, mediante resolución motivada, suspender la ejecución de penas privativas de libertad no superiores a dos años, valorando las circunstancias del delito y del penado, y exige, con carácter general, que sea la primera condena, que la pena no supere los dos años y que se hayan satisfecho las responsabilidades civiles.",
  },
  {
    id: "dpg-20",
    enunciado: "Según el artículo 90 del Código Penal, ¿en qué consiste la libertad condicional?",
    opciones: [
      "Un indulto total de la pena impuesta",
      "La suspensión de la ejecución del resto de la pena de prisión, que el juez de vigilancia penitenciaria concede al penado clasificado en tercer grado que haya extinguido las tres cuartas partes de la condena y observado buena conducta, entre otros requisitos",
      "Un derecho automático que se adquiere a los seis meses de ingreso en prisión",
      "Una medida exclusivamente aplicable a menores de edad",
    ],
    correcta: 1,
    explicacion:
      "El art. 90 CP configura la libertad condicional como la suspensión de la ejecución del resto de la pena de prisión, que concede el juez de vigilancia penitenciaria cuando el penado está clasificado en tercer grado, ha cumplido, con carácter general, las tres cuartas partes de la condena y ha observado buena conducta, sin perjuicio de los supuestos de adelantamiento previstos en el propio artículo.",
  },
  {
    id: "dpg-21",
    enunciado: "Según el artículo 109 del Código Penal, ¿qué obligación genera la ejecución de un hecho descrito como delito?",
    opciones: [
      "Ninguna obligación adicional a la pena impuesta",
      "La obligación de reparar, en los términos previstos en las leyes, los daños y perjuicios causados por el delito, pudiendo el perjudicado optar por exigir esta responsabilidad ante la jurisdicción civil",
      "Solo genera responsabilidad penal, nunca civil",
      "Únicamente obliga al Estado a indemnizar a la víctima",
    ],
    correcta: 1,
    explicacion:
      "El art. 109 CP establece que la ejecución de un hecho descrito por la ley como delito obliga a reparar los daños y perjuicios causados, pudiendo el perjudicado optar, en todo caso, por exigir esa responsabilidad civil ante la Jurisdicción Civil en lugar de en el proceso penal.",
  },
  {
    id: "dpg-22",
    enunciado: "Según el artículo 110 del Código Penal, ¿qué comprende la responsabilidad civil derivada del delito?",
    opciones: [
      "Únicamente la indemnización económica",
      "La restitución, la reparación del daño y la indemnización de perjuicios materiales y morales",
      "Solo la restitución del bien sustraído",
      "Exclusivamente las costas del procedimiento",
    ],
    correcta: 1,
    explicacion: "El art. 110 CP enumera el contenido de la responsabilidad civil derivada del delito: la restitución, la reparación del daño y la indemnización de perjuicios materiales y morales.",
  },
  {
    id: "dpg-23",
    enunciado: "Según el artículo 74 del Código Penal, ¿qué es el delito continuado?",
    opciones: [
      "Un delito que se comete sin interrupción durante varios días",
      "La realización, en ejecución de un plan preconcebido o aprovechando idéntica ocasión, de una pluralidad de acciones u omisiones que ofenden a uno o varios sujetos e infringen el mismo precepto penal o preceptos de igual o semejante naturaleza",
      "Un sinónimo de la reincidencia",
      "Una figura exclusiva de los delitos contra la seguridad vial",
    ],
    correcta: 1,
    explicacion:
      "El art. 74 CP define el delito continuado como la realización de una pluralidad de acciones u omisiones que, en ejecución de un plan preconcebido o aprovechando idéntica ocasión, ofenden a uno o varios sujetos e infringen el mismo precepto penal o preceptos de igual o semejante naturaleza, castigándose como un único delito con la pena de la infracción más grave impuesta en su mitad superior.",
  },
  {
    id: "dpg-24",
    enunciado: "Según el artículo 133 del Código Penal, ¿prescriben las penas impuestas por sentencia firme?",
    opciones: [
      "No, las penas nunca prescriben una vez impuestas por sentencia firme",
      "Sí, en plazos que varían según su gravedad y duración, desde un año para las penas leves hasta treinta años para las de prisión superior a veinte años",
      "Sí, pero siempre en un plazo único de veinte años, sea cual sea la pena",
      "Solo prescriben las penas de multa",
    ],
    correcta: 1,
    explicacion:
      "El art. 133 CP regula la prescripción de las penas ya impuestas por sentencia firme, con plazos escalonados según su gravedad: desde un año para las penas leves hasta treinta años para las penas de prisión superiores a veinte años.",
  },
  {
    id: "dpg-25",
    enunciado: "Según el artículo 136 del Código Penal, ¿qué es la cancelación de antecedentes penales?",
    opciones: [
      "Un beneficio que se concede automáticamente al ingresar en prisión",
      "El derecho de los condenados que hayan extinguido su responsabilidad penal a obtener del Ministerio de Justicia la cancelación de sus antecedentes penales, transcurridos ciertos plazos sin haber vuelto a delinquir",
      "Un trámite exclusivo del Tribunal Constitucional",
      "Un derecho que solo pueden ejercer las personas jurídicas",
    ],
    correcta: 1,
    explicacion:
      "El art. 136 CP reconoce el derecho de los condenados que hayan extinguido su responsabilidad penal a obtener la cancelación de sus antecedentes penales, con plazos que van desde seis meses (penas leves) hasta diez años (penas graves), contados desde el día siguiente a la extinción de la pena sin volver a delinquir.",
  },
  {
    id: "dpg-26",
    enunciado: "¿Qué diferencia esencial existe entre las penas y las medidas de seguridad en el Derecho Penal español?",
    opciones: [
      "Son términos sinónimos que designan la misma consecuencia jurídica del delito",
      "Las penas se fundamentan en la culpabilidad del autor por el hecho cometido; las medidas de seguridad se fundamentan en la peligrosidad criminal del sujeto, y se aplican a quienes cometen un hecho previsto como delito estando exentos de responsabilidad criminal por alguna de las causas del art. 20 CP",
      "Las medidas de seguridad son siempre más graves que las penas",
      "Las medidas de seguridad solo pueden imponerse a personas jurídicas",
    ],
    correcta: 1,
    explicacion:
      "Las penas se fundamentan en la culpabilidad del sujeto por el hecho cometido, mientras que las medidas de seguridad (arts. 95 y siguientes CP) se fundamentan en la peligrosidad criminal del sujeto y se aplican a quienes, habiendo cometido un hecho previsto como delito, están exentos de responsabilidad criminal por concurrir alguna de las causas del art. 20 CP (anomalía psíquica, minoría de edad penal, entre otras) o en los supuestos de semiimputabilidad.",
  },
  {
    id: "dpg-27",
    enunciado: "¿Qué diferencia existe entre la prescripción del delito y la prescripción de la pena?",
    opciones: [
      "Son exactamente lo mismo, con distinto nombre",
      "La prescripción del delito extingue la responsabilidad criminal antes de que exista sentencia firme condenatoria, por el transcurso del tiempo desde su comisión; la prescripción de la pena extingue la responsabilidad tras existir sentencia firme, por el transcurso del tiempo sin ejecutarla",
      "La prescripción de la pena nunca existe en el Código Penal español",
      "Solo el delito puede prescribir; la pena impuesta es siempre imprescriptible",
    ],
    correcta: 1,
    explicacion:
      "La prescripción del delito (art. 131 CP) opera antes de la sentencia firme, extinguiendo la responsabilidad criminal por el transcurso del tiempo desde la comisión del hecho; la prescripción de la pena (art. 133 CP) opera después de la sentencia firme, cuando la pena impuesta no se ejecuta dentro de los plazos legales.",
  },
  {
    id: "dpg-28",
    enunciado: "¿Qué circunstancia atenuante recoge el artículo 21.5 del Código Penal en relación con la reparación del daño?",
    opciones: [
      "Haber procedido el culpable a reparar el daño ocasionado a la víctima, o disminuir sus efectos, en cualquier momento del procedimiento y con anterioridad a la celebración del acto del juicio oral",
      "Haber reparado el daño en cualquier momento posterior a la sentencia firme",
      "Haber ofrecido disculpas verbales a la víctima, sin reparación económica",
      "Esta circunstancia solo se aplica en los delitos contra la seguridad vial",
    ],
    correcta: 0,
    explicacion:
      "El art. 21.5 CP recoge como circunstancia atenuante haber procedido el culpable a reparar el daño ocasionado a la víctima, o disminuir sus efectos, en cualquier momento del procedimiento y con anterioridad a la celebración del acto del juicio oral.",
  },
  {
    id: "dpg-29",
    enunciado: "¿Qué elemento distingue la autoría mediata dentro de las formas de autoría del artículo 28 del Código Penal?",
    opciones: [
      "Que el autor realiza el hecho sirviéndose de otra persona como instrumento, que actúa sin dolo, sin capacidad de culpabilidad o bajo error o coacción",
      "Que el autor solo colabora con actos posteriores a la comisión del delito",
      "Que el autor mediato no puede ser condenado nunca como autor, sino solo como cómplice",
      "Que solo se aplica en los delitos societarios",
    ],
    correcta: 0,
    explicacion:
      "El art. 28 CP incluye entre los autores a quien realiza el hecho «por medio de otro del que se sirve como instrumento», lo que la doctrina denomina autoría mediata: el instrumento actúa típicamente sin dolo, sin capacidad de culpabilidad o bajo error, coacción o engaño provocado por el autor mediato, que es quien domina la ejecución del hecho.",
  },
  {
    id: "dpg-30",
    enunciado: "¿Qué son las circunstancias eximentes incompletas, reguladas en el artículo 21.1 del Código Penal en relación con el artículo 20?",
    opciones: [
      "Causas que no producen ningún efecto en la responsabilidad penal",
      "Aquellas en las que concurren los requisitos de una eximente del art. 20 CP, pero no todos los necesarios para eximir completamente de responsabilidad, operando entonces como atenuante, con la posibilidad de rebajar la pena en uno o dos grados",
      "Un sinónimo de la reincidencia",
      "Solo se aplican a los delitos leves",
    ],
    correcta: 1,
    explicacion:
      "El art. 21.1 CP recoge como circunstancia atenuante las eximentes incompletas: cuando concurren los requisitos de alguna de las causas de exención de responsabilidad del art. 20 CP, pero no todos los necesarios para eximir completamente de ella, operando entonces como atenuante, que conforme al art. 68 CP permite rebajar la pena en uno o dos grados.",
  },
];
