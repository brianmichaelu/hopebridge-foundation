import {
  Eye,
  HandHeart,
  ShieldCheck,
  Target,
  Users,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    title: "Compassion",
    icon: HandHeart,
    text: "We respond to real human needs with dignity, care, and respect.",
  },
  {
    title: "Transparency",
    icon: ShieldCheck,
    text: "We keep donors informed about how programs are structured, supported, and delivered.",
  },
  {
    title: "Community",
    icon: Users,
    text: "We work with local leaders, volunteers, and partners to create lasting community impact.",
  },
];

const team = [
  {
    name: "Amina Joseph",
    role: "Founder",
  },
  {
    name: "Daniel Mwita",
    role: "Program Lead",
  },
  {
    name: "Neema Patrick",
    role: "Volunteer Coordinator",
  },
  {
    name: "Joseph Kato",
    role: "Finance Officer",
  },
];

const focusAreas = [
  "Food relief for vulnerable families",
  "Education support for children",
  "Clean water and hygiene programs",
  "Healthcare outreach and community care",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width max-w-5xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gold">
            About Us
          </span>

          <h1 className="mt-4 text-5xl font-black leading-tight lg:text-6xl">
            Connecting generosity with real community needs
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-emerald-50/85">
            HopeBridge Foundation connects compassionate donors, volunteers,
            and partners with practical community programs that support
            children, families, women, elderly people, and vulnerable
            communities.
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <Target className="text-coral" size={34} />

            <h2 className="mt-5 text-3xl font-black text-navy">
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              To provide practical support through food relief, education,
              healthcare, clean water, women empowerment, and elderly care
              programs that improve daily life for vulnerable communities.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <Eye className="text-coral" size={34} />

            <h2 className="mt-5 text-3xl font-black text-navy">
              Our Vision
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              A future where every person can access basic support, dignity,
              opportunity, and hope through strong community partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              What Guides Us
            </span>

            <h2 className="mt-3 text-4xl font-black text-navy lg:text-[48px]">
              Our Values
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              These values guide how HopeBridge Foundation serves communities,
              works with partners, and earns donor trust.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] bg-cream p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="text-coral" size={34} />

                  <h3 className="mt-6 text-2xl font-black text-navy">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              How We Work
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-navy lg:text-[48px]">
              Practical support delivered through trusted local action
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              HopeBridge Foundation focuses on simple, practical programs that
              can be understood by donors and delivered with accountability by
              volunteers, local leaders, and community partners.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-white">
              <HeartHandshake size={28} />
            </div>

            <div className="space-y-4">
              {focusAreas.map((item) => (
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

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Our Team
            </span>

            <h2 className="mt-3 text-4xl font-black text-navy lg:text-[48px]">
              People behind the mission
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              A committed team helps coordinate programs, volunteers, donor
              communication, and community partnerships.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[2rem] bg-cream p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-forest text-2xl font-black text-white">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>

                <h3 className="mt-5 text-xl font-black text-navy">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
