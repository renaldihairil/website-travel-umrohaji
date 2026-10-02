"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { NAV_ITEMS } from "@/config/site";
import { images } from "@/lib/images";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.logo}
            alt="Logo Nurul Iman Travel & Haji"
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl"
          />
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold text-primary-dark">
              Nurul Iman
            </span>
            <span className="block text-[11px] tracking-wide text-muted">
              Travel Umroh &amp; Haji
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors ${
                  active
                    ? "text-gold"
                    : "text-ink hover:text-primary"
                }`}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded bg-gold"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/paket-umroh"
            aria-label="Cari paket umroh"
            className="hidden h-10 w-10 place-items-center rounded-full border border-line text-primary transition-colors hover:bg-background sm:grid"
          >
            <Search size={18} aria-hidden="true" />
          </Link>
          <Link
            href="/pendaftaran"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c68a1e] sm:inline-flex"
          >
            Daftar Sekarang
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-primary lg:hidden"
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <nav
            aria-label="Navigasi mobile"
            className="container-site flex flex-col gap-1 py-4"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    active
                      ? "bg-gold-soft text-gold"
                      : "text-ink hover:bg-background"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/pendaftaran"
              className="mt-3 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Daftar Sekarang
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
