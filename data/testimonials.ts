export type Testimonial = {
  id: string;
  name: string;
  origin: string;
  package: string;
  quote: string;
  placeholder?: boolean;
};

/**
 * PENTING (PRD §11): Jangan membuat testimoni palsu.
 * Daftar berikut adalah STRUKTUR PLACEHOLDER yang harus diganti
 * dengan testimoni asli yang disediakan bisnis sebelum production.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "[Nama Jamaah]",
    origin: "[Kota Asal]",
    package: "Umroh Reguler — 9 Hari",
    quote:
      "[Isi testimoni asli dari jamaah akan ditampilkan di sini — ceritakan kenyamanan perjalanan, pembimbingan, dan pelayanan selama umroh.]",
    placeholder: true,
  },
  {
    id: "t-2",
    name: "[Nama Jamaah]",
    origin: "[Kota Asal]",
    package: "Umroh Plus Turki — 12 Hari",
    quote:
      "[Isi testimoni asli dari jamaah akan ditampilkan di sini — pengalaman selama perjalanan plus ziarah dan wisata religi.]",
    placeholder: true,
  },
  {
    id: "t-3",
    name: "[Nama Jamaah]",
    origin: "[Kota Asal]",
    package: "Umroh VIP — 12 Hari",
    quote:
      "[Isi testimoni asli dari jamaah akan ditampilkan di sini — kesan terhadap fasilitas, hotel, dan layanan prioritas.]",
    placeholder: true,
  },
  {
    id: "t-4",
    name: "[Nama Jamaah]",
    origin: "[Kota Asal]",
    package: "Umroh Reguler — 9 Hari",
    quote:
      "[Isi testimoni asli dari jamaah akan ditampilkan di sini — kesan keluarga terhadap pelayanan dari pendaftaran hingga kepulangan.]",
    placeholder: true,
  },
  {
    id: "t-5",
    name: "[Nama Jamaah]",
    origin: "[Kota Asal]",
    package: "Umroh Private",
    quote:
      "[Isi testimoni asli dari jamaah akan ditampilkan di sini — pengalaman rombongan privat dengan jadwal fleksibel.]",
    placeholder: true,
  },
  {
    id: "t-6",
    name: "[Nama Jamaah]",
    origin: "[Kota Asal]",
    package: "Umroh Reguler — 9 Hari",
    quote:
      "[Isi testimoni asli dari jamaah akan ditampilkan di sini — rekomendasi untuk calon jamaah yang ingin berangkat umroh.]",
    placeholder: true,
  },
];
