import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Concepto de delito y principios penales",
      puntos: [
        "Delito (art. 10 CP): acciones y omisiones dolosas o imprudentes penadas por la ley.",
        "Elementos del delito: acción/omisión típica, antijurídica y culpable.",
        "Principio de legalidad (art. 25.1 CE, art. 1 CP): nullum crimen, nulla poena sine lege previa, scripta, stricta y certa.",
        "Principio de intervención mínima: el Derecho Penal como último recurso (ultima ratio).",
        "Principio de culpabilidad: no hay pena sin culpabilidad del autor.",
        "Principio de proporcionalidad de las penas respecto a la gravedad del hecho.",
      ],
    },
    {
      titulo: "Dolo e imprudencia",
      puntos: [
        "Dolo: conocimiento y voluntad de realizar los elementos del tipo penal (dolo directo) o aceptación de su probable producción (dolo eventual).",
        "Imprudencia (art. 12 CP): causación del resultado por infracción del deber objetivo de cuidado; solo punible cuando la ley lo prevé expresamente.",
        "Imprudencia grave y menos grave, distinguidas según su gravedad tras la reforma de 2015.",
      ],
    },
    {
      titulo: "Autoría y participación (arts. 27-31 CP)",
      puntos: [
        "Responsables criminalmente: autores y cómplices (art. 27).",
        "Autores (art. 28): quienes realizan el hecho por sí solos, conjuntamente o por medio de otro del que se sirven como instrumento (autoría mediata); también los inductores y los cooperadores necesarios.",
        "Cómplices (art. 29): quienes cooperan a la ejecución del hecho con actos anteriores o simultáneos no incluidos en el art. 28.",
        "Pena del cómplice: inferior en grado a la del autor (art. 63 CP).",
      ],
    },
    {
      titulo: "Circunstancias modificativas de la responsabilidad criminal (arts. 21-23 CP)",
      puntos: [
        "Atenuantes (art. 21): entre otras, la eximente incompleta, la grave adicción, la confesión a las autoridades, la reparación del daño, la dilación extraordinaria e indebida en el proceso.",
        "Agravantes (art. 22): entre otras, alevosía, disfraz o abuso de superioridad, precio o recompensa, ensañamiento, reincidencia.",
        "Circunstancia mixta de parentesco (art. 23): puede atenuar o agravar según la naturaleza del delito.",
      ],
    },
    {
      titulo: "Causas que excluyen la responsabilidad criminal (art. 20 CP)",
      puntos: [
        "Causas de inimputabilidad: anomalía o alteración psíquica; intoxicación plena por alcohol, drogas u otras sustancias; alteraciones en la percepción desde el nacimiento o la infancia.",
        "Legítima defensa (art. 20.4): agresión ilegítima, necesidad racional del medio empleado, falta de provocación suficiente.",
        "Estado de necesidad (art. 20.5): para evitar un mal propio o ajeno se lesiona un bien jurídico de otra persona o se infringe un deber, siempre que el mal causado no sea mayor que el que se trata de evitar.",
        "Miedo insuperable (art. 20.6).",
        "Cumplimiento de un deber o ejercicio legítimo de un derecho, oficio o cargo (art. 20.7).",
        "Minoría de edad penal (art. 19 CP): los menores de 18 años no responden conforme al Código Penal, sino conforme a la LO 5/2000 reguladora de la responsabilidad penal de los menores.",
      ],
    },
    {
      titulo: "Clasificación de las penas (arts. 32-38 CP)",
      puntos: [
        "Según su gravedad (art. 33): penas graves, menos graves y leves.",
        "Penas privativas de libertad: prisión, prisión permanente revisable, responsabilidad personal subsidiaria por impago de multa (art. 35).",
        "Penas privativas de otros derechos: inhabilitaciones, suspensión de empleo o cargo público, privación del derecho a conducir, alejamiento, trabajos en beneficio de la comunidad (art. 39).",
        "Pena de multa: sistema de días-multa o proporcional (art. 50).",
      ],
    },
    {
      titulo: "Extinción de la responsabilidad criminal (art. 130 CP)",
      puntos: [
        "Causas: muerte del reo, cumplimiento de la condena, remisión definitiva de la pena, prescripción del delito, prescripción de la pena, indulto, perdón del ofendido (en los delitos que lo permitan).",
      ],
    },
  ],
};
