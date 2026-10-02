import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { SITE } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.legalName} | Umroh Nyaman, Berkah Sepanjang Masa`,
    template: `%s | ${SITE.legalName}`,
  },
  description: SITE.description,
  keywords: ["umroh", "haji", "travel umroh", "paket umroh", "Nurul Iman"],
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    title: `${SITE.legalName} | Umroh Nyaman, Berkah Sepanjang Masa`,
    description: SITE.description,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} | Umroh Nyaman, Berkah Sepanjang Masa`,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      {/*
        suppressHydrationWarning pada <body> diperlukan karena browser extension
        seperti Grammarly menyuntikkan atribut (misal cz-shortcut-listen="true")
        ke <body> sebelum React hydrate, sehingga menyebabkan hydration mismatch.
        Ini bukan bug di kode — suppressHydrationWarning mencegah warning palsu tersebut.
      */}
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <Header />
        <main id="konten-utama" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomNav />
      </body>
    </html>
  );
}
