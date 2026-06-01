import CauseCard from "@/components/CauseCard";
import { causes } from "@/data/causes";

export default function CausesPage() {
  return (
    <>
      <section className="section-padding bg-forest text-white">
        <div className="container-width max-w-4xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gold">
            Causes & Programs
          </span>
          <h1 className="mt-4 text-5xl font-black lg:text-6xl">
            Campaign cards built for donations, progress, and trust
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-50/80">
            Each cause includes a demo fundraising target, raised amount,
            progress bar, image, and direct donation call-to-action.
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
