import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Eye,
  Target,
  ShieldCheck,
  Sparkles,
  Info,
} from "lucide-react";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
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
        className="border-b border-line bg-white"
      >
        <div className="container-site py-3.5 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-primary">Beranda</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li aria-current="page" className="font-medium text-primary-dark">Tentang Kami</li>
          </ol>
        </div>
      </nav>

      {/* ─── Profil Perusahaan ─────────────────────── */}
      <section
        className="container-site grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16"
        aria-labelledby="profil-title"
      >
        <Reveal variant="left" className="order-2 lg:order-1">
          <p className="eyebrow mb-3">Profil Perusahaan</p>
          <h2 id="profil-title" className="font-display text-3xl font-bold sm:text-4xl">
            Siapa Kami
          </h2>
          <span aria-hidden="true" className="gold-line mt-4 block w-24" />
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
            className="btn-shine mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(217,154,40,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c68a1e]"
          >
            Konsultasi via WhatsApp
          </a>
        </Reveal>

        <Reveal variant="right" className="order-1 lg:order-2">
          <div className="zoom-media relative rounded-3xl border border-line shadow-[0_32px_64px_-40px_rgba(6,79,70,0.5)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.kabahAerial}
              alt="Masjidil Haram dari udara"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm"
            >
              <p className="font-display text-sm font-bold text-primary-dark">Umroh &amp; Haji</p>
              <p className="text-[11px] text-muted">Pelayanan Amanah &amp; Profesional</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Visi & Misi ──────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="visi-misi-title">
        <div className="container-site">
          <h2 id="visi-misi-title" className="font-display text-3xl font-bold sm:text-4xl">
            Visi &amp; Misi
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Reveal variant="left">
              <div className="card card-hover h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                  <Eye size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">Visi</h3>
                {/* DEMO NOTE: Ganti dengan visi resmi perusahaan Bapak/Ibu */}
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {COMPANY.visi.includes("Ganti")
                    ? "Visi perusahaan Bapak/Ibu akan ditampilkan di sini — misalnya menjadi travel umroh terpercaya yang memberangkatkan ribuan jamaah dengan pelayanan terbaik dan penuh keberkahan."
                    : COMPANY.visi}
                </p>
              </div>
            </Reveal>
            <Reveal variant="right">
              <div className="card card-hover h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                  <Target size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">Misi</h3>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
                  {COMPANY.misi.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Legalitas ────────────────────────────── */}
      <section className="container-site py-14 lg:py-20" aria-labelledby="legalitas-title">
        <Reveal>
          <div className="card relative overflow-hidden p-7 lg:p-10">
            <div aria-hidden="true" className="glow-orb -right-16 -top-16 h-56 w-56 bg-gold/35" />
            <div className="relative flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white">
                <ShieldCheck size={22} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <p className="eyebrow mb-2">Legalitas &amp; Kepercayaan</p>
                <h2 id="legalitas-title" className="font-display text-2xl font-bold sm:text-3xl">
                  Terdaftar &amp; Diawasi
                </h2>

                {/* ── DEMO NOTICE ── */}
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <Info
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div className="text-sm leading-relaxed text-primary-dark">
                    <p className="font-semibold">Catatan untuk Bapak/Ibu Calon Klien</p>
                    <p className="mt-1.5 text-ink/75">
                      Bagian ini akan menampilkan nomor izin resmi, akreditasi Kemenag, dan dokumen
                      legalitas perusahaan Bapak/Ibu. Data akan kami sesuaikan setelah informasi
                      resmi bisnis diterima, sehingga calon jamaah dapat memverifikasi kepercayaan
                      travel Anda secara langsung.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted">
                  Contoh tampilan:{" "}
                  <span className="font-semibold text-primary-dark">
                    No. Izin: SK/PPIU/XXXX/TAHUN · Akreditasi: A (Kemenag RI)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Keunggulan ───────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="keunggulan-title">
        <div className="container-site">
          <h2 id="keunggulan-title" className="font-display text-3xl font-bold sm:text-4xl">
            Keunggulan Kami
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY.keunggulan.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 100}>
                <div className="card card-hover group h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-soft text-gold transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    <Sparkles size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-primary-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Demo Notice — Testimoni ──────────────── */}
      <section className="container-site pb-14 lg:pb-20">
        <Reveal>
          <div className="rounded-3xl border border-dashed border-primary/25 bg-white p-7 lg:p-10">
            <div className="flex items-start gap-4">
              <Info size={22} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-display text-xl font-bold text-primary-dark">
                  Konten Ini Akan Disesuaikan dengan Bisnis Bapak/Ibu
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                  Website demo ini dibuat sebagai gambaran tampilan dan fitur yang dapat dimiliki
                  oleh travel umroh &amp; haji Bapak/Ibu. Seluruh konten — mulai dari profil
                  perusahaan, visi misi, nomor legalitas, foto galeri, testimoni jamaah, hingga
                  informasi paket — akan kami sesuaikan dengan data nyata bisnis Bapak/Ibu sebelum
                  website diluncurkan secara resmi.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-muted">
                  {[
                    "Profil & sejarah perusahaan Bapak/Ibu",
                    "Visi, misi, dan nilai bisnis yang nyata",
                    "Nomor izin & akreditasi Kemenag resmi",
                    "Foto dokumentasi jamaah asli",
                    "Testimoni nyata dari jamaah Bapak/Ibu",
                    "Informasi paket, harga & jadwal terkini",
                    "Kontak: nomor WA, email, alamat kantor",
                    "Dan fitur lainnya sesuai kebutuhan",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(
                    "Assalamu'alaikum, saya tertarik dengan website demo Nurul Iman Travel. Ingin mendiskusikan pembuatan website untuk travel umroh saya.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Diskusikan Website Anda →
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Ingin Tahu Lebih Lanjut?"
        description="Hubungi kami untuk informasi legalitas, jadwal keberangkatan, dan pilihan paket umroh."
      />
    </>
  );
}
