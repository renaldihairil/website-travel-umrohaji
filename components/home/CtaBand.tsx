import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
      <div className="relative overflow-hidden rounded-3xl bg-primary-dark px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.domes}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/3 object-cover opacity-20 lg:block"
        />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            {description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/pendaftaran" variant="gold">
              Daftar Sekarang <span aria-hidden="true">→</span>
            </Button>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
