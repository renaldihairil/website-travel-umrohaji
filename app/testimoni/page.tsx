import type { Metadata } from "next";
import { MessageCircle, Quote, ShieldCheck, Star } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
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

      {/* Notice: struktur placeholder */}
      <section className="container-site pt-8" aria-label="Catatan testimoni">
        <div className="rounded-2xl border border-dashed border-gold/70 bg-gold-soft p-5 text-sm leading-relaxed text-ink/80">
          <strong className="text-primary-dark">Catatan:</strong> kartu di bawah
          adalah <em>struktur placeholder</em>. Seluruh testimoni akan diganti
          dengan cerita asli dari jamaah yang disediakan bisnis — kami tidak
          menampilkan testimoni palsu.
        </div>
      </section>

      <section className="container-site py-10 lg:py-14" aria-label="Daftar testimoni jamaah">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <li key={item.id} className="card flex flex-col p-6">
              <Quote size={26} className="text-gold" aria-hidden="true" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/85">
                {item.quote}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary font-semibold text-white"
                >
                  {item.name.replace(/[[\]]/g, "").charAt(0)}
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-primary-dark">{item.name}</p>
                  <p className="text-muted">
                    {item.origin} · {item.package}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Trust section */}
        <div className="mt-14 grid gap-6 rounded-3xl bg-primary-dark p-8 sm:grid-cols-3 lg:p-10">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-white">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-white">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c68a1e]"
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
