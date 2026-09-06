import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Concepto de droga y clasificación",
      puntos: [
        "OMS: toda sustancia que, introducida en el organismo, modifica una o varias de sus funciones y puede generar dependencia.",
        "Clasificación por efecto: depresoras (alcohol, opiáceos, benzodiacepinas), estimulantes (cocaína, anfetaminas, cafeína), perturbadoras o alucinógenas (LSD, cannabis, éxtasis).",
      ],
    },
    {
      titulo: "Conceptos clínicos básicos",
      puntos: [
        "Tolerancia: necesidad de aumentar la dosis para lograr el mismo efecto.",
        "Síndrome de abstinencia: síntomas físicos/psíquicos al reducir o suprimir el consumo habitual.",
        "Gradación uso — abuso — dependencia: del consumo ocasional sin consecuencias, al consumo problemático, hasta la pérdida de control con tolerancia y abstinencia.",
      ],
    },
    {
      titulo: "Marco institucional en España",
      puntos: [
        "Plan Nacional sobre Drogas: estrategia estatal de coordinación de políticas de prevención, asistencia e inserción social.",
        "Delegación del Gobierno para el Plan Nacional sobre Drogas, adscrita al Ministerio de Sanidad.",
      ],
    },
    {
      titulo: "Estrategias de intervención",
      puntos: [
        "Prevención: universal (dirigida a toda la población), selectiva (grupos de riesgo) e indicada (personas con consumo ya iniciado).",
        "Reducción de daños: minimizar consecuencias negativas del consumo sin exigir abstinencia previa (programas de intercambio de jeringuillas, salas de consumo supervisado).",
        "Tratamiento y reinserción social de las personas con dependencia.",
      ],
    },
    {
      titulo: "Papel de las Fuerzas y Cuerpos de Seguridad",
      puntos: [
        "Persecución del tráfico ilícito de drogas (Código Penal, arts. 368 y siguientes) y de las infracciones administrativas de la LO 4/2015 en materia de consumo en la vía pública.",
        "Colaboración en la prevención del consumo, especialmente entre menores, en coordinación con servicios sanitarios y sociales.",
      ],
    },
  ],
};
