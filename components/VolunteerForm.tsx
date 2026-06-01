"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function VolunteerForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-sm lg:p-10">
      <h2 className="text-3xl font-black text-navy">Apply to Volunteer</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <input className="input-style" required placeholder="Your name" />
        <input className="input-style" required placeholder="Email address" type="email" />
        <input className="input-style" required placeholder="Phone number" />
        <select className="input-style" defaultValue="Education Support">
          <option>Education Support</option>
          <option>Food Distribution</option>
          <option>Healthcare Outreach</option>
          <option>Fundraising</option>
          <option>Community Visits</option>
        </select>
        <input className="input-style md:col-span-2" placeholder="Availability e.g. weekends, weekdays" />
        <textarea className="input-style md:col-span-2" rows={5} placeholder="Tell us why you want to volunteer" />
      </div>
      <button className="btn-primary mt-6" type="submit">
        Submit Application <Send className="ml-2" size={18} />
      </button>
      {sent && (
        <p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-forest">
          Demo success: your volunteer application has been received.
        </p>
      )}
    </form>
  );
}
