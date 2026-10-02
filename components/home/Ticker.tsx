const ITEMS = [
  "✦  Izin Resmi Kemenag",
  "✦  Pembimbing Profesional",
  "✦  Fasilitas Lengkap",
  "✦  Pelayanan 24 Jam",
  "✦  Harga Transparan",
  "✦  Jadwal Fleksibel",
  "✦  Hotel Dekat Masjidil Haram",
  "✦  Transportasi AC",
];

function Group() {
  return (
    <span className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span
          key={item}
          className="px-6 text-sm font-semibold tracking-wide text-white/85"
        >
          {item}
        </span>
      ))}
    </span>
  );
}

export function Ticker() {
  return (
    <div className="mt-6 overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-dark lg:mt-8">
      <div className="marquee-track py-3" aria-hidden="true">
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
      <span className="sr-only">
        Keunggulan: izin resmi Kemenag, pembimbing profesional, fasilitas
        lengkap, pelayanan 24 jam, harga transparan, jadwal fleksibel.
      </span>
    </div>
  );
}
