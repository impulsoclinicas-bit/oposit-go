import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return (
    <>
      <PageHero
        title="Inicia sesión"
        description="Accede a tu cuenta de Oposit&go."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Iniciar sesión", href: "/login" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-md">
          <Suspense>
            <LoginForm />
          </Suspense>
          <p className="mt-6 text-center text-sm text-brand-700">
            ¿Todavía no tienes cuenta?{" "}
            <Link href="/precios" className="font-semibold text-brand-900 underline">
              Suscríbete aquí
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
