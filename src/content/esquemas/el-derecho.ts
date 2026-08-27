import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Concepto de Derecho",
      puntos: [
        "Derecho objetivo: conjunto de normas jurídicas que rigen la convivencia social, de cumplimiento coactivo.",
        "Derecho subjetivo: facultad o poder que una norma reconoce a una persona para exigir algo de otra.",
        "Ciencia del Derecho: estudio sistemático de las normas jurídicas y su aplicación.",
      ],
    },
    {
      titulo: "Las fuentes del Derecho (art. 1 CC)",
      puntos: [
        "Fuentes del ordenamiento jurídico español: la ley, la costumbre y los principios generales del derecho (art. 1.1).",
        "La costumbre solo rige en defecto de ley aplicable, siempre que no sea contraria a la moral o al orden público y resulte probada (art. 1.3).",
        "Los principios generales del derecho se aplican en defecto de ley o costumbre, sin perjuicio de su carácter informador del ordenamiento (art. 1.4).",
        "La jurisprudencia complementa el ordenamiento jurídico con la doctrina reiterada del Tribunal Supremo (art. 1.6): no es fuente en sentido estricto, pero sí complemento.",
      ],
    },
    {
      titulo: "Aplicación de las normas jurídicas (arts. 2-4 CC)",
      puntos: [
        "Entrada en vigor: a los veinte días de su completa publicación en el BOE, salvo que se disponga otra cosa (vacatio legis, art. 2.1).",
        "Las leyes se derogan por otras posteriores; la derogación tiene el alcance que expresamente se disponga y se extiende a todo aquello que la nueva ley regule de la misma materia (art. 2.2).",
        "Irretroactividad salvo que se disponga lo contrario (art. 2.3).",
        "Ignorancia de la ley: no excusa de su cumplimiento (art. 6.1).",
        "Analogía (art. 4.1): aplicación de una norma a un supuesto no regulado cuando hay identidad de razón con otro sí regulado.",
        "Exclusión de la analogía (art. 4.2): leyes penales, las excepcionales y las de ámbito temporal.",
      ],
    },
    {
      titulo: "Interpretación de las normas (art. 3.1 CC)",
      puntos: [
        "Criterios: sentido propio de las palabras, contexto, antecedentes históricos y legislativos, realidad social del momento de aplicación.",
        "Debe atenderse fundamentalmente al espíritu y finalidad de la norma (criterio teleológico).",
        "La equidad podrá ponderarse en la aplicación de las normas, pero las resoluciones solo pueden descansar de manera exclusiva en ella cuando la ley expresamente lo permita (art. 3.2).",
      ],
    },
    {
      titulo: "Principios constitucionales del ordenamiento (art. 9.3 CE)",
      puntos: [
        "La Constitución garantiza: el principio de legalidad, la jerarquía normativa, la publicidad de las normas, la irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad de los poderes públicos.",
        "Jerarquía normativa: una norma de rango inferior no puede contradecir a otra de rango superior; si lo hace, es nula de pleno derecho (art. 1.2 CC).",
      ],
    },
  ],
};
