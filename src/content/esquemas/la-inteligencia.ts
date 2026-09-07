import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Concepto de inteligencia",
      puntos: [
        "Producto resultante de la recogida, evaluación, análisis e interpretación de información, orientado a apoyar la toma de decisiones en materia de seguridad, defensa o persecución del delito.",
        "Diferencia información/inteligencia: la información son datos en bruto; la inteligencia añade valor mediante su procesamiento y análisis.",
      ],
    },
    {
      titulo: "El ciclo de inteligencia",
      puntos: [
        "Dirección o planificación: determinación de las necesidades de información.",
        "Obtención: recogida de datos a través de las distintas fuentes disponibles.",
        "Elaboración o análisis: evaluación, contraste e interpretación de la información para producir inteligencia.",
        "Difusión: traslado del producto final a los destinatarios que deben tomar decisiones.",
      ],
    },
    {
      titulo: "Fuentes de obtención de inteligencia",
      puntos: [
        "OSINT (Open Source Intelligence): información disponible públicamente y de acceso lícito (medios de comunicación, redes sociales, registros públicos).",
        "HUMINT (Human Intelligence): inteligencia obtenida de fuentes humanas.",
        "SIGINT (Signals Intelligence): inteligencia obtenida de la interceptación de comunicaciones y señales.",
      ],
    },
    {
      titulo: "Análisis de inteligencia criminal",
      puntos: [
        "Identificación de patrones, tendencias, relaciones y vínculos entre datos sobre actividades delictivas (personas, grupos, modus operandi).",
        "Finalidad preventiva y operativa: apoyo a la prevención, investigación y persecución del delito, con especial relevancia frente al terrorismo y el crimen organizado.",
      ],
    },
    {
      titulo: "Marco institucional en España",
      puntos: [
        "Centro Nacional de Inteligencia (CNI), regulado por la Ley 11/2002, adscrito al Ministerio de la Presidencia: facilita al Gobierno informaciones y análisis para prevenir riesgos y amenazas a la seguridad, defensa e intereses de España.",
        "Contrainteligencia: actividades orientadas a detectar, prevenir y neutralizar el espionaje, el sabotaje o la infiltración de actores hostiles.",
      ],
    },
  ],
};
