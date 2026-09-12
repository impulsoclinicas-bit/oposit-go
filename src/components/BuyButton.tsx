"use client";

import { useId, useState } from "react";

// Todo lo que se compra en esta web es contenido digital de acceso
// inmediato (temario, simulacros...), así que el derecho de desistimiento
// de 14 días decae en cuanto empieza la prestación (art. 103.m TRLGDCU).
// Para que esa renuncia sea válida hace falta el consentimiento previo y
// expreso del comprador ANTES de pagar, no basta con tenerlo escrito en
// /condiciones: de ahí la casilla obligatoria antes de habilitar el botón.
export function BuyButton({
  className,
  endpoint = "/api/checkout",
  label = "Suscribirme ahora",
  loadingLabel = "Redirigiendo…",
  requireConsent = true,
}: {
  className?: string;
  endpoint?: string;
  label?: string;
  loadingLabel?: string;
  /** Casilla de consentimiento previo a la renuncia del derecho de desistimiento (contenido digital de acceso inmediato). */
  requireConsent?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aceptado, setAceptado] = useState(!requireConsent);
  const checkboxId = useId();

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint, { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(
          data.error ??
            "El pago automático todavía no está activo. Escríbenos y te damos de alta a mano."
        );
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("No se pudo iniciar el pago. Inténtalo de nuevo.");
      setLoading(false);
    }
  }

  return (
    <div>
      {requireConsent && (
        <label htmlFor={checkboxId} className="mb-3 flex items-start gap-2 text-xs text-brand-700">
          <input
            id={checkboxId}
            type="checkbox"
            checked={aceptado}
            onChange={(e) => setAceptado(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0"
          />
          <span>
            Solicito el acceso inmediato al contenido digital y entiendo
            que, por tratarse de contenido digital de acceso inmediato,
            renuncio a mi derecho de desistimiento de 14 días en cuanto
            empiece la prestación (
            <a href="/condiciones" className="underline">
              condiciones
            </a>
            ).
          </span>
        </label>
      )}
      <button
        type="button"
        onClick={handleClick}
        disabled={loading || !aceptado}
        className={
          className ??
          "rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400 disabled:cursor-wait disabled:opacity-70"
        }
      >
        {loading ? loadingLabel : label}
      </button>
      {requireConsent && !aceptado && (
        <p className="mt-2 text-xs text-brand-500">
          Marca la casilla para poder continuar con el pago.
        </p>
      )}
      {error && (
        <p className="mt-2 text-sm text-danger-600">
          {error}{" "}
          <a href="/contacto" className="underline">
            Ir a contacto
          </a>
        </p>
      )}
    </div>
  );
}
