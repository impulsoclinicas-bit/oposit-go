import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "ext-01",
    enunciado: "¿Cómo clasifica el artículo 51.2 de la Ley Orgánica 4/2000 las infracciones en materia de extranjería?",
    opciones: [
      "En leves y graves solamente",
      "En leves, graves y muy graves",
      "En una única categoría, sin graduación",
      "En administrativas y penales",
    ],
    correcta: 1,
    explicacion:
      "El art. 51.2 de la LO 4/2000 clasifica las infracciones administrativas en materia de extranjería en leves, graves y muy graves.",
  },
  {
    id: "ext-02",
    enunciado: "¿Cuál de las siguientes es una infracción grave según el artículo 53.1?",
    opciones: [
      "El retraso de hasta tres meses en solicitar la renovación de una autorización caducada",
      "Encontrarse irregularmente en territorio español por carecer de autorización de residencia o tenerla caducada más de tres meses sin haber solicitado su renovación",
      "La omisión en comunicar un cambio de domicilio",
      "Contraer matrimonio simulado con ánimo de lucro",
    ],
    correcta: 1,
    explicacion:
      "El art. 53.1.a) tipifica como infracción grave encontrarse irregularmente en España por carecer de autorización de residencia válida o tenerla caducada más de tres meses, sin haber solicitado su renovación en plazo.",
  },
  {
    id: "ext-03",
    enunciado: "¿Cuál de las siguientes es una infracción muy grave según el artículo 54.1?",
    opciones: [
      "Trabajar en un ámbito geográfico distinto al autorizado",
      "Inducir, promover, favorecer o facilitar con ánimo de lucro la inmigración clandestina de personas hacia España o su permanencia en el país, cuando no constituya delito",
      "El retraso en la comunicación de un cambio de estado civil",
      "Salir de España por un puesto no habilitado",
    ],
    correcta: 1,
    explicacion:
      "El art. 54.1.b) tipifica como infracción muy grave inducir, promover, favorecer o facilitar con ánimo de lucro, individual o colectivamente, la inmigración clandestina hacia España o la permanencia irregular en el país, siempre que el hecho no constituya delito.",
  },
  {
    id: "ext-04",
    enunciado: "¿Cuál es la cuantía de la multa por infracciones muy graves en materia de extranjería, según el artículo 55.1.c)?",
    opciones: [
      "Hasta 500 euros",
      "De 501 a 10.000 euros",
      "De 10.001 a 100.000 euros",
      "No se prevén multas, solo la expulsión",
    ],
    correcta: 2,
    explicacion:
      "El art. 55.1.c) fija, con carácter general, una multa de 10.001 a 100.000 euros para las infracciones muy graves (con cuantías específicas superiores para determinados supuestos de transporte irregular de personas).",
  },
  {
    id: "ext-05",
    enunciado: "¿A quién corresponde, con carácter general, imponer las sanciones por infracciones en materia de extranjería, según el artículo 55.2?",
    opciones: [
      "Al Subdelegado del Gobierno o al Delegado del Gobierno en las comunidades autónomas uniprovinciales",
      "Únicamente al Ministro del Interior",
      "A los Ayuntamientos en todo caso",
      "Al Defensor del Pueblo",
    ],
    correcta: 0,
    explicacion:
      "El art. 55.2 atribuye, con carácter general, la imposición de las sanciones al Subdelegado del Gobierno o al Delegado del Gobierno en las comunidades autónomas uniprovinciales, sin perjuicio de las competencias autonómicas en materia de autorización de trabajo.",
  },
  {
    id: "ext-06",
    enunciado: "¿En qué plazos prescriben las infracciones en materia de extranjería, según el artículo 56.1?",
    opciones: [
      "Las muy graves a los tres años, las graves a los dos años y las leves a los seis meses",
      "Todas prescriben al año, sin distinción",
      "Las muy graves a los cinco años, las graves a los tres y las leves al año",
      "No prescriben nunca",
    ],
    correcta: 0,
    explicacion:
      "El art. 56.1 establece que las infracciones muy graves prescriben a los tres años, las graves a los dos años y las leves a los seis meses.",
  },
  {
    id: "ext-07",
    enunciado: "¿Pueden imponerse conjuntamente las sanciones de expulsión y multa, según el artículo 57.3?",
    opciones: [
      "Sí, siempre que la infracción sea muy grave",
      "No, en ningún caso podrán imponerse conjuntamente",
      "Solo si lo autoriza un juez",
      "Sí, sin ninguna restricción",
    ],
    correcta: 1,
    explicacion:
      "El art. 57.3 dispone expresamente que en ningún caso podrán imponerse conjuntamente las sanciones de expulsión y multa.",
  },
  {
    id: "ext-08",
    enunciado: "¿Cuál es, con carácter general, la duración máxima de la prohibición de entrada derivada de una expulsión, según el artículo 58.1?",
    opciones: ["Un año", "Cinco años", "Diez años, siempre", "No tiene límite máximo"],
    correcta: 1,
    explicacion:
      "El art. 58.1 establece que la prohibición de entrada derivada de una expulsión no excederá, con carácter general, de cinco años, si bien el art. 58.2 permite excepcionalmente hasta diez años cuando el extranjero suponga una amenaza grave para el orden público, la seguridad pública, la seguridad nacional o la salud pública.",
  },
  {
    id: "ext-09",
    enunciado: "¿Cuál es la duración máxima del internamiento de un extranjero en un Centro de Internamiento de Extranjeros (CIE) mientras se tramita el expediente de expulsión, según el artículo 62.2?",
    opciones: ["15 días", "30 días", "60 días", "90 días"],
    correcta: 2,
    explicacion:
      "El art. 62.2 fija en 60 días la duración máxima del internamiento, sin que pueda acordarse un nuevo internamiento por las mismas causas dentro del mismo expediente.",
  },
  {
    id: "ext-10",
    enunciado: "¿Qué autoridad debe autorizar el ingreso de un extranjero en un Centro de Internamiento, conforme al artículo 62.1?",
    opciones: [
      "El Delegado del Gobierno, sin intervención judicial",
      "El Juez de Instrucción competente, previa audiencia del interesado y del Ministerio Fiscal",
      "El propio instructor del expediente administrativo, sin autorización judicial",
      "El Defensor del Pueblo",
    ],
    correcta: 1,
    explicacion:
      "El art. 62.1 exige que el instructor solicite al Juez de Instrucción competente el ingreso en un centro de internamiento, resolviendo este mediante auto motivado tras oír al interesado y al Ministerio Fiscal.",
  },
  {
    id: "ext-11",
    enunciado: "¿Qué medidas cautelares puede adoptar el instructor de un expediente sancionador en el que pueda proponerse la expulsión, según el artículo 61.1?",
    opciones: [
      "Presentación periódica, residencia obligatoria en un lugar determinado, retirada de pasaporte, detención cautelar (máximo 72 horas) o internamiento preventivo con autorización judicial",
      "Únicamente la retirada del permiso de conducir",
      "Solo puede imponerse una multa, sin otras medidas",
      "El embargo de todos sus bienes en España",
    ],
    correcta: 0,
    explicacion:
      "El art. 61.1 permite, entre otras medidas cautelares, la presentación periódica, la residencia obligatoria en un lugar determinado, la retirada del pasaporte, la detención cautelar por un máximo de 72 horas, y el internamiento preventivo previa autorización judicial.",
  },
  {
    id: "ext-12",
    enunciado: "Según el artículo 59, ¿puede un extranjero en situación irregular quedar exento de responsabilidad administrativa y no ser expulsado?",
    opciones: [
      "No, en ningún caso",
      "Sí, si es víctima, perjudicado o testigo de tráfico de seres humanos u otras conductas similares y colabora denunciando o cooperando con las autoridades contra los responsables",
      "Solo si paga una fianza",
      "Solo si tiene nacionalidad de un país de la Unión Europea",
    ],
    correcta: 1,
    explicacion:
      "El art. 59.1 permite eximir de responsabilidad administrativa y no expulsar al extranjero irregular que sea víctima, perjudicado o testigo de tráfico ilícito de personas u otras conductas similares, si denuncia a los responsables o coopera con las autoridades.",
  },
];
