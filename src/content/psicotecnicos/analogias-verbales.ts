import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "psv-01",
    enunciado: "PERRO es a CACHORRO como GATO es a:",
    opciones: ["Felino", "Gatito", "Ratón", "Maullido"],
    correcta: 1,
    explicacion: "Un cachorro es la cría del perro; un gatito es la cría del gato.",
  },
  {
    id: "psv-02",
    enunciado: "MÉDICO es a HOSPITAL como PROFESOR es a:",
    opciones: ["Libro", "Alumno", "Colegio", "Examen"],
    correcta: 2,
    explicacion: "Un médico ejerce en un hospital; un profesor ejerce en un colegio.",
  },
  {
    id: "psv-03",
    enunciado: "LLAVE es a CERRADURA como CONTRASEÑA es a:",
    opciones: ["Ordenador", "Acceso", "Usuario", "Seguridad"],
    correcta: 1,
    explicacion: "Una llave sirve para abrir una cerradura; una contraseña sirve para obtener acceso.",
  },
  {
    id: "psv-04",
    enunciado: "RÁPIDO es a LENTO como ALTO es a:",
    opciones: ["Grande", "Bajo", "Pequeño", "Ancho"],
    correcta: 1,
    explicacion: "Son parejas de antónimos: rápido/lento y alto/bajo.",
  },
  {
    id: "psv-05",
    enunciado: "POLICÍA es a LEY como MÉDICO es a:",
    opciones: ["Salud", "Hospital", "Enfermedad", "Paciente"],
    correcta: 0,
    explicacion: "La policía vela por el cumplimiento de la ley; el médico vela por la salud.",
  },
  {
    id: "psv-06",
    enunciado: "OJO es a VER como OÍDO es a:",
    opciones: ["Sonido", "Hablar", "Oír", "Ruido"],
    correcta: 2,
    explicacion: "El ojo es el órgano con el que vemos; el oído es el órgano con el que oímos.",
  },
  {
    id: "psv-07",
    enunciado: "DELITO es a SANCIÓN como MÉRITO es a:",
    opciones: ["Esfuerzo", "Trabajo", "Recompensa", "Castigo"],
    correcta: 2,
    explicacion: "Un delito conlleva una sanción; un mérito conlleva una recompensa.",
  },
  {
    id: "psv-08",
    enunciado: "SEMANA es a DÍA como AÑO es a:",
    opciones: ["Estación", "Mes", "Década", "Siglo"],
    correcta: 1,
    explicacion: "Una semana se compone de días; un año se compone de meses.",
  },
];
