import CauseCard from "@/components/CauseCard";
import { causes } from "@/data/causes";

export default function CausesPage() {
  return (
    <>
      <section className="bg-forest px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width max-w-4xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gold">
            Causes & Programs
          </span>
          <h1 className="mt-4 text-5xl font-black lg:text-6xl">
            Support programs that bring hope to communities
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-50/80">
            Choose a cause to support and help provide food, education, clean water,
            healthcare, women and girls empowerment, and care for elderly people.
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
  <div className="container-width">
    <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
      <div className="max-w-2xl">
        <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
          Choose Your Impact
        </span>

        <h2 className="mt-3 text-4xl font-black leading-tight text-navy lg:text-[48px]">
          Every program supports a real community need
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Select a cause below and help provide practical support where it is needed most.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <p className="text-sm font-black text-forest">
          6 active causes available
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Food, education, water, health, women, and elderly care.
        </p>
      </div>
    </div>

    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {causes.map((cause) => (
        <CauseCard key={cause.slug} cause={cause} />
      ))}
    </div>
  </div>
</section>
    </>
  );
}
