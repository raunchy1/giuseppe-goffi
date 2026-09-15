import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Cookie policy — ${site.nome}`,
  robots: { index: false, follow: false },
};

export default function CookiePolicyPage() {
  return (
    <main id="contenuto" className="section" style={{ paddingTop: "7rem" }}>
      <div className="container measure">
        <p
          className="mb-6"
          style={{
            color: "var(--ink-muted)",
            border: "1px solid var(--line-strong)",
            padding: "0.75rem 1rem",
          }}
        >
          Da verificare con un legale.
        </p>
        <p className="m-0 text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
          <Link href="/">{site.nome}</Link>
        </p>
        <h1 className="font-display mt-4 mb-8 text-[length:var(--step-3)] text-balance">
          Cookie policy
        </h1>
        <div className="space-y-5" style={{ color: "var(--ink-muted)" }}>
          <p>
            Questo sito usa un dato tecnico in localStorage (chiave{" "}
            <code>gg-cookie-consent</code>) per ricordare se avete accettato o rifiutato il banner.
          </p>
          <p>
            Non vengono caricati strumenti di analisi o profilazione. In caso di rifiuto il sito
            resta utilizzabile, compreso il modulo di richiesta.
          </p>
          <p>
            Potete cancellare la preferenza cancellando i dati del sito dal browser.
          </p>
          <p>
            Vedi anche l&apos;<Link href="/privacy">informativa privacy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
