import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "scvp-01",
    enunciado: "En la conducción de un vehículo prioritario en servicio urgente, ¿qué principio debe prevalecer siempre sobre la rapidez en llegar al destino?",
    opciones: [
      "La seguridad propia, de los ocupantes y de terceros usuarios de la vía, ya que un accidente impide completar el servicio y añade nuevas víctimas",
      "Ninguno; la prioridad de paso exime de cualquier consideración de seguridad",
      "El ahorro de combustible del vehículo",
      "El cumplimiento estricto del límite de velocidad genérico en todo momento",
    ],
    correcta: 0,
    explicacion:
      "La prioridad de paso y las exenciones normativas reconocidas al vehículo prioritario no eliminan el deber de conducir con seguridad: un accidente durante el desplazamiento no solo impide prestar el servicio urgente, sino que genera nuevas víctimas y compromete la propia intervención policial.",
  },
  {
    id: "scvp-02",
    enunciado: "¿Qué papel desempeña la anticipación en la conducción de emergencia?",
    opciones: [
      "Permite explorar continuamente el entorno (cruces, pasos de peatones, vehículos que puedan invadir el carril) para prever reacciones inadecuadas de otros usuarios y reducir el tiempo de respuesta ante un imprevisto",
      "Es irrelevante, ya que la señal acústica obliga a los demás a apartarse de inmediato",
      "Solo importa en carretera, nunca en entornos urbanos",
      "Se limita a memorizar la ruta más corta al destino",
    ],
    correcta: 0,
    explicacion:
      "La conducción anticipativa consiste en explorar de forma constante el entorno para detectar con antelación posibles conflictos —peatones, vehículos que no han advertido la señal, intersecciones— y así disponer de más tiempo y opciones de reacción, reduciendo el riesgo aun contando con prioridad de paso.",
  },
  {
    id: "scvp-03",
    enunciado: "¿Por qué no debe darse por hecho que otros conductores han advertido la señal acústica o luminosa del vehículo prioritario?",
    opciones: [
      "Porque factores como el ruido ambiente, la música en el interior de otros vehículos, el aislamiento acústico o la distracción pueden impedir su percepción, por lo que debe reducirse la velocidad al aproximarse a puntos de conflicto",
      "Porque la ley obliga a repetir la señal tres veces antes de cada cruce",
      "Porque el uso de señales acústicas está prohibido en zonas urbanas",
      "Porque los demás conductores tienen la obligación legal de detenerse en seco al oírla, sin margen de error",
    ],
    correcta: 0,
    explicacion:
      "El aislamiento acústico de los vehículos, la música, el uso de auriculares o la simple distracción pueden impedir que otros conductores perciban a tiempo la señal del vehículo prioritario; por ello, la prudencia exige reducir la velocidad y extremar la vigilancia al aproximarse a intersecciones y pasos de peatones, en lugar de asumir que la prioridad será respetada automáticamente.",
  },
  {
    id: "scvp-04",
    enunciado: "¿Qué es la «distancia de seguridad» y por qué cobra especial relevancia en la conducción prioritaria a velocidades elevadas?",
    opciones: [
      "El espacio libre necesario para poder detener el vehículo sin colisionar ante un imprevisto; al aumentar la velocidad, aumenta también la distancia de frenado, por lo que la exención del límite de velocidad debe compensarse con mayor margen de reacción",
      "Una distancia fija de tres metros, igual a cualquier velocidad",
      "Un concepto que solo se aplica en autopistas, nunca en vías urbanas",
      "El espacio que debe guardarse únicamente respecto de otros vehículos prioritarios",
    ],
    correcta: 0,
    explicacion:
      "La distancia de seguridad es el espacio que permite detener el vehículo sin colisionar ante un imprevisto; dado que la distancia de frenado crece de forma no lineal con la velocidad, cuanto mayor sea esta —como ocurre al circular por encima de los límites genéricos en servicio urgente— mayor debe ser el margen de distancia y de atención para poder reaccionar a tiempo.",
  },
  {
    id: "scvp-05",
    enunciado: "¿Qué recomienda la técnica de conducción segura al afrontar una curva a velocidad de emergencia?",
    opciones: [
      "Reducir la velocidad antes de entrar en la curva, mantener una trayectoria que aproveche todo el ancho de la vía sin invadir el carril contrario si es evitable, y acelerar de forma progresiva a la salida",
      "Mantener la máxima velocidad posible durante toda la curva para no perder tiempo",
      "Frenar bruscamente en mitad de la curva si se detecta cualquier riesgo",
      "Circular siempre pegado al centro de la calzada, sin ajustar la trayectoria",
    ],
    correcta: 0,
    explicacion:
      "La técnica de conducción segura aconseja frenar antes de entrar en la curva (nunca dentro de ella, donde el frenado brusco puede desestabilizar el vehículo), adoptar una trayectoria que aproveche el ancho disponible de la vía y acelerar progresivamente a la salida, minimizando así el riesgo de pérdida de control.",
  },
  {
    id: "scvp-06",
    enunciado: "¿Qué papel juega el estado psicofísico del conductor en la conducción de vehículos prioritarios?",
    opciones: [
      "Es determinante: el estrés, la fatiga o la sobrecarga emocional propios de un servicio urgente pueden reducir la capacidad de percepción y de reacción, por lo que deben reconocerse y gestionarse activamente",
      "Es irrelevante siempre que el vehículo esté en buen estado mecánico",
      "Solo afecta a trayectos de más de dos horas de duración",
      "Se soluciona simplemente aumentando la velocidad para reducir el tiempo de exposición",
    ],
    correcta: 0,
    explicacion:
      "La tensión emocional y el estrés inherentes a un servicio urgente pueden estrechar el campo de atención del conductor y ralentizar su tiempo de reacción; reconocer este efecto y aplicar técnicas de control (respiración, verbalización de los riesgos detectados, reparto de tareas con el copiloto) resulta esencial para mantener la seguridad durante la conducción de emergencia.",
  },
  {
    id: "scvp-07",
    enunciado: "¿Qué debe hacer el conductor de un vehículo prioritario antes de rebasar una intersección con prioridad en contra o un semáforo en rojo?",
    opciones: [
      "Reducir sensiblemente la velocidad e incluso detenerse si es necesario, comprobando visualmente que todos los usuarios que se aproximan han detenido o van a detener su marcha",
      "Mantener la velocidad de circulación, confiando en que la señal acústica basta para despejar el cruce",
      "Acelerar para cruzar antes de que otros vehículos lleguen a la intersección",
      "Desviar la mirada hacia el copiloto para confirmar verbalmente antes de cruzar",
    ],
    correcta: 0,
    explicacion:
      "Al no disfrutar de una prioridad absoluta e incondicionada, el conductor debe reducir la velocidad e incluso detenerse en la intersección o el semáforo si fuera necesario, verificando visualmente que el resto de usuarios han detenido su marcha o se disponen a hacerlo antes de proseguir.",
  },
  {
    id: "scvp-08",
    enunciado: "¿Qué ventaja aporta el reparto de funciones entre conductor y copiloto en un vehículo prioritario durante un servicio urgente?",
    opciones: [
      "Permite que el conductor se concentre en el control del vehículo y la vía, mientras el copiloto gestiona la comunicación por radio, la navegación y la vigilancia de puntos ciegos, reduciendo la carga cognitiva del conductor",
      "No aporta ninguna ventaja relevante, ya que cada ocupante debe estar pendiente de todo simultáneamente",
      "Sirve únicamente para repartir la responsabilidad legal en caso de sanción",
      "Solo es útil en vehículos con más de dos ocupantes",
    ],
    correcta: 0,
    explicacion:
      "Repartir tareas —el conductor centrado en el control del vehículo y la observación de la vía, el copiloto en la radio, la navegación y la vigilancia de puntos ciegos o cruces— reduce la carga cognitiva del conductor en un momento de alta exigencia, mejorando la seguridad global de la intervención.",
  },
  {
    id: "scvp-09",
    enunciado: "¿Por qué es especialmente arriesgada la aproximación a un paso de peatones o a un colegio durante un desplazamiento de emergencia?",
    opciones: [
      "Porque peatones, en particular menores o personas mayores, pueden no percibir la señal o reaccionar de forma imprevisible, por lo que conviene reducir la velocidad de forma preventiva en estos puntos",
      "Porque está prohibido circular como vehículo prioritario cerca de colegios",
      "Porque en esos tramos se pierde automáticamente la prioridad de paso por ley",
      "No presenta ningún riesgo adicional respecto de otros tramos de la vía",
    ],
    correcta: 0,
    explicacion:
      "Los peatones, especialmente menores y personas mayores, pueden no advertir a tiempo la señal del vehículo prioritario o reaccionar de forma imprevisible; por ello la buena práctica aconseja una reducción preventiva de la velocidad al aproximarse a pasos de peatones, colegios y otros puntos de alta afluencia peatonal, con independencia de la prioridad normativa.",
  },
  {
    id: "scvp-10",
    enunciado: "Tras finalizar un servicio urgente, ¿qué recomienda la buena praxis respecto de la conducción de regreso?",
    opciones: [
      "Restablecer cuanto antes un patrón de conducción normal, sin prisas ni uso de señales especiales salvo necesidad justificada, evitando el arrastre del estado de tensión acumulado durante la intervención",
      "Mantener el mismo régimen de velocidad y señales especiales hasta llegar a la base",
      "Es indiferente, ya que la fatiga posterior al servicio no afecta a la conducción",
      "Debe realizarse siempre por el itinerario más corto, sin excepción",
    ],
    correcta: 0,
    explicacion:
      "Concluido el servicio urgente, conviene restablecer un patrón de conducción normal cuanto antes, evitando prolongar el uso de señales especiales sin necesidad y siendo consciente de que la tensión acumulada durante la intervención puede persistir y afectar a la atención durante el trayecto de regreso.",
  },
  {
    id: "scvp-11",
    enunciado: "¿Qué técnica se recomienda con el volante ante una maniobra evasiva brusca?",
    opciones: [
      "Mantener ambas manos sujetando el volante en una posición que permita girarlo con rapidez y control en cualquier dirección, evitando cruzar los brazos o soltar una mano en el momento crítico",
      "Conducir con una sola mano en todo momento, para tener la otra libre para otras tareas",
      "Girar el volante lo más bruscamente posible, sin ninguna otra consideración",
      "Soltar el volante por completo y frenar únicamente con el pedal de freno",
    ],
    correcta: 0,
    explicacion:
      "Ante una maniobra evasiva brusca, la técnica recomendada es mantener ambas manos sujetando firmemente el volante en una posición que permita girarlo con rapidez y control hacia cualquier dirección, evitando cruzar los brazos al girar o soltar una mano en el momento crítico, lo que reduce la capacidad de reacción y de corrección posterior de la trayectoria.",
  },
  {
    id: "scvp-12",
    enunciado: "¿Qué se recomienda hacer con el pedal de freno en un vehículo equipado con sistema antibloqueo de frenos (ABS) ante una frenada de emergencia?",
    opciones: [
      "Pisar el freno de forma firme y sostenida, dejando que el propio sistema ABS module la presión sobre las ruedas, sin dar golpes intermitentes al pedal",
      "Dar golpes cortos e intermitentes al pedal de freno, como se hacía en vehículos sin ABS",
      "No frenar en ningún caso y confiar únicamente en el volante para evitar el obstáculo",
      "Frenar solo con el freno de mano, evitando el pedal de freno de servicio",
    ],
    correcta: 0,
    explicacion:
      "En un vehículo equipado con sistema antibloqueo de frenos (ABS), la técnica correcta ante una frenada de emergencia consiste en pisar el pedal de freno de forma firme y sostenida, dejando que sea el propio sistema el que module automáticamente la presión sobre cada rueda para evitar su bloqueo, a diferencia de la técnica de frenado intermitente que se recomendaba en vehículos sin ABS.",
  },
  {
    id: "scvp-13",
    enunciado: "¿Qué recomienda la técnica de conducción segura sobre la dirección de la mirada al afrontar una curva o evitar un obstáculo?",
    opciones: [
      "Dirigir la mirada hacia el punto de destino o la trayectoria deseada, y no hacia el obstáculo que se quiere evitar, ya que el vehículo tiende a dirigirse hacia donde se fija la vista",
      "Mantener la mirada fija exclusivamente en el obstáculo que se quiere evitar",
      "Cerrar los ojos brevemente para reducir la tensión visual durante la maniobra",
      "Mirar únicamente al retrovisor durante toda la maniobra evasiva",
    ],
    correcta: 0,
    explicacion:
      "La técnica de conducción segura recomienda dirigir la mirada hacia el punto de destino o la trayectoria que se desea seguir, y no hacia el obstáculo que se pretende evitar, dado que existe una tendencia natural del conductor a dirigir el vehículo hacia el punto en el que fija la vista, fenómeno especialmente relevante en maniobras evasivas y en la conducción en curva.",
  },
  {
    id: "scvp-14",
    enunciado: "¿Qué riesgo específico plantean los turnos largos o nocturnos en la conducción de vehículos prioritarios?",
    opciones: [
      "El aumento de la fatiga y el riesgo de microsueños, que reducen el estado de alerta y el tiempo de reacción del conductor, incluso sin que este sea consciente de dicho deterioro",
      "Ningún riesgo adicional distinto de la conducción en turnos diurnos y de corta duración",
      "Únicamente afecta a la comodidad del conductor, sin relación con la seguridad",
      "Solo constituye un riesgo si el conductor circula sin compañía de un copiloto",
    ],
    correcta: 0,
    explicacion:
      "Los turnos largos o nocturnos incrementan la fatiga acumulada y el riesgo de microsueños —breves episodios de pérdida de consciencia de apenas segundos—, que reducen sensiblemente el estado de alerta y el tiempo de reacción del conductor, con el agravante de que la persona afectada no siempre es consciente de este deterioro progresivo de su capacidad de conducción.",
  },
  {
    id: "scvp-15",
    enunciado: "¿Qué recomienda la buena praxis preventiva respecto de la velocidad al aproximarse a un cruce con visibilidad reducida, aun gozando de prioridad de paso?",
    opciones: [
      "Reducir la velocidad de forma anticipada para disponer de mayor margen de reacción, ya que la prioridad normativa no elimina el riesgo real derivado de la falta de visibilidad sobre otros vehículos que se aproximen",
      "Mantener o incluso aumentar la velocidad, puesto que la prioridad de paso garantiza la ausencia de riesgo",
      "Detenerse siempre por completo antes de cualquier cruce, exista o no visibilidad suficiente",
      "Cerrar los ojos brevemente al cruzar para evitar distracciones visuales",
    ],
    correcta: 0,
    explicacion:
      "Aun gozando de prioridad de paso, la buena praxis preventiva recomienda reducir la velocidad de forma anticipada al aproximarse a un cruce con visibilidad reducida, ya que dicha prioridad normativa no elimina el riesgo real derivado de la posible presencia de otros vehículos que no adviertan a tiempo la señal del vehículo prioritario, siendo preferible disponer de un mayor margen de reacción ante lo imprevisto.",
  },
];
