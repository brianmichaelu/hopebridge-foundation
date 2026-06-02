import VolunteerForm from "@/components/VolunteerForm";
import {
  HeartHandshake,
  Megaphone,
  PackageCheck,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const opportunities = [
  {
    title: "Community Outreach",
    icon: HeartHandshake,
    text: "Support field visits, community follow-ups, family outreach, and local awareness programs.",
  },
  {
    title: "Fundraising Support",
    icon: Megaphone,
    text: "Help promote campaigns, share stories, support donor communication, and encourage community giving.",
  },
  {
    title: "Food Pack Distribution",
    icon: PackageCheck,
    text: "Assist with organizing, packing, and distributing food support to families and vulnerable households.",
  },
];

const benefits = [
  "Use your time and skills to serve real community needs.",
  "Work with a mission-driven team and local partners.",
  "Support children, families, women, elderly people, and vulnerable communities.",
  "Build experience in outreach, fundraising, logistics, and community service.",
];

export default function VolunteerPage() {
  return (
    <>
      <section className="bg-forest px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="max-w-4xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-gold">
              Volunteer
            </span>

            <h1 className="mt-4 text-5xl font-black leading-tight lg:text-6xl">
              Give your time and skills to support community change
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50/85">
              Join HopeBridge Foundation as a volunteer and help support
              practical programs in food relief, education, clean water,
              healthcare, outreach, and community care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#volunteer-form" className="btn-primary">
                Apply to Volunteer <ArrowRight className="ml-2" size={18} />
              </a>

              <Link
                href="/causes"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-forest"
              >
                View Causes
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-navy">
              <Users size={34} />
            </div>

            <h2 className="mt-6 text-3xl font-black">
              Volunteers help turn compassion into action.
            </h2>

            <p className="mt-4 leading-8 text-emerald-50/80">
              Whether you can help in the field, online, or through fundraising,
              your support can strengthen community programs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Opportunities
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-navy lg:text-[48px]">
              Ways you can get involved
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Choose a volunteer role that matches your time, skills, and
              passion for community service.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {opportunities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="text-coral" size={34} />

                  <h3 className="mt-5 text-2xl font-black text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Why Volunteer
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-navy lg:text-[48px]">
              Your time can make a lasting difference
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Volunteers help us reach more families, organize programs better,
              share community stories, and support people who need practical
              care.
            </p>
          </div>

          <div className="rounded-[2rem] bg-cream p-8 shadow-sm">
            <div className="space-y-4">
              {benefits.map((item) => (
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
          </div>
        </div>
      </section>

      <section
        id="volunteer-form"
        className="bg-cream px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="container-width">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Volunteer Application
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-navy lg:text-[48px]">
              Tell us how you would like to help
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Fill out the form and the team can follow up with available
              volunteer opportunities.
            </p>
          </div>

          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
