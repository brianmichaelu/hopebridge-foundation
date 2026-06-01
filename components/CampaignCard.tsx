import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tag: string;
};

export default function CampaignCard({ title, description, tag }: Props) {
  return (
    <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-100">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-black uppercase tracking-wide text-forest">
        <CalendarDays size={15} /> {tag}
      </div>
      <h3 className="text-2xl font-black text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <Link href="/donate" className="mt-6 inline-flex items-center text-sm font-black text-coral">
        Support Campaign <ArrowRight className="ml-2" size={16} />
      </Link>
    </div>
  );
}
