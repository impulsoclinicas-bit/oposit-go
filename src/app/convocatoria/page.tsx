import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Convocatoria Policía Nacional 2026",
  description:
    "Resumen de la convocatoria vigente para la Escala Básica del Cuerpo Nacional de Policía: plazas, plazos, fases del proceso selectivo y requisitos.",
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

const fases = [
  {
    titulo: "1. Fase de oposición",
    items: [
      "Primer ejercicio: cuestionario tipo test de 100 preguntas de conocimientos, a responder en 50 minutos.",
      "Psicotécnicos, cuestionario de personalidad y prueba biográfica (CIB), en el mismo acto que el examen de conocimientos.",
      "Segundo ejercicio: pruebas de aptitud física, varias marcas eliminatorias puntuadas de 0 a 10 (nota media mínima de 5; un 0 en cualquier ejercicio elimina).",
      "Reconocimiento médico y, en su caso, entrevista.",
    ],
  },
  {
    titulo: "2. Curso selectivo",
    items: [
      "Curso de formación en la Escuela Nacional de Policía (Ávila), de carácter selectivo: hay que superarlo para continuar.",
    ],
  },
  {
    titulo: "3. Prácticas",
    items: [
      "Módulo de prácticas en centros y dependencias policiales antes de la incorporación definitiva a la Escala Básica.",
    ],
  },
];

const fechas = [
  { hito: "Publicación en el BOE", fecha: "10 de julio de 2026 (BOE núm. 167)" },
  { hito: "Plazo de solicitudes", fecha: "13 a 31 de julio de 2026" },
  {
    hito: "Primer ejercicio (conocimientos, psicotécnicos, CIB y personalidad)",
    fecha: "26 de septiembre de 2026",
  },
  { hito: "Pruebas físicas", fecha: "Segunda quincena de octubre de 2026" },
];

const noticias = [
  {
    fecha: "13 ago. 2026",
    titulo: "Publicada la lista provisional de admitidos y excluidos",
    resumen:
      "La Dirección General de la Policía publicó en el BOE la relación de personas admitidas y excluidas a la Escala Básica. Quien figure como excluido tiene 10 días hábiles desde la publicación para subsanar su instancia.",
  },
  {
    fecha: "12 ago. 2026",
    titulo: "Consulta anticipada en el Portal del Aspirante",
    resumen:
      "Un día antes de la publicación oficial, ya se podía consultar de forma individualizada el estado de cada instancia en el Portal del Aspirante de la Policía Nacional.",
  },
  {
    fecha: "31 jul. 2026",
    titulo: "Cierre del plazo de solicitudes",
    resumen:
      "Terminó el plazo para presentar instancias, abierto desde el 13 de julio.",
  },
  {
    fecha: "10 jul. 2026",
    titulo: "Publicación de la convocatoria en el BOE",
    resumen:
      "Resolución de 7 de julio de 2026 de la Dirección General de la Policía: 2.704 plazas de Escala Básica y bajada del ratio de aptos por plaza a 1,75.",
  },
];

export default function ConvocatoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Convocatoria vigente"
        title="Convocatoria de Policía Nacional 2026 (Escala Básica)"
        description="Resumen claro de la convocatoria en curso, para que sepas a qué te enfrentas y cuándo. Esto no sustituye la lectura de las bases oficiales."
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
          <h2 className="text-2xl font-bold text-brand-900">Fechas clave</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-brand-200 bg-white shadow-sm">
            <table className="w-full min-w-[480px] text-left text-sm">
              <tbody>
                {fechas.map((f, i) => (
                  <tr
                    key={f.hito}
                    className={i !== fechas.length - 1 ? "border-b border-brand-100" : ""}
                  >
                    <td className="px-5 py-4 font-semibold text-brand-900">{f.hito}</td>
                    <td className="px-5 py-4 text-brand-700">{f.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
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

      <section className="bg-brand-50/60 py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-900">Cómo es el proceso selectivo</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {fases.map((fase) => (
              <div
                key={fase.titulo}
                className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-brand-900">{fase.titulo}</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-700">
                  {fase.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-brand-900">¿Qué preparamos en Oposit&amp;go?</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-success-600">Sí lo cubrimos</p>
                <ul className="mt-2 space-y-1.5 text-sm text-brand-700">
                  <li>Temario tipo test (el cuestionario de 100 preguntas)</li>
                  <li>
                    Pruebas psicotécnicas (series numéricas, series de
                    letras, sinónimos/antónimos y analogías verbales)
                  </li>
                  <li>Esquemas y resúmenes de repaso por tema</li>
                  <li>Simulacros combinados igual que el examen real</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-500">No lo cubrimos</p>
                <ul className="mt-2 space-y-1.5 text-sm text-brand-700">
                  <li>Entrenamiento de las pruebas de aptitud física</li>
                  <li>Preparación de la prueba biográfica (CIB) ni de la entrevista</li>
                </ul>
                <p className="mt-3 text-xs text-brand-500">
                  No somos una academia presencial: nos centramos en la
                  parte de estudio que se prepara con test, esquemas y
                  repaso, que es donde más ayuda un recurso online.
                </p>
              </div>
            </div>
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
            2026, Dirección General de la Policía) y medios especializados en
            oposiciones. Los datos de plazas, plazos y fechas corresponden a
            la convocatoria publicada en julio de 2026;{" "}
            <Link href="/contacto" className="underline">
              avísanos
            </Link>{" "}
            si detectas algo desactualizado.
          </p>
        </Container>
      </section>
    </>
  );
}
