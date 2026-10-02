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
          className="px-6 text-sm font-bold tracking-wide text-primary-dark"
        >
          {item}
        </span>
      ))}
    </span>
  );
}

export function Ticker() {
  return (
    <div
      className="overflow-hidden"
      style={{ backgroundColor: "#D99A28" }}
    >
      <div className="marquee-track py-3.5" aria-hidden="true">
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
