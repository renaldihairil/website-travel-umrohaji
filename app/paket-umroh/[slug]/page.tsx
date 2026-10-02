import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Bus,
  CalendarDays,
  ChevronRight,
  MapPin,
  MessageCircle,
  ScrollText,
  Utensils,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/home/CtaBand";
import { PackageGallery } from "@/components/packages/PackageGallery";
import { PackageTabs } from "@/components/packages/PackageTabs";
import { PACKAGES, getPackageBySlug } from "@/data/packages";
import { whatsappUrl } from "@/lib/whatsapp";

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PACKAGES.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Paket Tidak Ditemukan" };

  return {
    title: pkg.name,
    description: `${pkg.name} — ${pkg.duration}, ${pkg.hotel}. ${pkg.price}. ${pkg.description}`,
    openGraph: {
      title: `${pkg.name} | Nurul Iman Travel & Haji`,
      description: pkg.description,
    },
  };
}

const facilityIcons = [BedDouble, Bus, Utensils, Users, ScrollText];

export default async function PaketDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const tanyaPaketUrl = whatsappUrl(
    `Assalamu'alaikum, saya ingin bertanya tentang paket ${pkg.name} (${pkg.price}). Mohon informasi lebih lanjut.`,
  );

  return (
    <>
      {/* Breadcrumb */}
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
          <li>
            <Link href="/paket-umroh" className="hover:text-primary">
              Paket Umroh
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li aria-current="page" className="text-primary-dark">
            {pkg.name}
          </li>
        </ol>
      </nav>

      <section className="container-site grid gap-10 py-8 lg:grid-cols-2 lg:gap-14 lg:py-12" aria-labelledby="detail-title">
        {/* Gallery */}
        <PackageGallery images={pkg.gallery} name={pkg.name} />

        {/* Informasi paket */}
        <div>
          <Badge variant={pkg.badgeVariant}>{pkg.badge}</Badge>
          <h1
            id="detail-title"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            {pkg.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={16} aria-hidden="true" />
              {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} aria-hidden="true" />
              {pkg.route}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BedDouble size={16} aria-hidden="true" />
              {pkg.hotel}
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold text-primary-dark sm:text-4xl">
            {pkg.price}{" "}
            {pkg.priceUnit ? (
              <span className="text-base font-medium text-muted">
                {pkg.priceUnit}
              </span>
            ) : null}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={pkg.cta.href ?? "/pendaftaran"} className="px-7 py-3.5">
              Daftar Sekarang <span aria-hidden="true">→</span>
            </Button>
            <a
              href={tanyaPaketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm font-semibold text-primary-dark transition-colors hover:border-primary hover:bg-primary/5"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Tanya Paket
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-white p-6">
            <h2 className="text-lg font-semibold">Fasilitas yang Didapatkan</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/85">
              {pkg.facilities.map((facility, index) => {
                const Icon = facilityIcons[index % facilityIcons.length];
                return (
                  <li key={facility} className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-soft text-primary">
                      <Icon size={15} aria-hidden="true" />
                    </span>
                    <span className="pt-1.5">{facility}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Tab konten */}
      <section className="container-site pb-16 lg:pb-24">
        <PackageTabs pkg={pkg} />
      </section>

      <CtaBand
        title={`Ambil ${pkg.name} Sekarang`}
        description="Pendaftaran cepat melalui WhatsApp — kami bantu mulai dari konsultasi hingga keberangkatan."
      />
    </>
  );
}
