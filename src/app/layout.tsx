import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Karla } from "next/font/google";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

const title = `${site.nome} — ${site.ruolo}`;
const description = `${site.ruolo}. Base a ${site.base}, ${site.provincia}. ${site.territorio}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    locale: "it_IT",
    type: "website",
    images: [{ url: site.images.og, width: 1200, height: 630, alt: site.images.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.images.og],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#D9D5CC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.nome,
    description,
    image: [site.images.hero],
    url: site.url,
    areaServed: site.luoghi.map((l) => ({
      "@type": "Place",
      name: l.nome,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.base,
      addressRegion: "BS",
      addressCountry: "IT",
    },
    serviceType: ["DJ matrimonio", "DJ eventi privati"],
  };

  return (
    <html lang="it" className={`${bodoni.variable} ${karla.variable}`}>
      <body>
        <a className="skip" href="#contenuto">
          Vai al contenuto
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
