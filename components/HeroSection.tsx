"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, HeartHandshake } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/ngo-hero.png",
    label: "Community Relief",
    title: "Together, We Can Bring Hope Where It’s Needed Most",
    text: "Support children, families, women, education, health, food relief, clean water projects, and community care programs across Tanzania.",
  },
  {
    image: "/images/children-education.png",
    label: "Education Support",
    title: "Every Child Deserves a Chance to Learn",
    text: "Help provide school materials, uniforms, tuition support, mentorship, and learning opportunities for children in need.",
  },
  {
    image: "/images/food-support.png",
    label: "Food & Family Care",
    title: "Feed Families and Support Communities",
    text: "Your donation can help provide meals, emergency food packs, and practical support for vulnerable families.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  function goToNextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  function goToPreviousSlide() {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-black">
      {slides.map((item, index) => (
        <Image
          key={item.image}
          src={item.image}
          alt={item.title}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      <button
        type="button"
        onClick={goToPreviousSlide}
        className="absolute left-5 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow-xl transition hover:bg-white lg:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={goToNextSlide}
        className="absolute right-5 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow-xl transition hover:bg-white lg:flex"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      <div className="container-width relative z-10 flex min-h-[720px] items-center justify-center px-5 pb-32 pt-20 text-center lg:px-12">
        <div className="mx-auto max-w-5xl text-white">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/70 bg-white/10 backdrop-blur">
            <HeartHandshake size={46} />
          </div>

          <p className="mb-4 text-lg font-black uppercase tracking-[0.35em] text-gold">
            {slide.label}
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-white/90">
            {slide.text}
          </p>

          <div className="mt-9 flex justify-center gap-3">
            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeSlide
                    ? "w-10 bg-coral"
                    : "w-3 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 w-[92%] max-w-6xl -translate-x-1/2 translate-y-1/2 rounded-3xl bg-white p-5 shadow-2xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Donate Today
            </p>
            <h2 className="mt-1 text-2xl font-black text-navy">
              Help fund meals, education, clean water, healthcare, and care programs.
            </h2>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/donate" className="btn-primary">
              Donate Now <ArrowRight className="ml-2" size={18} />
            </Link>

            <Link
              href="/causes"
              className="inline-flex items-center justify-center rounded-full border border-coral px-6 py-3 text-sm font-bold text-coral transition hover:bg-coral hover:text-white"
            >
              Explore Causes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
