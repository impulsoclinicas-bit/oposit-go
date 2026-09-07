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
];
