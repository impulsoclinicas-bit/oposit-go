import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Disposiciones comunes (arts. 1-3)",
      puntos: [
        "Proceden cuando circunstancias extraordinarias hacen imposible mantener la normalidad con los poderes ordinarios de las autoridades competentes (art. 1.1).",
        "Las medidas deben ser las estrictamente indispensables y proporcionadas a las circunstancias (art. 1.2).",
        "Su declaración no interrumpe el funcionamiento de los poderes constitucionales del Estado (art. 1.4).",
        "Se publican de inmediato en el BOE y entran en vigor desde ese momento (art. 2).",
        "Los actos y disposiciones adoptados durante su vigencia son impugnables en vía jurisdiccional (art. 3.1).",
      ],
    },
    {
      titulo: "Estado de alarma (arts. 4-12)",
      puntos: [
        "Supuestos: catástrofes/calamidades públicas, crisis sanitarias (epidemias), paralización de servicios públicos esenciales, desabastecimiento de productos de primera necesidad (art. 4).",
        "Declaración: decreto del Gobierno acordado en Consejo de Ministros (art. 6.1).",
        "Duración máxima: 15 días; solo prorrogable con autorización expresa del Congreso de los Diputados (art. 6.2).",
        "Autoridad competente: el Gobierno o, por delegación, el Presidente de la Comunidad Autónoma si la declaración afecta solo a su territorio (art. 7).",
        "Bajo la declaración, todas las autoridades civiles y los Cuerpos de Policía autonómicos y locales quedan bajo las órdenes de la autoridad competente (art. 9.1).",
      ],
    },
    {
      titulo: "Estado de excepción (arts. 13-31)",
      puntos: [
        "Procede cuando el libre ejercicio de derechos, el funcionamiento de instituciones democráticas o el orden público resultan tan gravemente alterados que las potestades ordinarias son insuficientes (art. 13.1).",
        "Requiere autorización previa del Congreso de los Diputados, a solicitud del Gobierno, especificando derechos suspendidos, medidas, ámbito territorial y duración (art. 13.2).",
        "Duración máxima: 30 días, prorrogables por otro plazo igual con los mismos requisitos (art. 13.2.c).",
        "La detención gubernativa puede durar hasta 10 días, con comunicación al juez competente en 24 horas (art. 16).",
        "Pueden suspenderse derechos como la inviolabilidad del domicilio y el secreto de las comunicaciones si el Congreso lo autoriza expresamente (art. 17-18).",
      ],
    },
    {
      titulo: "Estado de sitio (arts. 32-36)",
      puntos: [
        "Procede ante una insurrección o acto de fuerza contra la soberanía, independencia, integridad territorial o el ordenamiento constitucional que no pueda resolverse por otros medios (art. 32.1).",
        "Lo declara el Congreso de los Diputados por mayoría absoluta, a propuesta exclusiva del Gobierno (art. 32.1, art. 116.4 CE).",
        "El Gobierno asume todas las facultades extraordinarias y designa la autoridad militar que ejecutará las medidas (art. 33).",
        "El Congreso puede determinar los delitos que quedan sometidos a la jurisdicción militar durante su vigencia (art. 35).",
      ],
    },
  ],
};
