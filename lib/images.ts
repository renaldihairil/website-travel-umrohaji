/**
 * Semua path gambar terpusat di sini.
 * Ganti nilai dengan asset final tanpa menyentuh component.
 * Placeholder saat ini berupa SVG lokal di /public/images (aman lisensi).
 */
export const images = {
  logo: "/images/logo.svg",
  heroKabah: "/images/hero-kabah.svg",
  kabah: "/images/kabah.svg",
  masjidNabawi: "/images/masjid-nabawi.svg",
  makkahSkyline: "/images/makkah-skyline.svg",
  masjidInterior: "/images/masjid-interior.svg",
  madinah: "/images/madinah.svg",
  domes: "/images/domes.svg",
  courtyard: "/images/courtyard.svg",
  jamaah: "/images/jamaah.svg",
  pembimbing: "/images/pembimbing.svg",
  hotel: "/images/hotel.svg",
  keberangkatan: "/images/keberangkatan.svg",
} as const;

export type ImageKey = keyof typeof images;
