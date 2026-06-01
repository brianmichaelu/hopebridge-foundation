import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export default function DonationCTA() {
  return (
    <section className="bg-forest px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="container-width grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
            <BadgeDollarSign className="text-gold" size={18} />
            Monthly giving program
          </div>

          <h2 className="text-4xl font-black leading-tight lg:text-[56px]">
            Give monthly and help communities receive steady support
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/85">
            Monthly donations help keep essential programs running — from school
            support and food relief to clean water maintenance, elderly care
            visits, and community health outreach.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              "Reliable program planning",
              "Long-term community care",
              "Consistent donor impact",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={18} />
                <span className="text-sm font-bold text-emerald-50">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-7 text-navy shadow-2xl lg:p-9">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-coral">
            <HeartHandshake size={28} />
          </div>

          <p className="text-sm font-black uppercase tracking-[0.25em] text-coral">
            Suggested monthly gift
          </p>

          <p className="mt-4 text-6xl font-black">$25</p>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Can support school materials, food assistance, hygiene supplies, or
            health outreach depending on the selected cause.
          </p>

          <div className="mt-6 rounded-3xl bg-cream p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 shrink-0 text-forest" size={20} />
              <p className="text-sm font-semibold leading-6 text-slate-700">
                Live donations can be connected to a secure payment gateway for
                one-time or recurring giving.
              </p>
            </div>
          </div>

          <Link href="/donate" className="btn-primary mt-7 w-full">
            Start Monthly Donation <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
