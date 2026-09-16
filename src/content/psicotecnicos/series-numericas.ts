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
  {
    id: "psn-17",
    enunciado: "5, 8, 12, 17, 23, ¿?",
    opciones: ["28", "29", "30", "31"],
    correcta: 2,
    explicacion:
      "La diferencia entre términos aumenta de 1 en 1 (3, 4, 5, 6, 7): 23 + 7 = 30.",
  },
  {
    id: "psn-18",
    enunciado: "2, 5, 11, 23, 47, ¿?",
    opciones: ["94", "95", "96", "97"],
    correcta: 1,
    explicacion: "Cada término se multiplica por 2 y se suma 1: 47 × 2 + 1 = 95.",
  },
  {
    id: "psn-19",
    enunciado: "64, 32, 16, 8, ¿?",
    opciones: ["2", "3", "4", "6"],
    correcta: 2,
    explicacion: "Cada término se divide entre 2: 8 ÷ 2 = 4.",
  },
  {
    id: "psn-20",
    enunciado: "1, 2, 4, 7, 11, ¿?",
    opciones: ["15", "16", "17", "18"],
    correcta: 1,
    explicacion:
      "La diferencia entre términos aumenta de 1 en 1 (1, 2, 3, 4, 5): 11 + 5 = 16.",
  },
  {
    id: "psn-21",
    enunciado: "3, 7, 15, 31, ¿?",
    opciones: ["61", "62", "63", "64"],
    correcta: 2,
    explicacion: "Cada término se multiplica por 2 y se suma 1: 31 × 2 + 1 = 63.",
  },
  {
    id: "psn-22",
    enunciado: "10, 20, 19, 29, 28, ¿?",
    opciones: ["27", "37", "38", "39"],
    correcta: 2,
    explicacion: "Se alternan dos operaciones: +10 y −1. 28 + 10 = 38.",
  },
  {
    id: "psn-23",
    enunciado: "2, 6, 18, 54, ¿?",
    opciones: ["108", "150", "162", "180"],
    correcta: 2,
    explicacion: "Cada término se multiplica por 3: 54 × 3 = 162.",
  },
  {
    id: "psn-24",
    enunciado: "50, 47, 44, 41, ¿?",
    opciones: ["37", "38", "39", "40"],
    correcta: 1,
    explicacion: "La serie resta 3 en cada paso: 41 − 3 = 38.",
  },
  {
    id: "psn-25",
    enunciado: "1, 2, 6, 24, 120, ¿?",
    opciones: ["620", "700", "720", "740"],
    correcta: 2,
    explicacion:
      "Cada término se multiplica por un número que crece de uno en uno (×2, ×3, ×4, ×5, ×6): 120 × 6 = 720.",
  },
  {
    id: "psn-26",
    enunciado: "9, 16, 25, 36, ¿?",
    opciones: ["42", "45", "47", "49"],
    correcta: 3,
    explicacion: "Son los cuadrados de 3, 4, 5, 6, 7: 7² = 49.",
  },
  {
    id: "psn-27",
    enunciado: "8, 12, 17, 23, 30, ¿?",
    opciones: ["36", "37", "38", "39"],
    correcta: 2,
    explicacion:
      "La diferencia entre términos aumenta de 1 en 1 (4, 5, 6, 7, 8): 30 + 8 = 38.",
  },
  {
    id: "psn-28",
    enunciado: "96, 48, 24, 12, ¿?",
    opciones: ["4", "5", "6", "8"],
    correcta: 2,
    explicacion: "Cada término se divide entre 2: 12 ÷ 2 = 6.",
  },
  {
    id: "psn-29",
    enunciado: "1, 8, 27, 64, ¿?",
    opciones: ["100", "110", "120", "125"],
    correcta: 3,
    explicacion: "Son los cubos de 1, 2, 3, 4, 5: 5³ = 125.",
  },
  {
    id: "psn-30",
    enunciado: "7, 9, 13, 19, 27, ¿?",
    opciones: ["35", "36", "37", "39"],
    correcta: 2,
    explicacion:
      "La diferencia entre términos aumenta de 2 en 2 (2, 4, 6, 8, 10): 27 + 10 = 37.",
  },
];
