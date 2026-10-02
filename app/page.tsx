import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CtaBand } from "@/components/home/CtaBand";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Nurul Iman Travel & Haji | Umroh Nyaman, Berkah Sepanjang Masa",
  description:
    "Nurul Iman Travel & Haji menyediakan paket Umroh dengan fasilitas lengkap, pembimbing berpengalaman, dan layanan profesional.",
};

export default function BerandaPage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />

      <section className="container-site pb-16 lg:pb-24" aria-labelledby="paket-pilihan">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Paket Umroh"
            title="Paket Pilihan untuk Anda"
            description="Empat pilihan paket dengan fasilitas lengkap dan jadwal keberangkatan yang fleksibel."
          />
          <Button href="/paket-umroh" variant="outline" className="shrink-0">
            Lihat Semua Paket <span aria-hidden="true">→</span>
          </Button>
        </div>
        <div id="paket-pilihan" className="mt-10">
          <PackageGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
