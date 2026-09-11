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
  {
    id: "ri-16",
    enunciado: "¿Qué es el modelo OSI (Open Systems Interconnection) y en qué se diferencia del modelo TCP/IP?",
    opciones: [
      "Un modelo teórico de referencia que describe la comunicación en redes a través de siete capas (física, enlace de datos, red, transporte, sesión, presentación y aplicación), frente al modelo TCP/IP, de carácter más práctico, que agrupa estas funciones en cuatro capas y es el efectivamente implementado en internet",
      "Son términos exactamente sinónimos, sin ninguna diferencia relevante",
      "El modelo OSI es el que efectivamente se utiliza en internet, y el TCP/IP es un modelo puramente teórico sin aplicación real",
      "El modelo OSI solo tiene dos capas, y el TCP/IP siete",
    ],
    correcta: 0,
    explicacion:
      "El modelo OSI (Open Systems Interconnection) es un modelo teórico de referencia, desarrollado por la ISO, que describe la comunicación en redes a través de siete capas (física, enlace de datos, red, transporte, sesión, presentación y aplicación); el modelo TCP/IP, de carácter más práctico, agrupa estas funciones en un número menor de capas (habitualmente cuatro) y es el modelo efectivamente implementado en el funcionamiento real de internet.",
  },
  {
    id: "ri-17",
    enunciado: "¿Qué diferencia existe entre las direcciones IPv4 e IPv6?",
    opciones: [
      "IPv4 utiliza direcciones de 32 bits, con un número limitado de combinaciones posibles ya prácticamente agotado; IPv6 utiliza direcciones de 128 bits, ofreciendo un número de direcciones disponibles muchísimo mayor, para hacer frente al crecimiento del número de dispositivos conectados a internet",
      "Son términos exactamente sinónimos, sin ninguna diferencia técnica",
      "IPv6 es una versión más antigua y ya en desuso frente a IPv4",
      "IPv4 permite un número mayor de direcciones que IPv6",
    ],
    correcta: 0,
    explicacion:
      "El protocolo IPv4 utiliza direcciones de 32 bits, lo que limita el número total de direcciones posibles (unos 4.300 millones), cifra que resulta ya insuficiente ante el enorme crecimiento del número de dispositivos conectados a internet; el protocolo IPv6, de implantación progresiva, utiliza direcciones de 128 bits, ofreciendo un número de direcciones disponibles extraordinariamente mayor, además de otras mejoras técnicas respecto de su predecesor.",
  },
  {
    id: "ri-18",
    enunciado: "¿Qué diferencia existe entre los protocolos de transporte TCP y UDP?",
    opciones: [
      "TCP (Transmission Control Protocol) es un protocolo orientado a la conexión, que garantiza la entrega ordenada y fiable de los datos mediante confirmaciones y retransmisiones; UDP (User Datagram Protocol) es un protocolo no orientado a la conexión, más rápido pero sin garantías de entrega ni de orden, adecuado para aplicaciones que priorizan la velocidad (como el streaming o los videojuegos en línea)",
      "Son términos exactamente sinónimos, sin ninguna diferencia técnica",
      "UDP siempre garantiza una entrega más fiable que TCP",
      "TCP solo puede usarse en redes inalámbricas, nunca en redes cableadas",
    ],
    correcta: 0,
    explicacion:
      "TCP (Transmission Control Protocol) es un protocolo de transporte orientado a la conexión, que garantiza la entrega ordenada y fiable de los datos mediante mecanismos de confirmación y retransmisión de paquetes perdidos; UDP (User Datagram Protocol) es un protocolo no orientado a la conexión, más rápido y con menor sobrecarga, pero sin garantías de entrega ni de orden de los paquetes, resultando adecuado para aplicaciones que priorizan la velocidad sobre la fiabilidad absoluta, como el streaming de vídeo o los videojuegos en línea.",
  },
  {
    id: "ri-19",
    enunciado: "¿Qué es una dirección MAC (Media Access Control) de un dispositivo de red?",
    opciones: [
      "Un identificador físico único, asignado por el fabricante a la tarjeta de red de un dispositivo, que lo distingue de forma unívoca dentro de una red local, a diferencia de la dirección IP, que puede cambiar según la red a la que se conecte",
      "Un sinónimo exacto de la dirección IP pública del dispositivo",
      "Una contraseña que el usuario debe introducir para conectarse a una red Wi-Fi",
      "Un tipo de virus informático que ataca a las tarjetas de red",
    ],
    correcta: 0,
    explicacion:
      "Una dirección MAC (Media Access Control) es un identificador físico único, asignado por el fabricante a la tarjeta de red de un dispositivo, que lo distingue de forma unívoca dentro de una red local (capa de enlace de datos), a diferencia de la dirección IP, que es un identificador de carácter lógico que puede variar según la red a la que el dispositivo se conecte en cada momento.",
  },
  {
    id: "ri-20",
    enunciado: "¿Qué función cumple un servidor «proxy» en una red informática?",
    opciones: [
      "Actuar como intermediario entre los dispositivos de una red y los servidores de internet a los que acceden, pudiendo emplearse para filtrar contenido, mejorar el rendimiento mediante el almacenamiento en caché, o incrementar la privacidad ocultando la dirección IP real del usuario",
      "Sustituir por completo al router de la red",
      "Un sinónimo exacto de un cortafuegos",
      "Un dispositivo exclusivo para la impresión de documentos en red",
    ],
    correcta: 0,
    explicacion:
      "Un servidor «proxy» actúa como intermediario entre los dispositivos de una red y los servidores de internet a los que acceden, pudiendo emplearse para diversas finalidades: filtrar determinados contenidos, mejorar el rendimiento mediante el almacenamiento en caché de contenidos frecuentemente solicitados, o incrementar la privacidad del usuario al ocultar su dirección IP real frente al servidor de destino.",
  },
  {
    id: "ri-21",
    enunciado: "¿En qué consiste un ataque de «hombre en el medio» (man-in-the-middle)?",
    opciones: [
      "Un ataque en el que el atacante se sitúa de forma encubierta entre dos partes que se comunican, interceptando, y en ocasiones alterando, la comunicación entre ellas sin que ninguna de las dos lo advierta",
      "Un ataque que solo puede realizarse físicamente cortando un cable de red",
      "Un sinónimo exacto de un ataque de denegación de servicio",
      "Un ataque que únicamente afecta a las comunicaciones por correo postal, no a las redes informáticas",
    ],
    correcta: 0,
    explicacion:
      "Un ataque de «hombre en el medio» (man-in-the-middle) consiste en que el atacante se sitúa de forma encubierta entre dos partes que se comunican (por ejemplo, un usuario y un servidor web), interceptando, y en ocasiones alterando, la comunicación entre ambas sin que ninguna de las dos lo advierta, lo que puede permitirle capturar credenciales, datos personales u otra información sensible transmitida.",
  },
  {
    id: "ri-22",
    enunciado: "¿Qué función cumplen los protocolos SSL/TLS en las comunicaciones de red?",
    opciones: [
      "Cifrar y autenticar las comunicaciones entre un cliente y un servidor, garantizando la confidencialidad e integridad de los datos transmitidos, siendo la base técnica del protocolo HTTPS",
      "Aumentar la velocidad de conexión de una red, sin ninguna relación con la seguridad",
      "Asignar direcciones IP a los dispositivos de una red, igual que el protocolo DHCP",
      "Traducir nombres de dominio en direcciones IP, igual que el protocolo DNS",
    ],
    correcta: 0,
    explicacion:
      "Los protocolos SSL (Secure Sockets Layer) y su evolución TLS (Transport Layer Security) cifran y autentican las comunicaciones entre un cliente y un servidor, garantizando la confidencialidad y la integridad de los datos transmitidos frente a posibles interceptaciones, constituyendo la base técnica del protocolo HTTPS ya analizado, y siendo ampliamente utilizados también en otros servicios que requieren comunicaciones seguras.",
  },
  {
    id: "ri-23",
    enunciado: "¿Para qué se utiliza tradicionalmente el protocolo FTP (File Transfer Protocol)?",
    opciones: [
      "Para la transferencia de archivos entre un cliente y un servidor a través de una red, permitiendo subir y descargar ficheros, si bien su versión original carece de cifrado, por lo que se recomiendan variantes seguras como SFTP o FTPS",
      "Exclusivamente para el envío de correo electrónico",
      "Para la resolución de nombres de dominio en direcciones IP",
      "Para la asignación automática de direcciones IP a los dispositivos de una red",
    ],
    correcta: 0,
    explicacion:
      "El protocolo FTP (File Transfer Protocol) se utiliza tradicionalmente para la transferencia de archivos entre un cliente y un servidor a través de una red, permitiendo subir y descargar ficheros; su versión original transmite los datos, incluidas las credenciales de acceso, sin cifrar, por lo que en contextos que exigen mayor seguridad se recomiendan variantes cifradas como SFTP (sobre SSH) o FTPS (sobre TLS).",
  },
  {
    id: "ri-24",
    enunciado: "¿Qué protocolos se emplean habitualmente en el envío y la recepción de correo electrónico?",
    opciones: [
      "SMTP (Simple Mail Transfer Protocol) para el envío de mensajes, y POP o IMAP para su recepción y consulta desde el servidor por parte del cliente de correo",
      "Únicamente el protocolo HTTP, sin ningún protocolo específico para el correo electrónico",
      "Únicamente el protocolo DNS, sin ningún otro protocolo implicado",
      "El protocolo DHCP, utilizado exclusivamente para el correo electrónico",
    ],
    correcta: 0,
    explicacion:
      "El envío de mensajes de correo electrónico se realiza habitualmente mediante el protocolo SMTP (Simple Mail Transfer Protocol), mientras que su recepción y consulta desde el servidor por parte del cliente de correo se realiza mediante los protocolos POP (que habitualmente descarga y elimina los mensajes del servidor) o IMAP (que mantiene los mensajes sincronizados en el servidor, permitiendo su consulta desde varios dispositivos).",
  },
  {
    id: "ri-25",
    enunciado: "¿Qué es la red Tor y qué finalidad persigue?",
    opciones: [
      "Una red de anonimización que encamina el tráfico de internet a través de múltiples nodos intermedios cifrados sucesivamente, dificultando el rastreo del origen de las comunicaciones, empleada tanto con fines legítimos de privacidad como, en ocasiones, para actividades ilícitas en la llamada «internet oscura» o «dark web»",
      "Un sinónimo exacto de una red privada virtual (VPN) convencional",
      "Un protocolo exclusivo para la transferencia de archivos de gran tamaño",
      "Un buscador de internet convencional, sin ninguna característica de anonimización",
    ],
    correcta: 0,
    explicacion:
      "La red Tor (The Onion Router) es una red de anonimización que encamina el tráfico de internet a través de múltiples nodos intermedios, cifrando la información en capas sucesivas (de ahí su nombre, «enrutamiento cebolla»), dificultando el rastreo del origen de las comunicaciones; se emplea tanto con fines legítimos de protección de la privacidad y la libertad de expresión, como, en ocasiones, para el acceso a la llamada «internet oscura» o «dark web», donde pueden desarrollarse también actividades ilícitas objeto de investigación policial.",
  },
  {
    id: "ri-26",
    enunciado: "¿Qué es el «subneteo» (subnetting) en la configuración de una red?",
    opciones: [
      "La técnica de dividir una red IP en subredes más pequeñas, mediante el uso de una máscara de subred, con el fin de organizar mejor los dispositivos, mejorar la seguridad y optimizar el uso del espacio de direcciones disponible",
      "Un sinónimo exacto de la asignación dinámica de direcciones IP mediante DHCP",
      "El proceso de cifrado de las comunicaciones de una red Wi-Fi",
      "Un tipo de ataque informático que satura una red con tráfico malicioso",
    ],
    correcta: 0,
    explicacion:
      "El «subneteo» (subnetting) es la técnica de dividir una red IP en subredes más pequeñas, mediante el uso de una máscara de subred que determina qué parte de la dirección IP identifica a la red y cuál al dispositivo concreto dentro de ella, con el fin de organizar mejor los dispositivos conectados, mejorar la seguridad al segmentar el tráfico, y optimizar el uso del espacio de direcciones disponible.",
  },
  {
    id: "ri-27",
    enunciado: "¿Qué es la «puerta de enlace» (gateway) de una red local?",
    opciones: [
      "El dispositivo, habitualmente el router, que conecta una red local con otras redes externas (como internet), encaminando el tráfico que debe salir o entrar de la red local hacia su destino correspondiente",
      "Un sinónimo exacto de un servidor DNS",
      "Un dispositivo exclusivamente destinado a la impresión de documentos en red",
      "Un programa antivirus instalado en cada equipo de la red",
    ],
    correcta: 0,
    explicacion:
      "La «puerta de enlace» (gateway) de una red local es el dispositivo, habitualmente el propio router, que conecta dicha red local con otras redes externas (como internet), encaminando el tráfico que debe salir de la red local hacia su destino correspondiente, o el que entra desde el exterior hacia el dispositivo de la red local al que va dirigido.",
  },
  {
    id: "ri-28",
    enunciado: "¿Qué representan los estándares de la familia IEEE 802.11 en las redes inalámbricas?",
    opciones: [
      "Los estándares técnicos que regulan el funcionamiento de las redes Wi-Fi, definiendo aspectos como la frecuencia de transmisión, la velocidad máxima teórica y el alcance de cada generación tecnológica (por ejemplo, 802.11n, 802.11ac o 802.11ax, esta última conocida comercialmente como Wi-Fi 6)",
      "Un sinónimo exacto de los protocolos de seguridad WPA2 y WPA3",
      "Un estándar exclusivo para redes cableadas de fibra óptica",
      "Un conjunto de normas jurídicas sobre protección de datos en redes inalámbricas",
    ],
    correcta: 0,
    explicacion:
      "Los estándares de la familia IEEE 802.11 son los estándares técnicos que regulan el funcionamiento de las redes inalámbricas Wi-Fi, definiendo aspectos como la banda de frecuencia utilizada, la velocidad máxima teórica y el alcance de cada generación tecnológica (por ejemplo, 802.11n, 802.11ac o el más reciente 802.11ax, conocido comercialmente como Wi-Fi 6), siendo un aspecto distinto, aunque relacionado, de los protocolos de seguridad y cifrado empleados en dichas redes, como WPA2 o WPA3.",
  },
  {
    id: "ri-29",
    enunciado: "¿Qué mejora de seguridad aporta el protocolo WPA3 frente a su predecesor WPA2 en las redes Wi-Fi?",
    opciones: [
      "Incorpora mecanismos de cifrado y de intercambio de claves más robustos, dificultando determinados ataques (como los de fuerza bruta o de diccionario contra la contraseña de la red) que resultaban posibles, en determinadas condiciones, contra WPA2",
      "WPA3 elimina por completo la necesidad de utilizar cualquier contraseña para conectarse a una red Wi-Fi",
      "WPA3 es un protocolo exclusivamente aplicable a las redes cableadas, no a las inalámbricas",
      "WPA3 es una versión anterior y menos segura que WPA2",
    ],
    correcta: 0,
    explicacion:
      "El protocolo de seguridad WPA3, sucesor de WPA2 en las redes Wi-Fi, incorpora mecanismos de cifrado y de intercambio de claves más robustos (como el protocolo SAE, Simultaneous Authentication of Equals), dificultando determinados ataques, como los de fuerza bruta o de diccionario contra la contraseña de la red, que resultaban posibles, bajo ciertas condiciones, contra su predecesor WPA2.",
  },
  {
    id: "ri-30",
    enunciado: "¿Qué diferencia existe entre el ancho de banda contratado y el rendimiento o «throughput» real de una conexión de red?",
    opciones: [
      "El ancho de banda contratado es la capacidad máxima teórica de transmisión de datos que ofrece el proveedor de servicios; el throughput real es la velocidad efectivamente alcanzada en la práctica, que puede ser inferior a la teórica por factores como la congestión de la red, la distancia, las interferencias o las limitaciones del propio dispositivo",
      "Son términos exactamente sinónimos, sin ninguna diferencia práctica",
      "El throughput real siempre es superior al ancho de banda contratado",
      "El ancho de banda contratado se mide exclusivamente en unidades de almacenamiento, como los gigabytes",
    ],
    correcta: 0,
    explicacion:
      "El ancho de banda contratado es la capacidad máxima teórica de transmisión de datos que ofrece el proveedor de servicios de internet; el rendimiento o «throughput» real es la velocidad efectivamente alcanzada en la práctica al transmitir datos, que puede resultar inferior a la teórica por factores como la congestión de la red, la distancia a los equipos de acceso, las interferencias en el caso de redes inalámbricas, o las limitaciones del propio dispositivo utilizado.",
  },
];
