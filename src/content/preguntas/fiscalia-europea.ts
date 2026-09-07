import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "fe-01",
    enunciado: "¿Qué Reglamento europeo desarrolla en España la Ley Orgánica 9/2021?",
    opciones: [
      "El Reglamento (UE) 2016/679 (RGPD)",
      "El Reglamento (UE) 2017/1939, por el que se crea la Fiscalía Europea",
      "El Reglamento (UE) 2018/1727 sobre Eurojust",
      "El Reglamento (UE) 2019/816",
    ],
    correcta: 1,
    explicacion: "El art. 1 de la LO 9/2021 aclara que contiene las normas de aplicación en España del Reglamento (UE) 2017/1939, que crea la Fiscalía Europea.",
  },
  {
    id: "fe-02",
    enunciado: "¿A qué tipo de delitos se aplica principalmente esta ley orgánica?",
    opciones: [
      "A todos los delitos cometidos por funcionarios públicos",
      "A los delitos que perjudican los intereses financieros de la Unión Europea",
      "A los delitos de terrorismo internacional",
      "A los delitos contra la seguridad vial",
    ],
    correcta: 1,
    explicacion: "El art. 2.1 delimita el ámbito de aplicación a los procedimientos penales por delitos que perjudiquen los intereses financieros de la Unión Europea.",
  },
  {
    id: "fe-03",
    enunciado: "¿Quiénes ejercen en España las funciones de la Fiscalía Europea?",
    opciones: [
      "Los Fiscales europeos delegados",
      "Únicamente el Fiscal General del Estado",
      "Los jueces de instrucción de la Audiencia Nacional",
      "La Policía Judicial de forma autónoma",
    ],
    correcta: 0,
    explicacion: "El art. 4 atribuye la investigación y el ejercicio de la acción penal en estos delitos a los Fiscales europeos delegados.",
  },
  {
    id: "fe-04",
    enunciado: "¿En qué ciudad tienen su sede los Fiscales europeos delegados según el artículo 16.1?",
    opciones: ["Barcelona", "Madrid", "Bruselas", "Luxemburgo"],
    correcta: 1,
    explicacion: "El art. 16.1 establece que los Fiscales europeos delegados ejercerán sus funciones con carácter de exclusividad y a tiempo completo, con sede en Madrid.",
  },
  {
    id: "fe-05",
    enunciado: "¿Pueden los Fiscales europeos delegados dar órdenes e instrucciones a la Policía Judicial?",
    opciones: [
      "No, carecen de esa facultad",
      "Sí, en el ejercicio de sus funciones (art. 5.2)",
      "Solo con autorización previa del Ministerio del Interior",
      "Solo en casos de flagrante delito",
    ],
    correcta: 1,
    explicacion: "El art. 5.2 establece que, en el ejercicio de sus funciones, los Fiscales europeos delegados podrán dar a los funcionarios de la Policía Judicial las órdenes e instrucciones procedentes en cada caso.",
  },
  {
    id: "fe-06",
    enunciado: "¿Pueden los Fiscales europeos delegados dar instrucciones a los miembros del Ministerio Fiscal ordinario?",
    opciones: [
      "Sí, sin ninguna limitación",
      "No, aunque pueden requerir su colaboración a través de la Fiscalía General del Estado",
      "Solo si el Fiscal General del Estado lo delega expresamente en cada caso",
      "Sí, pero solo en materia de delitos de blanqueo",
    ],
    correcta: 1,
    explicacion: "El art. 5.3 aclara que los Fiscales europeos delegados no podrán dar instrucciones a los miembros del Ministerio Fiscal, si bien podrán requerir su colaboración dirigiéndose a la Fiscalía General del Estado.",
  },
  {
    id: "fe-07",
    enunciado: "¿Qué órgano judicial es competente, con carácter general, para el conocimiento y fallo de estos procedimientos?",
    opciones: [
      "Los Juzgados de lo Penal ordinarios",
      "La Audiencia Nacional",
      "El Tribunal Constitucional",
      "Los Tribunales Superiores de Justicia en todo caso",
    ],
    correcta: 1,
    explicacion: "El art. 7.1 atribuye la competencia general a la Audiencia Nacional, salvo los supuestos de aforamiento, en que corresponde al Tribunal Supremo o al Tribunal Superior de Justicia.",
  },
  {
    id: "fe-08",
    enunciado: "¿Qué figura se constituye en cada órgano judicial competente para autorizar diligencias restrictivas de derechos fundamentales?",
    opciones: ["El Juez de garantías", "El Defensor del Pueblo", "El Fiscal General del Estado", "El Ministro de Justicia"],
    correcta: 0,
    explicacion: "El art. 8 crea la figura del Juez de garantías, competente entre otras cosas para autorizar diligencias de investigación restrictivas de derechos fundamentales y medidas cautelares personales.",
  },
  {
    id: "fe-09",
    enunciado: "Si la Policía Judicial detiene a una persona por hechos competencia de la Fiscalía Europea, ¿en qué plazo máximo debe ponerla a su disposición?",
    opciones: ["12 horas", "24 horas", "48 horas", "72 horas"],
    correcta: 1,
    explicacion: "El art. 78.1 establece que la Policía Judicial pondrá al detenido a disposición del Fiscal europeo delegado inmediatamente y, en todo caso, en el plazo de veinticuatro horas desde su detención.",
  },
  {
    id: "fe-10",
    enunciado: "¿Qué norma se aplica de forma supletoria en lo no previsto por esta ley orgánica?",
    opciones: [
      "El Código Penal exclusivamente",
      "La Ley de Enjuiciamiento Criminal, en particular el procedimiento abreviado",
      "La Ley de Enjuiciamiento Civil",
      "El derecho de la Unión Europea de forma directa, sin normativa española",
    ],
    correcta: 1,
    explicacion: "El art. 2.2 remite, en todo lo no previsto, a la Ley de Enjuiciamiento Criminal, en particular a lo dispuesto para el procedimiento abreviado.",
  },
  {
    id: "fe-11",
    enunciado: "¿Dónde tiene su sede la Fiscalía Europea creada por el Reglamento (UE) 2017/1939?",
    opciones: ["Madrid", "Bruselas", "Luxemburgo", "Estrasburgo"],
    correcta: 2,
    explicacion:
      "La Fiscalía Europea, creada por el Reglamento (UE) 2017/1939, tiene su sede central en Luxemburgo, sin perjuicio de que los Fiscales europeos delegados ejerzan sus funciones de forma descentralizada en cada Estado miembro participante (en España, con sede en Madrid, conforme al art. 16.1 de la LO 9/2021).",
  },
  {
    id: "fe-12",
    enunciado: "¿Participan todos los Estados miembros de la Unión Europea en la Fiscalía Europea?",
    opciones: [
      "Sí, su participación es obligatoria para todos los Estados miembros sin excepción",
      "No, se constituyó mediante el mecanismo de cooperación reforzada y no todos los Estados miembros participan en ella",
      "Solo participan los Estados fundadores originales de la Unión Europea",
      "Únicamente participan los Estados de la eurozona",
    ],
    correcta: 1,
    explicacion:
      "La Fiscalía Europea se constituyó mediante el mecanismo de cooperación reforzada previsto en los Tratados de la Unión Europea, lo que permite que no todos los Estados miembros participen en ella; España sí forma parte de los Estados participantes, cuyo número ha ido incrementándose desde la puesta en marcha del organismo.",
  },
  {
    id: "fe-13",
    enunciado: "¿Qué es el Colegio de la Fiscalía Europea?",
    opciones: [
      "El órgano compuesto por el Fiscal Europeo Jefe y un Fiscal Europeo por cada Estado miembro participante, encargado de supervisar las actividades de la Fiscalía Europea y adoptar decisiones sobre cuestiones estratégicas y generales",
      "Un órgano exclusivamente académico de formación de fiscales",
      "Un sinónimo de los Fiscales europeos delegados destinados en cada Estado miembro",
      "Un tribunal encargado de resolver los recursos contra las decisiones de los Fiscales europeos delegados",
    ],
    correcta: 0,
    explicacion:
      "El Colegio de la Fiscalía Europea está compuesto por el Fiscal Europeo Jefe y un Fiscal Europeo por cada Estado miembro participante, y es el órgano encargado de supervisar las actividades generales de la institución, adoptar decisiones sobre cuestiones estratégicas y resolver cuestiones generales derivadas de casos concretos, sin perjuicio de que la dirección operativa de las investigaciones corresponda a las Salas Permanentes y a los Fiscales europeos delegados.",
  },
  {
    id: "fe-14",
    enunciado: "¿Se limita la competencia de la Fiscalía Europea exclusivamente a los delitos que perjudican directamente el presupuesto de la Unión Europea, o alcanza también a otros supuestos?",
    opciones: [
      "Alcanza también a los delitos graves de fraude transfronterizo del IVA que superen un umbral de perjuicio conjunto determinado, además de los delitos que perjudican los intereses financieros de la Unión en sentido estricto",
      "Se limita en exclusiva a los delitos de corrupción cometidos por autoridades nacionales",
      "Comprende cualquier delito cometido dentro del territorio de la Unión Europea, sin ninguna limitación",
      "Se limita exclusivamente a delitos de blanqueo de capitales",
    ],
    correcta: 0,
    explicacion:
      "Además de los delitos que perjudican directamente los intereses financieros de la Unión Europea (fraude en subvenciones o contratación pública europea, entre otros), la competencia de la Fiscalía Europea alcanza también a los delitos graves de fraude transfronterizo del IVA que superen un umbral de perjuicio conjunto determinado, en la medida en que dicho fraude repercute igualmente en los recursos propios de la Unión.",
  },
  {
    id: "fe-15",
    enunciado: "¿Qué diferencia a la Fiscalía Europea de la Oficina Europea de Lucha contra el Fraude (OLAF)?",
    opciones: [
      "La Fiscalía Europea tiene competencias de investigación y ejercicio de la acción penal ante los tribunales nacionales; la OLAF realiza investigaciones administrativas, pero carece de potestad para instruir causas penales o ejercer la acusación",
      "Son organismos completamente idénticos, con las mismas competencias y facultades",
      "La OLAF tiene competencias penales más amplias que la Fiscalía Europea",
      "La Fiscalía Europea sustituye por completo a la OLAF, que ha dejado de existir",
    ],
    correcta: 0,
    explicacion:
      "La Oficina Europea de Lucha contra el Fraude (OLAF) realiza investigaciones de naturaleza administrativa sobre fraudes que afectan a los intereses financieros de la Unión Europea, pero carece de potestad para instruir causas penales o ejercer la acusación ante los tribunales; la Fiscalía Europea, en cambio, tiene competencias propiamente penales, de investigación y de ejercicio de la acción penal ante los órganos judiciales nacionales, por lo que ambos organismos cooperan y se complementan sin ser equivalentes.",
  },
];
