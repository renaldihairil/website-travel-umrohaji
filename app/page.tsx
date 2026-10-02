import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CtaBand } from "@/components/home/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_ITEMS } from "@/data/gallery";
import type { GalleryItem } from "@/data/gallery";
import { ZoomIn } from "lucide-react";

export const metadata: Metadata = {
  title: "Nurul Iman Travel & Haji | Umroh Nyaman, Berkah Sepanjang Masa",
  description:
    "Nurul Iman Travel & Haji menyediakan paket Umroh dengan fasilitas lengkap, pembimbing berpengalaman, dan layanan profesional.",
};

// Ambil hingga 11 foto — item ke-10 dan ke-11 fallback ke foto awal jika data kurang
const PREVIEW_ITEMS = GALLERY_ITEMS.slice(0, 11);

/** Reusable thumbnail untuk grid galeri beranda */
function GalleryThumb({
  item,
  className = "",
  eager = false,
}: {
  item: GalleryItem;
  className?: string;
  eager?: boolean;
}) {
  return (
    <Link
      href="/galeri"
      className={`group relative block overflow-hidden rounded-2xl border border-line bg-line ${className}`}
      aria-label={`Lihat galeri: ${item.caption}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading={eager ? "eager" : "lazy"}
        width={800}
        height={800}
      />
      {/* Overlay caption */}
      <span className="absolute inset-0 flex flex-col items-end justify-end bg-gradient-to-t from-primary-dark/75 via-primary-dark/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <ZoomIn size={12} aria-hidden="true" />
          {item.caption}
        </span>
      </span>
    </Link>
  );
}

export default function BerandaPage() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhyChooseUs />

      {/* ─── Galeri & Momen ────────────────────────── */}
      <section
        className="container-site pb-16 lg:pb-24"
        aria-labelledby="galeri-heading"
      >
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="galeri-heading"
              eyebrow="Galeri & Momen"
              title="Perjalanan Bersama Jamaah Kami"
              description="Dokumentasi perjalanan, momen ibadah, dan kenangan indah jamaah bersama Nurul Iman Travel."
            />
            <Button href="/galeri" variant="outline" className="shrink-0">
              Lihat Semua Foto <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Reveal>

        {/* Grid galeri — layout mosaic 4 kolom × 3 baris, penuh tanpa ruang kosong
          ┌──────┬──────┬──────┬──────┐
          │      │  2   │  3   │      │  baris 1
          │  1   ├──────┼──────┤      │
          │(1×2) │  4   │  5   │      │  baris 2
          ├──────┼──────┼──────┼──────┤
          │  6   │  7   │  8   │  9   │  baris 3
          ├──────┼──────┼──────┼──────┤
          │ 10   │  11  │  -   │  -   │  (tidak ada baris 4 — 11 item cukup 3 baris penuh)
          └──────┴──────┴──────┴──────┘
          Foto 1 col-span-1 row-span-2, sisanya 1×1
        */}
        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[220px] md:grid-cols-4">

          {/* Foto 1 — besar, span 2 col × 2 row */}
          <GalleryThumb item={PREVIEW_ITEMS[0]} className="col-span-1 row-span-2 md:col-span-1 md:row-span-2" eager />

          {/* Foto 2 */}
          <GalleryThumb item={PREVIEW_ITEMS[1]} eager />

          {/* Foto 3 */}
          <GalleryThumb item={PREVIEW_ITEMS[2]} eager />

          {/* Foto 4 */}
          <GalleryThumb item={PREVIEW_ITEMS[3]} />

          {/* Foto 5 */}
          <GalleryThumb item={PREVIEW_ITEMS[4]} />

          {/* Foto 6 — baris bawah */}
          <GalleryThumb item={PREVIEW_ITEMS[5]} />

          {/* Foto 7 */}
          <GalleryThumb item={PREVIEW_ITEMS[6]} />

          {/* Foto 8 */}
          <GalleryThumb item={PREVIEW_ITEMS[7]} />

          {/* Foto 9 — mengisi cel kanan bawah yang sebelumnya kosong */}
          <GalleryThumb item={PREVIEW_ITEMS[8]} />

          {/* Foto 10 — kolom 3 baris 3 (pakai ulang item jika data kurang) */}
          <GalleryThumb item={PREVIEW_ITEMS[9] ?? PREVIEW_ITEMS[1]} />

          {/* Foto 11 — kolom 4 baris 3 (pakai ulang item jika data kurang) */}
          <GalleryThumb item={PREVIEW_ITEMS[10] ?? PREVIEW_ITEMS[2]} />
        </div>

        {/* CTA ke halaman galeri */}
        <Reveal className="mt-8 text-center">
          <Button href="/galeri" variant="outline">
            Lihat Semua Galeri Perjalanan <span aria-hidden="true">→</span>
          </Button>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
