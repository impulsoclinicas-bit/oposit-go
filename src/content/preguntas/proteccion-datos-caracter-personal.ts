import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "lopd-01",
    enunciado: "¿Qué normas regulan actualmente la protección de datos de carácter personal en España?",
    opciones: [
      "Únicamente la LO 15/1999",
      "El Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)",
      "Solo el RGPD, sin desarrollo interno",
      "El Código Penal exclusivamente",
    ],
    correcta: 1,
    explicacion:
      "La protección de datos en España se rige por el Reglamento (UE) 2016/679 general de protección de datos (RGPD), de aplicación directa, y por la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), que lo completa y desarrolla, derogando la anterior LO 15/1999.",
  },
  {
    id: "lopd-02",
    enunciado: "¿Qué ley regula específicamente el tratamiento de datos personales por las Fuerzas y Cuerpos de Seguridad con fines penales?",
    opciones: [
      "La Ley Orgánica 3/2018 exclusivamente",
      "La Ley Orgánica 7/2021, de protección de datos personales tratados para fines de prevención, detección, investigación y enjuiciamiento de infracciones penales y de ejecución de sanciones penales",
      "El Reglamento (UE) 2016/679",
      "La Ley 39/2015",
    ],
    correcta: 1,
    explicacion:
      "La Ley Orgánica 7/2021, de 26 de mayo, traspone la Directiva (UE) 2016/680 y regula el tratamiento de datos personales por parte de las autoridades competentes, entre ellas las Fuerzas y Cuerpos de Seguridad, con fines de prevención, detección, investigación y enjuiciamiento de infracciones penales.",
  },
  {
    id: "lopd-03",
    enunciado: "Según el RGPD, ¿qué se entiende por \"dato personal\"?",
    opciones: [
      "Únicamente el nombre y apellidos de una persona",
      "Toda información sobre una persona física identificada o identificable",
      "Solo los datos incluidos en registros públicos",
      "Exclusivamente los datos biométricos",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.1 RGPD define \"dato personal\" como toda información sobre una persona física identificada o identificable (el \"interesado\"); se considera identificable toda persona cuya identidad pueda determinarse, directa o indirectamente.",
  },
  {
    id: "lopd-04",
    enunciado: "¿Cuáles son los principios relativos al tratamiento de datos recogidos en el artículo 5 del RGPD?",
    opciones: [
      "Solo el principio de confidencialidad",
      "Licitud, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva",
      "Únicamente el principio de minimización de datos",
      "Solo la limitación de la finalidad y la exactitud",
    ],
    correcta: 1,
    explicacion:
      "El art. 5 RGPD enumera los principios: licitud, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva (accountability) del responsable del tratamiento.",
  },
  {
    id: "lopd-05",
    enunciado: "¿Qué autoridad es competente en España para el control del cumplimiento de la normativa de protección de datos?",
    opciones: [
      "El Ministerio del Interior",
      "La Agencia Española de Protección de Datos (AEPD)",
      "El Consejo General del Poder Judicial",
      "El Defensor del Pueblo",
    ],
    correcta: 1,
    explicacion:
      "La Agencia Española de Protección de Datos (AEPD) es la autoridad administrativa independiente encargada de velar por el cumplimiento de la normativa de protección de datos en España (arts. 44 y siguientes de la LOPDGDD).",
  },
  {
    id: "lopd-06",
    enunciado: "¿Cuáles son los derechos que el RGPD y la LOPDGDD reconocen a las personas respecto de sus datos personales?",
    opciones: [
      "Únicamente el derecho de acceso",
      "Entre otros, los derechos de acceso, rectificación, supresión (\"al olvido\"), limitación del tratamiento, portabilidad y oposición",
      "Solo el derecho al olvido",
      "Solo el derecho de oposición a la publicidad",
    ],
    correcta: 1,
    explicacion:
      "El RGPD (capítulo III) y la LOPDGDD reconocen a los interesados, entre otros, los derechos de acceso, rectificación, supresión (derecho al olvido), limitación del tratamiento, portabilidad de los datos y oposición.",
  },
  {
    id: "lopd-07",
    enunciado: "¿Qué se entiende por consentimiento del interesado a efectos del RGPD?",
    opciones: [
      "Cualquier silencio o inacción del interesado",
      "Toda manifestación de voluntad libre, específica, informada e inequívoca del interesado por la que acepta, mediante una declaración o una clara acción afirmativa, el tratamiento de sus datos",
      "Un consentimiento tácito presumido salvo oposición expresa",
      "El consentimiento otorgado por un tercero en nombre del interesado, sin representación legal",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.11 RGPD define el consentimiento como toda manifestación de voluntad libre, específica, informada e inequívoca por la que el interesado acepta, mediante una declaración o una clara acción afirmativa, el tratamiento de datos personales que le conciernen.",
  },
  {
    id: "lopd-08",
    enunciado: "¿Qué son las categorías especiales de datos personales conforme al artículo 9 del RGPD?",
    opciones: [
      "Los datos relativos al domicilio y teléfono",
      "Datos que revelen el origen étnico o racial, opiniones políticas, convicciones religiosas, afiliación sindical, datos genéticos, biométricos, de salud o relativos a la vida u orientación sexual",
      "Solamente los datos bancarios",
      "Todos los datos personales sin distinción",
    ],
    correcta: 1,
    explicacion:
      "El art. 9 RGPD define las categorías especiales de datos (datos \"sensibles\"): origen étnico o racial, opiniones políticas, convicciones religiosas o filosóficas, afiliación sindical, datos genéticos, datos biométricos dirigidos a identificar de manera unívoca a una persona, datos relativos a la salud, y datos relativos a la vida sexual o la orientación sexual, cuyo tratamiento está sujeto a garantías reforzadas.",
  },
  {
    id: "lopd-09",
    enunciado: "¿Qué es el Delegado de Protección de Datos (DPO)?",
    opciones: [
      "Un cargo político nombrado por el Gobierno",
      "La persona designada por el responsable o encargado del tratamiento para informar y asesorar sobre las obligaciones en materia de protección de datos y supervisar su cumplimiento",
      "El director de la Agencia Española de Protección de Datos",
      "Un funcionario judicial",
    ],
    correcta: 1,
    explicacion:
      "El Delegado de Protección de Datos (arts. 37-39 RGPD) es la persona designada por el responsable o encargado del tratamiento para informar y asesorar sobre las obligaciones que impone la normativa de protección de datos y supervisar su cumplimiento; su designación es obligatoria en determinados supuestos, entre ellos las Administraciones Públicas.",
  },
  {
    id: "lopd-10",
    enunciado: "¿Qué finalidades habilitan el tratamiento de datos personales por las Fuerzas y Cuerpos de Seguridad conforme a la Ley Orgánica 7/2021?",
    opciones: [
      "Cualquier finalidad, sin restricción",
      "Exclusivamente la prevención, detección, investigación y enjuiciamiento de infracciones penales y la ejecución de sanciones penales, incluidas la protección y prevención frente a amenazas para la seguridad pública",
      "Solo fines estadísticos",
      "Únicamente el control del tráfico",
    ],
    correcta: 1,
    explicacion:
      "La LO 7/2021 regula el tratamiento de datos personales por las autoridades competentes exclusivamente para fines de prevención, detección, investigación y enjuiciamiento de infracciones penales o de ejecución de sanciones penales, incluidas la protección y la prevención frente a las amenazas contra la seguridad pública.",
  },
  {
    id: "lopd-11",
    enunciado: "¿Qué régimen sancionador establece el RGPD para las infracciones más graves en materia de protección de datos?",
    opciones: [
      "No prevé sanciones económicas",
      "Multas administrativas de hasta 20.000.000 EUR o, tratándose de una empresa, de una cuantía equivalente al 4% del volumen de negocio total anual, si esta cifra es mayor",
      "Solo apercibimiento, sin multas",
      "Prisión para el responsable del tratamiento en todo caso",
    ],
    correcta: 1,
    explicacion:
      "El art. 83.5 RGPD prevé, para las infracciones más graves, multas administrativas de hasta 20.000.000 EUR o, tratándose de una empresa, de una cuantía equivalente al 4% como máximo del volumen de negocio total anual del ejercicio financiero anterior, si esta cifra fuera mayor.",
  },
  {
    id: "lopd-12",
    enunciado: "¿Qué es una \"violación de la seguridad de los datos personales\" (brecha de seguridad) según el RGPD?",
    opciones: [
      "Cualquier actualización del sistema informático",
      "Toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos",
      "Solo el robo físico de un ordenador",
      "El cambio de contraseña de un usuario",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.12 RGPD define la violación de la seguridad de los datos personales como toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos. El responsable debe notificarla a la autoridad de control en el plazo de 72 horas, salvo que sea improbable que constituya un riesgo para los derechos y libertades de las personas.",
  },
  {
    id: "lopd-13",
    enunciado: "Según el artículo 6 del RGPD, ¿cuáles son, entre otras, las bases jurídicas que legitiman el tratamiento de datos personales?",
    opciones: [
      "El consentimiento del interesado, la necesidad para la ejecución de un contrato, el cumplimiento de una obligación legal, la protección de intereses vitales, el cumplimiento de una misión de interés público y la satisfacción de intereses legítimos del responsable o de un tercero",
      "Únicamente el consentimiento del interesado, sin ninguna otra base posible",
      "Solo la existencia de una orden judicial previa en todo caso",
      "Exclusivamente la obligación legal, con exclusión de cualquier otra base",
    ],
    correcta: 0,
    explicacion:
      "El art. 6.1 RGPD enumera seis bases jurídicas que legitiman el tratamiento de datos personales: el consentimiento del interesado, la necesidad para la ejecución de un contrato, el cumplimiento de una obligación legal aplicable al responsable, la protección de intereses vitales del interesado o de otra persona, el cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos, y la satisfacción de intereses legítimos perseguidos por el responsable o por un tercero.",
  },
  {
    id: "lopd-14",
    enunciado: "¿Qué diferencia existe entre el «responsable del tratamiento» y el «encargado del tratamiento» conforme al RGPD?",
    opciones: [
      "El responsable del tratamiento es quien determina los fines y medios del tratamiento; el encargado del tratamiento es quien trata los datos personales por cuenta del responsable, conforme a sus instrucciones",
      "Son términos completamente sinónimos, sin ninguna diferencia jurídica",
      "El encargado del tratamiento decide siempre los fines del tratamiento, y el responsable se limita a ejecutarlo",
      "El encargado del tratamiento nunca puede ser una persona jurídica distinta del responsable",
    ],
    correcta: 0,
    explicacion:
      "El art. 4.7 RGPD define al responsable del tratamiento como la persona física o jurídica, autoridad pública, servicio u otro organismo que, solo o junto con otros, determina los fines y medios del tratamiento; el art. 4.8 define al encargado del tratamiento como la persona física o jurídica que trata datos personales por cuenta del responsable, conforme a sus instrucciones, típicamente mediante un contrato o acto jurídico que vincule a ambas partes.",
  },
  {
    id: "lopd-15",
    enunciado: "¿A quién debe comunicarse la violación de la seguridad de los datos personales, además de a la autoridad de control, cuando dicha violación entrañe un alto riesgo para los derechos y libertades de las personas?",
    opciones: [
      "Al propio interesado afectado, sin dilación indebida, conforme al artículo 34 RGPD",
      "Únicamente a la Fiscalía General del Estado",
      "Solo a la empresa aseguradora del responsable del tratamiento",
      "A ningún otro sujeto distinto de la autoridad de control",
    ],
    correcta: 0,
    explicacion:
      "El art. 34 RGPD exige que, cuando la violación de la seguridad de los datos personales entrañe un alto riesgo para los derechos y libertades de las personas físicas, el responsable del tratamiento comunique dicha violación al propio interesado afectado sin dilación indebida, además de notificarla a la autoridad de control conforme al art. 33.",
  },
  {
    id: "lopd-16",
    enunciado: "Según el artículo 17 del RGPD, ¿en qué consiste el derecho de supresión (\"derecho al olvido\")?",
    opciones: [
      "El derecho del interesado a obtener del responsable la supresión de sus datos personales cuando concurra alguna de las causas previstas (entre otras, que ya no sean necesarios para los fines para los que fueron recogidos, o que se retire el consentimiento en que se basaba el tratamiento)",
      "El derecho a que se elimine cualquier noticia de prensa desagradable, sin ninguna otra condición",
      "Un derecho absoluto sin excepciones, aplicable siempre y en todo caso",
      "El derecho a que la Administración destruya físicamente todos los archivos en papel de un ciudadano",
    ],
    correcta: 0,
    explicacion:
      "El art. 17 RGPD reconoce el derecho de supresión (\"derecho al olvido\"): el interesado tiene derecho a obtener del responsable del tratamiento la supresión de sus datos personales cuando concurra alguna de las causas previstas (los datos ya no son necesarios, se retira el consentimiento, el tratamiento es ilícito, entre otras), si bien este derecho cede ante determinadas excepciones, como el ejercicio del derecho a la libertad de expresión o el cumplimiento de una obligación legal.",
  },
  {
    id: "lopd-17",
    enunciado: "Según el artículo 20 del RGPD, ¿en qué consiste el derecho a la portabilidad de los datos?",
    opciones: [
      "El derecho del interesado a recibir los datos personales que haya facilitado a un responsable, en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable sin impedimentos",
      "El derecho a llevarse físicamente los servidores de una empresa",
      "Un derecho que solo se aplica a los datos de salud",
      "El derecho a que el responsable elimine automáticamente los datos tras cada consulta",
    ],
    correcta: 0,
    explicacion:
      "El art. 20 RGPD reconoce el derecho a la portabilidad: el interesado tiene derecho a recibir los datos personales que haya facilitado a un responsable del tratamiento, en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable sin que lo impida el responsable al que se los hubiera facilitado inicialmente, cuando el tratamiento se base en el consentimiento o en un contrato y se efectúe por medios automatizados.",
  },
  {
    id: "lopd-18",
    enunciado: "Según el artículo 21 del RGPD, ¿en qué consiste el derecho de oposición?",
    opciones: [
      "El derecho del interesado a oponerse en cualquier momento, por motivos relacionados con su situación particular, al tratamiento de sus datos personales basado en el interés público o el interés legítimo del responsable, incluida la elaboración de perfiles",
      "El derecho a impedir cualquier tratamiento de datos, sin necesidad de justificar motivo alguno",
      "Un derecho que solo puede ejercerse ante notario",
      "El derecho a solicitar la anulación de un contrato ya firmado",
    ],
    correcta: 0,
    explicacion:
      "El art. 21 RGPD reconoce el derecho de oposición: el interesado puede oponerse en cualquier momento, por motivos relacionados con su situación particular, al tratamiento de datos personales que se base en el interés público o en el interés legítimo del responsable, incluida la elaboración de perfiles; frente a la oposición al tratamiento con fines de mercadotecnia directa, el derecho es incondicional.",
  },
  {
    id: "lopd-19",
    enunciado: "Según el artículo 22 del RGPD, ¿qué derecho tiene el interesado frente a las decisiones individuales automatizadas?",
    opciones: [
      "A no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, que produzca efectos jurídicos en él o le afecte significativamente de modo similar, salvo determinadas excepciones",
      "Ninguno, toda decisión automatizada es siempre válida sin posibilidad de impugnación",
      "Solo se aplica a las decisiones adoptadas por entidades bancarias",
      "Solo se aplica cuando la decisión automatizada beneficia al interesado",
    ],
    correcta: 0,
    explicacion:
      "El art. 22 RGPD reconoce el derecho del interesado a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, que produzca efectos jurídicos en él o le afecte significativamente de modo similar, salvo que sea necesaria para la celebración o ejecución de un contrato, esté autorizada por una norma o se base en el consentimiento explícito del interesado, debiendo en esos casos adoptarse medidas para salvaguardar sus derechos.",
  },
  {
    id: "lopd-20",
    enunciado: "Según el artículo 25 del RGPD, ¿qué exige el principio de protección de datos desde el diseño y por defecto?",
    opciones: [
      "Que el responsable del tratamiento aplique medidas técnicas y organizativas apropiadas, tanto en el momento de determinar los medios del tratamiento como en el momento del propio tratamiento, para cumplir los principios de protección de datos, y que por defecto solo se traten los datos necesarios para cada finalidad específica",
      "Que el diseño de una aplicación informática sea estéticamente atractivo",
      "Que todos los datos se traten siempre de forma pública y accesible por defecto",
      "Que solo se apliquen medidas de protección de datos tras detectarse una brecha de seguridad",
    ],
    correcta: 0,
    explicacion:
      "El art. 25 RGPD exige al responsable del tratamiento aplicar medidas técnicas y organizativas apropiadas, tanto al determinar los medios de tratamiento como durante el propio tratamiento, para cumplir eficazmente los principios de protección de datos («privacy by design»); y garantizar que, por defecto, solo se traten los datos personales necesarios para cada finalidad específica del tratamiento («privacy by default»).",
  },
  {
    id: "lopd-21",
    enunciado: "Según el artículo 30 del RGPD, ¿qué es el registro de actividades de tratamiento?",
    opciones: [
      "Un documento, en formato escrito o electrónico, que cada responsable y encargado del tratamiento debe llevar, describiendo entre otros aspectos las finalidades, las categorías de interesados y de datos, y las medidas de seguridad aplicadas",
      "Un registro público accesible a cualquier ciudadano sin restricción",
      "Un trámite exclusivo de las Administraciones Públicas, no aplicable a empresas privadas",
      "Un documento que solo deben llevar las entidades bancarias",
    ],
    correcta: 0,
    explicacion:
      "El art. 30 RGPD obliga a cada responsable y, en su caso, a su representante, a llevar un registro de las actividades de tratamiento efectuadas bajo su responsabilidad, que debe incluir, entre otros datos, las finalidades del tratamiento, la descripción de las categorías de interesados y de datos personales, los destinatarios, las transferencias internacionales y, cuando sea posible, los plazos de supresión y una descripción de las medidas de seguridad.",
  },
  {
    id: "lopd-22",
    enunciado: "Según el artículo 35 del RGPD, ¿cuándo es obligatorio realizar una evaluación de impacto relativa a la protección de datos?",
    opciones: [
      "Nunca es obligatoria, es siempre una decisión voluntaria del responsable",
      "Cuando sea probable que un tipo de tratamiento, en particular si utiliza nuevas tecnologías, entrañe un alto riesgo para los derechos y libertades de las personas físicas",
      "Únicamente cuando lo solicite expresamente el interesado afectado",
      "Solo quiere decir la instalación de un antivirus en los sistemas del responsable",
    ],
    correcta: 1,
    explicacion:
      "El art. 35 RGPD exige realizar una evaluación de impacto relativa a la protección de datos (EIPD) cuando sea probable que un tipo de tratamiento, en particular si utiliza nuevas tecnologías, por su naturaleza, alcance, contexto o fines, entrañe un alto riesgo para los derechos y libertades de las personas físicas, debiendo consultarse a la autoridad de control cuando la evaluación revele un alto riesgo que el responsable no pueda mitigar.",
  },
  {
    id: "lopd-23",
    enunciado: "¿En qué consisten, con carácter general, las transferencias internacionales de datos reguladas en el Capítulo V del RGPD?",
    opciones: [
      "El envío de datos personales a un tercer país u organización internacional fuera del Espacio Económico Europeo, sujeto a garantías reforzadas (decisión de adecuación de la Comisión Europea, cláusulas contractuales tipo, normas corporativas vinculantes, entre otras), para asegurar un nivel de protección equivalente al europeo",
      "Cualquier envío de datos entre dos Estados miembros de la Unión Europea",
      "Un trámite que ya no existe tras la entrada en vigor del RGPD",
      "Solo se aplica a las transferencias realizadas por vía postal, no electrónica",
    ],
    correcta: 0,
    explicacion:
      "El Capítulo V del RGPD regula las transferencias internacionales de datos personales, es decir, su envío a un tercer país u organización internacional fuera del Espacio Económico Europeo, exigiendo que se realicen con garantías que aseguren un nivel de protección equivalente al europeo: mediante una decisión de adecuación de la Comisión Europea, cláusulas contractuales tipo, normas corporativas vinculantes u otras garantías apropiadas.",
  },
  {
    id: "lopd-24",
    enunciado: "Según el artículo 3 del RGPD, ¿se aplica el Reglamento a responsables o encargados no establecidos en la Unión Europea?",
    opciones: [
      "No, el RGPD solo se aplica a entidades establecidas físicamente en territorio de la Unión Europea",
      "Sí, en determinados supuestos, como cuando ofrecen bienes o servicios a interesados que se encuentren en la Unión, o cuando controlan su comportamiento en la medida en que este tenga lugar en la Unión, aplicándose así con un alcance extraterritorial",
      "Solo se aplica a empresas con sede en Estados con los que exista un tratado bilateral específico",
      "El RGPD nunca tiene efectos fuera de la Unión Europea, ni siquiera en estos casos",
    ],
    correcta: 1,
    explicacion:
      "El art. 3 RGPD extiende su ámbito de aplicación territorial más allá de las entidades establecidas en la Unión, alcanzando también a responsables o encargados no establecidos en ella cuando las actividades de tratamiento estén relacionadas con la oferta de bienes o servicios a interesados en la Unión, o con el control de su comportamiento en la medida en que este tenga lugar dentro de la Unión Europea (aplicación extraterritorial del RGPD).",
  },
  {
    id: "lopd-25",
    enunciado: "Según el artículo 5.1.c) del RGPD, ¿qué exige el principio de minimización de datos?",
    opciones: [
      "Que los datos personales sean adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados",
      "Que se recopile la mayor cantidad posible de datos, por si resultan útiles en el futuro",
      "Que los datos se conserven indefinidamente, sin ningún límite temporal",
      "Que los datos personales se publiquen siempre de forma abierta en internet",
    ],
    correcta: 0,
    explicacion:
      "El art. 5.1.c) RGPD recoge el principio de minimización de datos: los datos personales deben ser adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados, evitando la recogida o conservación de datos innecesarios o excesivos.",
  },
  {
    id: "lopd-26",
    enunciado: "Según el artículo 5.2 del RGPD, ¿en qué consiste el principio de responsabilidad proactiva (\"accountability\")?",
    opciones: [
      "En que el responsable del tratamiento debe ser capaz de demostrar el cumplimiento de los principios relativos al tratamiento de datos personales, y no solo cumplirlos formalmente",
      "En que la responsabilidad por cualquier incumplimiento recae siempre exclusivamente en el interesado",
      "En que solo las Administraciones Públicas están sujetas a este principio",
      "En que basta con redactar una política de privacidad, sin necesidad de aplicarla realmente",
    ],
    correcta: 0,
    explicacion:
      "El art. 5.2 RGPD consagra el principio de responsabilidad proactiva («accountability»): el responsable del tratamiento será responsable del cumplimiento de los principios relativos al tratamiento de datos personales (art. 5.1) y, además, debe ser capaz de demostrar dicho cumplimiento ante la autoridad de control, no bastando con su mero respeto formal.",
  },
  {
    id: "lopd-27",
    enunciado: "¿Qué son los «derechos digitales» reconocidos en el Título X de la LOPDGDD (Ley Orgánica 3/2018)?",
    opciones: [
      "Un catálogo de derechos vinculados al entorno digital, como el derecho a la neutralidad de internet, el derecho al olvido en búsquedas de internet, el derecho a la desconexión digital en el ámbito laboral, o el derecho al testamento digital",
      "Un sinónimo exacto de los derechos ARSULIPO (acceso, rectificación, supresión...)",
      "Derechos que solo pueden ejercer las personas jurídicas",
      "Un catálogo cerrado que sustituye por completo a los derechos del RGPD",
    ],
    correcta: 0,
    explicacion:
      "El Título X de la LOPDGDD (Ley Orgánica 3/2018) reconoce un catálogo de «derechos digitales», complementario a los derechos generales de protección de datos, entre ellos el derecho a la neutralidad de internet, el derecho al olvido en búsquedas de internet y en redes sociales, el derecho a la desconexión digital en el ámbito laboral, y el derecho al testamento digital (instrucciones sobre el destino de los contenidos digitales tras el fallecimiento).",
  },
  {
    id: "lopd-28",
    enunciado: "Según la Ley Orgánica 7/2021, ¿durante qué plazo pueden conservarse, con carácter general, los datos personales tratados por las Fuerzas y Cuerpos de Seguridad con fines de prevención, investigación o enjuiciamiento de delitos?",
    opciones: [
      "De forma permanente e ilimitada, sin ninguna revisión",
      "Durante el tiempo necesario para la finalidad del tratamiento, debiendo establecerse plazos para su supresión o para una revisión periódica de la necesidad de su conservación",
      "Un plazo fijo e igual para todos los casos de veinticuatro horas",
      "Solo pueden conservarse mientras dure la instrucción judicial, borrándose automáticamente después",
    ],
    correcta: 1,
    explicacion:
      "La LO 7/2021 exige que los datos personales tratados por las Fuerzas y Cuerpos de Seguridad con fines de prevención, detección, investigación o enjuiciamiento de infracciones penales se conserven únicamente durante el tiempo que sea necesario para los fines del tratamiento, debiendo establecerse plazos apropiados para su supresión o para la revisión periódica de la necesidad de conservarlos.",
  },
  {
    id: "lopd-29",
    enunciado: "Según el artículo 57 del RGPD, ¿cuál es una de las funciones de la Agencia Española de Protección de Datos como autoridad de control?",
    opciones: [
      "Supervisar y hacer cumplir la aplicación del RGPD, promover la sensibilización del público sobre los riesgos del tratamiento de datos, y tramitar las reclamaciones presentadas por los interesados",
      "Aprobar las leyes orgánicas relativas a la protección de datos",
      "Sustituir a los tribunales de justicia en los litigios civiles sobre protección de datos",
      "Fijar los precios de los servicios de almacenamiento en la nube",
    ],
    correcta: 0,
    explicacion:
      "El art. 57 RGPD atribuye a cada autoridad de control (en España, la Agencia Española de Protección de Datos) funciones como supervisar y hacer cumplir la aplicación del Reglamento, promover la sensibilización del público y de los responsables y encargados sobre los riesgos del tratamiento, tramitar las reclamaciones presentadas por los interesados, y realizar investigaciones sobre la aplicación de la normativa.",
  },
  {
    id: "lopd-30",
    enunciado: "¿Cómo clasifica la LOPDGDD las infracciones en materia de protección de datos a efectos de su régimen sancionador y de prescripción?",
    opciones: [
      "En muy graves, graves y leves, con distintos plazos de prescripción según su calificación",
      "Únicamente en graves, sin distinción de niveles",
      "No existe clasificación alguna, todas las infracciones tienen el mismo régimen",
      "Solo se clasifican como delitos penales, nunca como infracciones administrativas",
    ],
    correcta: 0,
    explicacion:
      "La LOPDGDD clasifica las infracciones en materia de protección de datos en muy graves, graves y leves, en función de la naturaleza del derecho o principio afectado, estableciendo distintos plazos de prescripción para cada categoría, en coherencia con el régimen sancionador previsto en el RGPD (cuantías de hasta 20 millones de euros o el 4% del volumen de negocio anual global, en las infracciones más graves).",
  },
];
