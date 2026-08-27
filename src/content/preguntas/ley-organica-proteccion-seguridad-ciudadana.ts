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
];
