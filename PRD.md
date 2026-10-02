# PRD — Website Nurul Iman Travel & Haji

## 1. Ringkasan Proyek

Membangun website statis untuk **Nurul Iman Travel & Haji** berdasarkan desain referensi yang diberikan.

Empat screenshot/desain yang diberikan merupakan **contoh desain dan referensi UI**, bukan batas jumlah halaman website. Website production mengikuti struktur navigasi utama: **Beranda, Paket Umroh, Tentang Kami, Galeri, Testimoni, dan Kontak**. Tidak membutuhkan backend, database, authentication, CMS, payment gateway, atau dashboard admin.

Seluruh CTA utama diarahkan ke **WhatsApp: 087881864680**.

Website akan:
- Dibangun sebagai static website modern dan responsive.
- Mengikuti visual desain referensi sedekat mungkin.
- Memiliki jumlah halaman sesuai desain: **4 halaman**.
- Di-host/deploy melalui **Vercel**.
- Source code disimpan di **GitHub**.
- Domain custom dapat disambungkan melalui konfigurasi Vercel.
- Semua inquiry/pendaftaran diarahkan ke WhatsApp.

---

## 2. Tujuan

### Tujuan utama
Membuat website travel Umroh yang:
1. Menampilkan identitas Nurul Iman Travel & Haji.
2. Menjelaskan keunggulan layanan.
3. Menampilkan pilihan paket Umroh.
4. Memberikan detail paket.
5. Memudahkan calon jamaah menghubungi admin melalui WhatsApp.
6. Terlihat profesional, terpercaya, bersih, dan nyaman digunakan di mobile maupun desktop.

### Non-goals

Tidak termasuk dalam versi awal:
- Login/register akun pengguna.
- Dashboard admin.
- Database jamaah.
- Pembayaran online.
- Booking engine.
- Payment gateway.
- API backend.
- CRM.
- CMS.
- Pengelolaan paket melalui database.
- Email automation.
- Sistem notifikasi internal.

---

# 3. Scope Halaman

Desain referensi yang diberikan terdiri dari beberapa contoh tampilan: beranda, listing paket, detail paket, dan pendaftaran. **Contoh desain tersebut tidak berarti website hanya memiliki 4 halaman.** Implementasi production mengikuti kebutuhan navigasi utama.

## 3.1 Enam Halaman Utama

| # | Halaman | Route | Fungsi |
|---|---|---|---|
| 1 | Beranda | `/` | Landing page utama dan pengenalan Nurul Iman |
| 2 | Paket Umroh | `/paket-umroh` | Katalog seluruh paket Umroh |
| 3 | Tentang Kami | `/tentang-kami` | Profil, legalitas, visi-misi, dan keunggulan perusahaan |
| 4 | Galeri | `/galeri` | Dokumentasi kegiatan dan perjalanan Umroh |
| 5 | Testimoni | `/testimoni` | Pengalaman dan testimoni jamaah |
| 6 | Kontak | `/kontak` | Informasi kontak dan CTA WhatsApp |

Keenam halaman tersebut merupakan **halaman utama** dan wajib muncul pada navigasi header/footer.

## 3.2 Supporting Routes

Selain 6 halaman utama, terdapat dua route pendukung yang dapat digunakan untuk alur katalog dan pendaftaran:

| Route | Status | Fungsi |
|---|---|---|
| `/paket-umroh/[slug]` | Pendukung | Detail masing-masing paket Umroh |
| `/pendaftaran` | Pendukung | Form inquiry/pendaftaran yang diarahkan ke WhatsApp |

Route pendukung bukan menu utama, tetapi diperlukan karena desain referensi juga memperlihatkan halaman detail paket dan halaman pendaftaran.

### Prinsip scope

- **Jumlah halaman utama = 6.**
- Screenshot yang diberikan adalah **referensi desain**, bukan jumlah halaman final.
- Detail paket dan pendaftaran adalah supporting flow.
- Tidak perlu membuat halaman utama lain di luar scope tanpa kebutuhan bisnis baru.
- Struktur paket harus reusable agar paket baru dapat ditambahkan tanpa membuat ulang UI.

## 3.3 Navigasi Utama

Header:
- Beranda
- Paket Umroh
- Tentang Kami
- Galeri
- Testimoni
- Kontak
- CTA `Daftar Sekarang`

Footer menggunakan navigasi yang sama.

---

# 4. Target User

Target utama:
- Calon jamaah Umroh.
- Keluarga yang mencari paket Umroh.
- Orang yang membutuhkan informasi harga dan fasilitas Umroh.
- Pengunjung yang ingin langsung berkonsultasi melalui WhatsApp.

Karakteristik kebutuhan:
- Informasi mudah dipahami.
- Harga terlihat jelas.
- Fasilitas mudah dibandingkan.
- CTA WhatsApp mudah ditemukan.
- Tampilan terpercaya dan tidak terlalu ramai.
- Mobile friendly.

---

# 5. Identitas Brand & Visual

## Brand

**Nama:** Nurul Iman
**Sub-brand:** Travel Umroh & Haji

Gunakan logo pada desain referensi apabila asset tersedia.

## Gaya visual

- Premium tetapi sederhana.
- Islami tanpa berlebihan.
- Modern.
- Clean.
- Banyak whitespace.
- Rounded cards.
- Soft shadow.
- Foto Masjidil Haram / Ka'bah / Madinah sebagai visual utama.
- Warna dominan hijau tua, putih, dan gold.

## Warna referensi

Gunakan CSS variables agar mudah diganti:

```css
--primary: #064f46;
--primary-dark: #043c36;
--gold: #d99a28;
--gold-light: #f2c96b;
--background: #f7f8f5;
--white: #ffffff;
--text: #123c38;
--muted: #687774;
--border: #e5e9e6;
```

Warna tidak harus identik secara pixel dengan screenshot, tetapi hierarchy visual harus mengikuti desain.

## Typography

Gunakan kombinasi:
- Serif elegan untuk heading utama.
- Sans-serif modern untuk body, navigasi, label, dan UI.

Rekomendasi:
- Heading: `Playfair Display` atau serif setara.
- Body/UI: `Inter`, `Poppins`, atau sans-serif setara.

Jika menggunakan Google Fonts, lakukan loading dengan cara yang tidak menghambat rendering.

---

# 6. Header / Navigation

Header digunakan konsisten pada seluruh halaman.

Elemen:
1. Logo Nurul Iman.
2. Navigasi:
   - Beranda
   - Paket Umroh
   - Tentang Kami
   - Galeri
   - Testimoni
   - Kontak
3. Search icon sederhana.
4. CTA button:
   - **Daftar Sekarang**

### Perilaku

- Header desktop mengikuti desain referensi.
- Mobile menggunakan hamburger menu.
- Header sticky diperbolehkan.
- Navigasi aktif diberi indikator warna gold.
- CTA `Daftar Sekarang` mengarah ke `/pendaftaran`.
- Jika CTA WhatsApp digunakan, buka WhatsApp dengan nomor `087881864680`.

Nomor WhatsApp harus dinormalisasi untuk URL menjadi:

`6287881864680`

Contoh URL:

`https://wa.me/6287881864680`

---

# 7. Halaman 1 — Beranda

Route:

`/`

## Hero

Hero mengikuti screenshot pertama.

Konten:

### Eyebrow
`Bersama Kami Menuju Rumah Allah`

### Heading
`Umroh Nyaman, Berkah Sepanjang Masa`

### Description

Gunakan copy yang sejalan dengan desain:

`Wujudkan impian suci Anda bersama Nurul Iman Travel. Dengan layanan profesional, fasilitas terbaik, dan pembimbing berpengalaman, perjalanan umroh Anda akan lebih tenang dan bermakna.`

### Highlight benefits

Tampilkan 4 item:
- Pembimbing Berpengalaman
- Fasilitas Nyaman
- Harga Terjangkau
- Berizin Resmi Kemenag

### CTA

Primary:
`Lihat Paket Umroh →`

Action:
`/paket-umroh`

Secondary CTA opsional:
`Konsultasi via WhatsApp`

Action:
WhatsApp `6287881864680`

## Hero image

Gunakan foto Ka'bah / Masjidil Haram dengan overlay gradient hijau gelap pada sisi teks.

Aspect ratio harus menjaga komposisi desain referensi.

---

## Section: Mengapa Memilih Kami?

Judul:

`Mengapa Memilih Kami?`

Tampilkan 4 feature:

### 1. Izin Resmi Kemenag
`Terdaftar dan diawasi oleh Kementerian Agama RI`

### 2. Pembimbing Profesional
`Didampingi ustadz berpengalaman dan bersertifikat`

### 3. Fasilitas Lengkap
`Hotel, transportasi, dan konsumsi berkualitas`

### 4. Pelayanan 24 Jam
`Siap membantu kapan saja selama perjalanan`

Gunakan icon sederhana berbentuk lingkaran.

---

# 8. Halaman 2 — Paket Umroh

Route:

`/paket-umroh`

## Hero / Intro

Eyebrow:

`PAKET UMROH`

Heading:

`Pilihan Paket Umroh Terbaik Sesuai Kebutuhan Anda`

Description:

`Kami menyediakan berbagai pilihan paket umroh dengan fasilitas lengkap, harga kompetitif, dan jadwal keberangkatan yang fleksibel.`

Di sisi kanan dapat menggunakan image Masjid Nabawi / ilustrasi masjid seperti referensi.

Tambahkan quote dekoratif:

`"Jadikan setiap langkah sebagai doa, setiap doa sebagai harapan."`

---

## Package Grid

Tampilkan 4 kartu seperti desain.

### Package 1 — Umroh Reguler

Badge:
`Paket Reguler`

Durasi:
`9 Hari`

Hotel:
`Hotel bintang 3/4`

Fasilitas:
- Transportasi nyaman
- Pembimbing berpengalaman
- Ziarah Makkah & Madinah

Harga:

`Rp 24.500.000`

CTA:

`Pilih Paket →`

Link:

`/paket-umroh/umroh-reguler`

### Package 2 — Umroh Plus Turki

Badge:
`Paket Plus`

Durasi:
`12 Hari`

Hotel:
`Hotel bintang 3/4`

Fasilitas:
- Transportasi nyaman
- Pembimbing berpengalaman
- Ziarah Makkah & Madinah

Harga:

`Rp 32.500.000`

CTA:
`Pilih Paket →`

Untuk versi statis, detail tambahan dapat diarahkan ke WhatsApp atau route detail yang dapat ditambahkan kemudian.

### Package 3 — Umroh VIP

Badge:
`Paket VIP`

Durasi:
`12 Hari`

Hotel:
`Hotel bintang 3/4`

Fasilitas:
- Transportasi nyaman
- Pembimbing berpengalaman
- Ziarah Makkah & Madinah

Harga:

`Rp 42.000.000`

CTA:
`Pilih Paket →`

### Package 4 — Umroh Private

Badge:
`Paket Private`

Durasi:
`Custom (Fleksibel)`

Hotel:
`Hotel bintang 3/4`

Fasilitas:
- Transportasi nyaman
- Pembimbing berpengalaman
- Ziarah Makkah & Madinah

Harga:

`Mulai Rp 55.000.000`

CTA:
`Hubungi Kami →`

Action:
WhatsApp.

---

# 9. Halaman 3 — Tentang Kami

Route:

`/tentang-kami`

## Hero

Heading:

`Tentang Nurul Iman Travel & Haji`

Description menjelaskan profil perusahaan, fokus layanan Umroh & Haji, serta komitmen terhadap kenyamanan jamaah.

## Profil Perusahaan

Tampilkan:
- Profil singkat.
- Fokus layanan.
- Nilai pelayanan.
- Komitmen kepada jamaah.

## Visi & Misi

Sediakan section Visi dan Misi yang kontennya mudah diedit.

## Legalitas & Kepercayaan

Tampilkan informasi legalitas/perizinan hanya berdasarkan data resmi yang diberikan.

**Jangan mengarang nomor izin, status legalitas, atau klaim sertifikasi.** Jika data belum tersedia, gunakan placeholder yang jelas untuk diganti sebelum production.

## Keunggulan

Gunakan feature cards:
- Pembimbing berpengalaman.
- Fasilitas nyaman.
- Pelayanan profesional.
- Pendampingan jamaah.

CTA:
`Konsultasi via WhatsApp`

---

# 10. Halaman 4 — Galeri

Route:

`/galeri`

## Hero

Heading:

`Galeri Perjalanan Bersama Kami`

Description singkat tentang dokumentasi perjalanan dan kegiatan jamaah.

## Gallery Grid

Tampilkan grid foto responsive.

Kategori opsional:
- Makkah
- Madinah
- Kegiatan Jamaah
- Keberangkatan
- Pembimbing
- Fasilitas

Filter kategori dapat dibuat client-side tanpa backend.

## Image Viewer

Saat foto diklik:
- Buka lightbox/modal.
- Tampilkan gambar lebih besar.
- Tombol close.
- Escape untuk menutup.
- Nyaman digunakan di mobile.

Semua gambar memiliki `alt` text.

---

# 11. Halaman 5 — Testimoni

Route:

`/testimoni`

## Hero

Heading:

`Cerita Jamaah Nurul Iman`

Description singkat tentang pengalaman jamaah.

## Testimonial Cards

Setiap card dapat berisi:
- Nama jamaah.
- Kota/asal daerah jika memang boleh dipublikasikan.
- Paket/perjalanan jika relevan.
- Isi testimoni.
- Foto jamaah hanya jika memiliki izin penggunaan.

## Trust Section

Tampilkan keunggulan pelayanan atau data bisnis yang faktual.

**Jangan membuat testimoni palsu.** Seluruh testimoni harus berasal dari data yang benar-benar disediakan oleh bisnis.

CTA:
`Konsultasi via WhatsApp`

---

# 12. Halaman 6 — Kontak

Route:

`/kontak`

## Hero

Heading:

`Hubungi Nurul Iman Travel & Haji`

Description:

`Kami siap membantu Anda mendapatkan informasi paket Umroh dan jadwal keberangkatan.`

## Contact Information

### WhatsApp

`087881864680`

CTA:
`Chat WhatsApp`

Target:
`https://wa.me/6287881864680`

### Telepon

Nomor hanya ditampilkan jika nomor resmi tersedia.

### Email

Email hanya ditampilkan jika email resmi tersedia.

### Alamat

Alamat kantor hanya ditampilkan berdasarkan data bisnis yang diberikan.

## Contact CTA

`Konsultasi via WhatsApp`

Default message:

`Assalamu'alaikum, saya ingin mendapatkan informasi paket Umroh Nurul Iman.`

## Map

Google Maps embed bersifat opsional dan dapat ditambahkan setelah alamat kantor final tersedia.

## Form Inquiry

Boleh menggunakan form sederhana seperti desain pendaftaran, tetapi submit harus langsung menghasilkan pesan WhatsApp tanpa backend.

---

# 13. Supporting Page — Detail Umroh Reguler

Route:

`/paket-umroh/umroh-reguler`

Mengikuti screenshot ketiga.

## Breadcrumb

`Beranda > Paket Umroh > Umroh Reguler`

## Layout utama

Desktop:
- Kolom kiri: gallery.
- Kolom kanan: informasi paket.

Mobile:
- Gallery di atas.
- Informasi paket di bawah.

## Gallery

Tampilkan:
- 1 gambar utama Ka'bah.
- Thumbnail beberapa foto:
  - Ka'bah.
  - Masjid Nabawi.
  - Interior/area masjid.
  - Jamaah/area hotel atau visual perjalanan.

Jika asset final belum tersedia, gunakan placeholder image yang sesuai tema.

## Informasi

Badge:

`Paket Reguler`

Heading:

`Umroh Reguler`

Meta:
- `9 Hari`
- `Makkah – Madinah`

Harga:

`Rp 24.500.000 / Orang`

CTA primary:

`Daftar Sekarang →`

Action:
`/pendaftaran`

CTA secondary:

`Tanya Paket`

Action:
WhatsApp.

---

## Fasilitas yang Didapatkan

List:

- Hotel bintang 3/4 (Makkah & Madinah)
- Transportasi bus AC selama di Saudi
- Makan 3x sehari
- Pembimbing ibadah berpengalaman
- Ziarah Makkah & Madinah

---

## Tab / Content Navigation

Gunakan tab sederhana:

1. Deskripsi Paket
2. Jadwal Perjalanan
3. Fasilitas Hotel
4. Ketentuan

Untuk versi statis, tab dapat bekerja dengan JavaScript/client-side state.

### Deskripsi Paket

Contoh:

`Paket Umroh Reguler adalah pilihan terbaik bagi Anda yang ingin menunaikan ibadah umroh dengan harga terjangkau, namun tetap mendapatkan fasilitas dan pelayanan terbaik.`

### Jadwal Perjalanan

Minimal sediakan struktur informasi placeholder yang mudah diedit:

- Hari 1 — Keberangkatan
- Hari 2 — Tiba di Tanah Suci
- Hari 3 — Ibadah Umroh
- Hari 4–7 — Makkah
- Hari 8 — Madinah
- Hari 9 — Kepulangan

> Jadwal di atas adalah struktur konten awal untuk implementasi UI dan harus dapat diganti dengan jadwal operasional yang sebenarnya.

### Fasilitas Hotel

Tampilkan informasi hotel sebagai list/card.

### Ketentuan

Tampilkan placeholder ketentuan pendaftaran yang dapat diedit tanpa mengubah struktur halaman.

---

# 14. Supporting Page — Pendaftaran Umroh

Route:

`/pendaftaran`

Mengikuti screenshot keempat.

## Hero

Background image Ka'bah / Masjidil Haram.

Overlay hijau.

Heading:

`Pendaftaran Umroh`

Description:

`Isi formulir di bawah ini untuk mendapatkan informasi paket, serta jadwal keberangkatan terbaru dari kami.`

---

## Form

Card:

`Data Calon Jamaah`

Field:

### Nama Lengkap *
Type:
text

Placeholder:
`Masukkan nama lengkap`

### Nomor WhatsApp *
Type:
tel

Placeholder:
`08xxxxxxxxxx`

### Email
Type:
email

Placeholder:
`Masukkan email (opsional)`

### Jumlah Jamaah *
Type:
select

Options:
- Pilih jumlah jamaah
- 1 Jamaah
- 2 Jamaah
- 3 Jamaah
- 4 Jamaah
- 5+ Jamaah

### Submit

Button:

`Kirim Pendaftaran`

---

# 15. Perilaku Form Pendaftaran

Karena website **statis tanpa backend**, form tidak dikirim ke server.

Saat submit:
1. Validasi field wajib.
2. Ambil data form.
3. Generate pesan WhatsApp.
4. Buka WhatsApp.

Contoh pesan:

`Assalamu'alaikum, saya ingin mendaftar/informasi paket Umroh.

Nama: [nama]
Nomor WhatsApp: [nomor]
Email: [email]
Jumlah Jamaah: [jumlah]

Mohon informasi lebih lanjut. Terima kasih.`

Target:

`https://wa.me/6287881864680?text=...`

Gunakan `encodeURIComponent()` untuk message.

Jika user mengklik CTA WhatsApp dari halaman lain, gunakan pesan default:

`Assalamu'alaikum, saya ingin mendapatkan informasi paket Umroh Nurul Iman.`

---

# 16. Contact Card

Di sebelah kanan form pada desktop.

Judul:

`Hubungi Kami`

Copy:

`Jika ada pertanyaan, silakan hubungi kami melalui kontak berikut.`

Kontak utama:

### WhatsApp
`087881864680`

CTA:
`Chat WhatsApp`

### Telepon
Nomor dapat dibuat configurable di satu file constants/config.

### Email
Email dapat dibuat configurable.

> Karena kebutuhan utama saat ini adalah WhatsApp, nomor WhatsApp `087881864680` harus menjadi source of truth untuk seluruh CTA kontak.

---

# 17. Footer

Footer harus konsisten di semua halaman.

Isi minimal:

- Logo Nurul Iman.
- Deskripsi singkat.
- Navigasi.
- Kontak.
- WhatsApp.
- Copyright.

Contoh:

`© 2026 Nurul Iman Travel & Haji. All rights reserved.`

---

# 18. Responsive Design

Website wajib responsive.

## Desktop

Breakpoint target:
- `>= 1024px`

Karakter:
- Max content width sekitar `1200–1280px`.
- Package cards 4 kolom.
- Detail page 2 kolom.
- Registration page 2 kolom.
- Hero menggunakan layout horizontal.

## Tablet

Breakpoint:
- `768px–1023px`

Perubahan:
- Package cards 2 kolom.
- Detail page dapat menjadi 1 kolom.
- Form registration mulai stacked.

## Mobile

Breakpoint:
- `< 768px`

Perubahan:
- Hamburger navigation.
- Hero menjadi vertical.
- Package cards 1 kolom.
- Form 1 kolom.
- CTA full-width bila diperlukan.
- Typography diperkecil secara proporsional.
- Gallery thumbnail dapat horizontal-scroll.
- Tidak boleh ada horizontal overflow.

---

# 19. UX Requirements

## CTA

CTA utama harus mudah terlihat:
- Lihat Paket Umroh
- Daftar Sekarang
- Pilih Paket
- Tanya Paket
- Hubungi Kami
- Chat WhatsApp

Semua inquiry CTA mengarah ke WhatsApp atau halaman pendaftaran.

## WhatsApp

Gunakan satu utility function:

```ts
openWhatsApp(message?: string)
```

Nomor:

```ts
6287881864680
```

Jangan menulis nomor WhatsApp berbeda di banyak component.

---

# 20. Accessibility

Wajib:
- Semantic HTML.
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Semua image memiliki `alt`.
- Button dapat digunakan keyboard.
- Focus state terlihat.
- Kontras teks mencukupi.
- Form memiliki `<label>`.
- Input wajib menggunakan `required`.
- Icon-only button memiliki `aria-label`.
- Hamburger menu memiliki state accessibility.

---

# 21. SEO

Setiap halaman utama memiliki title dan meta description yang relevan.

### Beranda
Title:
`Nurul Iman Travel & Haji | Umroh Nyaman, Berkah Sepanjang Masa`

Description:
`Nurul Iman Travel & Haji menyediakan paket Umroh dengan fasilitas lengkap, pembimbing berpengalaman, dan layanan profesional.`

### Paket Umroh
Title:
`Paket Umroh | Nurul Iman Travel & Haji`

### Tentang Kami
Title:
`Tentang Kami | Nurul Iman Travel & Haji`

### Galeri
Title:
`Galeri | Nurul Iman Travel & Haji`

### Testimoni
Title:
`Testimoni Jamaah | Nurul Iman Travel & Haji`

### Kontak
Title:
`Kontak | Nurul Iman Travel & Haji`

### Supporting routes
Detail paket:
`Umroh Reguler | Nurul Iman Travel & Haji`

Pendaftaran:
`Pendaftaran Umroh | Nurul Iman Travel & Haji`

Tambahkan:
- Open Graph metadata.
- Favicon.
- Canonical URL setelah domain final ditentukan.
- `robots.txt`.
- `sitemap.xml` untuk production.

---

# 22. Recommended Tech Stack

Website static modern direkomendasikan menggunakan:

- **Next.js**
- TypeScript
- Tailwind CSS
- Lucide React / icon library ringan
- Vercel

Alasan:
- Cocok untuk static deployment.
- Routing mudah.
- SEO mudah.
- Responsive UI mudah dibuat.
- Sangat cocok dengan Vercel.
- Dapat dikembangkan menjadi dynamic website di masa depan tanpa rewrite besar.

Alternatif jika ingin benar-benar minimal:
- Vite
- React
- TypeScript
- Tailwind CSS

Prioritas: pilih stack yang paling sederhana dan maintainable untuk website statis.

---

# 23. Struktur Project yang Direkomendasikan

Contoh jika menggunakan Next.js App Router:

```text
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── paket-umroh/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── tentang-kami/
│   │   └── page.tsx
│   ├── galeri/
│   │   └── page.tsx
│   ├── testimoni/
│   │   └── page.tsx
│   ├── kontak/
│   │   └── page.tsx
│   └── pendaftaran/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   └── WhyChooseUs.tsx
│   ├── packages/
│   │   ├── PackageCard.tsx
│   │   ├── PackageGrid.tsx
│   │   ├── PackageGallery.tsx
│   │   └── PackageTabs.tsx
│   ├── registration/
│   │   ├── RegistrationForm.tsx
│   │   └── ContactCard.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── Icon.tsx
│
├── data/
│   └── packages.ts
│
├── lib/
│   └── whatsapp.ts
│
├── public/
│   ├── images/
│   ├── logo/
│   └── icons/
│
├── styles/
│
├── .gitignore
├── package.json
├── README.md
└── PRD.md
```

---

# 24. Content Data Architecture

Package jangan hard-code berulang kali di banyak component.

Gunakan data object:

```ts
type Package = {
  slug: string;
  name: string;
  badge: string;
  duration: string;
  hotel: string;
  price: string;
  image: string;
  features: string[];
};
```

Data awal:

```ts
[
  {
    slug: "umroh-reguler",
    name: "Umroh Reguler",
    badge: "Paket Reguler",
    duration: "9 Hari",
    hotel: "Hotel bintang 3/4",
    price: "Rp 24.500.000",
  },
  {
    slug: "umroh-plus-turki",
    name: "Umroh Plus Turki",
    badge: "Paket Plus",
    duration: "12 Hari",
    hotel: "Hotel bintang 3/4",
    price: "Rp 32.500.000",
  },
  {
    slug: "umroh-vip",
    name: "Umroh VIP",
    badge: "Paket VIP",
    duration: "12 Hari",
    hotel: "Hotel bintang 3/4",
    price: "Rp 42.000.000",
  },
  {
    slug: "umroh-private",
    name: "Umroh Private",
    badge: "Paket Private",
    duration: "Custom (Fleksibel)",
    hotel: "Hotel bintang 3/4",
    price: "Mulai Rp 55.000.000",
  }
]
```

---

# 25. Image & Asset Requirements

Gunakan asset yang mendekati screenshot:

1. Hero Ka'bah / Masjidil Haram.
2. Masjid Nabawi.
3. Makkah skyline.
4. Foto perjalanan/masjid untuk gallery.
5. Logo Nurul Iman.

Asset harus:
- High resolution.
- Web optimized.
- `WebP` atau `AVIF` bila memungkinkan.
- Tidak menggunakan gambar ber-watermark.
- Memiliki lisensi yang sesuai untuk website.

Jika asset final belum tersedia, gunakan placeholder yang mudah diganti.

Semua path image harus centralized agar mudah diganti.

---

# 26. Visual Fidelity

Implementasi harus mengikuti screenshot referensi terutama pada:

- Proporsi layout.
- Spacing.
- Ukuran container.
- Border radius.
- Shadow.
- Typography hierarchy.
- Warna.
- Positioning CTA.
- Card design.
- Header.
- Hero composition.
- Package cards.
- Registration form.
- Contact card.

Target bukan sekadar membuat website dengan konten yang sama, tetapi membuat **UI yang secara visual terasa seperti desain referensi**.

---

# 27. Static Website Constraint

Website tidak membutuhkan backend.

Data:
- package data → local TypeScript/JSON.
- contact data → local config.
- form → client-side only.
- inquiry → WhatsApp.

Tidak boleh ada:
- API route untuk form.
- database.
- server-side form processing.
- authentication.
- external CRM.

---

# 28. GitHub Workflow

Repository:

`nurul-iman-travel`

Branch utama:

`main`

Workflow:

```bash
git init
git add .
git commit -m "feat: initial Nurul Iman travel website"
git branch -M main
git remote add origin <GITHUB_REPOSITORY_URL>
git push -u origin main
```

Setiap perubahan berikutnya:

```bash
git add .
git commit -m "feat: ..."
git push
```

Jangan commit:
- `.env`
- credentials
- private keys
- API keys
- `node_modules`
- build output yang tidak diperlukan

---

# 29. Vercel Deployment

Website di-deploy ke Vercel dari repository GitHub.

Flow:

```text
Local Development
       ↓
     Git
       ↓
    GitHub
       ↓
    Vercel
       ↓
 Production Website
```

## Setup

1. Push repository ke GitHub.
2. Login ke Vercel.
3. Import GitHub repository.
4. Vercel mendeteksi framework.
5. Set production branch ke `main`.
6. Deploy.
7. Test seluruh route.
8. Sambungkan custom domain.

Setelah GitHub terhubung, setiap push ke `main` akan membuat deployment baru secara otomatis.

---

# 30. Custom Domain

Domain production akan diarahkan ke Vercel.

Checklist:
- Tambahkan domain di Vercel.
- Ikuti DNS record yang diberikan Vercel.
- Aktifkan HTTPS.
- Set domain utama.
- Redirect domain alternatif jika diperlukan.
- Update canonical URL dan Open Graph URL.
- Test `www` dan non-`www` sesuai konfigurasi.

Domain belum ditentukan dalam PRD ini sehingga jangan hard-code domain tertentu.

---

# 31. Performance Requirements

Target:
- Lighthouse Performance: `>= 90` bila asset memungkinkan.
- Tidak menggunakan video background besar.
- Optimasi image.
- Lazy-load image di bawah fold.
- Hindari library besar jika tidak diperlukan.
- Hindari JavaScript client-side berlebihan.
- Gunakan responsive image.
- Gunakan font loading yang efisien.

---

# 32. Functional Acceptance Criteria

## Navigation
- [ ] Semua menu utama dapat diklik.
- [ ] Beranda menuju `/`.
- [ ] Paket Umroh menuju `/paket-umroh`.
- [ ] Tentang Kami menuju `/tentang-kami`.
- [ ] Galeri menuju `/galeri`.
- [ ] Testimoni menuju `/testimoni`.
- [ ] Kontak menuju `/kontak`.
- [ ] Daftar Sekarang menuju `/pendaftaran`.
- [ ] Paket Reguler menuju detail Umroh Reguler.
- [ ] Mobile navigation berfungsi.

## WhatsApp
- [ ] Semua CTA WhatsApp menuju nomor `087881864680`.
- [ ] URL menggunakan format `6287881864680`.
- [ ] Pesan WhatsApp ter-encode dengan benar.
- [ ] Tidak ada nomor WhatsApp lain yang digunakan.

## Package
- [ ] Empat package card tampil.
- [ ] Harga sesuai data PRD.
- [ ] Informasi durasi tampil.
- [ ] Fasilitas tampil.
- [ ] CTA bekerja.

## Detail
- [ ] Gallery tampil.
- [ ] Harga tampil.
- [ ] Fasilitas tampil.
- [ ] Tab dapat berpindah.
- [ ] CTA Daftar Sekarang menuju `/pendaftaran`.
- [ ] CTA Tanya Paket membuka WhatsApp.

## Registration
- [ ] Form memiliki validasi.
- [ ] Nama wajib.
- [ ] Nomor WhatsApp wajib.
- [ ] Jumlah jamaah wajib.
- [ ] Email opsional.
- [ ] Submit menghasilkan pesan WhatsApp.
- [ ] Tidak ada data dikirim ke backend.

## Responsive
- [ ] Desktop sesuai desain.
- [ ] Tablet tidak rusak.
- [ ] Mobile tidak horizontal overflow.
- [ ] CTA mudah digunakan di mobile.
- [ ] Form nyaman digunakan dengan touch.

---

# 33. Visual Acceptance Criteria

Website dianggap selesai jika:

- Header konsisten di seluruh halaman.
- Hero section memiliki hierarchy seperti desain.
- Warna hijau + gold menjadi visual identity utama.
- Package cards memiliki struktur visual yang sama dengan referensi.
- Detail page memiliki gallery kiri dan informasi kanan pada desktop.
- Registration page memiliki form kiri dan contact card kanan pada desktop.
- Mobile layout tetap rapi.
- Tidak ada placeholder text yang tertinggal pada production.
- Tidak ada broken image.
- Tidak ada console error.

---

# 34. Testing Checklist

Sebelum production:

### Browser
- [ ] Chrome
- [ ] Edge
- [ ] Safari
- [ ] Firefox

### Device
- [ ] Desktop 1440px
- [ ] Laptop 1280px
- [ ] Tablet
- [ ] Mobile 390px
- [ ] Mobile 430px

### Function
- [ ] Semua link.
- [ ] Semua button.
- [ ] WhatsApp.
- [ ] Form validation.
- [ ] Mobile menu.
- [ ] Package tabs.
- [ ] Image gallery.

### SEO
- [ ] Title.
- [ ] Description.
- [ ] Favicon.
- [ ] Open Graph.
- [ ] robots.txt.
- [ ] sitemap.xml.

### Deployment
- [ ] GitHub push berhasil.
- [ ] Vercel build berhasil.
- [ ] Production URL aktif.
- [ ] Custom domain aktif.
- [ ] HTTPS aktif.

---

# 35. Definition of Done

Project dianggap selesai apabila:

1. Keenam halaman utama telah dibuat: Beranda, Paket Umroh, Tentang Kami, Galeri, Testimoni, dan Kontak.
2. Supporting route detail paket dan pendaftaran telah dibuat sesuai kebutuhan flow.
3. UI mengikuti desain referensi sebagai acuan visual.
4. Semua halaman responsive.
4. Semua CTA inquiry terhubung ke WhatsApp `087881864680`.
5. Form pendaftaran bekerja sebagai WhatsApp generator.
6. Tidak membutuhkan backend.
7. Source code bersih dan terstruktur.
8. Repository sudah di-push ke GitHub.
9. Repository sudah terhubung ke Vercel.
10. Production deployment berhasil.
11. Custom domain dapat diarahkan ke Vercel.
12. Tidak ada broken link/image.
13. Tidak ada error JavaScript di production.
14. Website siap menerima calon jamaah melalui WhatsApp.

---

# 36. Prioritas Implementasi

## P0 — Wajib
- 6 halaman utama.
- Supporting route detail paket.
- Supporting route pendaftaran.
- Header.
- Hero.
- Package listing.
- Package detail.
- Registration form.
- WhatsApp integration.
- Responsive design.
- GitHub.
- Vercel deployment.

## P1 — Penting
- SEO.
- Gallery.
- Tabs.
- Mobile menu.
- Accessibility.
- Performance optimization.

## P2 — Pengembangan berikutnya
- CMS.
- Admin dashboard.
- Database jamaah.
- Online payment.
- Dynamic departure schedules.
- Testimonials management.
- Gallery management.
- Analytics.
- Meta Pixel / Google Analytics.
- CRM integration.

---

# 37. Catatan Implementasi Penting

1. **Jangan membuat backend hanya untuk form.** Form harus langsung menghasilkan pesan WhatsApp.
2. **Jangan hard-code nomor WhatsApp di banyak file.** Simpan di satu config/helper.
3. **Jangan membuat halaman tambahan yang tidak ada pada desain awal.** Scope awal adalah 4 halaman.
4. Navigasi `Tentang Kami`, `Galeri`, `Testimoni`, dan `Kontak` dapat tetap menjadi anchor/placeholder navigation pada versi awal jika belum ada desain halaman khusus.
5. Package card harus reusable.
6. Detail package harus menggunakan struktur data yang reusable agar mudah menambah paket di masa depan.
7. Semua konten harga dan fasilitas harus mudah diedit dari satu data source.
8. Gunakan mobile-first responsive implementation.
9. Gunakan asset gambar yang legal untuk penggunaan komersial.
10. Jangan memasukkan credential GitHub, Vercel, domain, atau WhatsApp API ke repository.
11. WhatsApp yang digunakan adalah WhatsApp biasa melalui `wa.me`, bukan WhatsApp Business API.
12. Deployment Vercel berfungsi sebagai hosting/serverless platform untuk website, meskipun aplikasi ini pada dasarnya merupakan website statis.

---

# 38. Ringkasan Arsitektur

```text
                    ┌─────────────────────┐
                    │      Visitor        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Vercel         │
                    │   Static Website    │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
         Home Page       Package Pages    Registration
              │                │                │
              └────────────────┼────────────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      WhatsApp       │
                    │    087881864680     │
                    └─────────────────────┘

GitHub
   │
   └──── source code ────► Vercel
                              │
                              └──► Custom Domain
```

---

# 39. Final Deliverable

Deliverable akhir:

- GitHub repository berisi source code.
- `PRD.md`.
- 6 halaman utama.
- Supporting route detail paket.
- Supporting route pendaftaran.
- Responsive UI.
- WhatsApp integration.
- Production deployment di Vercel.
- Custom domain connected.
- README berisi cara menjalankan project secara lokal dan cara deployment.

**Primary business action: setiap calon jamaah diarahkan untuk menghubungi Nurul Iman melalui WhatsApp `087881864680`.**
