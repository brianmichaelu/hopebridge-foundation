import CauseCard from "@/components/CauseCard";
import { featuredCauses } from "@/data/causes";

export default function ProgramsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-width">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
            Featured Causes
          </span>
          <h2 className="mt-3 text-4xl font-black text-navy lg:text-5xl">
            Choose a cause and help create measurable impact
          </h2>
          <p className="mt-4 text-slate-600">
            These demo causes show how a real NGO can present programs,
            fundraising goals, progress, and clear donation actions.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {featuredCauses.map((cause) => (
            <CauseCard key={cause.slug} cause={cause} />
          ))}
        </div>
      </div>
    </section>
  );
}
