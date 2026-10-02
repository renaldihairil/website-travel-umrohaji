import { Building2, Clock4, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Izin Resmi Kemenag",
    description: "Terdaftar dan diawasi oleh Kementerian Agama RI",
  },
  {
    icon: Users,
    title: "Pembimbing Profesional",
    description: "Didampingi ustadz berpengalaman dan bersertifikat",
  },
  {
    icon: Building2,
    title: "Fasilitas Lengkap",
    description: "Hotel, transportasi, dan konsumsi berkualitas",
  },
  {
    icon: Clock4,
    title: "Pelayanan 24 Jam",
    description: "Siap membantu kapan saja selama perjalanan",
  },
];

export function WhyChooseUs() {
  return (
    <section className="container-site py-16 lg:py-24" aria-labelledby="why-title">
      <SectionHeading title="Mengapa Memilih Kami?" />
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <span id="why-title" className="sr-only">
        Keunggulan Nurul Iman Travel
      </span>
    </section>
  );
}
