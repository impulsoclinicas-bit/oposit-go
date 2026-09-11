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
  {
    id: "ort-16",
    enunciado: "¿Cuál de las siguientes es una regla general para el uso de la «h» en español?",
    opciones: [
      "Se escriben con «h» las palabras que empiezan por los diptongos «hie-» y «hue-» (hierba, huevo), salvo excepciones como «iemos» de ciertos verbos",
      "La «h» se escribe siempre que la palabra proceda del latín, sin ninguna otra consideración",
      "Nunca se escribe «h» al principio de una palabra en español",
      "La «h» solo aparece en palabras de origen francés",
    ],
    correcta: 0,
    explicacion:
      "Una de las reglas generales del uso de la «h» establece que se escriben con esta letra las palabras que comienzan por los diptongos «hie-» y «hue-» (hierba, hielo, huevo, hueso), entre otras reglas relacionadas con la etimología latina o griega de las palabras (como los grupos «hum-» seguido de vocal, o las palabras que empiezan por «herm-», «histo-» o «hidr-»).",
  },
  {
    id: "ort-17",
    enunciado: "¿Qué fenómeno fonético explica la coexistencia de «c»/«z» y «s» para representar sonidos distintos en el español de España, pero un mismo sonido en gran parte de Hispanoamérica y Andalucía?",
    opciones: [
      "El «seseo», consistente en pronunciar con el mismo sonido /s/ las letras «s», «c» (ante e, i) y «z», frente a la distinción entre los sonidos /s/ y /z interdental/ propia del español septentrional peninsular",
      "El «yeísmo», que afecta exclusivamente a la pronunciación de «ll» e «y»",
      "El «laísmo», un fenómeno exclusivamente gramatical sin relación con la pronunciación",
      "Un fenómeno que solo afecta a la escritura, nunca a la pronunciación oral",
    ],
    correcta: 0,
    explicacion:
      "El «seseo» es el fenómeno fonético, propio de gran parte de Hispanoamérica, Canarias y parte de Andalucía, consistente en pronunciar con el mismo sonido /s/ las letras «s», «c» (ante «e», «i») y «z», frente a la distinción entre los sonidos /s/ y /z interdental/ (representado por «c»/«z») propia del español septentrional peninsular, lo que exige memorizar la ortografía correcta de cada palabra con independencia de la pronunciación de cada hablante.",
  },
  {
    id: "ort-18",
    enunciado: "¿Qué es el «yeísmo» como fenómeno fonético del español?",
    opciones: [
      "La pronunciación con un mismo sonido (aproximadamente el de «y») de las grafías «ll» e «y», propia de la mayoría de los hablantes de español actuales, frente a la distinción tradicional entre ambos sonidos que aún conservan algunas zonas",
      "Un sinónimo exacto del seseo",
      "Un fenómeno exclusivamente ortográfico, sin ninguna manifestación en la pronunciación oral",
      "La sustitución sistemática de la letra «y» por la letra «i» en la escritura",
    ],
    correcta: 0,
    explicacion:
      "El «yeísmo» es el fenómeno fonético consistente en pronunciar con un mismo sonido (aproximadamente el de «y») las grafías «ll» e «y» (de modo que «pollo» y «poyo» suenan igual), un rasgo hoy mayoritario entre los hablantes de español, frente a la distinción tradicional entre ambos sonidos que todavía conservan algunas zonas, sin que ello afecte, en cualquier caso, a la necesidad de escribir correctamente cada palabra según la norma ortográfica.",
  },
  {
    id: "ort-19",
    enunciado: "¿Cuál de las siguientes es una regla general para el uso de la «v» en español?",
    opciones: [
      "Se escriben con «v» las palabras que empiezan por «eva-», «eve-», «evi-» y «evo-» (evadir, evento, evidente, evolución), salvo excepciones como «ébano» o «ebanista»",
      "La «v» nunca puede aparecer al principio de una palabra en español",
      "Se escribe siempre «v» después de la letra «m»",
      "No existe ninguna regla ortográfica sobre el uso de la «v», su escritura es completamente arbitraria",
    ],
    correcta: 0,
    explicacion:
      "Una de las reglas generales del uso de la «v» establece que se escriben con esta letra las palabras que comienzan por «eva-», «eve-», «evi-» y «evo-» (evadir, evento, evidente, evolución), con contadas excepciones como «ébano» o «ebanista»; existen además otras reglas relacionadas, por ejemplo, con determinadas terminaciones verbales o con voces procedentes de ciertas raíces latinas.",
  },
  {
    id: "ort-20",
    enunciado: "¿Cuándo recomienda la ortografía académica utilizar el punto y coma en lugar de la coma para separar los elementos de una enumeración?",
    opciones: [
      "Cuando los elementos de la enumeración son sintagmas complejos que ya contienen comas en su interior, para evitar ambigüedad sobre dónde termina cada elemento (por ejemplo, «Asistieron el alcalde, que llegó tarde; la concejala de Cultura; y el resto de la corporación»)",
      "El punto y coma nunca puede usarse en una enumeración, solo la coma",
      "Se usa exclusivamente en textos literarios, nunca en textos administrativos o técnicos",
      "Debe sustituir siempre a la coma en cualquier tipo de enumeración, sin excepción",
    ],
    correcta: 0,
    explicacion:
      "La ortografía académica recomienda utilizar el punto y coma, en lugar de la coma, para separar los elementos de una enumeración cuando estos son sintagmas complejos que ya contienen comas en su interior, con el fin de evitar ambigüedad sobre dónde termina cada elemento de la serie.",
  },
  {
    id: "ort-21",
    enunciado: "¿Qué particularidad presenta el español, frente a otras lenguas como el inglés o el francés, respecto de los signos de interrogación y exclamación?",
    opciones: [
      "El español exige el uso de un signo de apertura (¿ / ¡) además del signo de cierre (? / !), delimitando así con claridad el inicio y el final de la pregunta o exclamación dentro del enunciado",
      "El español es la única lengua que no utiliza en absoluto signos de interrogación o exclamación",
      "El español exige escribir siempre en mayúscula toda la pregunta o exclamación",
      "El español prohíbe el uso de preguntas o exclamaciones dentro de un texto escrito formal",
    ],
    correcta: 0,
    explicacion:
      "A diferencia de lenguas como el inglés o el francés, que solo emplean el signo de cierre, el español exige el uso de un signo de apertura (¿ / ¡) además del signo de cierre (? / !), delimitando así con claridad el inicio y el final exactos de la pregunta o exclamación dentro del enunciado, especialmente útil cuando esta no coincide con la totalidad de la oración.",
  },
  {
    id: "ort-22",
    enunciado: "¿Qué jerarquía de uso recomienda la ortografía académica entre los distintos tipos de comillas (angulares, inglesas y simples)?",
    opciones: [
      "En un texto impreso se recomienda usar en primer lugar las comillas angulares o latinas (« »); si dentro de un texto entrecomillado es necesario entrecomillar de nuevo, se emplean las comillas inglesas (\" \"), y dentro de estas, si fuera necesario, las comillas simples (' ')",
      "Los tres tipos de comillas son completamente equivalentes y pueden usarse indistintamente sin ningún criterio",
      "Las comillas simples son siempre las de uso prioritario en cualquier texto",
      "El uso de comillas ha sido eliminado por completo de la ortografía académica actual",
    ],
    correcta: 0,
    explicacion:
      "La ortografía académica recomienda, en un texto impreso, usar en primer lugar las comillas angulares o latinas (« »); si dentro de un fragmento ya entrecomillado es necesario entrecomillar de nuevo, se emplean las comillas inglesas (\" \"), y si fuera necesario un tercer nivel de entrecomillado dentro de este, las comillas simples (' '), constituyendo así un sistema jerárquico y anidado.",
  },
  {
    id: "ort-23",
    enunciado: "¿Qué diferencia existe entre la raya (—) y el guion (-) en la ortografía española?",
    opciones: [
      "La raya, de mayor longitud, se emplea para enmarcar incisos o para introducir las intervenciones de los interlocutores en un diálogo; el guion, más corto, se emplea para unir los elementos de determinadas palabras compuestas o para dividir palabras al final de una línea",
      "Son términos exactamente sinónimos, sin ninguna diferencia gráfica ni de uso",
      "El guion solo puede usarse en textos literarios, y la raya solo en textos científicos",
      "La raya se emplea exclusivamente para la numeración de listas",
    ],
    correcta: 0,
    explicacion:
      "La raya (—), de mayor longitud que el guion, se emplea principalmente para enmarcar incisos dentro de una oración o para introducir y delimitar las intervenciones de los distintos interlocutores en un diálogo; el guion (-), más corto, se emplea para unir los elementos de determinadas palabras compuestas (como «teórico-práctico») o para dividir una palabra al final de una línea de texto.",
  },
  {
    id: "ort-24",
    enunciado: "¿Cuál es la regla general sobre el uso de mayúscula inicial en los nombres propios frente a los sustantivos comunes?",
    opciones: [
      "Los nombres propios (de persona, lugar, institución, entre otros) se escriben con mayúscula inicial, mientras que los sustantivos comunes (que designan clases genéricas de seres u objetos) se escriben con minúscula, salvo que inicien un enunciado o se apliquen otras reglas específicas de mayúscula",
      "Todos los sustantivos, sean propios o comunes, deben escribirse siempre con mayúscula inicial",
      "Los nombres propios se escriben siempre en minúscula en español",
      "No existe ninguna diferencia de uso entre nombres propios y sustantivos comunes en cuanto a las mayúsculas",
    ],
    correcta: 0,
    explicacion:
      "La regla general de la ortografía académica establece que los nombres propios (de persona, lugar, institución, entre otros, como «Madrid» o «Policía Nacional» en su denominación oficial) se escriben con mayúscula inicial, mientras que los sustantivos comunes (que designan clases genéricas de seres u objetos, como «ciudad» o «policía» en sentido genérico) se escriben con minúscula, salvo que inicien un enunciado o resulte aplicable alguna otra regla específica de uso de mayúscula.",
  },
  {
    id: "ort-25",
    enunciado: "¿Cómo se forma, con carácter general, el plural de las palabras españolas terminadas en consonante?",
    opciones: [
      "Añadiendo «-es» al singular (por ejemplo, «árbol» → «árboles», «reloj» → «relojes»), salvo determinadas excepciones y casos particulares recogidos por la norma académica",
      "Nunca se añade ninguna terminación, el plural es siempre idéntico al singular",
      "Se añade siempre únicamente una «-s», sin ninguna excepción, con independencia de la consonante final",
      "El plural de las palabras terminadas en consonante no está regulado por ninguna norma académica",
    ],
    correcta: 0,
    explicacion:
      "La regla general para formar el plural de las palabras españolas terminadas en consonante consiste en añadir «-es» al singular (por ejemplo, «árbol» → «árboles», «reloj» → «relojes», «rey» → «reyes»), si bien existen casos particulares y excepciones recogidos específicamente por la ortografía y la gramática académicas, como los plurales de palabras terminadas en determinadas consonantes o grupos consonánticos poco habituales en español.",
  },
  {
    id: "ort-26",
    enunciado: "¿Cómo recomienda la ortografía académica formar el plural de los extranjerismos no adaptados y de las siglas?",
    opciones: [
      "Los extranjerismos no adaptados, escritos en cursiva, mantienen preferentemente su plural inalterado o siguen las reglas generales del español según los casos concretos que precise la norma; las siglas, por su parte, son generalmente invariables en plural, indicándose este mediante los determinantes que las acompañan (por ejemplo, «los DNI», no «los DNIs»)",
      "Todos los extranjerismos y las siglas forman siempre su plural añadiendo una «-s» final, sin ninguna excepción",
      "Las siglas nunca pueden usarse en plural bajo ninguna circunstancia",
      "No existe ninguna recomendación académica al respecto, cada persona puede decidir libremente cómo pluralizarlas",
    ],
    correcta: 0,
    explicacion:
      "La ortografía académica recomienda, para los extranjerismos no adaptados (que deben escribirse en cursiva o entre comillas), seguir criterios específicos según cada caso, mientras que las siglas son generalmente invariables en su forma escrita al pluralizarse, expresándose el plural a través del determinante que las acompaña (por ejemplo, «los DNI», «las ONG»), evitando la forma incorrecta de añadir una «-s» final a la sigla («los DNIs»).",
  },
  {
    id: "ort-27",
    enunciado: "¿Qué recomienda la ortografía académica sobre la escritura de las cifras en un texto, en relación con su expresión en letras?",
    opciones: [
      "Con carácter general, se recomienda escribir con letras los números que pueden expresarse en una sola palabra (del cero al veintinueve, las decenas, centenas exactas, entre otros), reservando las cifras para números más complejos o para contextos técnicos, científicos o administrativos donde la precisión y la rapidez de lectura son prioritarias",
      "Todos los números deben escribirse siempre con cifras, sin ninguna excepción",
      "Todos los números deben escribirse siempre con letras, sin ninguna excepción, en cualquier tipo de texto",
      "No existe ninguna recomendación académica sobre esta cuestión",
    ],
    correcta: 0,
    explicacion:
      "La ortografía académica recomienda, con carácter general en textos no especializados, escribir con letras los números que pueden expresarse en una sola palabra (del cero al veintinueve, las decenas y centenas exactas, entre otros), reservando la expresión en cifras para los números más complejos o para aquellos contextos (técnicos, científicos, administrativos, estadísticos) en los que la precisión y la rapidez de lectura resultan prioritarias.",
  },
  {
    id: "ort-28",
    enunciado: "¿Cuáles son los usos principales de los puntos suspensivos (…) en la ortografía española?",
    opciones: [
      "Indicar la interrupción de un enunciado o su final impreciso, señalar la omisión voluntaria de una parte de un texto citado (habitualmente entre corchetes: […]), o crear un efecto de suspense o duda",
      "Sustituir siempre al punto y aparte al final de cualquier párrafo",
      "Indicar exclusivamente el final de una enumeración exhaustiva y cerrada",
      "Los puntos suspensivos han sido eliminados de la ortografía académica actual",
    ],
    correcta: 0,
    explicacion:
      "Los puntos suspensivos (que son siempre tres, ni más ni menos) se emplean principalmente para indicar la interrupción de un enunciado o su final impreciso o dejado en suspenso, para señalar la omisión voluntaria de una parte de un texto citado (habitualmente encerrados entre corchetes: […]), o para crear, en textos literarios, un efecto de suspense, duda o vacilación.",
  },
  {
    id: "ort-29",
    enunciado: "¿Cómo se escriben, según la ortografía académica, los prefijos como «ex-», «pro-» o «anti-» ante una palabra simple?",
    opciones: [
      "Se escriben unidos, sin espacio ni guion, a la palabra base cuando esta es simple (por ejemplo, «exalcalde», «prorrusa», «antidisturbios»), reservándose el guion o la separación para determinados casos especiales, como cuando la base es una sigla, un nombre propio o una expresión pluriverbal",
      "Siempre se escriben separados de la palabra base mediante un espacio, sin ninguna excepción",
      "Siempre se escriben unidos mediante un guion a cualquier tipo de palabra base",
      "Estos prefijos han desaparecido por completo de la ortografía académica actual",
    ],
    correcta: 0,
    explicacion:
      "La ortografía académica establece que los prefijos como «ex-», «pro-» o «anti-» se escriben unidos, sin espacio ni guion, a la palabra base cuando esta es una palabra simple (por ejemplo, «exalcalde», «prorrusa», «antidisturbios»), reservándose el uso del guion o de la escritura separada para determinados casos especiales, como cuando la base es una sigla, un nombre propio o una expresión pluriverbal (por ejemplo, «anti-OTAN» o «ex primer ministro»).",
  },
  {
    id: "ort-30",
    enunciado: "¿Cómo se acentúan gráficamente los adverbios terminados en «-mente» y las formas verbales con pronombres enclíticos añadidos?",
    opciones: [
      "Los adverbios en «-mente» conservan la tilde del adjetivo base si este la llevaba (por ejemplo, «fácil» → «fácilmente»), tratándose a efectos de acentuación como si fueran dos palabras; las formas verbales con pronombres enclíticos siguen las reglas generales de acentuación aplicadas a la palabra resultante en su conjunto (por ejemplo, «dígame», «cómetelo»)",
      "Los adverbios en «-mente» nunca llevan tilde, sea cual sea el adjetivo del que procedan",
      "Las formas verbales con pronombres enclíticos nunca pueden llevar tilde bajo ninguna circunstancia",
      "No existe ninguna regla académica específica sobre la acentuación de estas formas",
    ],
    correcta: 0,
    explicacion:
      "Los adverbios terminados en «-mente» conservan la tilde del adjetivo del que derivan si este la llevaba en su forma femenina (por ejemplo, «fácil» → «fácilmente», «rápida» → «rápidamente»), ya que a efectos de acentuación se comportan como si fueran dos palabras independientes; por su parte, las formas verbales con uno o varios pronombres enclíticos añadidos (como «dígame» o «cómetelo») siguen las reglas generales de acentuación aplicadas a la palabra resultante considerada en su conjunto, pudiendo generar formas esdrújulas o sobresdrújulas que exigen tilde.",
  },
];
