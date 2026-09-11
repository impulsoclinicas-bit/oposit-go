import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "fso-01",
    enunciado: "¿Cómo se define un sistema operativo?",
    opciones: [
      "El software base que gestiona los recursos hardware y software de un equipo informático y proporciona servicios comunes a los programas de aplicación",
      "Un programa exclusivamente destinado a la navegación por internet",
      "Un componente físico del ordenador, como la placa base",
      "Un lenguaje de programación de alto nivel",
    ],
    correcta: 0,
    explicacion:
      "El sistema operativo es el software base que gestiona los recursos hardware (procesador, memoria, dispositivos de almacenamiento y periféricos) y software de un equipo informático, actuando como intermediario entre el usuario, las aplicaciones y el hardware, y proporcionando servicios comunes a los programas.",
  },
  {
    id: "fso-02",
    enunciado: "¿Cuáles son las funciones principales que desempeña un sistema operativo?",
    opciones: [
      "Gestión del procesador, gestión de memoria, gestión de dispositivos de entrada/salida, gestión del sistema de archivos y gestión de procesos",
      "Únicamente la reproducción de archivos multimedia",
      "Solo la conexión a redes sociales",
      "Exclusivamente el corrector ortográfico de los documentos",
    ],
    correcta: 0,
    explicacion:
      "Entre las funciones principales de un sistema operativo se encuentran la gestión del procesador (planificación de tareas), la gestión de memoria, la gestión de los dispositivos de entrada/salida, la gestión del sistema de archivos (organización y acceso a la información almacenada) y la gestión de procesos, además de ofrecer una interfaz de usuario.",
  },
  {
    id: "fso-03",
    enunciado: "¿Qué es un «proceso» en el contexto de un sistema operativo?",
    opciones: [
      "Una instancia de un programa en ejecución, con sus propios recursos asignados (memoria, registros, estado)",
      "Un archivo almacenado en el disco duro sin ejecutar",
      "Un tipo de virus informático",
      "Un componente físico del microprocesador",
    ],
    correcta: 0,
    explicacion:
      "Un proceso es una instancia de un programa en ejecución, a la que el sistema operativo asigna recursos propios —como memoria, registros de procesador y un estado de ejecución— y que gestiona de forma independiente de otros procesos en ejecución simultánea.",
  },
  {
    id: "fso-04",
    enunciado: "¿Qué diferencia existe entre un sistema operativo «monousuario» y uno «multiusuario»?",
    opciones: [
      "El sistema monousuario permite que solo una persona utilice el equipo en cada momento; el multiusuario permite que varios usuarios accedan simultáneamente a los recursos del sistema, cada uno con sus propias credenciales y permisos",
      "No existe ninguna diferencia entre ambos tipos de sistemas",
      "El sistema multiusuario solo puede ejecutarse en servidores sin conexión a red",
      "El sistema monousuario es exclusivo de los teléfonos móviles",
    ],
    correcta: 0,
    explicacion:
      "Un sistema operativo monousuario está diseñado para que un único usuario utilice el equipo en cada momento, mientras que un sistema multiusuario permite que varias personas accedan simultáneamente a los recursos del sistema, cada una identificada mediante sus propias credenciales y con sus permisos diferenciados.",
  },
  {
    id: "fso-05",
    enunciado: "¿Qué es la «memoria virtual» en un sistema operativo?",
    opciones: [
      "Una técnica de gestión de memoria que permite a los programas utilizar más memoria de la físicamente disponible, empleando espacio del disco de almacenamiento como extensión de la memoria RAM",
      "Un dispositivo de almacenamiento físico adicional instalado en el equipo",
      "Un tipo de memoria caché exclusiva del procesador",
      "Un sinónimo de memoria ROM",
    ],
    correcta: 0,
    explicacion:
      "La memoria virtual es una técnica de gestión de memoria mediante la cual el sistema operativo permite a los procesos utilizar un espacio de direcciones mayor que la memoria física (RAM) realmente disponible, empleando una parte del almacenamiento en disco como extensión de dicha memoria cuando es necesario.",
  },
  {
    id: "fso-06",
    enunciado: "¿Qué son los «permisos» de un sistema de archivos y para qué sirven?",
    opciones: [
      "Reglas que determinan qué usuarios o procesos pueden leer, escribir o ejecutar un determinado archivo o directorio, siendo un mecanismo básico de control de acceso y seguridad",
      "Un sinónimo exacto de contraseña de usuario",
      "Un componente exclusivamente decorativo de la interfaz gráfica",
      "Un tipo de fichero de configuración sin relación con la seguridad",
    ],
    correcta: 0,
    explicacion:
      "Los permisos de un sistema de archivos son reglas asociadas a cada archivo o directorio que determinan qué usuarios, grupos o procesos pueden leerlo, modificarlo o ejecutarlo, constituyendo uno de los mecanismos básicos de control de acceso y seguridad de un sistema operativo.",
  },
  {
    id: "fso-07",
    enunciado: "¿Qué diferencia existe entre software «propietario» y software «libre» o de «código abierto»?",
    opciones: [
      "El software propietario restringe el acceso a su código fuente y su redistribución conforme a licencias privativas; el software libre permite el acceso al código fuente y otorga libertades de uso, estudio, modificación y redistribución",
      "El software libre siempre es de pago, y el propietario siempre es gratuito",
      "No existe diferencia legal alguna entre ambos tipos de licencias",
      "El software propietario nunca puede ejecutarse en ordenadores personales",
    ],
    correcta: 0,
    explicacion:
      "El software propietario se distribuye bajo licencias que restringen el acceso a su código fuente y limitan su modificación o redistribución, mientras que el software libre o de código abierto (siguiendo las cuatro libertades definidas por la Free Software Foundation) permite ejecutar, estudiar, modificar y redistribuir el programa y su código fuente, con independencia de que pueda o no tener coste económico asociado.",
  },
  {
    id: "fso-08",
    enunciado: "¿Qué papel desempeña el «kernel» o núcleo en un sistema operativo?",
    opciones: [
      "Es el componente central que gestiona directamente los recursos del hardware (procesador, memoria, dispositivos) y ofrece los servicios básicos sobre los que se construyen el resto de funciones del sistema operativo",
      "Es un programa de usuario final, como un procesador de texto",
      "Es un tipo de virus informático diseñado para dañar el hardware",
      "Es un sinónimo exacto de sistema de archivos",
    ],
    correcta: 0,
    explicacion:
      "El kernel o núcleo es el componente central del sistema operativo, encargado de gestionar directamente los recursos del hardware —procesador, memoria y dispositivos— y de ofrecer los servicios básicos (gestión de procesos, comunicación, seguridad) sobre los que se construye el resto de funcionalidades del sistema.",
  },
  {
    id: "fso-09",
    enunciado: "¿Qué es una «interrupción» (interrupt) en el funcionamiento de un sistema operativo?",
    opciones: [
      "Una señal que se genera cuando ocurre un evento que requiere la atención inmediata del procesador (por ejemplo, la pulsación de una tecla o la finalización de una operación de un dispositivo), suspendiendo temporalmente la ejecución en curso para atenderlo",
      "Un tipo de virus informático que detiene por completo el sistema",
      "Un sinónimo exacto de apagado del equipo",
      "Un mensaje de error que aparece exclusivamente al instalar un programa",
    ],
    correcta: 0,
    explicacion:
      "Una interrupción es una señal generada por el hardware o el software cuando ocurre un evento que requiere la atención inmediata del procesador —como la pulsación de una tecla, la llegada de un paquete de red o la finalización de una operación de un dispositivo—, lo que hace que el sistema operativo suspenda temporalmente la ejecución en curso para atender dicho evento antes de reanudarla.",
  },
  {
    id: "fso-10",
    enunciado: "¿Qué estados puede atravesar un proceso a lo largo de su ciclo de vida en un sistema operativo multitarea?",
    opciones: [
      "Fundamentalmente los estados de ejecución (utilizando el procesador), listo (esperando a que se le asigne el procesador) y bloqueado (a la espera de un evento o recurso externo)",
      "Únicamente los estados de encendido y apagado",
      "Solo los estados de instalado y desinstalado",
      "Exclusivamente los estados visible e invisible en la interfaz gráfica",
    ],
    correcta: 0,
    explicacion:
      "En un sistema operativo multitarea, un proceso puede encontrarse fundamentalmente en tres estados: en ejecución, cuando está utilizando activamente el procesador; listo, cuando está preparado para ejecutarse pero espera a que el planificador le asigne tiempo de procesador; y bloqueado, cuando está a la espera de que se complete una operación de entrada/salida o de que quede disponible otro recurso necesario.",
  },
  {
    id: "fso-11",
    enunciado: "¿Qué diferencia existe entre un «proceso» y un «hilo» (thread) de ejecución?",
    opciones: [
      "Un proceso es una instancia de un programa con su propio espacio de memoria independiente; un hilo es una unidad de ejecución más ligera dentro de un proceso, que comparte el espacio de memoria y otros recursos con los demás hilos del mismo proceso",
      "Son términos completamente sinónimos sin ninguna diferencia técnica",
      "Un hilo siempre requiere más memoria que un proceso completo",
      "Un proceso solo puede tener un único hilo de ejecución en cualquier sistema operativo",
    ],
    correcta: 0,
    explicacion:
      "Un proceso es una instancia de un programa en ejecución con su propio espacio de memoria y recursos asignados de forma independiente, mientras que un hilo (thread) es una unidad de ejecución más ligera dentro de un proceso, que comparte el espacio de memoria y otros recursos con los demás hilos del mismo proceso, permitiendo la ejecución concurrente de varias tareas dentro de un mismo programa con menor sobrecarga que crear procesos independientes.",
  },
  {
    id: "fso-12",
    enunciado: "¿Qué es un «controlador de dispositivo» (driver) en un sistema operativo?",
    opciones: [
      "Un programa específico que permite al sistema operativo comunicarse y gestionar correctamente un dispositivo de hardware concreto, traduciendo las instrucciones genéricas del sistema a las particulares de dicho dispositivo",
      "Un componente exclusivamente decorativo de la interfaz gráfica",
      "Un sinónimo exacto de sistema de archivos",
      "Un tipo de virus informático que ataca a los periféricos del equipo",
    ],
    correcta: 0,
    explicacion:
      "Un controlador de dispositivo o driver es un programa específico que permite al sistema operativo comunicarse correctamente con un dispositivo de hardware concreto (una impresora, una tarjeta gráfica, un periférico), traduciendo las instrucciones genéricas del sistema operativo a las órdenes particulares que dicho dispositivo es capaz de entender y ejecutar.",
  },
  {
    id: "fso-13",
    enunciado: "¿Qué caracteriza a un «sistema operativo en tiempo real»?",
    opciones: [
      "Un sistema diseñado para garantizar que determinadas tareas se completen dentro de un plazo de tiempo estrictamente determinado, siendo habitual en aplicaciones críticas como el control industrial o los sistemas embebidos",
      "Un sistema que muestra siempre la hora y la fecha actuales en pantalla",
      "Un sinónimo exacto de sistema operativo multiusuario",
      "Un sistema que solo puede ejecutar un único programa a la vez, sin ninguna otra característica especial",
    ],
    correcta: 0,
    explicacion:
      "Un sistema operativo en tiempo real es aquel diseñado para garantizar que determinadas tareas críticas se completen dentro de un plazo de tiempo estrictamente determinado y predecible, siendo especialmente habitual en aplicaciones como el control de procesos industriales, los sistemas embebidos, la aviónica o los dispositivos médicos, donde un retraso en la respuesta puede tener consecuencias graves.",
  },
  {
    id: "fso-14",
    enunciado: "¿Qué son las «actualizaciones de seguridad» (parches) de un sistema operativo y por qué son relevantes?",
    opciones: [
      "Modificaciones publicadas periódicamente por el fabricante para corregir vulnerabilidades detectadas en el sistema, siendo fundamentales para reducir el riesgo de que dichas vulnerabilidades sean explotadas por atacantes",
      "Programas exclusivamente destinados a mejorar el rendimiento gráfico del equipo, sin relación con la seguridad",
      "Un sinónimo de copia de seguridad de los datos del usuario",
      "Actualizaciones que solo afectan a la apariencia visual del sistema",
    ],
    correcta: 0,
    explicacion:
      "Las actualizaciones de seguridad o parches son modificaciones publicadas periódicamente por el fabricante del sistema operativo para corregir vulnerabilidades detectadas en él, resultando fundamentales para la seguridad informática, ya que muchas vulnerabilidades conocidas y no corregidas son aprovechadas por atacantes para comprometer sistemas que no han aplicado dichas actualizaciones.",
  },
  {
    id: "fso-15",
    enunciado: "¿Qué es la «virtualización» en el ámbito de los sistemas operativos?",
    opciones: [
      "Una tecnología que permite ejecutar uno o varios sistemas operativos (máquinas virtuales) de forma simultánea e independiente sobre un mismo equipo físico, compartiendo sus recursos de hardware",
      "Un sinónimo exacto de memoria virtual",
      "Un tipo de interfaz gráfica tridimensional",
      "Una técnica exclusiva de los dispositivos móviles",
    ],
    correcta: 0,
    explicacion:
      "La virtualización es una tecnología que permite ejecutar uno o varios sistemas operativos, denominados máquinas virtuales, de forma simultánea e independiente sobre un mismo equipo físico, compartiendo de manera gestionada sus recursos de hardware (procesador, memoria, almacenamiento), lo que resulta especialmente útil para el aislamiento de entornos, las pruebas de software o la optimización del uso de servidores.",
  },
  {
    id: "fso-16",
    enunciado: "¿Qué es un «sistema de archivos» (file system) en un sistema operativo?",
    opciones: [
      "El método y la estructura de datos que utiliza un sistema operativo para organizar, nombrar, almacenar y recuperar los archivos en un dispositivo de almacenamiento, como el disco duro o una memoria externa",
      "Un sinónimo exacto del kernel del sistema operativo",
      "Un programa exclusivamente dedicado a la navegación por internet",
      "Un tipo de memoria RAM de alta velocidad",
    ],
    correcta: 0,
    explicacion:
      "Un sistema de archivos (file system) es el método y la estructura de datos que utiliza un sistema operativo para organizar, nombrar, almacenar y recuperar los archivos en un dispositivo de almacenamiento, existiendo distintos sistemas de archivos (como FAT32, NTFS o ext4) con características diferenciadas en cuanto a rendimiento, seguridad y compatibilidad entre sistemas operativos.",
  },
  {
    id: "fso-17",
    enunciado: "¿Qué función cumple el «planificador de procesos» (scheduler) de un sistema operativo?",
    opciones: [
      "Decidir, conforme a determinados algoritmos y criterios de prioridad, qué proceso o hilo de entre los que están en espera debe recibir a continuación el tiempo de uso del procesador",
      "Gestionar exclusivamente la conexión del equipo a una red inalámbrica",
      "Almacenar de forma permanente los archivos del usuario",
      "Traducir el código fuente de un programa a lenguaje máquina",
    ],
    correcta: 0,
    explicacion:
      "El planificador de procesos (scheduler) es el componente del sistema operativo encargado de decidir, conforme a determinados algoritmos y criterios de prioridad, qué proceso o hilo de entre los que se encuentran en espera debe recibir a continuación el tiempo de uso del procesador, permitiendo así la sensación de ejecución simultánea de múltiples tareas propia de un sistema multitarea.",
  },
  {
    id: "fso-18",
    enunciado: "¿Qué es un «interbloqueo» o «deadlock» en el funcionamiento de un sistema operativo?",
    opciones: [
      "Una situación en la que dos o más procesos quedan bloqueados de forma indefinida, cada uno esperando a que el otro libere un recurso que necesita, sin que ninguno de ellos pueda continuar su ejecución",
      "Un tipo de virus informático que bloquea el arranque del sistema",
      "Un sinónimo exacto de la memoria virtual",
      "Un mecanismo de seguridad que bloquea intencionadamente el acceso no autorizado a un archivo",
    ],
    correcta: 0,
    explicacion:
      "Un interbloqueo o «deadlock» es una situación anómala en la que dos o más procesos quedan bloqueados de forma indefinida, cada uno esperando a que el otro libere un recurso que necesita (memoria, un archivo, un dispositivo), sin que ninguno de ellos pueda continuar su ejecución, exigiendo el sistema operativo mecanismos de prevención, detección o recuperación frente a esta situación.",
  },
  {
    id: "fso-19",
    enunciado: "¿Qué función cumple una «caché» o «buffer» en el funcionamiento de un sistema informático?",
    opciones: [
      "Almacenar temporalmente datos de uso frecuente o en tránsito, en una memoria de acceso más rápido que el dispositivo de almacenamiento principal, con el fin de mejorar el rendimiento general del sistema",
      "Eliminar de forma permanente los archivos que el usuario ya no necesita",
      "Un sinónimo exacto del sistema de archivos",
      "Cifrar de forma automática todos los datos almacenados en el disco duro",
    ],
    correcta: 0,
    explicacion:
      "Una caché o «buffer» es una zona de memoria de acceso rápido que almacena temporalmente datos de uso frecuente o en tránsito entre distintos componentes del sistema, con el fin de reducir el tiempo de acceso a dichos datos y mejorar así el rendimiento general del sistema informático, evitando accesos repetidos a dispositivos de almacenamiento más lentos.",
  },
  {
    id: "fso-20",
    enunciado: "¿Qué función cumple la BIOS o la UEFI en el proceso de arranque (boot) de un equipo informático?",
    opciones: [
      "Realizar las comprobaciones iniciales del hardware del equipo (autodiagnóstico de arranque) y localizar y cargar el sistema operativo instalado, antes de transferirle el control del equipo",
      "Sustituir por completo al sistema operativo durante todo el funcionamiento del equipo",
      "Gestionar exclusivamente la conexión a internet del equipo",
      "Almacenar de forma permanente los documentos del usuario",
    ],
    correcta: 0,
    explicacion:
      "La BIOS (Basic Input/Output System) o su sucesora más moderna, la UEFI (Unified Extensible Firmware Interface), es el firmware que se ejecuta al encender un equipo informático, realizando las comprobaciones iniciales del hardware (autodiagnóstico de arranque o POST) y localizando y cargando el sistema operativo instalado, antes de transferirle el control completo del equipo.",
  },
  {
    id: "fso-21",
    enunciado: "¿Qué diferencia existe entre una interfaz de línea de comandos (shell) y una interfaz gráfica de usuario (GUI)?",
    opciones: [
      "La interfaz de línea de comandos permite interactuar con el sistema operativo mediante la escritura de órdenes textuales; la interfaz gráfica de usuario permite hacerlo mediante elementos visuales (ventanas, iconos, menús) manipulados habitualmente con el ratón",
      "Son términos exactamente sinónimos, sin ninguna diferencia funcional",
      "La interfaz gráfica solo existe en los sistemas operativos para dispositivos móviles",
      "La interfaz de línea de comandos ha desaparecido por completo de los sistemas operativos actuales",
    ],
    correcta: 0,
    explicacion:
      "La interfaz de línea de comandos o «shell» permite interactuar con el sistema operativo mediante la escritura de órdenes textuales, ofreciendo habitualmente mayor control y posibilidades de automatización; la interfaz gráfica de usuario (GUI) permite interactuar mediante elementos visuales (ventanas, iconos, menús) manipulados típicamente con el ratón o la pantalla táctil, resultando generalmente más intuitiva para el usuario no técnico, coexistiendo ambas en la mayoría de los sistemas operativos actuales.",
  },
  {
    id: "fso-22",
    enunciado: "¿Qué es una «distribución» (distro) en el ecosistema del sistema operativo Linux?",
    opciones: [
      "Un conjunto formado por el núcleo (kernel) de Linux junto con un conjunto específico de programas, utilidades y configuraciones adicionales, empaquetados y distribuidos de forma conjunta por una organización o comunidad concreta (como Ubuntu, Debian o Fedora)",
      "Un sinónimo exacto del sistema operativo Windows",
      "Un tipo de virus informático específico de los sistemas Linux",
      "Un dispositivo físico exclusivo para la instalación de sistemas operativos de código abierto",
    ],
    correcta: 0,
    explicacion:
      "Una «distribución» o «distro» de Linux es un conjunto formado por el núcleo (kernel) de Linux junto con un conjunto específico de programas, utilidades, gestores de paquetes y configuraciones adicionales, empaquetados y distribuidos de forma conjunta por una organización o comunidad concreta (como Ubuntu, Debian, Fedora o Red Hat), existiendo numerosas distribuciones adaptadas a distintos usos y perfiles de usuario, todas ellas basadas en el mismo núcleo de código abierto.",
  },
  {
    id: "fso-23",
    enunciado: "¿Qué se entiende por «multitarea» (multitasking) en un sistema operativo moderno?",
    opciones: [
      "La capacidad del sistema operativo para gestionar la ejecución aparentemente simultánea de varios procesos o programas, repartiendo entre ellos el tiempo de uso del procesador mediante el planificador de procesos",
      "La capacidad de un equipo para tener instalados varios sistemas operativos distintos, sin ejecutarse simultáneamente",
      "Un sinónimo exacto de la virtualización",
      "Una característica exclusiva de los superordenadores, no disponible en equipos personales",
    ],
    correcta: 0,
    explicacion:
      "La multitarea (multitasking) es la capacidad del sistema operativo para gestionar la ejecución aparentemente simultánea de varios procesos o programas, repartiendo entre ellos el tiempo de uso del procesador mediante el planificador de procesos, de modo que, en un procesador con un único núcleo, en realidad se van alternando rápidamente los distintos procesos, generando la sensación de simultaneidad para el usuario.",
  },
  {
    id: "fso-24",
    enunciado: "¿Qué es el «registro» (Registry) en los sistemas operativos Windows?",
    opciones: [
      "Una base de datos jerárquica interna del sistema operativo que almacena la configuración de bajo nivel del sistema, de los programas instalados y de las preferencias de los usuarios",
      "Un sinónimo exacto del sistema de archivos",
      "Un programa antivirus incluido por defecto en Windows",
      "Un listado público de los usuarios registrados en el equipo, accesible por cualquier persona",
    ],
    correcta: 0,
    explicacion:
      "El registro (Registry) de los sistemas operativos Windows es una base de datos jerárquica interna que almacena la configuración de bajo nivel del sistema operativo, de los programas instalados y de las preferencias de los distintos usuarios del equipo, siendo un elemento especialmente sensible cuya manipulación incorrecta puede afectar gravemente a la estabilidad y el funcionamiento del sistema.",
  },
  {
    id: "fso-25",
    enunciado: "¿Qué diferencia existe entre el «modo núcleo» (kernel mode) y el «modo usuario» (user mode) de ejecución en un sistema operativo?",
    opciones: [
      "En modo núcleo se ejecutan el propio kernel y determinados componentes críticos con acceso completo al hardware y a todos los recursos del sistema; en modo usuario se ejecutan las aplicaciones ordinarias, con acceso restringido, debiendo solicitar al sistema operativo, a través de llamadas al sistema, las operaciones que requieran privilegios superiores",
      "Son términos exactamente sinónimos, sin ninguna diferencia relevante",
      "El modo usuario tiene siempre más privilegios que el modo núcleo",
      "Esta distinción solo existe en los sistemas operativos para servidores, no en los de escritorio",
    ],
    correcta: 0,
    explicacion:
      "En «modo núcleo» (kernel mode) se ejecutan el propio núcleo del sistema operativo y determinados componentes críticos, con acceso completo al hardware y a todos los recursos del sistema; en «modo usuario» (user mode) se ejecutan las aplicaciones ordinarias, con un acceso restringido y controlado, debiendo solicitar al sistema operativo, a través de las llamadas al sistema, las operaciones que requieran privilegios superiores, siendo esta separación un mecanismo fundamental de estabilidad y seguridad del sistema.",
  },
  {
    id: "fso-26",
    enunciado: "¿Qué es la «paginación» (paging) como técnica de gestión de la memoria en un sistema operativo?",
    opciones: [
      "Una técnica que divide la memoria en bloques de tamaño fijo (páginas), permitiendo cargar en la memoria física solo las páginas de un proceso que se necesitan en cada momento, y trasladando al disco las que no se usan, lo que hace posible la implementación de la memoria virtual",
      "Un sinónimo exacto de la impresión de documentos en papel",
      "Un proceso que elimina de forma permanente todos los datos de la memoria RAM al apagar el equipo",
      "Una técnica exclusiva de los sistemas operativos para dispositivos móviles",
    ],
    correcta: 0,
    explicacion:
      "La paginación (paging) es una técnica de gestión de la memoria que divide tanto la memoria física como el espacio de direcciones de cada proceso en bloques de tamaño fijo llamados páginas, permitiendo cargar en la memoria física solo las páginas que un proceso necesita en cada momento y trasladar al disco (memoria virtual o «swap») las que no se están utilizando, lo que permite ejecutar programas cuyo tamaño conjunto supera la memoria RAM físicamente disponible.",
  },
  {
    id: "fso-27",
    enunciado: "¿Por qué son importantes las copias de seguridad (backup) en relación con el sistema operativo y los datos de un usuario?",
    opciones: [
      "Porque permiten recuperar la información y, en su caso, la configuración del sistema ante pérdidas de datos causadas por fallos de hardware, errores humanos, ataques de ransomware u otros incidentes, minimizando el impacto de dichos sucesos",
      "Porque sustituyen por completo la necesidad de un sistema operativo instalado en el equipo",
      "Porque eliminan automáticamente cualquier virus presente en el sistema",
      "Porque son obligatorias exclusivamente para los sistemas operativos de código abierto",
    ],
    correcta: 0,
    explicacion:
      "Las copias de seguridad (backup) permiten recuperar la información y, en determinados casos, la configuración del sistema, ante pérdidas de datos causadas por fallos de hardware, errores humanos, ataques de ransomware u otros incidentes de seguridad, minimizando el impacto de dichos sucesos y constituyendo una de las medidas básicas de protección de la información recomendadas en cualquier política de seguridad informática.",
  },
  {
    id: "fso-28",
    enunciado: "¿Qué relación existe entre un programa antivirus y el sistema operativo de un equipo?",
    opciones: [
      "El antivirus es un software (a menudo integrado ya en el propio sistema operativo, o instalado adicionalmente) que analiza archivos, procesos y comportamientos del sistema para detectar, bloquear y eliminar programas maliciosos, complementando las medidas de seguridad propias del sistema operativo",
      "El antivirus sustituye por completo al sistema operativo, funcionando de forma independiente de él",
      "El sistema operativo nunca necesita ningún tipo de protección antivirus",
      "Un antivirus es un componente exclusivo del hardware del equipo, no del software",
    ],
    correcta: 0,
    explicacion:
      "Un programa antivirus es un software, a menudo integrado ya en el propio sistema operativo o instalado adicionalmente por el usuario, que analiza archivos, procesos y comportamientos del sistema para detectar, bloquear y eliminar programas maliciosos (virus, troyanos, ransomware, entre otros), complementando así las medidas de seguridad propias del sistema operativo, sin sustituir la necesidad de mantenerlo actualizado ni de aplicar buenas prácticas de uso.",
  },
  {
    id: "fso-29",
    enunciado: "¿Qué riesgo de seguridad implica que un sistema operativo alcance su «fin de soporte» (end of life)?",
    opciones: [
      "Deja de recibir actualizaciones de seguridad por parte del fabricante, por lo que las vulnerabilidades que se descubran a partir de ese momento ya no se corrigen, aumentando significativamente el riesgo de que el equipo sea comprometido por un atacante",
      "El equipo deja de funcionar físicamente de forma inmediata",
      "El sistema operativo se vuelve automáticamente más seguro al dejar de recibir actualizaciones",
      "No existe ningún riesgo relevante asociado al fin de soporte de un sistema operativo",
    ],
    correcta: 0,
    explicacion:
      "Cuando un sistema operativo alcanza su «fin de soporte» (end of life), el fabricante deja de publicar actualizaciones de seguridad para él, por lo que las vulnerabilidades que se descubran a partir de ese momento ya no se corrigen, aumentando significativamente el riesgo de que un equipo que siga utilizando ese sistema sea comprometido por un atacante, lo que hace recomendable actualizar a una versión con soporte activo.",
  },
  {
    id: "fso-30",
    enunciado: "¿Qué utilidad tienen los «registros» o «logs» del sistema operativo desde el punto de vista de la seguridad y la investigación policial?",
    opciones: [
      "Los logs registran de forma cronológica eventos relevantes del funcionamiento del sistema (inicios de sesión, errores, accesos, ejecución de determinados programas), pudiendo constituir una fuente de evidencia digital de gran utilidad en la investigación de incidentes de seguridad o de delitos informáticos",
      "Son archivos que solo contienen información sobre el hardware del equipo, sin ninguna relevancia para la seguridad",
      "Se eliminan automáticamente cada segundo, sin dejar ningún rastro utilizable",
      "Solo existen en los sistemas operativos para servidores, no en los equipos de uso personal",
    ],
    correcta: 0,
    explicacion:
      "Los registros o «logs» del sistema operativo registran de forma cronológica eventos relevantes de su funcionamiento (inicios y cierres de sesión, errores, accesos a archivos o recursos, ejecución de determinados programas), pudiendo constituir una fuente relevante de evidencia digital en la investigación de incidentes de seguridad informática o de delitos cometidos por medios tecnológicos, siempre que se recopilen y preserven conforme a las garantías exigidas por la cadena de custodia.",
  },
];
