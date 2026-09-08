import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "pin-01",
    enunciado: "¿Qué ley regula en España el derecho de asilo y la protección subsidiaria?",
    opciones: [
      "La Ley Orgánica 4/2000",
      "La Ley 12/2009, de 30 de octubre, reguladora del derecho de asilo y de la protección subsidiaria",
      "La Ley 5/2014, de Seguridad Privada",
      "El Real Decreto 240/2007",
    ],
    correcta: 1,
    explicacion:
      "La Ley 12/2009, de 30 de octubre, reguladora del derecho de asilo y de la protección subsidiaria, desarrolla el art. 13.4 de la Constitución y establece los términos en que las personas extracomunitarias y los apátridas pueden gozar en España de protección internacional.",
  },
  {
    id: "pin-02",
    enunciado: "Según el artículo 3 de la Ley 12/2009, ¿a quién se reconoce la condición de refugiado?",
    opciones: [
      "A cualquier persona que abandone su país por motivos económicos",
      "A quien, debido a fundados temores de ser perseguido por motivos de raza, religión, nacionalidad, opiniones políticas, pertenencia a determinado grupo social, género, orientación o identidad sexual, se encuentra fuera de su país y no puede o no quiere acogerse a su protección",
      "Únicamente a quien haya sido condenado injustamente en su país de origen",
      "Solo a los nacionales de países en conflicto armado declarado",
    ],
    correcta: 1,
    explicacion:
      "El art. 3 define la condición de refugiado en torno a los fundados temores de persecución por motivos de raza, religión, nacionalidad, opiniones políticas, pertenencia a determinado grupo social, género, orientación sexual o identidad sexual.",
  },
  {
    id: "pin-03",
    enunciado: "¿Qué es la protección subsidiaria, según el artículo 4 de la Ley 12/2009?",
    opciones: [
      "Un permiso de residencia por motivos laborales",
      "La protección dispensada a quien, sin reunir los requisitos para el asilo, se enfrentaría a un riesgo real de sufrir alguno de los daños graves del artículo 10 si regresara a su país",
      "Una ayuda económica temporal para cualquier extranjero",
      "Un visado turístico especial",
    ],
    correcta: 1,
    explicacion:
      "El art. 4 reconoce la protección subsidiaria a quien, sin cumplir los requisitos para obtener el asilo, se enfrentaría a un riesgo real de sufrir alguno de los daños graves definidos en el art. 10 si regresara a su país de origen o de residencia habitual.",
  },
  {
    id: "pin-04",
    enunciado: "¿Cuáles son los \"daños graves\" que dan lugar a la protección subsidiaria, según el artículo 10?",
    opciones: [
      "La condena a pena de muerte o riesgo de su ejecución, la tortura y los tratos inhumanos o degradantes, y las amenazas graves contra la vida por violencia indiscriminada en conflicto internacional o interno",
      "Cualquier dificultad económica en el país de origen",
      "Solo la persecución por motivos religiosos",
      "Exclusivamente los desastres naturales",
    ],
    correcta: 0,
    explicacion:
      "El art. 10 define como daños graves la condena a pena de muerte o el riesgo de su ejecución, la tortura y los tratos inhumanos o degradantes, y las amenazas graves contra la vida o la integridad de los civiles por violencia indiscriminada en situaciones de conflicto internacional o interno.",
  },
  {
    id: "pin-05",
    enunciado: "¿En qué consiste la protección garantizada por el asilo y la protección subsidiaria, según el artículo 5?",
    opciones: [
      "En la concesión automática de la nacionalidad española",
      "En la no devolución ni expulsión de las personas a quienes se reconozca, además de otras medidas de asistencia",
      "En una exención total del cumplimiento de las leyes españolas",
      "En el acceso directo a la función pública",
    ],
    correcta: 1,
    explicacion:
      "El art. 5 establece que la protección concedida consiste en la no devolución ni expulsión de las personas a quienes se les haya reconocido el asilo o la protección subsidiaria, junto con otras medidas de asistencia.",
  },
  {
    id: "pin-06",
    enunciado: "¿En qué plazo debe presentarse la solicitud de protección internacional desde la entrada en territorio español, según el artículo 17.2?",
    opciones: [
      "En el plazo máximo de un mes desde la entrada, o desde que se produzcan los hechos que justifiquen el temor fundado",
      "Inmediatamente, en las primeras 24 horas, sin excepción",
      "No existe plazo alguno para presentarla",
      "En el plazo de un año",
    ],
    correcta: 0,
    explicacion:
      "El art. 17.2 exige que la comparecencia para solicitar protección internacional se realice sin demora y, en todo caso, en el plazo máximo de un mes desde la entrada en España o desde que se produzcan los hechos que justifiquen el temor fundado.",
  },
  {
    id: "pin-07",
    enunciado: "¿Puede ser expulsada o devuelta una persona mientras se tramita su solicitud de protección internacional, según el artículo 19.1?",
    opciones: [
      "Sí, sin ninguna limitación",
      "No, salvo que por motivos de salud o seguridad pública se adopten medidas cautelares conforme a la normativa de extranjería",
      "Solo si lo solicita el país de origen",
      "Sí, siempre que hayan pasado más de 15 días desde la solicitud",
    ],
    correcta: 1,
    explicacion:
      "El art. 19.1 dispone que, solicitada la protección, la persona no podrá ser objeto de retorno, devolución o expulsión hasta que se resuelva sobre su solicitud (o esta no sea admitida), salvo la adopción de medidas cautelares por motivos de salud o seguridad públicas.",
  },
  {
    id: "pin-08",
    enunciado: "¿Qué órgano puede acordar la no admisión a trámite de una solicitud de protección internacional presentada en territorio español, según el artículo 20.1?",
    opciones: [
      "El Ministro del Interior, a propuesta de la Oficina de Asilo y Refugio, mediante resolución motivada",
      "Cualquier agente de policía, sin necesidad de resolución motivada",
      "El Defensor del Pueblo",
      "El ACNUR de forma vinculante para España",
    ],
    correcta: 0,
    explicacion:
      "El art. 20.1 atribuye al Ministro del Interior, a propuesta de la Oficina de Asilo y Refugio, la facultad de no admitir a trámite una solicitud mediante resolución motivada, cuando concurra alguna de las causas tasadas en la ley.",
  },
  {
    id: "pin-09",
    enunciado: "¿En qué plazo debe notificarse la no admisión a trámite de una solicitud presentada en territorio español, según el artículo 20.2, y qué ocurre si no se notifica a tiempo?",
    opciones: [
      "En el plazo máximo de un mes; si transcurre sin notificarse, la solicitud se entiende admitida a trámite",
      "En 24 horas; si no se notifica, se deniega automáticamente",
      "No hay plazo, puede notificarse en cualquier momento",
      "En seis meses, sin consecuencias si se demora",
    ],
    correcta: 0,
    explicacion:
      "El art. 20.2 fija un plazo máximo de un mes para notificar la no admisión a trámite; si transcurre sin notificación, la solicitud se entiende admitida a trámite, con permanencia provisional del solicitante en España.",
  },
  {
    id: "pin-10",
    enunciado: "¿En qué plazo debe resolverse una solicitud de protección internacional presentada en un puesto fronterizo, según el artículo 21.1?",
    opciones: [
      "En el plazo máximo de cuatro días desde su presentación",
      "En el plazo de seis meses",
      "En el plazo de un año",
      "No existe plazo específico para las solicitudes en frontera",
    ],
    correcta: 0,
    explicacion:
      "El art. 21.1 establece que la resolución de no admisión a trámite de una solicitud presentada en puesto fronterizo debe notificarse a la persona interesada en el plazo máximo de cuatro días desde su presentación.",
  },
  {
    id: "pin-11",
    enunciado: "¿A quién se deniega el derecho de asilo en todo caso, según el artículo 9?",
    opciones: [
      "A quien constituya, por razones fundadas, un peligro para la seguridad de España, o a quien, condenado por sentencia firme por delito grave, constituya una amenaza para la comunidad",
      "A cualquier solicitante que no hable español",
      "A quien tenga más de 60 años",
      "A quien haya entrado ilegalmente en territorio español",
    ],
    correcta: 0,
    explicacion:
      "El art. 9 deniega en todo caso el derecho de asilo a quien constituya, por razones fundadas, un peligro para la seguridad de España, y a quien, tras una condena firme por delito grave, constituya una amenaza para la comunidad.",
  },
  {
    id: "pin-12",
    enunciado: "¿Puede sancionarse la entrada ilegal en España de quien reúne los requisitos para ser beneficiario de protección internacional, según el artículo 17.2?",
    opciones: [
      "Sí, siempre se sanciona igual que a cualquier entrada irregular",
      "No, la entrada ilegal no podrá ser sancionada cuando la realice una persona que reúna los requisitos para ser beneficiaria de la protección internacional",
      "Solo se sanciona si no solicita asilo en el mismo día de la entrada",
      "Se sanciona siempre con la expulsión inmediata",
    ],
    correcta: 1,
    explicacion:
      "El art. 17.2 dispone que la entrada ilegal en territorio español no podrá ser sancionada cuando haya sido realizada por una persona que reúna los requisitos para ser beneficiaria de la protección internacional prevista en la ley.",
  },
  {
    id: "pin-13",
    enunciado: "Según el artículo 5, ¿en qué consiste esencialmente la protección concedida con el derecho de asilo y la protección subsidiaria?",
    opciones: [
      "En la no devolución ni expulsión de las personas a quienes se les haya reconocido, junto con la adopción de las demás medidas previstas en la ley y en la normativa de la Unión Europea y los convenios internacionales",
      "Únicamente en la concesión automática de la nacionalidad española",
      "Solo en el derecho a percibir una ayuda económica mensual, sin ninguna otra medida",
      "Exclusivamente en el acceso gratuito a la vivienda pública",
    ],
    correcta: 0,
    explicacion:
      "El art. 5 establece que la protección concedida con el derecho de asilo y la protección subsidiaria consiste en la no devolución ni expulsión de las personas a quienes se les haya reconocido, así como en la adopción de las demás medidas contempladas en la Ley, en la normativa de la Unión Europea y en los Convenios internacionales ratificados por España.",
  },
  {
    id: "pin-14",
    enunciado: "Según el artículo 40.1.b), ¿puede extenderse el derecho de asilo por vía familiar al cónyuge o pareja de la persona refugiada?",
    opciones: [
      "Sí, salvo en los supuestos de divorcio, separación legal o de hecho, distinta nacionalidad, o cuando el estatuto se hubiera concedido por razón de violencia de género sufrida precisamente por parte de ese cónyuge o conviviente",
      "No, la extensión familiar solo alcanza a los descendientes menores de edad, nunca al cónyuge",
      "Sí, sin ninguna excepción ni límite temporal",
      "Solo si el cónyuge tiene la misma nacionalidad que la persona refugiada",
    ],
    correcta: 0,
    explicacion:
      "El art. 40.1.b) permite la extensión familiar del asilo o la protección subsidiaria al cónyuge o persona ligada por análoga relación de afectividad y convivencia, salvo en los supuestos de divorcio, separación legal o de hecho, distinta nacionalidad, o cuando el estatuto de refugiado se hubiera concedido por razón de género, si se acredita que la persona sufrió persecución por violencia de género precisamente por parte de ese cónyuge o conviviente.",
  },
  {
    id: "pin-15",
    enunciado: "Según el artículo 41, ¿pueden las personas refugiadas optar por reagrupar a sus familiares en lugar de solicitar la extensión del estatuto?",
    opciones: [
      "Sí, mediante la reagrupación familiar, que además será siempre aplicable cuando los beneficiarios tengan una nacionalidad distinta a la de la persona refugiada, si bien solo podrá ejercitarse una sola vez",
      "No, la única vía posible para reunir a la familia es la extensión familiar del estatuto de refugiado",
      "Sí, pudiendo ejercitarse un número ilimitado de veces sucesivas",
      "Solo si los familiares ya residen legalmente en España por otra vía distinta",
    ],
    correcta: 0,
    explicacion:
      "El art. 41 permite a las personas refugiadas y beneficiarias de protección subsidiaria optar por reagrupar a sus familiares en lugar de solicitar la extensión del estatuto, siendo esta vía siempre aplicable cuando los beneficiarios tengan una nacionalidad distinta a la de la persona reagrupante, si bien la reagrupación familiar solo podrá ejercitarse una sola vez, sin posibilidad de reagrupaciones sucesivas.",
  },
];
