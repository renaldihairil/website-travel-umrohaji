import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RegistrationForm } from "@/components/registration/RegistrationForm";
import { ContactCard } from "@/components/registration/ContactCard";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Pendaftaran Umroh",
  description:
    "Daftar atau dapatkan informasi paket Umroh Nurul Iman Travel — isi formulir dan lanjutkan percakapan melalui WhatsApp.",
  openGraph: {
    title: "Pendaftaran Umroh | Nurul Iman Travel & Haji",
    description:
      "Daftar atau dapatkan informasi paket Umroh Nurul Iman Travel.",
  },
};

export default function PendaftaranPage() {
  return (
    <>
      {/* ─── Page Hero ────────────────────────────────── */}
      <section className="relative overflow-hidden" aria-labelledby="pendaftaran-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.heroKabah}
          alt="Ka'bah di Masjidil Haram sebagai latar halaman pendaftaran"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] animate-ken-burns"
          width={1600}
          height={1067}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/50" />
        <div aria-hidden="true" className="glow-orb -left-16 bottom-0 h-64 w-64 bg-gold/40" />

        <div className="container-site relative stagger py-16 lg:py-22">
          <p className="eyebrow text-gold-light">Formulir Pendaftaran</p>
          <h1
            id="pendaftaran-title"
            className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Pendaftaran Umroh
          </h1>
          <span aria-hidden="true" className="gold-line mt-5 block w-24" />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Isi formulir di bawah ini untuk mendapatkan informasi paket, serta
            jadwal keberangkatan terbaru dari kami. Tim admin siap membantu.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-line bg-white"
      >
        <div className="container-site py-3.5 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-primary">Beranda</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li aria-current="page" className="font-medium text-primary-dark">Pendaftaran</li>
          </ol>
        </div>
      </nav>

      {/* ─── Form + Contact ────────────────────────────── */}
      <section className="container-site grid gap-8 pb-16 pt-8 lg:grid-cols-[1.6fr_1fr] lg:pb-24">
        <Reveal variant="left">
          <RegistrationForm />
        </Reveal>
        <Reveal variant="right">
          <ContactCard />
        </Reveal>
      </section>
    </>
  );
}
