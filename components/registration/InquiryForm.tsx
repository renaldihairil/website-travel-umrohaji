"use client";

import { useState } from "react";
import { MessageCircle, User } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

type FormState = { nama: string; wa: string; pesan: string };

export function InquiryForm() {
  const [values, setValues] = useState<FormState>({
    nama: "",
    wa: "",
    pesan: "",
  });
  const [errors, setErrors] = useState<{ nama?: string; wa?: string }>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: { nama?: string; wa?: string } = {};
    if (!values.nama.trim()) nextErrors.nama = "Nama wajib diisi.";
    if (!values.wa.trim()) nextErrors.wa = "Nomor WhatsApp wajib diisi.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      "Assalamu'alaikum, saya ingin mendapatkan informasi paket Umroh Nurul Iman.",
      "",
      `Nama: ${values.nama.trim()}`,
      `Nomor WhatsApp: ${values.wa.trim()}`,
      values.pesan.trim() ? `Pesan: ${values.pesan.trim()}` : "",
      "",
      "Mohon informasi lebih lanjut. Terima kasih.",
    ]
      .filter((line) => line !== "")
      .join("\n");

    openWhatsApp(message);
  }

  const fieldClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
      <h2 className="text-xl font-semibold">Form Inquiry</h2>
      <p className="mt-1.5 text-sm text-muted">
        Pesan akan terbentuk otomatis dan terkirim melalui WhatsApp.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="inq-nama" className="mb-1.5 block text-sm font-medium text-ink">
            Nama Lengkap <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <User
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              id="inq-nama"
              type="text"
              required
              autoComplete="name"
              placeholder="Masukkan nama lengkap"
              value={values.nama}
              onChange={(event) => {
                setValues((c) => ({ ...c, nama: event.target.value }));
                setErrors((c) => ({ ...c, nama: undefined }));
              }}
              aria-invalid={Boolean(errors.nama)}
              aria-describedby={errors.nama ? "inq-nama-error" : undefined}
              className={`${fieldClass} pl-11 ${errors.nama ? "border-red-400" : "border-line"}`}
            />
          </div>
          {errors.nama ? (
            <p id="inq-nama-error" className="mt-1.5 text-xs text-red-600">
              {errors.nama}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="inq-wa" className="mb-1.5 block text-sm font-medium text-ink">
            Nomor WhatsApp <span className="text-gold">*</span>
          </label>
          <input
            id="inq-wa"
            type="tel"
            required
            autoComplete="tel"
            placeholder="08xxxxxxxxxx"
            value={values.wa}
            onChange={(event) => {
              setValues((c) => ({ ...c, wa: event.target.value }));
              setErrors((c) => ({ ...c, wa: undefined }));
            }}
            aria-invalid={Boolean(errors.wa)}
            aria-describedby={errors.wa ? "inq-wa-error" : undefined}
            className={`${fieldClass} ${errors.wa ? "border-red-400" : "border-line"}`}
          />
          {errors.wa ? (
            <p id="inq-wa-error" className="mt-1.5 text-xs text-red-600">
              {errors.wa}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="inq-pesan" className="mb-1.5 block text-sm font-medium text-ink">
            Pesan <span className="text-muted">(opsional)</span>
          </label>
          <textarea
            id="inq-pesan"
            rows={4}
            placeholder="Tanyakan jadwal, harga, atau fasilitas paket..."
            value={values.pesan}
            onChange={(event) =>
              setValues((c) => ({ ...c, pesan: event.target.value }))
            }
            className={`${fieldClass} resize-y border-line`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c68a1e]"
      >
        <MessageCircle size={16} aria-hidden="true" />
        Kirim via WhatsApp
      </button>
    </form>
  );
}
