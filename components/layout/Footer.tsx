import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import {
  CONTACT,
  NAV_ITEMS,
  SITE,
  WHATSAPP_DISPLAY,
} from "@/config/site";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

const PAKET_LINKS = [
  { href: "/paket-umroh/umroh-reguler",    label: "Umroh Reguler" },
  { href: "/paket-umroh/umroh-plus-turki", label: "Umroh Plus Turki" },
  { href: "/paket-umroh/umroh-vip",        label: "Umroh VIP" },
  { href: "/paket-umroh/umroh-private",    label: "Umroh Private" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main grid */}
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">

        {/* Kolom 1 — Branding */}
        <div>
          <span className="inline-flex rounded-2xl bg-white/10 p-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.logo}
              alt="Nurul Iman Travel Umroh & Haji"
              width={110}
              height={45}
              className="h-10 w-auto"
            />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            {SITE.description}
          </p>
          {/* WA CTA kecil */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gold/50 hover:bg-gold/10 hover:text-gold-light"
          >
            <MessageCircle size={15} aria-hidden="true" />
            {WHATSAPP_DISPLAY}
          </a>
        </div>

        {/* Kolom 2 — Navigasi */}
        <nav aria-label="Navigasi footer">
          <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/40">
            Navigasi
          </h2>
          <ul className="space-y-2.5">
            {[...NAV_ITEMS, { href: "/pendaftaran", label: "Pendaftaran" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-gold-light"
                >
                  <ArrowRight
                    size={12}
                    aria-hidden="true"
                    className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kolom 3 — Paket */}
        <nav aria-label="Paket umroh">
          <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/40">
            Paket Umroh
          </h2>
          <ul className="space-y-2.5">
            {PAKET_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-gold-light"
                >
                  <ArrowRight
                    size={12}
                    aria-hidden="true"
                    className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kolom 4 — Kontak & CTA */}
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/40">
            Kontak Kami
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-gold-light"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10">
                  <MessageCircle size={14} aria-hidden="true" />
                </span>
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            {CONTACT.phone ? (
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-gold-light"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10">
                    <Phone size={14} aria-hidden="true" />
                  </span>
                  {CONTACT.phone}
                </a>
              </li>
            ) : null}
            {CONTACT.email ? (
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-gold-light"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10">
                    <Mail size={14} aria-hidden="true" />
                  </span>
                  {CONTACT.email}
                </a>
              </li>
            ) : null}
            {CONTACT.address ? (
              <li className="flex items-start gap-3 text-sm text-white/65">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10">
                  <MapPin size={14} className="mt-0.5" aria-hidden="true" />
                </span>
                {CONTACT.address}
              </li>
            ) : null}
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Siap Berangkat?</p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/60">
              Konsultasikan jadwal dan pilihan paket langsung dengan admin kami.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-4 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c68a1e]"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <p>{SITE.copyright}</p>
          <p>{SITE.legalName} · {SITE.subBrand}</p>
        </div>
      </div>
    </footer>
  );
}
