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
  {
    id: "der1-13",
    enunciado: "Según el artículo 1.6 del Código Civil, ¿qué papel desempeña la jurisprudencia en el ordenamiento jurídico español?",
    opciones: [
      "Complementa el ordenamiento jurídico con la doctrina que, de modo reiterado, establezca el Tribunal Supremo al interpretar y aplicar la ley, la costumbre y los principios generales del derecho",
      "Es una fuente del Derecho de igual rango que la ley, pudiendo derogarla",
      "Carece de cualquier valor jurídico en España",
      "Solo la producen los Tribunales Superiores de Justicia de las Comunidades Autónomas",
    ],
    correcta: 0,
    explicacion:
      "El art. 1.6 CC establece que la jurisprudencia complementará el ordenamiento jurídico con la doctrina que, de modo reiterado, establezca el Tribunal Supremo al interpretar y aplicar la ley, la costumbre y los principios generales del derecho, sin constituir por sí misma una fuente autónoma del Derecho.",
  },
  {
    id: "der1-14",
    enunciado: "¿Qué exige el artículo 7 del Código Civil respecto del ejercicio de los derechos?",
    opciones: [
      "Que los derechos se ejerciten conforme a las exigencias de la buena fe, y que la ley no ampare el abuso del derecho o su ejercicio antisocial",
      "Que todo derecho pueda ejercitarse sin ningún límite",
      "Que los derechos solo puedan ejercitarse mediante representación legal",
      "Que el ejercicio de un derecho exija siempre autorización judicial previa",
    ],
    correcta: 0,
    explicacion:
      "El art. 7 CC exige que los derechos se ejerciten conforme a las exigencias de la buena fe, y dispone que la ley no ampara el abuso del derecho o el ejercicio antisocial del mismo, es decir, todo acto u omisión que por la intención de su autor, por su objeto o por las circunstancias en que se realice sobrepase manifiestamente los límites normales del ejercicio de un derecho.",
  },
  {
    id: "der1-15",
    enunciado: "¿Qué distingue, con carácter general, al Derecho público del Derecho privado?",
    opciones: [
      "El Derecho público regula las relaciones en las que interviene el Estado u otro poder público en ejercicio de sus potestades (con una posición de supremacía); el Derecho privado regula las relaciones entre particulares en situación de igualdad",
      "Son términos completamente sinónimos, sin ninguna diferencia relevante",
      "El Derecho privado regula exclusivamente las relaciones internacionales entre Estados",
      "El Derecho público solo se aplica a los delitos, y el privado a las faltas administrativas",
    ],
    correcta: 0,
    explicacion:
      "La distinción clásica entre Derecho público y Derecho privado atiende a la naturaleza de la relación jurídica regulada: el Derecho público regula las relaciones en las que interviene el Estado u otro poder público en el ejercicio de sus potestades, ocupando una posición de supremacía (Derecho constitucional, administrativo, penal, procesal), mientras que el Derecho privado regula las relaciones entre particulares situados en un plano de igualdad (Derecho civil, mercantil).",
  },
  {
    id: "der1-16",
    enunciado: "¿Qué diferencia existe entre capacidad jurídica y capacidad de obrar?",
    opciones: [
      "Son sinónimos, sin ninguna distinción práctica",
      "La capacidad jurídica es la aptitud para ser titular de derechos y obligaciones, que se tiene por el mero hecho de ser persona; la capacidad de obrar es la aptitud para ejercitarlos por sí mismo, y puede estar limitada",
      "La capacidad de obrar se tiene desde el nacimiento y la capacidad jurídica solo desde la mayoría de edad",
      "Solo las personas jurídicas tienen capacidad jurídica",
    ],
    correcta: 1,
    explicacion:
      "La capacidad jurídica es la aptitud genérica para ser titular de derechos y obligaciones, inherente a toda persona; la capacidad de obrar es la aptitud para ejercitar esos derechos por uno mismo, que puede estar limitada o modulada (menores de edad, personas con la capacidad modificada judicialmente).",
  },
  {
    id: "der1-17",
    enunciado: "Según el artículo 315 del Código Civil, ¿cuándo comienza la mayor edad?",
    opciones: ["A los dieciséis años cumplidos", "A los dieciocho años cumplidos", "A los veintiún años cumplidos", "Al contraer matrimonio, sea cual sea la edad"],
    correcta: 1,
    explicacion: "El art. 315 CC establece que la mayor edad empieza a los dieciocho años cumplidos.",
  },
  {
    id: "der1-18",
    enunciado: "Según el artículo 30 del Código Civil (tras la reforma de la Ley 20/2011), ¿cuándo se adquiere la personalidad civil?",
    opciones: [
      "A los veinticuatro horas de vida, con figura humana",
      "En el momento del nacimiento con vida, una vez producido el entero desprendimiento del seno materno",
      "Desde el momento de la concepción",
      "Solo cuando se inscribe el nacimiento en el Registro Civil",
    ],
    correcta: 1,
    explicacion:
      "Tras la reforma operada por la Ley 20/2011, del Registro Civil, el art. 30 CC establece que la personalidad se adquiere en el momento del nacimiento con vida, una vez producido el entero desprendimiento del seno materno, superando el antiguo requisito de sobrevivir 24 horas con figura humana.",
  },
  {
    id: "der1-19",
    enunciado: "Según el artículo 32 del Código Civil, ¿por qué causa se extingue la personalidad civil?",
    opciones: ["Por la incapacitación judicial", "Por la muerte de las personas", "Por la pérdida de la nacionalidad", "Por la declaración de concurso"],
    correcta: 1,
    explicacion: "El art. 32 CC dispone que la personalidad civil se extingue por la muerte de las personas.",
  },
  {
    id: "der1-20",
    enunciado: "Según el artículo 35 del Código Civil, ¿qué clases de personas jurídicas reconoce?",
    opciones: [
      "Únicamente las sociedades mercantiles",
      "Las corporaciones, asociaciones y fundaciones de interés público reconocidas por la ley, y las asociaciones de interés particular, civiles, mercantiles o industriales",
      "Solo el Estado y las Administraciones Públicas",
      "Únicamente las fundaciones sin ánimo de lucro",
    ],
    correcta: 1,
    explicacion:
      "El art. 35 CC distingue dos grandes categorías de personas jurídicas: las corporaciones, asociaciones y fundaciones de interés público reconocidas por la ley, y las asociaciones de interés particular (civiles, mercantiles o industriales) a las que la ley conceda personalidad propia.",
  },
  {
    id: "der1-21",
    enunciado: "Según el artículo 40 del Código Civil, ¿cuál es el domicilio de las personas naturales para el ejercicio de sus derechos y el cumplimiento de sus obligaciones?",
    opciones: [
      "El lugar donde se encuentren en cada momento",
      "El lugar de su residencia habitual",
      "El lugar donde estén empadronadas, aunque no residan allí",
      "El domicilio de sus padres, sea cual sea su edad",
    ],
    correcta: 1,
    explicacion: "El art. 40 CC fija el domicilio de las personas naturales, a los efectos del ejercicio de derechos y cumplimiento de obligaciones, en el lugar de su residencia habitual.",
  },
  {
    id: "der1-22",
    enunciado: "Según el artículo 17 del Código Civil, ¿cuál de los siguientes NO es supuesto de nacionalidad española de origen?",
    opciones: [
      "Los nacidos de padre o madre españoles",
      "Los nacidos en España de padres extranjeros si, al menos, uno de ellos hubiera nacido también en España",
      "Los nacidos en España cuya filiación no resulte determinada",
      "Los extranjeros que residan legalmente en España durante diez años, sea cual sea su circunstancia",
    ],
    correcta: 3,
    explicacion:
      "El art. 17 CC regula la nacionalidad española de origen (por filiación, por nacimiento en España en ciertos supuestos, o por filiación no determinada); la residencia legal continuada de diez años es un supuesto de nacionalidad por residencia (art. 22 CC), que es derivativa, no de origen.",
  },
  {
    id: "der1-23",
    enunciado: "Según el artículo 2.2 del Código Civil, ¿cómo se derogan las leyes?",
    opciones: [
      "Solo por otras leyes posteriores, con el alcance que expresamente se disponga, extendiéndose a lo incompatible con la ley nueva sobre la misma materia",
      "Automáticamente al cumplirse diez años de su entrada en vigor",
      "Únicamente mediante sentencia del Tribunal Constitucional",
      "Por simple desuso o falta de aplicación práctica",
    ],
    correcta: 0,
    explicacion:
      "El art. 2.2 CC establece que las leyes solo se derogan por otras leyes posteriores, con el alcance expresamente dispuesto, extendiéndose siempre a lo que resulte incompatible en la nueva regulación; además, la derogación de una ley no reactiva las leyes que esta, a su vez, hubiera derogado.",
  },
  {
    id: "der1-24",
    enunciado: "Según el artículo 6.3 del Código Civil, ¿qué consecuencia tienen los actos contrarios a las normas imperativas y prohibitivas?",
    opciones: [
      "Son plenamente válidos si las partes lo consienten",
      "Son nulos de pleno derecho, salvo que la norma establezca un efecto distinto para el caso de contravención",
      "Son simplemente anulables a instancia de parte",
      "Producen solo responsabilidad civil, sin afectar a su validez",
    ],
    correcta: 1,
    explicacion:
      "El art. 6.3 CC sanciona con la nulidad de pleno derecho los actos contrarios a las normas imperativas y prohibitivas, salvo que en ellas se establezca un efecto distinto para el caso de contravención.",
  },
  {
    id: "der1-25",
    enunciado: "¿Qué se entiende, doctrinalmente, por el carácter «coactivo» de la norma jurídica?",
    opciones: [
      "Que su cumplimiento es siempre voluntario, sin consecuencia alguna en caso contrario",
      "Que su cumplimiento puede ser impuesto, en último término, por el poder público, incluso mediante el uso de la fuerza si fuera necesario",
      "Que solo obliga a los funcionarios públicos",
      "Que únicamente rige en el ámbito penal",
    ],
    correcta: 1,
    explicacion:
      "La coactividad es uno de los caracteres esenciales de la norma jurídica, junto con la generalidad y la imperatividad: a diferencia de otras normas sociales o morales, su cumplimiento puede ser impuesto coactivamente por el poder público.",
  },
  {
    id: "der1-26",
    enunciado: "¿Qué se entiende por «unidad» del ordenamiento jurídico?",
    opciones: [
      "Que todas las normas jurídicas están contenidas en un único código",
      "Que el conjunto de normas vigentes en un Estado constituye un sistema articulado y jerarquizado, y no una mera suma de normas aisladas",
      "Que solo puede existir una única fuente del Derecho",
      "Que todas las Comunidades Autónomas deben tener idéntica legislación",
    ],
    correcta: 1,
    explicacion:
      "La unidad es una de las características del ordenamiento jurídico como sistema: pese a la pluralidad y diversidad de sus normas, estas se articulan de forma jerarquizada y coherente en torno a la Constitución, formando un conjunto unitario.",
  },
  {
    id: "der1-27",
    enunciado: "Según el artículo 9.1 del Código Civil, ¿qué ley personal rige, con carácter general, la capacidad y el estado civil de las personas físicas?",
    opciones: [
      "La ley del lugar donde se encuentren en cada momento",
      "La ley determinada por su nacionalidad",
      "La ley del lugar donde hayan nacido, sea cual sea su nacionalidad actual",
      "Siempre la ley española, con independencia de la nacionalidad",
    ],
    correcta: 1,
    explicacion:
      "El art. 9.1 CC establece que la ley personal correspondiente a las personas físicas es la determinada por su nacionalidad, y rige la capacidad y el estado civil, los derechos y deberes de familia, y la sucesión por causa de muerte.",
  },
  {
    id: "der1-28",
    enunciado: "Según el artículo 3.2 del Código Civil, ¿qué papel tiene la equidad en la aplicación de las normas?",
    opciones: [
      "Debe ponderarse en la aplicación de las normas, pero las resoluciones judiciales solo pueden descansar exclusivamente en ella cuando la ley expresamente lo permita",
      "Es la única fuente admisible del Derecho español",
      "No tiene ningún valor jurídico en el sistema español",
      "Solo puede aplicarla el Tribunal Constitucional",
    ],
    correcta: 0,
    explicacion:
      "El art. 3.2 CC dispone que la equidad habrá de ponderarse en la aplicación de las normas, si bien las resoluciones de los Tribunales solo podrán descansar de manera exclusiva en ella cuando la ley expresamente lo permita.",
  },
  {
    id: "der1-29",
    enunciado: "Según el artículo 96 de la Constitución, ¿qué valor tienen los tratados internacionales válidamente celebrados por España, una vez publicados oficialmente?",
    opciones: [
      "Ninguno, hasta que se aprueben mediante ley orgánica adicional",
      "Forman parte del ordenamiento interno",
      "Solo obligan al Gobierno, no a los ciudadanos",
      "Tienen rango inferior a cualquier reglamento",
    ],
    correcta: 1,
    explicacion:
      "El art. 96.1 CE establece que los tratados internacionales válidamente celebrados, una vez publicados oficialmente en España, formarán parte del ordenamiento interno, y sus disposiciones solo podrán ser derogadas, modificadas o suspendidas en la forma prevista en los propios tratados o de acuerdo con las normas generales del Derecho internacional.",
  },
  {
    id: "der1-30",
    enunciado: "¿Qué es la patria potestad, conforme al artículo 154 del Código Civil?",
    opciones: [
      "Una facultad que solo corresponde a las Administraciones Públicas",
      "El conjunto de deberes y facultades que, con carácter general, corresponden a los progenitores respecto de sus hijos menores no emancipados, ejercida siempre en beneficio de estos",
      "Un derecho exclusivo del padre, sin intervención de la madre",
      "Un régimen que se extingue automáticamente al cumplir el hijo doce años",
    ],
    correcta: 1,
    explicacion:
      "El art. 154 CC configura la patria potestad como el conjunto de deberes y facultades que, con carácter general, corresponden a los progenitores respecto de los hijos menores no emancipados, que se ejerce siempre en interés de estos, de acuerdo con su personalidad y con respeto a sus derechos.",
  },
];
