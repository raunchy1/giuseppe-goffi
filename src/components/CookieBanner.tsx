"use client";

import { useEffect, useState } from "react";

const KEY = "gg-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const set = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Preferenze cookie">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="m-0 max-w-2xl text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
          Solo cookie tecnici, per ricordare questa scelta.{" "}
          <a href="/privacy">Privacy</a>
          {" · "}
          <a href="/cookie-policy">Cookie</a>
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn" onClick={() => set("accepted")}>
            Accetta
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => set("rejected")}>
            Rifiuta
          </button>
        </div>
      </div>
    </div>
  );
}
