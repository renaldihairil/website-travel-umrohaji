"use client";

import { useState } from "react";
import { Mail, MessageCircle, User, Users, ChevronDown } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const JUMLAH_OPTIONS = [
  "1 Jamaah",
  "2 Jamaah",
  "3 Jamaah",
  "4 Jamaah",
  "5+ Jamaah",
];

type FormState = {
  nama: string;
  wa: string;
  email: string;
  jumlah: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.nama.trim()) errors.nama = "Nama lengkap wajib diisi.";
  if (!values.wa.trim()) {
    errors.wa = "Nomor WhatsApp wajib diisi.";
  } else if (!/^[0-9+\-\s()]{8,}$/.test(values.wa.trim())) {
    errors.wa = "Masukkan nomor WhatsApp yang valid.";
  }
  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = "Format email tidak valid.";
  }
  if (!values.jumlah) errors.jumlah = "Jumlah jamaah wajib dipilih.";
  return errors;
}

export function RegistrationForm() {
  const [values, setValues] = useState<FormState>({ nama: "", wa: "", email: "", jumlah: "" });
  const [errors, setErrors] = useState<Errors>({});

  function update(field: keyof FormState, value: string) {
    setValues((c) => ({ ...c, [field]: value }));
    setErrors((c) => ({ ...c, [field]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      "Assalamu'alaikum, saya ingin mendaftar/informasi paket Umroh.",
      "",
      `Nama: ${values.nama.trim()}`,
      `Nomor WhatsApp: ${values.wa.trim()}`,
      `Email: ${values.email.trim() || "-"}`,
      `Jumlah Jamaah: ${values.jumlah}`,
      "",
      "Mohon informasi lebih lanjut. Terima kasih.",
    ].join("\n");

    openWhatsApp(message);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
      {/* Header form */}
      <div className="mb-6 border-b border-line pb-5">
        <h2 className="font-display text-xl font-bold text-primary-dark">Data Calon Jamaah</h2>
        <p className="mt-1.5 text-sm text-muted">
          Formulir ini tidak menyimpan data — submit akan membuka WhatsApp dengan pesan siap kirim.
        </p>
      </div>

      <div className="space-y-5">
        {/* Nama */}
        <div>
          <label htmlFor="reg-nama" className="mb-2 block text-sm font-semibold text-ink">
            Nama Lengkap <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <User size={16} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              id="reg-nama"
              name="nama"
              type="text"
              required
              autoComplete="name"
              placeholder="Masukkan nama lengkap sesuai KTP"
              value={values.nama}
              onChange={(e) => update("nama", e.target.value)}
              aria-invalid={Boolean(errors.nama)}
              aria-describedby={errors.nama ? "reg-nama-error" : undefined}
              className={`form-field ${errors.nama ? "error" : ""}`}
            />
          </div>
          {errors.nama ? <p id="reg-nama-error" className="mt-1.5 text-xs text-red-600">{errors.nama}</p> : null}
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="reg-wa" className="mb-2 block text-sm font-semibold text-ink">
            Nomor WhatsApp <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <MessageCircle size={16} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              id="reg-wa"
              name="wa"
              type="tel"
              required
              autoComplete="tel"
              placeholder="08xxxxxxxxxx"
              value={values.wa}
              onChange={(e) => update("wa", e.target.value)}
              aria-invalid={Boolean(errors.wa)}
              aria-describedby={errors.wa ? "reg-wa-error" : undefined}
              className={`form-field ${errors.wa ? "error" : ""}`}
            />
          </div>
          {errors.wa ? <p id="reg-wa-error" className="mt-1.5 text-xs text-red-600">{errors.wa}</p> : null}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="reg-email" className="mb-2 block text-sm font-semibold text-ink">
            Email <span className="text-xs font-normal text-muted">(opsional)</span>
          </label>
          <div className="relative">
            <Mail size={16} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              id="reg-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Masukkan email (opsional)"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "reg-email-error" : undefined}
              className={`form-field ${errors.email ? "error" : ""}`}
            />
          </div>
          {errors.email ? <p id="reg-email-error" className="mt-1.5 text-xs text-red-600">{errors.email}</p> : null}
        </div>

        {/* Jumlah jamaah */}
        <div>
          <label htmlFor="reg-jumlah" className="mb-2 block text-sm font-semibold text-ink">
            Jumlah Jamaah <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <Users size={16} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <ChevronDown size={16} aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
            <select
              id="reg-jumlah"
              name="jumlah"
              required
              value={values.jumlah}
              onChange={(e) => update("jumlah", e.target.value)}
              aria-invalid={Boolean(errors.jumlah)}
              aria-describedby={errors.jumlah ? "reg-jumlah-error" : undefined}
              className={`form-field appearance-none pr-10 ${errors.jumlah ? "error" : ""}`}
            >
              <option value="">Pilih jumlah jamaah</option>
              {JUMLAH_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          {errors.jumlah ? <p id="reg-jumlah-error" className="mt-1.5 text-xs text-red-600">{errors.jumlah}</p> : null}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-shine mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-bold text-white shadow-[0_6px_20px_-6px_rgba(217,154,40,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c68a1e] hover:shadow-[0_10px_24px_-6px_rgba(217,154,40,0.5)]"
      >
        <MessageCircle size={16} aria-hidden="true" />
        Kirim Pendaftaran via WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Data tidak dikirim ke server — pesan dibuka langsung di WhatsApp Anda.
      </p>
    </form>
  );
}
