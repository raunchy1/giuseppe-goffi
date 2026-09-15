export const site = {
  nome: "Giuseppe Goffi",
  ruolo: "DJ per matrimoni e eventi privati",
  base: "Chiari",
  provincia: "Brescia",
  territorio: "Chiari, Brescia, Franciacorta, Lago d'Iseo, Lago di Garda",
  url: "http://localhost:3000",
  email: "",
  telefono: "",
  hero: {
    line1: "Giuseppe Goffi",
    line2: "DJ per matrimoni e eventi privati",
    line3: "Chiari, Brescia, Franciacorta e laghi",
  },
  pitch:
    "Colonna sonora costruita sull'evento. Selezione musicale per far ballare gli invitati. Consolle e impianto luci integrati nel design della festa: niente cavi a vista, niente strutture ingombranti.",
  metodo: [
    {
      titolo: "Musica",
      testo:
        "Selezione personalizzata per cerimonia, pranzo e pista. Il repertorio segue gli sposi e gli ospiti, non un set fisso.",
    },
    {
      titolo: "Consolle",
      testo:
        "Postazione pulita e coordinata con l'allestimento. Cavi nascosti, volumi gestiti per far divertire senza creare disagio.",
    },
    {
      titolo: "Luci",
      testo:
        "Impianto che si integra con gli spazi della villa. Niente strutture ingombranti, niente effetti da discoteca.",
    },
    {
      titolo: "Tempi della location",
      testo:
        "Rispetto degli orari e degli spazi della struttura. Montaggio e smontaggio concordati con la villa.",
    },
  ],
  luoghi: [
    { nome: "Chiari", nota: "Base operativa" },
    { nome: "Brescia", nota: "Città e hinterland" },
    { nome: "Franciacorta", nota: "Ville e cantine" },
    { nome: "Lago d'Iseo", nota: "Rive e isole" },
    { nome: "Lago di Garda", nota: "Sponda bresciana" },
  ],
  planner:
    "Disponibile per lista fornitori di location e per collaborazioni con wedding planner del territorio. Su appuntamento, un caffè in struttura per vedere la postazione e i vincoli della sala.",
  formNote:
    "Questa è una richiesta di disponibilità, non una prenotazione. Risposta con preventivo e date libere.",
  images: {
    hero: "/images/hero.jpg",
    heroAlt:
      "Pista da ballo all'imbrunire nel cortile di una villa in pietra, invitati in abito da sera",
    console: "/images/console.jpg",
    consoleAlt:
      "Consolle DJ su tavolo in legno in una loggia di villa, cavi nascosti, due colonne audio sottili",
    luci: "/images/luci.jpg",
    luciAlt:
      "Facciata di villa illuminata con faretti architettonici, cipressi e parterre",
    cena: "/images/cena.jpg",
    cenaAlt: "Cena di matrimonio in una sala in pietra, candele e tavolo lungo",
    pista: "/images/pista.jpg",
    pistaAlt: "Sposi che ballano in una sala affrescata, parquet e candele",
    iseo: "/images/iseo.jpg",
    iseoAlt: "Monte Isola sul Lago d'Iseo al crepuscolo",
    garda: "/images/garda.jpg",
    gardaAlt: "Sponda del Lago di Garda all'imbrunire, cipressi e acqua ferma",
    franciacorta: "/images/franciacorta.jpg",
    franciacortaAlt: "Vigneti della Franciacorta all'ora blu, casa illuminata sul colle",
    og: "/images/og.jpg",
  },
  fotoNota:
    "Fotografie di contesto per il tipo di evento. Il reportage dei matrimoni reali andrà al posto di queste immagini.",
} as const;
