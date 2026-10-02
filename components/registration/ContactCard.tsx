import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, WHATSAPP_DISPLAY } from "@/config/site";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

export function ContactCard() {
  const hasPhone = Boolean(CONTACT.phone);
  const hasEmail = Boolean(CONTACT.email);
  const hasAddress = Boolean(CONTACT.address);

  return (
    <div className="card relative overflow-hidden p-6 sm:p-8">
      <h2 className="text-xl font-semibold">Hubungi Kami</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Jika ada pertanyaan, silakan hubungi kami melalui kontak berikut.
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-white">
            <MessageCircle size={20} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary-dark">WhatsApp</p>
            <p className="truncate text-sm text-muted">{WHATSAPP_DISPLAY}</p>
          </div>
        </div>

        {hasPhone ? (
          <div className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-white">
              <Phone size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-primary-dark">Telepon</p>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="block truncate text-sm text-muted hover:text-primary"
              >
                {CONTACT.phone}
              </a>
            </div>
          </div>
        ) : null}

        {hasEmail ? (
          <div className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-white">
              <Mail size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-primary-dark">Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block truncate text-sm text-muted hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        ) : null}

        {hasAddress ? (
          <div className="flex items-start gap-4 rounded-2xl border border-line bg-background p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-white">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-primary-dark">Alamat</p>
              <p className="text-sm text-muted">{CONTACT.address}</p>
            </div>
          </div>
        ) : null}
      </div>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c68a1e]"
      >
        <MessageCircle size={16} aria-hidden="true" />
        Chat WhatsApp
      </a>

      <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
        Kami siap membantu Anda mewujudkan perjalanan suci ke Tanah Suci.
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images.domes}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -right-6 w-40 opacity-15"
      />
    </div>
  );
}
