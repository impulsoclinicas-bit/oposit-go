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
  {
    id: "scvp-16",
    enunciado: "¿Qué es el fenómeno de \"hidroplaneo\" o \"aquaplaning\" y por qué es especialmente relevante en la conducción de emergencia?",
    opciones: [
      "La pérdida de contacto entre el neumático y el firme por la formación de una lámina de agua a velocidades elevadas sobre pavimento mojado, que puede provocar la pérdida total de control de la dirección y el frenado",
      "Un sistema electrónico que ayuda a frenar sobre el agua, presente en todos los vehículos prioritarios",
      "Un fenómeno que solo afecta a los neumáticos completamente lisos, nunca a los que están en buen estado",
      "Una técnica recomendada para cruzar charcos a alta velocidad de forma segura",
    ],
    correcta: 0,
    explicacion:
      "El hidroplaneo o aquaplaning es la pérdida de contacto entre el neumático y el firme, provocada por una lámina de agua que se interpone entre ambos a velocidades elevadas sobre pavimento mojado; dado que la conducción de emergencia a menudo exige mayor velocidad, cobra especial relevancia moderar la marcha en condiciones de lluvia intensa para reducir este riesgo, que puede suponer la pérdida total de control de la dirección y el frenado.",
  },
  {
    id: "scvp-17",
    enunciado: "¿Debe utilizarse el cinturón de seguridad durante la conducción de un vehículo prioritario en servicio urgente?",
    opciones: [
      "Sí; la urgencia del servicio no elimina el riesgo de colisión, sino que lo incrementa, por lo que el uso del cinturón de seguridad resulta aún más necesario para proteger al conductor y a los ocupantes ante una eventual maniobra brusca o impacto",
      "No, el cinturón entorpece los movimientos y debe prescindirse de él siempre que se circule en emergencia",
      "Solo es necesario para el copiloto, nunca para el conductor",
      "Solo debe usarse si el vehículo supera los 120 km/h",
    ],
    correcta: 0,
    explicacion:
      "Precisamente porque la conducción en servicio urgente implica mayor velocidad y mayor probabilidad de maniobras bruscas, el uso del cinturón de seguridad por parte del conductor y de todos los ocupantes resulta aún más necesario, no menos, para minimizar las consecuencias de una eventual colisión o frenada de emergencia.",
  },
  {
    id: "scvp-18",
    enunciado: "¿Qué papel desempeña la visión periférica en la conducción de un vehículo prioritario a velocidades elevadas?",
    opciones: [
      "Permite detectar movimientos y posibles peligros en los laterales de la vía (peatones, vehículos que se incorporan) sin necesidad de desviar completamente la mirada del frente, complementando la visión central de la trayectoria",
      "No tiene ninguna utilidad práctica en la conducción de emergencia",
      "Debe anularse deliberadamente para concentrarse solo en la señal central de la vía",
      "Solo es relevante durante la conducción nocturna",
    ],
    correcta: 0,
    explicacion:
      "La visión periférica permite al conductor detectar movimientos y posibles peligros en los laterales de la vía (peatones que se aproximan, vehículos que pudieran incorporarse) sin necesidad de desviar por completo la mirada del frente, complementando así la visión central de la trayectoria, especialmente relevante cuando se circula a velocidades elevadas con menor margen de reacción.",
  },
  {
    id: "scvp-19",
    enunciado: "¿Qué recomienda la buena praxis para gestionar la tensión emocional durante un servicio urgente prolongado?",
    opciones: [
      "Mantener la respiración controlada y la concentración en la tarea de conducir, evitando que la urgencia de la situación o la presión del servicio se traduzcan en decisiones de conducción precipitadas o en un exceso de velocidad no justificado por las circunstancias reales de la vía",
      "Aumentar la velocidad progresivamente cuanto mayor sea la tensión percibida",
      "Ignorar por completo cualquier señal de tensión, ya que no afecta a la capacidad de conducción",
      "Delegar siempre la conducción en el compañero de menor experiencia ante cualquier tensión",
    ],
    correcta: 0,
    explicacion:
      "La buena praxis recomienda mantener la respiración controlada y la concentración en la tarea de conducir, de forma que la tensión emocional propia de un servicio urgente no se traduzca en decisiones de conducción precipitadas ni en un exceso de velocidad que no esté justificado por las circunstancias reales de la vía en cada momento.",
  },
  {
    id: "scvp-20",
    enunciado: "¿Qué riesgo específico plantea el deslumbramiento por las luces de otros vehículos durante la conducción nocturna en servicio urgente?",
    opciones: [
      "Una reducción temporal, pero significativa, de la capacidad visual del conductor, que aconseja moderar la velocidad y evitar mirar directamente a los faros del vehículo que se aproxima, dirigiendo la vista hacia el borde derecho de la calzada",
      "Ningún riesgo relevante, ya que la señal luminosa V-1 anula cualquier deslumbramiento",
      "Solo afecta a los conductores que no llevan gafas graduadas",
      "Un riesgo que únicamente se produce en carreteras de montaña",
    ],
    correcta: 0,
    explicacion:
      "El deslumbramiento por las luces de otros vehículos produce una reducción temporal, pero significativa, de la capacidad visual del conductor; ante esta situación se aconseja moderar la velocidad y evitar mirar directamente a los faros del vehículo que se aproxima, dirigiendo la vista hacia el borde derecho de la calzada como referencia para mantener la trayectoria.",
  },
  {
    id: "scvp-21",
    enunciado: "¿Por qué es importante la revisión preventiva del estado de frenos y neumáticos antes de iniciar un turno de conducción de vehículos prioritarios?",
    opciones: [
      "Porque estos elementos son determinantes para la capacidad real de frenado y de adherencia del vehículo, especialmente relevante cuando previsiblemente deberán realizarse frenadas de emergencia o maniobras evasivas a velocidades elevadas",
      "Porque la normativa de tráfico exige revisarlos únicamente una vez al año, con independencia del servicio",
      "No tiene ninguna relevancia para la seguridad de la conducción de emergencia",
      "Solo es relevante en vehículos con más de veinte años de antigüedad",
    ],
    correcta: 0,
    explicacion:
      "El estado de los frenos y los neumáticos es determinante para la capacidad real de frenado y de adherencia del vehículo; su revisión preventiva antes de iniciar un turno cobra especial relevancia en la conducción de vehículos prioritarios, donde previsiblemente pueden requerirse frenadas de emergencia o maniobras evasivas a velocidades elevadas.",
  },
  {
    id: "scvp-22",
    enunciado: "¿Qué riesgo de distracción plantea el uso de la emisora o radio durante la conducción de un vehículo prioritario, y cómo debe gestionarse?",
    opciones: [
      "Puede desviar la atención de la tarea principal de conducir; se recomienda limitar su uso a lo estrictamente necesario, priorizando siempre la atención a la vía, y recurriendo cuando sea posible al copiloto para gestionar las comunicaciones",
      "No plantea ningún riesgo de distracción, al tratarse de una herramienta de trabajo habitual",
      "Debe utilizarse constantemente durante todo el servicio para mantener la concentración",
      "El riesgo desaparece por completo si el vehículo circula por autovía",
    ],
    correcta: 0,
    explicacion:
      "El uso de la emisora o radio, como cualquier otra tarea secundaria, puede desviar la atención del conductor de la tarea principal de conducir; la buena praxis recomienda limitar su uso a lo estrictamente necesario durante la marcha, priorizando la atención a la vía, y recurrir, siempre que sea posible, al copiloto para gestionar las comunicaciones.",
  },
  {
    id: "scvp-23",
    enunciado: "¿Qué son el sobreviraje y el subviraje en una curva, y por qué es útil conocerlos en la conducción de emergencia?",
    opciones: [
      "El sobreviraje es la tendencia del vehículo a girar más de lo que el conductor desea (el eje trasero pierde agarre antes que el delantero); el subviraje es la tendencia contraria (el eje delantero pierde agarre antes, y el vehículo tiende a seguir recto pese al giro del volante); conocer ambos ayuda a corregir la trayectoria de forma adecuada ante la pérdida de adherencia en una curva",
      "Son sinónimos exactos sin ninguna diferencia práctica",
      "Se refieren exclusivamente a fallos del sistema de frenos, no a la dinámica de la curva",
      "Solo pueden producirse en vehículos con tracción total",
    ],
    correcta: 0,
    explicacion:
      "El sobreviraje es la tendencia del vehículo a girar más de lo deseado por el conductor (el eje trasero pierde agarre antes que el delantero), mientras que el subviraje es la tendencia contraria (el eje delantero pierde agarre antes, tendiendo el vehículo a seguir recto pese al giro del volante); conocer ambos fenómenos ayuda a corregir adecuadamente la trayectoria ante una pérdida de adherencia en curva, situación con mayor probabilidad de producirse a las velocidades propias de un servicio de emergencia.",
  },
  {
    id: "scvp-24",
    enunciado: "¿Cómo debe abordarse una rotonda durante un desplazamiento de emergencia, pese a disfrutar de prioridad de paso como vehículo prioritario?",
    opciones: [
      "Reduciendo la velocidad al aproximarse y comprobando visualmente que el resto de vehículos en la rotonda ha advertido la presencia del vehículo prioritario y va a cederle el paso, antes de completar la incorporación o el cruce",
      "Manteniendo la velocidad de aproximación sin ninguna reducción, dado que la prioridad legal exime de cualquier comprobación adicional",
      "Deteniéndose siempre por completo antes de entrar en cualquier rotonda",
      "Circulando siempre en sentido contrario al habitual para ganar tiempo",
    ],
    correcta: 0,
    explicacion:
      "Aun gozando de prioridad de paso, la buena praxis recomienda reducir la velocidad al aproximarse a una rotonda y comprobar visualmente que el resto de vehículos ha advertido la presencia del vehículo prioritario y va a cederle el paso, antes de completar la incorporación o el cruce, dado que la prioridad normativa no garantiza por sí sola que los demás conductores reaccionen a tiempo.",
  },
  {
    id: "scvp-25",
    enunciado: "¿Qué riesgo añadido presenta el adelantamiento en una vía de doble sentido durante un servicio urgente?",
    opciones: [
      "La necesidad de invadir el carril contrario reduce el margen de reacción disponible ante un vehículo que circule en sentido opuesto y no haya advertido a tiempo la señal del vehículo prioritario, por lo que debe valorarse con especial prudencia la distancia y visibilidad disponibles antes de iniciar la maniobra",
      "Ningún riesgo adicional, dado que la señal V-1 obliga a despejar el carril contrario de forma inmediata",
      "El riesgo solo existe en carreteras de más de dos carriles por sentido",
      "El adelantamiento en doble sentido está siempre prohibido para los vehículos prioritarios",
    ],
    correcta: 0,
    explicacion:
      "Adelantar en una vía de doble sentido exige invadir el carril contrario, lo que reduce el margen de reacción disponible ante un vehículo que circule en sentido opuesto y no haya advertido a tiempo la señal del vehículo prioritario; por ello, debe valorarse con especial prudencia la distancia y visibilidad disponibles antes de iniciar la maniobra, sin dar nunca por hecho que el carril contrario quedará despejado de forma automática.",
  },
  {
    id: "scvp-26",
    enunciado: "¿Cómo debe adaptarse la conducción de un vehículo prioritario ante condiciones meteorológicas adversas como niebla intensa o hielo en la calzada?",
    opciones: [
      "Reduciendo significativamente la velocidad, aumentando la distancia de seguridad y extremando la anticipación, incluso a costa de demorar la llegada al lugar del servicio, dado que el riesgo de accidente en estas condiciones puede superar el beneficio de la rapidez",
      "Manteniendo la velocidad habitual, ya que la prioridad de paso compensa cualquier reducción de adherencia o visibilidad",
      "Suspendiendo siempre el servicio urgente ante cualquier condición meteorológica adversa",
      "Aumentando la velocidad para reducir el tiempo de exposición al riesgo meteorológico",
    ],
    correcta: 0,
    explicacion:
      "Ante condiciones meteorológicas adversas como niebla intensa o hielo en la calzada, la buena praxis exige reducir significativamente la velocidad, aumentar la distancia de seguridad y extremar la anticipación, incluso a costa de demorar la llegada al lugar del servicio, dado que en estas condiciones el riesgo real de sufrir un accidente puede llegar a superar el beneficio de ganar unos segundos de rapidez.",
  },
  {
    id: "scvp-27",
    enunciado: "¿Qué precaución adicional debe adoptarse al realizar una frenada de emergencia en una pendiente pronunciada?",
    opciones: [
      "Tener en cuenta que la pendiente incrementa la distancia de frenado necesaria por el efecto añadido de la inercia y la gravedad, por lo que debe anticiparse la frenada con mayor margen del que se emplearía en llano",
      "Frenar exactamente igual que en llano, sin ninguna consideración adicional",
      "Soltar completamente el freno al iniciar la bajada para ganar velocidad",
      "La pendiente reduce la distancia de frenado necesaria, permitiendo frenar más tarde",
    ],
    correcta: 0,
    explicacion:
      "En una pendiente descendente pronunciada, el efecto añadido de la inercia y la gravedad incrementa la distancia de frenado necesaria respecto de una vía llana, por lo que la buena praxis recomienda anticipar la frenada con mayor margen del que se emplearía en condiciones de llano.",
  },
  {
    id: "scvp-28",
    enunciado: "¿Cómo afecta el transporte de un herido o un detenido a la conducción de un vehículo prioritario?",
    opciones: [
      "Puede alterar el reparto de peso y la estabilidad del vehículo, y además exige moderar las maniobras bruscas (frenadas y giros) en la medida de lo posible, para no agravar el estado del herido ni generar un riesgo añadido para los ocupantes",
      "No tiene ninguna incidencia en la conducción, siendo indiferente el número o estado de los ocupantes",
      "Permite circular a mayor velocidad al reducirse el riesgo percibido",
      "Obliga siempre a detener por completo el vehículo cada cierto tiempo, sea cual sea la urgencia del servicio",
    ],
    correcta: 0,
    explicacion:
      "El transporte de un herido o un detenido puede alterar el reparto de peso y la estabilidad del vehículo, y exige además moderar en la medida de lo posible las maniobras bruscas (frenadas y giros), tanto para no agravar el estado de una persona herida como para reducir el riesgo añadido que dichas maniobras suponen para el conjunto de los ocupantes.",
  },
  {
    id: "scvp-29",
    enunciado: "¿Qué es un «microsueño» y por qué constituye un riesgo grave en los turnos largos o nocturnos de conducción de vehículos prioritarios?",
    opciones: [
      "Un episodio breve e involuntario de pérdida de consciencia o de atención, de apenas unos segundos, que puede producirse por fatiga acumulada y que, a la velocidad propia de un servicio de emergencia, basta para provocar la salida de la vía o una colisión",
      "Una técnica de descanso programado recomendada durante el propio servicio urgente",
      "Un fenómeno que solo afecta a los pasajeros, nunca al conductor",
      "Un mecanismo de seguridad del vehículo que detiene automáticamente la marcha",
    ],
    correcta: 0,
    explicacion:
      "El microsueño es un episodio breve e involuntario de pérdida de consciencia o de atención, de apenas unos segundos, provocado por la fatiga acumulada; a la velocidad propia de un servicio de emergencia, ese breve lapso de desatención basta para que el vehículo recorra una distancia considerable sin control efectivo, pudiendo provocar la salida de la vía o una colisión, lo que convierte a los turnos largos o nocturnos en un factor de riesgo especialmente relevante.",
  },
  {
    id: "scvp-30",
    enunciado: "¿Qué utilidad tiene el análisis o «debriefing» posterior a un incidente de conducción durante un servicio urgente?",
    opciones: [
      "Permite identificar qué decisiones o circunstancias contribuyeron al incidente, extrayendo lecciones aplicables a futuros servicios y reforzando así la mejora continua de la seguridad en la conducción de vehículos prioritarios",
      "No tiene ninguna utilidad práctica una vez finalizado el servicio",
      "Sirve únicamente para determinar sanciones disciplinarias, sin ninguna finalidad preventiva",
      "Solo se realiza cuando el incidente ha causado daños materiales de gran cuantía",
    ],
    correcta: 0,
    explicacion:
      "El análisis o «debriefing» posterior a un incidente de conducción permite identificar qué decisiones, circunstancias o factores contribuyeron a que se produjera, extrayendo lecciones aplicables a futuros servicios y reforzando así, de manera constructiva, la mejora continua de la seguridad en la conducción de vehículos prioritarios, más allá de cualquier consideración disciplinaria puntual.",
  },
];
