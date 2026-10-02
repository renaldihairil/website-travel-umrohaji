import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        Halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button href="/">Kembali ke Beranda</Button>
        <Button href="/paket-umroh" variant="outline">
          Lihat Paket Umroh
        </Button>
      </div>
      <p className="mt-6 text-sm text-muted">
        Butuh bantuan?{" "}
        <Link href="/kontak" className="text-primary underline hover:text-gold">
          Hubungi kami
        </Link>
      </p>
    </section>
  );
}
