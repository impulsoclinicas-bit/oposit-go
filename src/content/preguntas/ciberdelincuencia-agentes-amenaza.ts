import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "cda-01",
    enunciado: "¿Cómo se define la ciberdelincuencia?",
    opciones: [
      "El conjunto de conductas delictivas que se cometen utilizando sistemas informáticos o redes de comunicación como instrumento, o que tienen a dichos sistemas o a la información que contienen como objeto del ataque",
      "Únicamente los delitos cometidos exclusivamente sin ningún medio tecnológico",
      "Un sinónimo exacto de piratería de productos audiovisuales",
      "Un concepto limitado exclusivamente a los delitos económicos tradicionales",
    ],
    correcta: 0,
    explicacion:
      "La ciberdelincuencia comprende el conjunto de conductas delictivas que se cometen utilizando sistemas informáticos o redes de comunicación como instrumento para su comisión, o que tienen a dichos sistemas, a las redes o a la información que contienen como objeto directo del ataque.",
  },
  {
    id: "cda-02",
    enunciado: "¿Qué es el «phishing»?",
    opciones: [
      "Una técnica de ingeniería social que consiste en suplantar la identidad de una entidad legítima (banco, empresa, organismo público) para engañar a la víctima y obtener de ella datos personales, credenciales o información financiera",
      "Un tipo de virus que daña físicamente el hardware del equipo",
      "Un método legal de verificación de identidad bancaria",
      "Un protocolo de cifrado de comunicaciones",
    ],
    correcta: 0,
    explicacion:
      "El phishing es una técnica de ingeniería social mediante la cual el atacante suplanta la identidad de una entidad legítima —típicamente un banco, una empresa o un organismo público— habitualmente a través de correos electrónicos, mensajes o páginas web fraudulentas, con el fin de engañar a la víctima para que revele datos personales, credenciales de acceso o información financiera.",
  },
  {
    id: "cda-03",
    enunciado: "¿Qué es un «ransomware»?",
    opciones: [
      "Un tipo de software malicioso que cifra los archivos o bloquea el acceso a un sistema, exigiendo el pago de un rescate a la víctima para restaurar el acceso",
      "Un programa antivirus especializado en la detección de troyanos",
      "Un protocolo legítimo de copias de seguridad automatizadas",
      "Un tipo de red privada virtual (VPN)",
    ],
    correcta: 0,
    explicacion:
      "El ransomware es un tipo de software malicioso (malware) que cifra los archivos de un sistema o bloquea el acceso a él, exigiendo a la víctima el pago de un rescate económico, habitualmente en criptomonedas, a cambio de restaurar el acceso a la información o a los sistemas afectados.",
  },
  {
    id: "cda-04",
    enunciado: "¿Qué es la «ingeniería social» en el contexto de la ciberseguridad?",
    opciones: [
      "Un conjunto de técnicas de manipulación psicológica dirigidas a engañar a las personas para que revelen información confidencial o realicen acciones que comprometan la seguridad de un sistema",
      "Una disciplina académica sin ninguna aplicación práctica en seguridad informática",
      "Un tipo de arquitectura de redes informáticas",
      "Un sinónimo exacto de programación informática",
    ],
    correcta: 0,
    explicacion:
      "La ingeniería social es el conjunto de técnicas de manipulación psicológica —engaño, suplantación, presión, generación de urgencia o confianza— dirigidas a inducir a las personas a revelar información confidencial, facilitar credenciales de acceso o realizar acciones que comprometan la seguridad de un sistema, explotando el factor humano en lugar de vulnerabilidades técnicas.",
  },
  {
    id: "cda-05",
    enunciado: "¿Qué tipo de agente de amenaza se conoce como «hacktivista»?",
    opciones: [
      "Un actor que utiliza técnicas de intrusión o ataque informático con una motivación ideológica, política o social, y no fundamentalmente económica",
      "Un profesional de la ciberseguridad que trabaja exclusivamente para el sector público",
      "Un tipo de virus informático diseñado para propagarse por redes sociales",
      "Un sinónimo exacto de ciberterrorista",
    ],
    correcta: 0,
    explicacion:
      "El hacktivista es un agente de amenaza que emplea técnicas de intrusión, ataque informático o filtración de información con una motivación fundamentalmente ideológica, política o social —por ejemplo, para denunciar una causa o protestar contra una organización—, a diferencia de otros actores cuya motivación principal es el beneficio económico.",
  },
  {
    id: "cda-06",
    enunciado: "¿Qué caracteriza a las «APT» (Advanced Persistent Threats o amenazas persistentes avanzadas)?",
    opciones: [
      "Son ataques informáticos sofisticados, dirigidos y sostenidos en el tiempo, habitualmente atribuidos a actores estatales o grupos con recursos avanzados, orientados a la infiltración prolongada de un objetivo específico sin ser detectados",
      "Son virus informáticos genéricos de propagación masiva y sin objetivo específico",
      "Son ataques que se limitan a interrumpir un servicio durante unos minutos",
      "Son técnicas exclusivamente empleadas por particulares sin recursos técnicos avanzados",
    ],
    correcta: 0,
    explicacion:
      "Las amenazas persistentes avanzadas (APT, Advanced Persistent Threats) son ataques informáticos sofisticados, dirigidos a un objetivo específico y sostenidos en el tiempo, habitualmente atribuidos a actores estatales o a grupos organizados con recursos técnicos avanzados, cuyo objetivo es lograr una infiltración prolongada en los sistemas de la víctima, procurando pasar desapercibidos el mayor tiempo posible.",
  },
  {
    id: "cda-07",
    enunciado: "¿Qué es un ataque de «denegación de servicio distribuido» (DDoS)?",
    opciones: [
      "Un ataque que satura un sistema, servidor o red con un volumen masivo de tráfico procedente de múltiples fuentes simultáneas, con el fin de impedir su funcionamiento normal o dejarlo inaccesible para los usuarios legítimos",
      "Una técnica legal de optimización del tráfico de red",
      "Un método de cifrado de comunicaciones entre servidores",
      "Un sinónimo de copia de seguridad distribuida",
    ],
    correcta: 0,
    explicacion:
      "Un ataque de denegación de servicio distribuido (DDoS, Distributed Denial of Service) consiste en saturar un sistema, servidor o red con un volumen masivo de tráfico o peticiones procedentes de múltiples fuentes simultáneas —frecuentemente dispositivos infectados que forman una red de bots o «botnet»—, con el objetivo de impedir su funcionamiento normal o dejarlo inaccesible para los usuarios legítimos.",
  },
  {
    id: "cda-08",
    enunciado: "¿Qué órgano español se encarga de la respuesta a incidentes de ciberseguridad en el ámbito de las infraestructuras críticas y del sector público?",
    opciones: [
      "El Centro Criptológico Nacional (CCN), a través de su equipo de respuesta a incidentes CCN-CERT, adscrito al Centro Nacional de Inteligencia",
      "Únicamente los Ayuntamientos, sin intervención de organismos estatales",
      "Exclusivamente empresas privadas de ciberseguridad, sin ningún organismo público",
      "Un organismo dependiente en exclusiva de la Unión Europea sin presencia en España",
    ],
    correcta: 0,
    explicacion:
      "El Centro Criptológico Nacional (CCN), organismo adscrito al Centro Nacional de Inteligencia, cuenta con su propia capacidad de respuesta a incidentes de seguridad informática, el CCN-CERT, encargado de la ciberseguridad en las Administraciones Públicas y en las entidades de interés estratégico para el país, en coordinación con la Estrategia Nacional de Ciberseguridad ya analizada en el tema dedicado a la protección de infraestructuras críticas.",
  },
];
