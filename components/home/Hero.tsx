import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      {/* Wrapper foto + konten — foto absolute di dalam div ini saja */}
      <div className="relative overflow-hidden bg-primary-dark">
        {/* Foto latar — hanya mengisi div ini */}
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
        <div aria-hidden="true" className="glow-orb -left-20 top-1/3 h-96 w-96 bg-gold/30 animate-floaty-slow" />

        {/* Konten teks */}
        <div className="container-site relative">
          <div className="stagger min-h-[520px] max-w-2xl py-20 lg:min-h-[580px] lg:py-28">
            {/* Eyebrow */}
            <p className="flex items-center gap-2.5 font-display text-sm font-medium italic text-gold-light">
              <span aria-hidden="true" className="h-px w-7 bg-gold-light/60" />
              Bersama Kami Menuju Rumah Allah
            </p>

            {/* Heading */}
            <h1
              id="hero-title"
              className="mt-4 font-display text-4xl font-bold leading-[1.07] text-white sm:text-5xl lg:text-[3.6rem]"
            >
              Umroh Nyaman,
              <br />
              <span className="text-shimmer">Berkah Sepanjang Masa</span>
            </h1>

            {/* Gold line */}
            <span aria-hidden="true" className="gold-line mt-5 block w-36" />

            {/* Deskripsi */}
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
              Wujudkan impian suci Anda bersama Nurul Iman Travel. Layanan
              profesional, fasilitas terbaik, dan pembimbing berpengalaman
              menemani setiap langkah perjalanan Anda.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/60"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ── Foto berhenti di sini, stats di luar ── */}
    </section>
  );
}
