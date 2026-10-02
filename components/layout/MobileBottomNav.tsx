"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home,
  Info,
  LayoutGrid,
  Map,
  MessageCircle,
  X,
  CalendarCheck,
  Images,
  Phone,
} from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

type Tab = {
  label: string;
  href?: string;
  icon: typeof Home;
  match?: (pathname: string) => boolean;
  action?: "sheet";
};

const TABS: Tab[] = [
  { label: "Beranda", href: "/", icon: Home, match: (p) => p === "/" },
  {
    label: "Paket",
    href: "/paket-umroh",
    icon: Map,
    match: (p) => p.startsWith("/paket-umroh"),
  },
  {
    label: "Tentang",
    href: "/tentang-kami",
    icon: Info,
    match: (p) => p.startsWith("/tentang-kami"),
  },
  { label: "Lainnya", icon: LayoutGrid, action: "sheet" },
];

const OTHER_LINKS = [
  { href: "/galeri", label: "Galeri", icon: Images },
  { href: "/testimoni", label: "Testimoni", icon: MessageCircle },
  { href: "/kontak", label: "Kontak", icon: Phone },
  { href: "/pendaftaran", label: "Pendaftaran", icon: CalendarCheck },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const sheetOpen =
    open || OTHER_LINKS.some((link) => pathname.startsWith(link.href));

  useEffect(() => {
    // Saat route berubah, tutup sheet dulu — overflow akan di-restore
    // oleh useEffect overflow di bawah
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    // Terapkan overflow segera, dan selalu kembalikan saat cleanup
    // (termasuk saat pathname berubah → open = false → efek ini re-run)
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Navigasi bawah"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 shadow-[0_-10px_30px_-20px_rgba(6,79,70,0.5)] backdrop-blur lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="mx-auto flex max-w-md">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = tab.match ? tab.match(pathname) : false;
            const isSheet = tab.action === "sheet";

            const content = (
              <>
                <span className="relative">
                  <Icon size={21} strokeWidth={active ? 2.4 : 1.9} aria-hidden="true" />
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute -top-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold"
                    />
                  ) : null}
                </span>
                <span className="text-[11px] font-semibold tracking-wide">
                  {tab.label}
                </span>
              </>
            );

            return (
              <li key={tab.label} className="flex-1">
                {isSheet ? (
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    aria-expanded={open}
                    aria-haspopup="dialog"
                    className={`flex w-full flex-col items-center gap-1 py-2.5 transition-colors ${
                      sheetOpen ? "text-gold" : "text-muted hover:text-primary"
                    }`}
                  >
                    {content}
                  </button>
                ) : (
                  <Link
                    href={tab.href ?? "/"}
                    aria-current={active ? "page" : undefined}
                    className={`flex w-full flex-col items-center gap-1 py-2.5 transition-colors ${
                      active ? "text-gold" : "text-muted hover:text-primary"
                    }`}
                  >
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom sheet "Lainnya" */}
      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-end lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Halaman lainnya"
        >
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={() => setOpen(false)}
            className="sheet-backdrop absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
          />
          <div className="sheet-panel relative w-full rounded-t-3xl bg-white p-5 pb-8 shadow-2xl">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-line" aria-hidden="true" />
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Halaman Lainnya</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:bg-background"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <ul className="grid grid-cols-2 gap-3">
              {OTHER_LINKS.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={pathname.startsWith(href) ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-2xl border p-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 ${
                      pathname.startsWith(href)
                        ? "border-gold/60 bg-gold-soft text-primary-dark"
                        : "border-line bg-background text-ink"
                    }`}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-white">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
