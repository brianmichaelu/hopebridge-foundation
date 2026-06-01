import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-forest">
      {/* Place /images/ngo-hero.png inside public/images/ */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ngo-hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#031f18]/95 via-[#064e3b]/70 to-black/30" />

      <div className="container-width relative flex min-h-[720px] items-center px-5 py-24 lg:px-12">
        <div className="max-w-3xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            <Heart size={18} className="text-gold" />
            Giving hope through practical community support
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Together, We Can Bring Hope Where It’s Needed Most
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Support children, families, women, education, health, food relief,
            clean water projects, and community care programs across Tanzania.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/donate" className="btn-primary">
              Donate Now <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link href="/causes" className="btn-secondary">
              Explore Causes
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Secure donation flow", "Transparent campaigns", "Volunteer ready"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
                >
                  <ShieldCheck size={20} className="text-gold" />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
