import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="section-tight" style={{ background: "var(--night)", color: "var(--foam)" }}>
      <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display m-0 text-[length:var(--step-1)] text-balance">{site.nome}</p>
          <p className="mt-2 mb-0 text-[length:var(--step--1)]" style={{ opacity: 0.72 }}>
            {site.ruolo}
          </p>
          <p className="mt-3 mb-0 text-[length:var(--step--1)]" style={{ opacity: 0.72 }}>
            Base a {site.base}, {site.provincia}. {site.territorio}.
          </p>
        </div>

        <div>
          <ul className="m-0 list-none space-y-2 p-0 text-[length:var(--step--1)]">
            <li>
              <a href="/#disponibilita" className="no-underline">
                Richiedi disponibilità
              </a>
            </li>
            <li>
              <a href="/privacy" className="no-underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="/cookie-policy" className="no-underline">
                Cookie policy
              </a>
            </li>
          </ul>
          <p className="mt-8 mb-0 text-[length:var(--step--1)]" style={{ opacity: 0.55 }}>
            Bozza. Telefono, email e Instagram da inserire.
          </p>
        </div>
      </div>
    </footer>
  );
}
