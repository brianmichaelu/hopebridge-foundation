import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Clock,
  HandHeart,
} from "lucide-react";

const contactCards = [
  {
    label: "Email",
    value: "brianmichaelu@gmail.com",
    icon: Mail,
    href: "mailto:brianmichaelu@gmail.com",
  },
  {
    label: "Phone / WhatsApp",
    value: "+255 689 824 682",
    icon: Phone,
    href: "https://wa.me/255689824682",
  },
  {
    label: "Location",
    value: "Dar es Salaam, Tanzania",
    icon: MapPin,
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-cream px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="container-width">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Contact
            </span>

            <h1 className="mt-4 text-5xl font-black leading-tight text-navy lg:text-6xl">
              Talk to HopeBridge Foundation
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Reach out for donation questions, volunteer applications,
              partnerships, project support, or general NGO inquiries.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-coral">
                      <Icon size={24} />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 font-bold text-navy">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-[2rem] bg-forest p-6 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-navy">
                <HandHeart size={26} />
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Let’s work together for community impact.
              </h2>

              <p className="mt-3 leading-7 text-emerald-50/80">
                Whether you want to donate, volunteer, partner, or request more
                information, our team is ready to help.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-100 lg:p-8">
            <div className="mb-7">
              <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
                Send a Message
              </span>

              <h2 className="mt-3 text-3xl font-black text-navy">
                How can we help?
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Fill out the form below and the team can follow up with you.
              </p>
            </div>

            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-coral"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-coral"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-coral"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-coral"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={7}
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-coral"
              />

              <button type="button" className="btn-primary w-fit">
                Send Message <Send className="ml-2" size={18} />
              </button>

              <div className="grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 text-forest" size={20} />
                  <p className="text-sm leading-6 text-slate-600">
                    For quick support, contact us directly on WhatsApp.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 text-forest" size={20} />
                  <p className="text-sm leading-6 text-slate-600">
                    We aim to respond to inquiries as soon as possible.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
                Visit / Location
              </span>

              <h2 className="mt-3 text-3xl font-black text-navy">
                Based in Dar es Salaam, Tanzania
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                This section can be connected to Google Maps for a live NGO
                office, project location, or community center.
              </p>
            </div>

            <div className="flex min-h-[220px] items-center justify-center rounded-[1.5rem] bg-cream text-center">
              <div>
                <MapPin className="mx-auto text-coral" size={38} />
                <p className="mt-3 text-xl font-black text-navy">
                  Dar es Salaam, Tanzania
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Map embed can be added here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
