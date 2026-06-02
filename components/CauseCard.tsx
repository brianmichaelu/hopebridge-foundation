import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Cause } from "@/data/causes";

type Props = {
  cause: Cause;
};

export default function CauseCard({ cause }: Props) {
  const progress = Math.min(Math.round((cause.raised / cause.target) * 100), 100);

  return (
    <article
  id={cause.slug}
  className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
>
      <div className="relative h-64">
        <Image
          src={cause.image}
          alt={cause.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-wide text-navy">
          {cause.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black text-navy">{cause.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {cause.description}
        </p>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs font-bold text-slate-600">
            <span>${cause.raised.toLocaleString()} raised</span>
            <span>${cause.target.toLocaleString()} goal</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-coral"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs font-bold text-forest">{progress}% funded</p>
        </div>

        <Link
  href={`/causes/${cause.slug}`}
  className="mt-6 inline-flex items-center text-sm font-black text-coral"
>
  Learn More <ArrowRight className="ml-2" size={16} />
</Link>
      </div>
    </article>
  );
}
