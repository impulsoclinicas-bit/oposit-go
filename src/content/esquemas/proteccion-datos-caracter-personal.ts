import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Marco normativo",
      puntos: [
        "Reglamento (UE) 2016/679, general de protección de datos (RGPD): de aplicación directa en todos los Estados miembros desde el 25 de mayo de 2018.",
        "Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD): adapta el ordenamiento español al RGPD y deroga la anterior LO 15/1999.",
        "Ley Orgánica 7/2021, de 26 de mayo: traspone la Directiva (UE) 2016/680 y regula el tratamiento de datos por las autoridades competentes (entre ellas, las Fuerzas y Cuerpos de Seguridad) con fines penales; opera como norma especial frente al régimen general del RGPD/LOPDGDD.",
      ],
    },
    {
      titulo: "Conceptos básicos (art. 4 RGPD)",
      puntos: [
        "Dato personal: toda información sobre una persona física identificada o identificable (\"interesado\").",
        "Tratamiento: cualquier operación o conjunto de operaciones sobre datos personales (recogida, registro, conservación, consulta, comunicación, etc.).",
        "Responsable del tratamiento: quien decide los fines y medios del tratamiento.",
        "Encargado del tratamiento: quien trata datos por cuenta del responsable.",
        "Consentimiento: manifestación de voluntad libre, específica, informada e inequívoca del interesado.",
        "Categorías especiales de datos (art. 9 RGPD): origen étnico o racial, opiniones políticas, convicciones religiosas o filosóficas, afiliación sindical, datos genéticos, biométricos, de salud, y relativos a la vida u orientación sexual; sujetas a garantías reforzadas.",
      ],
    },
    {
      titulo: "Principios del tratamiento (art. 5 RGPD)",
      puntos: [
        "Licitud, lealtad y transparencia.",
        "Limitación de la finalidad.",
        "Minimización de datos.",
        "Exactitud.",
        "Limitación del plazo de conservación.",
        "Integridad y confidencialidad.",
        "Responsabilidad proactiva (accountability) del responsable del tratamiento.",
      ],
    },
    {
      titulo: "Derechos de las personas (arts. 15-22 RGPD)",
      puntos: [
        "Derecho de acceso: conocer si se están tratando datos propios y a qué finalidad.",
        "Derecho de rectificación: corregir datos inexactos.",
        "Derecho de supresión (\"derecho al olvido\"): solicitar la eliminación de los datos.",
        "Derecho a la limitación del tratamiento.",
        "Derecho a la portabilidad de los datos.",
        "Derecho de oposición al tratamiento.",
      ],
    },
    {
      titulo: "Órganos de garantía y obligaciones",
      puntos: [
        "Agencia Española de Protección de Datos (AEPD): autoridad de control independiente en España.",
        "Delegado de Protección de Datos (DPO, arts. 37-39 RGPD): designación obligatoria, entre otros supuestos, en las Administraciones Públicas; informa, asesora y supervisa el cumplimiento normativo.",
        "Notificación de violaciones de seguridad (brechas de datos) a la AEPD en el plazo de 72 horas desde que se tenga constancia, salvo improbabilidad de riesgo para los derechos de los afectados (art. 33 RGPD).",
      ],
    },
    {
      titulo: "Régimen sancionador",
      puntos: [
        "El RGPD (art. 83) prevé multas de hasta 10.000.000 EUR (o 2% de la facturación anual) para determinadas infracciones, y hasta 20.000.000 EUR (o 4% de la facturación anual) para las más graves, tomando la cifra mayor en el caso de empresas.",
        "La LOPDGDD adapta el catálogo de infracciones (muy graves, graves y leves) y el procedimiento sancionador al ámbito español.",
      ],
    },
    {
      titulo: "Tratamiento de datos con fines policiales y penales (LO 7/2021)",
      puntos: [
        "Ámbito de aplicación: tratamiento de datos por las autoridades competentes (Fuerzas y Cuerpos de Seguridad, entre otras) para fines de prevención, detección, investigación y enjuiciamiento de infracciones penales, ejecución de sanciones penales, y protección y prevención frente a amenazas para la seguridad pública.",
        "Distinción entre categorías de interesados: sospechosos, condenados, víctimas y otras personas relacionadas con una infracción penal (testigos, contactos, etc.), con distinto grado de protección.",
        "Establece principios y garantías específicas adaptadas a la actividad policial y judicial penal, como norma especial que prevalece sobre el régimen general del RGPD para estos fines concretos.",
      ],
    },
  ],
};
