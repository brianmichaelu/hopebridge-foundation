import Image from "next/image";

const images = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png"
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
            Project Gallery
          </span>
          <h2 className="mt-3 text-4xl font-black text-navy lg:text-5xl">
            Stories of hope from the communities we serve
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              A glimpse into the programs, people, and community work supported through
              donations, partnerships, and volunteer action.
        </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {images.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-[2rem] ${
                index === 0 ? "lg:col-span-2 lg:row-span-2 min-h-[420px]" : "min-h-[260px]"
              }`}
            >
              <Image
                src={src}
                alt={`HopeBridge project gallery ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
