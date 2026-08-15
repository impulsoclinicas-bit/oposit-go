import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Política de cookies"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Cookies", href: "/cookies" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="prose max-w-3xl text-brand-800">
          <p>
            {siteConfig.name} utiliza únicamente cookies técnicas
            estrictamente necesarias para el funcionamiento del sitio, como
            la cookie de sesión que mantiene tu cuenta iniciada. Estas
            cookies no requieren consentimiento previo conforme a la
            normativa vigente.
          </p>
          <p>
            No utilizamos cookies de analítica ni de publicidad por
            defecto. Si en el futuro se incorporan, se solicitará el
            consentimiento correspondiente mediante un panel específico.
          </p>
        </Container>
      </section>
    </>
  );
}
