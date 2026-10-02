import { images } from "@/lib/images";

export const GALLERY_CATEGORIES = [
  "Semua",
  "Makkah",
  "Madinah",
  "Kegiatan Jamaah",
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

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "makkah-1",
    src: images.heroKabah,
    alt: "Ka'bah di Masjidil Haram saat senja dengan Menara Jam Abraj Al Bait",
    caption: "Masjidil Haram, Makkah",
    category: "Makkah",
  },
  {
    id: "makkah-2",
    src: images.kabahBlue,
    alt: "Ka'bah dengan latar langit biru dan kompleks Abraj Al Bait",
    caption: "Ka'bah & Abraj Al Bait",
    category: "Makkah",
  },
  {
    id: "makkah-3",
    src: images.kabahAerial,
    alt: "Masjidil Haram dari udara dengan jamaah yang sedang tawaf",
    caption: "Tawaf dari Udara",
    category: "Makkah",
  },
  {
    id: "madinah-1",
    src: images.nabawiDay,
    alt: "Masjid Nabawi di Madinah pada pagi hari",
    caption: "Masjid Nabawi, Madinah",
    category: "Madinah",
  },
  {
    id: "madinah-2",
    src: images.nabawiSunset,
    alt: "Masjid Nabawi di Madinah saat matahari terbenam",
    caption: "Masjid Nabawi saat Senja",
    category: "Madinah",
  },
  {
    id: "kegiatan-1",
    src: images.arafat,
    alt: "Jamaah berwukuf di Arafah dengan pakaian ihram",
    caption: "Jamaah di Arafah",
    category: "Kegiatan Jamaah",
  },
  {
    id: "kegiatan-2",
    src: images.kabahAerial,
    alt: "Rombongan jamaah berada di pelatan Masjidil Haram",
    caption: "Bersama Jamaah di Masjidil Haram",
    category: "Kegiatan Jamaah",
  },
  {
    id: "kegiatan-3",
    src: images.nabawiDay,
    alt: "Jamaah berada di pelatan Masjid Nabawi",
    caption: "Kegiatan di Masjid Nabawi",
    category: "Kegiatan Jamaah",
  },
  {
    id: "fasilitas-1",
    src: images.makkahDusk,
    alt: "Hotel bintang dekat Masjidil Haram pada waktu senja",
    caption: "Akomodasi Hotel Makkah",
    category: "Fasilitas",
  },
  {
    id: "fasilitas-2",
    src: images.heroKabah,
    alt: "Kompleks Masjidil Haram sebagai visual fasilitas perjalanan",
    caption: "Fasilitas Perjalanan",
    category: "Fasilitas",
  },
];
