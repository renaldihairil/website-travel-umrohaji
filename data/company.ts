/**
 * Konten profil perusahaan — mudah diedit dari satu file (PRD §9).
 * Legalitas: hanya tampilkan data resmi yang disediakan bisnis.
 */
export const COMPANY = {
  profile: {
    intro:
      "Nurul Iman Travel & Haji adalah biro perjalanan yang berfokus pada layanan perjalanan umroh dan haji. Kami mendampingi calon jamaah mulai dari konsultasi pendaftaran hingga kepulangan dari tanah suci.",
    focus:
      "Fokus layanan kami adalah paket umroh reguler, umroh plus, umroh VIP, dan umroh private dengan jadwal keberangkatan yang dapat disesuaikan kebutuhan jamaah.",
    values:
      "Nilai pelayanan kami adalah amanah, jelas, dan nyaman — informasi paket, harga, dan fasilitas disampaikan sejak awal agar jamaah dapat mengambil keputusan dengan tenang.",
    commitment:
      "Kami berkomitmen mendampingi setiap jamaah dengan pembimbing ibadah berpengalaman, fasilitas yang terawat, dan respon cepat melalui WhatsApp kapan pun dibutuhkan.",
  },
  visi:
    "Menjadi travel umroh & haji yang dipercaya dan memberangkatkan jamaah dengan pelayanan terbaik. (Ganti dengan visi resmi perusahaan.)",
  misi: [
    "Menyelenggarakan perjalanan umroh & haji yang aman, nyaman, dan sesuai syariat.",
    "Memberikan pelayanan yang jelas, transparan, dan responsif bagi selama calon jamaah.",
    "Menjaga kualitas fasilitas, transportasi, dan akomodasi di setiap keberangkatan.",
    "Mendampingi jamaah dengan pembimbing berpengalaman sebelum, selama, dan sesudah perjalanan.",
  ],
  legalitas: {
    status: "Menunggu dokumen resmi",
    note: "Nomor izin, akreditasi, dan dokumen legalitas akan ditampilkan di sini setelah dokumen resmi dari bisnis diterima. Jangan mengarang nomor izin atau klaim sertifikasi sebelum data tersedia.",
  },
  keunggulan: [
    {
      title: "Pembimbing Berpengalaman",
      description: "Didampingi ustadz yang memandu ibadah selama perjalanan.",
    },
    {
      title: "Fasilitas Nyaman",
      description: "Hotel, transportasi, dan konsumsi yang terawat dan berkualitas.",
    },
    {
      title: "Pelayanan Profesional",
      description: "Konsultasi, pendaftaran, dan pendampingan yang transparan.",
    },
    {
      title: "Pendampingan Jamaah",
      description: "Membantu kebutuhan jamaah selama di tanah air maupun tanah suci.",
    },
  ],
} as const;
