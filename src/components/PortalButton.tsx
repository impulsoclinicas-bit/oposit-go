"use client";

import { useState } from "react";

export function PortalButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/portal", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error ?? "No se pudo abrir el panel de facturación.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("No se pudo abrir el panel de facturación.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="rounded-md border border-brand-300 px-4 py-2 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50 disabled:opacity-70"
      >
        {loading ? "Abriendo…" : "Gestionar suscripción y facturación"}
      </button>
      {error && <p className="mt-2 text-sm text-danger-600">{error}</p>}
    </div>
  );
}
