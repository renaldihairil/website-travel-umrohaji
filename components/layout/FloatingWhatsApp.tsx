import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Nurul Iman"
      className="group fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] lg:bottom-8 lg:right-8"
    >
      {/* Ring efek pulse */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
      />
      <MessageCircle size={26} className="relative" aria-hidden="true" />

      {/* Tooltip desktop */}
      <span className="pointer-events-none absolute right-16 -translate-x-2 whitespace-nowrap rounded-full bg-primary-dark px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 max-lg:hidden">
        Konsultasi via WhatsApp
      </span>
    </a>
  );
}
