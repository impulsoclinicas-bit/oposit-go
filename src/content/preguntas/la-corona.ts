import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "cor-01",
    enunciado: "El Título II de la Constitución, 'De la Corona', comprende los artículos:",
    opciones: ["56 a 65", "57 a 70", "60 a 75", "56 a 70"],
    correcta: 0,
    explicacion: "El Título II abarca los artículos 56 a 65 de la Constitución.",
  },
  {
    id: "cor-02",
    enunciado: "Según el artículo 56 CE, el Rey es:",
    opciones: [
      "El Jefe del Gobierno y símbolo de la unidad del Estado",
      "El Jefe del Estado, símbolo de su unidad y permanencia",
      "El titular del Poder Judicial",
      "El presidente honorífico de las Cortes Generales",
    ],
    correcta: 1,
    explicacion:
      "El art. 56.1 CE define al Rey como Jefe del Estado, símbolo de su unidad y permanencia, que arbitra y modera el funcionamiento regular de las instituciones.",
  },
  {
    id: "cor-03",
    enunciado: "La persona del Rey, según el artículo 56.3 CE, es:",
    opciones: [
      "Responsable políticamente ante las Cortes",
      "Inviolable y no sujeta a responsabilidad",
      "Responsable únicamente ante el Tribunal Constitucional",
      "Aforada ante el Tribunal Supremo",
    ],
    correcta: 1,
    explicacion:
      "El art. 56.3 CE declara que la persona del Rey es inviolable y no está sujeta a responsabilidad; sus actos están siempre refrendados.",
  },
  {
    id: "cor-04",
    enunciado:
      "En el orden de sucesión a la Corona regulado en el artículo 57.1 CE, ante igual grado, la preferencia es:",
    opciones: [
      "La persona de menos edad sobre la de más edad",
      "El varón a la mujer, y en el mismo sexo la persona de más edad a la de menos",
      "Se decide por sorteo entre las Cortes Generales",
      "La línea materna sobre la paterna",
    ],
    correcta: 1,
    explicacion:
      "El art. 57.1 CE establece la preferencia de las líneas anteriores sobre las posteriores, en la misma línea el grado más próximo sobre el más remoto, en el mismo grado el varón sobre la mujer, y en el mismo sexo la persona de más edad sobre la de menos.",
  },
  {
    id: "cor-05",
    enunciado: "¿Qué artículo regula la Regencia?",
    opciones: ["Artículo 57", "Artículo 59", "Artículo 60", "Artículo 62"],
    correcta: 1,
    explicacion: "El artículo 59 CE regula los supuestos y el ejercicio de la Regencia.",
  },
  {
    id: "cor-06",
    enunciado: "¿Qué artículo regula la tutela del Rey menor de edad?",
    opciones: ["Artículo 59", "Artículo 60", "Artículo 61", "Artículo 65"],
    correcta: 1,
    explicacion: "El artículo 60 CE regula quién ejerce la tutela del Rey mientras sea menor de edad.",
  },
  {
    id: "cor-07",
    enunciado:
      "¿Cuál de las siguientes NO es una función del Rey recogida en el artículo 62 CE?",
    opciones: [
      "Sancionar y promulgar las leyes",
      "Proponer el candidato a Presidente del Gobierno y nombrarlo",
      "Dictar sentencias en nombre del Estado",
      "Ejercer el mando supremo de las Fuerzas Armadas",
    ],
    correcta: 2,
    explicacion:
      "El Rey no dicta sentencias: la justicia se administra por Jueces y Magistrados en nombre del Rey (art. 117 CE), pero corresponde al Poder Judicial, no al Rey directamente.",
  },
  {
    id: "cor-08",
    enunciado: "Según el artículo 62 CE, el Rey puede convocar y disolver:",
    opciones: [
      "Solo el Congreso de los Diputados",
      "Las Cortes Generales y convocar elecciones en los términos previstos en la Constitución",
      "Solo el Senado",
      "El Gobierno en pleno",
    ],
    correcta: 1,
    explicacion:
      "Entre las funciones del art. 62 CE está convocar y disolver las Cortes Generales y convocar elecciones en los términos previstos en la Constitución.",
  },
  {
    id: "cor-09",
    enunciado: "¿Qué artículo regula el refrendo de los actos del Rey?",
    opciones: ["Artículo 62", "Artículo 64", "Artículo 65", "Artículo 56"],
    correcta: 1,
    explicacion:
      "El artículo 64 CE establece que los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes, careciendo de validez sin dicho refrendo salvo lo dispuesto en el art. 65.2.",
  },
  {
    id: "cor-10",
    enunciado:
      "Según el artículo 65.2 CE, ¿qué puede hacer el Rey libremente, sin necesidad de refrendo?",
    opciones: [
      "Disolver las Cortes Generales",
      "Nombrar a los miembros civiles y militares de su Casa",
      "Sancionar y promulgar las leyes",
      "Convocar un referéndum",
    ],
    correcta: 1,
    explicacion:
      "El art. 65.2 CE permite al Rey nombrar y relevar libremente a los miembros civiles y militares de su Casa, uno de los pocos actos no sujetos a refrendo.",
  },
  {
    id: "cor-11",
    enunciado: "El título oficial del Jefe del Estado, según el artículo 56.2 CE, es:",
    opciones: [
      "Su Majestad el Rey de España",
      "Presidente vitalicio de las Cortes",
      "Jefe Supremo de las Fuerzas Armadas",
      "Rey Constitucional de España",
    ],
    correcta: 0,
    explicacion:
      "El art. 56.2 CE establece que el título del Rey es el de Rey de España, y podrá utilizar los demás que correspondan a la Corona.",
  },
  {
    id: "cor-12",
    enunciado:
      "¿A quién corresponde proponer el candidato a Presidente del Gobierno tras la celebración de elecciones generales?",
    opciones: [
      "Al Congreso de los Diputados por mayoría simple",
      "Al Rey, previa consulta con los representantes designados por los grupos políticos con representación parlamentaria",
      "Al Senado",
      "Al Presidente saliente del Gobierno",
    ],
    correcta: 1,
    explicacion:
      "El artículo 99 CE encomienda al Rey, previa consulta con los representantes designados por los grupos políticos con representación parlamentaria, proponer un candidato a la Presidencia del Gobierno.",
  },
];
