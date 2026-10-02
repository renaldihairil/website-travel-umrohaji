import { images } from "@/lib/images";

export const GALLERY_CATEGORIES = [
  "Semua",
  "Makkah",
  "Madinah",
  "Kegiatan Jamaah",
  "Keberangkatan",
  "Pembimbing",
  "Fasilitas",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "Semua">;
};

/**
 * Placeholder — ganti dengan dokumentasi foto asli jamaah
 * sebelum production (lihat PRD §25).
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "makkah-1",
    src: images.kabah,
    alt: "Ka'bah di Masjidil Haram, Makkah",
    caption: "Masjidil Haram, Makkah",
    category: "Makkah",
  },
  {
    id: "makkah-2",
    src: images.makkahSkyline,
    alt: "Skyline kota Makkah dengan Menara Jam",
    caption: "Skyline Makkah",
    category: "Makkah",
  },
  {
    id: "makkah-3",
    src: images.heroKabah,
    alt: "Jamaah berniat di dekat Ka'bah",
    caption: "Suasana ibadah di Makkah",
    category: "Makkah",
  },
  {
    id: "madinah-1",
    src: images.masjidNabawi,
    alt: "Masjid Nabawi di Madinah",
    caption: "Masjid Nabawi, Madinah",
    category: "Madinah",
  },
  {
    id: "madinah-2",
    src: images.madinah,
    alt: "Kubah dan menara di kota Madinah",
    caption: "Kota Madinah",
    category: "Madinah",
  },
  {
    id: "madinah-3",
    src: images.masjidInterior,
    alt: "Interior area masjid",
    caption: "Interior masjid",
    category: "Madinah",
  },
  {
    id: "kegiatan-1",
    src: images.jamaah,
    alt: "Rombongan jamaah umroh bersama pembimbing",
    caption: "Kegiatan jamaah",
    category: "Kegiatan Jamaah",
  },
  {
    id: "kegiatan-2",
    src: images.courtyard,
    alt: "Halaman masjid tempat kegiatan jamaah",
    caption: "Kegiatan bersama jamaah",
    category: "Kegiatan Jamaah",
  },
  {
    id: "keberangkatan-1",
    src: images.keberangkatan,
    alt: "Visual keberangkatan jamaah menuju tanah suci",
    caption: "Momen keberangkatan",
    category: "Keberangkatan",
  },
  {
    id: "pembimbing-1",
    src: images.pembimbing,
    alt: "Pembimbing ibadah mendampingi jamaah",
    caption: "Pembimbing berpengalaman",
    category: "Pembimbing",
  },
  {
    id: "fasilitas-1",
    src: images.hotel,
    alt: "Visual akomodasi hotel selama perjalanan",
    caption: "Akomodasi hotel",
    category: "Fasilitas",
  },
  {
    id: "fasilitas-2",
    src: images.domes,
    alt: "Bangunan masjid sebagai visual fasilitas perjalanan",
    caption: "Fasilitas perjalanan",
    category: "Fasilitas",
  },
];
