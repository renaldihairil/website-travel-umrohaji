import type { MetadataRoute } from "next";
import { PACKAGES } from "@/data/packages";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const routes = [
    "",
    "/paket-umroh",
    "/tentang-kami",
    "/galeri",
    "/testimoni",
    "/kontak",
    "/pendaftaran",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const packages = PACKAGES.map((pkg) => ({
    url: `${baseUrl}/paket-umroh/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...packages];
}
