import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RegistrationForm } from "@/components/registration/RegistrationForm";
import { ContactCard } from "@/components/registration/ContactCard";
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
      <section className="relative overflow-hidden" aria-labelledby="pendaftaran-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.heroKabah}
          alt="Ka'bah di Masjidil Haram sebagai latar halaman pendaftaran"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={900}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-primary-dark/90"
        />
        <div className="container-site relative py-14 lg:py-20">
          <p className="eyebrow text-gold-light">Formulir Pendaftaran</p>
          <h1
            id="pendaftaran-title"
            className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Pendaftaran Umroh
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            Isi formulir di bawah ini untuk mendapatkan informasi paket, serta
            jadwal keberangkatan terbaru dari kami.
          </p>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="container-site pt-8 text-sm text-muted"
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
            Pendaftaran
          </li>
        </ol>
      </nav>

      <section className="container-site grid gap-8 pb-16 pt-6 lg:grid-cols-[1.5fr_1fr] lg:pb-24">
        <RegistrationForm />
        <ContactCard />
      </section>
    </>
  );
}
