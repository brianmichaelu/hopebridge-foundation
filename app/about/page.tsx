import { Eye, HandHeart, ShieldCheck, Target, Users } from "lucide-react";

const values = [
  { title: "Compassion", icon: HandHeart, text: "We respond to real human needs with dignity and respect." },
  { title: "Transparency", icon: ShieldCheck, text: "We keep donors informed about how programs are structured, supported, and delivered." },
  { title: "Community", icon: Users, text: "We work with local leaders, volunteers, and partners to create lasting community impact." }
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

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-10 max-w-3xl">
  <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
    What Guides Us
  </span>

  <h2 className="mt-3 text-4xl font-black text-navy lg:text-[48px]">
    Our Values
  </h2>

  <p className="mt-4 text-lg leading-8 text-slate-600">
    These values guide how HopeBridge Foundation serves communities, works with partners, and earns donor trust.
  </p>
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
