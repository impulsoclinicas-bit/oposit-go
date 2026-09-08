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
  {
    id: "pin-16",
    enunciado: "Según el artículo 6.1 de la Ley 12/2009, ¿qué requisitos deben cumplir los actos de persecución para fundamentar el temor a ser perseguido?",
    opciones: [
      "Ser suficientemente graves por su naturaleza o carácter reiterado como para constituir una violación grave de los derechos fundamentales, o ser una acumulación de medidas lo suficientemente grave como para afectar de manera similar a la persona",
      "Cualquier molestia o inconveniente menor sufrido en el país de origen",
      "Solo se consideran actos de persecución los cometidos directamente por el propio Estado, nunca por terceros",
      "Deben haberse producido necesariamente durante un conflicto armado declarado",
    ],
    correcta: 0,
    explicacion:
      "El art. 6.1 de la Ley 12/2009 exige que los actos de persecución sean suficientemente graves por su naturaleza o carácter reiterado como para constituir una violación grave de los derechos fundamentales, o bien constituyan una acumulación de medidas lo suficientemente grave como para afectar a la persona de manera similar.",
  },
  {
    id: "pin-17",
    enunciado: "Según el artículo 6.2 de la Ley 12/2009, ¿cuál de las siguientes puede constituir un acto de persecución?",
    opciones: [
      "Los actos de violencia física o psíquica, incluidos los actos de violencia sexual",
      "Únicamente las restricciones administrativas de tipo fiscal",
      "El simple hecho de pertenecer a la mayoría demográfica del país",
      "Cualquier crítica política recibida en un debate público",
    ],
    correcta: 0,
    explicacion:
      "El art. 6.2 de la Ley 12/2009 enumera, entre las formas que pueden revestir los actos de persecución, los actos de violencia física o psíquica (incluida la violencia sexual), las medidas discriminatorias legislativas, administrativas, policiales o judiciales, los procesamientos o penas desproporcionados o discriminatorios, y los actos de naturaleza sexual que afecten a adultos o menores.",
  },
  {
    id: "pin-18",
    enunciado: "Según el artículo 7.1 de la Ley 12/2009, ¿qué se entiende, entre otros elementos, por «grupo social determinado» a efectos de los motivos de persecución?",
    opciones: [
      "Un grupo cuyos integrantes comparten una característica innata o antecedentes comunes que no pueden cambiarse, o una característica tan fundamental para su identidad que no se les puede exigir que renuncien a ella, y que posee una identidad diferenciada en el país de que se trate",
      "Únicamente los grupos reconocidos oficialmente por el gobierno del país de origen",
      "Solo los grupos de carácter religioso",
      "Cualquier asociación con más de cien miembros",
    ],
    correcta: 0,
    explicacion:
      "El art. 7.1.e) de la Ley 12/2009 define el «grupo social determinado» como aquel cuyos integrantes comparten una característica innata o antecedentes comunes que no pueden cambiarse, o una característica o creencia tan fundamental para su identidad que no se les puede exigir que renuncien a ella, y que posee una identidad diferenciada por ser percibido como diferente por la sociedad o por el agente perseguidor, incluyendo en determinadas circunstancias los grupos basados en la orientación sexual o identidad de género.",
  },
  {
    id: "pin-19",
    enunciado: "Según el artículo 13 de la Ley 12/2009, ¿quiénes pueden ser agentes de persecución o causantes de daños graves?",
    opciones: [
      "Únicamente el propio Estado",
      "El Estado, los partidos u organizaciones que controlen el Estado o una parte considerable de su territorio, y agentes no estatales cuando el Estado o dichas organizaciones no puedan o no quieran proporcionar protección efectiva",
      "Exclusivamente organizaciones internacionales reconocidas por Naciones Unidas",
      "Solo pueden serlo personas físicas identificadas individualmente",
    ],
    correcta: 1,
    explicacion:
      "El art. 13 de la Ley 12/2009 enumera como posibles agentes de persecución o causantes de daños graves al Estado, a los partidos u organizaciones que controlen el Estado o una parte considerable de su territorio, y a agentes no estatales, cuando los anteriores no puedan o no quieran proporcionar protección efectiva contra la persecución o los daños graves.",
  },
  {
    id: "pin-20",
    enunciado: "Según el artículo 14 de la Ley 12/2009, ¿cuándo se entiende que existe protección frente a la persecución o los daños graves?",
    opciones: [
      "Cuando el Estado o las organizaciones que controlen su territorio adopten medidas razonables y efectivas para impedir la persecución o el padecimiento de daños graves, y el solicitante tenga acceso efectivo a dicha protección",
      "Nunca puede considerarse que existe protección efectiva en el país de origen",
      "Basta con que exista legislación formal en el país, aunque no se aplique en la práctica",
      "Solo se considera que existe protección si la proporciona directamente un organismo internacional",
    ],
    correcta: 0,
    explicacion:
      "El art. 14 de la Ley 12/2009 entiende que existe protección cuando el Estado, u organizaciones que controlen el Estado o una parte considerable de su territorio, adopten medidas razonables y efectivas para impedir la persecución o el padecimiento de daños graves, como el establecimiento de un sistema jurídico eficaz para investigar, procesar y sancionar estas conductas, y siempre que el solicitante tenga acceso efectivo a dicha protección.",
  },
  {
    id: "pin-21",
    enunciado: "Según el artículo 22 de la Ley 12/2009, ¿dónde permanece el solicitante de asilo durante la tramitación de determinados recursos frente a la no admisión o denegación de su solicitud?",
    opciones: [
      "En su domicilio particular, sin ninguna limitación",
      "En las dependencias habilitadas a tal efecto",
      "Necesariamente en un Centro de Internamiento de Extranjeros",
      "En un centro penitenciario ordinario",
    ],
    correcta: 1,
    explicacion:
      "El art. 22 de la Ley 12/2009 dispone que, durante la tramitación de la petición de reexamen y del recurso de reposición, así como en los supuestos en que se solicite la adopción de determinadas medidas cautelares, la persona solicitante de asilo permanecerá en las dependencias habilitadas a tal efecto.",
  },
  {
    id: "pin-22",
    enunciado: "Según el artículo 23 de la Ley 12/2009, ¿qué órgano es competente para la tramitación de las solicitudes de protección internacional?",
    opciones: [
      "La Oficina de Asilo y Refugio, dependiente del Ministerio del Interior",
      "El Tribunal Constitucional",
      "El Alto Comisionado de las Naciones Unidas para los Refugiados, en exclusiva",
      "Cualquier Comisaría de Policía, sin necesidad de un órgano específico",
    ],
    correcta: 0,
    explicacion:
      "El art. 23.1 de la Ley 12/2009 atribuye a la Oficina de Asilo y Refugio, dependiente del Ministerio del Interior, la competencia para la tramitación de las solicitudes de protección internacional, sin perjuicio de las demás funciones que reglamentariamente se le atribuyan.",
  },
  {
    id: "pin-23",
    enunciado: "Según el artículo 23.2 de la Ley 12/2009, ¿qué es la Comisión Interministerial de Asilo y Refugio?",
    opciones: [
      "Un órgano colegiado adscrito al Ministerio del Interior, compuesto por representantes de los departamentos con competencia en política exterior e interior, justicia, inmigración, acogida de solicitantes de asilo e igualdad",
      "Un tribunal encargado de juzgar delitos cometidos por refugiados",
      "Un organismo dependiente exclusivamente de la Unión Europea",
      "Una ONG que colabora de forma voluntaria con el Gobierno",
    ],
    correcta: 0,
    explicacion:
      "El art. 23.2 de la Ley 12/2009 define la Comisión Interministerial de Asilo y Refugio como un órgano colegiado adscrito al Ministerio del Interior, compuesto por un representante de cada uno de los departamentos con competencia en política exterior e interior, justicia, inmigración, acogida de los solicitantes de asilo e igualdad.",
  },
  {
    id: "pin-24",
    enunciado: "Según el artículo 32 de la Ley 12/2009, ¿tienen derecho a trabajar en España los solicitantes de protección internacional?",
    opciones: [
      "No, tienen prohibido trabajar mientras se tramita su solicitud",
      "Sí, serán autorizados para trabajar en España en los términos que reglamentariamente se establezcan",
      "Solo pueden trabajar si han obtenido ya la condición de refugiados",
      "Solo pueden trabajar por cuenta propia, nunca por cuenta ajena",
    ],
    correcta: 1,
    explicacion:
      "El art. 32 de la Ley 12/2009 reconoce a las personas solicitantes de protección internacional el derecho a ser autorizadas para trabajar en España, en los términos que reglamentariamente se establezcan.",
  },
  {
    id: "pin-25",
    enunciado: "Según el artículo 33 de la Ley 12/2009, ¿en qué supuesto puede reducirse o retirarse alguno de los servicios de acogida a un solicitante de protección internacional?",
    opciones: [
      "Cuando la persona solicitante abandone el lugar de residencia asignado sin informar a la autoridad competente o, en caso de haberlo solicitado, sin permiso",
      "Nunca puede reducirse o retirarse la acogida, sea cual sea la circunstancia",
      "Solo si la persona solicitante comete un delito grave",
      "Solo por decisión directa del Ministerio Fiscal",
    ],
    correcta: 0,
    explicacion:
      "El art. 33 de la Ley 12/2009 permite reducir o retirar los servicios de acogida, entre otros supuestos, cuando la persona solicitante abandone el lugar de residencia asignado sin informar a la autoridad competente o sin el permiso solicitado, cuando oculte recursos económicos de los que dispone, o una vez notificada la resolución de su solicitud.",
  },
  {
    id: "pin-26",
    enunciado: "Según el artículo 38 de la Ley 12/2009, ¿pueden solicitarse la protección internacional en Embajadas y Consulados españoles?",
    opciones: [
      "No, la solicitud solo puede presentarse en territorio español o en un puesto fronterizo",
      "Sí, los Embajadores de España podrán promover el traslado del solicitante a España, siempre que este no sea nacional del país donde se ubica la Representación diplomática y corra peligro su integridad física",
      "Sí, pero únicamente si el solicitante es nacional del país donde se encuentra la embajada",
      "Solo en las embajadas de países miembros de la Unión Europea",
    ],
    correcta: 1,
    explicacion:
      "El art. 38 de la Ley 12/2009 permite que, para atender casos fuera del territorio nacional, los Embajadores de España promuevan el traslado del solicitante de asilo a España para hacer posible la presentación de la solicitud, siempre que este no sea nacional del país en que se encuentra la Representación diplomática y corra peligro su integridad física.",
  },
  {
    id: "pin-27",
    enunciado: "Según el artículo 39.2 de la Ley 12/2009, ¿qué ocurre con los familiares del solicitante de protección internacional que se encuentren también en España sin haber presentado solicitud independiente?",
    opciones: [
      "Se les autorizará la residencia en España con carácter provisional, condicionada a la resolución de la solicitud del interesado",
      "Deben abandonar inmediatamente el territorio español",
      "Son expulsados automáticamente junto con el solicitante si la solicitud es denegada",
      "No tienen ningún derecho ni relación jurídica con el procedimiento del solicitante",
    ],
    correcta: 0,
    explicacion:
      "El art. 39.2 de la Ley 12/2009 dispone que, si durante la tramitación de la solicitud los miembros de la familia del solicitante se encuentran también en España sin haber presentado una solicitud independiente, se les autorizará la residencia en España con carácter provisional, condicionada a la resolución de la solicitud de protección internacional del interesado.",
  },
  {
    id: "pin-28",
    enunciado: "Según el artículo 48.1 de la Ley 12/2009, ¿qué ocurre con los menores no acompañados solicitantes de protección internacional?",
    opciones: [
      "Son remitidos a los servicios competentes en materia de protección de menores, poniéndose el hecho en conocimiento del Ministerio Fiscal",
      "Se tramita su solicitud exactamente igual que la de un adulto, sin ninguna especialidad",
      "Quedan automáticamente excluidos de cualquier protección internacional",
      "Son internados directamente en un Centro de Internamiento de Extranjeros",
    ],
    correcta: 0,
    explicacion:
      "El art. 48.1 de la Ley 12/2009 dispone que los menores no acompañados solicitantes de protección internacional serán remitidos a los servicios competentes en materia de protección de menores, poniéndose el hecho en conocimiento del Ministerio Fiscal.",
  },
  {
    id: "pin-29",
    enunciado: "Según el artículo 48.2 de la Ley 12/2009, ¿qué ocurre cuando la minoría de edad de un solicitante no puede establecerse con seguridad?",
    opciones: [
      "Se pone el hecho en conocimiento inmediato del Ministerio Fiscal, que dispondrá lo necesario para la determinación de la edad mediante pruebas científicas realizadas con carácter prioritario y urgente",
      "Se le considera automáticamente mayor de edad sin ninguna comprobación adicional",
      "El procedimiento queda suspendido indefinidamente hasta que el interesado aporte documentación",
      "Se resuelve siempre en contra del solicitante, denegando la protección solicitada",
    ],
    correcta: 0,
    explicacion:
      "El art. 48.2 de la Ley 12/2009 establece que, cuando la minoría de edad no pueda ser establecida con seguridad, se pondrá el hecho en conocimiento inmediato del Ministerio Fiscal, que dispondrá lo necesario para la determinación de la edad del presunto menor mediante pruebas científicas realizadas con carácter prioritario y urgente, sin que la negativa a someterse al reconocimiento médico impida dictar resolución sobre la solicitud.",
  },
  {
    id: "pin-30",
    enunciado: "¿Qué es el «reasentamiento» previsto en la Disposición Adicional Primera de la Ley 12/2009?",
    opciones: [
      "El marco de protección aplicable a las personas acogidas en España en virtud de programas elaborados por el Gobierno en colaboración con el Alto Comisionado de las Naciones Unidas para los Refugiados y otras organizaciones internacionales, acordándose anualmente el número de personas a reasentar",
      "Un sinónimo exacto de la reagrupación familiar",
      "Un procedimiento exclusivamente aplicable a los solicitantes que ya se encuentran en territorio español",
      "Un mecanismo que sustituye por completo al procedimiento ordinario de solicitud de asilo",
    ],
    correcta: 0,
    explicacion:
      "La Disposición Adicional Primera de la Ley 12/2009 extiende el marco de protección de la Ley a las personas acogidas en España en virtud de programas de reasentamiento elaborados por el Gobierno de la Nación, en colaboración con el Alto Comisionado de las Naciones Unidas para los Refugiados, acordando el Consejo de Ministros anualmente el número de personas a reasentar, que tendrán el mismo estatuto que los refugiados reconocidos conforme a la Ley.",
  },
];
