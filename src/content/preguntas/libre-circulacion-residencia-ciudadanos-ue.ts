import type { Pregunta } from "@/lib/preguntas";

export const preguntas: Pregunta[] = [
  {
    id: "cue-01",
    enunciado: "¿Qué norma regula en España la entrada, libre circulación y residencia de los ciudadanos de otros Estados miembros de la Unión Europea?",
    opciones: [
      "El Real Decreto 240/2007, de 16 de febrero",
      "La Ley Orgánica 4/2000",
      "El Reglamento (UE) 2016/399",
      "La Ley 12/2009, de asilo",
    ],
    correcta: 0,
    explicacion:
      "El Real Decreto 240/2007, de 16 de febrero, regula las condiciones para el ejercicio de los derechos de entrada, libre circulación, estancia, residencia y trabajo en España de los ciudadanos de otros Estados miembros de la UE y del resto de Estados parte en el Espacio Económico Europeo.",
  },
  {
    id: "cue-02",
    enunciado: "¿Con qué documentación puede entrar en España un ciudadano de la Unión Europea, según el artículo 4.1?",
    opciones: [
      "Únicamente con visado expedido por España",
      "Con el pasaporte o documento de identidad válido y en vigor en el que conste su nacionalidad",
      "Solo con permiso de residencia previo",
      "Con cualquier documento, sin necesidad de que acredite su identidad",
    ],
    correcta: 1,
    explicacion:
      "El art. 4.1 establece que la entrada en territorio español del ciudadano de la Unión se efectuará con el pasaporte o documento de identidad válido y en vigor en el que conste la nacionalidad del titular, sin necesitar visado.",
  },
  {
    id: "cue-03",
    enunciado: "¿Durante cuánto tiempo puede permanecer en España un ciudadano de la UE con solo el pasaporte o documento de identidad, sin necesidad de registrarse (art. 6)?",
    opciones: [
      "Un mes",
      "Una estancia inferior a tres meses",
      "Seis meses",
      "Un año",
    ],
    correcta: 1,
    explicacion:
      "El art. 6.1 permite una estancia inferior a tres meses con la sola posesión del pasaporte o documento de identidad en vigor, sin que dicha permanencia compute a efectos de residencia.",
  },
  {
    id: "cue-04",
    enunciado: "¿Cuáles son, entre otros, los supuestos que dan derecho de residencia superior a tres meses a un ciudadano de la UE, según el artículo 7?",
    opciones: [
      "Ser trabajador por cuenta ajena o propia en España, o disponer de recursos suficientes y un seguro de enfermedad que cubra todos los riesgos en España",
      "Únicamente ser propietario de un inmueble en España",
      "Solo estar casado con un ciudadano español",
      "Cualquier ciudadano de la UE tiene derecho automático sin ningún requisito",
    ],
    correcta: 0,
    explicacion:
      "El art. 7.1 reconoce el derecho de residencia superior a tres meses, entre otros supuestos, a quien sea trabajador por cuenta propia o ajena en España, o a quien disponga de recursos suficientes para no ser una carga para la asistencia social y de un seguro de enfermedad que cubra todos los riesgos.",
  },
  {
    id: "cue-05",
    enunciado: "¿Tras cuántos años de residencia legal continuada se adquiere el derecho a residir con carácter permanente, según el artículo 10.1?",
    opciones: ["Dos años", "Tres años", "Cinco años", "Diez años"],
    correcta: 2,
    explicacion:
      "El art. 10.1 reconoce el derecho a residir con carácter permanente a quien haya residido legalmente en España durante un período continuado de cinco años, sin sujeción ya a las condiciones de recursos o actividad exigidas para la residencia temporal.",
  },
  {
    id: "cue-06",
    enunciado: "¿Puede un trabajador jubilado adquirir el derecho de residencia permanente antes de los cinco años, según el artículo 10.2?",
    opciones: [
      "No, el plazo de cinco años es siempre inexcusable",
      "Sí, si ha alcanzado la edad de jubilación tras haber trabajado en España al menos los últimos doce meses y haber residido de forma continuada más de tres años",
      "Sí, pero solo si es de nacionalidad española de origen",
      "Solo si lo autoriza expresamente el Ministerio de Trabajo",
    ],
    correcta: 1,
    explicacion:
      "El art. 10.2.a) permite adquirir la residencia permanente antes de los cinco años al trabajador que, al cesar su actividad, haya alcanzado la edad de jubilación con derecho a pensión, si ha trabajado en España al menos los últimos doce meses y ha residido de forma continuada más de tres años.",
  },
  {
    id: "cue-07",
    enunciado: "¿Cuándo se pierde el derecho de residencia permanente por ausencia del territorio español, según el artículo 10.7?",
    opciones: [
      "Nunca se pierde una vez adquirido",
      "Por ausencia del territorio español durante más de dos años consecutivos",
      "Por ausencia de más de un mes",
      "Por cualquier ausencia, sea cual sea su duración",
    ],
    correcta: 1,
    explicacion:
      "El art. 10.7 establece que se pierde el derecho de residencia permanente por ausencia del territorio español durante más de dos años consecutivos.",
  },
  {
    id: "cue-08",
    enunciado: "¿Qué medidas pueden adoptarse frente a un ciudadano de la UE o de su familia por razones de orden público, seguridad o salud pública, según el artículo 15.1?",
    opciones: [
      "Impedir la entrada en España, denegar la inscripción registral o la expedición de tarjetas de residencia, u ordenar la expulsión o devolución",
      "Únicamente advertir verbalmente al interesado",
      "Solo se puede imponer una sanción económica",
      "Ninguna, los ciudadanos de la UE gozan de inmunidad absoluta frente a estas medidas",
    ],
    correcta: 0,
    explicacion:
      "El art. 15.1 permite, por razones de orden público, seguridad o salud pública, impedir la entrada en España, denegar la inscripción en el Registro Central de Extranjeros o la expedición/renovación de tarjetas de residencia, u ordenar la expulsión o devolución.",
  },
  {
    id: "cue-09",
    enunciado: "¿Qué requisito adicional exige el artículo 15.1 para expulsar a un ciudadano de la UE que ya ha adquirido el derecho de residencia permanente?",
    opciones: [
      "Ninguno, se puede expulsar igual que a quien no tiene residencia permanente",
      "Que existan motivos graves de orden público o seguridad pública",
      "Que lo solicite expresamente su país de origen",
      "Que haya sido condenado penalmente en cualquier momento de su vida",
    ],
    correcta: 1,
    explicacion:
      "El art. 15.1 exige, para expulsar a quien ya ha adquirido el derecho de residencia permanente, que existan motivos graves de orden público o seguridad pública, valorando además la duración de su residencia e integración social en España.",
  },
  {
    id: "cue-10",
    enunciado: "Según el artículo 15.5.d), ¿en qué debe fundarse una medida de expulsión por razones de orden público o seguridad pública?",
    opciones: [
      "Exclusivamente en la conducta personal del interesado, que debe constituir una amenaza real, actual y suficientemente grave para un interés fundamental de la sociedad",
      "En la mera existencia de condenas penales anteriores, sin más valoración",
      "En consideraciones de índole económica",
      "En la nacionalidad del interesado",
    ],
    correcta: 0,
    explicacion:
      "El art. 15.5.d) exige que estas medidas se funden exclusivamente en la conducta personal del interesado, constitutiva de una amenaza real, actual y suficientemente grave para un interés fundamental de la sociedad; la existencia de condenas penales anteriores no es, por sí sola, razón suficiente.",
  },
];
