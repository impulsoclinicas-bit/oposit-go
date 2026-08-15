import { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs, Crumb } from "@/components/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-14 text-white sm:py-20">
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow && (
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-accent-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-brand-100 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
