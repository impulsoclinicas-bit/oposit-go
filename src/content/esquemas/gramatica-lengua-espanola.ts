import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Categorías gramaticales",
      puntos: [
        "Variables (admiten flexión): sustantivo, adjetivo, determinante, pronombre, verbo.",
        "Invariables: adverbio, preposición, conjunción, interjección.",
        "El verbo se flexiona en persona, número, tiempo, modo y aspecto; los modos verbales son indicativo, subjuntivo e imperativo.",
      ],
    },
    {
      titulo: "Funciones sintácticas básicas",
      puntos: [
        "Sujeto: concuerda en persona y número con el verbo.",
        "Complemento directo (CD): recibe la acción del verbo; conmutable por «lo, la, los, las».",
        "Complemento indirecto (CI): conmutable por «le, les»; suele introducirse con «a» o «para».",
        "Atributo: función propia de oraciones con verbos copulativos (ser, estar, parecer), que expresa una cualidad o estado del sujeto.",
        "Complementos circunstanciales: expresan lugar, tiempo, modo, causa, finalidad, etc.",
      ],
    },
    {
      titulo: "La oración compuesta",
      puntos: [
        "Coordinación: oraciones sintácticamente independientes y de igual jerarquía, unidas por conjunciones (copulativas: y, ni; disyuntivas: o; adversativas: pero, sino; etc.).",
        "Subordinación: una oración subordinada depende sintácticamente de la principal, desempeñando en ella una función propia de sustantivo (subordinada sustantiva), adjetivo (subordinada adjetiva o de relativo) o adverbio (subordinada adverbial).",
        "Yuxtaposición: unión de oraciones sin nexo, separadas por signos de puntuación.",
      ],
    },
    {
      titulo: "Formación de palabras",
      puntos: [
        "Derivación: formación de palabras nuevas mediante afijos (prefijos, sufijos); ejemplo: adverbios de modo en «-mente» a partir de la forma femenina del adjetivo.",
        "Composición: unión de dos o más lexemas para formar una palabra nueva (p. ej. «sacacorchos»).",
        "Parasíntesis: combinación simultánea de composición y derivación (p. ej. «picapedrero»).",
      ],
    },
    {
      titulo: "Fenómenos de uso frecuentemente examinados",
      puntos: [
        "Leísmo, laísmo y loísmo: usos de «le/les», «la/las» y «lo/los» que se apartan del sistema etimológico de pronombres átonos; la RAE admite el leísmo de persona masculina singular como uso culto extendido.",
        "«Sino» (conjunción adversativa, tras negación) frente a «si no» (condicional + negación).",
        "«Porque» (causal), «por qué» (interrogativo/exclamativo), «porqué» (sustantivo, ‘motivo’) y «por que» (preposición + relativo).",
      ],
    },
  ],
};
