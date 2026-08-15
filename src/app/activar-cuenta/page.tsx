import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ActivationForm } from "@/components/ActivationForm";

export const metadata: Metadata = {
  title: "Activar cuenta",
  alternates: { canonical: "/activar-cuenta" },
  robots: { index: false, follow: false },
};

export default async function ActivarCuentaPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; session_id?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <>
      <PageHero
        title="Activa tu cuenta"
        description="Último paso: crea tu contraseña para acceder a Oposit&go."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Activar cuenta", href: "/activar-cuenta" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-md">
          {token ? (
            <Suspense>
              <ActivationForm token={token} />
            </Suspense>
          ) : (
            <div className="rounded-xl border border-brand-200 bg-brand-50 p-6 text-sm text-brand-800">
              <p className="font-semibold">Revisa tu email</p>
              <p className="mt-2">
                Hemos recibido tu pago. En unos segundos te llegará un correo
                con el enlace para crear tu contraseña y activar la cuenta.
                Si no lo ves, revisa la carpeta de spam.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
