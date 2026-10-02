import Link from "next/link";
import { BedDouble, CalendarDays, Check } from "lucide-react";
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

  const ctaClasses = isWhatsappCta
    ? "bg-primary hover:bg-primary-dark"
    : "bg-gold hover:bg-[#c68a1e]";

  return (
    <article className="card group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt={`Visual paket ${pkg.name}`}
          className="h-44 w-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute left-3 top-3">
          <Badge variant={pkg.badgeVariant}>{pkg.badge}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold">{pkg.name}</h3>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={15} aria-hidden="true" />
            {pkg.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble size={15} aria-hidden="true" />
            {pkg.hotel}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-ink/80">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check size={15} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-2xl font-bold text-primary-dark">{pkg.price}</p>

        <Link
          href={href}
          {...(isWhatsappCta
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-colors ${ctaClasses}`}
        >
          {pkg.cta.label} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
