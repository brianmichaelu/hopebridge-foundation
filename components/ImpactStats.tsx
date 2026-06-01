import { HeartHandshake, School, Utensils, Users } from "lucide-react";

const stats = [
  { label: "Meals Provided", value: "12,500+", icon: Utensils },
  { label: "Children Supported", value: "3,200+", icon: School },
  { label: "Community Projects", value: "48", icon: HeartHandshake },
  { label: "Partner Communities", value: "15", icon: Users }
];

export default function ImpactStats() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-100 bg-cream p-7 shadow-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-white">
                  <Icon size={26} />
                </div>
                <p className="text-4xl font-black text-forest">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
