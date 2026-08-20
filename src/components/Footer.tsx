import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/site";
import { PoliceBadge } from "@/components/icons/PoliceBadge";
import { PoliceStripe } from "@/components/PoliceStripe";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-900 bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-brand-950">
              <PoliceBadge className="h-5 w-5" />
            </span>
            Oposit&amp;go
          </div>
          <p className="mt-3 text-sm text-brand-200">
            Preparación online para la oposición a Policía Nacional: baterías
            de preguntas, simulacros, esquemas y resúmenes por suscripción
            mensual.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            Navegación
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cuenta" className="hover:text-white">
                Mi cuenta
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            Legal
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/aviso-legal" className="hover:text-white">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-white">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="/condiciones" className="hover:text-white">
                Condiciones de suscripción
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            Contacto
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>Atención online a opositores de toda España</li>
            <li>
              <Link href="/precios" className="font-semibold text-accent-400 hover:text-accent-300">
                Ver planes de suscripción →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-900 px-4 py-5 text-center text-xs text-brand-300 sm:px-6 lg:px-8">
        © {year} Oposit&amp;go. Todos los derechos reservados. Oposit&amp;go
        no está vinculado a la Dirección General de la Policía ni a ningún
        organismo oficial.
      </div>
      <PoliceStripe />
    </footer>
  );
}
