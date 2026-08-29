import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "psn-01",
    enunciado: "2, 4, 8, 16, ¿?",
    opciones: ["20", "24", "32", "30"],
    correcta: 2,
    explicacion: "Cada término se multiplica por 2: 16 × 2 = 32.",
  },
  {
    id: "psn-02",
    enunciado: "1, 4, 9, 16, 25, ¿?",
    opciones: ["30", "32", "36", "49"],
    correcta: 2,
    explicacion: "Son los cuadrados de 1, 2, 3, 4, 5, 6: 6² = 36.",
  },
  {
    id: "psn-03",
    enunciado: "3, 6, 12, 24, ¿?",
    opciones: ["36", "42", "48", "30"],
    correcta: 2,
    explicacion: "Cada término se multiplica por 2: 24 × 2 = 48.",
  },
  {
    id: "psn-04",
    enunciado: "1, 1, 2, 3, 5, 8, ¿?",
    opciones: ["11", "12", "13", "10"],
    correcta: 2,
    explicacion:
      "Es la serie de Fibonacci: cada término es la suma de los dos anteriores. 5 + 8 = 13.",
  },
  {
    id: "psn-05",
    enunciado: "20, 17, 14, 11, ¿?",
    opciones: ["9", "8", "7", "10"],
    correcta: 1,
    explicacion: "La serie resta 3 en cada paso: 11 − 3 = 8.",
  },
  {
    id: "psn-06",
    enunciado: "5, 10, 9, 18, 17, ¿?",
    opciones: ["16", "34", "33", "20"],
    correcta: 1,
    explicacion:
      "Se alternan dos operaciones: ×2 y −1. 17 × 2 = 34.",
  },
  {
    id: "psn-07",
    enunciado: "2, 6, 12, 20, 30, ¿?",
    opciones: ["36", "40", "42", "44"],
    correcta: 2,
    explicacion:
      "La diferencia entre términos aumenta de 2 en 2 (4, 6, 8, 10, 12): 30 + 12 = 42.",
  },
  {
    id: "psn-08",
    enunciado: "100, 90, 81, 73, ¿?",
    opciones: ["68", "67", "66", "65"],
    correcta: 2,
    explicacion:
      "La diferencia entre términos disminuye de 1 en 1 (−10, −9, −8, −7): 73 − 7 = 66.",
  },
  {
    id: "psn-09",
    enunciado: "7, 14, 28, 56, ¿?",
    opciones: ["84", "98", "112", "120"],
    correcta: 2,
    explicacion: "Cada término se multiplica por 2: 56 × 2 = 112.",
  },
  {
    id: "psn-10",
    enunciado: "1, 3, 6, 10, 15, ¿?",
    opciones: ["18", "20", "21", "24"],
    correcta: 2,
    explicacion:
      "Son los números triangulares: la diferencia entre términos aumenta de 1 en 1 (2, 3, 4, 5, 6): 15 + 6 = 21.",
  },
  {
    id: "psn-11",
    enunciado: "81, 27, 9, 3, ¿?",
    opciones: ["0", "1", "2", "3"],
    correcta: 1,
    explicacion: "Cada término se divide entre 3: 3 ÷ 3 = 1.",
  },
  {
    id: "psn-12",
    enunciado: "4, 9, 16, 25, 36, ¿?",
    opciones: ["42", "45", "49", "48"],
    correcta: 2,
    explicacion: "Son los cuadrados de 2, 3, 4, 5, 6, 7: 7² = 49.",
  },
  {
    id: "psn-13",
    enunciado: "3, 5, 9, 15, 23, ¿?",
    opciones: ["31", "32", "33", "35"],
    correcta: 2,
    explicacion:
      "La diferencia entre términos aumenta de 2 en 2 (2, 4, 6, 8, 10): 23 + 10 = 33.",
  },
  {
    id: "psn-14",
    enunciado: "2, 3, 5, 8, 13, 21, ¿?",
    opciones: ["29", "31", "34", "36"],
    correcta: 2,
    explicacion:
      "Cada término es la suma de los dos anteriores (como Fibonacci): 13 + 21 = 34.",
  },
  {
    id: "psn-15",
    enunciado: "90, 80, 71, 63, ¿?",
    opciones: ["55", "56", "57", "58"],
    correcta: 1,
    explicacion:
      "La diferencia entre términos disminuye de 1 en 1 (−10, −9, −8, −7): 63 − 7 = 56.",
  },
  {
    id: "psn-16",
    enunciado: "6, 12, 24, 48, ¿?",
    opciones: ["84", "90", "96", "108"],
    correcta: 2,
    explicacion: "Cada término se multiplica por 2: 48 × 2 = 96.",
  },
];
