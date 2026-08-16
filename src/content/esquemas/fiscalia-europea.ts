import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Objeto y ámbito de aplicación",
      puntos: [
        "La Ley Orgánica 9/2021 aplica en España el Reglamento (UE) 2017/1939, que crea la Fiscalía Europea (art. 1).",
        "Se aplica a los procedimientos penales por delitos que perjudiquen los intereses financieros de la Unión Europea (art. 2.1).",
        "En lo no previsto, se aplica la Ley de Enjuiciamiento Criminal, en particular el procedimiento abreviado (art. 2.2).",
      ],
    },
    {
      titulo: "Competencia de los Fiscales europeos delegados (art. 4)",
      puntos: [
        "Competentes en todo el territorio nacional para investigar y ejercer la acción penal contra los delitos que perjudican los intereses financieros de la UE.",
        "Incluye: delitos contra la Hacienda de la Unión (no impuestos directos nacionales), fraude de subvenciones y ayudas europeas, blanqueo de capitales conexo, cohecho y malversación que perjudiquen los intereses financieros de la Unión, y participación en organización criminal vinculada a estos delitos.",
        "En el IVA, solo son competentes si los hechos afectan a dos o más Estados miembros y superan un perjuicio total de 10 millones de euros.",
      ],
    },
    {
      titulo: "Atribuciones y organización",
      puntos: [
        "Pueden requerir el auxilio de cualquier autoridad y dar órdenes e instrucciones a la Policía Judicial (art. 5).",
        "No pueden dar instrucciones a los miembros del Ministerio Fiscal, pero sí solicitar su colaboración a través de la Fiscalía General del Estado (art. 5.3).",
        "Tienen su sede en Madrid y ejercen sus funciones con exclusividad y a tiempo completo (art. 16.1).",
      ],
    },
    {
      titulo: "Control judicial",
      puntos: [
        "La Audiencia Nacional es competente para el conocimiento y fallo de estos procedimientos (art. 7.1); en aforamientos, el Tribunal Supremo o el Tribunal Superior de Justicia correspondiente.",
        "En cada uno de estos órganos se constituye un Juez de garantías, que autoriza diligencias restrictivas de derechos fundamentales, medidas cautelares personales, el secreto de la investigación y la apertura del juicio oral (art. 8).",
        "La detención ordenada por el Fiscal europeo delegado debe ser puesta a su disposición en un máximo de 24 horas (art. 78.1).",
      ],
    },
  ],
};
