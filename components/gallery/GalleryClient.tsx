"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import {
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";

type GalleryClientProps = {
  items: GalleryItem[];
};

export function GalleryClient({ items }: GalleryClientProps) {
  const [category, setCategory] = useState<GalleryCategory>("Semua");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    category === "Semua"
      ? items
      : items.filter((item) => item.category === category);

  const close = useCallback(() => setActiveIndex(null), []);

  const move = useCallback(
    (step: number) => {
      setActiveIndex((current) => {
        if (current === null || filtered.length === 0) return current;
        return (current + step + filtered.length) % filtered.length;
      });
    },
    [filtered.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, move]);

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter kategori galeri"
      >
        {GALLERY_CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCategory(item);
              setActiveIndex(null);
            }}
            aria-pressed={category === item}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              category === item
                ? "bg-primary text-white"
                : "border border-line bg-white text-muted hover:border-primary/40 hover:text-primary"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-line text-left"
              aria-label={`Buka foto: ${item.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={800}
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="flex w-full items-center justify-between gap-2 p-3 text-xs font-semibold text-white">
                  <span className="truncate">{item.caption}</span>
                  <ZoomIn size={16} aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted">
          Belum ada foto pada kategori ini.
        </p>
      ) : null}

      {/* Lightbox */}
      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto: ${active.alt}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={close}
              aria-label="Tutup foto"
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
              width={1600}
              height={1200}
            />

            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Foto sebelumnya"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <p className="text-center text-sm">
                <span className="font-semibold">{active.caption}</span>
                <span className="block text-white/60">{active.alt}</span>
              </p>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Foto berikutnya"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
