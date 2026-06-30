import { useState } from "react";
import { WEBHOOK_URL, waLink } from "../config.js";
import { CheckIcon, ArrowRightIcon } from "./Icons.jsx";

const SOLUTIONS = [
  "Ventanas termoacústicas",
  "Cortinas",
  "Persianas",
  "Aún no estoy seguro",
];

const initial = { nombre: "", telefono: "", tipo: "" };

export default function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.nombre.trim() || !form.telefono.trim() || !form.tipo) {
      setStatus({ state: "error", msg: "Por favor completa todos los campos." });
      return;
    }

    setStatus({ state: "loading", msg: "" });

    const payload = {
      ...form,
      origen: "landing-ventus",
      enviadoEn: new Date().toISOString(),
    };

    try {
      if (WEBHOOK_URL) {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Respuesta no válida del webhook");
        setStatus({
          state: "success",
          msg: "¡Gracias! Un asesor de Ventus te contactará muy pronto.",
        });
        setForm(initial);
      } else {
        // Fallback: sin webhook configurado, derivamos a WhatsApp.
        const text = `Hola Ventus, soy ${form.nombre}. Mi teléfono es ${form.telefono}. Me interesa: ${form.tipo}.`;
        window.open(waLink(text), "_blank", "noopener,noreferrer");
        setStatus({
          state: "success",
          msg: "Te estamos abriendo WhatsApp para finalizar tu solicitud.",
        });
        setForm(initial);
      }
    } catch (err) {
      setStatus({
        state: "error",
        msg: "No pudimos enviar tu solicitud. Escríbenos por WhatsApp y te ayudamos.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-cream p-7 shadow-lift sm:p-9"
      aria-labelledby="cotizar-titulo"
    >
      <h3 id="cotizar-titulo" className="text-2xl font-semibold text-cocoa">
        Solicita tu cotización
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-cocoa/65">
        Déjanos tus datos y un asesor te contactará. Sin costo, sin compromiso.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-cocoa">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={update("nombre")}
            required
            className="field"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-cocoa">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Ej. 300 000 0000"
            value={form.telefono}
            onChange={update("telefono")}
            required
            className="field"
          />
        </div>

        <div>
          <label htmlFor="tipo" className="mb-1.5 block text-sm font-semibold text-cocoa">
            Tipo de solución
          </label>
          <select
            id="tipo"
            name="tipo"
            value={form.tipo}
            onChange={update("tipo")}
            required
            className="field cursor-pointer"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {SOLUTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" disabled={status.state === "loading"} className="btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-70">
        {status.state === "loading" ? "Enviando…" : "Solicitar cotización"}
        {status.state !== "loading" && <ArrowRightIcon className="h-4 w-4" />}
      </button>

      {/* Mensajes de estado, accesibles para lectores de pantalla */}
      <div aria-live="polite" className="min-h-[1.25rem]">
        {status.state === "success" && (
          <p className="mt-4 flex items-start gap-2 rounded-xl bg-olive/10 px-4 py-3 text-sm font-semibold text-olive-700">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
            {status.msg}
          </p>
        )}
        {status.state === "error" && (
          <p className="mt-4 rounded-xl bg-terracota/10 px-4 py-3 text-sm font-semibold text-terracota-700">
            {status.msg}
          </p>
        )}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-cocoa/50">
        Al enviar aceptas que Ventus te contacte sobre tu solicitud. Tus datos
        están protegidos.
      </p>
    </form>
  );
}
