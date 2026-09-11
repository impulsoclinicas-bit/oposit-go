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
  {
    id: "cda-09",
    enunciado: "¿Qué diferencia a un «virus» informático de un «gusano» (worm)?",
    opciones: [
      "El virus necesita adherirse a un archivo o programa anfitrión y depende de la acción de un usuario para propagarse; el gusano es un programa autónomo capaz de replicarse y propagarse por una red sin necesidad de intervención humana ni de un archivo anfitrión",
      "Son términos completamente sinónimos sin ninguna diferencia técnica",
      "El gusano solo puede afectar a dispositivos móviles, nunca a ordenadores",
      "El virus siempre es inofensivo y el gusano siempre es destructivo",
    ],
    correcta: 0,
    explicacion:
      "El virus informático necesita adherirse a un archivo o programa anfitrión y requiere habitualmente una acción del usuario (ejecutar el archivo infectado) para propagarse, mientras que el gusano (worm) es un programa autónomo capaz de replicarse y propagarse de un sistema a otro a través de una red sin necesidad de un archivo anfitrión ni de intervención humana.",
  },
  {
    id: "cda-10",
    enunciado: "¿Qué es un «troyano» (troyan horse) en ciberseguridad?",
    opciones: [
      "Un tipo de software malicioso que se presenta disfrazado de programa legítimo o inofensivo, y que una vez instalado por la víctima permite al atacante realizar acciones no autorizadas en el sistema",
      "Un sinónimo exacto de cortafuegos (firewall)",
      "Un programa antivirus especialmente diseñado para detectar gusanos informáticos",
      "Un protocolo de cifrado de correo electrónico",
    ],
    correcta: 0,
    explicacion:
      "El troyano es un tipo de software malicioso que se presenta engañosamente como un programa legítimo o inofensivo (de ahí su nombre, inspirado en el caballo de Troya), de modo que la propia víctima lo instala voluntariamente, permitiendo posteriormente al atacante acceder al sistema, robar información o instalar otro malware adicional.",
  },
  {
    id: "cda-11",
    enunciado: "¿Qué es una «botnet»?",
    opciones: [
      "Una red de dispositivos infectados por malware y controlados remotamente por un atacante, habitualmente sin conocimiento de sus propietarios, utilizada para lanzar ataques coordinados como los de denegación de servicio",
      "Un programa legítimo de automatización de tareas domésticas",
      "Un sinónimo de red privada virtual (VPN)",
      "Un tipo de red exclusivamente utilizada por administraciones públicas",
    ],
    correcta: 0,
    explicacion:
      "Una botnet es una red de dispositivos (ordenadores, routers, cámaras u otros dispositivos conectados) infectados por malware y controlados remotamente por un atacante, habitualmente sin que sus propietarios legítimos sean conscientes de ello, que se emplea con frecuencia para lanzar ataques coordinados a gran escala, como los de denegación de servicio distribuido.",
  },
  {
    id: "cda-12",
    enunciado: "¿Qué es un «spyware» o programa espía?",
    opciones: [
      "Un tipo de software malicioso que recopila información del usuario o del sistema sin su consentimiento, como hábitos de navegación, credenciales o pulsaciones de teclado, y la envía a un tercero",
      "Un programa legítimo de supervisión parental instalado siempre con consentimiento expreso",
      "Un sinónimo exacto de cortafuegos",
      "Un dispositivo físico de vigilancia por vídeo",
    ],
    correcta: 0,
    explicacion:
      "El spyware o programa espía es un tipo de software malicioso diseñado para recopilar información del usuario o del sistema sin su consentimiento —hábitos de navegación, credenciales de acceso, datos personales— y transmitirla a un tercero; una variante específica, el «keylogger», registra las pulsaciones del teclado para capturar contraseñas y otra información sensible.",
  },
  {
    id: "cda-13",
    enunciado: "¿Qué es una «vulnerabilidad de día cero» (zero-day)?",
    opciones: [
      "Una vulnerabilidad de seguridad en un sistema o programa que es desconocida para su fabricante o para el público en el momento en que empieza a ser explotada, por lo que no existe todavía una corrección o parche disponible",
      "Un ataque que solo puede producirse el primer día de instalación de un programa",
      "Un sinónimo de copia de seguridad automática",
      "Una vulnerabilidad que nunca llega a ser explotada en la práctica",
    ],
    correcta: 0,
    explicacion:
      "Una vulnerabilidad de día cero (zero-day) es un fallo de seguridad en un sistema o programa que es desconocido para su fabricante o para el público en el momento en que comienza a ser explotado por un atacante, de modo que no existe todavía un parche o corrección disponible, lo que la hace especialmente peligrosa hasta que se detecta y se soluciona.",
  },
  {
    id: "cda-14",
    enunciado: "¿Qué son el «vishing» y el «smishing» como variantes del phishing?",
    opciones: [
      "El vishing es la suplantación de identidad realizada a través de llamadas de voz (telefónicas); el smishing es la que se realiza mediante mensajes de texto (SMS), ambos con la misma finalidad que el phishing tradicional por correo electrónico",
      "Son sinónimos exactos del ransomware",
      "Son técnicas exclusivamente empleadas para la instalación de virus, sin relación con el engaño o la suplantación",
      "Solo pueden producirse a través de redes sociales, nunca por teléfono o SMS",
    ],
    correcta: 0,
    explicacion:
      "El vishing (voice phishing) es la modalidad de suplantación de identidad realizada mediante llamadas de voz, habitualmente telefónicas, mientras que el smishing (SMS phishing) se lleva a cabo a través de mensajes de texto; ambas variantes persiguen el mismo objetivo que el phishing tradicional por correo electrónico: engañar a la víctima para obtener datos personales, credenciales o información financiera.",
  },
  {
    id: "cda-15",
    enunciado: "¿Qué es un «insider» o amenaza interna en el ámbito de la ciberseguridad?",
    opciones: [
      "Una persona con acceso legítimo a los sistemas de una organización (empleado, colaborador) que, de forma deliberada o negligente, compromete la seguridad de la información a la que tiene acceso",
      "Un atacante que nunca ha tenido ninguna relación con la organización afectada",
      "Un sinónimo exacto de hacktivista",
      "Un tipo de virus informático que solo afecta a sistemas externos a una organización",
    ],
    correcta: 0,
    explicacion:
      "El insider o amenaza interna es una persona con acceso legítimo a los sistemas o a la información de una organización —un empleado, un colaborador o un proveedor— que, de forma deliberada (por motivos económicos, de venganza o ideológicos) o por simple negligencia, compromete la seguridad de dicha información, constituyendo un riesgo distinto de las amenazas externas y frecuentemente más difícil de detectar.",
  },
  {
    id: "cda-16",
    enunciado: "¿Qué es el «adware» como tipo de software potencialmente no deseado?",
    opciones: [
      "Un software que muestra publicidad de forma automática y no solicitada al usuario, en ocasiones instalado sin su pleno consentimiento informado, pudiendo además recopilar datos sobre sus hábitos de navegación",
      "Un sinónimo exacto del ransomware",
      "Un programa antivirus gratuito sin ninguna función publicitaria",
      "Un tipo de hardware específico para la reproducción de anuncios",
    ],
    correcta: 0,
    explicacion:
      "El «adware» es un tipo de software que muestra publicidad de forma automática y no solicitada al usuario, en ocasiones instalado junto con otro programa sin que el usuario preste un consentimiento plenamente informado, pudiendo además, en sus variantes más intrusivas, recopilar datos sobre los hábitos de navegación del usuario con fines publicitarios.",
  },
  {
    id: "cda-17",
    enunciado: "¿Qué es un «keylogger» en ciberseguridad?",
    opciones: [
      "Un tipo de software o dispositivo malicioso que registra de forma encubierta las pulsaciones del teclado de un usuario, con el fin de capturar información sensible como contraseñas o datos personales",
      "Un programa que mejora la velocidad de escritura del usuario",
      "Un sinónimo exacto de un cortafuegos",
      "Un dispositivo exclusivamente utilizado para la impresión de documentos",
    ],
    correcta: 0,
    explicacion:
      "Un «keylogger» es un tipo de software o, en ocasiones, un pequeño dispositivo físico, que registra de forma encubierta las pulsaciones del teclado de un usuario, con el fin de capturar información sensible como contraseñas, números de tarjetas de crédito u otros datos personales, sin que el usuario afectado sea consciente de ello.",
  },
  {
    id: "cda-18",
    enunciado: "¿Qué caracteriza a un «rootkit» como tipo de malware?",
    opciones: [
      "Un conjunto de herramientas diseñadas para ocultar la presencia de un atacante o de otro programa malicioso en un sistema, dificultando su detección por parte del usuario o de las herramientas de seguridad, y facilitando el mantenimiento de un acceso persistente y encubierto",
      "Un programa cuya única función es acelerar el arranque del sistema operativo",
      "Un sinónimo exacto de un antivirus de última generación",
      "Un tipo de red inalámbrica especialmente segura",
    ],
    correcta: 0,
    explicacion:
      "Un «rootkit» es un conjunto de herramientas de software diseñadas para ocultar la presencia de un atacante o de otro programa malicioso en un sistema comprometido, dificultando su detección por parte del usuario o de las herramientas de seguridad habituales, y facilitando así el mantenimiento de un acceso persistente y encubierto al sistema afectado durante un período prolongado.",
  },
  {
    id: "cda-19",
    enunciado: "¿En qué consiste el «criptojacking»?",
    opciones: [
      "El uso no autorizado de los recursos de procesamiento de un dispositivo ajeno (ordenador, servidor, teléfono móvil), sin conocimiento de su propietario, para minar criptomonedas en beneficio del atacante",
      "Un delito consistente en robar físicamente monederos de criptomonedas almacenados en papel",
      "Un sinónimo exacto del ransomware que exige el rescate en criptomonedas",
      "Una técnica legítima y autorizada de inversión en criptoactivos",
    ],
    correcta: 0,
    explicacion:
      "El «criptojacking» consiste en el uso no autorizado de los recursos de procesamiento de un dispositivo ajeno (ordenador, servidor, teléfono móvil), sin conocimiento ni consentimiento de su propietario, para minar criptomonedas en beneficio del atacante, provocando habitualmente una ralentización notable del dispositivo afectado y un mayor consumo energético, sin que necesariamente se sustraigan datos ni se exija ningún rescate, a diferencia del ransomware.",
  },
  {
    id: "cda-20",
    enunciado: "¿En qué consisten los ataques de «fuerza bruta» y de «diccionario» contra contraseñas?",
    opciones: [
      "El ataque de fuerza bruta prueba de forma sistemática todas las combinaciones posibles de caracteres hasta dar con la contraseña correcta; el ataque de diccionario prueba, en lugar de todas las combinaciones posibles, una lista predefinida de palabras y contraseñas de uso común, resultando generalmente más rápido cuando la contraseña es débil o previsible",
      "Son términos exactamente sinónimos, sin ninguna diferencia técnica",
      "Ambos ataques solo pueden ejecutarse con acceso físico directo al dispositivo",
      "Ninguno de los dos ataques tiene relación con la seguridad de las contraseñas",
    ],
    correcta: 0,
    explicacion:
      "El ataque de «fuerza bruta» prueba de forma sistemática todas las combinaciones posibles de caracteres hasta dar con la contraseña correcta, siendo su eficacia (y el tiempo requerido) muy dependiente de la longitud y complejidad de la contraseña; el ataque de «diccionario» prueba, en lugar de todas las combinaciones posibles, una lista predefinida de palabras, frases y contraseñas de uso habitual (incluidas filtraciones previas de otras contraseñas), resultando generalmente mucho más rápido cuando la contraseña objetivo es débil o previsible.",
  },
  {
    id: "cda-21",
    enunciado: "¿Qué es el «defacement» o desfiguración de un sitio web?",
    opciones: [
      "La modificación no autorizada del contenido visible de una página web por parte de un atacante, sustituyéndolo habitualmente por un mensaje propio, reivindicativo o burlesco, como forma de demostrar públicamente que ha logrado comprometer el sitio",
      "Un tipo de ataque de denegación de servicio exclusivamente",
      "Un procedimiento legítimo de actualización del diseño de una página web por parte de su propietario",
      "Un sinónimo exacto del phishing",
    ],
    correcta: 0,
    explicacion:
      "El «defacement» o desfiguración de un sitio web consiste en la modificación no autorizada del contenido visible de una página web por parte de un atacante, sustituyéndolo habitualmente por un mensaje propio, de carácter reivindicativo, político o simplemente burlesco, siendo una técnica frecuentemente empleada por hacktivistas como forma de demostrar públicamente que han logrado comprometer el sitio, más que con una finalidad de lucro económico directo.",
  },
  {
    id: "cda-22",
    enunciado: "¿Qué es el «malware sin archivo» (fileless malware)?",
    opciones: [
      "Un tipo de software malicioso que opera principalmente en la memoria RAM del sistema, aprovechando herramientas y procesos legítimos ya presentes en él, en lugar de instalar un archivo ejecutable independiente en el disco, lo que dificulta su detección por parte de los antivirus tradicionales basados en el análisis de archivos",
      "Un tipo de malware que no puede infectar ningún dispositivo, por carecer de un archivo asociado",
      "Un sinónimo exacto del adware",
      "Un programa legítimo de gestión de archivos incluido en los sistemas operativos",
    ],
    correcta: 0,
    explicacion:
      "El «malware sin archivo» (fileless malware) es un tipo de software malicioso que opera principalmente en la memoria RAM del sistema, aprovechando herramientas y procesos legítimos ya presentes en él (como intérpretes de comandos del propio sistema operativo), en lugar de instalar un archivo ejecutable independiente en el disco, lo que dificulta notablemente su detección por parte de los antivirus tradicionales basados en el análisis de archivos almacenados.",
  },
  {
    id: "cda-23",
    enunciado: "¿Qué es un «kit de explotación» (exploit kit) en el ámbito de la ciberdelincuencia?",
    opciones: [
      "Un conjunto de herramientas preconfiguradas que automatizan la identificación de vulnerabilidades en el sistema de la víctima y el despliegue del código malicioso correspondiente para explotarlas, facilitando así la comisión de ataques incluso a personas con conocimientos técnicos limitados",
      "Un conjunto de herramientas exclusivamente empleadas por investigadores de seguridad para proteger sistemas, nunca por atacantes",
      "Un sinónimo exacto de un programa antivirus",
      "Un dispositivo físico necesario para realizar cualquier ataque informático",
    ],
    correcta: 0,
    explicacion:
      "Un «kit de explotación» (exploit kit) es un conjunto de herramientas preconfiguradas, disponibles en ocasiones en foros clandestinos o mercados de la «dark web», que automatizan la identificación de vulnerabilidades en el sistema de una potencial víctima y el despliegue del código malicioso correspondiente para explotarlas, facilitando así la comisión de ataques incluso a personas con conocimientos técnicos limitados, fenómeno relacionado con el modelo de «cibercrimen como servicio».",
  },
  {
    id: "cda-24",
    enunciado: "¿Qué es el «doxing»?",
    opciones: [
      "La práctica de recopilar y difundir públicamente, sin consentimiento y con frecuencia con intención maliciosa, información privada o identificativa de una persona (domicilio, teléfono, lugar de trabajo, entre otros datos), exponiéndola a un riesgo de acoso o de daño",
      "Un sinónimo exacto del phishing dirigido a empresas",
      "Un procedimiento legítimo de verificación de identidad empleado por las entidades bancarias",
      "Un tipo de ataque que solo afecta a servidores corporativos, nunca a particulares",
    ],
    correcta: 0,
    explicacion:
      "El «doxing» es la práctica de recopilar y difundir públicamente, sin el consentimiento de la persona afectada y con frecuencia con una intención maliciosa, información privada o identificativa suya (domicilio, número de teléfono, lugar de trabajo, entre otros datos), exponiéndola a un riesgo real de acoso, intimidación o incluso de agresión física, pudiendo constituir, según las circunstancias, un ilícito penal o administrativo en materia de protección de datos.",
  },
  {
    id: "cda-25",
    enunciado: "¿Qué es la suplantación de identidad digital, más allá de la técnica concreta del phishing?",
    opciones: [
      "El conjunto de conductas por las que una persona se hace pasar por otra en el entorno digital (creando perfiles falsos en redes sociales, accediendo a sus cuentas, o utilizando indebidamente sus datos), con finalidades que pueden ir desde el engaño económico hasta el acoso o el daño reputacional",
      "Un sinónimo exacto y exclusivo del delito de estafa informática",
      "Una práctica siempre legítima cuando se realiza con fines de entretenimiento",
      "Un fenómeno que solo puede afectar a personas famosas o públicas",
    ],
    correcta: 0,
    explicacion:
      "La suplantación de identidad digital es el conjunto de conductas por las que una persona se hace pasar por otra en el entorno digital (creando perfiles falsos en redes sociales con su nombre e imagen, accediendo sin autorización a sus cuentas, o utilizando indebidamente sus datos personales), con finalidades que pueden ir desde el engaño económico (como en el phishing) hasta el acoso, la difamación o el daño reputacional de la persona suplantada.",
  },
  {
    id: "cda-26",
    enunciado: "¿Qué caracteriza a un «script kiddie» como tipo de agente de amenaza en ciberseguridad?",
    opciones: [
      "Una persona con conocimientos técnicos limitados que utiliza herramientas y programas de ataque ya desarrollados por otros, sin comprender necesariamente su funcionamiento interno, motivada frecuentemente por la simple curiosidad, el desafío personal o el reconocimiento social, más que por objetivos económicos o políticos sofisticados",
      "Un experto en ciberseguridad de máximo nivel técnico, empleado por un servicio de inteligencia estatal",
      "Un sinónimo exacto de una amenaza persistente avanzada (APT)",
      "Un tipo de software antivirus de código abierto",
    ],
    correcta: 0,
    explicacion:
      "Un «script kiddie» es un agente de amenaza con conocimientos técnicos limitados que utiliza herramientas y programas de ataque ya desarrollados por otros (disponibles en ocasiones públicamente), sin comprender necesariamente su funcionamiento interno, motivado frecuentemente por la simple curiosidad, el desafío personal o la búsqueda de reconocimiento social, a diferencia de actores más sofisticados como las APT o los grupos de delincuencia organizada especializados.",
  },
  {
    id: "cda-27",
    enunciado: "¿Qué caracteriza a un agente de amenaza «patrocinado por un Estado» (state-sponsored actor) en el ámbito de la ciberseguridad?",
    opciones: [
      "Un grupo o individuo que actúa con el respaldo, la financiación o la dirección, directa o indirecta, de un Estado, con objetivos de espionaje, sabotaje o influencia estratégica, disponiendo habitualmente de recursos técnicos y financieros muy superiores a los de otros agentes de amenaza",
      "Un empleado público que comete un delito informático por iniciativa exclusivamente personal, sin ninguna relación con su Estado",
      "Un sinónimo exacto de un hacktivista",
      "Un tipo de malware desarrollado exclusivamente con fines educativos",
    ],
    correcta: 0,
    explicacion:
      "Un agente de amenaza «patrocinado por un Estado» (state-sponsored actor) es un grupo o individuo que actúa con el respaldo, la financiación o la dirección, directa o indirecta, de un Estado, con objetivos de espionaje, sabotaje de infraestructuras o influencia estratégica sobre otros países, disponiendo habitualmente de recursos técnicos y financieros muy superiores a los de otros agentes de amenaza, lo que les permite desarrollar ataques especialmente sofisticados y persistentes, como las denominadas APT.",
  },
  {
    id: "cda-28",
    enunciado: "¿Qué se entiende por «cibercrimen como servicio» (Cybercrime-as-a-Service)?",
    opciones: [
      "Un modelo de negocio delictivo en el que determinados actores ofrecen, a cambio de un pago, herramientas, infraestructuras o servicios (malware, botnets, kits de explotación, campañas de phishing) a otros delincuentes, reduciendo la barrera técnica necesaria para cometer ciberdelitos",
      "Un servicio legal de asesoramiento en ciberseguridad prestado por empresas especializadas",
      "Un sinónimo exacto del hacking ético o autorizado",
      "Un programa gubernamental de formación en ciberseguridad para la ciudadanía",
    ],
    correcta: 0,
    explicacion:
      "El «cibercrimen como servicio» (Cybercrime-as-a-Service) es un modelo de negocio delictivo, propio del ecosistema del cibercrimen organizado, en el que determinados actores ofrecen, a cambio de un pago, herramientas, infraestructuras o servicios ya preparados (malware a medida, alquiler de botnets, kits de explotación, campañas de phishing completas) a otros delincuentes, reduciendo notablemente la barrera técnica necesaria para cometer ciberdelitos sofisticados.",
  },
  {
    id: "cda-29",
    enunciado: "¿En qué consiste un ataque de «abrevadero» o «watering hole»?",
    opciones: [
      "Un ataque en el que el atacante compromete previamente un sitio web legítimo que sabe frecuentado por las víctimas que pretende alcanzar, infectándolo con malware, de modo que las propias víctimas se infecten al visitar dicho sitio de su confianza en el curso de su actividad habitual",
      "Un ataque exclusivamente dirigido contra instalaciones de suministro de agua potable",
      "Un sinónimo exacto de un ataque de denegación de servicio distribuido",
      "Una técnica legítima de marketing digital sin ninguna finalidad maliciosa",
    ],
    correcta: 0,
    explicacion:
      "Un ataque de «abrevadero» o «watering hole» consiste en que el atacante compromete previamente un sitio web legítimo que sabe frecuentado habitualmente por las víctimas que pretende alcanzar (por analogía con un depredador que espera a sus presas junto a un abrevadero), infectándolo con malware, de modo que las propias víctimas resulten infectadas simplemente al visitar dicho sitio de su confianza en el curso de su actividad habitual, sin necesidad de dirigirse a ellas de forma individualizada.",
  },
  {
    id: "cda-30",
    enunciado: "¿En qué consiste la estrategia de «seguridad por capas» o «defensa en profundidad» (defense in depth) frente a los agentes de amenaza?",
    opciones: [
      "Una estrategia que combina múltiples medidas de seguridad complementarias y superpuestas (cortafuegos, antivirus, cifrado, autenticación, formación del personal, entre otras), de modo que si un atacante logra superar una de ellas, existan otras capas adicionales que sigan ofreciendo protección",
      "Una estrategia que confía la seguridad exclusivamente en una única medida, considerada infalible",
      "Un sinónimo exacto del hacking ético",
      "Una estrategia exclusivamente aplicable a la seguridad física de un edificio, sin relación con la ciberseguridad",
    ],
    correcta: 0,
    explicacion:
      "La estrategia de «seguridad por capas» o «defensa en profundidad» (defense in depth) combina múltiples medidas de seguridad complementarias y superpuestas (cortafuegos, antivirus, cifrado, autenticación robusta, segmentación de redes, formación y concienciación del personal, entre otras), partiendo de la premisa de que ninguna medida individual es infalible, de modo que si un atacante logra superar una de las capas de protección, existan otras capas adicionales que sigan ofreciendo resistencia y permitan detectar y contener el ataque.",
  },
];
