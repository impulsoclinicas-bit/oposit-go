import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { QuizRunner } from "@/components/QuizRunner";
import { recursosGratis } from "@/lib/recursos-gratis";

export const metadata: Metadata = {
  title: "Recursos gratuitos",
  description:
    "Tests gratuitos tipo examen para practicar antes de la oposición a Policía Nacional, con corrección y explicación al instante. Sin registro.",
  alternates: { canonical: "/recursos" },
};

export default function RecursosPage() {
  return (
    <>
      <PageHero
        eyebrow="Gratis, sin registro"
        title="Recursos gratuitos para opositores"
        description="Practica ya mismo con tests reales tipo examen. Responde, corrige y lee la explicación de cada pregunta, sin darte de alta ni pagar nada."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Recursos gratuitos", href: "/recursos" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-5 text-sm text-brand-800">
            Esto es una muestra de lo que hay dentro. En la zona de alumnos
            tienes la batería completa de cada tema del temario, esquemas y
            resúmenes, y simulacros combinados cada 5 temas — todo por una
            suscripción mensual de bajo coste, sin permanencia.
          </div>

          <div className="mt-10 space-y-16">
            {recursosGratis.map((recurso) => (
              <div key={recurso.slug} id={recurso.slug}>
                <h2 className="text-2xl font-bold text-brand-900">{recurso.titulo}</h2>
                <p className="mt-1 text-sm text-brand-700">{recurso.descripcion}</p>
                <div className="mt-6">
                  <QuizRunner temaSlug={recurso.slug} preguntas={recurso.preguntas} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Te ha servido? Hay mucho más dentro"
        description="Batería completa de cada tema, esquemas, resúmenes y simulacros combinados. Suscripción mensual sin permanencia."
        primaryLabel="Ver planes"
        primaryHref="/precios"
        secondaryLabel="Ver el temario completo"
        secondaryHref="/temario"
      />
    </>
  );
}
