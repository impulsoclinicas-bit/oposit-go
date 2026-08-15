import Link from "next/link";
import { Container } from "@/components/Container";

export function CtaBand({
  title,
  description,
  primaryLabel = "Empieza tu suscripción",
  primaryHref = "/precios",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-accent-500 py-14">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-950 sm:text-3xl">{title}</h2>
          <p className="mt-2 text-brand-900/80">{description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="rounded-md bg-brand-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-900"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="rounded-md border border-brand-950/70 px-5 py-3 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-950/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
