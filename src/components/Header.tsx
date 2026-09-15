"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const links = [
  { href: "/#metodo", label: "Metodo" },
  { href: "/#territorio", label: "Territorio" },
  { href: "/#contesto", label: "Contesto" },
  { href: "/#disponibilita", label: "Disponibilità" },
];

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = !onHome || scrolled || open;

  useEffect(() => {
    if (!onHome) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-[background,border-color,color] duration-200${solid ? " is-solid" : ""}`}
      style={{
        zIndex: "var(--z-header)",
        background: solid ? "var(--surface)" : "transparent",
        borderBottom: solid ? "1px solid var(--line)" : "1px solid transparent",
        color: solid ? "var(--ink)" : "var(--foam)",
        paddingTop: "env(safe-area-inset-top, 0px)",
      }}
    >
      <div className="container flex items-center justify-between gap-4 py-4">
        <a href={onHome ? "#top" : "/"} className="font-display text-[length:var(--step-0)] no-underline">
          {site.nome}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principale">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[length:var(--step--1)] no-underline">
              {l.label}
            </a>
          ))}
          <a href="/#disponibilita" className="btn" style={{ minHeight: 44 }}>
            Richiedi disponibilità
          </a>
        </nav>

        <button
          type="button"
          className="border-0 bg-transparent px-2 py-3 lg:hidden"
          style={{ color: "inherit", minHeight: 44 }}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Chiudi" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t lg:hidden"
          style={{
            background: "var(--surface)",
            color: "var(--ink)",
            borderColor: "var(--line)",
          }}
        >
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 no-underline"
                style={{ minHeight: 44 }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="/#disponibilita" className="btn mt-2" onClick={() => setOpen(false)}>
              Richiedi disponibilità
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
