import {
  HeartHandshake,
  School,
  Utensils,
  Users,
  Droplets,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Meals Provided",
    value: "12,500+",
    icon: Utensils,
    description: "Nutritious meals and emergency food packs delivered.",
  },
  {
    label: "Children Supported",
    value: "3,200+",
    icon: School,
    description: "School supplies, mentoring, and education assistance.",
  },
  {
    label: "Community Projects",
    value: "48",
    icon: HeartHandshake,
    description: "Programs supporting families, women, health, and care.",
  },
  {
    label: "Partner Communities",
    value: "15",
    icon: Users,
    description: "Local communities reached through active partnerships.",
  },
];

export default function ImpactStats() {
  return (
   <section className="bg-white px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-24 lg:pt-14">
      <div className="container-width">
        <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Our Impact
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-navy lg:text-[46px]">
              Small acts of giving become real community change.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              HopeBridge Foundation is built to show donors clear results,
              transparent programs, and practical ways to support vulnerable
              communities through food, education, health, clean water, and care.
            </p>

            <Link
              href="/impact"
              className="mt-7 inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              View Full Impact
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group rounded-[2rem] border border-slate-100 bg-cream p-6 shadow-sm transition hover:-translate-y-1 hover:bg-forest hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-white transition group-hover:bg-white group-hover:text-forest">
                    <Icon size={26} />
                  </div>

                  <p className="text-4xl font-black text-forest transition group-hover:text-white">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-base font-black text-navy transition group-hover:text-white">
                    {stat.label}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600 transition group-hover:text-emerald-50">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-forest">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.4fr]">
            <div className="p-8 text-white lg:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy">
                <Droplets size={28} />
              </div>

              <h3 className="text-3xl font-black">
                Clean water. Better health. Stronger families.
              </h3>

              <p className="mt-4 leading-8 text-emerald-50/80">
                Use this featured impact banner to highlight one major campaign
                or urgent community project.
              </p>
            </div>

            <div className="grid gap-4 bg-white/10 p-8 lg:grid-cols-3 lg:p-10">
              {[
                "Water tanks",
                "Hygiene training",
                "Community outreach",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white p-5 text-center shadow-sm"
                >
                  <p className="text-sm font-black text-forest">{item}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Demo project area for a live NGO campaign.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
