"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function PlanEstudioForm({ tienePlan }: { tienePlan: boolean }) {
  const router = useRouter();
  const [modo, setModo] = useState<"fecha" | "semanas">("fecha");
  const [examDate, setExamDate] = useState("");
  const [weeksAvailable, setWeeksAvailable] = useState(16);
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
        body: JSON.stringify({
          examDate: modo === "fecha" ? examDate : null,
          weeksAvailable: modo === "semanas" ? weeksAvailable : null,
          hoursPerWeek,
        }),
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
      <div className="flex gap-2 text-sm">
        <button
          type="button"
          onClick={() => setModo("fecha")}
          className={`rounded-md px-3 py-1.5 font-medium ${
            modo === "fecha"
              ? "bg-brand-900 text-white"
              : "bg-brand-50 text-brand-700 hover:bg-brand-100"
          }`}
        >
          Tengo fecha de examen
        </button>
        <button
          type="button"
          onClick={() => setModo("semanas")}
          className={`rounded-md px-3 py-1.5 font-medium ${
            modo === "semanas"
              ? "bg-brand-900 text-white"
              : "bg-brand-50 text-brand-700 hover:bg-brand-100"
          }`}
        >
          No tengo fecha todavía
        </button>
      </div>

      {modo === "fecha" ? (
        <label className="block text-sm">
          <span className="font-medium text-brand-800">Fecha del examen</span>
          <input
            type="date"
            required
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="mt-1 w-full rounded-md border border-brand-300 px-3 py-2 text-sm"
          />
        </label>
      ) : (
        <label className="block text-sm">
          <span className="font-medium text-brand-800">Semanas de las que dispones</span>
          <input
            type="number"
            min={4}
            max={52}
            required
            value={weeksAvailable}
            onChange={(e) => setWeeksAvailable(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-brand-300 px-3 py-2 text-sm"
          />
        </label>
      )}

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
