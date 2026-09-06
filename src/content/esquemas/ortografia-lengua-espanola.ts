import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Reglas generales de acentuación",
      puntos: [
        "Agudas: tilde si terminan en vocal, «n» o «s» sin consonante previa (café, camión, autobús); no llevan tilde «robots», «reloj».",
        "Llanas o graves: tilde si terminan en consonante distinta de «n»/«s», o en «s» precedida de consonante (árbol, fácil, bíceps); no la llevan casa, joven, crisis.",
        "Esdrújulas y sobresdrújulas: llevan tilde siempre, sin excepción (música, rápido, cómetelo).",
        "Diptongos, triptongos e hiatos: reglas específicas de acentuación gráfica (p. ej., los hiatos con «i»/«u» tónica llevan siempre tilde: país, raíz, día).",
      ],
    },
    {
      titulo: "Tilde diacrítica",
      puntos: [
        "Distingue palabras con la misma forma pero distinta categoría gramatical o significado: sí/si, él/el, tú/tu, sé/se, más/mas, dé/de, té/te, aún/aun.",
        "Desde la Ortografía de 2010: «solo» y los demostrativos (este, ese, aquel...) se escriben sin tilde, admitiéndose su uso excepcional solo ante riesgo real de ambigüedad.",
        "Los pronombres interrogativos y exclamativos (qué, quién, cómo, cuándo, dónde, cuánto) siempre llevan tilde, a diferencia de sus homófonos relativos o conjunciones.",
      ],
    },
    {
      titulo: "Reglas del uso de letras (ortografía literal)",
      puntos: [
        "B/V: «b» ante consonante, en verbos «-bir» (salvo hervir, servir, vivir), en el pretérito imperfecto de la 1.ª conjugación e «ir»; «v» tras «b», «d», «n», y en adjetivos terminados en «-ava, -ave, -avo, -eva, -eve, -evo, -iva, -ivo».",
        "G/J: «g» ante e/i en palabras con «geo-» y terminaciones «-gia, -gio, -logía, -gente, -gencia»; «j» en verbos «-jar, -jear» y sustantivos «-aje, -eje».",
        "H: se escribe con «h» las palabras que empiezan por «hidr-, hiper-, hosp-, herm-, holg-», entre otras reglas, y las formas del verbo «haber» y «hacer».",
        "Uso de mayúsculas: inicio de texto o tras punto, nombres propios, tras signos de interrogación/exclamación (salvo coma o punto y coma posterior).",
      ],
    },
    {
      titulo: "Signos de puntuación",
      puntos: [
        "Coma: separa elementos de una enumeración, incisos, vocativos; nunca separa sujeto y verbo salvo inciso.",
        "Punto y coma: separa elementos de enumeraciones complejas con comas internas, o proposiciones relacionadas semánticamente.",
        "Dos puntos: anuncian enumeración, explicación, consecuencia o cita que desarrolla o cierra lo anterior.",
        "Signos de interrogación y exclamación: en español se abren y cierran (¿…?, ¡…!), a diferencia de otras lenguas.",
      ],
    },
  ],
};
