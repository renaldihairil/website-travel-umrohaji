"use client";

import { useState } from "react";

type PackageGalleryProps = {
  images: { src: string; alt: string }[];
  name: string;
};

export function PackageGallery({ images: gallery, name }: PackageGalleryProps) {
  const [active, setActive] = useState(0);
  const current = gallery[active] ?? gallery[0];

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-line bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.alt}
          className="aspect-[4/3] w-full object-cover"
          width={800}
          height={600}
        />
      </div>

      <div
        className="mt-4 flex gap-3 overflow-x-auto pb-1"
        role="list"
        aria-label={`Galeri foto paket ${name}`}
      >
        {gallery.map((item, index) => (
          <button
            key={item.src + index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Tampilkan foto: ${item.alt}`}
            aria-pressed={index === active}
            className={`h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
              index === active
                ? "border-gold"
                : "border-line opacity-75 hover:opacity-100"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
