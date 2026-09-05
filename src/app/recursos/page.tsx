import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { QuizRunner } from "@/components/QuizRunner";
import { recursosGratis } from "@/lib/recursos-gratis";
import { getEsquemaByTema } from "@/content/esquemas";

export const metadata: Metadata = {
  title: "Pruébanos",
  description:
    "Tests gratuitos tipo examen para practicar antes de la oposición a Policía Nacional, con corrección y explicación al instante. Sin registro.",
  alternates: { canonical: "/recursos" },
};

const esquemaEjemplo = getEsquemaByTema("la-direccion-general-de-la-policia")!;

export default function RecursosPage() {
  return (
    <>
      <PageHero
        eyebrow="Gratis, sin registro"
        title="Pruébanos"
        description="Practica con tests reales tipo examen: responde, corrige y consulta la explicación de cada pregunta al instante, sin registro ni pago."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Pruébanos", href: "/recursos" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div>
            <h2 className="text-2xl font-bold text-brand-900">
              Esquema de ejemplo: régimen de personal de la Policía Nacional
            </h2>
            <p className="mt-1 text-sm text-brand-700">
              Un fragmento real de uno de los esquemas de repaso del temario.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {esquemaEjemplo.secciones.slice(0, 2).map((seccion) => (
                <div
                  key={seccion.titulo}
                  className="rounded-xl border border-brand-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm font-bold text-brand-900">{seccion.titulo}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-brand-700">
                    {seccion.puntos.map((punto, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                        {punto}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-16">
            {recursosGratis.map((recurso) => (
              <div key={recurso.slug} id={recurso.slug}>
                <h2 className="text-2xl font-bold text-brand-900">{recurso.titulo}</h2>
                <p className="mt-1 text-sm text-brand-700">{recurso.descripcion}</p>
                <div className="mt-6">
                  <QuizRunner
                    temaSlug={recurso.slug}
                    preguntas={recurso.preguntas}
                    volverHref="/recursos"
                    volverLabel="Volver"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Esto es solo una muestra"
        description="Batería completa de cada tema, pruebas psicotécnicas, esquemas, resúmenes y simulacros combinados. Suscripción mensual sin permanencia."
        primaryLabel="Ver planes"
        primaryHref="/precios"
        secondaryLabel="Ver el temario completo"
        secondaryHref="/temario"
      />
    </>
  );
}
