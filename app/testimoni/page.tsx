import type { Metadata } from "next";
import { Info, MessageCircle, Quote, ShieldCheck, Star } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/data/testimonials";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Testimoni Jamaah",
  description:
    "Pengalaman dan testimoni jamaah Nurul Iman Travel & Haji setelah menunaikan ibadah umroh.",
  openGraph: {
    title: "Testimoni Jamaah | Nurul Iman Travel & Haji",
    description: "Pengalaman dan testimoni jamaah Nurul Iman Travel & Haji.",
  },
};

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Izin Resmi Kemenag",
    description: "Terdaftar dan diawasi oleh Kementerian Agama RI.",
  },
  {
    icon: Star,
    title: "Pelayanan Terbaik",
    description: "Pendampingan dari konsultasi hingga kepulangan.",
  },
  {
    icon: MessageCircle,
    title: "Respon 24 Jam",
    description: "Admin siap membantu kapan saja selama perjalanan.",
  },
];

export default function TestimoniPage() {
  return (
    <>
      <PageHero
        title="Cerita Jamaah Nurul Iman"
        description="Pengalaman jamaah selama berangkat, beribadah, dan kembali bersama Nurul Iman Travel & Haji."
      />

      {/* ─── Demo Notice ──────────────────────────── */}
      <section className="container-site pt-10" aria-label="Catatan testimoni demo">
        <Reveal>
          <div className="flex items-start gap-3.5 rounded-2xl border border-primary/20 bg-white p-5 shadow-sm">
            <Info
              size={18}
              className="mt-0.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div className="text-sm leading-relaxed">
              <p className="font-semibold text-primary-dark">Catatan untuk Bapak/Ibu Calon Klien</p>
              <p className="mt-1 text-muted">
                Kartu di bawah adalah <strong>contoh struktur tampilan</strong> testimoni.
                Seluruh kutipan, nama, dan asal jamaah akan diganti dengan{" "}
                <strong>testimoni nyata</strong> dari jamaah Bapak/Ibu sebelum website
                diluncurkan. Kami tidak akan menampilkan testimoni palsu.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Grid Testimoni ───────────────────────── */}
      <section
        className="container-site py-10 lg:py-14"
        aria-label="Daftar testimoni jamaah"
      >
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal as="li" key={item.id} delay={(index % 3) * 100}>
              <div className="card card-hover group flex h-full flex-col p-6">
                {/* Header kartu */}
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-soft text-gold transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    <Quote size={20} aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl font-bold leading-none text-line"
                  >
                    &rdquo;
                  </span>
                </div>

                {/* Kutipan */}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                  {item.placeholder
                    ? "Testimoni nyata dari jamaah Bapak/Ibu akan ditampilkan di sini — menceritakan pengalaman perjalanan, kenyamanan fasilitas, dan kesan selama menunaikan ibadah umroh."
                    : item.quote}
                </p>

                {/* Identitas jamaah */}
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-light text-sm font-bold text-white ring-2 ring-gold/30"
                  >
                    {item.placeholder ? "J" : item.name.charAt(0)}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-primary-dark">
                      {item.placeholder ? "Nama Jamaah" : item.name}
                    </p>
                    <p className="text-xs text-muted">
                      {item.placeholder ? "Kota Asal · " : `${item.origin} · `}
                      {item.package}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Trust strip */}
        <Reveal className="mt-14">
          <div className="grid gap-5 rounded-3xl bg-gradient-to-r from-primary-dark to-primary p-8 shadow-[0_32px_60px_-40px_rgba(4,60,54,0.8)] sm:grid-cols-3 lg:p-10">
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-white shadow-lg">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-white">{title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA WA */}
        <div className="mt-10 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(217,154,40,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c68a1e]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
