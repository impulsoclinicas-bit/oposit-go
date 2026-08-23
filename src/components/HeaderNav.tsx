"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { mainNav } from "@/lib/site";
import { PoliceBadge } from "@/components/icons/PoliceBadge";

export function HeaderNav({ email }: { email: string | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900 bg-brand-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <PoliceBadge className="h-10 w-10 shrink-0" />
          Oposit&amp;go
        </Link>

        <nav
          className="hidden flex-wrap items-center gap-1 lg:flex"
          aria-label="Navegación principal"
        >
          {mainNav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
                  isActive
                    ? "bg-brand-900 text-white"
                    : "text-brand-100/80 hover:bg-brand-900 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {email ? (
            <>
              <Link
                href="/cuenta"
                className="rounded-md px-3 py-2 text-sm font-medium text-brand-100/80 hover:bg-brand-900 hover:text-white"
              >
                Mi cuenta
              </Link>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-md border border-brand-800 px-3 py-2 text-sm font-medium text-brand-100/80 transition-colors hover:bg-brand-900 hover:text-white"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-md px-3 py-2 text-sm font-medium text-brand-100/80 hover:bg-brand-900 hover:text-white"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/precios"
                className="rounded-md bg-accent-500 px-4 py-2 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400"
              >
                Empieza ya
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-label="Abrir menú de navegación"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-900 bg-brand-950 px-4 pb-4 lg:hidden" aria-label="Navegación móvil">
          <ul className="flex flex-col gap-1 pt-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-brand-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              {email ? (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/cuenta"
                    className="block rounded-md border border-brand-800 px-3 py-2 text-center text-base font-medium text-white hover:bg-brand-900"
                    onClick={() => setOpen(false)}
                  >
                    Mi cuenta
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="rounded-md border border-brand-800 px-3 py-2 text-center text-base font-medium text-white hover:bg-brand-900"
                  >
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    className="block rounded-md border border-brand-800 px-3 py-2 text-center text-base font-medium text-white hover:bg-brand-900"
                    onClick={() => setOpen(false)}
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    href="/precios"
                    className="block rounded-md bg-accent-500 px-3 py-2 text-center text-base font-semibold text-brand-950 hover:bg-accent-400"
                    onClick={() => setOpen(false)}
                  >
                    Empieza ya
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
