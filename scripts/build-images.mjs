import sharp from "sharp";

const jobs = [
  ["a3.jpg", "hero-kabah", 1600],
  ["a2.jpg", "kabah-blue", 1400],
  ["a4.jpg", "kabah-aerial", 1200],
  ["a1.jpg", "nabawi-day", 1400],
  ["p2.png", "nabawi-sunset", 1400],
  ["p1.png", "makkah-dusk", 1200],
  ["p3.png", "arafat", 1400],
];

for (const [src, name, width] of jobs) {
  await sharp(`assets/original/${src}`)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(`public/images/${name}.webp`);
  console.log(`ok ${name}.webp`);
}
