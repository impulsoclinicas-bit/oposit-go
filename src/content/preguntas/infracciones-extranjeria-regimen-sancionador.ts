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
  {
    id: "ext-13",
    enunciado: "Según el artículo 53.1.d), ¿qué conducta se califica como infracción grave en relación con las medidas ya impuestas al extranjero?",
    opciones: [
      "El incumplimiento de las medidas impuestas por razón de seguridad pública, de presentación periódica o de alejamiento de fronteras o núcleos de población concretados singularmente",
      "La simple solicitud de renovación de la autorización de residencia fuera de plazo",
      "El cambio voluntario de domicilio dentro de la misma provincia",
      "La solicitud de asilo presentada de buena fe",
    ],
    correcta: 0,
    explicacion:
      "El art. 53.1.d) califica como infracción grave el incumplimiento de las medidas impuestas por razón de seguridad pública, de presentación periódica o de alejamiento de fronteras o núcleos de población concretados singularmente, de acuerdo con lo dispuesto en la Ley Orgánica 4/2000.",
  },
  {
    id: "ext-14",
    enunciado: "Según el artículo 54.1.b), ¿qué infracción muy grave castiga a quien favorece la inmigración clandestina de personas con destino a España?",
    opciones: [
      "Inducir, promover, favorecer o facilitar con ánimo de lucro, individualmente o en organización, la inmigración clandestina de personas en tránsito o con destino al territorio español, o su permanencia en él, siempre que el hecho no constituya delito",
      "Ayudar de forma altruista y sin ánimo de lucro a un familiar a regularizar su situación",
      "Contratar a un trabajador extranjero que sí dispone de autorización de trabajo en vigor",
      "Denunciar ante las autoridades una situación de trata de seres humanos",
    ],
    correcta: 0,
    explicacion:
      "El art. 54.1.b) califica como infracción muy grave inducir, promover, favorecer o facilitar con ánimo de lucro, individualmente o formando parte de una organización, la inmigración clandestina de personas en tránsito o con destino al territorio español o su permanencia en el mismo, siempre que el hecho no constituya delito.",
  },
  {
    id: "ext-15",
    enunciado: "Según el artículo 63.1, ¿qué carácter tiene la tramitación del expediente de expulsión cuando concurren los supuestos allí previstos, y qué consecuencia tiene respecto de la salida voluntaria?",
    opciones: [
      "Tiene carácter preferente, y en estos supuestos no cabrá la concesión del período de salida voluntaria",
      "Tiene carácter ordinario, concediéndose en todo caso un plazo de salida voluntaria de treinta días",
      "El expediente queda automáticamente archivado sin más trámite",
      "Se suspende indefinidamente hasta que el interesado lo solicite expresamente",
    ],
    correcta: 0,
    explicacion:
      "El art. 63.1 dispone que, en los supuestos que enumera (entre ellos el incumplimiento de medidas de seguridad, las actividades contrarias a la seguridad nacional o la inmigración clandestina con ánimo de lucro), la tramitación del expediente de expulsión tendrá carácter preferente, y en estos supuestos no cabrá la concesión del período de salida voluntaria.",
  },
  {
    id: "ext-16",
    enunciado: "Según el artículo 50 de la Ley Orgánica 4/2000, ¿a qué normativa se ajusta el ejercicio de la potestad sancionadora en materia de extranjería?",
    opciones: [
      "A lo dispuesto en la propia Ley Orgánica y sus disposiciones de desarrollo, y a la normativa general del procedimiento administrativo común",
      "Exclusivamente al Código Penal",
      "A la normativa de la Unión Europea, con exclusión de la ley española",
      "No existe ninguna norma que regule esta potestad",
    ],
    correcta: 0,
    explicacion:
      "El art. 50 de la LO 4/2000 establece que el ejercicio de la potestad sancionadora por las infracciones administrativas previstas en la Ley se ajustará a lo dispuesto en la misma y en sus disposiciones de desarrollo, y a la normativa general reguladora del procedimiento administrativo común.",
  },
  {
    id: "ext-17",
    enunciado: "Según el artículo 52 de la Ley Orgánica 4/2000, ¿cuál de las siguientes es una infracción leve?",
    opciones: [
      "El retraso, hasta tres meses, en la solicitud de renovación de las autorizaciones una vez hayan caducado",
      "La entrada ilegal en territorio español",
      "El favorecimiento con ánimo de lucro de la inmigración clandestina",
      "La reincidencia en una infracción muy grave",
    ],
    correcta: 0,
    explicacion:
      "El art. 52 de la LO 4/2000 tipifica como infracción leve, entre otras, el retraso hasta tres meses en la solicitud de renovación de las autorizaciones una vez hayan caducado, la omisión o retraso en la comunicación de cambios de nacionalidad, estado civil o domicilio, o encontrarse trabajando en una ocupación o ámbito geográfico distinto del autorizado.",
  },
  {
    id: "ext-18",
    enunciado: "Según el artículo 60.1 de la Ley Orgánica 4/2000, ¿qué ocurre con el extranjero al que se le deniega la entrada en frontera?",
    opciones: [
      "Queda obligado a regresar a su punto de origen, adoptándose las medidas necesarias para que el regreso se produzca en el plazo más breve posible",
      "Se le concede automáticamente un permiso de residencia temporal",
      "Puede permanecer indefinidamente en la zona de tránsito del aeropuerto sin ninguna limitación",
      "Se le expulsa inmediatamente sin posibilidad de comunicación con su embajada o consulado",
    ],
    correcta: 0,
    explicacion:
      "El art. 60.1 de la LO 4/2000 obliga a los extranjeros a los que se deniegue la entrada en frontera a regresar a su punto de origen, adoptándose de forma inmediata las medidas necesarias para que el regreso se produzca en el plazo más breve posible; si el regreso se retrasara más de setenta y dos horas, la autoridad se dirigirá al Juez de Instrucción para que determine el lugar de internamiento.",
  },
  {
    id: "ext-19",
    enunciado: "Según el artículo 60.2 de la Ley Orgánica 4/2000, ¿qué carácter tienen los lugares de internamiento para extranjeros a los que se ha denegado la entrada?",
    opciones: [
      "Carácter penitenciario, con el mismo régimen que un centro penitenciario ordinario",
      "No tendrán carácter penitenciario, estando dotados de servicios sociales, jurídicos, culturales y sanitarios, y los internados estarán privados únicamente del derecho ambulatorio",
      "Carácter militar, bajo la dirección del Ministerio de Defensa",
      "Carácter hotelero, sin ninguna supervisión pública",
    ],
    correcta: 1,
    explicacion:
      "El art. 60.2 de la LO 4/2000 exige que los lugares de internamiento para extranjeros no tengan carácter penitenciario, estando dotados de servicios sociales, jurídicos, culturales y sanitarios, y que los extranjeros internados estén privados únicamente del derecho ambulatorio.",
  },
  {
    id: "ext-20",
    enunciado: "Según el artículo 64.1 de la Ley Orgánica 4/2000, ¿qué ocurre si expira el plazo de cumplimiento voluntario de la expulsión sin que el extranjero haya abandonado el territorio nacional?",
    opciones: [
      "Se procederá a su detención y conducción hasta el puesto de salida por el que deba hacerse efectiva la expulsión",
      "El expediente de expulsión queda automáticamente sin efecto",
      "Se le concede un nuevo plazo indefinido de forma automática",
      "Solo se le impone una multa adicional, sin ninguna otra consecuencia",
    ],
    correcta: 0,
    explicacion:
      "El art. 64.1 de la LO 4/2000 dispone que, expirado el plazo de cumplimiento voluntario sin que el extranjero haya abandonado el territorio nacional, se procederá a su detención y conducción hasta el puesto de salida por el que se deba hacer efectiva la expulsión, pudiendo solicitarse el internamiento si no pudiera ejecutarse en setenta y dos horas.",
  },
  {
    id: "ext-21",
    enunciado: "Según el artículo 64.3 de la Ley Orgánica 4/2000, ¿a costa de quién se ejecuta, en su caso, la resolución de expulsión?",
    opciones: [
      "Del empleador sancionado por determinadas infracciones relacionadas con la contratación ilegal, o del propio extranjero si dispone de medios económicos; en su defecto, se comunica al representante diplomático o consular de su país",
      "Siempre y en todo caso del Estado español, sin ninguna excepción",
      "De la Unión Europea, con cargo a sus fondos de cohesión",
      "De la empresa de transporte que lo trasladó a España, en cualquier circunstancia",
    ],
    correcta: 0,
    explicacion:
      "El art. 64.3 de la LO 4/2000 establece que la ejecución de la resolución de expulsión se efectuará, en su caso, a costa del empleador que hubiera sido sancionado por determinadas infracciones de contratación ilegal, o a costa del extranjero si dispusiera de medios económicos; de no darse ninguna de estas condiciones, se comunicará al representante diplomático o consular de su país.",
  },
  {
    id: "ext-22",
    enunciado: "Según el artículo 64.5 de la Ley Orgánica 4/2000, ¿qué ocurre con la ejecución de una resolución de expulsión cuando se formaliza una petición de protección internacional?",
    opciones: [
      "Se suspende hasta que dicha petición se haya inadmitido a trámite o resuelto conforme a la normativa de protección internacional",
      "No tiene ningún efecto sobre la ejecución de la expulsión, que continúa sin alteración",
      "Se archiva automáticamente el expediente de expulsión sin posibilidad de reanudarlo",
      "Se acelera la ejecución de la expulsión para evitar dilaciones",
    ],
    correcta: 0,
    explicacion:
      "El art. 64.5 de la LO 4/2000 dispone que se suspenderá la ejecución de la resolución de expulsión cuando se formalice una petición de protección internacional, hasta que esta se haya inadmitido a trámite o resuelto, conforme a lo dispuesto en la normativa de protección internacional (Ley 12/2009).",
  },
  {
    id: "ext-23",
    enunciado: "Según el artículo 65.1 de la Ley Orgánica 4/2000, ¿son recurribles las resoluciones administrativas sancionadoras en materia de extranjería?",
    opciones: [
      "No, son firmes e inatacables desde su notificación",
      "Sí, son recurribles con arreglo a lo dispuesto en las leyes, con el régimen de ejecutividad previsto con carácter general",
      "Solo pueden recurrirse ante el Tribunal Constitucional directamente",
      "Solo son recurribles si el extranjero se encuentra en territorio español en el momento de la notificación",
    ],
    correcta: 1,
    explicacion:
      "El art. 65.1 de la LO 4/2000 establece que las resoluciones administrativas sancionadoras en materia de extranjería son recurribles con arreglo a lo dispuesto en las leyes, siendo su régimen de ejecutividad el previsto con carácter general en la normativa de procedimiento administrativo.",
  },
  {
    id: "ext-24",
    enunciado: "Según el artículo 65.2 de la Ley Orgánica 4/2000, ¿cómo puede recurrir un extranjero que no se encuentra en España las resoluciones que le afecten?",
    opciones: [
      "No puede recurrir en ningún caso mientras no regrese a territorio español",
      "Puede cursar los recursos procedentes, tanto en vía administrativa como jurisdiccional, a través de las representaciones diplomáticas o consulares correspondientes",
      "Solo mediante un abogado con despacho abierto en España",
      "Solo si previamente ha obtenido un visado de reingreso",
    ],
    correcta: 1,
    explicacion:
      "El art. 65.2 de la LO 4/2000 permite que, cuando el extranjero no se encuentre en España, pueda cursar los recursos procedentes, tanto en vía administrativa como jurisdiccional, a través de las representaciones diplomáticas o consulares correspondientes, que los remitirán al organismo competente.",
  },
  {
    id: "ext-25",
    enunciado: "Según el artículo 66.1 de la Ley Orgánica 4/2000, ¿qué obligación puede imponerse a las compañías de transporte respecto de la información de los pasajeros?",
    opciones: [
      "Ninguna, las compañías de transporte no tienen ninguna obligación en materia de extranjería",
      "Remitir a las autoridades españolas encargadas del control de entrada información relativa a los pasajeros transportados desde fuera del Espacio Schengen, cuando así lo determinen las autoridades para combatir la inmigración ilegal",
      "Solo deben informar sobre los pasajeros de nacionalidad española",
      "Solo se exige esta obligación a las compañías aéreas, nunca a las marítimas o terrestres",
    ],
    correcta: 1,
    explicacion:
      "El art. 66.1 de la LO 4/2000 permite exigir a las compañías, empresas de transporte o transportistas, respecto de rutas procedentes de fuera del Espacio Schengen, la remisión a las autoridades españolas de la información relativa a los pasajeros transportados, cuando la intensidad de los flujos migratorios lo haga necesario para combatir la inmigración ilegal y garantizar la seguridad pública.",
  },
  {
    id: "ext-26",
    enunciado: "Según el artículo 66.3.b) de la Ley Orgánica 4/2000, ¿qué obligación tiene el transportista respecto del extranjero al que se deniega la entrada por deficiencias documentales?",
    opciones: [
      "Ninguna, la responsabilidad recae exclusivamente en las autoridades españolas",
      "Hacerse cargo inmediatamente del extranjero que hubiese trasladado hasta la frontera correspondiente, si a este se le hubiera denegado la entrada por deficiencias en su documentación",
      "Pagar una indemnización directa al extranjero afectado",
      "Facilitarle un visado de entrada de emergencia",
    ],
    correcta: 1,
    explicacion:
      "El art. 66.3.b) de la LO 4/2000 obliga al transportista a hacerse cargo inmediatamente del extranjero que hubiese trasladado hasta la frontera aérea, marítima o terrestre correspondiente, si a este se le hubiera denegado la entrada por deficiencias en la documentación necesaria para el cruce de fronteras.",
  },
  {
    id: "ext-27",
    enunciado: "¿Qué diferencia existe entre la «expulsión» y el «retorno» en el régimen de extranjería español?",
    opciones: [
      "Son sinónimos exactos, sin ninguna diferencia jurídica",
      "La expulsión es la sanción administrativa impuesta tras un expediente sancionador a un extranjero que ya se encuentra en territorio español; el retorno se aplica a quien pretende entrar ilegalmente y es interceptado en el momento de la entrada o inmediaciones, o a quien ha sido expulsado judicialmente y contraviene la prohibición de entrada",
      "El retorno solo puede ejecutarse mediante autorización del Parlamento",
      "La expulsión solo se aplica a menores de edad, y el retorno a los mayores de edad",
    ],
    correcta: 1,
    explicacion:
      "La expulsión es la sanción administrativa que pone fin al expediente sancionador incoado a un extranjero que se encuentra en España en situación irregular o que ha incurrido en determinadas infracciones; el retorno es la medida que se aplica a los extranjeros que pretenden entrar ilegalmente en España y son interceptados en frontera o sus inmediaciones, o que habiendo sido expulsados contravienen la prohibición de entrada, sin necesidad de tramitar un nuevo expediente de expulsión.",
  },
  {
    id: "ext-28",
    enunciado: "¿Qué diferencia existe entre la infracción muy grave del artículo 54.1.b) (favorecimiento de la inmigración clandestina con ánimo de lucro) y el delito de tráfico ilegal de personas del Código Penal?",
    opciones: [
      "Son idénticos, sancionándose siempre por ambas vías simultáneamente",
      "La infracción administrativa del art. 54.1.b) se aplica «siempre que el hecho no constituya delito»; cuando la conducta reviste mayor gravedad (organización, ánimo de lucro cualificado, puesta en peligro de la vida de las personas, entre otros elementos), se tipifica como delito en el Código Penal, con preferencia de la vía penal sobre la administrativa",
      "El delito solo se aplica a ciudadanos españoles que ayuden a extranjeros",
      "La infracción administrativa siempre conlleva mayor pena que el delito",
    ],
    correcta: 1,
    explicacion:
      "El propio art. 54.1.b) de la LO 4/2000 aclara que la infracción administrativa se aplica «siempre que el hecho no constituya delito»; cuando la conducta de favorecimiento de la inmigración clandestina reviste mayor gravedad, se tipifica como delito en el Código Penal, rigiendo el principio de preferencia de la jurisdicción penal sobre la vía administrativa sancionadora.",
  },
  {
    id: "ext-29",
    enunciado: "¿Qué papel desempeña la Policía Nacional en la ejecución material de las resoluciones de expulsión?",
    opciones: [
      "Ninguno, la ejecución corresponde en exclusiva a la autoridad judicial",
      "Practica la detención y conducción del extranjero hasta el puesto de salida, tramita los expedientes sancionadores y de expulsión, y custodia a los internos en los Centros de Internamiento de Extranjeros, bajo la dirección de la autoridad gubernativa competente",
      "Solo interviene si el extranjero se resiste violentamente",
      "Solo puede intervenir con autorización previa de la Unión Europea",
    ],
    correcta: 1,
    explicacion:
      "La Policía Nacional, a través de sus unidades de extranjería y fronteras, desempeña un papel esencial en la ejecución material del régimen de extranjería: tramita los expedientes sancionadores y de expulsión, practica la detención y conducción del extranjero hasta el puesto de salida, y presta servicio en los Centros de Internamiento de Extranjeros, bajo la dirección de la autoridad gubernativa competente y el control judicial correspondiente.",
  },
  {
    id: "ext-30",
    enunciado: "¿Cuál es la estructura general del régimen sancionador de la Ley Orgánica 4/2000?",
    opciones: [
      "Clasifica las infracciones en leves, graves y muy graves (art. 51 y siguientes), prevé sanciones de multa y, en su caso, de expulsión (art. 55 y 57), regula medidas cautelares y el internamiento (arts. 61 y 62), y establece un procedimiento sancionador ordinario y otro preferente (art. 63)",
      "Se limita a establecer un único tipo de infracción, sancionada siempre con la misma multa fija",
      "No prevé ninguna posibilidad de recurso frente a las sanciones impuestas",
      "Remite en su totalidad al Código Penal, sin regulación administrativa propia",
    ],
    correcta: 0,
    explicacion:
      "El Título III de la LO 4/2000 («De las infracciones en materia de extranjería y su régimen sancionador») clasifica las infracciones en leves, graves y muy graves, prevé como sanciones la multa y, en determinados supuestos, la expulsión, regula las medidas cautelares y el internamiento, y distingue un procedimiento sancionador ordinario de un procedimiento preferente para los supuestos de mayor gravedad o urgencia.",
  },
];
