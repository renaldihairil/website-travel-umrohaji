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
import { Reveal } from "@/components/ui/Reveal";
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

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
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
        className="border-b border-line bg-white"
      >
        <div className="container-site flex items-center overflow-x-auto py-3.5 text-sm text-muted">
          <ol className="flex items-center gap-1.5 whitespace-nowrap">
            <li><Link href="/" className="hover:text-primary">Beranda</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li><Link href="/paket-umroh" className="hover:text-primary">Paket Umroh</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li aria-current="page" className="font-medium text-primary-dark">{pkg.name}</li>
          </ol>
        </div>
      </nav>

      {/* ─── Main Detail ──────────────────────────────── */}
      <section
        className="container-site grid gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14"
        aria-labelledby="detail-title"
      >
        {/* Galeri */}
        <Reveal variant="left">
          <PackageGallery images={pkg.gallery} name={pkg.name} />
        </Reveal>

        {/* Info paket */}
        <Reveal variant="right">
          <div>
            {/* Badge + Judul */}
            <Badge variant={pkg.badgeVariant}>{pkg.badge}</Badge>
            <h1 id="detail-title" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              {pkg.name}
            </h1>
            <span aria-hidden="true" className="gold-line mt-4 block w-20" />

            {/* Info pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { icon: CalendarDays, text: pkg.duration },
                { icon: MapPin,       text: pkg.route },
                { icon: BedDouble,    text: pkg.hotel },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink shadow-sm"
                >
                  <Icon size={13} className="text-gold" aria-hidden="true" />
                  {text}
                </span>
              ))}
            </div>

            {/* Harga */}
            <div className="price-badge mt-6">
              <div>
                <p className="text-xs font-medium text-muted">Harga Mulai</p>
                <p className="font-display text-3xl font-bold text-primary-dark sm:text-4xl">
                  {pkg.price}
                </p>
                {pkg.priceUnit ? (
                  <p className="text-sm text-muted">{pkg.priceUnit}</p>
                ) : null}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {pkg.cta.whatsapp ? (
                <a
                  href={tanyaPaketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  {pkg.cta.label} <span aria-hidden="true">→</span>
                </a>
              ) : (
                <Button href={pkg.cta.href ?? "/pendaftaran"} className="btn-shine px-7 py-3.5">
                  {pkg.cta.label} <span aria-hidden="true">→</span>
                </Button>
              )}
              <a
                href={tanyaPaketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm font-semibold text-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Tanya Paket
              </a>
            </div>

            {/* Fasilitas */}
            <div className="mt-7 rounded-2xl border border-line bg-background p-5">
              <h2 className="mb-4 text-base font-bold text-primary-dark">
                Fasilitas yang Didapatkan
              </h2>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {pkg.facilities.map((facility, index) => {
                  const Icon = facilityIcons[index % facilityIcons.length];
                  return (
                    <li key={facility} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Icon size={13} aria-hidden="true" />
                      </span>
                      <span className="text-ink/85">{facility}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Tab Konten ───────────────────────────────── */}
      <section className="container-site pb-16 lg:pb-24">
        <PackageTabs pkg={pkg} />
      </section>

      <CtaBand
        title={`Ambil Paket ${pkg.name} Sekarang`}
        description="Pendaftaran cepat melalui WhatsApp — kami bantu dari konsultasi hingga keberangkatan."
      />
    </>
  );
}
