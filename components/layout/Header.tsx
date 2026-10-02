"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { NAV_ITEMS, WHATSAPP_DISPLAY } from "@/config/site";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/97 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_24px_-8px_rgba(6,79,70,0.18)] border-b border-line"
          : "border-b border-line/60"
      }`}
    >
      {/* Top bar — nomor WA kecil */}
      <div className="hidden border-b border-line/50 bg-primary lg:block">
        <div className="container-site flex h-8 items-center justify-end gap-5">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/80 transition-colors hover:text-gold-light"
          >
            <Phone size={11} aria-hidden="true" />
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          <span className="text-xs text-white/60">Layanan 24 Jam</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-site flex h-16 items-center justify-between gap-3 lg:h-[68px]">
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="Nurul Iman Travel & Haji — beranda"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.logo}
            alt="Nurul Iman Travel Umroh & Haji"
            width={110}
            height={45}
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03] lg:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                data-active={active}
                className={`underline-grow relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-primary"
                    : "text-ink/75 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-px left-3.5 right-3.5 h-0.5 rounded-full bg-gold"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* WA icon — mobile only */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-primary transition-all duration-200 hover:border-gold/60 hover:bg-gold-soft hover:text-gold lg:hidden"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>

          {/* WA button — desktop */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-primary/25 px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 lg:flex"
          >
            <MessageCircle size={15} aria-hidden="true" />
            Konsultasi
          </a>

          {/* CTA */}
          <Link
            href="/pendaftaran"
            className="btn-shine inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_-6px_rgba(217,154,40,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c68a1e] hover:shadow-[0_8px_20px_-6px_rgba(217,154,40,0.6)] sm:px-5"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}
