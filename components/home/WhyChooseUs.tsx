import { Building2, Clock4, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Izin Resmi Kemenag",
    description: "Terdaftar dan diawasi oleh Kementerian Agama RI untuk keamanan ibadah Anda.",
    color: "from-emerald-500 to-primary",
  },
  {
    icon: Users,
    title: "Pembimbing Profesional",
    description: "Didampingi ustadz berpengalaman dan bersertifikat sepanjang perjalanan.",
    color: "from-primary to-primary-light",
  },
  {
    icon: Building2,
    title: "Fasilitas Lengkap",
    description: "Hotel bintang, transportasi AC, dan konsumsi berkualitas terjamin.",
    color: "from-primary-light to-teal-500",
  },
  {
    icon: Clock4,
    title: "Pelayanan 24 Jam",
    description: "Admin siap membantu kapan saja, dari konsultasi hingga kepulangan.",
    color: "from-gold to-amber-500",
  },
];

export function WhyChooseUs() {
  return (
    <section className="container-site py-16 lg:py-24" aria-labelledby="why-title">
      <Reveal>
        <SectionHeading
          id="why-title"
          eyebrow="Keunggulan Kami"
          title="Mengapa Memilih Kami?"
          description="Empat alasan jamaah mempercayakan perjalanan suci mereka bersama Nurul Iman Travel."
        />
      </Reveal>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description, color }, index) => (
          <Reveal as="li" key={title} delay={index * 100} variant="up">
            <div className="card card-hover group relative h-full overflow-hidden p-6">
              {/* Nomor dekoratif background */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-4 font-display text-8xl font-bold text-line/50 transition-colors duration-500 group-hover:text-gold/10"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-[0_8px_20px_-8px_rgba(6,79,70,0.6)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110`}
                >
                  <Icon size={26} aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold ring-2 ring-white"
                />
              </div>

              {/* Teks */}
              <h3 className="mt-4 text-base font-bold text-primary-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
