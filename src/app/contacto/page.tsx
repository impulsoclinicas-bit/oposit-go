import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Oposit&go para resolver dudas sobre tu suscripción, el temario o cualquier incidencia.",
  alternates: { canonical: "/contacto" },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto - Oposit&go",
  url: `${siteConfig.url}/contacto`,
  about: { "@id": `${siteConfig.url}/#organization` },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="¿Tienes alguna duda?"
        description="Escríbenos y te respondemos lo antes posible."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Contacto", href: "/contacto" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-brand-50" />}>
            <ContactForm />
          </Suspense>

          <aside className="space-y-6">
            <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-6">
              <h2 className="font-bold text-brand-900">Correo electrónico</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-brand-700 hover:text-brand-800"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-6">
              <h2 className="font-bold text-brand-900">Tiempo de respuesta</h2>
              <p className="mt-1 text-sm text-brand-800/80">
                Respondemos a todas las solicitudes en un plazo máximo de
                1-2 días laborables.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <JsonLd data={contactPageJsonLd} />
    </>
  );
}
