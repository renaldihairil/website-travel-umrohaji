/**
 * Base URL untuk SEO (sitemap & robots).
 * Set NEXT_PUBLIC_SITE_URL di Vercel setelah domain production ditentukan
 * (PRD §30: domain tidak boleh di-hardcode).
 */
const PLACEHOLDER_URL = "https://nurul-iman-travel.example";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return PLACEHOLDER_URL;
}
