import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        title="Política de privacidad"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Privacidad", href: "/privacidad" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="prose max-w-3xl text-brand-800">
          <p>
            <strong>Responsable del tratamiento:</strong>{" "}
            {siteConfig.legalName} —{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          <h2>Datos que tratamos</h2>
          <p>
            Al suscribirte tratamos tu email, la contraseña (cifrada) que
            creas para tu cuenta, y los datos de pago necesarios para
            procesar el cobro, gestionados directamente por{" "}
            <strong>Stripe</strong> (no almacenamos números de tarjeta en
            nuestros servidores). También guardamos tu historial de
            resultados en los tests para mostrarte tu progreso.
          </p>
          <h2>Finalidad y base legal</h2>
          <p>
            Gestionar tu suscripción y darte acceso al contenido (ejecución
            del contrato), y responder a tus consultas (interés legítimo /
            consentimiento).
          </p>
          <h2>Encargados del tratamiento</h2>
          <ul>
            <li>
              <strong>Stripe</strong> — procesamiento de pagos y facturación.
            </li>
            <li>
              <strong>Resend</strong> — envío de emails transaccionales
              (activación de cuenta).
            </li>
            <li>Proveedor de base de datos y de alojamiento de la aplicación.</li>
          </ul>
          <h2>Tus derechos</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación y portabilidad escribiendo a{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          <p>
            [Este texto es una plantilla general y debe revisarse con
            asesoría legal antes de operar comercialmente, especialmente en
            cuanto a plazos de conservación y proveedores concretos.]
          </p>
        </Container>
      </section>
    </>
  );
}
