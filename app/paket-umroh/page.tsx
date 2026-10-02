import type { Metadata } from "next";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { CtaBand } from "@/components/home/CtaBand";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Paket Umroh",
  description:
    "Pilihan paket umroh Nurul Iman Travel dengan fasilitas lengkap, harga kompetitif, dan jadwal keberangkatan fleksibel.",
  openGraph: {
    title: "Paket Umroh | Nurul Iman Travel & Haji",
    description:
      "Pilihan paket umroh dengan fasilitas lengkap, harga kompetitif, dan jadwal keberangkatan fleksibel.",
  },
};

export default function PaketUmrohPage() {
  return (
    <>
      <section className="border-b border-line bg-white" aria-labelledby="paket-title">
        <div className="container-site grid items-center gap-10 py-14 lg:grid-cols-[1.4fr_1fr] lg:py-20">
          <div>
            <p className="eyebrow mb-3">Paket Umroh</p>
            <h1
              id="paket-title"
              className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              Pilihan Paket Umroh Terbaik Sesuai Kebutuhan Anda
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Kami menyediakan berbagai pilihan paket umroh dengan fasilitas
              lengkap, harga kompetitif, dan jadwal keberangkatan yang fleksibel.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.masjidNabawi}
                alt="Ilustrasi Masjid Nabawi"
                className="h-64 w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <blockquote className="mt-6 max-w-xs font-display text-lg italic leading-relaxed text-primary-dark">
              &ldquo;Jadikan setiap langkah sebagai doa, setiap doa sebagai
              harapan.&rdquo;
              <span
                aria-hidden="true"
                className="mt-3 block h-0.5 w-16 rounded bg-gold"
              />
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container-site py-14 lg:py-20" aria-label="Daftar paket umroh">
        <PackageGrid />
        <blockquote className="mt-10 max-w-md rounded-2xl border border-line bg-gold-soft p-6 font-display text-lg italic leading-relaxed text-primary-dark lg:hidden">
          &ldquo;Jadikan setiap langkah sebagai doa, setiap doa sebagai
          harapan.&rdquo;
        </blockquote>
      </section>

      <CtaBand />
    </>
  );
}
