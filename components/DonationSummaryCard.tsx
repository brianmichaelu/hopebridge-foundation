import { CheckCircle2, ShieldCheck } from "lucide-react";

type Props = {
  amount: number;
  donationType: "once" | "monthly";
  cause: string;
};

export default function DonationSummaryCard({ amount, donationType, cause }: Props) {
  return (
    <aside className="sticky top-28 rounded-[2rem] bg-white p-7 shadow-xl ring-1 ring-slate-100">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-coral">
        Donation Summary
      </p>
      <div className="mt-5 rounded-3xl bg-cream p-6">
        <p className="text-sm font-bold text-slate-600">Your gift</p>
        <p className="mt-2 text-5xl font-black text-forest">${amount || 0}</p>
        <p className="mt-2 text-sm font-semibold capitalize text-slate-600">
          {donationType === "once" ? "One-time donation" : "Monthly donation"}
        </p>
      </div>

      <div className="mt-6 space-y-4 text-sm text-slate-700">
        <div className="flex gap-3">
          <CheckCircle2 className="shrink-0 text-forest" size={20} />
          <span>Cause selected: {cause || "General Fund"}</span>
        </div>
        <div className="flex gap-3">
          <ShieldCheck className="shrink-0 text-forest" size={20} />
          <span>Live payments should go through a secure payment gateway.</span>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-forest p-4 text-xs leading-6 text-white">
        Demo mode: no real money will be collected. Connect a backend API route
        and payment provider before using this for a live NGO.
      </div>
    </aside>
  );
}
