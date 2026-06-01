"use client";

import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  limit?: number;
};

export default function FAQAccordion({ limit }: Props) {
  const [active, setActive] = useState<number | null>(0);
  const items = typeof limit === "number" ? faqs.slice(0, limit) : faqs;

  return (
    <section className="section-padding bg-cream">
      <div className="container-width">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
            Questions
          </span>
          <h2 className="mt-3 text-4xl font-black text-navy">
            Questions donors often ask
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {items.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div key={faq.question} className="rounded-3xl bg-white p-5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-black text-navy">{faq.question}</span>
                  <ChevronDown
                    className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
