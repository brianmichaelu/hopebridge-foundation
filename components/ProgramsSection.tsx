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
            Support a cause that changes lives
          </h2>
          <p className="mt-4 text-slate-600">
              Choose a program to support and help provide practical care through food
              assistance, school support, clean water, healthcare, and community outreach.
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
