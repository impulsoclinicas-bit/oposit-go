import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Concepto y funciones del sistema operativo",
      puntos: [
        "Software base que gestiona los recursos hardware y software de un equipo, actuando de intermediario entre el usuario, las aplicaciones y el hardware.",
        "Funciones principales: gestión del procesador, gestión de memoria, gestión de dispositivos de entrada/salida, gestión del sistema de archivos, gestión de procesos e interfaz de usuario.",
        "Kernel o núcleo: componente central que gestiona directamente el hardware y ofrece los servicios básicos del sistema.",
      ],
    },
    {
      titulo: "Gestión de procesos y memoria",
      puntos: [
        "Proceso: instancia de un programa en ejecución, con recursos propios asignados (memoria, registros, estado).",
        "Planificación de procesos: asignación del tiempo de procesador entre los distintos procesos en ejecución.",
        "Memoria virtual: técnica que permite usar más memoria de la físicamente disponible, empleando espacio de disco como extensión de la RAM.",
      ],
    },
    {
      titulo: "Clasificación de sistemas operativos",
      puntos: [
        "Monousuario frente a multiusuario: según permitan el acceso de una o varias personas simultáneamente.",
        "Monotarea frente a multitarea: según permitan ejecutar uno o varios procesos de forma simultánea o concurrente.",
        "Principales familias: Windows, sistemas basados en Unix/Linux, macOS, y sistemas móviles (Android, iOS).",
      ],
    },
    {
      titulo: "Sistema de archivos y seguridad",
      puntos: [
        "Sistema de archivos: estructura que organiza y da acceso a la información almacenada en los dispositivos.",
        "Permisos de archivos: reglas de lectura, escritura y ejecución asociadas a usuarios, grupos o procesos; mecanismo básico de control de acceso.",
        "Autenticación de usuarios (credenciales) como primera barrera de seguridad del sistema operativo.",
      ],
    },
    {
      titulo: "Modelos de licencia de software",
      puntos: [
        "Software propietario: restringe el acceso al código fuente y su modificación o redistribución.",
        "Software libre o de código abierto: permite ejecutar, estudiar, modificar y redistribuir el programa y su código fuente (las «cuatro libertades» de la Free Software Foundation), con independencia de su coste económico.",
      ],
    },
  ],
};
