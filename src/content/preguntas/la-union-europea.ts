import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "ue-01",
    enunciado: "¿Qué tratado creó la Comunidad Económica Europea (CEE), antecedente directo de la Unión Europea?",
    opciones: [
      "El Tratado de París (1951)",
      "El Tratado de Roma (1957)",
      "El Tratado de Maastricht (1992)",
      "El Tratado de Lisboa (2007)",
    ],
    correcta: 1,
    explicacion:
      "El Tratado de Roma de 1957 creó la Comunidad Económica Europea (CEE) y la Comunidad Europea de la Energía Atómica (Euratom); el Tratado de París de 1951 había creado antes la CECA (Comunidad Europea del Carbón y del Acero).",
  },
  {
    id: "ue-02",
    enunciado: "¿Qué tratado creó la Unión Europea tal y como la conocemos, con sus tres pilares originales?",
    opciones: [
      "El Tratado de Ámsterdam (1997)",
      "El Tratado de Maastricht (1992)",
      "El Acta Única Europea (1986)",
      "El Tratado de Niza (2001)",
    ],
    correcta: 1,
    explicacion:
      "El Tratado de Maastricht (Tratado de la Unión Europea, 1992) creó la Unión Europea, articulada en tres pilares: las Comunidades Europeas, la Política Exterior y de Seguridad Común, y la cooperación en Justicia e Interior.",
  },
  {
    id: "ue-03",
    enunciado: "¿En qué año entró España a formar parte de las Comunidades Europeas?",
    opciones: ["1981", "1986", "1992", "1995"],
    correcta: 1,
    explicacion:
      "España (junto con Portugal) ingresó en las Comunidades Europeas el 1 de enero de 1986.",
  },
  {
    id: "ue-04",
    enunciado: "¿Qué tratado, en vigor desde 2009, es el que actualmente rige el funcionamiento de la Unión Europea junto al TUE?",
    opciones: [
      "El Tratado de Niza",
      "El Tratado de Lisboa",
      "El Tratado de Ámsterdam",
      "El Tratado de Roma",
    ],
    correcta: 1,
    explicacion:
      "El Tratado de Lisboa (firmado en 2007, en vigor desde el 1 de diciembre de 2009) reforma el Tratado de la Unión Europea (TUE) y el Tratado de Funcionamiento de la Unión Europea (TFUE), suprime la estructura de pilares y dota a la UE de personalidad jurídica propia.",
  },
  {
    id: "ue-05",
    enunciado: "¿Cuál de las siguientes es una institución de la Unión Europea según el artículo 13 del TUE?",
    opciones: [
      "El Consejo de Europa",
      "El Parlamento Europeo",
      "La OTAN",
      "El Tribunal Europeo de Derechos Humanos",
    ],
    correcta: 1,
    explicacion:
      "El Parlamento Europeo es una de las siete instituciones de la UE (art. 13 TUE), junto con el Consejo Europeo, el Consejo, la Comisión Europea, el Tribunal de Justicia de la UE, el Banco Central Europeo y el Tribunal de Cuentas. El Consejo de Europa y el TEDH NO son instituciones de la UE.",
  },
  {
    id: "ue-06",
    enunciado: "¿Cómo se eligen los miembros del Parlamento Europeo?",
    opciones: [
      "Son designados por los gobiernos de cada Estado miembro",
      "Por sufragio universal directo de los ciudadanos de la Unión, cada 5 años",
      "Son elegidos por los Parlamentos nacionales",
      "Son nombrados por la Comisión Europea",
    ],
    correcta: 1,
    explicacion:
      "El Parlamento Europeo es elegido directamente por los ciudadanos de la UE por sufragio universal libre y secreto cada cinco años.",
  },
  {
    id: "ue-07",
    enunciado: "¿Qué institución representa a los gobiernos de los Estados miembros y ejerce, junto al Parlamento, la función legislativa y presupuestaria?",
    opciones: ["La Comisión Europea", "El Consejo de la Unión Europea", "El Consejo Europeo", "El Tribunal de Cuentas"],
    correcta: 1,
    explicacion:
      "El Consejo de la Unión Europea (\"el Consejo\"), formado por un representante ministerial de cada Estado miembro, ejerce junto al Parlamento Europeo la función legislativa y presupuestaria.",
  },
  {
    id: "ue-08",
    enunciado: "¿Cuál es la función principal del Consejo Europeo?",
    opciones: [
      "Legislar sobre el mercado interior",
      "Dar a la Unión los impulsos necesarios para su desarrollo y definir sus orientaciones y prioridades políticas generales, sin ejercer función legislativa",
      "Juzgar los conflictos entre Estados miembros",
      "Administrar el presupuesto de la Unión",
    ],
    correcta: 1,
    explicacion:
      "El Consejo Europeo, formado por los Jefes de Estado o de Gobierno, da a la Unión los impulsos necesarios para su desarrollo y define sus orientaciones y prioridades políticas generales, pero no ejerce función legislativa (art. 15 TUE).",
  },
  {
    id: "ue-09",
    enunciado: "¿Qué institución de la UE es conocida como la \"guardiana de los Tratados\" y tiene el cuasi-monopolio de la iniciativa legislativa?",
    opciones: ["El Consejo Europeo", "La Comisión Europea", "El Tribunal de Justicia de la UE", "El Banco Central Europeo"],
    correcta: 1,
    explicacion:
      "La Comisión Europea vela por la aplicación de los Tratados y del Derecho de la Unión (\"guardiana de los Tratados\") y tiene, con carácter general, el monopolio de la iniciativa legislativa.",
  },
  {
    id: "ue-10",
    enunciado: "¿Cuál es la función principal del Tribunal de Justicia de la Unión Europea (TJUE)?",
    opciones: [
      "Garantizar el respeto del Derecho de la Unión en la interpretación y aplicación de los Tratados",
      "Proteger los derechos humanos en el ámbito del Consejo de Europa",
      "Fijar el tipo de interés de la eurozona",
      "Aprobar el presupuesto anual de la Unión",
    ],
    correcta: 0,
    explicacion:
      "El TJUE (con sede en Luxemburgo) garantiza el respeto del Derecho de la Unión Europea en la interpretación y aplicación de los Tratados. No debe confundirse con el Tribunal Europeo de Derechos Humanos (TEDH), que pertenece al Consejo de Europa (con sede en Estrasburgo), organización distinta de la UE.",
  },
  {
    id: "ue-11",
    enunciado: "El Derecho derivado de la Unión Europea incluye, entre otros, los reglamentos y las directivas. ¿Cuál es la diferencia principal entre ambos?",
    opciones: [
      "El reglamento necesita transposición nacional; la directiva no",
      "El reglamento tiene alcance general y es directamente aplicable en todos los Estados miembros; la directiva obliga en cuanto al resultado, dejando a cada Estado la elección de la forma y los medios (necesita transposición)",
      "Ambos son idénticos en sus efectos jurídicos",
      "Solo el reglamento es vinculante; la directiva es una simple recomendación",
    ],
    correcta: 1,
    explicacion:
      "El art. 288 TFUE distingue: el reglamento tiene alcance general, es obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro; la directiva obliga al Estado destinatario en cuanto al resultado que debe conseguirse, dejándole la elección de la forma y los medios (requiere transposición a norma interna).",
  },
  {
    id: "ue-12",
    enunciado: "¿Qué agencia coordina la cooperación policial entre los Estados miembros de la UE en la lucha contra la delincuencia grave y organizada?",
    opciones: ["Frontex", "Europol", "Eurojust", "Interpol"],
    correcta: 1,
    explicacion:
      "Europol es la Agencia de la Unión Europea para la Cooperación Policial, con sede en La Haya, que apoya a los Estados miembros en la prevención y lucha contra la delincuencia grave y organizada y el terrorismo. Frontex es la agencia de fronteras; Eurojust coordina la cooperación judicial; Interpol no es un organismo de la UE.",
  },
  {
    id: "ue-13",
    enunciado: "¿Qué implica el principio de primacía del Derecho de la Unión Europea sobre el Derecho nacional de los Estados miembros?",
    opciones: [
      "Que, en caso de conflicto, el Derecho de la Unión prevalece sobre el Derecho nacional de los Estados miembros, incluso sobre normas de rango constitucional en el ámbito de aplicación del Derecho de la Unión, según la jurisprudencia del TJUE",
      "Que el Derecho nacional siempre prevalece sobre el Derecho de la Unión Europea",
      "Que ambos ordenamientos son completamente independientes, sin ninguna relación de prevalencia",
      "Que la primacía solo se aplica a los reglamentos, nunca a las directivas ya transpuestas",
    ],
    correcta: 0,
    explicacion:
      "El principio de primacía, desarrollado por la jurisprudencia del Tribunal de Justicia de la Unión Europea desde la sentencia Costa contra ENEL (1964), implica que, en caso de conflicto, el Derecho de la Unión prevalece sobre el Derecho nacional de los Estados miembros, debiendo el juez nacional inaplicar la norma interna contraria al Derecho de la Unión dentro de su ámbito de aplicación.",
  },
  {
    id: "ue-14",
    enunciado: "¿Qué establece el principio de subsidiariedad, recogido en el artículo 5 del TUE?",
    opciones: [
      "Que, en los ámbitos que no sean de su competencia exclusiva, la Unión solo intervendrá en caso de que los objetivos de la acción pretendida no puedan ser alcanzados de manera suficiente por los Estados miembros, y sí puedan lograrse mejor a escala de la Unión",
      "Que la Unión Europea puede intervenir en cualquier materia, sin ninguna limitación competencial",
      "Que los Estados miembros nunca pueden legislar en materias reguladas por la Unión",
      "Que las Comunidades Autónomas pueden legislar directamente en materia de competencia exclusiva de la Unión",
    ],
    correcta: 0,
    explicacion:
      "El art. 5.3 TUE recoge el principio de subsidiariedad, según el cual, en los ámbitos que no sean de su competencia exclusiva, la Unión solo intervendrá en caso de que, y en la medida en que, los objetivos de la acción pretendida no puedan ser alcanzados de manera suficiente por los Estados miembros, ni a nivel central ni a nivel regional o local, sino que puedan alcanzarse mejor, debido a la dimensión o a los efectos de la acción pretendida, a escala de la Unión.",
  },
  {
    id: "ue-15",
    enunciado: "¿Qué derechos reconoce la ciudadanía de la Unión Europea, conforme al artículo 20 del TFUE?",
    opciones: [
      "Entre otros, el derecho a circular y residir libremente en el territorio de los Estados miembros, el derecho de sufragio activo y pasivo en las elecciones municipales y al Parlamento Europeo en el Estado de residencia, y el derecho a la protección diplomática y consular de cualquier Estado miembro fuera de la UE",
      "El derecho a obtener automáticamente la nacionalidad de cualquier Estado miembro",
      "Únicamente el derecho a circular libremente, sin ningún otro derecho asociado",
      "El derecho a votar en las elecciones legislativas nacionales del Estado de residencia, aunque no se tenga su nacionalidad",
    ],
    correcta: 0,
    explicacion:
      "El art. 20.2 TFUE reconoce a todo ciudadano de la Unión, que es quien ostenta la nacionalidad de un Estado miembro, el derecho a circular y residir libremente en el territorio de los Estados miembros, el derecho de sufragio activo y pasivo en las elecciones municipales y al Parlamento Europeo en su Estado de residencia en las mismas condiciones que los nacionales de dicho Estado, y el derecho a acogerse, en el territorio de un tercer país en el que no esté representado su Estado, a la protección diplomática y consular de cualquier otro Estado miembro.",
  },
];
