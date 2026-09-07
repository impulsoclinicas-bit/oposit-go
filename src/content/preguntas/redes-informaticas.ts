import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "ri-01",
    enunciado: "¿Cómo se clasifican las redes informáticas según su extensión geográfica?",
    opciones: [
      "Redes de área local (LAN), redes de área metropolitana (MAN) y redes de área extensa (WAN)",
      "Únicamente en redes públicas y privadas, sin ninguna otra clasificación",
      "Solo en redes cableadas e inalámbricas",
      "Exclusivamente en redes domésticas y empresariales",
    ],
    correcta: 0,
    explicacion:
      "Según su extensión geográfica, las redes se clasifican habitualmente en redes de área local o LAN (Local Area Network, limitadas a un edificio o campus), redes de área metropolitana o MAN (Metropolitan Area Network, que cubren una ciudad) y redes de área extensa o WAN (Wide Area Network, que abarcan grandes distancias geográficas, siendo Internet el ejemplo más representativo).",
  },
  {
    id: "ri-02",
    enunciado: "¿Qué es el modelo TCP/IP y cuál es su función en las redes informáticas?",
    opciones: [
      "Un conjunto de protocolos de comunicación en el que se basa el funcionamiento de Internet, organizado en capas (aplicación, transporte, internet y acceso a la red) que permiten la interconexión de equipos heterogéneos",
      "Un tipo de cable de red físico",
      "Un programa antivirus específico",
      "Un sinónimo de dirección IP",
    ],
    correcta: 0,
    explicacion:
      "El modelo TCP/IP (Transmission Control Protocol/Internet Protocol) es el conjunto de protocolos de comunicación en el que se basa el funcionamiento de Internet, organizado en cuatro capas —aplicación, transporte, internet y acceso a la red— que permiten la interconexión e intercambio de datos entre equipos de distintos fabricantes y sistemas operativos.",
  },
  {
    id: "ri-03",
    enunciado: "¿Qué es una dirección IP?",
    opciones: [
      "Un identificador numérico único asignado a cada dispositivo conectado a una red que utiliza el protocolo de Internet, empleado para su localización e identificación en dicha red",
      "El nombre comercial de un proveedor de servicios de Internet",
      "Un tipo de virus informático",
      "Un sinónimo de contraseña de acceso a una red Wi-Fi",
    ],
    correcta: 0,
    explicacion:
      "Una dirección IP (Internet Protocol) es un identificador numérico único asignado a cada dispositivo conectado a una red que emplea el protocolo de Internet, y que permite su localización e identificación dentro de dicha red, ya sea mediante el formato IPv4 (32 bits) o el más reciente IPv6 (128 bits), diseñado para ampliar el espacio de direcciones disponible.",
  },
  {
    id: "ri-04",
    enunciado: "¿Qué es un «cortafuegos» o «firewall» en el contexto de la seguridad de redes?",
    opciones: [
      "Un sistema de seguridad, hardware o software, que controla el tráfico de red entrante y saliente conforme a reglas predefinidas, permitiendo o bloqueando conexiones según criterios de seguridad",
      "Un dispositivo físico destinado exclusivamente a la extinción de incendios en centros de datos",
      "Un tipo de cable de fibra óptica resistente al fuego",
      "Un sinónimo de antivirus",
    ],
    correcta: 0,
    explicacion:
      "Un cortafuegos o firewall es un sistema de seguridad, implementado en hardware, software o ambos, que controla el tráfico de red entrante y saliente de un sistema o red conforme a un conjunto de reglas de seguridad predefinidas, permitiendo o bloqueando conexiones en función de criterios como el origen, el destino o el tipo de tráfico.",
  },
  {
    id: "ri-05",
    enunciado: "¿Qué diferencia existe entre una red «cableada» y una red «inalámbrica» (Wi-Fi)?",
    opciones: [
      "La red cableada transmite datos mediante medios físicos (cable de cobre o fibra óptica), mientras que la red inalámbrica transmite la información mediante ondas de radiofrecuencia sin necesidad de conexión física",
      "No existe ninguna diferencia técnica entre ambos tipos de red",
      "La red inalámbrica solo puede utilizarse en interiores",
      "La red cableada nunca puede alcanzar velocidades superiores a las de la red inalámbrica",
    ],
    correcta: 0,
    explicacion:
      "Las redes cableadas transmiten la información a través de un medio físico, como el cable de cobre (par trenzado) o la fibra óptica, mientras que las redes inalámbricas, como las basadas en el estándar Wi-Fi, transmiten los datos mediante ondas de radiofrecuencia, sin necesidad de una conexión física entre los dispositivos y el punto de acceso a la red.",
  },
  {
    id: "ri-06",
    enunciado: "¿Qué función desempeña el protocolo DNS (Domain Name System) en Internet?",
    opciones: [
      "Traduce los nombres de dominio legibles por las personas (por ejemplo, «www.ejemplo.es») en las direcciones IP numéricas que identifican a los servidores en la red",
      "Cifra el contenido de los correos electrónicos",
      "Gestiona exclusivamente las contraseñas de los usuarios",
      "Controla la velocidad de conexión a Internet",
    ],
    correcta: 0,
    explicacion:
      "El sistema de nombres de dominio (DNS, Domain Name System) es el protocolo encargado de traducir los nombres de dominio legibles por las personas, como «www.ejemplo.es», en las direcciones IP numéricas que realmente identifican a los servidores dentro de la red, facilitando así la navegación y el acceso a los recursos de Internet.",
  },
  {
    id: "ri-07",
    enunciado: "¿Qué es una VPN (red privada virtual)?",
    opciones: [
      "Una tecnología que crea una conexión cifrada y segura a través de una red pública (como Internet), permitiendo que el tráfico circule como si el dispositivo estuviera conectado directamente a una red privada",
      "Un tipo de red exclusivamente inalámbrica sin cifrado",
      "Un programa de mensajería instantánea",
      "Un sinónimo de dirección IP estática",
    ],
    correcta: 0,
    explicacion:
      "Una VPN (Virtual Private Network o red privada virtual) es una tecnología que establece una conexión cifrada y segura a través de una red pública, como Internet, de modo que el tráfico de datos del dispositivo circula como si este estuviera conectado directamente a una red privada, protegiendo la confidencialidad de las comunicaciones y, en ocasiones, ocultando el origen real de la conexión.",
  },
  {
    id: "ri-08",
    enunciado: "¿Qué diferencia existe entre un «router» (encaminador) y un «switch» (conmutador) en una red local?",
    opciones: [
      "El router interconecta redes distintas (por ejemplo, la red local con Internet) y dirige el tráfico entre ellas; el switch interconecta dispositivos dentro de una misma red local, dirigiendo el tráfico entre los puertos conectados a ella",
      "Son términos sinónimos y completamente intercambiables entre sí",
      "El switch se emplea exclusivamente para redes inalámbricas",
      "El router solo puede utilizarse en redes de área extensa (WAN), nunca en redes locales",
    ],
    correcta: 0,
    explicacion:
      "El router o encaminador es el dispositivo que interconecta redes distintas —por ejemplo, la red local doméstica con la red del proveedor de Internet— y dirige el tráfico de datos entre ellas según las direcciones IP de destino; el switch o conmutador, por su parte, interconecta los dispositivos dentro de una misma red local, dirigiendo el tráfico entre los distintos puertos conectados a él según las direcciones físicas (MAC) de los equipos.",
  },
  {
    id: "ri-09",
    enunciado: "¿Qué diferencia existe entre los protocolos HTTP y HTTPS?",
    opciones: [
      "HTTP transmite la información entre el navegador y el servidor sin cifrar; HTTPS añade una capa de cifrado (mediante TLS/SSL) que protege la confidencialidad e integridad de los datos transmitidos",
      "Son protocolos completamente idénticos, sin ninguna diferencia técnica",
      "HTTPS es un protocolo exclusivo para el envío de correo electrónico",
      "HTTP solo puede utilizarse en redes privadas, nunca en Internet",
    ],
    correcta: 0,
    explicacion:
      "El protocolo HTTP (Hypertext Transfer Protocol) transmite la información entre el navegador y el servidor web sin cifrar, mientras que HTTPS (HTTP Secure) añade una capa de cifrado, mediante los protocolos TLS o SSL, que protege la confidencialidad e integridad de los datos transmitidos, motivo por el cual se recomienda especialmente para operaciones sensibles como el acceso a banca online o el envío de datos personales.",
  },
  {
    id: "ri-10",
    enunciado: "¿Qué es un «puerto» en el contexto de las comunicaciones de red?",
    opciones: [
      "Un identificador numérico que, junto con la dirección IP, permite distinguir los distintos servicios o aplicaciones que se comunican a través de una misma conexión de red en un dispositivo",
      "Un dispositivo físico de conexión de cables de red",
      "Un sinónimo exacto de dirección IP",
      "Un tipo de virus informático que ataca a los routers",
    ],
    correcta: 0,
    explicacion:
      "Un puerto es un identificador numérico (entre 0 y 65535) que, junto con la dirección IP, permite distinguir los distintos servicios o aplicaciones que se comunican simultáneamente a través de una misma conexión de red en un dispositivo; por ejemplo, el tráfico web sin cifrar utiliza habitualmente el puerto 80, y el tráfico web cifrado (HTTPS) el puerto 443.",
  },
  {
    id: "ri-11",
    enunciado: "¿Qué función cumple el protocolo DHCP (Dynamic Host Configuration Protocol) en una red?",
    opciones: [
      "Asigna de forma automática y dinámica una dirección IP y otros parámetros de configuración de red a los dispositivos que se conectan a ella, sin necesidad de configurarlos manualmente",
      "Cifra las comunicaciones entre dos servidores",
      "Traduce los nombres de dominio en direcciones IP",
      "Detecta y elimina virus informáticos de la red",
    ],
    correcta: 0,
    explicacion:
      "El protocolo DHCP (Dynamic Host Configuration Protocol) asigna de forma automática y dinámica una dirección IP, junto con otros parámetros de configuración de red (máscara de subred, puerta de enlace, servidores DNS), a los dispositivos que se conectan a una red, evitando la necesidad de configurar manualmente estos parámetros en cada equipo.",
  },
  {
    id: "ri-12",
    enunciado: "¿Qué diferencia existe entre el «ancho de banda» y la «latencia» de una conexión de red?",
    opciones: [
      "El ancho de banda mide la cantidad máxima de datos que pueden transmitirse por la red en un período de tiempo; la latencia mide el tiempo de retardo que tarda un dato en viajar desde el origen hasta el destino",
      "Son términos sinónimos y completamente intercambiables entre sí",
      "El ancho de banda mide únicamente la velocidad de subida, nunca la de descarga",
      "La latencia es siempre irrelevante para la calidad de una conexión de red",
    ],
    correcta: 0,
    explicacion:
      "El ancho de banda mide la cantidad máxima de datos que pueden transmitirse a través de una red en un período de tiempo determinado (habitualmente expresado en megabits por segundo), mientras que la latencia mide el tiempo de retardo que tarda un dato en viajar desde el origen hasta el destino, siendo un factor especialmente relevante en aplicaciones sensibles al retardo, como las videollamadas o los videojuegos en línea.",
  },
  {
    id: "ri-13",
    enunciado: "¿Qué es el «NAT» (Network Address Translation o traducción de direcciones de red)?",
    opciones: [
      "Una técnica que permite que varios dispositivos de una red local, con direcciones IP privadas, compartan una única dirección IP pública para conectarse a Internet",
      "Un protocolo exclusivo de cifrado de correo electrónico",
      "Un tipo de ataque informático que satura un servidor",
      "Un sinónimo de sistema de nombres de dominio (DNS)",
    ],
    correcta: 0,
    explicacion:
      "El NAT (Network Address Translation) es una técnica que permite que varios dispositivos de una red local, cada uno con su propia dirección IP privada, compartan una única dirección IP pública para conectarse a Internet, traduciendo las direcciones internas a la dirección pública (y viceversa) a medida que el tráfico entra y sale de la red local, lo que además añade una capa adicional de ocultación de la estructura interna de dicha red.",
  },
  {
    id: "ri-14",
    enunciado: "¿Qué topologías básicas puede adoptar una red de área local en cuanto a su disposición física o lógica?",
    opciones: [
      "Entre otras, la topología en estrella (todos los dispositivos conectados a un nodo central), en anillo (cada dispositivo conectado a otros dos formando un círculo) y en bus (todos los dispositivos comparten un único canal de comunicación)",
      "Únicamente la topología inalámbrica, sin ninguna otra variante",
      "Solo puede existir una única topología de red posible, sin ninguna alternativa",
      "Exclusivamente la topología en la nube, sin ninguna otra disposición física",
    ],
    correcta: 0,
    explicacion:
      "Entre las topologías básicas de una red de área local se encuentran la topología en estrella, en la que todos los dispositivos se conectan a un nodo central (como un switch); la topología en anillo, en la que cada dispositivo se conecta a otros dos formando un círculo; y la topología en bus, en la que todos los dispositivos comparten un único canal de comunicación, cada una con sus propias ventajas e inconvenientes en términos de fiabilidad y facilidad de mantenimiento.",
  },
  {
    id: "ri-15",
    enunciado: "¿Qué función cumple un sistema IDS/IPS (sistema de detección/prevención de intrusiones) dentro de la seguridad de una red?",
    opciones: [
      "Monitoriza el tráfico de la red para detectar patrones de actividad sospechosa o maliciosa (IDS), pudiendo además bloquear automáticamente dicho tráfico antes de que alcance su objetivo (IPS)",
      "Se limita a cifrar las comunicaciones entre dos servidores, sin ninguna función de detección",
      "Es un sinónimo exacto de servidor DNS",
      "Su única función es asignar direcciones IP a los dispositivos de la red",
    ],
    correcta: 0,
    explicacion:
      "Un sistema de detección de intrusiones (IDS, Intrusion Detection System) monitoriza el tráfico de una red o de un sistema para detectar patrones de actividad sospechosa o maliciosa, generando alertas cuando los identifica; un sistema de prevención de intrusiones (IPS, Intrusion Prevention System) añade además la capacidad de bloquear automáticamente dicho tráfico antes de que alcance su objetivo, complementando la labor del cortafuegos dentro de la arquitectura de seguridad de una red.",
  },
];
