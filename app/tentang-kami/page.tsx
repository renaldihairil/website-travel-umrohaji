import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Eye, Target, ShieldCheck, Sparkles } from "lucide-react";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { COMPANY } from "@/data/company";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Profil, visi misi, legalitas, dan keunggulan Nurul Iman Travel & Haji — biro perjalanan umroh & haji yang amanah dan profesional.",
  openGraph: {
    title: "Tentang Kami | Nurul Iman Travel & Haji",
    description:
      "Profil, visi misi, legalitas, dan keunggulan Nurul Iman Travel & Haji.",
  },
};

export default function TentangKamiPage() {
  return (
    <>
      <PageHero
        title="Tentang Nurul Iman Travel & Haji"
        description="Kami mendampingi calon jamaah dari konsultasi hingga kepulangan, dengan pelayanan yang amanah, jelas, dan nyaman."
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="container-site pt-6 text-sm text-muted"
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-primary">
              Beranda
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li aria-current="page" className="text-primary-dark">
            Tentang Kami
          </li>
        </ol>
      </nav>

      {/* Profil perusahaan */}
      <section className="container-site grid items-center gap-10 py-10 lg:grid-cols-2 lg:py-16" aria-labelledby="profil-title">
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-3">Profil Perusahaan</p>
          <h2 id="profil-title" className="text-3xl font-bold sm:text-4xl">
            Siapa Kami
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
            <p>{COMPANY.profile.intro}</p>
            <p>{COMPANY.profile.focus}</p>
            <p>{COMPANY.profile.values}</p>
            <p>{COMPANY.profile.commitment}</p>
          </div>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c68a1e]"
          >
            Konsultasi via WhatsApp
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.courtyard}
              alt="Suasana halaman masjid sebagai visual perjalanan Nurul Iman"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="visi-misi-title">
        <div className="container-site">
          <h2 id="visi-misi-title" className="text-3xl font-bold sm:text-4xl">
            Visi &amp; Misi
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                <Eye size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-semibold">Visi</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {COMPANY.visi}
              </p>
            </div>
            <div className="card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                <Target size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-semibold">Misi</h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
                {COMPANY.misi.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legalitas */}
      <section className="container-site py-14 lg:py-20" aria-labelledby="legalitas-title">
        <div className="card p-7 lg:p-10">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white">
              <ShieldCheck size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow mb-2">Legalitas &amp; Kepercayaan</p>
              <h2 id="legalitas-title" className="text-2xl font-bold sm:text-3xl">
                Terdaftar &amp; Diawasi
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                Status saat ini: <strong className="text-primary-dark">{COMPANY.legalitas.status}</strong>
              </p>
              <div className="mt-4 max-w-3xl rounded-2xl border border-dashed border-gold/70 bg-gold-soft p-5 text-sm leading-relaxed text-ink/80">
                <p className="flex items-start gap-2 font-semibold text-primary-dark">
                  <Sparkles size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  Placeholder legalitas
                </p>
                <p className="mt-2">{COMPANY.legalitas.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="keunggulan-title">
        <div className="container-site">
          <h2 id="keunggulan-title" className="text-3xl font-bold sm:text-4xl">
            Keunggulan Kami
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY.keunggulan.map((item) => (
              <li key={item.title} className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-soft text-primary">
                  <Sparkles size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Ingin Tahu Lebih Lanjut?"
        description="Hubungi kami untuk informasi legalitas, jadwal keberangkatan, dan pilihan paket umroh."
      />
    </>
  );
}
