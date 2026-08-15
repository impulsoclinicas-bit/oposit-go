import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Condiciones de suscripción",
  alternates: { canonical: "/condiciones" },
};

export default function CondicionesPage() {
  return (
    <>
      <PageHero
        title="Condiciones de suscripción"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Condiciones", href: "/condiciones" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="prose max-w-3xl text-brand-800">
          <h2>Suscripción mensual</h2>
          <p>
            La suscripción a {siteConfig.name} tiene un coste de{" "}
            {siteConfig.precioMensualEur.toFixed(2)} € al mes, IVA incluido.
            Se renueva automáticamente cada mes mientras no se cancele, y no
            tiene permanencia mínima.
          </p>
          <h2>Cancelación</h2>
          <p>
            Puedes cancelar tu suscripción en cualquier momento desde{" "}
            &ldquo;Mi cuenta&rdquo;. Al cancelar, mantendrás el acceso hasta
            el final del periodo ya pagado y no se realizarán más cargos.
          </p>
          <h2>Derecho de desistimiento</h2>
          <p>
            Al tratarse de contenido digital de acceso inmediato, al
            confirmar el pago aceptas expresamente el inicio de la
            prestación del servicio, por lo que el derecho de desistimiento
            de 14 días decae una vez se te da acceso al contenido, conforme
            al art. 103.m) del Real Decreto Legislativo 1/2007. Si tienes
            cualquier problema con tu suscripción, escríbenos y lo
            resolvemos.
          </p>
          <h2>Contenido</h2>
          <p>
            El temario, las baterías de preguntas, los esquemas y los
            resúmenes se ofrecen con fines formativos y se actualizan
            periódicamente, pero no garantizan un resultado concreto en el
            proceso selectivo oficial.
          </p>
        </Container>
      </section>
    </>
  );
}
