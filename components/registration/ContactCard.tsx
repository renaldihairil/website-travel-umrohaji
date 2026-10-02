import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { CONTACT, WHATSAPP_DISPLAY, SITE } from "@/config/site";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";

export function ContactCard() {
  const hasPhone   = Boolean(CONTACT.phone);
  const hasEmail   = Boolean(CONTACT.email);
  const hasAddress = Boolean(CONTACT.address);

  return (
    <div className="flex flex-col gap-5">
      {/* Card kontak utama */}
      <div className="card relative overflow-hidden p-6">
        {/* Dekorasi foto */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.nabawiSunset}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -right-6 w-44 opacity-10"
        />

        <h2 className="font-display text-xl font-bold text-primary-dark">Hubungi Kami</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          Kami siap membantu Anda memilih paket yang tepat.
        </p>

        <div className="mt-5 space-y-3">
          {/* WhatsApp — selalu tampil */}
          <div className="flex items-center gap-3 rounded-xl border border-line bg-background p-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white">
              <MessageCircle size={18} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-primary-dark">WhatsApp</p>
              <p className="text-sm text-muted">{WHATSAPP_DISPLAY}</p>
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Chat
            </a>
          </div>

          {/* Telepon */}
          {hasPhone ? (
            <div className="flex items-center gap-3 rounded-xl border border-line bg-background p-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white">
                <Phone size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-primary-dark">Telepon</p>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-sm text-muted hover:text-primary">
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          ) : null}

          {/* Email */}
          {hasEmail ? (
            <div className="flex items-center gap-3 rounded-xl border border-line bg-background p-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white">
                <Mail size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-primary-dark">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-muted hover:text-primary">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          ) : null}

          {/* Alamat */}
          {hasAddress ? (
            <div className="flex items-start gap-3 rounded-xl border border-line bg-background p-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-primary-dark">Alamat</p>
                <p className="text-sm text-muted">{CONTACT.address}</p>
              </div>
            </div>
          ) : null}

          {/* Placeholder jika semua kosong */}
          {!hasPhone && !hasEmail && !hasAddress ? (
            <p className="rounded-xl border border-dashed border-gold/60 bg-gold-soft px-4 py-3 text-xs leading-relaxed text-muted">
              Info telepon, email, dan alamat kantor akan ditampilkan setelah data resmi tersedia.
              WhatsApp {WHATSAPP_DISPLAY} adalah kanal utama {SITE.legalName}.
            </p>
          ) : null}
        </div>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-bold text-white transition-colors hover:bg-[#c68a1e]"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Chat WhatsApp Sekarang
        </a>
      </div>

      {/* Jam layanan */}
      <div className="card p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-soft text-gold">
            <Clock size={18} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-primary-dark">Jam Layanan</h3>
            <p className="text-xs text-muted">Setiap hari, termasuk hari libur</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Admin WhatsApp siap membantu Anda setiap hari. Pesan di luar jam
          layanan akan dibalas segera pada jam berikutnya.
        </p>
      </div>
    </div>
  );
}
