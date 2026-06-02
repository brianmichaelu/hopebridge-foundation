import Link from "next/link";
import { CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";

type Props = {
  searchParams?: Promise<{
    provider?: string;
    status?: string;
    cause?: string;
    amount?: string;
    type?: string;
  }>;
};

function formatProvider(provider?: string) {
  if (!provider) return "Payment Gateway";
  return provider.charAt(0).toUpperCase() + provider.slice(1);
}

export default async function ThankYouPage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};

  const provider = formatProvider(params.provider);
  const status = params.status || "";
  const cause = params.cause || "";
  const amount = params.amount || "";
  const donationType = params.type || "";

  const isSelcomDemo = params.provider === "selcom" && status === "pending";

  return (
    <section className="section-padding bg-cream">
      <div className="container-width flex min-h-[560px] items-center justify-center">
        <div className="max-w-2xl rounded-[2rem] bg-white p-8 text-center shadow-xl lg:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-forest">
            <CheckCircle2 size={42} />
          </div>

          <h1 className="mt-6 text-4xl font-black text-navy lg:text-5xl">
            {isSelcomDemo
              ? "Payment request received"
              : "Thank you for your support"}
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            {isSelcomDemo
              ? "Your donation details were submitted successfully. This demo is prepared for Selcom payment gateway integration, but no real money has been collected yet."
              : "Your donation details were submitted successfully. Thank you for choosing to support programs that help families, children, and communities receive practical care."}
          </p>

          {isSelcomDemo && (
            <div className="mt-8 rounded-[1.5rem] bg-cream p-6 text-left">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="text-forest" size={24} />
                <h2 className="text-xl font-black text-navy">
                  Demo payment summary
                </h2>
              </div>

              <div className="space-y-3 text-sm font-semibold text-slate-700">
                <p>
                  <span className="text-slate-500">Provider:</span> {provider}
                </p>

                {cause && (
                  <p>
                    <span className="text-slate-500">Cause:</span> {cause}
                  </p>
                )}

                {amount && (
                  <p>
                    <span className="text-slate-500">Amount:</span> ${amount}
                  </p>
                )}

                {donationType && (
                  <p>
                    <span className="text-slate-500">Donation type:</span>{" "}
                    {donationType === "monthly" ? "Monthly" : "One-time"}
                  </p>
                )}

                <p>
                  <span className="text-slate-500">Status:</span> Pending / Demo mode
                </p>
              </div>
            </div>
          )}

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
