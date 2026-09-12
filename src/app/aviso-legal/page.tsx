import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageHero
        title="Aviso legal"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Aviso legal", href: "/aviso-legal" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="prose max-w-3xl text-brand-800">
          <p>
            <strong>Titular:</strong>{" "}
            {siteConfig.titularNombre || "[Pendiente: nombre y apellidos del titular]"},
            actuando como persona física (autónomo/a).
            <br />
            <strong>NIF:</strong>{" "}
            {siteConfig.titularNif || "[Pendiente: tu DNI, como NIF de persona física]"}
            <br />
            <strong>Domicilio fiscal:</strong>{" "}
            {siteConfig.titularDomicilio || "[Pendiente: domicilio fiscal completo]"}
            <br />
            <strong>Contacto:</strong>{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p>
            {siteConfig.name} es una plataforma privada de preparación de
            oposiciones. <strong>No está vinculada, patrocinada ni avalada</strong>{" "}
            por la Dirección General de la Policía, el Ministerio del
            Interior ni ningún organismo público. El uso de referencias al
            temario oficial tiene fines exclusivamente formativos.
          </p>
          <p>
            El acceso y uso de este sitio web atribuye la condición de
            usuario y supone la aceptación de las condiciones aquí
            recogidas. El contenido del temario, las baterías de preguntas y
            los simulacros son propiedad de {siteConfig.legalName} y no
            pueden reproducirse, distribuirse ni comunicarse públicamente sin
            autorización previa.
          </p>
          <p>
            {siteConfig.legalName} no garantiza la exactitud, exhaustividad o
            actualidad absoluta del contenido, si bien se compromete a
            revisarlo periódicamente. El resultado de los tests no
            constituye una predicción del resultado del examen oficial.
          </p>
        </Container>
      </section>
    </>
  );
}
