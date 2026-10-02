import {
  DEFAULT_WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/config/site";

/**
 * Satu-satunya tempat membangun URL WhatsApp.
 * Jangan menulis nomor WhatsApp di component lain.
 */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Buka WhatsApp dengan pesan tertentu (dipanggil dari client event handler).
 */
export function openWhatsApp(message: string = DEFAULT_WHATSAPP_MESSAGE): void {
  if (typeof window === "undefined") return;
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}
