/**
 * Semua path gambar terpusat di sini.
 * Foto asli di-optimasi ke WebP oleh scripts/build-images.mjs
 * (master tersimpan di assets/original/).
 */
export const images = {
  logo: "/images/logo-nurul-iman.png",
  heroKabah: "/images/hero-kabah.webp",
  kabahBlue: "/images/kabah-blue.webp",
  kabahAerial: "/images/kabah-aerial.webp",
  nabawiDay: "/images/nabawi-day.webp",
  nabawiSunset: "/images/nabawi-sunset.webp",
  makkahDusk: "/images/makkah-dusk.webp",
  arafat: "/images/arafat.webp",
} as const;

export type ImageKey = keyof typeof images;
