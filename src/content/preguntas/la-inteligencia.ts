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
];
