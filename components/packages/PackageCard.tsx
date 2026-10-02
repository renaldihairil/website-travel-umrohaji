import Link from "next/link";
import { BedDouble, CalendarDays, Check, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Package } from "@/data/packages";
import { whatsappUrl } from "@/lib/whatsapp";

type PackageCardProps = {
  pkg: Package;
};

export function PackageCard({ pkg }: PackageCardProps) {
  const isWhatsappCta = Boolean(pkg.cta.whatsapp);
  const href = isWhatsappCta
    ? whatsappUrl(
        `Assalamu'alaikum, saya tertarik dengan paket ${pkg.name} (${pkg.price}). Mohon informasi lebih lanjut.`,
      )
    : (pkg.cta.href ?? "/paket-umroh");

  const ctaClass = `btn-shine mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 ${
    isWhatsappCta
      ? "bg-primary hover:bg-primary-dark"
      : "bg-gold hover:bg-[#c68a1e]"
  }`;

  return (
    <article className="pkg-card group">
      {/* Gambar */}
      <div className="zoom-media relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt={`Visual paket ${pkg.name}`}
          className="h-48 w-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
        {/* Gradient overlay on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Badge */}
        <div className="absolute left-3 top-3">
          <Badge variant={pkg.badgeVariant}>{pkg.badge}</Badge>
        </div>
        {/* Durasi pill */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary-dark backdrop-blur-sm">
            <CalendarDays size={12} aria-hidden="true" />
            {pkg.duration}
          </span>
        </div>
      </div>

      {/* Konten */}
      <div className="flex flex-1 flex-col gap-0 p-5">
        {/* Nama */}
        <h3 className="text-lg font-bold text-primary-dark">{pkg.name}</h3>

        {/* Meta info */}
        <div className="mt-2 flex flex-col gap-1.5 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gold" aria-hidden="true" />
            {pkg.route}
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={13} className="text-gold" aria-hidden="true" />
            {pkg.hotel}
          </span>
        </div>

        {/* Divider */}
        <div className="section-divider my-4" aria-hidden="true" />

        {/* Features */}
        <ul className="space-y-2 text-sm text-ink/80">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check size={10} className="text-primary" aria-hidden="true" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Harga */}
        <div className="mt-4 rounded-xl border border-gold/25 bg-gold-soft px-4 py-3">
          <p className="text-xs font-medium text-muted">Mulai dari</p>
          <p className="mt-0.5 text-xl font-bold text-primary-dark">{pkg.price}</p>
          {pkg.priceUnit ? (
            <p className="text-xs text-muted">{pkg.priceUnit}</p>
          ) : null}
        </div>

        {/* Spacer agar tombol tidak menempel ke harga */}
        <div className="mt-5" aria-hidden="true" />

        {/* CTA */}
        {isWhatsappCta ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClass}
          >
            {pkg.cta.label} <span aria-hidden="true">→</span>
          </a>
        ) : (
          <Link href={href} className={ctaClass}>
            {pkg.cta.label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}
