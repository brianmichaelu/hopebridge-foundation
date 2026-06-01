import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tag: string;
  image: string;
  raised: string;
  goal: string;
};

export default function CampaignCard({
  title,
  description,
  tag,
  image,
  raised,
  goal,
}: Props) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-wide text-navy">
          <CalendarDays size={15} /> {tag}
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-black text-navy">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs font-bold text-slate-600">
            <span>{raised} raised</span>
            <span>{goal} goal</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[62%] rounded-full bg-coral" />
          </div>
        </div>

        <Link
          href="/donate"
          className="mt-6 inline-flex items-center text-sm font-black text-coral"
        >
          Support Campaign <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </article>
  );
}
