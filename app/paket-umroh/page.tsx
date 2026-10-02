import type { Metadata } from "next";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { CheckCircle2 } from "lucide-react";

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

const keunggulan = [
  "Pembimbing ustadz berpengalaman",
  "Hotel dekat Masjidil Haram & Nabawi",
  "Transportasi AC selama perjalanan",
  "Harga transparan tanpa biaya tersembunyi",
];

export default function PaketUmrohPage() {
  return (
    <>
      {/* ─── Page Hero ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light"
        aria-labelledby="paket-title"
      >
        {/* Foto background */}
        <img
          src={images.nabawiDay}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
        />
        {/* Overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/70 to-transparent" />
        {/* Orb */}
        <div aria-hidden="true" className="glow-orb -left-20 -top-20 h-72 w-72 bg-gold/40" />

        <div className="container-site relative py-16 lg:py-22">
          <div
            className="max-w-2xl"
            style={{ animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <p className="eyebrow text-gold-light">Paket Umroh</p>
            <h1
              id="paket-title"
              className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Pilihan Paket Umroh <br className="hidden sm:block" />
              Terbaik Sesuai Kebutuhan Anda
            </h1>
            <span aria-hidden="true" className="gold-line mt-5 block w-28" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              Kami menyediakan berbagai pilihan paket umroh dengan fasilitas
              lengkap, harga kompetitif, dan jadwal keberangkatan yang fleksibel.
            </p>

            {/* Keunggulan list */}
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {keunggulan.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                  <CheckCircle2 size={16} className="shrink-0 text-gold-light" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quote card pojok kanan — desktop */}
          <Reveal variant="right" className="absolute right-14 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="w-64 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="font-display text-base italic leading-relaxed text-white">
                &ldquo;Jadikan setiap langkah sebagai doa, setiap doa sebagai harapan.&rdquo;
              </p>
              <span aria-hidden="true" className="mt-4 block h-px w-14 bg-gold" />
              <div className="mt-3">
                <p className="text-xs font-semibold text-gold-light">Mulai dari</p>
                <p className="mt-0.5 font-display text-2xl font-bold text-white">
                  Rp 24.500.000
                </p>
                <p className="text-xs text-white/60">/ Orang</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Package Grid ──────────────────────────────── */}
      <section
        className="container-site py-14 lg:py-20"
        aria-label="Daftar paket umroh"
      >
        <PackageGrid />
      </section>

      <CtaBand />
    </>
  );
}
