import Image from "next/image";
import { site } from "@/content/site";
import { RequestForm } from "@/components/RequestForm";

export default function HomePage() {
  return (
    <>
      <main id="top">
        <section className="relative min-h-dvh" aria-label="Apertura">
          <Image
            src={site.images.hero}
            alt={site.images.heroAlt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />
        </section>

        <section
          id="contenuto"
          className="section"
          style={{ paddingTop: "clamp(3.25rem, 5vw, 5.5rem)" }}
        >
          <div className="container">
            <p className="m-0 text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
              {site.ruolo}
            </p>
            <h1 className="font-display mt-4 mb-0 max-w-[12ch] text-[length:var(--step-5)] leading-[0.92] text-balance">
              {site.nome}
            </h1>
            <p className="mt-6 mb-0 max-w-[28ch] text-[length:var(--step-0)]">
              {site.hero.line3}
            </p>
            <p className="reveal measure mt-12 mb-0 text-[length:var(--step-1)] leading-[1.45]">
              {site.pitch}
            </p>
            <p className="mt-10 mb-0">
              <a href="#disponibilita">Richiedi disponibilità</a>
            </p>
          </div>
        </section>

        <section id="metodo" className="section" aria-labelledby="metodo-title">
          <div className="container grid items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div
              className="relative min-h-[280px] w-full overflow-hidden max-lg:aspect-[4/3]"
              style={{ background: "var(--surface-alt)" }}
            >
              <Image
                src={site.images.console}
                alt={site.images.consoleAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2
                id="metodo-title"
                className="font-display mt-0 mb-10 max-w-[12ch] text-[length:var(--step-3)] leading-[1.05] text-balance"
              >
                Come si lavora
              </h2>
              <ul className="m-0 list-none p-0">
                {site.metodo.map((item) => (
                  <li
                    key={item.titolo}
                    className="grid gap-3 py-7"
                    style={{ borderTop: "1px solid var(--line)" }}
                  >
                    <h3 className="font-display m-0 text-[length:var(--step-1)]">{item.titolo}</h3>
                    <p className="m-0 measure text-[length:var(--step-0)]" style={{ color: "var(--ink-muted)" }}>
                      {item.testo}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="territorio" className="section-tight" aria-labelledby="territorio-title">
          <div className="container">
            <h2
              id="territorio-title"
              className="font-display mt-0 mb-4 max-w-[14ch] text-[length:var(--step-3)] leading-[1.05] text-balance"
            >
              Brescia, Franciacorta, laghi
            </h2>
            <p className="measure mb-12" style={{ color: "var(--ink-muted)" }}>
              Base a Chiari. Matrimoni ed eventi privati sul territorio bresciano, in Franciacorta e
              sulle rive del Lago d&apos;Iseo e del Garda.
            </p>
          </div>

          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 7", minHeight: 280 }}>
            <Image
              src={site.images.franciacorta}
              alt={site.images.franciacortaAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="container mt-6 grid gap-6 md:grid-cols-2">
            <figure className="m-0">
              <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                <Image
                  src={site.images.iseo}
                  alt={site.images.iseoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
                Lago d&apos;Iseo
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                <Image
                  src={site.images.garda}
                  alt={site.images.gardaAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
                Lago di Garda
              </figcaption>
            </figure>
          </div>

          <div className="container mt-14">
            <ul className="m-0 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-5">
              {site.luoghi.map((luogo) => (
                <li key={luogo.nome}>
                  <p className="font-display m-0 text-[length:var(--step-1)]">{luogo.nome}</p>
                  <p className="mt-1 mb-0 text-[length:var(--step--1)]" style={{ color: "var(--ink-muted)" }}>
                    {luogo.nota}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contesto" className="section" aria-labelledby="contesto-title">
          <div className="container">
            <h2
              id="contesto-title"
              className="font-display mt-0 mb-3 max-w-[16ch] text-[length:var(--step-3)] leading-[1.05] text-balance"
            >
              Villa, sala, giardino
            </h2>
            <p className="measure mb-12" style={{ color: "var(--ink-muted)" }}>
              {site.fotoNota}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <figure className="m-0 md:col-span-2">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src={site.images.pista}
                    alt={site.images.pistaAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <figure className="m-0">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                  <Image
                    src={site.images.cena}
                    alt={site.images.cenaAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <figure className="m-0">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                  <Image
                    src={site.images.luci}
                    alt={site.images.luciAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section
          className="section-tight"
          style={{ background: "var(--night)", color: "var(--foam)" }}
          aria-labelledby="planner-title"
        >
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2
              id="planner-title"
              className="font-display m-0 max-w-[12ch] text-[length:var(--step-3)] leading-[1.05] text-balance"
            >
              Per planner e location
            </h2>
            <p className="reveal measure m-0 text-[length:var(--step-0)]" style={{ opacity: 0.82 }}>
              {site.planner}
            </p>
          </div>
        </section>

        <section id="disponibilita" className="section" aria-labelledby="disp-title">
          <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2
                id="disp-title"
                className="font-display mt-0 mb-5 max-w-[12ch] text-[length:var(--step-3)] leading-[1.05] text-balance"
              >
                Verifica la data
              </h2>
              <p className="measure m-0" style={{ color: "var(--ink-muted)" }}>
                Preventivo senza impegno. Indicate data, location e tipo di evento.
              </p>
            </div>
            <div className="reveal">
              <RequestForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
