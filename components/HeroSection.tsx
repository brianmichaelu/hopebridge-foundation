import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Users,
  Utensils,
  School,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#042F24]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.28),transparent_34%),linear-gradient(135deg,#042F24_0%,#064E3B_55%,#022C22_100%)]" />

      <div className="container-width relative grid min-h-[720px] items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-24">
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
            {[
              "Secure donation flow",
              "Transparent campaigns",
              "Volunteer ready",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
              >
                <ShieldCheck size={20} className="text-gold" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-gold/30 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-coral/30 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="relative h-[430px] overflow-hidden rounded-[2rem] bg-slate-200">
              <Image
                src="/images/ngo-hero.png"
                alt="HopeBridge Foundation community support"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">
                  Current Mission
                </p>
                <h2 className="mt-2 text-2xl font-black text-navy">
                  Feed families. Keep children in school. Support community care.
                </h2>
              </div>
            </div>
          </div>

          <div className="relative -mt-8 grid gap-4 px-5 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-xl">
              <Utensils className="text-coral" size={24} />
              <p className="mt-3 text-2xl font-black text-forest">12.5k+</p>
              <p className="text-xs font-bold text-slate-500">Meals</p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-xl">
              <School className="text-coral" size={24} />
              <p className="mt-3 text-2xl font-black text-forest">3.2k+</p>
              <p className="text-xs font-bold text-slate-500">Children</p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-xl">
              <Users className="text-coral" size={24} />
              <p className="mt-3 text-2xl font-black text-forest">15</p>
              <p className="text-xs font-bold text-slate-500">Communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
