import Link from "next/link";
import { CheckCircle2, HeartHandshake } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-width flex min-h-[560px] items-center justify-center">
        <div className="max-w-2xl rounded-[2rem] bg-white p-8 text-center shadow-xl lg:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-forest">
            <CheckCircle2 size={42} />
          </div>
          <h1 className="mt-6 text-4xl font-black text-navy lg:text-5xl">
            Thank you for your support
          </h1>
          <p className="mt-5 leading-8 text-slate-600">
            Your donation details were submitted successfully. Thank you for choosing
            to support programs that help families, children, and communities receive
            practical care.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link
              href="/causes"
              className="inline-flex items-center justify-center rounded-full border border-forest px-6 py-3 text-sm font-bold text-forest transition hover:bg-forest hover:text-white"
            >
              <HeartHandshake className="mr-2" size={18} />
              Explore More Causes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
