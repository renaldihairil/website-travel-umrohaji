import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { InquiryForm } from "@/components/registration/InquiryForm";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import {
  CONTACT,
  SITE,
  WHATSAPP_DISPLAY,
} from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Nurul Iman Travel & Haji — informasi paket Umroh dan jadwal keberangkatan melalui WhatsApp 087881864680.",
  openGraph: {
    title: "Kontak | Nurul Iman Travel & Haji",
    description:
      "Kami siap membantu Anda mendapatkan informasi paket Umroh dan jadwal keberangkatan.",
  },
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        title="Hubungi Nurul Iman Travel & Haji"
        description="Kami siap membantu Anda mendapatkan informasi paket Umroh dan jadwal keberangkatan."
      />

      <section className="container-site grid gap-8 py-12 lg:grid-cols-2 lg:py-16" aria-label="Informasi kontak">
        {/* Info kontak */}
        <Reveal variant="left">
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Informasi Kontak</h2>
            <span aria-hidden="true" className="gold-line mt-3 block w-20" />

            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-line bg-background p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white">
                <MessageCircle size={22} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-primary-dark">
                  WhatsApp
                </p>
                <p className="text-sm text-muted">{WHATSAPP_DISPLAY}</p>
              </div>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#c68a1e]"
              >
                Chat WhatsApp
              </a>
            </div>

            <div className="mt-4 space-y-4">
              {CONTACT.phone ? (
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white">
                    <Phone size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">
                      Telepon
                    </p>
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted hover:text-primary"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
              ) : null}

              {CONTACT.email ? (
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white">
                    <Mail size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sm text-muted hover:text-primary"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              ) : null}

              {CONTACT.address ? (
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-background p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white">
                    <MapPin size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">
                      Alamat Kantor
                    </p>
                    <p className="text-sm text-muted">{CONTACT.address}</p>
                  </div>
                </div>
              ) : null}
            </div>

            {!CONTACT.phone && !CONTACT.email && !CONTACT.address ? (
              <p className="mt-5 rounded-2xl border border-dashed border-gold/70 bg-gold-soft p-4 text-xs leading-relaxed text-ink/75">
                Telepon, email, alamat kantor, dan peta akan tampil di sini
                setelah data resmi bisnis tersedia. WhatsApp {WHATSAPP_DISPLAY}{" "}
                adalah kanal utama {SITE.legalName}.
              </p>
            ) : null}
          </div>

          <div className="mt-6 card p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Jam Layanan</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Admin WhatsApp siap membantu Anda setiap hari. Pesan di luar jam
              layanan akan dibalas segera pada jam berikutnya.
            </p>
          </div>
        </Reveal>

        {/* Form inquiry */}
        <Reveal variant="right">
          <InquiryForm />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
