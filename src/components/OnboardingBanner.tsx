"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CLAVE = "oposit-go-onboarding-visto";

export function OnboardingBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- lee una preferencia externa (localStorage) al montar, no estado derivado de props/estado de React.
      if (!localStorage.getItem(CLAVE)) setVisible(true);
    } catch {
      // Si localStorage no está disponible, simplemente no se muestra.
    }
  }, []);

  function cerrar() {
    setVisible(false);
    try {
      localStorage.setItem(CLAVE, "1");
    } catch {
      // No pasa nada si no se puede guardar: se volverá a mostrar la próxima vez.
    }
  }

  if (!visible) return null;

  return (
    <div className="mb-6 rounded-xl border border-accent-300 bg-accent-50 p-5 text-sm text-brand-900">
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-bold">Cómo funciona tu suscripción</h2>
        <button
          type="button"
          onClick={cerrar}
          aria-label="Cerrar"
          className="shrink-0 text-brand-500 hover:text-brand-800"
        >
          ✕
        </button>
      </div>
      <ul className="mt-3 space-y-2">
        <li>
          <strong>El temario se abre por un calendario único, igual para todos:</strong>{" "}
          5 temas nuevos cada mes. Si te has apuntado cuando el calendario ya
          llevaba tiempo abierto, empiezas en el lote vigente ese mes, no en
          el tema 1 — es normal ver temas bloqueados con un candado 🔒.
        </li>
        <li>
          <strong>¿Quieres los temas anteriores a tu alta?</strong> Puedes
          comprarlos con el pase de ponerse al día, más abajo en esta misma
          página.
        </li>
        <li>
          <strong>Cada test es distinto cada vez</strong> y guardamos qué
          preguntas fallas, para que puedas repasar solo esas en{" "}
          <Link href="/repaso-fallos" className="underline">
            Repasar fallos
          </Link>
          .
        </li>
      </ul>
      <button
        type="button"
        onClick={cerrar}
        className="mt-4 rounded-md bg-brand-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-800"
      >
        Entendido
      </button>
    </div>
  );
}
