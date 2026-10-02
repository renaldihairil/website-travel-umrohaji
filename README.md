# Nurul Iman Travel & Haji — Website

Website statis untuk **Nurul Iman Travel & Haji**: katalog paket Umroh, profil,
galeri, testimoni, kontak, dan pendaftaran yang seluruhnya diarahkan ke
**WhatsApp `087881864680`**.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Tanpa backend,
tanpa database, tanpa authentication — semua inquiry menjadi pesan WhatsApp.

## Route

| Route | Fungsi |
|---|---|
| `/` | Beranda |
| `/paket-umroh` | Katalog paket umroh |
| `/paket-umroh/[slug]` | Detail paket (supporting) |
| `/tentang-kami` | Profil, visi-misi, legalitas |
| `/galeri` | Galeri + filter + lightbox |
| `/testimoni` | Testimoni jamaah |
| `/kontak` | Informasi kontak + form inquiry |
| `/pendaftaran` | Form pendaftaran → WhatsApp (supporting) |

Plus `robots.txt` dan `sitemap.xml` (otomatis dari App Router).

## Menjalankan secara lokal

Prasyarat: Node.js 20+.

```bash
npm install
npm run dev        # dev server → http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm run start      # jalankan hasil build
```

## Struktur

```text
app/                  # halaman (App Router) + layout + SEO
components/
  layout/             # Header, Footer, PageHero
  home/               # Hero, WhyChooseUs, CtaBand
  packages/           # PackageCard, PackageGrid, PackageGallery, PackageTabs
  gallery/            # GalleryClient (filter + lightbox)
  registration/       # RegistrationForm, InquiryForm, ContactCard
  ui/                 # Button, Badge, SectionHeading
data/                 # packages.ts, gallery.ts, testimonials.ts, company.ts
config/site.ts        # nomor WA, navigasi, kontak (single source of truth)
lib/                  # whatsapp.ts (openWhatsApp), images.ts, site-url.ts
public/images/        # placeholder SVG (ganti dengan foto final)
```

## Cara mengedit konten

- **Harga / fasilitas / detail paket** → [data/packages.ts](data/packages.ts).
  Tambah paket baru = tambahkan objek baru, halaman detail dan grid ikut terisi.
- **Nomor WhatsApp & navigasi** → [config/site.ts](config/site.ts).
  Nomor `6287881864680` hanya boleh hidup di satu tempat ini.
- **Telepon / email / alamat** → `CONTACT` di [config/site.ts](config/site.ts).
  Field yang dibiarkan kosong tidak ditampilkan di website.
- **Profil, visi-misi, legalitas** → [data/company.ts](data/company.ts).
  Nomor izin/sertifikasi **tidak boleh dikarang** — isi hanya dengan dokumen resmi.
- **Testimoni** → [data/testimonials.ts](data/testimonials.ts) — saat ini masih
  placeholder struktur; ganti dengan testimoni asli sebelum production.
- **Foto** → taruh file baru di `public/images/` lalu perbarui
  [lib/images.ts](lib/images.ts). Semua path gambar terpusat di sini.

## WhatsApp

Satu utilitas: `openWhatsApp(message?)` / `whatsappUrl(message?)` di
[lib/whatsapp.ts](lib/whatsapp.ts). Default message:

```text
Assalamu'alaikum, saya ingin mendapatkan informasi paket Umroh Nurul Iman.
```

Form pendaftaran menghasilkan pesan ter-encode ke
`https://wa.me/6287881864680?text=...` — tidak ada data yang dikirim ke server.

## Deploy ke GitHub + Vercel

```bash
git init
git add .
git commit -m "feat: initial Nurul Iman travel website"
git branch -M main
git remote add origin <GITHUB_REPOSITORY_URL>
git push -u origin main
```

1. Login Vercel → **Import** repository → framework terdeteksi otomatis (Next.js).
2. Set production branch `main` → **Deploy**.
3. Set environment variable `NEXT_PUBLIC_SITE_URL` = domain production
   (dipakai `sitemap.xml` & `robots.txt`; jangan hardcode domain di kode).
4. Setelah semua beres: **Settings → Domains** → tambahkan domain custom,
   ikuti DNS record Vercel, aktifkan HTTPS.
5. Test seluruh route, `www`/non-`www`, dan semua CTA WhatsApp.

## Checklist sebelum production

- [ ] Ganti placeholder gambar dengan foto final berlisensi.
- [ ] Isi legalitas resmi di `data/company.ts` (jangan mengarang nomor izin).
- [ ] Ganti testimoni placeholder dengan testimoni asli.
- [ ] Isi `CONTACT` (telepon/email/alamat) bila tersedia.
- [ ] Set `NEXT_PUBLIC_SITE_URL` di Vercel.
- [ ] Uji form pendaftaran, tab detail, galeri, dan mobile menu di production.
