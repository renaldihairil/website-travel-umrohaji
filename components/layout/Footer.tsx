import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import {
  CONTACT,
  NAV_ITEMS,
  SITE,
  WHATSAPP_DISPLAY,
} from "@/config/site";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.logo}
              alt="Logo Nurul Iman Travel & Haji"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl"
            />
            <span className="leading-tight">
              <span className="block font-display text-xl font-bold">
                Nurul Iman
              </span>
              <span className="block text-[11px] tracking-wide text-white/70">
                Travel Umroh &amp; Haji
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Wujudkan perjalanan umroh yang nyaman dan berkah bersama pembimbing
            berpengalaman dan layanan profesional.
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="text-base font-semibold">Navigasi</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/pendaftaran"
                className="transition-colors hover:text-gold-light"
              >
                Pendaftaran
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-semibold">Kontak</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-gold-light"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            {CONTACT.phone ? (
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-light"
                >
                  <Phone size={16} aria-hidden="true" />
                  {CONTACT.phone}
                </a>
              </li>
            ) : null}
            {CONTACT.email ? (
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-light"
                >
                  <Mail size={16} aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
            ) : null}
            {CONTACT.address ? (
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </li>
            ) : null}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold">Siap Berangkat?</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Konsultasikan jadwal dan pilihan paket umroh Anda langsung dengan
            admin kami.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c68a1e]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>{SITE.copyright}</p>
          <p>{SITE.subBrand}</p>
        </div>
      </div>
    </footer>
  );
}
