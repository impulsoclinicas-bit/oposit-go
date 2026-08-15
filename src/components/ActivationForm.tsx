"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export function ActivationForm({ token }: { token: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/activar-cuenta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No se pudo activar la cuenta.");
        setLoading(false);
        return;
      }
      setDone(true);
      setTimeout(() => router.push("/login"), 2000);
    } catch {
      setError("No se pudo activar la cuenta. Inténtalo de nuevo.");
      setLoading(false);
    }
  }

  if (done) {
    return (
      <p className="rounded-md bg-success-500/10 p-4 text-sm font-medium text-success-600">
        ¡Cuenta activada! Te llevamos a iniciar sesión…
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-brand-900">
          Crea tu contraseña
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border border-brand-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>
      <div>
        <label htmlFor="confirm" className="block text-sm font-medium text-brand-900">
          Repite la contraseña
        </label>
        <input
          id="confirm"
          type="password"
          required
          minLength={8}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="mt-1 block w-full rounded-md border border-brand-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>
      {error && <p className="text-sm text-danger-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-accent-500 px-4 py-2.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400 disabled:opacity-70"
      >
        {loading ? "Activando…" : "Activar mi cuenta"}
      </button>
    </form>
  );
}
