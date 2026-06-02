import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import { causes } from "@/data/causes";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return causes.map((cause) => ({
    slug: cause.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const cause = causes.find((item) => item.slug === params.slug);

  if (!cause) {
    return {
      title: "Cause Not Found | HopeBridge Foundation",
    };
  }

  return {
    title: `${cause.title} | HopeBridge Foundation`,
    description: cause.description,
  };
}

export default function CauseDetailPage({ params }: Props) {
  const cause = causes.find((item) => item.slug === params.slug);

  if (!cause) {
    notFound();
  }

  const progress = Math.min(
    Math.round((cause.raised / cause.target) * 100),
    100
  );

  const supportItems = [
    "Direct program support for families and communities",
    "Community outreach, planning, and volunteer coordination",
    "Progress tracking so donors can understand campaign results",
    "Practical care connected to the selected cause",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_35%)]" />

        <div className="container-width relative grid items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-20">
          <div>
            <Link
              href="/causes"
              className="inline-flex items-center text-sm font-bold text-emerald-50/80 transition hover:text-gold"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to all causes
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-gold">
              {cause.category}
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight lg:text-6xl">
              {cause.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/85">
              {cause.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/donate?cause=${cause.slug}`}
                className="btn-primary"
              >
                Donate to This Cause <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-forest"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] border border-white/15 shadow-2xl">
              <Image
                src={cause.image}
                alt={cause.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-5 text-navy shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">
                  Campaign Progress
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  ${cause.raised.toLocaleString()} raised of $
                  {cause.target.toLocaleString()}
                </h2>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-coral"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-2 text-sm font-bold text-forest">
                  {progress}% funded
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Why It Matters
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-navy lg:text-[48px]">
              Your support helps turn care into action
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              This program focuses on practical community support that can be
              clearly explained to donors, coordinated by volunteers, and
              delivered through trusted local action.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <HeartHandshake className="text-coral" size={30} />
                <p className="mt-4 text-2xl font-black text-forest">
                  {cause.category}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Focused support for a clear community need.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <Users className="text-coral" size={30} />
                <p className="mt-4 text-2xl font-black text-forest">
                  Community First
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Built around people, families, and local partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-white">
              <ShieldCheck size={28} />
            </div>

            <h3 className="text-3xl font-black text-navy">
              What your donation supports
            </h3>

            <div className="mt-6 space-y-4">
              {supportItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-coral"
                    size={20}
                  />
                  <p className="font-semibold leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href={`/donate?cause=${cause.slug}`}
              className="btn-primary mt-8 w-full"
            >
              Support This Cause <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
