"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Pregunta } from "@/lib/preguntas";

export function QuizRunner({
  temaSlug,
  preguntas,
  volverHref = "/temario",
  volverLabel = "Volver al temario",
}: {
  temaSlug: string;
  preguntas: Pregunta[];
  volverHref?: string;
  volverLabel?: string;
}) {
  const [respuestas, setRespuestas] = useState<Record<string, number>>({});
  const [corregido, setCorregido] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const totalRespondidas = Object.keys(respuestas).length;
  const todasRespondidas = totalRespondidas === preguntas.length;

  const score = useMemo(() => {
    if (!corregido) return 0;
    return preguntas.reduce(
      (acc, p) => acc + (respuestas[p.id] === p.correcta ? 1 : 0),
      0
    );
  }, [corregido, preguntas, respuestas]);

  async function handleCorregir() {
    setCorregido(true);
    const finalScore = preguntas.reduce(
      (acc, p) => acc + (respuestas[p.id] === p.correcta ? 1 : 0),
      0
    );
    setGuardando(true);
    try {
      await fetch("/api/quiz/intento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          temaSlug,
          score: finalScore,
          total: preguntas.length,
        }),
      });
    } catch {
      // El resultado ya se muestra en pantalla aunque falle el guardado.
    } finally {
      setGuardando(false);
    }
  }

  function handleReintentar() {
    setRespuestas({});
    setCorregido(false);
  }

  if (preguntas.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-brand-300 bg-brand-50 p-8 text-center">
        <p className="font-semibold text-brand-900">
          La batería de preguntas de este tema está en preparación.
        </p>
        <p className="mt-1 text-sm text-brand-700">
          Estamos ampliando el banco de preguntas tema a tema. Vuelve pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {corregido && (
        <div className="sticky top-16 z-10 rounded-xl border border-brand-200 bg-white p-4 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-brand-700">Resultado</p>
              <p className="text-2xl font-bold text-brand-900">
                {score} / {preguntas.length} correctas
              </p>
            </div>
            <button
              type="button"
              onClick={handleReintentar}
              className="rounded-md bg-brand-800 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Reintentar
            </button>
          </div>
          {guardando && (
            <p className="mt-1 text-xs text-brand-500">Guardando resultado…</p>
          )}
        </div>
      )}

      <ol className="space-y-5">
        {preguntas.map((pregunta, index) => {
          const seleccionada = respuestas[pregunta.id];
          return (
            <li
              key={pregunta.id}
              className="rounded-xl border border-brand-200 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-brand-900">
                {index + 1}. {pregunta.enunciado}
              </p>
              <div className="mt-3 space-y-2">
                {pregunta.opciones.map((opcion, opcionIndex) => {
                  const isSelected = seleccionada === opcionIndex;
                  const isCorrect = pregunta.correcta === opcionIndex;

                  let estilo =
                    "border-brand-200 hover:border-brand-400 hover:bg-brand-50";
                  if (corregido) {
                    if (isCorrect) {
                      estilo = "border-success-500 bg-success-500/10";
                    } else if (isSelected && !isCorrect) {
                      estilo = "border-danger-500 bg-danger-500/10";
                    } else {
                      estilo = "border-brand-100 opacity-70";
                    }
                  } else if (isSelected) {
                    estilo = "border-brand-600 bg-brand-50";
                  }

                  return (
                    <button
                      key={opcionIndex}
                      type="button"
                      disabled={corregido}
                      onClick={() =>
                        setRespuestas((prev) => ({
                          ...prev,
                          [pregunta.id]: opcionIndex,
                        }))
                      }
                      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2 text-left text-sm transition-colors disabled:cursor-default ${estilo}`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-semibold">
                        {String.fromCharCode(65 + opcionIndex)}
                      </span>
                      {opcion}
                    </button>
                  );
                })}
              </div>
              {corregido && (
                <p className="mt-3 rounded-md bg-brand-50 p-3 text-sm text-brand-800">
                  <span className="font-semibold">Explicación: </span>
                  {pregunta.explicacion}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {!corregido && (
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-700">
            {totalRespondidas} / {preguntas.length} preguntas respondidas
          </p>
          <button
            type="button"
            disabled={!todasRespondidas}
            onClick={handleCorregir}
            className="rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Corregir test
          </button>
        </div>
      )}

      {corregido && (
        <div className="flex justify-center">
          <Link
            href={volverHref}
            className="text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            ← {volverLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
