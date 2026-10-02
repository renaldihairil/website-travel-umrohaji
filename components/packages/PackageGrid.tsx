import { PACKAGES } from "@/data/packages";
import { PackageCard } from "./PackageCard";

type PackageGridProps = {
  limit?: number;
};

export function PackageGrid({ limit }: PackageGridProps) {
  const packages = typeof limit === "number" ? PACKAGES.slice(0, limit) : PACKAGES;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {packages.map((pkg) => (
        <PackageCard key={pkg.slug} pkg={pkg} />
      ))}
    </div>
  );
}
