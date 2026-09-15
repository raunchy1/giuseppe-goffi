import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Privacy — ${site.nome}`,
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
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
          Da verificare con un legale. Contatti del titolare ancora da inserire.
        </p>
        <p className="m-0 text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
          <Link href="/">{site.nome}</Link>
        </p>
        <h1 className="font-display mt-4 mb-8 text-[length:var(--step-3)] text-balance">
          Informativa privacy
        </h1>
        <div className="space-y-5" style={{ color: "var(--ink-muted)" }}>
          <p>
            Titolare del trattamento: {site.nome}, {site.ruolo}, base a {site.base} (
            {site.provincia}). Per ora il contatto avviene solo tramite il modulo del sito.
          </p>
          <p>
            I dati raccolti tramite il modulo (nome, email, telefono, data, location, tipo di
            evento, numero indicativo di invitati, note) sono trattati esclusivamente per
            rispondere alla richiesta di disponibilità e per il preventivo. Base giuridica:
            esecuzione di misure precontrattuali su richiesta dell&apos;interessato (art. 6.1.b
            GDPR).
          </p>
          <p>
            I dati non sono ceduti a terzi per marketing. Possono essere trattati da fornitori
            tecnici (hosting, invio email) solo per erogare il servizio. Conservazione: per il
            tempo necessario a gestire la richiesta e gli obblighi di legge.
          </p>
          <p>
            Diritti: accesso, rettifica, cancellazione, limitazione, opposizione, portabilità,
            reclamo al Garante. Scrivere tramite il modulo.
          </p>
          <p>
            Il sito non installa cookie di profilazione. Vedi la{" "}
            <Link href="/cookie-policy">cookie policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
