"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

type Status = "idle" | "loading" | "ok" | "error";

export function RequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") || "").trim()) {
      setStatus("ok");
      setMessage("Richiesta inviata.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.get("nome"),
          email: data.get("email"),
          telefono: data.get("telefono"),
          dataEvento: data.get("dataEvento"),
          location: data.get("location"),
          tipo: data.get("tipo"),
          invitati: data.get("invitati"),
          note: data.get("note"),
          privacy: data.get("privacy") === "on",
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Errore di invio");
      }
      setStatus("ok");
      setMessage(
        "Richiesta ricevuta. Non è una prenotazione: risponderemo con disponibilità e preventivo.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Invio non riuscito. Riprovate tra poco o scrivete dal modulo di nuovo.");
    }
  }

  return (
    <form id="richiesta" onSubmit={onSubmit} noValidate className="grid gap-5">
      <p className="m-0 text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
        {site.formNote}
      </p>

      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="telefono">Telefono</label>
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" inputMode="tel" />
        </div>
        <div className="field">
          <label htmlFor="dataEvento">Data dell&apos;evento</label>
          <input id="dataEvento" name="dataEvento" type="date" required autoComplete="off" />
        </div>
        <div className="field">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            required
            autoComplete="off"
            placeholder="Villa, comune"
          />
        </div>
        <div className="field">
          <label htmlFor="tipo">Tipo</label>
          <select id="tipo" name="tipo" required defaultValue="matrimonio">
            <option value="matrimonio">Matrimonio</option>
            <option value="evento-privato">Evento privato</option>
          </select>
        </div>
        <div className="field md:col-span-2">
          <label htmlFor="invitati">Invitati (indicativo)</label>
          <input
            id="invitati"
            name="invitati"
            type="number"
            min={1}
            max={800}
            inputMode="numeric"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          name="note"
          rows={4}
          enterKeyHint="done"
          placeholder="Orari, vincoli della villa, brani obbligatori"
        />
      </div>

      <label
        className="flex items-start gap-3 text-[length:var(--step--1)]"
        style={{ color: "var(--ink-muted)" }}
      >
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1"
          style={{ width: 18, height: 18, accentColor: "var(--accent)" }}
        />
        <span>
          Ho letto l&apos;<a href="/privacy">informativa privacy</a> e autorizzo il trattamento
          dei dati per gestire la richiesta.
        </span>
      </label>

      <div>
        <button type="submit" className="btn" disabled={status === "loading"}>
          {status === "loading" ? "Invio in corso" : "Invia richiesta"}
        </button>
      </div>

      {message && (
        <p
          role="status"
          className="m-0 text-[length:var(--step--1)]"
          style={{ color: status === "error" ? "#7a2e24" : "var(--ink-muted)" }}
        >
          {message}
        </p>
      )}
    </form>
  );
}
