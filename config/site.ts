/**
 * Single source of truth untuk identitas situs & kontak.
 * Nomor WhatsApp di sini adalah satu-satunya sumber nomor untuk seluruh CTA.
 */

export const WHATSAPP_NUMBER = "6287881864680";
export const WHATSAPP_DISPLAY = "087881864680";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Assalamu'alaikum, saya ingin mendapatkan informasi paket Umroh Nurul Iman.";

export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Beranda" },
  { href: "/paket-umroh", label: "Paket Umroh" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/galeri", label: "Galeri" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];

/**
 * Kontak bisnis. Kosongkan nilai yang belum tersedia —
 * komponen tidak akan menampilkannya sampai diisi.
 */
export const CONTACT = {
  phone: "", // contoh: "021 123 4567" — hanya tampil jika diisi
  email: "", // contoh: "info@nurulimantravel.com" — hanya tampil jika diisi
  address: "", // alamat kantor resmi — hanya tampil jika diisi
};

export const SITE = {
  name: "Nurul Iman",
  subBrand: "Travel Umroh & Haji",
  legalName: "Nurul Iman Travel & Haji",
  tagline: "Bersama Kami Menuju Rumah Allah",
  description:
    "Nurul Iman Travel & Haji menyediakan paket Umroh dengan fasilitas lengkap, pembimbing berpengalaman, dan layanan profesional.",
  copyright: "© 2026 Nurul Iman Travel & Haji. All rights reserved.",
} as const;
