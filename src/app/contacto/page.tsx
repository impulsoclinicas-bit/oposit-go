import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";
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

const faqSoporte = [
  {
    question: "¿Cómo cancelo mi suscripción?",
    answer:
      "Desde \"Mi cuenta\" → \"Gestionar suscripción\" (portal seguro de Stripe): puedes cancelarla en el momento, sin escribirnos. Mantendrás el acceso hasta el final del periodo ya pagado.",
  },
  {
    question: "No recibo el correo para activar mi cuenta o restablecer la contraseña",
    answer:
      "Revisa la carpeta de spam o promociones. Si tras 15 minutos sigue sin llegar, escríbenos indicando el email con el que pagaste y te lo reenviamos a mano.",
  },
  {
    question: "He pagado pero no tengo acceso",
    answer:
      "Puede tardar unos minutos en activarse. Si pasado un rato sigues sin acceso, escríbenos con el email de la compra y el justificante de Stripe (recibo o últimos 4 dígitos de la tarjeta): lo revisamos y te damos acceso a mano si hace falta.",
  },
  {
    question: "Me apunté tarde: ¿cómo pido el pase de ponerse al día?",
    answer:
      "Se compra tú misma/o desde \"Mi cuenta\", en la tarjeta de Suscripción: si tienes temas atrasados, ahí aparece el precio exacto y el botón de compra. No hace falta pedirlo por contacto.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="¿Tienes alguna duda?"
        description="Muchas dudas se resuelven al instante más abajo, sin esperar respuesta. Si la tuya no está, escríbenos."
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

      <FaqSection title="Antes de escribirnos" items={faqSoporte} />

      <JsonLd data={contactPageJsonLd} />
    </>
  );
}
