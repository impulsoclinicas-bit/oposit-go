import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "tc-01",
    enunciado: "¿Cuántos Magistrados componen el Tribunal Constitucional?",
    opciones: ["9", "10", "12", "15"],
    correcta: 2,
    explicacion:
      "El artículo 5 de la LOTC establece que el Tribunal Constitucional está integrado por doce miembros, con el título de Magistrados del Tribunal Constitucional.",
  },
  {
    id: "tc-02",
    enunciado: "¿Cómo se distribuye la propuesta de nombramiento de los 12 Magistrados del Tribunal Constitucional?",
    opciones: [
      "6 el Congreso, 6 el Senado",
      "4 el Congreso, 4 el Senado, 2 el Gobierno, 2 el CGPJ",
      "12 designados libremente por el Gobierno",
      "8 el Congreso y el Senado conjuntamente, 4 el CGPJ",
    ],
    correcta: 1,
    explicacion:
      "El art. 16.1 LOTC, en desarrollo del art. 159.1 CE, distribuye la propuesta en 4 del Congreso, 4 del Senado (ambos por mayoría de 3/5), 2 del Gobierno y 2 del Consejo General del Poder Judicial.",
  },
  {
    id: "tc-03",
    enunciado: "¿Cuál es la duración del mandato de los Magistrados del Tribunal Constitucional?",
    opciones: ["5 años", "6 años", "9 años, renovándose por terceras partes cada 3", "Vitalicio hasta la jubilación"],
    correcta: 2,
    explicacion:
      "El art. 16.3 LOTC fija la designación por nueve años, renovándose el Tribunal por terceras partes cada tres años.",
  },
  {
    id: "tc-04",
    enunciado: "¿En cuántas Salas se divide el Tribunal Constitucional y cuántos Magistrados tiene cada una?",
    opciones: ["Dos Salas de 6 Magistrados cada una", "Tres Salas de 4 Magistrados", "No se divide en Salas", "Dos Salas de 5 Magistrados"],
    correcta: 0,
    explicacion: "El art. 7.1 LOTC establece que el Tribunal consta de dos Salas, compuesta cada una por seis Magistrados.",
  },
  {
    id: "tc-05",
    enunciado: "¿Cuál de las siguientes NO es una competencia del Tribunal Constitucional según el artículo 2 LOTC?",
    opciones: [
      "El recurso de amparo por violación de derechos y libertades del art. 53.2 CE",
      "Los conflictos de competencia entre el Estado y las Comunidades Autónomas",
      "La casación de sentencias penales dictadas por el Tribunal Supremo",
      "La declaración sobre la constitucionalidad de los tratados internacionales",
    ],
    correcta: 2,
    explicacion:
      "La casación de sentencias penales corresponde al Tribunal Supremo, no al Tribunal Constitucional, que no es una instancia judicial ordinaria adicional.",
  },
  {
    id: "tc-06",
    enunciado: "¿Quiénes están legitimados para interponer el recurso de inconstitucionalidad contra una ley estatal, junto al Presidente del Gobierno y el Defensor del Pueblo?",
    opciones: [
      "25 Diputados o 25 Senadores",
      "50 Diputados o 50 Senadores",
      "Cualquier ciudadano mayor de edad",
      "El Fiscal General del Estado únicamente",
    ],
    correcta: 1,
    explicacion: "El art. 32.1 LOTC legitima, además del Presidente del Gobierno y el Defensor del Pueblo, a cincuenta Diputados o cincuenta Senadores.",
  },
  {
    id: "tc-07",
    enunciado: "¿Cuál es el plazo general para interponer el recurso de inconstitucionalidad desde la publicación de la norma?",
    opciones: ["Un mes", "Tres meses", "Seis meses", "Un año"],
    correcta: 1,
    explicacion: "El art. 33.1 LOTC fija el plazo general en tres meses a partir de la publicación de la ley, disposición o acto con fuerza de ley impugnado.",
  },
  {
    id: "tc-08",
    enunciado:
      "¿Qué derechos protege específicamente el recurso de amparo constitucional según el artículo 41 LOTC?",
    opciones: [
      "Todos los derechos reconocidos en la Constitución sin excepción",
      "Los derechos y libertades de los artículos 14 a 29 CE, y la objeción de conciencia del art. 30",
      "Únicamente los derechos económicos y sociales del Capítulo III del Título I",
      "Solo el derecho a la tutela judicial efectiva",
    ],
    correcta: 1,
    explicacion:
      "El art. 41.1 LOTC circunscribe el amparo constitucional a los derechos y libertades reconocidos en los arts. 14 a 29 CE, extendiendo igual protección a la objeción de conciencia del art. 30.",
  },
  {
    id: "tc-09",
    enunciado: "Para que se admita un recurso de amparo, el artículo 50 LOTC exige que el recurso:",
    opciones: [
      "Sea presentado por un Letrado del Estado",
      "Justifique su especial trascendencia constitucional",
      "Verse necesariamente sobre una ley y no sobre un acto administrativo",
      "Cuente con el visto bueno previo del Defensor del Pueblo",
    ],
    correcta: 1,
    explicacion:
      "El art. 50.1.b) LOTC exige que el contenido del recurso justifique una decisión sobre el fondo por su especial trascendencia constitucional.",
  },
  {
    id: "tc-10",
    enunciado: "¿Qué valor tienen las sentencias del Tribunal Constitucional según el artículo 38 LOTC?",
    opciones: [
      "Son meramente orientativas para los tribunales ordinarios",
      "Tienen valor de cosa juzgada, vinculan a todos los poderes públicos y producen efectos generales desde su publicación en el BOE",
      "Solo vinculan a las partes del proceso concreto",
      "Pueden ser recurridas ante el Tribunal Supremo",
    ],
    correcta: 1,
    explicacion:
      "El art. 38.1 LOTC establece que las sentencias recaídas en procedimientos de inconstitucionalidad tienen valor de cosa juzgada, vinculan a todos los poderes públicos y producen efectos generales desde su publicación en el BOE.",
  },
  {
    id: "tc-11",
    enunciado: "¿Cabe recurso contra las sentencias del Tribunal Constitucional?",
    opciones: [
      "Sí, ante el Tribunal Supremo",
      "Sí, ante el Tribunal Europeo de Derechos Humanos en todo caso",
      "No cabe recurso alguno, solo solicitar aclaración en el plazo de dos días",
      "Sí, mediante un nuevo recurso de amparo",
    ],
    correcta: 2,
    explicacion: "El art. 93.1 LOTC dispone que contra las sentencias del Tribunal Constitucional no cabe recurso alguno, si bien en el plazo de dos días las partes pueden solicitar su aclaración.",
  },
  {
    id: "tc-12",
    enunciado: "¿Quién elige al Presidente del Tribunal Constitucional y por cuánto tiempo?",
    opciones: [
      "Lo nombra el Rey libremente por 5 años",
      "Lo elige el Pleno entre sus miembros y lo propone al Rey, por un período de 3 años",
      "Lo elige el Congreso de los Diputados por 9 años",
      "Es siempre el Magistrado de mayor edad",
    ],
    correcta: 1,
    explicacion: "El art. 9 LOTC establece que el Presidente es elegido por el Pleno entre sus miembros, se propone al Rey para su nombramiento, y su mandato dura tres años, pudiendo ser reelegido una sola vez.",
  },
];
