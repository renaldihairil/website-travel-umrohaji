import { BadgeCheck, BedDouble, Tag, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

const highlights = [
  { icon: Users, label: "Pembimbing\nBerpengalaman" },
  { icon: BedDouble, label: "Fasilitas\nNyaman" },
  { icon: Tag, label: "Harga\nTerjangkau" },
  { icon: BadgeCheck, label: "Berizin Resmi\nKemenag" },
];

export function Hero() {
  return (
    <section className="container-site pt-6 lg:pt-8" aria-labelledby="hero-title">
      <div className="relative overflow-hidden rounded-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.heroKabah}
          alt="Ka'bah di Masjidil Haram sebagai latar perjalanan umroh"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/85 to-primary-dark/70 sm:bg-gradient-to-r sm:from-primary-dark/95 sm:via-primary-dark/80 sm:to-transparent"
        />

        <div className="relative max-w-2xl px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
          <p className="font-display text-sm font-medium italic text-gold-light">
            Bersama Kami Menuju Rumah Allah
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Umroh Nyaman, Berkah Sepanjang Masa
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Wujudkan impian suci Anda bersama Nurul Iman Travel. Dengan layanan
            profesional, fasilitas terbaik, dan pembimbing berpengalaman,
            perjalanan umroh Anda akan lebih tenang dan bermakna.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-gold-light">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="whitespace-pre-line text-sm font-medium leading-tight text-white">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/paket-umroh" variant="gold" className="px-7 py-3.5">
              Lihat Paket Umroh <span aria-hidden="true">→</span>
            </Button>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
