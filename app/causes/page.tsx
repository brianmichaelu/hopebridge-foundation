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

      <section className="section-padding bg-cream">
        <div className="container-width grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <CauseCard key={cause.slug} cause={cause} />
          ))}
        </div>
      </section>
    </>
  );
}
