import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { noticias } from "@/lib/noticias";

export const metadata: Metadata = {
  title: "Convocatoria Policía Nacional 2026",
  description:
    "Plazas, requisitos, evolución y últimas noticias de la convocatoria vigente para la Escala Básica del Cuerpo Nacional de Policía.",
  alternates: { canonical: "/convocatoria" },
};

const datosClave = [
  { label: "Plazas convocadas", valor: "2.704" },
  { label: "Plazas de turno libre", valor: "2.163" },
  { label: "Plazas reserva militares", valor: "541" },
  { label: "Ratio de aptos por plaza", valor: "1,75" },
];

const requisitos = [
  "Tener nacionalidad española.",
  "Tener entre 18 y 30 años (el máximo se amplía en algunos supuestos, como ya ser funcionario de otro cuerpo policial).",
  "Estar en posesión del título de Graduado en ESO, Técnico de FP de grado medio o equivalente.",
  "No haber sido condenado por delito doloso ni separado del servicio de las Administraciones Públicas.",
  "Comprometerse a portar armas y, en su caso, a utilizarlas.",
  "Acreditar un nivel A2 de inglés o francés, según las certificaciones que admiten las bases.",
  "Cumplir los requisitos físicos y médicos del cuadro de exclusiones de las bases de la convocatoria.",
];

const evolucion = [
  { anio: "2025", total: "2.764", libres: "2.211", reserva: "553" },
  { anio: "2026", total: "2.704", libres: "2.163", reserva: "541" },
];

const preguntasFrecuentes = [
  {
    pregunta: "¿Qué es la Escala Básica?",
    respuesta:
      "Es la categoría de entrada al Cuerpo Nacional de Policía como Policía. Es la vía de acceso más numerosa (miles de plazas por convocatoria) y no exige titulación universitaria, solo el Graduado en ESO o equivalente.",
  },
  {
    pregunta: "¿En qué se diferencia de la Escala Ejecutiva?",
    respuesta:
      "La Escala Ejecutiva (categoría de Inspector) exige título universitario y se convoca con muchas menos plazas. Ambas comparten convocatoria en el tiempo pero son procesos y exámenes distintos.",
  },
  {
    pregunta: "¿Cuánto tarda todo el proceso, de la solicitud al ingreso?",
    respuesta:
      "Suele ir de un año a año y medio: solicitud, exámenes de la fase de oposición, listas de aprobados, y después el curso selectivo en la Escuela Nacional de Policía (Ávila), que dura varios meses.",
  },
  {
    pregunta: "¿Se puede volver a presentar si no se aprueba?",
    respuesta:
      "Sí. Al ser oposición libre (no hay límite de convocatorias), puedes volver a presentarte en la siguiente convocatoria si sigues cumpliendo los requisitos de edad y el resto de condiciones.",
  },
];

export default function ConvocatoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Convocatoria vigente"
        title="Convocatoria de Policía Nacional 2026 (Escala Básica)"
        description="Plazas, requisitos y evolución de la convocatoria en curso. Las fechas y las fases del examen están en la portada. Esto no sustituye la lectura de las bases oficiales."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Convocatoria", href: "/convocatoria" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-xl border border-accent-300 bg-accent-50 p-5 text-sm text-brand-900">
            <p className="font-semibold">Verifica siempre las bases oficiales</p>
            <p className="mt-1">
              Esta página resume la Resolución de 7 de julio de 2026 de la
              Dirección General de la Policía (
              <span className="font-mono text-xs">BOE-A-2026-15055</span>),
              publicada en el BOE núm. 167 de 10 de julio de 2026. Antes de dar
              cualquier fecha o requisito por definitivo, consulta el texto
              íntegro en{" "}
              <a
                href="https://www.boe.es"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline"
              >
                boe.es
              </a>{" "}
              y en la web de la Policía Nacional, y actualiza esta página en
              cuanto haya correcciones o una nueva convocatoria.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {datosClave.map((d) => (
              <div
                key={d.label}
                className="rounded-xl border border-brand-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-brand-900">{d.valor}</p>
                <p className="mt-1 text-sm text-brand-700">{d.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold text-brand-900">
              Evolución respecto a la convocatoria anterior
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-brand-200 bg-white shadow-sm">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-100 text-xs uppercase tracking-wide text-brand-500">
                    <th className="px-5 py-3">Convocatoria</th>
                    <th className="px-5 py-3">Plazas totales</th>
                    <th className="px-5 py-3">Turno libre</th>
                    <th className="px-5 py-3">Reserva militares</th>
                  </tr>
                </thead>
                <tbody>
                  {evolucion.map((e, i) => (
                    <tr
                      key={e.anio}
                      className={i !== evolucion.length - 1 ? "border-b border-brand-100" : ""}
                    >
                      <td className="px-5 py-3 font-semibold text-brand-900">{e.anio}</td>
                      <td className="px-5 py-3 text-brand-700">{e.total}</td>
                      <td className="px-5 py-3 text-brand-700">{e.libres}</td>
                      <td className="px-5 py-3 text-brand-700">{e.reserva}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-brand-500">
              La convocatoria 2026 sale con 60 plazas menos que la de 2025.
              Las plazas de reserva para militares que queden sin cubrir se
              suman a las de turno libre.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Últimas noticias</h2>
          <p className="mt-1 max-w-2xl text-sm text-brand-700">
            Hitos de esta convocatoria, de más reciente a más antiguo.
          </p>
          <ol className="mt-6 space-y-4 border-l-2 border-brand-200 pl-6">
            {noticias.map((noticia) => (
              <li key={noticia.titulo} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent-500"
                />
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {noticia.fecha}
                </p>
                <h3 className="mt-1 font-bold text-brand-900">{noticia.titulo}</h3>
                <p className="mt-1 text-sm text-brand-700">{noticia.resumen}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Requisitos para presentarte</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {requisitos.map((r) => (
              <li
                key={r}
                className="flex gap-3 rounded-xl border border-brand-200 bg-white p-4 text-sm text-brand-800 shadow-sm"
              >
                <span className="mt-0.5 text-accent-500" aria-hidden="true">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Preguntas frecuentes sobre la oposición</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {preguntasFrecuentes.map((p) => (
              <div
                key={p.pregunta}
                className="rounded-xl border border-brand-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-brand-900">{p.pregunta}</h3>
                <p className="mt-2 text-sm text-brand-700">{p.respuesta}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="El primer ejercicio es tipo test: prepáralo así"
        description="Practica con baterías de preguntas por tema, simulacros combinados y esquemas de repaso. Empieza gratis con los recursos de práctica."
        primaryLabel="Ver recursos gratuitos"
        primaryHref="/recursos"
        secondaryLabel="Ver el temario completo"
        secondaryHref="/temario"
      />

      <section className="py-10">
        <Container>
          <p className="text-xs text-brand-500">
            Fuentes consultadas: BOE-A-2026-15055 (Resolución de 7 de julio de
            2026, Dirección General de la Policía) y varios medios
            especializados en oposiciones que reportan el mismo desglose de
            plazas y fechas. Los datos de plazas, plazos y fechas
            corresponden a la convocatoria publicada en julio de 2026;{" "}
            <Link href="/contacto" className="underline">
              avísanos
            </Link>{" "}
            si detectas algo desactualizado o inexacto.
          </p>
        </Container>
      </section>
    </>
  );
}
