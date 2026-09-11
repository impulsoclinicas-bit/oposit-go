import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "int-01",
    enunciado: "¿Cómo se define la «inteligencia» en el ámbito de la seguridad?",
    opciones: [
      "El producto resultante de la recogida, evaluación, análisis e interpretación de información, orientado a apoyar la toma de decisiones en materia de seguridad, defensa o persecución del delito",
      "Un sinónimo exacto del cociente intelectual de una persona",
      "Únicamente los datos en bruto recopilados sin ningún tratamiento",
      "Un concepto exclusivamente militar sin aplicación en el ámbito policial",
    ],
    correcta: 0,
    explicacion:
      "En el ámbito de la seguridad, la inteligencia se entiende como el producto resultante de un proceso de recogida, evaluación, análisis e interpretación de información, cuya finalidad es apoyar la toma de decisiones de las autoridades competentes en materia de seguridad, defensa o persecución del delito.",
  },
  {
    id: "int-02",
    enunciado: "¿Cuáles son las fases del denominado «ciclo de inteligencia»?",
    opciones: [
      "Dirección (o planificación), obtención, elaboración (o análisis) y difusión",
      "Únicamente investigación y detención, sin ninguna otra fase",
      "Solo vigilancia y seguimiento, sin fase de análisis",
      "Exclusivamente sanción y ejecución de condenas",
    ],
    correcta: 0,
    explicacion:
      "El ciclo de inteligencia se estructura clásicamente en cuatro fases: la dirección o planificación, en la que se determinan las necesidades de información; la obtención, en la que se recogen los datos a través de las distintas fuentes disponibles; la elaboración o análisis, en la que la información se evalúa, contrasta e interpreta para producir inteligencia; y la difusión, en la que el producto final se traslada a los destinatarios que deben tomar decisiones.",
  },
  {
    id: "int-03",
    enunciado: "¿Qué diferencia existe entre «información» e «inteligencia»?",
    opciones: [
      "La información son datos en bruto, sin procesar; la inteligencia es el producto resultante de someter esa información a un proceso de evaluación, análisis e interpretación que le añade valor para la toma de decisiones",
      "Son términos completamente sinónimos sin ninguna diferencia",
      "La inteligencia siempre precede a la información en el tiempo",
      "La información solo puede obtenerse de fuentes humanas, y la inteligencia de fuentes técnicas",
    ],
    correcta: 0,
    explicacion:
      "La información constituye los datos en bruto, sin procesar, recogidos de las distintas fuentes disponibles; la inteligencia, en cambio, es el producto que resulta de someter esa información a un proceso sistemático de evaluación, análisis, contraste e interpretación, que le añade valor y la hace útil para apoyar la toma de decisiones.",
  },
  {
    id: "int-04",
    enunciado: "¿Qué es el «análisis de inteligencia criminal»?",
    opciones: [
      "El proceso mediante el cual se identifican patrones, tendencias y vínculos entre datos relativos a actividades delictivas, con el fin de apoyar la prevención, investigación y persecución del delito",
      "Un procedimiento judicial de imposición de penas",
      "Un sinónimo exacto de investigación forense de la escena del crimen",
      "Una técnica exclusiva de interrogatorio policial",
    ],
    correcta: 0,
    explicacion:
      "El análisis de inteligencia criminal es el proceso mediante el cual se identifican patrones, tendencias, relaciones y vínculos entre los datos disponibles sobre actividades delictivas —personas, grupos, modus operandi—, con el fin de apoyar la toma de decisiones orientadas a la prevención, la investigación y la persecución del delito.",
  },
  {
    id: "int-05",
    enunciado: "¿Qué se entiende por «fuentes abiertas» (OSINT, Open Source Intelligence) en el proceso de obtención de inteligencia?",
    opciones: [
      "La inteligencia obtenida a partir de información disponible públicamente y de acceso lícito, como medios de comunicación, redes sociales, registros públicos o publicaciones académicas",
      "Información obtenida exclusivamente mediante intervención de comunicaciones",
      "Un sinónimo de información clasificada de acceso restringido",
      "Datos obtenidos únicamente mediante infiltración de agentes encubiertos",
    ],
    correcta: 0,
    explicacion:
      "Las fuentes abiertas u OSINT (Open Source Intelligence) hacen referencia a la inteligencia obtenida a partir de información disponible públicamente y de acceso lícito, como medios de comunicación, redes sociales, registros públicos, informes oficiales o publicaciones académicas, sin necesidad de recurrir a medios de obtención reservados o encubiertos.",
  },
  {
    id: "int-06",
    enunciado: "¿Qué es el Centro Nacional de Inteligencia (CNI) en España?",
    opciones: [
      "El organismo público español encargado de facilitar al Presidente del Gobierno y al Gobierno las informaciones, análisis, estudios o propuestas necesarios para prevenir y evitar riesgos o amenazas para la seguridad, defensa e intereses de España",
      "Un cuerpo policial ordinario dependiente del Ministerio del Interior",
      "Un tribunal especializado en delitos de terrorismo",
      "Una organización internacional dependiente de la Unión Europea",
    ],
    correcta: 0,
    explicacion:
      "El Centro Nacional de Inteligencia (CNI), regulado por la Ley 11/2002, es el organismo público español, adscrito al Ministerio de la Presidencia, encargado de facilitar al Presidente del Gobierno y al Gobierno las informaciones, análisis, estudios o propuestas que permitan prevenir y evitar cualquier riesgo o amenaza que afecte a la seguridad, la defensa o los intereses de España.",
  },
  {
    id: "int-07",
    enunciado: "¿Qué es la «contrainteligencia»?",
    opciones: [
      "El conjunto de actividades orientadas a detectar, prevenir y neutralizar las actividades de inteligencia (espionaje, sabotaje, infiltración) que otros actores puedan dirigir contra los propios intereses",
      "Un sinónimo exacto de inteligencia ofensiva contra otro Estado",
      "Una técnica de interrogatorio judicial",
      "Un procedimiento de análisis estadístico sin relación con la seguridad",
    ],
    correcta: 0,
    explicacion:
      "La contrainteligencia es el conjunto de actividades orientadas a detectar, prevenir y neutralizar las actividades de inteligencia —espionaje, sabotaje, infiltración— que servicios extranjeros u otros actores hostiles puedan dirigir contra los propios intereses de seguridad, defensa o instituciones de un Estado.",
  },
  {
    id: "int-08",
    enunciado: "¿Qué papel desempeña la inteligencia en la estrategia de seguridad frente al terrorismo y el crimen organizado?",
    opciones: [
      "Permite anticipar amenazas, identificar redes y estructuras criminales, y orientar la actuación operativa de las Fuerzas y Cuerpos de Seguridad, actuando como herramienta preventiva complementaria a la investigación reactiva tras la comisión de un delito",
      "No tiene ninguna aplicación práctica frente al terrorismo o el crimen organizado",
      "Su función se limita exclusivamente a la fase posterior a la detención de los responsables",
      "Sustituye por completo a la investigación judicial en los procesos penales",
    ],
    correcta: 0,
    explicacion:
      "La inteligencia desempeña un papel preventivo fundamental frente al terrorismo y el crimen organizado, al permitir anticipar amenazas, identificar redes y estructuras criminales, y orientar la actuación operativa de las Fuerzas y Cuerpos de Seguridad, complementando así a la investigación reactiva que se desarrolla tras la comisión de un delito concreto.",
  },
  {
    id: "int-09",
    enunciado: "¿Qué niveles suele distinguir la doctrina de inteligencia según su alcance temporal y su destinatario?",
    opciones: [
      "Inteligencia estratégica (orientada a decisiones de largo alcance y a los más altos niveles de decisión), inteligencia operativa (referida a operaciones concretas) e inteligencia táctica (de apoyo inmediato a la actuación sobre el terreno)",
      "Únicamente inteligencia civil e inteligencia militar, sin ninguna otra distinción",
      "Solo inteligencia nacional e inteligencia internacional",
      "Exclusivamente inteligencia pasada y futura",
    ],
    correcta: 0,
    explicacion:
      "La doctrina distingue habitualmente entre inteligencia estratégica, orientada a apoyar decisiones de largo alcance en los niveles más altos de dirección política o de seguridad; inteligencia operativa, referida a la planificación y desarrollo de operaciones concretas; e inteligencia táctica, de apoyo inmediato a la actuación sobre el terreno, con un horizonte temporal mucho más corto.",
  },
  {
    id: "int-10",
    enunciado: "¿Qué es el control judicial previo de las actividades del Centro Nacional de Inteligencia, establecido en España por la Ley Orgánica 2/2002?",
    opciones: [
      "Un mecanismo por el cual determinadas actividades del CNI que puedan afectar a la inviolabilidad del domicilio o al secreto de las comunicaciones requieren la autorización previa de un magistrado del Tribunal Supremo especialmente designado a tal efecto",
      "Un procedimiento por el cual cualquier ciudadano puede solicitar acceso libre a los archivos del CNI",
      "Un control ejercido exclusivamente por el Congreso de los Diputados, sin ninguna intervención judicial",
      "Un mecanismo que elimina cualquier necesidad de autorización para las actividades del CNI",
    ],
    correcta: 0,
    explicacion:
      "La Ley Orgánica 2/2002, reguladora del control judicial previo del Centro Nacional de Inteligencia, establece que determinadas actividades del CNI que puedan afectar a la inviolabilidad del domicilio o al secreto de las comunicaciones requieren la autorización previa de un magistrado del Tribunal Supremo especialmente designado para esta función, como garantía adicional de control sobre este tipo de actuaciones.",
  },
  {
    id: "int-11",
    enunciado: "¿Qué es el CITCO (Centro de Inteligencia contra el Terrorismo y el Crimen Organizado) en España?",
    opciones: [
      "El órgano, dependiente de la Secretaría de Estado de Seguridad del Ministerio del Interior, que centraliza y coordina la información e inteligencia de las Fuerzas y Cuerpos de Seguridad en materia de terrorismo y crimen organizado",
      "Un tribunal especializado en el enjuiciamiento de delitos de terrorismo",
      "Un organismo dependiente exclusivamente de la Unión Europea, sin presencia en España",
      "Un cuerpo policial independiente de la Policía Nacional y la Guardia Civil",
    ],
    correcta: 0,
    explicacion:
      "El CITCO, dependiente de la Secretaría de Estado de Seguridad del Ministerio del Interior, es el órgano encargado de centralizar y coordinar la información e inteligencia de las distintas Fuerzas y Cuerpos de Seguridad del Estado en materia de terrorismo y crimen organizado, facilitando el análisis conjunto y la coordinación operativa entre los distintos cuerpos y unidades implicados.",
  },
  {
    id: "int-12",
    enunciado: "¿Qué son las siglas SIGINT e IMINT como disciplinas de obtención de inteligencia?",
    opciones: [
      "SIGINT (Signals Intelligence) es la inteligencia obtenida de la interceptación de señales y comunicaciones; IMINT (Imagery Intelligence) es la obtenida a partir del análisis de imágenes, como las procedentes de satélites o de sistemas aéreos",
      "Ambas son sinónimos exactos de HUMINT",
      "SIGINT se refiere exclusivamente a inteligencia obtenida de fuentes humanas",
      "IMINT es la inteligencia obtenida exclusivamente de fuentes abiertas de internet",
    ],
    correcta: 0,
    explicacion:
      "SIGINT (Signals Intelligence) es la disciplina de obtención de inteligencia basada en la interceptación de señales y comunicaciones (electrónicas, de radio, etc.), mientras que IMINT (Imagery Intelligence) es la que se obtiene a partir del análisis de imágenes, procedentes por ejemplo de satélites, aeronaves o sistemas aéreos no tripulados, complementando a otras disciplinas como el HUMINT (fuentes humanas) o el OSINT (fuentes abiertas).",
  },
  {
    id: "int-13",
    enunciado: "¿Qué es el «sesgo de confirmación» y por qué constituye un riesgo relevante en el análisis de inteligencia?",
    opciones: [
      "La tendencia a buscar, interpretar o recordar la información de forma que confirme las hipótesis o creencias previas del analista, lo que puede distorsionar el análisis e ignorar indicios contrarios a la hipótesis inicial",
      "Un método recomendado para verificar la fiabilidad de una fuente de información",
      "Un sinónimo de contrainteligencia",
      "Un fenómeno que solo afecta a las fuentes humanas, nunca al análisis de datos técnicos",
    ],
    correcta: 0,
    explicacion:
      "El sesgo de confirmación es la tendencia psicológica a buscar, interpretar o dar mayor peso a la información que confirma las hipótesis o creencias previas del analista, mientras se minimiza o ignora la información que las contradice; constituye uno de los riesgos metodológicos más relevantes en el análisis de inteligencia, pudiendo llevar a conclusiones erróneas si no se somete el proceso analítico a técnicas de contraste y revisión crítica.",
  },
  {
    id: "int-14",
    enunciado: "¿Qué es el «secreto oficial», regulado en España por la Ley de Secretos Oficiales?",
    opciones: [
      "La calificación que se otorga a determinadas materias, documentos o informaciones cuyo conocimiento por personas no autorizadas podría dañar o poner en riesgo la seguridad y los intereses del Estado, sometiéndolas a un régimen especial de protección y acceso restringido",
      "Un sinónimo de dato personal protegido por la normativa de protección de datos",
      "Un régimen aplicable únicamente a las comunicaciones diplomáticas",
      "Una calificación que impide cualquier control judicial o parlamentario sobre la actividad del Estado",
    ],
    correcta: 0,
    explicacion:
      "El secreto oficial, regulado en España por la Ley 9/1968, de Secretos Oficiales, es la calificación que se otorga a determinadas materias, documentos o informaciones cuyo conocimiento por personas no autorizadas podría dañar o poner en riesgo la seguridad y los intereses esenciales del Estado, sometiéndolas a un régimen especial de clasificación, custodia y acceso restringido, sin perjuicio de los mecanismos de control judicial y parlamentario existentes.",
  },
  {
    id: "int-15",
    enunciado: "¿Qué diferencia existe entre las «fuentes cerradas» y las «fuentes abiertas» en la obtención de inteligencia?",
    opciones: [
      "Las fuentes abiertas son de acceso público y lícito para cualquier persona; las fuentes cerradas requieren medios de obtención reservados, técnicos o encubiertos, y su acceso está limitado a los servicios autorizados para ello",
      "Son términos sinónimos sin ninguna diferencia relevante",
      "Las fuentes cerradas son siempre menos fiables que las fuentes abiertas",
      "Las fuentes abiertas solo existen desde la aparición de internet",
    ],
    correcta: 0,
    explicacion:
      "Las fuentes abiertas son aquellas de acceso público y lícito para cualquier persona (medios de comunicación, registros públicos, redes sociales), mientras que las fuentes cerradas requieren medios de obtención reservados, técnicos o encubiertos —interceptación de comunicaciones, fuentes humanas infiltradas, vigilancia técnica—, cuyo acceso está legalmente limitado a los servicios y órganos específicamente autorizados para emplearlos, con las garantías y controles correspondientes.",
  },
  {
    id: "int-16",
    enunciado: "¿Qué es el HUMINT (Human Intelligence) como disciplina de obtención de inteligencia?",
    opciones: [
      "La inteligencia obtenida a través de fuentes humanas (informadores, agentes infiltrados, entrevistas, interrogatorios), a diferencia de otras disciplinas basadas en medios técnicos como las señales o las imágenes",
      "Un sinónimo exacto del OSINT o inteligencia de fuentes abiertas",
      "La inteligencia obtenida exclusivamente mediante satélites",
      "Una disciplina que ha sido completamente sustituida por la inteligencia artificial",
    ],
    correcta: 0,
    explicacion:
      "El HUMINT (Human Intelligence) es la disciplina de obtención de inteligencia basada en fuentes humanas (informadores, agentes infiltrados, entrevistas, interrogatorios, contactos de confianza), complementando a otras disciplinas basadas en medios técnicos como el SIGINT (señales) o el IMINT (imágenes), y conservando un valor especialmente relevante para acceder a información e intenciones que difícilmente se obtienen por otros medios.",
  },
  {
    id: "int-17",
    enunciado: "¿Qué diferencia existe entre el contraterrorismo y la contrainteligencia?",
    opciones: [
      "El contraterrorismo agrupa el conjunto de medidas dirigidas específicamente a prevenir y combatir las actividades terroristas; la contrainteligencia, de alcance más amplio, se dirige a detectar y neutralizar las actividades de inteligencia (espionaje, sabotaje, entre otras) de servicios extranjeros u organizaciones hostiles contra los propios intereses",
      "Son términos exactamente sinónimos, sin ninguna diferencia relevante",
      "La contrainteligencia solo se ocupa de amenazas terroristas, nunca de otro tipo de amenazas",
      "El contraterrorismo es una disciplina exclusivamente militar, sin ninguna vertiente policial",
    ],
    correcta: 0,
    explicacion:
      "El contraterrorismo agrupa el conjunto de medidas (de inteligencia, policiales, judiciales, preventivas) dirigidas específicamente a prevenir y combatir las actividades terroristas; la contrainteligencia, de alcance más amplio, se dirige a detectar y neutralizar las actividades de inteligencia (espionaje, sabotaje, injerencia, entre otras) desarrolladas por servicios de inteligencia extranjeros u organizaciones hostiles contra los propios intereses nacionales, pudiendo el terrorismo ser, en determinados casos, uno de los objetos de atención de la contrainteligencia.",
  },
  {
    id: "int-18",
    enunciado: "¿Qué es el análisis de vínculos o de redes sociales (link analysis) como técnica de análisis de inteligencia criminal?",
    opciones: [
      "Una técnica que representa gráficamente las relaciones y conexiones entre personas, organizaciones, cuentas, teléfonos u otros elementos relevantes de una investigación, con el fin de identificar patrones, jerarquías o nodos clave dentro de una estructura delictiva",
      "Un sinónimo exacto del análisis de las publicaciones en redes sociales de internet exclusivamente",
      "Una técnica exclusivamente aplicable a la investigación de delitos económicos",
      "Un método para predecir con total certeza la comisión futura de un delito concreto",
    ],
    correcta: 0,
    explicacion:
      "El análisis de vínculos o de redes (link analysis) es una técnica de análisis de inteligencia criminal que representa gráficamente las relaciones y conexiones entre personas, organizaciones, cuentas, números de teléfono u otros elementos relevantes de una investigación, con el fin de identificar patrones, jerarquías dentro de una organización criminal, o los nodos o elementos más relevantes de dicha estructura sobre los que centrar los esfuerzos de investigación.",
  },
  {
    id: "int-19",
    enunciado: "¿Qué es el Centro Nacional de Coordinación Antiterrorista (CNCA) en España?",
    opciones: [
      "El órgano, integrado en la Secretaría de Estado de Seguridad, encargado de analizar y valorar de forma conjunta la información e inteligencia disponible sobre terrorismo, elaborando evaluaciones de la amenaza y fijando el nivel de alerta antiterrorista vigente en España",
      "Un tribunal especializado en el enjuiciamiento de delitos de terrorismo",
      "Un organismo internacional dependiente de la Unión Europea",
      "Un sinónimo exacto del CITCO",
    ],
    correcta: 0,
    explicacion:
      "El Centro Nacional de Coordinación Antiterrorista (CNCA), integrado en la Secretaría de Estado de Seguridad, es el órgano encargado de analizar y valorar de forma conjunta la información e inteligencia disponible sobre terrorismo procedente de los distintos organismos con responsabilidades en la materia, elaborando evaluaciones de la amenaza terrorista y fijando el nivel de alerta antiterrorista vigente en España en cada momento.",
  },
  {
    id: "int-20",
    enunciado: "¿Qué es la Comisión que ejerce el control parlamentario de los créditos destinados a gastos reservados de los servicios de inteligencia en España?",
    opciones: [
      "Una comisión específica del Congreso de los Diputados que conoce, con las garantías de reserva y confidencialidad propias de la materia, de los objetivos generales, la actividad y el presupuesto en gastos reservados del Centro Nacional de Inteligencia",
      "Un órgano exclusivamente judicial, sin ninguna intervención parlamentaria",
      "Un órgano internacional dependiente de la Unión Europea",
      "Un sinónimo exacto de la Comisión Interministerial de Asilo y Refugio",
    ],
    correcta: 0,
    explicacion:
      "El control parlamentario de la actividad del Centro Nacional de Inteligencia se articula, entre otros mecanismos, a través de una comisión específica del Congreso de los Diputados (la Comisión que controla los créditos destinados a gastos reservados), que conoce, con las garantías de reserva y confidencialidad propias de la materia, de los objetivos generales, la actividad y el presupuesto en gastos reservados del CNI, complementando el control judicial previo ya analizado.",
  },
  {
    id: "int-21",
    enunciado: "¿Qué características debe reunir, con carácter general, un buen producto o informe de inteligencia?",
    opciones: [
      "Debe ser oportuno (entregado a tiempo para su utilidad), relevante para quien debe tomar decisiones, objetivo y basado en fuentes contrastadas, y claro en su exposición, distinguiendo con precisión los hechos constatados de las valoraciones o hipótesis del analista",
      "Debe limitarse a reproducir literalmente toda la información en bruto recopilada, sin ningún análisis ni valoración añadida",
      "Debe ser siempre de una extensión mínima de cien páginas, sin excepción",
      "Su única finalidad es archivar información, sin ninguna utilidad para la toma de decisiones",
    ],
    correcta: 0,
    explicacion:
      "Un buen producto o informe de inteligencia debe ser oportuno (entregado a tiempo para resultar útil a quien debe decidir), relevante para las necesidades concretas del destinatario, objetivo y basado en fuentes debidamente contrastadas y valoradas, y claro en su exposición, distinguiendo con precisión los hechos constatados de las valoraciones, hipótesis o juicios del propio analista, para evitar confusiones en la toma de decisiones.",
  },
  {
    id: "int-22",
    enunciado: "¿Qué diferencia existe entre la inteligencia policial y la inteligencia de Estado?",
    opciones: [
      "La inteligencia policial se orienta principalmente a la prevención e investigación de delitos concretos, apoyando la actividad operativa de las Fuerzas y Cuerpos de Seguridad; la inteligencia de Estado, propia de servicios como el CNI, tiene un alcance más amplio, orientado a la protección de los intereses generales de seguridad y defensa nacional frente a amenazas de muy diversa naturaleza",
      "Son términos exactamente sinónimos, sin ninguna diferencia relevante",
      "La inteligencia de Estado solo puede referirse a información pública, nunca reservada",
      "La inteligencia policial nunca puede compartirse con los servicios de inteligencia de Estado",
    ],
    correcta: 0,
    explicacion:
      "La inteligencia policial se orienta principalmente a la prevención e investigación de delitos concretos, apoyando la actividad operativa de las Fuerzas y Cuerpos de Seguridad (por ejemplo, en la lucha contra el crimen organizado); la inteligencia de Estado, propia de servicios como el Centro Nacional de Inteligencia, tiene un alcance más amplio, orientado a la protección de los intereses generales de seguridad y defensa nacional frente a amenazas de muy diversa naturaleza (militares, terroristas, de injerencia extranjera, entre otras), existiendo mecanismos de coordinación y colaboración entre ambos ámbitos.",
  },
  {
    id: "int-23",
    enunciado: "¿Qué son los «requerimientos de información» (RI) dentro del ciclo de inteligencia?",
    opciones: [
      "Las necesidades concretas de información que se identifican en la fase de dirección o planificación del ciclo de inteligencia, y que orientan las actividades posteriores de obtención de datos para satisfacerlas",
      "Un sinónimo exacto del producto final de inteligencia ya elaborado",
      "Las solicitudes de acceso a la información pública que puede presentar cualquier ciudadano",
      "Un trámite exclusivamente judicial, sin relación con el ciclo de inteligencia",
    ],
    correcta: 0,
    explicacion:
      "Los «requerimientos de información» (RI) son las necesidades concretas de información que se identifican en la fase de dirección o planificación del ciclo de inteligencia, formuladas habitualmente a partir de las prioridades marcadas por quienes deben tomar decisiones, y que orientan las actividades posteriores de obtención de datos (mediante las distintas disciplinas: HUMINT, SIGINT, OSINT, entre otras) para satisfacer dichas necesidades.",
  },
  {
    id: "int-24",
    enunciado: "¿Qué es la «contravigilancia» en el contexto de las técnicas de inteligencia y seguridad?",
    opciones: [
      "El conjunto de técnicas empleadas para detectar si una persona, un vehículo o unas instalaciones están siendo objeto de vigilancia por parte de un tercero, con el fin de identificarla y, en su caso, neutralizarla o evitarla",
      "Un sinónimo exacto de la videovigilancia instalada en la vía pública",
      "Una técnica exclusivamente empleada por delincuentes, nunca por servicios de seguridad legítimos",
      "Un procedimiento judicial para autorizar una intervención telefónica",
    ],
    correcta: 0,
    explicacion:
      "La «contravigilancia» es el conjunto de técnicas empleadas para detectar si una persona, un vehículo o unas instalaciones están siendo objeto de vigilancia por parte de un tercero, con el fin de identificar dicha vigilancia y, en su caso, evitarla o neutralizarla, siendo una habilidad relevante tanto para agentes que realizan labores encubiertas como, en sentido inverso, para quienes deben proteger a personas o instalaciones sensibles frente a posibles observadores hostiles.",
  },
  {
    id: "int-25",
    enunciado: "¿Qué es el SEPBLAC en el ámbito de la inteligencia financiera?",
    opciones: [
      "El Servicio Ejecutivo de la Comisión de Prevención del Blanqueo de Capitales e Infracciones Monetarias, órgano español encargado de la prevención y el análisis del blanqueo de capitales y la financiación del terrorismo, que recibe y analiza las comunicaciones de operaciones sospechosas remitidas por los sujetos obligados",
      "Un organismo internacional dependiente de Naciones Unidas",
      "Un banco público encargado de conceder préstamos a pequeñas y medianas empresas",
      "Un sinónimo exacto del CNI",
    ],
    correcta: 0,
    explicacion:
      "El SEPBLAC (Servicio Ejecutivo de la Comisión de Prevención del Blanqueo de Capitales e Infracciones Monetarias) es el órgano español encargado de la prevención y el análisis del blanqueo de capitales y la financiación del terrorismo, recibiendo y analizando las comunicaciones de operaciones sospechosas remitidas por los sujetos obligados (entidades financieras y otros profesionales), constituyendo la Unidad de Inteligencia Financiera española dentro del marco internacional de cooperación en esta materia.",
  },
  {
    id: "int-26",
    enunciado: "¿Qué es el GEOINT (Geospatial Intelligence) como disciplina de obtención de inteligencia?",
    opciones: [
      "La inteligencia obtenida mediante el análisis de imágenes y datos con referencia geográfica (satelitales, aéreas, cartográficas), integrando información visual y geoespacial para el análisis de un territorio, unas instalaciones o unos movimientos concretos",
      "Un sinónimo exacto del HUMINT",
      "Una disciplina exclusivamente centrada en la interceptación de comunicaciones telefónicas",
      "Un tipo de software de ofimática empleado por los analistas de inteligencia",
    ],
    correcta: 0,
    explicacion:
      "El GEOINT (Geospatial Intelligence) es la disciplina de obtención de inteligencia basada en el análisis de imágenes y datos con referencia geográfica (satelitales, aéreas, cartográficas, entre otras), integrando información visual y geoespacial para el análisis de un territorio, unas instalaciones o unos movimientos concretos, relacionada con el IMINT pero de alcance más amplio al incorporar el componente específicamente geográfico del análisis.",
  },
  {
    id: "int-27",
    enunciado: "¿Qué son los «centros de fusión» de inteligencia (fusion centers)?",
    opciones: [
      "Estructuras de coordinación que integran y comparten información e inteligencia procedente de distintos organismos (policiales, de inteligencia, de otras Administraciones), con el fin de obtener una visión conjunta y más completa de una amenaza o fenómeno concreto",
      "Centros exclusivamente dedicados a la fusión de datos meteorológicos",
      "Un sinónimo exacto de las Oficinas de Asistencia a las Víctimas",
      "Un tipo de central nuclear de generación de energía",
    ],
    correcta: 0,
    explicacion:
      "Los «centros de fusión» de inteligencia (fusion centers) son estructuras de coordinación que integran y comparten información e inteligencia procedente de distintos organismos (policiales, de inteligencia, de otras Administraciones e, incluso, del sector privado en determinados casos), con el fin de obtener una visión conjunta, más completa y actualizada de una amenaza o fenómeno concreto (como el terrorismo o el crimen organizado), superando los problemas derivados de la fragmentación de la información entre organismos que no se comunican entre sí.",
  },
  {
    id: "int-28",
    enunciado: "¿Qué finalidad tienen los sistemas de calificación de fuentes e informaciones empleados en el análisis de inteligencia (como la escala de fiabilidad de la fuente y credibilidad de la información)?",
    opciones: [
      "Evaluar de forma sistemática y separada la fiabilidad de la fuente que proporciona una información y la credibilidad o verosimilitud de la propia información en sí misma, para que el analista pueda ponderar adecuadamente su valor dentro del conjunto del análisis",
      "Determinar exclusivamente el precio que debe pagarse a un informador por su colaboración",
      "Clasificar el nivel de seguridad físico de las instalaciones de un servicio de inteligencia",
      "Un trámite meramente administrativo sin ninguna utilidad para el análisis",
    ],
    correcta: 0,
    explicacion:
      "Los sistemas de calificación de fuentes e informaciones (como el habitual empleo de una escala alfabética para la fiabilidad de la fuente, de A a F, combinada con una escala numérica para la credibilidad de la información, del 1 al 6) tienen por finalidad evaluar de forma sistemática y separada ambos aspectos, para que el analista pueda ponderar adecuadamente el valor de cada dato dentro del conjunto del análisis, evitando tratar por igual informaciones de muy distinta solidez.",
  },
  {
    id: "int-29",
    enunciado: "¿Qué es el principio de «necesidad de conocer» (need to know) en la gestión de la información clasificada?",
    opciones: [
      "El principio según el cual el acceso a una información clasificada debe limitarse a las personas que, además de contar con la habilitación de seguridad correspondiente, necesiten efectivamente conocerla para el desempeño de sus funciones concretas, evitando su difusión más allá de lo estrictamente necesario",
      "El principio según el cual toda la información clasificada debe ser accesible a cualquier funcionario público, sin ninguna restricción",
      "Un sinónimo exacto del derecho de acceso a la información pública regulado en la Ley 19/2013",
      "Un principio que exige la publicación íntegra de toda la información clasificada tras un plazo de cinco años",
    ],
    correcta: 0,
    explicacion:
      "El principio de «necesidad de conocer» (need to know) exige que el acceso a una información clasificada se limite a las personas que, además de contar con la habilitación de seguridad correspondiente a su nivel de clasificación, necesiten efectivamente conocerla para el desempeño de sus funciones concretas, evitando su difusión más allá de lo estrictamente necesario y reduciendo así el riesgo de filtración o compromiso de la información.",
  },
  {
    id: "int-30",
    enunciado: "¿Qué diferencia existe entre el espionaje como delito y las actividades legítimas de un servicio de inteligencia de un Estado democrático?",
    opciones: [
      "Las actividades legítimas de inteligencia se desarrollan dentro de un marco jurídico que las habilita y las somete a control (parlamentario, judicial), al servicio de los intereses generales de seguridad del propio Estado; el espionaje como delito consiste en la obtención o revelación no autorizada de información reservada en beneficio de una potencia extranjera o en perjuicio de la seguridad nacional propia, al margen de dicho marco de control y legalidad",
      "Son términos exactamente sinónimos, sin ninguna diferencia jurídica relevante",
      "El espionaje solo puede cometerse por ciudadanos extranjeros, nunca por nacionales del propio país",
      "Las actividades de inteligencia de un servicio estatal nunca están sujetas a ningún control externo",
    ],
    correcta: 0,
    explicacion:
      "Las actividades legítimas de un servicio de inteligencia de un Estado democrático (como el CNI en España) se desarrollan dentro de un marco jurídico que las habilita expresamente y las somete a mecanismos de control parlamentario y judicial, al servicio de los intereses generales de seguridad y defensa del propio Estado; el espionaje como delito, tipificado en el Código Penal, consiste en la obtención o revelación no autorizada de información reservada en beneficio de una potencia extranjera o en grave perjuicio de la seguridad nacional propia, actuando al margen de ese marco legal y de control.",
  },
];
