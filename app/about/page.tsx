import { Eye, HandHeart, ShieldCheck, Target, Users } from "lucide-react";

const values = [
  { title: "Compassion", icon: HandHeart, text: "We respond to real human needs with dignity and respect." },
  { title: "Transparency", icon: ShieldCheck, text: "We show donors how campaigns are structured and supported." },
  { title: "Community", icon: Users, text: "We work with local partners and community leaders." }
];

const team = ["Amina Joseph", "Daniel Mwita", "Neema Patrick", "Joseph Kato"];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-forest text-white">
        <div className="container-width max-w-4xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gold">
            About Us
          </span>
          <h1 className="mt-4 text-5xl font-black lg:text-6xl">
            Connecting generosity with real community needs
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-50/80">
           HopeBridge Foundation connects compassionate donors, volunteers, and partners
            with practical community programs that support children, families, women,
            elderly people, and vulnerable communities.
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <Target className="text-coral" size={34} />
            <h2 className="mt-5 text-3xl font-black text-navy">Our Mission</h2>
            <p className="mt-4 leading-8 text-slate-600">
              To provide practical support through food relief, education, healthcare,
              clean water, women empowerment, and elderly care programs that improve
              daily life for vulnerable communities.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <Eye className="text-coral" size={34} />
            <h2 className="mt-5 text-3xl font-black text-navy">Our Vision</h2>
            <p className="mt-4 leading-8 text-slate-600">
              A future where every person can access basic support, dignity,
              opportunity, and hope through strong community partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <h2 className="text-4xl font-black text-navy">Our Values</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-[2rem] bg-cream p-8">
                  <Icon className="text-coral" size={34} />
                  <h3 className="mt-5 text-2xl font-black text-navy">{value.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="container-width">
          <h2 className="text-4xl font-black text-navy">Demo Team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={member} className="rounded-[2rem] bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-forest text-2xl font-black text-white">
                  {member.split(" ").map((part) => part[0]).join("")}
                </div>
                <h3 className="mt-5 text-xl font-black text-navy">{member}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {["Founder", "Program Lead", "Volunteer Coordinator", "Finance Officer"][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
