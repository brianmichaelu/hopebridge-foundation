import VolunteerForm from "@/components/VolunteerForm";
import { HeartHandshake, Megaphone, PackageCheck } from "lucide-react";

const opportunities = [
  { title: "Community Outreach", icon: HeartHandshake },
  { title: "Fundraising Support", icon: Megaphone },
  { title: "Food Pack Distribution", icon: PackageCheck }
];

export default function VolunteerPage() {
  return (
    <>
      <section className="section-padding bg-forest text-white">
        <div className="container-width max-w-4xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gold">
            Volunteer
          </span>
          <h1 className="mt-4 text-5xl font-black lg:text-6xl">
            Give your time and skills to support community change
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-50/80">
            A volunteer page makes the NGO website more complete and helps
            visitors take action even when they are not ready to donate.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-width grid gap-6 lg:grid-cols-3">
          {opportunities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <Icon className="text-coral" size={34} />
                <h2 className="mt-5 text-2xl font-black text-navy">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Join a demo opportunity and help with planning, communication,
                  field visits, and community support.
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-cream pt-0">
        <div className="container-width">
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
