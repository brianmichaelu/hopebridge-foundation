"use client";

import { useMemo, useState } from "react";
import { Lock, Send } from "lucide-react";
import { causes } from "@/data/causes";
import DonationSummaryCard from "@/components/DonationSummaryCard";
import { useRouter, useSearchParams } from "next/navigation";

const amountOptions = [10, 25, 50, 100];

type DonationType = "once" | "monthly";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  updates: boolean;
};

export default function DonationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCauseSlug = searchParams.get("cause");
  const selectedCauseFromUrl = causes.find(
    (item) => item.slug === selectedCauseSlug
  );

  const [donationType, setDonationType] = useState<DonationType>("once");
  const [amount, setAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [cause, setCause] = useState(
    selectedCauseFromUrl ? selectedCauseFromUrl.title : "General Fund"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    country: "Tanzania",
    message: selectedCauseFromUrl
      ? `I would like to support ${selectedCauseFromUrl.title}.`
      : "",
    updates: true,
  });

  const finalAmount = useMemo(() => {
    const parsed = Number(customAmount);
    return customAmount ? parsed || 0 : amount;
  }, [amount, customAmount]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));

    setErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[key];
      return nextErrors;
    });
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.includes("@")) nextErrors.email = "Valid email is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (finalAmount < 1)
      nextErrors.amount = "Please enter a valid donation amount.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) return;

    /*
      PAYMENT INTEGRATION PLACEHOLDER:
      For a real NGO, send donation details to a secure API route, for example:
      POST /api/create-checkout-session

      The API route can then create a checkout session using:
      - Stripe Checkout
      - PayPal
      - Flutterwave
      - Pesapal
      - DPO
      - Selcom
      - M-Pesa / Airtel Money / Tigo Pesa gateway provider

      Do not collect or store card details directly in this form.
      Always verify completed payments using webhooks.
    */

    try {
  const response = await fetch("/api/create-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: finalAmount,
      cause,
      donationType,
      donor: form,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.checkoutUrl) {
    throw new Error(data.error || "Could not start checkout");
  }

  window.location.href = data.checkoutUrl;
} catch (error) {
  console.error(error);
  setErrors((current) => ({
    ...current,
    payment: "Payment checkout could not start. Please try again.",
  }));
}
  }

  return (
    <section className="bg-cream px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="container-width grid gap-8 lg:grid-cols-[1fr_380px]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-white p-6 shadow-sm lg:p-10"
        >
          <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
            Secure Donation
          </span>

          <h1 className="mt-3 text-4xl font-black text-navy lg:text-5xl">
            Choose your gift and cause
          </h1>

          <p className="mt-4 text-slate-600">
            Choose your donation amount, select a cause, and continue through a
            secure donation process.
          </p>

          {selectedCauseFromUrl && (
            <div className="mt-6 rounded-3xl bg-cream p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">
                Selected Cause
              </p>
              <p className="mt-2 text-xl font-black text-forest">
                {selectedCauseFromUrl.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {selectedCauseFromUrl.description}
              </p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl bg-cream p-2">
            {(["once", "monthly"] as DonationType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setDonationType(type)}
                className={`rounded-xl px-4 py-3 text-sm font-black transition ${
                  donationType === type
                    ? "bg-forest text-white shadow"
                    : "text-slate-700 hover:bg-white"
                }`}
              >
                {type === "once" ? "Give Once" : "Give Monthly"}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <label className="label-style">Choose amount</label>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amountOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setAmount(option);
                    setCustomAmount("");
                    setErrors((current) => {
                      const nextErrors = { ...current };
                      delete nextErrors.amount;
                      return nextErrors;
                    });
                  }}
                  className={`rounded-2xl border px-4 py-4 text-lg font-black transition ${
                    !customAmount && amount === option
                      ? "border-forest bg-forest text-white"
                      : "border-slate-200 bg-white text-navy hover:border-forest"
                  }`}
                >
                  ${option}
                </button>
              ))}
            </div>

            <input
              value={customAmount}
              onChange={(event) => {
                setCustomAmount(event.target.value);
                setErrors((current) => {
                  const nextErrors = { ...current };
                  delete nextErrors.amount;
                  return nextErrors;
                });
              }}
              type="number"
              min="1"
              placeholder="Custom amount"
              className="input-style mt-3"
            />

            {errors.amount && (
              <p className="mt-2 text-sm text-coral">{errors.amount}</p>
            )}
          </div>

          <div className="mt-6">
            <label className="label-style">Select cause</label>

            <select
              value={cause}
              onChange={(event) => setCause(event.target.value)}
              className="input-style"
            >
              <option>General Fund</option>
              {causes.map((item) => (
                <option key={item.slug}>{item.title}</option>
              ))}
            </select>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label className="label-style">Full name</label>
              <input
                value={form.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value)
                }
                className="input-style"
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-coral">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="label-style">Email</label>
              <input
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="input-style"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-coral">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="label-style">Phone</label>
              <input
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="input-style"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-coral">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="label-style">Country</label>
              <input
                value={form.country}
                onChange={(event) => updateField("country", event.target.value)}
                className="input-style"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="label-style">Message</label>
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              rows={5}
              className="input-style"
            />
          </div>

          <label className="mt-6 flex items-center gap-3 text-sm font-semibold text-slate-700">
            <input
              type="checkbox"
              checked={form.updates}
              onChange={(event) => updateField("updates", event.target.checked)}
              className="h-5 w-5 rounded border-slate-300"
            />
            Send me updates by WhatsApp/SMS
          </label>

          <button type="submit" className="btn-primary mt-8 w-full">
            Continue to Secure Donation <Send className="ml-2" size={18} />
          </button>

          {errors.payment && (
  <p className="mt-3 rounded-2xl bg-red-50 p-4 text-sm font-bold text-coral">
          {errors.payment}
  </p>
  )}

          <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-600">
            <Lock size={16} /> All payments go through a secure payment gateway
          </p>
        </form>

        <DonationSummaryCard
          amount={finalAmount}
          donationType={donationType}
          cause={cause}
        />
      </div>
    </section>
  );
}
