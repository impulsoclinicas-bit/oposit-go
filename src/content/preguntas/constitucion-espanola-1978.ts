import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "cons-01",
    enunciado: "¿En qué fecha fue aprobada la Constitución Española por referéndum?",
    opciones: [
      "31 de octubre de 1978",
      "6 de diciembre de 1978",
      "27 de diciembre de 1978",
      "29 de diciembre de 1978",
    ],
    correcta: 1,
    explicacion:
      "Las Cortes Generales la aprobaron el 31 de octubre de 1978, el pueblo español la ratificó en referéndum el 6 de diciembre de 1978 y el Rey la sancionó el 27 de diciembre, entrando en vigor el 29 de diciembre de 1978.",
  },
  {
    id: "cons-02",
    enunciado: "¿Cuántos artículos tiene la Constitución Española de 1978?",
    opciones: ["149", "158", "169", "175"],
    correcta: 2,
    explicacion:
      "La Constitución consta de 169 artículos, además de disposiciones adicionales, transitorias, una derogatoria y una final.",
  },
  {
    id: "cons-03",
    enunciado:
      "Según el artículo 1.1 de la Constitución, ¿cuáles son los valores superiores del ordenamiento jurídico?",
    opciones: [
      "Libertad, igualdad, fraternidad y justicia",
      "Libertad, justicia, igualdad y pluralismo político",
      "Justicia, seguridad, igualdad y solidaridad",
      "Libertad, democracia, unidad e igualdad",
    ],
    correcta: 1,
    explicacion:
      "El art. 1.1 CE establece que España se constituye en un Estado social y democrático de Derecho, que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político.",
  },
  {
    id: "cons-04",
    enunciado: "¿Dónde reside la soberanía nacional según el artículo 1.2 CE?",
    opciones: [
      "En las Cortes Generales",
      "En el Rey",
      "En el pueblo español",
      "En el Gobierno",
    ],
    correcta: 2,
    explicacion:
      "El art. 1.2 CE dispone que la soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado.",
  },
  {
    id: "cons-05",
    enunciado: "¿Cuál es la forma política del Estado español según el artículo 1.3 CE?",
    opciones: [
      "República parlamentaria",
      "Monarquía parlamentaria",
      "Monarquía constitucional",
      "Estado federal",
    ],
    correcta: 1,
    explicacion: "El art. 1.3 CE establece que la forma política del Estado español es la Monarquía parlamentaria.",
  },
  {
    id: "cons-06",
    enunciado:
      "El artículo 2 de la Constitución reconoce el derecho a la autonomía de:",
    opciones: [
      "Las provincias y los municipios",
      "Las nacionalidades y regiones que integran la Nación española",
      "Únicamente las Comunidades Autónomas históricas",
      "Los ayuntamientos con más de 20.000 habitantes",
    ],
    correcta: 1,
    explicacion:
      "El art. 2 CE reconoce y garantiza el derecho a la autonomía de las nacionalidades y regiones que integran la indisoluble unidad de la Nación española.",
  },
  {
    id: "cons-07",
    enunciado: "Según el artículo 3 CE, el castellano es:",
    opciones: [
      "Una lengua cooficial más, sin carácter preferente",
      "La lengua española oficial del Estado, con deber de conocerla y derecho a usarla",
      "Oficial solo en las Comunidades Autónomas sin lengua propia",
      "Oficial únicamente en las relaciones con la Administración central",
    ],
    correcta: 1,
    explicacion:
      "El art. 3.1 CE dice que el castellano es la lengua española oficial del Estado y que todos los españoles tienen el deber de conocerla y el derecho a usarla.",
  },
  {
    id: "cons-08",
    enunciado: "¿Qué título de la Constitución regula los derechos y deberes fundamentales?",
    opciones: ["Título Preliminar", "Título I", "Título II", "Título VIII"],
    correcta: 1,
    explicacion: "El Título I, 'De los derechos y deberes fundamentales', comprende los artículos 10 a 55.",
  },
  {
    id: "cons-09",
    enunciado: "¿Qué título de la Constitución regula la Corona?",
    opciones: ["Título I", "Título II", "Título III", "Título IV"],
    correcta: 1,
    explicacion: "El Título II, 'De la Corona', comprende los artículos 56 a 65.",
  },
  {
    id: "cons-10",
    enunciado: "¿Qué título regula las Cortes Generales?",
    opciones: ["Título II", "Título III", "Título IV", "Título V"],
    correcta: 1,
    explicacion: "El Título III, 'De las Cortes Generales', comprende los artículos 66 a 96.",
  },
  {
    id: "cons-11",
    enunciado: "¿Qué título de la Constitución regula el Poder Judicial?",
    opciones: ["Título V", "Título VI", "Título VII", "Título VIII"],
    correcta: 1,
    explicacion: "El Título VI, 'Del Poder Judicial', comprende los artículos 117 a 127.",
  },
  {
    id: "cons-12",
    enunciado: "¿Qué título regula la organización territorial del Estado?",
    opciones: ["Título VII", "Título VIII", "Título IX", "Título X"],
    correcta: 1,
    explicacion:
      "El Título VIII, 'De la Organización Territorial del Estado', comprende los artículos 137 a 158.",
  },
  {
    id: "cons-13",
    enunciado: "¿Cuál es el último título de la Constitución y qué regula?",
    opciones: [
      "Título IX, el Tribunal Constitucional",
      "Título X, la reforma constitucional",
      "Título XI, la Unión Europea",
      "Título X, la Corona",
    ],
    correcta: 1,
    explicacion:
      "El Título X, 'De la reforma constitucional', artículos 166 a 169, es el último título del articulado de la CE.",
  },
  {
    id: "cons-14",
    enunciado:
      "¿Cómo se define habitualmente el procedimiento de reforma de la Constitución Española?",
    opciones: [
      "Flexible, como el de una ley ordinaria",
      "Rígido, con procedimientos agravados respecto a una ley ordinaria",
      "Inexistente, la Constitución es inmodificable",
      "Delegado íntegramente en el Tribunal Constitucional",
    ],
    correcta: 1,
    explicacion:
      "La Constitución española es una constitución rígida: su reforma exige procedimientos agravados (arts. 167 y 168 CE) respecto al procedimiento legislativo ordinario.",
  },
  {
    id: "cons-15",
    enunciado: "El artículo 9.1 CE establece que están sujetos a la Constitución y al resto del ordenamiento jurídico:",
    opciones: [
      "Solo los poderes públicos",
      "Solo los ciudadanos",
      "Los ciudadanos y los poderes públicos",
      "Únicamente las Fuerzas Armadas",
    ],
    correcta: 2,
    explicacion:
      "El art. 9.1 CE dispone que los ciudadanos y los poderes públicos están sujetos a la Constitución y al resto del ordenamiento jurídico.",
  },
  {
    id: "cons-16",
    enunciado: "¿Qué artículo de la Constitución regula la bandera de España?",
    opciones: ["Artículo 3", "Artículo 4", "Artículo 5", "Artículo 6"],
    correcta: 1,
    explicacion: "El artículo 4 CE regula la bandera de España (roja, amarilla y roja).",
  },
  {
    id: "cons-17",
    enunciado: "Según el artículo 8 CE, la misión de las Fuerzas Armadas es:",
    opciones: [
      "Mantener el orden público en las ciudades",
      "Garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional",
      "Colaborar exclusivamente en catástrofes naturales",
      "Ejecutar las sentencias de los tribunales militares",
    ],
    correcta: 1,
    explicacion:
      "El art. 8.1 CE encomienda a las Fuerzas Armadas garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional.",
  },
  {
    id: "cons-18",
    enunciado: "¿Cuál de estas es una característica habitualmente atribuida a la Constitución de 1978?",
    opciones: [
      "Fue impuesta sin negociación entre las fuerzas políticas",
      "Es una constitución breve, de menos de 50 artículos",
      "Es fruto del consenso entre las principales fuerzas políticas de la Transición",
      "No contempla ningún procedimiento de reforma",
    ],
    correcta: 2,
    explicacion:
      "Una de sus características más destacadas es el consenso: fue elaborada y pactada por las principales fuerzas políticas representadas en las Cortes constituyentes.",
  },
];
