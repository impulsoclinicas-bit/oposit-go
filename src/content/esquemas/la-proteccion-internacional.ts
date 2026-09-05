import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Marco general (Ley 12/2009, de asilo)",
      puntos: [
        "Objeto (art. 1): desarrolla el art. 13.4 CE; regula la protección internacional (asilo y protección subsidiaria) de las personas extracomunitarias y apátridas.",
        "Derecho de asilo (art. 2): protección dispensada a quienes se reconoce la condición de refugiado.",
        "Condición de refugiado (art. 3): fundados temores de persecución por raza, religión, nacionalidad, opiniones políticas, pertenencia a determinado grupo social, género, orientación o identidad sexual.",
        "Protección subsidiaria (art. 4): para quien no reúne los requisitos del asilo pero, de regresar a su país, se enfrentaría a un riesgo real de sufrir alguno de los daños graves del art. 10.",
        "Derechos garantizados (art. 5): no devolución ni expulsión de las personas reconocidas, además de otras medidas de asistencia.",
      ],
    },
    {
      titulo: "Condiciones y exclusiones",
      puntos: [
        "Daños graves (art. 10, protección subsidiaria): condena a pena de muerte o riesgo de su ejecución; tortura y tratos inhumanos o degradantes; amenazas graves contra la vida por violencia indiscriminada en conflicto internacional o interno.",
        "Causas de exclusión del asilo (art. 8): delitos contra la paz, de guerra o contra la humanidad; delito grave común fuera de España antes de ser refugiado; actos contrarios a los fines de Naciones Unidas.",
        "Causas de denegación (arts. 9 y 12, comunes a asilo y protección subsidiaria): constituir un peligro fundado para la seguridad de España, o representar una amenaza para la comunidad tras una condena firme por delito grave.",
      ],
    },
    {
      titulo: "Procedimiento: presentación de la solicitud",
      puntos: [
        "Plazo (art. 17.2): comparecencia sin demora y, en todo caso, en el plazo máximo de un mes desde la entrada en España o desde los hechos que justifiquen el temor fundado.",
        "La entrada ilegal no se sanciona cuando la realiza quien reúne los requisitos para la protección internacional (art. 17.2).",
        "Derechos del solicitante (art. 18.1): documentación como solicitante, asistencia jurídica gratuita e intérprete, comunicación al ACNUR, suspensión de devolución/expulsión/extradición, conocer el expediente, atención sanitaria y prestaciones sociales.",
        "Efectos de la presentación (art. 19.1): no devolución, retorno ni expulsión hasta que se resuelva la solicitud (salvo medidas cautelares por salud o seguridad pública).",
      ],
    },
    {
      titulo: "No admisión a trámite y solicitudes en frontera",
      puntos: [
        "No admisión a trámite en territorio (art. 20): la acuerda el Ministro del Interior, a propuesta de la Oficina de Asilo y Refugio, mediante resolución motivada; plazo máximo de notificación: un mes. Si transcurre sin notificarse, la solicitud se entiende admitida a trámite.",
        "Solicitudes en puesto fronterizo (art. 21): el Ministro del Interior puede inadmitir o denegar la solicitud; plazo de notificación: 4 días (ampliable a 10 si lo pide motivadamente el ACNUR); cabe petición de reexamen en 2 días, con suspensión de efectos.",
        "Si transcurre el plazo para resolver en frontera sin notificación expresa, se tramita por el procedimiento ordinario, autorizándose la entrada y permanencia provisional del solicitante (art. 21.5).",
      ],
    },
  ],
};
