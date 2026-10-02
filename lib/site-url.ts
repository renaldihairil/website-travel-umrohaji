/**
 * Base URL untuk SEO (sitemap & robots).
 * Set NEXT_PUBLIC_SITE_URL di Vercel setelah domain production ditentukan
 * (PRD §30: domain tidak boleh di-hardcode).
 *
 * PENTING: URL di bawah adalah placeholder yang TIDAK valid untuk production.
 * Sitemap dan robots.txt akan menggunakan URL ini jika env var tidak di-set,
 * yang berakibat crawler tidak bisa mengindeks situs dengan benar.
 * Wajib set NEXT_PUBLIC_SITE_URL sebelum deploy ke production.
 */
const PLACEHOLDER_URL = "https://nurul-iman-travel.example";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // Peringatan saat development: placeholder belum diganti dengan domain asli
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "[site-url] NEXT_PUBLIC_SITE_URL belum di-set. " +
      "Sitemap & robots.txt menggunakan placeholder: " + PLACEHOLDER_URL +
      "\nSet env var ini sebelum deploy ke production."
    );
  }

  return PLACEHOLDER_URL;
}
