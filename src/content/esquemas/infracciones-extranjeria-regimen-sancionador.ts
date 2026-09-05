import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Marco general (Título III, LO 4/2000)",
      puntos: [
        "Potestad sancionadora (art. 50): se ejerce conforme a la propia ley orgánica y a la normativa general de procedimiento administrativo.",
        "Clasificación de las infracciones (art. 51.2): leves, graves y muy graves.",
        "Prescripción de las infracciones (art. 56.1): muy graves a los 3 años, graves a los 2 años, leves a los 6 meses.",
        "Prescripción de las sanciones (art. 56.2): muy graves a los 5 años, graves a los 2 años, leves al año.",
      ],
    },
    {
      titulo: "Infracciones (arts. 52-54)",
      puntos: [
        "Leves (art. 52): p. ej., omisión o retraso en comunicar cambios de nacionalidad/estado civil/domicilio; retraso de hasta 3 meses en solicitar renovación de autorización caducada.",
        "Graves (art. 53): p. ej., encontrarse irregularmente en España por carecer de autorización de residencia o tenerla caducada más de 3 meses sin haber solicitado su renovación; trabajar sin autorización; tercera infracción leve en un año.",
        "Muy graves (art. 54): p. ej., inducir, promover, favorecer o facilitar con ánimo de lucro la inmigración clandestina o la permanencia irregular (cuando no sea delito); discriminación racial, étnica o religiosa (cuando no sea delito); tercera infracción grave en un año.",
      ],
    },
    {
      titulo: "Sanciones (art. 55)",
      puntos: [
        "Leves: multa de hasta 500 €.",
        "Graves: multa de 501 a 10.000 €.",
        "Muy graves: multa de 10.001 a 100.000 € (con cuantías específicas superiores para infracciones de transportistas).",
        "Competencia sancionadora (art. 55.2): con carácter general, el Subdelegado del Gobierno o el Delegado del Gobierno en comunidades autónomas uniprovinciales; el Secretario de Estado de Seguridad para las infracciones del art. 54.1.a) (actividades contrarias a la seguridad nacional).",
      ],
    },
    {
      titulo: "La expulsión (art. 57) y sus efectos (art. 58)",
      puntos: [
        "Procede por infracciones muy graves, o por determinadas infracciones graves (art. 53.1 a, b, c, d y f), en lugar de la multa, aplicando el principio de proporcionalidad.",
        "También procede si el extranjero ha sido condenado (dentro o fuera de España) por delito doloso con pena privativa de libertad superior a un año, salvo cancelación de antecedentes.",
        "No pueden imponerse conjuntamente expulsión y multa (art. 57.3).",
        "Supuestos protegidos frente a la expulsión (art. 57.5): nacidos en España con residencia legal los últimos 5 años, residentes de larga duración, españoles de origen que perdieron la nacionalidad, beneficiarios de determinadas prestaciones, entre otros.",
        "Efectos (art. 58): prohibición de entrada de hasta 5 años con carácter general, ampliable excepcionalmente hasta 10 años si el extranjero supone una amenaza grave para el orden público, la seguridad pública, la seguridad nacional o la salud pública.",
      ],
    },
    {
      titulo: "Medidas cautelares e internamiento (arts. 61-62)",
      puntos: [
        "Medidas cautelares (art. 61.1): presentación periódica, residencia obligatoria, retirada de pasaporte, detención cautelar (máx. 72 horas) e internamiento preventivo con autorización judicial.",
        "Ingreso en Centro de Internamiento de Extranjeros (CIE, art. 62): requiere autorización del Juez de Instrucción, previa audiencia del interesado y del Ministerio Fiscal; duración máxima 60 días; no cabe un nuevo internamiento por las mismas causas en el mismo expediente.",
        "Los CIE no tienen carácter penitenciario; el internamiento solo priva del derecho ambulatorio (art. 62 bis).",
        "No pueden internarse menores (art. 62.4); los menores extranjeros no acompañados se ponen a disposición de las entidades públicas de protección de menores.",
      ],
    },
    {
      titulo: "Protección de víctimas de tráfico y trata (arts. 59 y 59 bis)",
      puntos: [
        "El extranjero irregular víctima, perjudicado o testigo de tráfico ilícito de personas puede quedar exento de responsabilidad y no ser expulsado si denuncia o coopera con las autoridades (art. 59).",
        "Víctimas de trata de seres humanos (art. 59 bis): periodo de restablecimiento y reflexión de al menos 90 días, durante el cual se suspende el expediente sancionador y se autoriza la estancia temporal.",
      ],
    },
  ],
};
