import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "lopsc-01",
    enunciado: "¿Qué ley regula actualmente la protección de la seguridad ciudadana en España?",
    opciones: [
      "La Ley Orgánica 1/1992",
      "La Ley Orgánica 4/2015, de 30 de marzo",
      "La Ley Orgánica 2/1986, de Fuerzas y Cuerpos de Seguridad",
      "La Ley 4/2015, del Estatuto de la víctima del delito",
    ],
    correcta: 1,
    explicacion:
      "La Ley Orgánica 4/2015, de 30 de marzo, de protección de la seguridad ciudadana, sustituyó a la anterior Ley Orgánica 1/1992 y regula el régimen de actuaciones de las Fuerzas y Cuerpos de Seguridad y el correspondiente régimen sancionador.",
  },
  {
    id: "lopsc-02",
    enunciado: "¿Cómo se clasifican las infracciones en la Ley Orgánica 4/2015?",
    opciones: [
      "En leves y graves",
      "En muy graves, graves y leves",
      "Únicamente en muy graves",
      "En administrativas y penales",
    ],
    correcta: 1,
    explicacion:
      "La LO 4/2015 clasifica las infracciones a la seguridad ciudadana en muy graves, graves y leves (art. 30 y siguientes).",
  },
  {
    id: "lopsc-03",
    enunciado: "¿Cuál es el plazo de prescripción de las infracciones muy graves conforme a la Ley Orgánica 4/2015?",
    opciones: ["Seis meses", "Un año", "Dos años", "Tres años"],
    correcta: 2,
    explicacion:
      "Conforme al art. 44 de la LO 4/2015, las infracciones muy graves prescriben a los dos años, las graves al año y las leves a los seis meses.",
  },
  {
    id: "lopsc-04",
    enunciado: "El consumo o la tenencia de drogas tóxicas en lugares públicos, cuando no constituya delito, se considera:",
    opciones: [
      "Infracción leve",
      "Infracción grave",
      "Infracción muy grave",
      "No está tipificado en esta ley",
    ],
    correcta: 1,
    explicacion:
      "El consumo o la tenencia ilícita de drogas tóxicas, estupefacientes o sustancias psicotrópicas en lugares públicos, cuando no constituya infracción penal, está tipificado como infracción grave en el art. 36 de la LO 4/2015.",
  },
  {
    id: "lopsc-05",
    enunciado: "¿Qué órgano es competente para imponer las sanciones por infracciones muy graves en materia de armas o explosivos, con carácter general?",
    opciones: [
      "El Ministro del Interior",
      "El Delegado o Subdelegado del Gobierno, según el caso, sin perjuicio de otras atribuciones específicas",
      "El Director General de la Policía",
      "El alcalde del municipio correspondiente",
    ],
    correcta: 1,
    explicacion:
      "La LO 4/2015 atribuye la potestad sancionadora, con carácter general, a los Delegados y Subdelegados del Gobierno según el ámbito territorial y la gravedad de la infracción, sin perjuicio de las competencias específicas atribuidas a otros órganos (art. 52 y ss.).",
  },
  {
    id: "lopsc-06",
    enunciado: "¿Qué se entiende por identificación de personas conforme al artículo 16 de la LO 4/2015?",
    opciones: [
      "Solo se puede requerir identificación tras la comisión de un delito",
      "Los agentes de las Fuerzas y Cuerpos de Seguridad podrán requerir la identificación de las personas en el ejercicio de sus funciones de indagación o prevención cuando existan indicios de que han participado en la comisión de una infracción o concurran otras circunstancias que lo justifiquen",
      "Solo procede identificación con orden judicial previa",
      "La identificación solo puede realizarse en dependencias policiales",
    ],
    correcta: 1,
    explicacion:
      "El art. 16 LO 4/2015 permite a los agentes requerir la identificación de las personas cuando existan indicios de que han podido participar en la comisión de una infracción o cuando, de forma razonable y proporcionada, resulte necesario para el ejercicio de las funciones de protección de la seguridad.",
  },
  {
    id: "lopsc-07",
    enunciado: "Cuando una persona requerida se niegue a identificarse, ¿qué puede hacer la Policía conforme al artículo 16?",
    opciones: [
      "Nada, la negativa no tiene consecuencias",
      "Requerirla para que les acompañe a dependencias policiales a fin de que sea identificada",
      "Detenerla automáticamente por delito de desobediencia",
      "Imponer directamente una multa sin más trámite",
    ],
    correcta: 1,
    explicacion:
      "El art. 16.2 LO 4/2015 permite requerir a la persona para que acompañe a los agentes a dependencias próximas para su identificación, cuando esta no pueda conseguirse por otro medio, informándole de los motivos.",
  },
  {
    id: "lopsc-08",
    enunciado: "¿Qué regula el artículo 20 de la LO 4/2015 en relación con las entradas y registros?",
    opciones: [
      "La entrada en domicilios sin ningún requisito",
      "Los registros corporales externos, que se realizarán por un agente del mismo sexo cuando impliquen actos de reconocimiento sobre personas",
      "Únicamente los registros de vehículos",
      "La entrada en locales públicos abiertos al público",
    ],
    correcta: 1,
    explicacion:
      "El art. 20 LO 4/2015 regula los registros corporales externos y superficiales, que deben realizarse por un agente del mismo sexo que la persona registrada cuando comporten actos de reconocimiento corporal, respetando la dignidad y, en la medida de lo posible, la intimidad.",
  },
  {
    id: "lopsc-09",
    enunciado: "¿Cuál de las siguientes conductas se tipifica como infracción muy grave en la LO 4/2015?",
    opciones: [
      "La celebración de espectáculos públicos que incumplan las condiciones de horario",
      "La fabricación, reparación, comercialización o uso de armas prohibidas sin la documentación reglamentaria",
      "Dejar suelto un animal doméstico",
      "El uso indebido de las tarjetas de estacionamiento",
    ],
    correcta: 1,
    explicacion:
      "El art. 35 de la LO 4/2015 tipifica como infracción muy grave, entre otras, la fabricación, reparación, comercialización, adquisición, tenencia o uso de armas prohibidas o de armas reglamentadas careciendo de la documentación exigible.",
  },
  {
    id: "lopsc-10",
    enunciado: "¿A qué se refiere el régimen de identificación, control preventivo y registro regulado en la LO 4/2015 respecto de los agentes que intervengan?",
    opciones: [
      "Los agentes actuantes deben llevar visible el número de identificación profesional en las intervenciones que practiquen",
      "No existe obligación alguna de identificación para los agentes",
      "Solo los mandos deben identificarse",
      "La identificación de los agentes es potestativa en todos los casos",
    ],
    correcta: 0,
    explicacion:
      "El art. 18 LO 4/2015 establece el deber de los miembros de las Fuerzas y Cuerpos de Seguridad de identificarse en el ejercicio de sus funciones, mediante el correspondiente carné profesional o el número de identificación visible en el uniforme.",
  },
  {
    id: "lopsc-11",
    enunciado: "¿Qué sanción, además de la multa, puede imponerse por infracciones muy graves relacionadas con armas, según la LO 4/2015?",
    opciones: [
      "El comiso de las armas, sustancias u objetos empleados o relacionados con la infracción",
      "La pena de prisión",
      "La inhabilitación para cargo público",
      "Ninguna sanción accesoria es posible",
    ],
    correcta: 0,
    explicacion:
      "El art. 39 de la LO 4/2015 prevé como sanción accesoria el comiso de los efectos, armas, sustancias o instrumentos relacionados con la comisión de infracciones, sin perjuicio de la sanción principal de multa.",
  },
  {
    id: "lopsc-12",
    enunciado: "¿Qué órgano tramita, con carácter general, los procedimientos sancionadores por infracciones leves cometidas en el ámbito de una Comunidad Autónoma sin competencias en la materia?",
    opciones: [
      "Los Subdelegados del Gobierno en las provincias, o los Delegados del Gobierno en las Comunidades Autónomas uniprovinciales",
      "Los Ayuntamientos, en todo caso",
      "El Congreso de los Diputados",
      "El Tribunal Constitucional",
    ],
    correcta: 0,
    explicacion:
      "La LO 4/2015 atribuye, con carácter general, la competencia sancionadora a los Delegados y Subdelegados del Gobierno según el ámbito territorial, sin perjuicio de las competencias autonómicas o locales que puedan existir en determinadas materias.",
  },
  {
    id: "lopsc-13",
    enunciado: "Según el artículo 1 de la LO 4/2015, ¿cuál es el objeto de esta ley?",
    opciones: [
      "Regular un conjunto plural y diverso de actuaciones de distinta naturaleza en orden a la consecución y mantenimiento de la seguridad ciudadana, con pleno sometimiento al ordenamiento jurídico",
      "Regular exclusivamente el régimen retributivo de las Fuerzas y Cuerpos de Seguridad",
      "Sustituir íntegramente al Código Penal en materia de orden público",
      "Regular únicamente el procedimiento de asilo y refugio",
    ],
    correcta: 0,
    explicacion:
      "El art. 1 de la LO 4/2015 tiene por objeto regular un conjunto plural y diverso de actuaciones de distinta naturaleza en orden a la consecución y el mantenimiento de la seguridad ciudadana, con pleno sometimiento a la Constitución, a las leyes, a la Unión Europea y a los tratados internacionales suscritos por España en materia de derechos humanos.",
  },
  {
    id: "lopsc-14",
    enunciado: "¿Qué establece la LO 4/2015 respecto de la falta de respeto y consideración debida a los agentes de la autoridad en el ejercicio de sus funciones?",
    opciones: [
      "La tipifica como infracción, sancionable conforme al régimen sancionador administrativo previsto en la propia Ley, sin perjuicio de la responsabilidad penal cuando los hechos revistan mayor gravedad",
      "No existe ninguna previsión al respecto en la LO 4/2015",
      "Se sanciona exclusivamente con pena de prisión, nunca por vía administrativa",
      "Solo se sanciona si se produce dentro de una comisaría de policía",
    ],
    correcta: 0,
    explicacion:
      "La LO 4/2015 tipifica la falta de respeto y consideración debida a los agentes de la autoridad en el ejercicio de sus funciones como infracción administrativa, sancionable conforme al régimen previsto en la propia Ley, sin perjuicio de que, cuando los hechos revistan mayor gravedad, puedan ser constitutivos del delito de resistencia o desobediencia del art. 556 del Código Penal, ya estudiado en otro tema.",
  },
  {
    id: "lopsc-15",
    enunciado: "¿Qué principio exige a los miembros de las Fuerzas y Cuerpos de Seguridad limitar sus intervenciones a lo estrictamente necesario, conforme a los principios básicos de actuación de la LO 2/1986 aplicables también en el marco de la LO 4/2015?",
    opciones: [
      "El principio de congruencia, oportunidad y proporcionalidad en la utilización de los medios a su alcance",
      "El principio de máxima intervención, sin ninguna limitación",
      "El principio de gratuidad de la actuación policial",
      "El principio de irrecurribilidad de las decisiones policiales",
    ],
    correcta: 0,
    explicacion:
      "Conforme a los principios básicos de actuación recogidos en la LO 2/1986, aplicables también al ejercicio de las potestades de la LO 4/2015, los miembros de las Fuerzas y Cuerpos de Seguridad deben actuar con congruencia, oportunidad y proporcionalidad en la utilización de los medios a su alcance, limitando sus intervenciones a lo estrictamente necesario para el cumplimiento de la misión que la ley les encomienda.",
  },
  {
    id: "lopsc-16",
    enunciado: "Según el artículo 3 de la LO 4/2015, ¿cuál es uno de los fines que persigue esta ley?",
    opciones: [
      "Regular exclusivamente el régimen retributivo de las Fuerzas y Cuerpos de Seguridad",
      "Asegurar la convivencia ciudadana, la erradicación de la violencia y la utilización pacífica de las vías y espacios públicos, así como la protección de las personas y bienes",
      "Sustituir íntegramente al Código Penal",
      "Regular exclusivamente el régimen de asilo y refugio",
    ],
    correcta: 1,
    explicacion:
      "El art. 3 de la LO 4/2015 enumera, entre los fines de la ley, asegurar la convivencia ciudadana, la erradicación de la violencia, la utilización pacífica de las vías y espacios públicos y la protección de las personas y bienes, así como la garantía del normal funcionamiento de las instituciones.",
  },
  {
    id: "lopsc-17",
    enunciado: "Según el artículo 6 de la LO 4/2015, ¿qué valor tiene el documento nacional de identidad?",
    opciones: [
      "Es un documento meramente orientativo, sin valor probatorio",
      "Es un documento público y oficial suficiente por sí mismo para la acreditación de la identidad y los datos personales de su titular",
      "Solo tiene valor si va acompañado del pasaporte",
      "Solo acredita la identidad dentro del territorio de la Comunidad Autónoma de residencia",
    ],
    correcta: 1,
    explicacion:
      "El art. 6 de la LO 4/2015 establece que el documento nacional de identidad es un documento público y oficial suficiente por sí mismo para la acreditación, a todos los efectos, de la identidad y los datos personales de su titular.",
  },
  {
    id: "lopsc-18",
    enunciado: "Según el artículo 7 de la LO 4/2015, ¿qué deber tienen las personas requeridas por los agentes de la autoridad para instruir atestados o diligencias?",
    opciones: [
      "Ningún deber, la comparecencia es siempre voluntaria",
      "El deber de comparecer ante las dependencias policiales, propias o municipales, cuando sean requeridas para ello, a fin de que puedan instruirse los atestados o diligencias correspondientes",
      "Solo tienen ese deber los mayores de edad",
      "Solo deben comparecer si media orden judicial escrita previa",
    ],
    correcta: 1,
    explicacion:
      "El art. 7 de la LO 4/2015 impone el deber de comparecencia: las personas están obligadas a comparecer ante las dependencias policiales, propias o municipales, cuando para ello sean requeridas por la autoridad competente o sus agentes, en cumplimiento de las funciones de indagación o averiguación.",
  },
  {
    id: "lopsc-19",
    enunciado: "¿Qué regula el artículo 19 de la LO 4/2015 en relación con las cámaras de videovigilancia?",
    opciones: [
      "Prohíbe absolutamente el uso de cámaras por las Fuerzas y Cuerpos de Seguridad",
      "Habilita a las Fuerzas y Cuerpos de Seguridad a captar imágenes y sonidos mediante videocámaras en lugares públicos, en el ejercicio de sus funciones de seguridad ciudadana, con sujeción a su normativa específica",
      "Solo permite el uso de cámaras en el interior de dependencias policiales",
      "Reserva el uso de cámaras exclusivamente a la Guardia Civil",
    ],
    correcta: 1,
    explicacion:
      "El art. 19 de la LO 4/2015 habilita a las Fuerzas y Cuerpos de Seguridad para la captación, reproducción y tratamiento de imágenes y sonidos mediante videocámaras en lugares públicos, en el ejercicio de sus funciones de vigilancia y protección de la seguridad ciudadana, con sujeción a la normativa específica reguladora de esta materia.",
  },
  {
    id: "lopsc-20",
    enunciado: "Según el artículo 23 de la LO 4/2015, ¿pueden los agentes de la autoridad requerir la identificación de los conductores de vehículos?",
    opciones: [
      "No, esa facultad corresponde en exclusiva a la autoridad judicial",
      "Sí, cuando sea necesario para el ejercicio de las funciones de indagación y prevención relacionadas con la circulación de vehículos a motor, pudiendo también identificar a los titulares de estos",
      "Solo pueden identificar al conductor si este ha causado un accidente con víctimas mortales",
      "Solo pueden identificar el vehículo, nunca al conductor",
    ],
    correcta: 1,
    explicacion:
      "El art. 23 de la LO 4/2015 permite a los agentes de la autoridad requerir la identificación de los conductores presuntamente responsables de infracciones relacionadas con la circulación de vehículos a motor, así como de los titulares de dichos vehículos cuando resulte necesario para el ejercicio de sus funciones.",
  },
  {
    id: "lopsc-21",
    enunciado: "Según la LO 4/2015, ¿qué criterios deben ponderarse para graduar las sanciones dentro de los límites establecidos para cada tipo de infracción?",
    opciones: [
      "Únicamente la reincidencia",
      "Entre otros, la entidad del riesgo producido, la gravedad del daño causado, la trascendencia del hecho y el grado de culpabilidad del infractor",
      "Solo la capacidad económica del infractor",
      "No existen criterios de graduación, la sanción es siempre la máxima prevista",
    ],
    correcta: 1,
    explicacion:
      "La LO 4/2015 exige que, dentro de los límites establecidos para cada tipo de infracción, la sanción se gradúe ponderando, entre otros criterios, la entidad del riesgo producido, la gravedad del daño causado, la trascendencia del hecho por lo que respecta a la seguridad ciudadana, y el grado de culpabilidad o intencionalidad del infractor.",
  },
  {
    id: "lopsc-22",
    enunciado: "¿Prescriben las sanciones ya impuestas por infracciones a la LO 4/2015?",
    opciones: [
      "No, una vez impuestas las sanciones no prescriben nunca",
      "Sí, en plazos análogos a los de la prescripción de las infracciones (según su calificación de muy grave, grave o leve), a contar desde el día siguiente a aquel en que adquiera firmeza la resolución sancionadora",
      "Sí, pero siempre en el plazo único de diez años",
      "Solo prescriben las sanciones impuestas a menores de edad",
    ],
    correcta: 1,
    explicacion:
      "La LO 4/2015 prevé que las sanciones impuestas por infracciones muy graves, graves y leves prescriban en plazos análogos a los de las propias infracciones, computados desde el día siguiente a aquel en que adquiera firmeza la resolución por la que se impone la sanción.",
  },
  {
    id: "lopsc-23",
    enunciado: "¿Qué órgano es competente, con carácter general, para sancionar las infracciones leves relativas a la ocupación de la vía pública que afecten a bienes de titularidad municipal?",
    opciones: [
      "El Ministro del Interior, en todo caso",
      "Los Alcaldes, en el ámbito de las competencias que la LO 4/2015 les atribuye respecto de determinadas infracciones que afecten a bienes o al ámbito de competencia municipal",
      "El Tribunal Constitucional",
      "El Congreso de los Diputados",
    ],
    correcta: 1,
    explicacion:
      "La LO 4/2015 atribuye a los Alcaldes competencia sancionadora respecto de determinadas infracciones que afecten a bienes de titularidad local o al ámbito de las competencias municipales, sin perjuicio de que, con carácter general, la potestad sancionadora corresponda a los Delegados y Subdelegados del Gobierno.",
  },
  {
    id: "lopsc-24",
    enunciado: "¿Cuál es la relación entre las infracciones administrativas tipificadas en la LO 4/2015 y los delitos regulados en el Código Penal?",
    opciones: [
      "Son completamente independientes y pueden sancionarse simultáneamente los mismos hechos por ambas vías",
      "El régimen sancionador de la LO 4/2015 tiene carácter subsidiario respecto de la vía penal: cuando los hechos puedan ser constitutivos de delito, se pondrán en conocimiento del órgano judicial o del Ministerio Fiscal, absteniéndose de continuar el procedimiento sancionador mientras la autoridad judicial no se pronuncie",
      "Las infracciones administrativas siempre tienen preferencia sobre el proceso penal",
      "No existe ninguna coordinación entre la vía administrativa y la penal",
    ],
    correcta: 1,
    explicacion:
      "En aplicación del principio non bis in idem y de la preferencia de la jurisdicción penal, cuando unos mismos hechos puedan ser constitutivos de delito y de infracción administrativa conforme a la LO 4/2015, se dará traslado al Ministerio Fiscal o al órgano judicial competente, absteniéndose la Administración de seguir el procedimiento sancionador mientras no recaiga resolución judicial firme.",
  },
  {
    id: "lopsc-25",
    enunciado: "¿Qué ocurre cuando la persona presuntamente responsable de una infracción a la LO 4/2015 es menor de edad?",
    opciones: [
      "Se le sanciona igual que a un adulto, sin ninguna especialidad",
      "Los hechos se ponen en conocimiento del Ministerio Fiscal y de quienes ejerzan la patria potestad o tutela del menor, sin perjuicio de las medidas correctoras que puedan corresponder conforme a la normativa de protección de menores",
      "Queda automáticamente exento de cualquier consecuencia",
      "Solo se le puede sancionar si supera los dieciséis años",
    ],
    correcta: 1,
    explicacion:
      "Cuando el presunto responsable de una infracción sea menor de edad, los hechos se ponen en conocimiento del Ministerio Fiscal y, en su caso, de quienes ostenten la patria potestad o tutela, actuando de forma coordinada con la normativa de protección de menores, dado el diferente régimen de responsabilidad aplicable a los menores de edad.",
  },
  {
    id: "lopsc-26",
    enunciado: "¿Qué establece la LO 4/2015 respecto de la celebración de espectáculos públicos y actividades recreativas en relación con las Fuerzas y Cuerpos de Seguridad?",
    opciones: [
      "Que la seguridad de estos eventos corresponde en exclusiva a empresas de seguridad privada, sin intervención policial",
      "Que las Fuerzas y Cuerpos de Seguridad pueden intervenir para el mantenimiento y, en su caso, restablecimiento de la seguridad ciudadana, en coordinación con las autoridades competentes en la materia (generalmente autonómicas o locales)",
      "Que quedan completamente excluidos de la aplicación de esta ley",
      "Que solo la Guardia Civil puede intervenir en espectáculos públicos",
    ],
    correcta: 1,
    explicacion:
      "La LO 4/2015 habilita a las Fuerzas y Cuerpos de Seguridad a intervenir en la celebración de espectáculos públicos y actividades recreativas para el mantenimiento y, en su caso, restablecimiento de la seguridad ciudadana, en coordinación con las autoridades competentes en materia de espectáculos públicos, que corresponde generalmente a las Comunidades Autónomas y a los Ayuntamientos.",
  },
  {
    id: "lopsc-27",
    enunciado: "¿Qué plazo máximo tiene, con carácter general, el procedimiento sancionador tramitado conforme a la LO 4/2015 para notificar la resolución expresa?",
    opciones: [
      "Un mes",
      "Seis meses, conforme al régimen general de los procedimientos sancionadores establecido en la Ley 39/2015",
      "Dos años",
      "No existe plazo máximo alguno",
    ],
    correcta: 1,
    explicacion:
      "En defecto de plazo específico distinto, el procedimiento sancionador tramitado conforme a la LO 4/2015 se rige supletoriamente por el plazo máximo general de seis meses para notificar la resolución expresa, previsto en la Ley 39/2015 del Procedimiento Administrativo Común, transcurrido el cual se produce la caducidad del procedimiento.",
  },
  {
    id: "lopsc-28",
    enunciado: "¿Qué recursos caben contra las resoluciones sancionadoras dictadas al amparo de la LO 4/2015?",
    opciones: [
      "Ninguno, son resoluciones firmes e inatacables desde su notificación",
      "Los recursos administrativos previstos con carácter general (alzada o, en su caso, potestativo de reposición) y, agotada la vía administrativa, el recurso contencioso-administrativo",
      "Únicamente el recurso de amparo constitucional",
      "Solo cabe recurso ante el Defensor del Pueblo",
    ],
    correcta: 1,
    explicacion:
      "Las resoluciones sancionadoras dictadas conforme a la LO 4/2015 pueden recurrirse mediante los recursos administrativos previstos con carácter general en la Ley 39/2015 (recurso de alzada u otro que proceda) y, una vez agotada la vía administrativa, mediante recurso contencioso-administrativo conforme a la Ley 29/1998.",
  },
  {
    id: "lopsc-29",
    enunciado: "¿Cuál es la naturaleza jurídica del comiso previsto como sanción accesoria en la LO 4/2015?",
    opciones: [
      "Una pena privativa de libertad sustitutiva de la multa",
      "Una medida de carácter accesorio a la sanción principal, consistente en la pérdida definitiva de los efectos, instrumentos, sustancias u objetos relacionados con la comisión de la infracción",
      "Una indemnización a favor de la víctima",
      "Una advertencia formal sin efectos patrimoniales",
    ],
    correcta: 1,
    explicacion:
      "El comiso previsto en la LO 4/2015 es una medida de carácter accesorio a la sanción principal (normalmente la multa), consistente en la pérdida definitiva y puesta a disposición de la Administración de los efectos, instrumentos, sustancias u objetos relacionados con la comisión de la infracción.",
  },
  {
    id: "lopsc-30",
    enunciado: "¿Qué disposición deroga la LO 4/2015 en su Disposición Derogatoria?",
    opciones: [
      "El Código Penal en su totalidad",
      "La Ley Orgánica 1/1992, de 21 de febrero, sobre Protección de la Seguridad Ciudadana",
      "La Ley Orgánica 2/1986, de Fuerzas y Cuerpos de Seguridad",
      "La Constitución Española de 1978",
    ],
    correcta: 1,
    explicacion:
      "La Disposición Derogatoria Única de la LO 4/2015 deroga expresamente la anterior Ley Orgánica 1/1992, de 21 de febrero, sobre Protección de la Seguridad Ciudadana, que hasta entonces regulaba esta materia.",
  },
];
