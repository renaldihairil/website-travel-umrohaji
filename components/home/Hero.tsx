import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

const stats = [
  { value: "500+",  label: "Jamaah Berangkat" },
  { value: "4",     label: "Pilihan Paket" },
  { value: "24/7",  label: "Layanan Admin" },
  { value: "100%",  label: "Kepuasan Jamaah" },
];

export function Hero() {
  return (
    <section className="container-site pt-4 lg:pt-5" aria-labelledby="hero-title">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-primary-dark shadow-[0_40px_80px_-40px_rgba(4,60,54,0.7)]">
        {/* Foto latar */}
        <img
          src={images.heroKabah}
          alt="Ka'bah di Masjidil Haram saat senja dengan Menara Jam Abraj Al Bait"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] animate-ken-burns"
          width={1600}
          height={1067}
          fetchPriority="high"
        />
        {/* Overlay gradasi */}
        <div aria-hidden="true" className="hero-overlay absolute inset-0" />
        {/* Orb dekoratif */}
        <div aria-hidden="true" className="glow-orb -left-20 top-1/3 h-80 w-80 bg-gold/40 animate-floaty-slow" />

        {/* Konten utama */}
        <div className="relative grid min-h-[560px] items-center lg:min-h-[640px]">
          <div className="stagger w-full px-6 pb-10 pt-14 sm:px-10 lg:px-14 lg:pb-8 lg:pt-20">
            {/* Eyebrow tagline */}
            <p className="flex items-center gap-2.5 font-display text-sm font-medium italic text-gold-light">
              <span aria-hidden="true" className="h-px w-7 bg-gold-light/60" />
              Bersama Kami Menuju Rumah Allah
            </p>

            {/* Heading */}
            <h1
              id="hero-title"
              className="mt-4 font-display text-4xl font-bold leading-[1.07] text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Umroh Nyaman,
              <br />
              <span className="text-shimmer">Berkah Sepanjang Masa</span>
            </h1>

            {/* Gold line */}
            <span aria-hidden="true" className="gold-line mt-5 block w-36" />

            {/* Deskripsi — lebih kecil agar tidak memakan terlalu banyak ruang */}
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Wujudkan impian suci Anda bersama Nurul Iman Travel. Layanan
              profesional, fasilitas terbaik, dan pembimbing berpengalaman
              menemani setiap langkah perjalanan Anda.
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="/paket-umroh"
                variant="gold"
                className="btn-shine px-7 py-3.5 shadow-[0_8px_24px_-8px_rgba(217,154,40,0.7)]"
              >
                Lihat Paket Umroh <span aria-hidden="true">→</span>
              </Button>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12 hover:border-white/60"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip bawah hero */}
        <div className="relative border-t border-white/10 bg-primary-dark/60 backdrop-blur-sm">
          <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-0.5 px-4 py-4 text-center sm:py-5">
                <span className="font-display text-2xl font-bold text-gold-light sm:text-3xl">
                  {value}
                </span>
                <span className="text-xs font-medium text-white/65">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
