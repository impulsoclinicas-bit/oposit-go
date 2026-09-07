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
];
