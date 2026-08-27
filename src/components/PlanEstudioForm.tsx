"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ObjetivoPlan } from "@/lib/plan-estudio";

export function PlanEstudioForm({ tienePlan }: { tienePlan: boolean }) {
  const router = useRouter();
  const [objetivo, setObjetivo] = useState<ObjetivoPlan>("convocatoria-actual");
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setError(null);
    try {
      const res = await fetch("/api/plan-estudio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ objetivo, hoursPerWeek }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "No se ha podido generar el plan");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se ha podido generar el plan");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <span className="block text-sm font-medium text-brand-800">
          ¿Para cuándo te preparas?
        </span>
        <div className="mt-2 flex flex-col gap-2 text-sm">
          <button
            type="button"
            onClick={() => setObjetivo("convocatoria-actual")}
            className={`rounded-md px-3 py-2 text-left font-medium ${
              objetivo === "convocatoria-actual"
                ? "bg-brand-900 text-white"
                : "bg-brand-50 text-brand-700 hover:bg-brand-100"
            }`}
          >
            Voy a la convocatoria vigente
          </button>
          <button
            type="button"
            onClick={() => setObjetivo("con-calma")}
            className={`rounded-md px-3 py-2 text-left font-medium ${
              objetivo === "con-calma"
                ? "bg-brand-900 text-white"
                : "bg-brand-50 text-brand-700 hover:bg-brand-100"
            }`}
          >
            Me preparo con calma para más adelante
          </button>
        </div>
      </div>

      <label className="block text-sm">
        <span className="font-medium text-brand-800">Horas semanales que puedes dedicar</span>
        <input
          type="number"
          min={1}
          max={60}
          required
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(Number(e.target.value))}
          className="mt-1 w-full rounded-md border border-brand-300 px-3 py-2 text-sm"
        />
      </label>

      {error && <p className="text-sm text-danger-600">{error}</p>}

      <button
        type="submit"
        disabled={enviando}
        className="rounded-md bg-accent-500 px-5 py-2.5 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {enviando
          ? "Generando…"
          : tienePlan
            ? "Regenerar mi plan de estudio"
            : "Generar mi plan de estudio"}
      </button>
    </form>
  );
}
