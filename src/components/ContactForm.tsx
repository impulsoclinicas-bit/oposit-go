"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nombre = String(formData.get("nombre") ?? "");
    const email = String(formData.get("email") ?? "");
    const mensaje = String(formData.get("mensaje") ?? "");

    const subject = `Contacto desde Oposit&go - ${nombre}`;
    const bodyLines = [`Nombre: ${nombre}`, `Email: ${email}`, "", "Mensaje:", mensaje];

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.assign(mailto);
    setSent(true);
  }

  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="nombre" className="block text-sm font-medium text-brand-900">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-brand-900">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className="block text-sm font-medium text-brand-900">
            ¿En qué podemos ayudarte?
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            className="mt-1 w-full rounded-md border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400 sm:w-auto"
          >
            Enviar mensaje
          </button>
          {sent && (
            <p className="mt-3 text-sm text-brand-700">
              Se ha abierto tu cliente de correo con el mensaje listo para
              enviar. Si no ocurre nada, escríbenos directamente a{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
                {siteConfig.email}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
