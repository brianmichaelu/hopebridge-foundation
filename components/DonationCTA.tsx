import Link from "next/link";
import { ArrowRight, BadgeDollarSign } from "lucide-react";

export default function DonationCTA() {
  return (
    <section className="section-padding bg-forest text-white">
      <div className="container-width grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
            <BadgeDollarSign className="text-gold" size={18} />
            Monthly giving program
          </div>
          <h2 className="text-4xl font-black lg:text-5xl">
            Become a monthly giver and help us plan long-term support
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/80">
            Monthly donations help fund stable programs such as school support,
            food relief, elderly care visits, clean water maintenance, and
            community health outreach.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-8 text-navy shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coral">
            Suggested monthly gift
          </p>
          <p className="mt-3 text-6xl font-black">$25</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Can support school materials, food assistance, or health outreach
            depending on the selected cause.
          </p>
          <Link href="/donate" className="btn-primary mt-7 w-full">
            Start Monthly Donation <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
