import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "eae-01",
    enunciado: "¿Qué Ley Orgánica regula los estados de alarma, excepción y sitio?",
    opciones: ["Ley Orgánica 2/1979", "Ley Orgánica 3/1981", "Ley Orgánica 4/1981", "Ley Orgánica 9/2021"],
    correcta: 2,
    explicacion: "Los estados de alarma, excepción y sitio se regulan en la Ley Orgánica 4/1981, de 1 de junio.",
  },
  {
    id: "eae-02",
    enunciado: "¿Quién declara el estado de alarma y mediante qué instrumento?",
    opciones: [
      "El Congreso de los Diputados, mediante ley orgánica",
      "El Gobierno, mediante decreto acordado en Consejo de Ministros",
      "El Rey, mediante Real Decreto",
      "El Presidente de cada Comunidad Autónoma, en todo caso",
    ],
    correcta: 1,
    explicacion: "El art. 6.1 establece que la declaración del estado de alarma se llevará a cabo mediante decreto acordado en Consejo de Ministros.",
  },
  {
    id: "eae-03",
    enunciado: "¿Cuál es la duración máxima del estado de alarma sin necesidad de prórroga autorizada por el Congreso?",
    opciones: ["10 días", "15 días", "30 días", "60 días"],
    correcta: 1,
    explicacion: "El art. 6.2 fija un plazo máximo de quince días, prorrogable solo con autorización expresa del Congreso de los Diputados.",
  },
  {
    id: "eae-04",
    enunciado: "¿Cuál de estos supuestos NO habilita la declaración del estado de alarma según el artículo 4?",
    opciones: [
      "Crisis sanitarias como epidemias",
      "Catástrofes o calamidades públicas",
      "Una insurrección armada contra el ordenamiento constitucional",
      "Situaciones de desabastecimiento de productos de primera necesidad",
    ],
    correcta: 2,
    explicacion: "Una insurrección o acto de fuerza contra el ordenamiento constitucional es el supuesto habilitante del estado de sitio (art. 32), no del estado de alarma.",
  },
  {
    id: "eae-05",
    enunciado: "Durante el estado de alarma, ¿bajo las órdenes de quién quedan los Cuerpos de Policía de las Comunidades Autónomas y Corporaciones Locales del territorio afectado?",
    opciones: [
      "Continúan bajo el mando exclusivo de su Comunidad Autónoma",
      "Quedan bajo las órdenes directas de la autoridad competente en cuanto sea necesario",
      "Pasan a depender del Ministerio de Defensa",
      "Quedan disueltos temporalmente",
    ],
    correcta: 1,
    explicacion: "El art. 9.1 establece que quedarán bajo las órdenes directas de la Autoridad competente en cuanto sea necesario para la protección de personas, bienes y lugares.",
  },
  {
    id: "eae-06",
    enunciado: "¿Qué requisito previo exige la declaración del estado de excepción que no exige el estado de alarma?",
    opciones: [
      "Autorización previa del Congreso de los Diputados",
      "Aprobación del Senado por mayoría absoluta",
      "Consulta al Tribunal Constitucional",
      "Referéndum popular",
    ],
    correcta: 0,
    explicacion: "El art. 13.1 exige que el Gobierno solicite del Congreso de los Diputados autorización previa para declarar el estado de excepción, a diferencia del estado de alarma.",
  },
  {
    id: "eae-07",
    enunciado: "¿Cuál es la duración máxima del estado de excepción según el artículo 13.2?",
    opciones: ["15 días", "30 días, prorrogables por otro plazo igual", "60 días improrrogables", "90 días"],
    correcta: 1,
    explicacion: "El art. 13.2.c) fija un máximo de treinta días, prorrogables por otro plazo igual con los mismos requisitos.",
  },
  {
    id: "eae-08",
    enunciado: "Durante el estado de excepción, ¿cuánto puede durar la detención gubernativa según el artículo 16?",
    opciones: [
      "72 horas, como en el régimen ordinario",
      "Hasta 10 días, comunicándolo al juez en 24 horas",
      "Hasta 30 días sin control judicial",
      "No se puede detener a nadie durante el estado de excepción",
    ],
    correcta: 1,
    explicacion: "El art. 16.1 permite que la detención no exceda de diez días, y el art. 16.2 exige comunicarla al juez competente en el plazo de veinticuatro horas.",
  },
  {
    id: "eae-09",
    enunciado: "¿Qué órgano declara el estado de sitio y con qué mayoría?",
    opciones: [
      "El Gobierno, por mayoría simple del Consejo de Ministros",
      "El Congreso de los Diputados, por mayoría absoluta, a propuesta exclusiva del Gobierno",
      "El Senado, por mayoría de tres quintos",
      "El Rey, a propuesta del Presidente del Gobierno",
    ],
    correcta: 1,
    explicacion: "El art. 32.1 establece que el estado de sitio se declara por el Congreso de los Diputados por mayoría absoluta, a propuesta exclusiva del Gobierno.",
  },
  {
    id: "eae-10",
    enunciado: "¿Qué supuesto habilita la declaración del estado de sitio según el artículo 32.1?",
    opciones: [
      "Una epidemia grave",
      "La paralización de servicios públicos esenciales",
      "Una insurrección o acto de fuerza contra la soberanía, independencia, integridad territorial o el ordenamiento constitucional",
      "El desabastecimiento de productos básicos",
    ],
    correcta: 2,
    explicacion: "El art. 32.1 reserva el estado de sitio para una insurrección o acto de fuerza contra la soberanía o independencia de España, su integridad territorial o el ordenamiento constitucional que no pueda resolverse por otros medios.",
  },
  {
    id: "eae-11",
    enunciado: "Durante el estado de sitio, ¿quién asume las facultades extraordinarias y designa a la autoridad que ejecuta las medidas?",
    opciones: [
      "El Gobierno, que designa a la autoridad militar correspondiente",
      "El Congreso de los Diputados directamente",
      "El Rey, como Jefe del Estado",
      "El Tribunal Constitucional",
    ],
    correcta: 0,
    explicacion: "El art. 33.1-2 establece que el Gobierno asume todas las facultades extraordinarias y designa la Autoridad militar que, bajo su dirección, ejecutará las medidas.",
  },
  {
    id: "eae-12",
    enunciado: "¿Los actos y disposiciones adoptados durante la vigencia de estos estados son recurribles?",
    opciones: [
      "No, quedan exentos de todo control judicial",
      "Sí, son impugnables en vía jurisdiccional conforme a las leyes",
      "Solo son recurribles ante el Defensor del Pueblo",
      "Solo si los adopta directamente el Gobierno",
    ],
    correcta: 1,
    explicacion: "El art. 3.1 establece que los actos y disposiciones de la Administración Pública adoptados durante la vigencia de estos estados serán impugnables en vía jurisdiccional.",
  },
  {
    id: "eae-13",
    enunciado: "Según el artículo 116.5 CE, ¿puede disolverse el Congreso de los Diputados mientras esté declarado alguno de estos tres estados?",
    opciones: [
      "No, mientras estén declarados alguno de estos estados no podrá procederse a la disolución del Congreso, quedando automáticamente convocadas las Cámaras si no estuvieran en período de sesiones",
      "Sí, el Gobierno puede disolver el Congreso libremente en cualquiera de los tres estados",
      "Solo puede disolverse durante el estado de alarma, pero no durante la excepción o el sitio",
      "La disolución es siempre automática al declararse el estado de sitio",
    ],
    correcta: 0,
    explicacion:
      "El art. 116.5 CE dispone que, mientras estén declarados alguno de estos tres estados, no podrá procederse a la disolución del Congreso, quedando automáticamente convocadas las Cámaras si no estuvieran en período de sesiones, y su funcionamiento, así como el de los demás poderes constitucionales del Estado, no podrá interrumpirse durante la vigencia de estos estados.",
  },
  {
    id: "eae-14",
    enunciado: "Según el artículo 55.1 CE, ¿qué derechos pueden ser objeto de suspensión, con carácter general, durante la vigencia de los estados de excepción o de sitio?",
    opciones: [
      "Entre otros, los derechos a la libertad y seguridad (art. 17), la inviolabilidad del domicilio y el secreto de las comunicaciones (art. 18.2-3), la libertad de circulación y residencia (art. 19), la libertad de expresión y el derecho de reunión",
      "Todos los derechos fundamentales reconocidos en la Constitución, sin excepción",
      "Ningún derecho puede ser suspendido bajo ninguna circunstancia constitucional",
      "Únicamente el derecho de propiedad privada",
    ],
    correcta: 0,
    explicacion:
      "El art. 55.1 CE permite suspender, cuando se acuerde la declaración del estado de excepción o de sitio, en los términos previstos en la Constitución, derechos como el de libertad y seguridad del art. 17, la inviolabilidad del domicilio y el secreto de las comunicaciones del art. 18.2 y 18.3, la libertad de circulación y residencia del art. 19, la libertad de expresión y de información y el derecho de reunión, entre otros.",
  },
  {
    id: "eae-15",
    enunciado: "Según el artículo 1.2 de la LO 4/1981, ¿a qué ámbito debe limitarse la declaración de estos estados?",
    opciones: [
      "A las circunstancias, medios y duración estrictamente indispensables para asegurar el restablecimiento de la normalidad, aplicándose de forma proporcionada a las circunstancias",
      "Siempre a todo el territorio nacional, sin posibilidad de circunscribirla a un ámbito territorial más reducido",
      "A un mínimo de sesenta días en todo caso, sin excepción",
      "A la duración total de la legislatura en curso",
    ],
    correcta: 0,
    explicacion:
      "El art. 1.2 de la LO 4/1981 exige que las medidas a adoptar en los estados de alarma, excepción y sitio, así como la duración de estos, se limiten a lo estrictamente indispensable para asegurar el restablecimiento de la normalidad, aplicándose de forma proporcionada a las circunstancias.",
  },
];
