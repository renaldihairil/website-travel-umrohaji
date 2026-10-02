"use client";

import { useState } from "react";
import { Mail, MessageCircle, User, Users } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const JUMLAH_OPTIONS = [
  "Pilih jumlah jamaah",
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
  const [values, setValues] = useState<FormState>({
    nama: "",
    wa: "",
    email: "",
    jumlah: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function update(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
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

  const fieldClass =
    "w-full rounded-xl border bg-white py-3 pl-12 pr-4 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
      <h2 className="text-xl font-semibold">Data Calon Jamaah</h2>
      <p className="mt-1.5 text-sm text-muted">
        Formulir ini tidak menyimpan data — submit akan membuka WhatsApp dengan
        pesan siap kirim.
      </p>

      <div className="mt-6 space-y-5">
        {/* Nama */}
        <div>
          <label
            htmlFor="reg-nama"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Nama Lengkap <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <User
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              id="reg-nama"
              name="nama"
              type="text"
              required
              autoComplete="name"
              placeholder="Masukkan nama lengkap"
              value={values.nama}
              onChange={(event) => update("nama", event.target.value)}
              aria-invalid={Boolean(errors.nama)}
              aria-describedby={errors.nama ? "reg-nama-error" : undefined}
              className={`${fieldClass} ${errors.nama ? "border-red-400" : "border-line"}`}
            />
          </div>
          {errors.nama ? (
            <p id="reg-nama-error" className="mt-1.5 text-xs text-red-600">
              {errors.nama}
            </p>
          ) : null}
        </div>

        {/* WhatsApp */}
        <div>
          <label
            htmlFor="reg-wa"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Nomor WhatsApp <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <MessageCircle
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              id="reg-wa"
              name="wa"
              type="tel"
              required
              autoComplete="tel"
              placeholder="08xxxxxxxxxx"
              value={values.wa}
              onChange={(event) => update("wa", event.target.value)}
              aria-invalid={Boolean(errors.wa)}
              aria-describedby={errors.wa ? "reg-wa-error" : undefined}
              className={`${fieldClass} ${errors.wa ? "border-red-400" : "border-line"}`}
            />
          </div>
          {errors.wa ? (
            <p id="reg-wa-error" className="mt-1.5 text-xs text-red-600">
              {errors.wa}
            </p>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="reg-email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email <span className="text-muted">(opsional)</span>
          </label>
          <div className="relative">
            <Mail
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              id="reg-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Masukkan email (opsional)"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "reg-email-error" : undefined}
              className={`${fieldClass} ${errors.email ? "border-red-400" : "border-line"}`}
            />
          </div>
          {errors.email ? (
            <p id="reg-email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        {/* Jumlah jamaah */}
        <div>
          <label
            htmlFor="reg-jumlah"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Jumlah Jamaah <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <Users
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <select
              id="reg-jumlah"
              name="jumlah"
              required
              value={values.jumlah}
              onChange={(event) => update("jumlah", event.target.value)}
              aria-invalid={Boolean(errors.jumlah)}
              aria-describedby={errors.jumlah ? "reg-jumlah-error" : undefined}
              className={`${fieldClass} appearance-none ${errors.jumlah ? "border-red-400" : "border-line"}`}
            >
              <option value="">Pilih jumlah jamaah</option>
              {JUMLAH_OPTIONS.slice(1).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {errors.jumlah ? (
            <p id="reg-jumlah-error" className="mt-1.5 text-xs text-red-600">
              {errors.jumlah}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c68a1e]"
      >
        Kirim Pendaftaran
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Data tidak dikirim ke server — pesan dibuka langsung di WhatsApp Anda.
      </p>
    </form>
  );
}
