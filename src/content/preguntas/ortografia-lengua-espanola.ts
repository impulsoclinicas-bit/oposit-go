import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "ole-01",
    enunciado: "Según la Ortografía de la lengua española de la RAE, ¿qué regla general rige la acentuación de las palabras agudas?",
    opciones: [
      "Llevan tilde cuando terminan en vocal, en «n» o en «s» (salvo que la «s» vaya precedida de otra consonante)",
      "Llevan tilde siempre, sin excepción alguna",
      "Nunca llevan tilde, en ningún caso",
      "Llevan tilde solo si tienen más de tres sílabas",
    ],
    correcta: 0,
    explicacion:
      "Las palabras agudas (con el acento prosódico en la última sílaba) llevan tilde cuando terminan en vocal, en «n» o en «s» no precedida de otra consonante: por ejemplo, «café», «camión», «autobús», pero no «robots» (termina en «s» precedida de consonante) ni «reloj» (termina en consonante distinta de «n» o «s»).",
  },
  {
    id: "ole-02",
    enunciado: "¿Qué regla general rige la acentuación de las palabras llanas o graves?",
    opciones: [
      "Llevan tilde cuando terminan en consonante distinta de «n» o «s», o cuando terminan en «s» precedida de otra consonante",
      "Llevan tilde siempre que terminan en vocal",
      "Nunca llevan tilde bajo ninguna circunstancia",
      "Llevan tilde únicamente si son monosílabas",
    ],
    correcta: 0,
    explicacion:
      "Las palabras llanas o graves (acento prosódico en la penúltima sílaba) llevan tilde cuando terminan en consonante distinta de «n» o «s» (por ejemplo, «árbol», «fácil»), o cuando terminan en «s» precedida de otra consonante (por ejemplo, «bíceps»); en cambio, no llevan tilde si terminan en vocal, «n» o «s» sin consonante previa (por ejemplo, «casa», «joven», «crisis»).",
  },
  {
    id: "ole-03",
    enunciado: "¿Qué característica tienen todas las palabras esdrújulas y sobresdrújulas respecto de la acentuación?",
    opciones: [
      "Llevan siempre tilde, sin excepción",
      "No llevan tilde en ningún caso",
      "Llevan tilde solo si terminan en vocal",
      "Llevan tilde únicamente cuando son sustantivos",
    ],
    correcta: 0,
    explicacion:
      "Las palabras esdrújulas (acento en la antepenúltima sílaba, como «música» o «rápido») y las sobresdrújulas (acento anterior a la antepenúltima sílaba, como «cómetelo» o «explícamelo») llevan siempre tilde, sin ninguna excepción, con independencia de la letra en que terminen.",
  },
  {
    id: "ole-04",
    enunciado: "¿Qué es la «tilde diacrítica» y en qué caso se aplica, por ejemplo, a la palabra «sí»?",
    opciones: [
      "Una tilde que no responde a las reglas generales de acentuación, sino que sirve para distinguir dos palabras con la misma forma pero distinta categoría gramatical o significado; «sí» (afirmación o pronombre reflexivo) se distingue así de «si» (conjunción condicional)",
      "Una tilde que se aplica exclusivamente a las palabras esdrújulas",
      "Un signo de puntuación que sustituye a la coma",
      "Una marca fonética sin ninguna función distintiva de significado",
    ],
    correcta: 0,
    explicacion:
      "La tilde diacrítica no obedece a las reglas generales de acentuación, sino que cumple una función distintiva entre palabras que se escriben igual pero pertenecen a categorías gramaticales distintas: así, «sí» (adverbio de afirmación o pronombre reflexivo tónico) lleva tilde diacrítica para distinguirse de «si» (conjunción condicional o sustantivo musical), del mismo modo que «él» (pronombre) se distingue de «el» (artículo), o «tú» (pronombre) de «tu» (posesivo).",
  },
  {
    id: "ole-05",
    enunciado: "¿Cuándo se escribe «b» según las reglas ortográficas académicas, por regla general?",
    opciones: [
      "Ante consonante (por ejemplo, «obstante», «blanco»), en los verbos terminados en «-bir» (salvo excepciones como «hervir», «servir», «vivir»), y en el pretérito imperfecto de indicativo de los verbos de la primera conjugación y del verbo «ir»",
      "Únicamente al final de palabra",
      "Nunca ante consonante, en ningún caso",
      "Solo en palabras de origen griego",
    ],
    correcta: 0,
    explicacion:
      "Entre las reglas generales del uso de la «b» destacan: se escribe «b» ante otra consonante («obstante», «blanco», «brazo»); en los verbos terminados en «-bir» (como «escribir», «recibir»), salvo las excepciones «hervir», «servir» y «vivir»; y en las desinencias del pretérito imperfecto de indicativo de los verbos de la primera conjugación y del verbo «ir» («cantaba», «iba»).",
  },
  {
    id: "ole-06",
    enunciado: "¿Cuándo se utiliza generalmente la «g» y cuándo la «j» ante las vocales «e», «i»?",
    opciones: [
      "Se escriben con «g» las palabras que contienen el elemento compositivo «geo-» o terminan en «-gia», «-gio», «-logía», entre otras reglas; se escriben con «j» las formas verbales de verbos terminados en «-jar», «-jear» y las palabras terminadas en «-aje», «-eje»",
      "La elección entre «g» y «j» es completamente libre y no sigue ninguna regla",
      "Siempre se escribe «g» ante «e» o «i», sin excepción alguna",
      "Siempre se escribe «j» ante «e» o «i», sin excepción alguna",
    ],
    correcta: 0,
    explicacion:
      "Se escriben con «g» ante «e», «i» las palabras que contienen el elemento «geo-» («geografía»), las terminadas en «-gia», «-gio», «-logía», «-gente», «-gencia», entre otras reglas; se escriben con «j» las formas de los verbos terminados en «-jar» y «-jear» («trabajé», «cojeo»), así como los sustantivos terminados en «-aje» y «-eje» («garaje», «hereje»).",
  },
  {
    id: "ole-07",
    enunciado: "¿Qué establece la ortografía académica sobre el uso de la tilde en el adverbio «solo» y en los pronombres demostrativos («este», «ese», «aquel», etc.)?",
    opciones: [
      "Desde la Ortografía de 2010, se recomienda no tildar ni «solo» ni los demostrativos, incluso en casos de ambigüedad, si bien se permite su uso excepcional cuando exista riesgo real de confusión",
      "Deben llevar tilde siempre y en todos los casos, sin ninguna excepción",
      "Nunca pueden llevar tilde bajo ninguna circunstancia, ni siquiera en caso de ambigüedad",
      "Solo los demostrativos femeninos pueden llevar tilde",
    ],
    correcta: 0,
    explicacion:
      "La Ortografía de la lengua española de 2010 estableció que tanto el adverbio «solo» como los pronombres demostrativos («este», «ese», «aquel» y sus femeninos y plurales) se escriben sin tilde en todos los casos, ya que no incumplen las reglas generales de acentuación, admitiéndose no obstante su acentuación excepcional cuando el redactor perciba un riesgo real de ambigüedad en un contexto concreto.",
  },
  {
    id: "ole-08",
    enunciado: "¿Cuál es la diferencia de uso entre los dos puntos y el punto y coma?",
    opciones: [
      "Los dos puntos anuncian una explicación, enumeración o cita que desarrolla o cierra lo anterior; el punto y coma separa elementos de una enumeración compleja o proposiciones relacionadas semánticamente que ya contienen comas internas",
      "Son signos de puntuación completamente intercambiables en cualquier contexto",
      "El punto y coma solo se usa en textos jurídicos, nunca en otros géneros",
      "Los dos puntos indican siempre el final absoluto de un texto",
    ],
    correcta: 0,
    explicacion:
      "Los dos puntos se emplean para anunciar una enumeración, una explicación, una consecuencia o una cita que desarrolla, resume o cierra la idea expresada antes de ellos; el punto y coma, por su parte, se utiliza para separar los elementos de una enumeración compleja que ya contienen comas internas, o para unir proposiciones relacionadas semánticamente entre sí sin necesidad de una conjunción explícita.",
  },
  {
    id: "ole-09",
    enunciado: "Según la norma académica, ¿los monosílabos como «fue», «vio», «dio» o «fe» llevan tilde?",
    opciones: [
      "No, como regla general los monosílabos no llevan tilde, salvo que la lleven por razón de tilde diacrítica (como «sí», «tú» o «él»)",
      "Sí, todos los monosílabos deben llevar tilde obligatoriamente",
      "Solo los monosílabos que terminan en vocal deben llevar tilde",
      "Únicamente si el monosílabo tiene más de tres letras",
    ],
    correcta: 0,
    explicacion:
      "Como regla general, los monosílabos no llevan tilde en español (por ejemplo, «fue», «vio», «dio», «fe», «vi», «fui»), ya que al tener una sola sílaba no existe riesgo de confusión sobre dónde recae el acento; la única excepción es la tilde diacrítica, que se aplica a ciertos monosílabos para distinguirlos de otra palabra idéntica en la escritura pero de distinta categoría gramatical, como «sí» (afirmación) frente a «si» (condicional), o «tú» (pronombre) frente a «tu» (posesivo).",
  },
  {
    id: "ole-10",
    enunciado: "¿Cuándo se escribe mayúscula inicial después de dos puntos?",
    opciones: [
      "Quiere haber varias reglas específicas, entre ellas al reproducir una cita textual, tras la fórmula de saludo de una carta, o al enunciar los elementos de una lista que se presentan en líneas independientes, pero no de forma general tras cualquier uso de los dos puntos",
      "Siempre, sin excepción, cada vez que se emplean los dos puntos",
      "Nunca se escribe mayúscula después de dos puntos, en ningún caso",
      "Únicamente cuando los dos puntos preceden a un número",
    ],
    correcta: 0,
    explicacion:
      "La mayúscula tras los dos puntos no es automática, sino que se reserva para casos concretos: al reproducir una cita textual («Como dijo el autor: \"La libertad...\"»), tras la fórmula de saludo de una carta o correo («Estimados señores:\\nLes escribo...»), o al enumerar elementos que se presentan en líneas independientes; en el resto de casos (como al anunciar una enumeración dentro de la misma línea), lo habitual es continuar con minúscula.",
  },
  {
    id: "ole-11",
    enunciado: "¿Qué función cumple la diéresis en palabras como «pingüino» o «cigüeña»?",
    opciones: [
      "Indica que la «u» de las sílabas «gue», «gui» debe pronunciarse, ya que de otro modo dicha «u» sería muda",
      "Indica que la sílaba correspondiente debe pronunciarse con mayor intensidad",
      "Sustituye a la tilde en las palabras esdrújulas",
      "Es un signo exclusivo de las lenguas cooficiales españolas, ajeno al castellano",
    ],
    correcta: 0,
    explicacion:
      "La diéresis (los dos puntos sobre la «u») indica que, en las sílabas «gue» y «gui», la «u» debe pronunciarse, ya que de otro modo sería muda (como ocurre en «guerra» o «guitarra»); así, «pingüino» se pronuncia con el sonido de la «u», a diferencia de palabras como «guiso», donde la «u» no suena.",
  },
  {
    id: "ole-12",
    enunciado: "Según la ortografía académica, ¿cuándo se escribe generalmente «x» y no «s» en palabras como «exhaustivo» o «extraordinario»?",
    opciones: [
      "En palabras que contienen los prefijos «ex-» (fuera de, más allá de) o «extra-» (fuera de, sumamente), entre otras reglas específicas del sistema ortográfico",
      "La elección entre «x» y «s» es completamente libre y no responde a ninguna regla",
      "Siempre que la palabra tenga más de cuatro sílabas",
      "Únicamente en palabras de origen inglés incorporadas al español",
    ],
    correcta: 0,
    explicacion:
      "Entre las reglas relativas al uso de la «x», se escriben con esta letra las palabras que contienen los prefijos «ex-» (con el sentido de fuera de o más allá de, como en «exhaustivo» o «excarcelar») y «extra-» (fuera de, o con el sentido de sumamente, como en «extraordinario» o «extraterritorial»), entre otras reglas específicas que fija la ortografía académica para esta letra.",
  },
  {
    id: "ole-13",
    enunciado: "¿Qué recomienda la ortografía académica sobre el uso de comillas y cursiva para los extranjerismos no adaptados?",
    opciones: [
      "Se recomienda escribir en cursiva (o entrecomillados, si no se dispone de cursiva) los extranjerismos crudos que conservan su grafía y pronunciación originales y no se han adaptado al español",
      "Los extranjerismos nunca deben distinguirse tipográficamente del resto del texto",
      "Deben escribirse siempre en mayúsculas, sin excepción",
      "Deben traducirse siempre al español, sin conservar en ningún caso la palabra extranjera",
    ],
    correcta: 0,
    explicacion:
      "La ortografía académica recomienda escribir en cursiva (o, en su defecto, entre comillas) los extranjerismos crudos, es decir, aquellos que conservan su grafía y pronunciación de origen sin haberse adaptado al español (como «software» o «marketing»), a diferencia de los extranjerismos ya adaptados (como «fútbol» o «champán»), que se escriben en redonda, como el resto de las palabras españolas.",
  },
  {
    id: "ole-14",
    enunciado: "¿Qué indica el uso de la coma antes de conjunciones adversativas como «pero», «sino» o «aunque»?",
    opciones: [
      "Se escribe habitualmente una coma inmediatamente antes de estas conjunciones cuando introducen una oración que contrapone o matiza lo expresado anteriormente",
      "Está prohibido escribir una coma antes de cualquier conjunción en español",
      "Solo se permite ante la conjunción «pero», nunca ante «sino» o «aunque»",
      "Únicamente se aplica en textos literarios, nunca en textos administrativos o técnicos",
    ],
    correcta: 0,
    explicacion:
      "Como norma general de puntuación, se escribe una coma inmediatamente antes de las conjunciones adversativas «pero», «sino» (y su variante «sino que») y, en determinados usos, «aunque», cuando estas introducen una oración que contrapone, matiza o restringe lo expresado en la oración anterior (por ejemplo, «Estudió mucho, pero no aprobó el examen»).",
  },
  {
    id: "ole-15",
    enunciado: "¿Qué exige la norma académica sobre la puntuación al final de una pregunta o exclamación cuando esta no ocupa la totalidad del enunciado?",
    opciones: [
      "El signo de interrogación o exclamación de cierre marca por sí mismo el final de esa parte del enunciado, sin que sea necesario añadir además un punto justo después",
      "Debe añadirse siempre un punto inmediatamente después del signo de cierre, sin excepción",
      "Debe repetirse el signo de apertura después del de cierre",
      "Los signos de interrogación y exclamación nunca pueden usarse dentro de un enunciado más amplio",
    ],
    correcta: 0,
    explicacion:
      "El signo de cierre de interrogación o de exclamación (¿…? / ¡…!) ya marca por sí mismo el final de esa secuencia, por lo que la ortografía académica indica que no debe añadirse un punto justo después de dicho signo; sí es posible, en cambio, continuar el enunciado con una coma u otro signo si la oración prosigue («¿Vienes?, porque ya nos vamos»).",
  },
];
