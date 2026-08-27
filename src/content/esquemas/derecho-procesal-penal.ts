import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "La detención (art. 17 CE)",
      puntos: [
        "Derecho a la libertad y a la seguridad (art. 17.1 CE): nadie puede ser privado de libertad sino con la observancia de lo establecido en la ley.",
        "Duración: el tiempo estrictamente necesario para las averiguaciones, con un límite máximo absoluto de 72 horas, transcurridas las cuales el detenido debe ser puesto en libertad o a disposición judicial (art. 17.2 CE).",
        "Derechos del detenido (art. 17.3 CE): información inmediata y comprensible de sus derechos y de los motivos de la detención, derecho a no declarar contra sí mismo y a no confesarse culpable, y asistencia de abogado en las diligencias policiales y judiciales.",
      ],
    },
    {
      titulo: "El procedimiento de habeas corpus",
      puntos: [
        "Regulado en la LO 6/1984, de 24 de mayo, en desarrollo del art. 17.4 CE.",
        "Objeto: obtener la inmediata puesta a disposición judicial de toda persona detenida ilegalmente.",
        "Legitimados para instarlo (art. 3): el propio detenido, cónyuge o persona con análoga relación de afectividad, ascendientes, descendientes y hermanos, el Ministerio Fiscal, el Defensor del Pueblo; el juez competente puede iniciarlo de oficio.",
        "Competente: el Juez de Instrucción del lugar en que se encuentre la persona privada de libertad, o si no constare, el del lugar en que se produjo la detención, o el del lugar donde se hayan tenido las últimas noticias.",
        "Procedimiento sumario, urgente y sin formalidades.",
      ],
    },
    {
      titulo: "El Ministerio Fiscal (art. 124 CE)",
      puntos: [
        "Función: promover la acción de la justicia en defensa de la legalidad, de los derechos de los ciudadanos y del interés público tutelado por la ley, y velar por la independencia de los Tribunales.",
        "Principios de actuación (art. 124.2): unidad de actuación y dependencia jerárquica dentro de la propia institución, con sujeción, en todo caso, a los principios de legalidad e imparcialidad.",
        "El Fiscal General del Estado es nombrado por el Rey, a propuesta del Gobierno, oído el Consejo General del Poder Judicial.",
      ],
    },
    {
      titulo: "La Policía Judicial (art. 126 CE)",
      puntos: [
        "Depende de Jueces, Tribunales y del Ministerio Fiscal en sus funciones de averiguación del delito y descubrimiento y aseguramiento del delincuente.",
        "Funciones (arts. 282 y ss. LECrim): averiguar los delitos, recoger efectos, instrumentos o pruebas del delito y ponerlos a disposición judicial, y practicar diligencias de investigación.",
        "El atestado (art. 292 LECrim): documento en que se recogen las diligencias practicadas; tiene, con carácter general, el valor de denuncia (art. 297 LECrim), debiendo ser ratificado con contradicción en el juicio oral para adquirir pleno valor probatorio, salvo determinadas comprobaciones técnicas u objetivas de los propios agentes.",
      ],
    },
    {
      titulo: "Los procesos penales según el tipo de delito",
      puntos: [
        "Procedimiento ordinario (sumario): para delitos graves castigados con pena privativa de libertad superior a nueve años.",
        "Procedimiento abreviado: para la generalidad de los delitos castigados con penas privativas de libertad no superiores a nueve años u otras de distinta naturaleza.",
        "Procedimiento ante el Tribunal del Jurado: para determinados delitos tasados por la LO 5/1995 (p. ej. homicidio, cohecho, allanamiento de morada cometido por funcionario público).",
        "Juicio por delitos leves (arts. 962 y ss. LECrim): procedimiento simplificado para el enjuiciamiento de delitos leves.",
      ],
    },
  ],
};
