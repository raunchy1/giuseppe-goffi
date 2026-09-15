import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main id="contenuto" className="section" style={{ paddingTop: "7rem" }}>
      <div className="container">
        <p className="m-0 text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
          404
        </p>
        <h1 className="font-display mt-3 mb-4 text-[length:var(--step-3)] text-balance">
          Pagina non trovata
        </h1>
        <p className="measure mb-8" style={{ color: "var(--ink-muted)" }}>
          Il link non esiste o è stato spostato.
        </p>
        <Link href="/" className="btn">
          Torna a {site.nome}
        </Link>
      </div>
    </main>
  );
}
