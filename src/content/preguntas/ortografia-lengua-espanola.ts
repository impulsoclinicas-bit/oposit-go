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
];
