import { images } from "@/lib/images";

export type ItineraryDay = {
  day: string;
  title: string;
  detail: string;
};

export type Package = {
  slug: string;
  name: string;
  badge: string;
  badgeVariant: "gold" | "green";
  duration: string;
  route: string;
  hotel: string;
  price: string;
  priceUnit?: string;
  image: string;
  gallery: { src: string; alt: string }[];
  features: string[];
  facilities: string[];
  description: string;
  itinerary: ItineraryDay[];
  hotelFacilities: { name: string; detail: string }[];
  terms: string[];
  cta: { label: string; href?: string; whatsapp?: boolean };
};

const commonFeatures = [
  "Transportasi nyaman",
  "Pembimbing berpengalaman",
  "Ziarah Makkah & Madinah",
];

const commonFacilities = [
  "Hotel bintang 3/4 (Makkah & Madinah)",
  "Transportasi bus AC selama di Saudi",
  "Makan 3x sehari",
  "Pembimbing ibadah berpengalaman",
  "Ziarah Makkah & Madinah",
];

const commonHotelFacilities = [
  {
    name: "Hotel dekat Masjidil Haram",
    detail: "Akses mudah menuju Masjidil Haram di Makkah.",
  },
  {
    name: "Hotel dekat Masjid Nabawi",
    detail: "Akses mudah menuju Masjid Nabawi di Madinah.",
  },
  {
    name: "Kamar keluarga / twin",
    detail: "Pembagian kamar disesuaikan dengan jumlah jamaah.",
  },
  {
    name: "Wi-Fi & fasilitas dasar",
    detail: "Fasilitas kamar dan area umum selama menginap.",
  },
];

/**
 * Placeholder terstruktur — ganti dengan jadwal operasional resmi
 * sebelum production (lihat PRD §13).
 */
const commonItinerary: ItineraryDay[] = [
  {
    day: "Hari 1",
    title: "Keberangkatan",
    detail: "Berkumpul, check-in, dan penerbangan menuju tanah suci.",
  },
  {
    day: "Hari 2",
    title: "Tiba di Tanah Suci",
    detail: "Tiba, check-in hotel, istirahat dan persiapan ibadah.",
  },
  {
    day: "Hari 3",
    title: "Ibadah Umroh",
    detail: "Pelaksanaan umroh pertama bersama pembimbing.",
  },
  {
    day: "Hari 4–7",
    title: "Makkah",
    detail: "Ibadah mandiri, ziarah, dan kegiatan bersama jamaah.",
  },
  { day: "Hari 8", title: "Madinah", detail: "Perjalanan ke Madinah dan ziarah situs bersejarah." },
  { day: "Hari 9", title: "Kepulangan", detail: "Perjalanan pulang ke tanah air." },
];

const commonTerms = [
  "Pendaftaran diikatkan dengan pembayaran tanda jadi.",
  "Paspor minimal berlaku 6 bulan sebelum keberangkatan.",
  "Harga dapat berubah mengikuti tiket dan kebijakan penyelenggara.",
  "Jadwal keberangkatan mengikuti ketersediaan dan konfirmasi resmi.",
  "Dokumen medis diminta apabila diperlukan untuk keberangkatan.",
];

export const PACKAGES: Package[] = [
  {
    slug: "umroh-reguler",
    name: "Umroh Reguler",
    badge: "Paket Reguler",
    badgeVariant: "gold",
    duration: "9 Hari",
    route: "Makkah – Madinah",
    hotel: "Hotel bintang 3/4",
    price: "Rp 24.500.000",
    priceUnit: "/ Orang",
    image: images.kabah,
    gallery: [
      { src: images.kabah, alt: "Ka'bah di Masjidil Haram" },
      { src: images.masjidNabawi, alt: "Masjid Nabawi di Madinah" },
      { src: images.masjidInterior, alt: "Interior area masjid" },
      { src: images.jamaah, alt: "Jamaah dalam perjalanan umroh" },
    ],
    features: commonFeatures,
    facilities: commonFacilities,
    description:
      "Paket Umroh Reguler adalah pilihan terbaik bagi Anda yang ingin menunaikan ibadah umroh dengan harga terjangkau, namun tetap mendapatkan fasilitas dan pelayanan terbaik.",
    itinerary: commonItinerary,
    hotelFacilities: commonHotelFacilities,
    terms: commonTerms,
    cta: { label: "Daftar Sekarang", href: "/pendaftaran" },
  },
  {
    slug: "umroh-plus-turki",
    name: "Umroh Plus Turki",
    badge: "Paket Plus",
    badgeVariant: "green",
    duration: "12 Hari",
    route: "Makkah – Madinah – Turki",
    hotel: "Hotel bintang 3/4",
    price: "Rp 32.500.000",
    priceUnit: "/ Orang",
    image: images.domes,
    gallery: [
      { src: images.domes, alt: "Kubah masjid sebagai visual paket Umroh Plus Turki" },
      { src: images.kabah, alt: "Ka'bah di Masjidil Haram" },
      { src: images.masjidNabawi, alt: "Masjid Nabawi di Madinah" },
      { src: images.keberangkatan, alt: "Visual keberangkatan jamaah" },
    ],
    features: commonFeatures,
    facilities: [
      ...commonFacilities,
      "Tambahan ziarah & wisata Turki (Istanbul)",
    ],
    description:
      "Paket Umroh Plus Turki memadukan ibadah umroh di tanah suci dengan kunjungan ziarah dan wisata religi di Turki, cocok untuk jamaah yang ingin pengalaman lebih lengkap.",
    itinerary: [
      ...commonItinerary.slice(0, 5),
      {
        day: "Hari 8–11",
        title: "Turki",
        detail: "Perjalanan ke Turki: ziarah dan kunjungan bersejarah.",
      },
      {
        day: "Hari 12",
        title: "Kepulangan",
        detail: "Perjalanan pulang ke tanah air.",
      },
    ],
    hotelFacilities: commonHotelFacilities,
    terms: commonTerms,
    cta: { label: "Pilih Paket", href: "/paket-umroh/umroh-plus-turki" },
  },
  {
    slug: "umroh-vip",
    name: "Umroh VIP",
    badge: "Paket VIP",
    badgeVariant: "green",
    duration: "12 Hari",
    route: "Makkah – Madinah",
    hotel: "Hotel bintang 3/4",
    price: "Rp 42.000.000",
    priceUnit: "/ Orang",
    image: images.makkahSkyline,
    gallery: [
      { src: images.makkahSkyline, alt: "Skyline Makkah sebagai visual paket VIP" },
      { src: images.kabah, alt: "Ka'bah di Masjidil Haram" },
      { src: images.masjidNabawi, alt: "Masjid Nabawi di Madinah" },
      { src: images.hotel, alt: "Visual akomodasi hotel jamaah" },
    ],
    features: commonFeatures,
    facilities: [
      ...commonFacilities,
      "Prioritas layanan dan kamar premium",
      "Itinerary ziarah lebih lengkap",
    ],
    description:
      "Paket Umroh VIP menghadirkan kenyamanan ekstra dengan layanan prioritas, kamar premium, dan pendampingan yang lebih personal selama perjalanan.",
    itinerary: [
      ...commonItinerary,
      {
        day: "Tambahan",
        title: "Ziarah & wisata religi",
        detail: "Agenda ziarah tambahan bersama pembimbing.",
      },
    ],
    hotelFacilities: commonHotelFacilities,
    terms: commonTerms,
    cta: { label: "Pilih Paket", href: "/paket-umroh/umroh-vip" },
  },
  {
    slug: "umroh-private",
    name: "Umroh Private",
    badge: "Paket Private",
    badgeVariant: "green",
    duration: "Custom (Fleksibel)",
    route: "Makkah – Madinah",
    hotel: "Hotel bintang 3/4",
    price: "Mulai Rp 55.000.000",
    priceUnit: "/ Orang",
    image: images.courtyard,
    gallery: [
      { src: images.courtyard, alt: "Halaman masjid sebagai visual paket private" },
      { src: images.kabah, alt: "Ka'bah di Masjidil Haram" },
      { src: images.masjidNabawi, alt: "Masjid Nabawi di Madinah" },
      { src: images.pembimbing, alt: "Pembimbing jamaah" },
    ],
    features: commonFeatures,
    facilities: [
      ...commonFacilities,
      "Jadwal keberangkatan fleksibel sesuai permintaan",
      "Private group tanpa digabung jamaah lain",
    ],
    description:
      "Paket Umroh Private dirancang untuk keluarga atau rombongan privat dengan jadwal, kamar, dan layanan yang dapat disesuaikan dengan kebutuhan Anda.",
    itinerary: [
      {
        day: "Hari 1–N",
        title: "Custom sesuai kesepakatan",
        detail: "Jadwal perjalanan disusun bersama sesuai permintaan rombongan.",
      },
    ],
    hotelFacilities: commonHotelFacilities,
    terms: commonTerms,
    cta: { label: "Hubungi Kami", whatsapp: true },
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}
