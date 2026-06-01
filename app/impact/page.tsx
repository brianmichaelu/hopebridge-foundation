import Image from "next/image";
import ImpactStats from "@/components/ImpactStats";
import {
  Banknote,
  ChartPie,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const stories = [
  {
    title: "School support for rural learners",
    text: "Children received school materials, bags, notebooks, and mentoring support to help them stay in class with confidence.",
  },
  {
    title: "Clean water support for families",
    text: "Community water access programs helped families reduce long walking distances and improve daily hygiene.",
  },
  {
    title: "Food relief for vulnerable households",
    text: "Emergency food packs supported families during difficult periods while connecting them to longer-term community care.",
  },
];

const fundUse = [
  "Food packs and meal support",
  "School supplies and education assistance",
  "Health outreach and community care",
  "Clean water and hygiene projects",
];

export default function ImpactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_35%)]" />

        <div className="container-width relative grid items-center gap-10 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-24">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.3em] text-gold">
              Impact
            </span>

            <h1 className="mt-5 text-5xl font-black leading-tight lg:text-6xl">
              Showing donors where support goes and why it matters
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/85">
              HopeBridge Foundation presents clear results, community stories,
              project updates, and transparent use of funds so donors can give
              with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/donate" className="btn-primary">
                Support a Cause <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="/causes"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-forest"
              >
                View Programs
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] border border-white/15 shadow-2xl">
              <Image
                src="/images/gallery-1.png"
                alt="HopeBridge Foundation impact work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-5 text-navy shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">
                  Community Progress
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Every donation should connect to a visible result.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactStats />

      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Stories from the field
            </span>
            <h2 className="mt-3 text-4xl font-black text-navy lg:text-5xl">
              Real impact is best shown through human stories
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <HeartHandshake className="text-coral" size={34} />

                <h3 className="mt-5 text-2xl font-black text-navy">
                  {story.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{story.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-forest p-8 text-white lg:p-10">
            <ChartPie className="text-gold" size={36} />

            <h2 className="mt-5 text-3xl font-black">
              Transparent use of funds
            </h2>

            <p className="mt-4 leading-8 text-emerald-50/80">
              A live NGO can use this section to explain how donations are
              allocated across program delivery, operations, outreach, and
              reporting.
            </p>

            <div className="mt-7 space-y-3">
              {fundUse.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-semibold text-emerald-50">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-cream p-8 lg:p-10">
            <Banknote className="text-coral" size={36} />

            <h2 className="mt-5 text-3xl font-black text-navy">
              Reporting that builds donor trust
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              For a real organization, this page can include annual reports,
              campaign updates, receipts, partner logos, beneficiary stories,
              and verified project photos.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-forest">70%</p>
                <p className="mt-1 text-sm font-bold text-slate-600">
                  Program delivery
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-forest">30%</p>
                <p className="mt-1 text-sm font-bold text-slate-600">
                  Operations & outreach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
