import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Principio rector: la seguridad prevalece sobre la rapidez",
      puntos: [
        "La prioridad de paso y las exenciones normativas del vehículo prioritario (art. 68 RGC) no eliminan el deber de conducir con seguridad.",
        "Un accidente durante el desplazamiento impide completar el servicio urgente y genera nuevas víctimas, agravando la situación que se pretendía atender.",
      ],
    },
    {
      titulo: "Conducción anticipativa y exploración visual",
      puntos: [
        "Exploración constante del entorno: cruces, pasos de peatones, vehículos que puedan invadir el carril, colegios y zonas de alta afluencia.",
        "No debe presuponerse que otros conductores han percibido la señal acústica o luminosa (aislamiento acústico del vehículo, música, distracción); reducir la velocidad de forma preventiva en puntos de conflicto.",
        "Antes de rebasar una intersección con prioridad en contra o un semáforo en rojo: reducir sensiblemente la velocidad o detenerse, comprobando visualmente que los demás usuarios han detenido su marcha.",
      ],
    },
    {
      titulo: "Gestión de la velocidad y distancia de seguridad",
      puntos: [
        "La distancia de frenado crece de forma no lineal con la velocidad: a mayor velocidad de emergencia, mayor distancia de seguridad y margen de reacción necesarios.",
        "En curvas: reducir la velocidad antes de entrar (nunca frenar bruscamente dentro de la curva), aprovechar el ancho disponible de la vía y acelerar de forma progresiva a la salida.",
      ],
    },
    {
      titulo: "Factor humano: estado psicofísico del conductor",
      puntos: [
        "El estrés y la tensión emocional propios de un servicio urgente pueden estrechar el campo de atención y ralentizar el tiempo de reacción.",
        "Técnicas de gestión: control de la respiración, verbalización de los riesgos detectados, reparto de funciones con el copiloto (conductor centrado en el control del vehículo y la vía; copiloto en radio, navegación y vigilancia de puntos ciegos).",
      ],
    },
    {
      titulo: "Conducción tras la intervención",
      puntos: [
        "Restablecer cuanto antes un patrón de conducción normal al finalizar el servicio urgente, evitando prolongar el uso de señales especiales sin necesidad.",
        "Ser consciente de que la tensión acumulada durante la intervención puede persistir y afectar a la atención durante el trayecto de regreso.",
      ],
    },
  ],
};
