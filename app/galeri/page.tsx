import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { CtaBand } from "@/components/home/CtaBand";
import { GALLERY_ITEMS } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Dokumentasi perjalanan dan kegiatan jamaah Nurul Iman Travel & Haji — Makkah, Madinah, keberangkatan, dan fasilitas perjalanan.",
  openGraph: {
    title: "Galeri | Nurul Iman Travel & Haji",
    description: "Dokumentasi perjalanan dan kegiatan jamaah Nurul Iman.",
  },
};

export default function GaleriPage() {
  return (
    <>
      <PageHero
        title="Galeri Perjalanan Bersama Kami"
        description="Dokumentasi perjalanan, kegiatan jamaah, dan momen keberangkatan bersama Nurul Iman Travel & Haji."
      />

      <section className="container-site py-12 lg:py-16" aria-label="Foto galeri">
        <GalleryClient items={GALLERY_ITEMS} />
      </section>

      <CtaBand />
    </>
  );
}
