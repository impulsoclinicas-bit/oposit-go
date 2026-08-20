import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "psa-01",
    enunciado: "A, C, E, G, ¿?",
    opciones: ["H", "I", "J", "F"],
    correcta: 1,
    explicacion: "Se salta una letra cada vez (A, _B_, C, _D_, E...): tras la G va la I.",
  },
  {
    id: "psa-02",
    enunciado: "B, D, G, K, ¿?",
    opciones: ["N", "O", "P", "M"],
    correcta: 2,
    explicacion:
      "El salto entre letras aumenta cada vez (+2, +3, +4, +5): de la K, avanzando 5 posiciones, se llega a la P.",
  },
  {
    id: "psa-03",
    enunciado: "Z, X, V, T, ¿?",
    opciones: ["S", "R", "Q", "U"],
    correcta: 1,
    explicacion: "La serie retrocede de 2 en 2 en el alfabeto: tras la T va la R.",
  },
  {
    id: "psa-04",
    enunciado: "A, B, D, G, ¿?",
    opciones: ["J", "K", "I", "H"],
    correcta: 1,
    explicacion:
      "El salto aumenta cada vez (+1, +2, +3, +4): desde la G, avanzando 4 posiciones, se llega a la K.",
  },
  {
    id: "psa-05",
    enunciado: "C, F, I, L, ¿?",
    opciones: ["N", "O", "P", "M"],
    correcta: 1,
    explicacion: "Se avanza 3 letras cada vez: tras la L va la O.",
  },
  {
    id: "psa-06",
    enunciado: "M, N, P, S, ¿?",
    opciones: ["V", "W", "U", "T"],
    correcta: 1,
    explicacion:
      "El salto aumenta cada vez (+1, +2, +3, +4): desde la S, avanzando 4 posiciones, se llega a la W.",
  },
  {
    id: "psa-07",
    enunciado: "D, H, L, P, ¿?",
    opciones: ["R", "S", "T", "U"],
    correcta: 2,
    explicacion: "Se avanza 4 letras cada vez: tras la P va la T.",
  },
  {
    id: "psa-08",
    enunciado: "A, E, I, ¿?, U",
    opciones: ["N", "O", "M", "L"],
    correcta: 1,
    explicacion: "Son las vocales en orden: A, E, I, O, U.",
  },
];
