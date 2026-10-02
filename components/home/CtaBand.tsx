import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Siap Menunaikan Ibadah Umroh?",
  description =
    "Konsultasikan jadwal keberangkatan dan pilihan paket yang sesuai untuk Anda dan keluarga.",
}: CtaBandProps) {
  return (
    <section className="container-site pb-16 lg:pb-24" aria-label="Ajakan berkonsultasi">
      <Reveal variant="zoom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-light">
          {/* Foto background */}
          <img
            src={images.nabawiSunset}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-20 lg:block"
          />
          {/* Overlay gradasi kiri */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-transparent"
          />
          {/* Orb dekoratif */}
          <div aria-hidden="true" className="glow-orb -left-12 -top-12 h-56 w-56 bg-gold/50" />
          <div aria-hidden="true" className="glow-orb bottom-0 right-1/3 h-40 w-40 bg-primary-light/60" />

          {/* Konten */}
          <div className="relative px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
            <p className="eyebrow text-gold-light">Siap Berangkat?</p>
            <h2 className="mt-3 max-w-xl font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              {description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="/pendaftaran"
                variant="gold"
                className="btn-shine gap-2 px-7 py-3.5 shadow-[0_8px_24px_-8px_rgba(217,154,40,0.6)]"
              >
                Daftar Sekarang
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
