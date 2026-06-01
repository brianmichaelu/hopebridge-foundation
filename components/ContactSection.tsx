"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="section-padding bg-cream">
      <div className="container-width grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
            Contact
          </span>
          <h1 className="mt-3 text-4xl font-black text-navy lg:text-5xl">
            Talk to HopeBridge Foundation
          </h1>
          <p className="mt-5 leading-8 text-slate-600">
            Use this section for NGO inquiries, donation questions, volunteer
            applications, partnerships, and project support.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
              <Mail className="text-coral" /> <span>brianmichaelu@gmail.com</span>
            </div>
            <div className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
              <Phone className="text-coral" /> <span>255689824682</span>
            </div>
            <div className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
              <MapPin className="text-coral" /> <span>Dar es Salaam, Tanzania</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-sm lg:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <input className="input-style" required placeholder="Full name" />
            <input className="input-style" required placeholder="Email address" type="email" />
            <input className="input-style" placeholder="Phone number" />
            <input className="input-style" placeholder="Subject" />
            <textarea className="input-style md:col-span-2" required rows={6} placeholder="Message" />
          </div>
          <button className="btn-primary mt-6" type="submit">
            Send Message <Send className="ml-2" size={18} />
          </button>
          {sent && (
            <p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-forest">
              Demo success: your message has been submitted.
            </p>
          )}
        </form>
      </div>

      <div className="container-width mt-10">
        <div className="flex min-h-[280px] items-center justify-center rounded-[2rem] bg-slate-200 p-8 text-center font-bold text-slate-600">
          Google Map Placeholder — replace this with an embedded map for the live NGO.
        </div>
      </div>
    </section>
  );
}
