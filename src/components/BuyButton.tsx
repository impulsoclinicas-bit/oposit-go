"use client";

import { useState } from "react";

export function BuyButton({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
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
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={
          className ??
          "rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400 disabled:cursor-wait disabled:opacity-70"
        }
      >
        {loading ? "Redirigiendo…" : "Suscribirme ahora"}
      </button>
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
