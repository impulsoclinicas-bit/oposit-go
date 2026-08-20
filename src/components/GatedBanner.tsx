import { ReactNode } from "react";
import Link from "next/link";

export function GatedBanner({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brand-200 bg-brand-50/60 p-5 text-sm text-brand-800">
      <p>
        <span aria-hidden="true">🔒</span> {children}
      </p>
      <Link
        href="/precios"
        className="shrink-0 rounded-md bg-brand-900 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-800"
      >
        Ver planes
      </Link>
    </div>
  );
}
