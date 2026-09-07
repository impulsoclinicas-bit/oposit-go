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
];
