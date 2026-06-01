import ImpactStats from "@/components/ImpactStats";
import { Banknote, ChartPie, HeartHandshake } from "lucide-react";

const stories = [
  {
    title: "School support for rural learners",
    text: "A demo impact story showing how education support can be presented with dignity and clear outcomes."
  },
  {
    title: "Clean water project maintenance",
    text: "A project highlight showing how donations can help maintain tanks, filters, and hygiene training."
  },
  {
    title: "Food relief for families",
    text: "A story section that helps donors understand the practical value of food support campaigns."
  }
];

export default function ImpactPage() {
  return (
    <>
      <section className="section-padding bg-forest text-white">
        <div className="container-width max-w-4xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gold">
            Impact
          </span>
          <h1 className="mt-4 text-5xl font-black lg:text-6xl">
            Show donors where support goes and why it matters
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-50/80">
            A real NGO can use this page for annual impact, stories, photos,
            project updates, and transparent use of funds.
          </p>
        </div>
      </section>

      <ImpactStats />

      <section className="section-padding bg-cream">
        <div className="container-width">
          <h2 className="text-4xl font-black text-navy">Impact Stories</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <HeartHandshake className="text-coral" size={34} />
                <h3 className="mt-5 text-2xl font-black text-navy">{story.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{story.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-forest p-8 text-white">
            <ChartPie className="text-gold" size={36} />
            <h2 className="mt-5 text-3xl font-black">Transparent use of funds</h2>
            <p className="mt-4 leading-8 text-emerald-50/80">
              70% program support, 20% operations, 10% outreach and donor
              communication. Replace with verified numbers for a live NGO.
            </p>
          </div>
          <div className="rounded-[2rem] bg-cream p-8">
            <Banknote className="text-coral" size={36} />
            <h2 className="mt-5 text-3xl font-black text-navy">Before / after highlights</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Use this space to compare project conditions before intervention
              and after donor support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
