"use client";

import { useRef, useState } from "react";
import { CalendarDays, Hotel, FileText, ClipboardList } from "lucide-react";
import type { Package } from "@/data/packages";

const TABS = [
  { id: "deskripsi", label: "Deskripsi Paket", icon: FileText },
  { id: "jadwal", label: "Jadwal Perjalanan", icon: CalendarDays },
  { id: "hotel", label: "Fasilitas Hotel", icon: Hotel },
  { id: "ketentuan", label: "Ketentuan", icon: ClipboardList },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function PackageTabs({ pkg }: { pkg: Package }) {
  const [active, setActive] = useState<TabId>("deskripsi");
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({
    deskripsi: null,
    jadwal: null,
    hotel: null,
    ketentuan: null,
  });

  function onKeyDown(event: React.KeyboardEvent) {
    const index = TABS.findIndex((tab) => tab.id === active);
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % TABS.length;
    if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + TABS.length) % TABS.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = TABS.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      const nextTab = TABS[nextIndex];
      setActive(nextTab.id);
      tabRefs.current[nextTab.id]?.focus();
    }
  }

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Informasi paket"
        className="flex gap-1 overflow-x-auto border-b border-line"
        onKeyDown={onKeyDown}
      >
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            ref={(node) => {
              tabRefs.current[id] = node;
            }}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={active === id}
            aria-controls={`panel-${id}`}
            tabIndex={active === id ? 0 : -1}
            onClick={() => setActive(id)}
            className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
              active === id
                ? "border-gold text-primary-dark"
                : "border-transparent text-muted hover:text-primary"
            }`}
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
        className="pt-6 text-sm leading-relaxed text-ink/85 sm:text-base"
      >
        {active === "deskripsi" ? <p>{pkg.description}</p> : null}

        {active === "jadwal" ? (
          <ol className="space-y-4">
            {pkg.itinerary.map((item) => (
              <li
                key={item.day + item.title}
                className="flex gap-4 rounded-2xl border border-line bg-white p-4"
              >
                <span className="inline-flex h-fit shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {item.day}
                </span>
                <div>
                  <p className="font-semibold text-primary-dark">{item.title}</p>
                  <p className="mt-1 text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
            <li className="rounded-2xl border border-dashed border-gold/60 bg-gold-soft p-4 text-xs text-muted">
              Struktur jadwal di atas adalah konten awal untuk implementasi UI dan
              harus diganti dengan jadwal operasional terbaru.
            </li>
          </ol>
        ) : null}

        {active === "hotel" ? (
          <ul className="grid gap-4 sm:grid-cols-2">
            {pkg.hotelFacilities.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-line bg-white p-4"
              >
                <p className="font-semibold text-primary-dark">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {active === "ketentuan" ? (
          <ul className="space-y-3">
            {pkg.terms.map((term, index) => (
              <li key={term} className="flex gap-3">
                <span className="font-semibold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
