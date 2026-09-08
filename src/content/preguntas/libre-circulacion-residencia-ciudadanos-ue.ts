import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "cue-01",
    enunciado: "¿Qué norma regula en España la entrada, libre circulación y residencia de los ciudadanos de otros Estados miembros de la Unión Europea?",
    opciones: [
      "El Real Decreto 240/2007, de 16 de febrero",
      "La Ley Orgánica 4/2000",
      "El Reglamento (UE) 2016/399",
      "La Ley 12/2009, de asilo",
    ],
    correcta: 0,
    explicacion:
      "El Real Decreto 240/2007, de 16 de febrero, regula las condiciones para el ejercicio de los derechos de entrada, libre circulación, estancia, residencia y trabajo en España de los ciudadanos de otros Estados miembros de la UE y del resto de Estados parte en el Espacio Económico Europeo.",
  },
  {
    id: "cue-02",
    enunciado: "¿Con qué documentación puede entrar en España un ciudadano de la Unión Europea, según el artículo 4.1?",
    opciones: [
      "Únicamente con visado expedido por España",
      "Con el pasaporte o documento de identidad válido y en vigor en el que conste su nacionalidad",
      "Solo con permiso de residencia previo",
      "Con cualquier documento, sin necesidad de que acredite su identidad",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.1 establece que la entrada en territorio español del ciudadano de la Unión se efectuará con el pasaporte o documento de identidad válido y en vigor en el que conste la nacionalidad del titular, sin necesitar visado.",
  },
  {
    id: "cue-03",
    enunciado: "¿Durante cuánto tiempo puede permanecer en España un ciudadano de la UE con solo el pasaporte o documento de identidad, sin necesidad de registrarse (art. 6)?",
    opciones: [
      "Un mes",
      "Una estancia inferior a tres meses",
      "Seis meses",
      "Un año",
    ],
    correcta: 1,
    explicacion:
      "El art. 6.1 permite una estancia inferior a tres meses con la sola posesión del pasaporte o documento de identidad en vigor, sin que dicha permanencia compute a efectos de residencia.",
  },
  {
    id: "cue-04",
    enunciado: "¿Cuáles son, entre otros, los supuestos que dan derecho de residencia superior a tres meses a un ciudadano de la UE, según el artículo 7?",
    opciones: [
      "Ser trabajador por cuenta ajena o propia en España, o disponer de recursos suficientes y un seguro de enfermedad que cubra todos los riesgos en España",
      "Únicamente ser propietario de un inmueble en España",
      "Solo estar casado con un ciudadano español",
      "Cualquier ciudadano de la UE tiene derecho automático sin ningún requisito",
    ],
    correcta: 0,
    explicacion:
      "El art. 7.1 reconoce el derecho de residencia superior a tres meses, entre otros supuestos, a quien sea trabajador por cuenta propia o ajena en España, o a quien disponga de recursos suficientes para no ser una carga para la asistencia social y de un seguro de enfermedad que cubra todos los riesgos.",
  },
  {
    id: "cue-05",
    enunciado: "¿Tras cuántos años de residencia legal continuada se adquiere el derecho a residir con carácter permanente, según el artículo 10.1?",
    opciones: ["Dos años", "Tres años", "Cinco años", "Diez años"],
    correcta: 2,
    explicacion:
      "El art. 10.1 reconoce el derecho a residir con carácter permanente a quien haya residido legalmente en España durante un período continuado de cinco años, sin sujeción ya a las condiciones de recursos o actividad exigidas para la residencia temporal.",
  },
  {
    id: "cue-06",
    enunciado: "¿Puede un trabajador jubilado adquirir el derecho de residencia permanente antes de los cinco años, según el artículo 10.2?",
    opciones: [
      "No, el plazo de cinco años es siempre inexcusable",
      "Sí, si ha alcanzado la edad de jubilación tras haber trabajado en España al menos los últimos doce meses y haber residido de forma continuada más de tres años",
      "Sí, pero solo si es de nacionalidad española de origen",
      "Solo si lo autoriza expresamente el Ministerio de Trabajo",
    ],
    correcta: 1,
    explicacion:
      "El art. 10.2.a) permite adquirir la residencia permanente antes de los cinco años al trabajador que, al cesar su actividad, haya alcanzado la edad de jubilación con derecho a pensión, si ha trabajado en España al menos los últimos doce meses y ha residido de forma continuada más de tres años.",
  },
  {
    id: "cue-07",
    enunciado: "¿Cuándo se pierde el derecho de residencia permanente por ausencia del territorio español, según el artículo 10.7?",
    opciones: [
      "Nunca se pierde una vez adquirido",
      "Por ausencia del territorio español durante más de dos años consecutivos",
      "Por ausencia de más de un mes",
      "Por cualquier ausencia, sea cual sea su duración",
    ],
    correcta: 1,
    explicacion:
      "El art. 10.7 establece que se pierde el derecho de residencia permanente por ausencia del territorio español durante más de dos años consecutivos.",
  },
  {
    id: "cue-08",
    enunciado: "¿Qué medidas pueden adoptarse frente a un ciudadano de la UE o de su familia por razones de orden público, seguridad o salud pública, según el artículo 15.1?",
    opciones: [
      "Impedir la entrada en España, denegar la inscripción registral o la expedición de tarjetas de residencia, u ordenar la expulsión o devolución",
      "Únicamente advertir verbalmente al interesado",
      "Solo se puede imponer una sanción económica",
      "Ninguna, los ciudadanos de la UE gozan de inmunidad absoluta frente a estas medidas",
    ],
    correcta: 0,
    explicacion:
      "El art. 15.1 permite, por razones de orden público, seguridad o salud pública, impedir la entrada en España, denegar la inscripción en el Registro Central de Extranjeros o la expedición/renovación de tarjetas de residencia, u ordenar la expulsión o devolución.",
  },
  {
    id: "cue-09",
    enunciado: "¿Qué requisito adicional exige el artículo 15.1 para expulsar a un ciudadano de la UE que ya ha adquirido el derecho de residencia permanente?",
    opciones: [
      "Ninguno, se puede expulsar igual que a quien no tiene residencia permanente",
      "Que existan motivos graves de orden público o seguridad pública",
      "Que lo solicite expresamente su país de origen",
      "Que haya sido condenado penalmente en cualquier momento de su vida",
    ],
    correcta: 1,
    explicacion:
      "El art. 15.1 exige, para expulsar a quien ya ha adquirido el derecho de residencia permanente, que existan motivos graves de orden público o seguridad pública, valorando además la duración de su residencia e integración social en España.",
  },
  {
    id: "cue-10",
    enunciado: "Según el artículo 15.5.d), ¿en qué debe fundarse una medida de expulsión por razones de orden público o seguridad pública?",
    opciones: [
      "Exclusivamente en la conducta personal del interesado, que debe constituir una amenaza real, actual y suficientemente grave para un interés fundamental de la sociedad",
      "En la mera existencia de condenas penales anteriores, sin más valoración",
      "En consideraciones de índole económica",
      "En la nacionalidad del interesado",
    ],
    correcta: 0,
    explicacion:
      "El art. 15.5.d) exige que estas medidas se funden exclusivamente en la conducta personal del interesado, constitutiva de una amenaza real, actual y suficientemente grave para un interés fundamental de la sociedad; la existencia de condenas penales anteriores no es, por sí sola, razón suficiente.",
  },
  {
    id: "cue-11",
    enunciado: "Según el artículo 2 del Real Decreto 240/2007, ¿a qué familiares del ciudadano de la Unión se aplica también esta norma?",
    opciones: [
      "Al cónyuge o pareja registrada, a los descendientes directos menores de 21 años o mayores que vivan a su cargo, y a los ascendientes directos a su cargo (o a los de su cónyuge o pareja)",
      "Únicamente a los hijos menores de edad, sin ninguna otra categoría de familiares",
      "A cualquier persona que conviva con el ciudadano comunitario, sin necesidad de acreditar vínculo familiar",
      "Solo a los familiares que tengan la nacionalidad de un Estado miembro de la Unión Europea",
    ],
    correcta: 0,
    explicacion:
      "El art. 2 extiende la aplicación del real decreto, cualquiera que sea su nacionalidad, al cónyuge o a la pareja registrada (siempre que no haya recaído nulidad, divorcio, separación legal o cancelación de la inscripción), a los descendientes directos menores de veintiún años o mayores que vivan a su cargo, y a los ascendientes directos que vivan a cargo del ciudadano de la Unión o de su cónyuge o pareja.",
  },
  {
    id: "cue-12",
    enunciado: "¿Qué validez tiene la tarjeta de residencia de familiar de ciudadano de la Unión, según el artículo 8.5?",
    opciones: [
      "Cinco años a partir de su expedición, o el período previsto de residencia del ciudadano de la Unión si este fuera inferior",
      "Un año, renovable indefinidamente",
      "Validez indefinida desde su primera expedición",
      "Seis meses, coincidiendo con la primera estancia autorizada",
    ],
    correcta: 0,
    explicacion:
      "El art. 8.5 establece que la tarjeta de residencia de familiar de ciudadano de la Unión tendrá una validez de cinco años a partir de la fecha de su expedición, o por el período previsto de residencia del ciudadano de la Unión, si dicho período fuera inferior a cinco años.",
  },
  {
    id: "cue-13",
    enunciado: "Según el artículo 9.1, ¿qué ocurre con el derecho de residencia de los familiares (nacionales de un Estado miembro) si el ciudadano de la Unión fallece, sale de España o se divorcia de ellos?",
    opciones: [
      "No se ve afectado: el fallecimiento, la salida de España, la nulidad matrimonial, el divorcio o la cancelación de la pareja registrada no afectan al derecho de residencia de los familiares que sean, a su vez, ciudadanos de un Estado miembro",
      "Se extingue automáticamente y sin excepción en todos los casos",
      "Solo se mantiene si el familiar tiene más de sesenta y cinco años",
      "Se mantiene únicamente durante un plazo máximo de treinta días",
    ],
    correcta: 0,
    explicacion:
      "El art. 9.1 dispone que el fallecimiento del ciudadano de la Unión, su salida de España, o la nulidad del vínculo matrimonial, el divorcio, la separación legal o la cancelación de la inscripción como pareja registrada, no afectará al derecho de residencia de los miembros de su familia que sean, a su vez, ciudadanos de un Estado miembro de la Unión Europea o del Espacio Económico Europeo.",
  },
  {
    id: "cue-14",
    enunciado: "Según el artículo 9.4.c), ¿qué circunstancia especialmente difícil permite a un excónyuge no comunitario conservar el derecho de residencia tras el divorcio, aunque el matrimonio no llegara a los tres años?",
    opciones: [
      "Haber sido víctima de violencia de género o de trata de seres humanos por parte de su cónyuge o pareja durante el matrimonio o la unión registrada",
      "Haber vivido en España durante al menos seis meses, sin ninguna otra circunstancia adicional",
      "Tener más ingresos económicos que el excónyuge ciudadano de la Unión",
      "Haber solicitado la nacionalidad española antes del divorcio",
    ],
    correcta: 0,
    explicacion:
      "El art. 9.4.c) permite conservar el derecho de residencia, entre las circunstancias especialmente difíciles que exceptúan el requisito general de los tres años de duración del matrimonio, haber sido víctima de violencia de género o haber sido sometido a trata de seres humanos por parte del cónyuge o pareja durante el matrimonio o la situación de pareja registrada, circunstancia acreditable de forma provisional mediante una orden de protección o informe del Ministerio Fiscal.",
  },
  {
    id: "cue-15",
    enunciado: "Según el artículo 9 bis.2, ¿tiene el recurso a la asistencia social en España por parte de un ciudadano de la Unión como consecuencia automática su expulsión?",
    opciones: [
      "No, el recurso a la asistencia social no tiene por consecuencia automática una medida de expulsión",
      "Sí, siempre que se solicite dentro de los primeros tres meses de residencia",
      "Sí, en todo caso y sin excepción",
      "Solo se expulsa automáticamente si la ayuda solicitada supera un importe determinado",
    ],
    correcta: 0,
    explicacion:
      "El art. 9 bis.2 establece expresamente que el recurso a la asistencia social en España de un ciudadano de un Estado miembro de la Unión Europea o de un Estado parte en el Espacio Económico Europeo, o de un miembro de su familia, no tendrá por consecuencia automática una medida de expulsión, debiendo valorarse las circunstancias del caso concreto.",
  },
  {
    id: "cue-16",
    enunciado: "Según el artículo 3.1 del Real Decreto 240/2007, ¿qué derechos tienen las personas incluidas en su ámbito de aplicación?",
    opciones: [
      "Derecho a entrar, salir, circular y residir libremente en territorio español, previo cumplimiento de las formalidades previstas y sin perjuicio de las limitaciones establecidas en la norma",
      "Únicamente el derecho a residir, sin derecho a circular libremente",
      "Solo el derecho a trabajar, no el de residir",
      "Ningún derecho reconocido específicamente por esta norma",
    ],
    correcta: 0,
    explicacion:
      "El art. 3.1 del RD 240/2007 reconoce a las personas incluidas en su ámbito de aplicación el derecho a entrar, salir, circular y residir libremente en territorio español, previo cumplimiento de las formalidades previstas en la norma y sin perjuicio de las limitaciones que la misma establece.",
  },
  {
    id: "cue-17",
    enunciado: "Según el artículo 3.2 del Real Decreto 240/2007, ¿en qué condiciones pueden acceder los ciudadanos de la Unión a una actividad por cuenta ajena o propia en España?",
    opciones: [
      "En las mismas condiciones que los españoles, sin perjuicio de determinadas limitaciones específicas previstas por el Derecho de la Unión",
      "Solo pueden trabajar por cuenta ajena, nunca por cuenta propia",
      "Necesitan siempre una autorización de trabajo específica, igual que los extranjeros no comunitarios",
      "Solo pueden acceder al empleo público, no al sector privado",
    ],
    correcta: 0,
    explicacion:
      "El art. 3.2 del RD 240/2007 reconoce a los ciudadanos de la Unión (con determinadas excepciones para ciertos familiares) el derecho a acceder a cualquier actividad, tanto por cuenta ajena como por cuenta propia, prestación de servicios o estudios, en las mismas condiciones que los españoles.",
  },
  {
    id: "cue-18",
    enunciado: "Según el artículo 5 del Real Decreto 240/2007, ¿tienen los ciudadanos de la Unión derecho a salir de España?",
    opciones: [
      "Sí, tienen derecho a salir de España para trasladarse a otro Estado miembro, con independencia de la presentación del pasaporte o documento de identidad en un puesto habilitado, y sin perjuicio de las prohibiciones legales de salida por razones de seguridad nacional o salud pública",
      "No, la salida de España requiere siempre autorización administrativa previa",
      "Solo pueden salir si han solicitado previamente el certificado de registro",
      "Solo pueden salir por vía aérea",
    ],
    correcta: 0,
    explicacion:
      "El art. 5 del RD 240/2007 reconoce a los ciudadanos de un Estado miembro de la Unión Europea o del Espacio Económico Europeo, y a sus familiares con independencia de su nacionalidad, el derecho a salir de España para trasladarse a otro Estado miembro, sin perjuicio de los supuestos legales de prohibición de salida por razones de seguridad nacional, salud pública o los previstos en el Código Penal.",
  },
  {
    id: "cue-19",
    enunciado: "Según el artículo 12 del Real Decreto 240/2007, ¿cómo se tramitan las solicitudes de certificados de registro y tarjetas de residencia?",
    opciones: [
      "Se presentan personalmente en el modelo oficial establecido, se tramitan con carácter preferente, y su tramitación no supone obstáculo a la permanencia provisional del interesado en España ni al desarrollo de sus actividades",
      "Se tramitan con carácter ordinario, sin ninguna preferencia especial",
      "Solo pueden presentarse a través de representante legal, nunca personalmente",
      "La tramitación exige que el interesado abandone España hasta su resolución",
    ],
    correcta: 0,
    explicacion:
      "El art. 12 del RD 240/2007 exige que las solicitudes de certificados de registro y tarjetas de residencia se presenten personalmente en el modelo oficial, tramitándose con carácter preferente, sin que dicha tramitación suponga obstáculo alguno a la permanencia provisional del interesado en España ni al desarrollo de sus actividades.",
  },
  {
    id: "cue-20",
    enunciado: "Según el artículo 12.3 del Real Decreto 240/2007, ¿pueden las autoridades competentes recabar información sobre antecedentes penales del solicitante?",
    opciones: [
      "No, esta posibilidad está expresamente prohibida por la norma",
      "Sí, excepcionalmente, pueden recabar información sobre posibles antecedentes penales del interesado a las autoridades del Estado de origen o de otros Estados",
      "Solo pueden hacerlo si el solicitante lo autoriza expresamente por escrito",
      "Solo se permite respecto de antecedentes penales cometidos en territorio español",
    ],
    correcta: 1,
    explicacion:
      "El art. 12.3 del RD 240/2007 permite, excepcionalmente, que las autoridades competentes para tramitar y resolver las solicitudes recaben información sobre posibles antecedentes penales del interesado a las autoridades del Estado de origen o a las de otros Estados.",
  },
  {
    id: "cue-21",
    enunciado: "Según el artículo 13 del Real Decreto 240/2007, ¿se exige a ascendientes y descendientes aportar de nuevo la documentación del vínculo familiar al renovar la tarjeta de residencia?",
    opciones: [
      "Sí, siempre, en cada renovación",
      "No; en el caso de ascendientes y descendientes no se exigirá la aportación de la documentación acreditativa de la existencia del vínculo familiar que da derecho a la expedición de la tarjeta",
      "Solo se exime de este requisito a los ascendientes, no a los descendientes",
      "Solo se exime si han residido más de veinte años en España",
    ],
    correcta: 1,
    explicacion:
      "El art. 13 del RD 240/2007 exime a los ascendientes y descendientes de aportar de nuevo, en la renovación de la tarjeta de residencia previa a la adquisición del derecho de residencia permanente, la documentación acreditativa de la existencia del vínculo familiar que dio derecho a su expedición inicial.",
  },
  {
    id: "cue-22",
    enunciado: "Según el artículo 14.3 del Real Decreto 240/2007, ¿cuándo caduca la vigencia de la tarjeta de residencia de familiar de ciudadano de la Unión por ausencia del territorio español?",
    opciones: [
      "Por ausencias superiores a seis meses en un año, salvo determinadas excepciones (obligaciones militares, gestación, parto, enfermedad grave, estudios, formación profesional o traslado profesional a otro Estado, entre otras)",
      "Nunca caduca por ausencia, sea cual sea su duración",
      "Por cualquier ausencia superior a un mes, sin excepciones",
      "Solo caduca si la ausencia se produce fuera de la Unión Europea",
    ],
    correcta: 0,
    explicacion:
      "El art. 14.3 del RD 240/2007 establece que la vigencia de la tarjeta de residencia de familiar de ciudadano de la Unión caducará por las ausencias superiores a seis meses en un año, si bien no se ve afectada por ausencias de mayor duración debidas a obligaciones militares o, hasta doce meses consecutivos, a motivos de gestación, parto, posparto, enfermedad grave, estudios, formación profesional o traslados profesionales a otro Estado miembro o a un tercer país.",
  },
  {
    id: "cue-23",
    enunciado: "Según el artículo 14.2 del Real Decreto 240/2007, ¿qué obligación tienen los interesados respecto de los cambios de circunstancias personales?",
    opciones: [
      "Ninguna, no existe obligación de comunicación de cambios",
      "Deben comunicar los eventuales cambios de circunstancias referidos a su nacionalidad, estado civil o domicilio a la Oficina de Extranjeros de la provincia donde residan, o en su defecto, a la Comisaría de Policía correspondiente",
      "Solo deben comunicar los cambios de domicilio, no los de estado civil",
      "Deben comunicar los cambios directamente al consulado de su país de origen",
    ],
    correcta: 1,
    explicacion:
      "El art. 14.2 del RD 240/2007 obliga a los interesados a comunicar los eventuales cambios de circunstancias referidos a su nacionalidad, estado civil o domicilio a la Oficina de Extranjeros de la provincia donde residan o, en su defecto, a la Comisaría de Policía correspondiente.",
  },
  {
    id: "cue-24",
    enunciado: "Según el artículo 16.1 del Real Decreto 240/2007, ¿qué trámite se exige antes de dictar una resolución administrativa de expulsión de un titular de tarjeta o certificado?",
    opciones: [
      "Ninguno, la resolución puede dictarse sin ningún informe previo",
      "El informe previo de la Abogacía del Estado en la provincia, salvo en casos de urgencia debidamente motivada",
      "Únicamente la audiencia previa del Defensor del Pueblo",
      "Un referéndum vecinal en el municipio de residencia",
    ],
    correcta: 1,
    explicacion:
      "El art. 16.1 del RD 240/2007 exige, con carácter previo a dictar la resolución administrativa de expulsión de un titular de tarjeta o certificado, el informe previo de la Abogacía del Estado en la provincia, salvo en aquellos casos en que concurran razones de urgencia debidamente motivadas.",
  },
  {
    id: "cue-25",
    enunciado: "Según el artículo 17.1 del Real Decreto 240/2007, ¿qué garantía procesal existe frente a la ejecución de una resolución de expulsión cuando se ha solicitado una medida cautelar de suspensión?",
    opciones: [
      "No podrá producirse la expulsión hasta que se haya adoptado la decisión sobre la medida cautelar, salvo determinadas excepciones (decisión judicial anterior, revisión judicial previa, o motivos imperiosos de seguridad pública)",
      "La expulsión se ejecuta siempre de forma inmediata, sin esperar la decisión cautelar",
      "La medida cautelar nunca puede solicitarse en este procedimiento",
      "Solo se suspende la expulsión si el interesado deposita una fianza económica",
    ],
    correcta: 0,
    explicacion:
      "El art. 17.1 del RD 240/2007 establece que, cuando el recurso contra la resolución de expulsión vaya acompañado de solicitud de suspensión cautelar, no podrá producirse la expulsión hasta que se resuelva sobre dicha medida, salvo que la resolución se base en una decisión judicial anterior, las personas afectadas hayan tenido acceso previo a revisión judicial, o concurran motivos imperiosos de seguridad pública.",
  },
  {
    id: "cue-26",
    enunciado: "Según el artículo 18.1 del Real Decreto 240/2007, ¿quién dicta las resoluciones de expulsión de ciudadanos de la Unión?",
    opciones: [
      "Los Subdelegados del Gobierno o los Delegados del Gobierno en las comunidades autónomas uniprovinciales",
      "Directamente el Ministro del Interior en todos los casos",
      "El Director General de la Policía",
      "Los Ayuntamientos del municipio de residencia",
    ],
    correcta: 0,
    explicacion:
      "El art. 18.1 del RD 240/2007 atribuye la competencia para dictar las resoluciones de expulsión a los Subdelegados del Gobierno o, en su caso, a los Delegados del Gobierno en las comunidades autónomas uniprovinciales.",
  },
  {
    id: "cue-27",
    enunciado: "Según el artículo 18.2 del Real Decreto 240/2007, ¿qué plazo mínimo se concede, con carácter general, para abandonar el territorio español tras una resolución de expulsión?",
    opciones: [
      "Cuarenta y ocho horas, sin excepción",
      "No podrá ser inferior a un mes a partir de la fecha de notificación, salvo en casos urgentes debidamente justificados",
      "No existe plazo, la expulsión es siempre inmediata",
      "Seis meses, en todo caso",
    ],
    correcta: 1,
    explicacion:
      "El art. 18.2 del RD 240/2007 establece que las resoluciones de expulsión deben fijar un plazo para abandonar el territorio español que, excepto en casos urgentes debidamente justificados, no podrá ser inferior a un mes a partir de la fecha de notificación.",
  },
  {
    id: "cue-28",
    enunciado: "¿Qué diferencia existe entre el «certificado de registro» y la «tarjeta de residencia de familiar de ciudadano de la Unión»?",
    opciones: [
      "Son términos sinónimos, sin ninguna diferencia",
      "El certificado de registro se expide al propio ciudadano de la Unión que va a residir más de tres meses en España; la tarjeta de residencia de familiar se expide a los familiares que no tengan la nacionalidad de un Estado miembro de la Unión o del Espacio Económico Europeo",
      "El certificado de registro solo se expide a menores de edad",
      "La tarjeta de residencia de familiar solo se expide a cónyuges, nunca a otros familiares",
    ],
    correcta: 1,
    explicacion:
      "El Real Decreto 240/2007 distingue el certificado de registro, que se expide al propio ciudadano de un Estado miembro de la Unión Europea o del Espacio Económico Europeo que va a residir en España por más de tres meses, de la tarjeta de residencia de familiar de ciudadano de la Unión, que se expide a los miembros de su familia que no tengan la nacionalidad de un Estado miembro (nacionales de terceros países).",
  },
  {
    id: "cue-29",
    enunciado: "¿Qué documento acredita, con carácter general, el derecho de residencia permanente de un ciudadano de la Unión que ha adquirido este derecho conforme al artículo 10 del Real Decreto 240/2007?",
    opciones: [
      "Un certificado de registro o documento acreditativo de residencia permanente que sustituye al certificado de registro ordinario, expedido tan pronto como se acredite la duración de la residencia",
      "No existe ningún documento específico para acreditar la residencia permanente",
      "Únicamente el pasaporte del país de origen, sin ningún otro trámite",
      "Un documento nacional de identidad español, idéntico al de los ciudadanos españoles",
    ],
    correcta: 0,
    explicacion:
      "El RD 240/2007 prevé que, adquirido el derecho a residir con carácter permanente conforme a su art. 10, se expida al ciudadano de la Unión un documento acreditativo de la residencia permanente que sustituye al certificado de registro ordinario, y a los familiares no comunitarios una tarjeta de residencia permanente conforme al art. 11.",
  },
  {
    id: "cue-30",
    enunciado: "¿Qué régimen sancionador se aplica al ciudadano de la Unión o a su familiar que incumpla la obligación de solicitar el certificado de registro o la tarjeta de residencia?",
    opciones: [
      "El incumplimiento constituye una infracción tipificada, sancionable conforme al régimen previsto en la normativa de extranjería y de régimen sancionador aplicable, sin perjuicio de que el interesado pueda acreditar su situación por cualquier medio de prueba admitido en Derecho",
      "No existe ninguna consecuencia por el incumplimiento de esta obligación",
      "Se sanciona automáticamente con la expulsión inmediata, sin excepción",
      "Solo se sanciona si el incumplimiento se prolonga más de diez años",
    ],
    correcta: 0,
    explicacion:
      "El incumplimiento de la obligación de solicitar el certificado de registro o la tarjeta de residencia constituye una infracción tipificada en la normativa de extranjería, sin perjuicio de que, conforme al art. 14.4 del RD 240/2007, los interesados puedan acreditar su condición de beneficiarios del régimen comunitario por cualquier medio de prueba admitido en Derecho.",
  },
];
