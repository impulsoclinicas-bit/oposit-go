import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Naturaleza y composición (arts. 66-69)",
      puntos: [
        "Las Cortes Generales representan al pueblo español y están formadas por el Congreso de los Diputados y el Senado.",
        "Ejercen la potestad legislativa del Estado, aprueban sus presupuestos, controlan la acción del Gobierno y tienen las demás competencias que les atribuye la Constitución.",
        "Son inviolables.",
        "Congreso: entre 300 y 400 diputados (actualmente 350), elegidos por sufragio universal, libre, igual, directo y secreto, mediante listas cerradas y sistema proporcional (regla D'Hondt), circunscripción la provincia.",
        "Senado: Cámara de representación territorial. Senadores electos (4 por provincia, más los de las islas y Ceuta y Melilla) y senadores designados por las Comunidades Autónomas (1 fijo + 1 más por cada millón de habitantes).",
      ],
    },
    {
      titulo: "Mandato, inviolabilidad e inmunidad (arts. 66-67, 71)",
      puntos: [
        "Mandato de 4 años (ambas Cámaras).",
        "Nadie puede ser miembro de las dos Cámaras simultáneamente ni acumular acta de una Asamblea de Comunidad Autónoma con la de diputado del Congreso.",
        "Los Diputados y Senadores no están ligados por mandato imperativo (representan a la nación, no a quien los eligió).",
        "Gozan de inviolabilidad por las opiniones manifestadas en el ejercicio de sus funciones, e inmunidad: solo pueden ser detenidos en caso de flagrante delito, y no pueden ser inculpados ni procesados sin la previa autorización (suplicatorio) de la Cámara respectiva.",
      ],
    },
    {
      titulo: "Funcionamiento y funciones",
      puntos: [
        "Funcionan en Pleno y en Comisiones; se reúnen en dos periodos ordinarios de sesiones al año (septiembre-diciembre y febrero-junio), pudiendo reunirse en sesiones extraordinarias.",
        "Función legislativa: iniciativa (Gobierno mediante proyectos de ley, Congreso y Senado mediante proposiciones de ley, y la iniciativa popular); tramitación en el Congreso y después en el Senado, que puede vetar (por mayoría absoluta, superable por el Congreso) o introducir enmiendas (que el Congreso acepta o rechaza por mayoría simple).",
        "Función de control al Gobierno: preguntas e interpelaciones, moción de censura (constructiva, exige la propuesta de un candidato alternativo, aprobada por mayoría absoluta del Congreso), y cuestión de confianza (planteada por el Presidente del Gobierno, se entiende otorgada por mayoría simple).",
        "Aprobación de los Presupuestos Generales del Estado, autorización de tratados internacionales, y otras competencias (autorizar referendos, aprobar Estatutos de Autonomía).",
      ],
    },
    {
      titulo: "Disolución de las Cortes",
      puntos: [
        "El Rey disuelve las Cortes Generales, a propuesta del Presidente del Gobierno, previa deliberación del Consejo de Ministros, bajo su exclusiva responsabilidad.",
        "También se produce disolución automática si no se logra la investidura de un Presidente del Gobierno en el plazo de dos meses desde la primera votación.",
        "No cabe la disolución mientras esté en trámite una moción de censura, ni antes de que transcurra un año desde la anterior disolución, ni durante la vigencia de los estados de alarma, excepción o sitio.",
      ],
    },
  ],
};
