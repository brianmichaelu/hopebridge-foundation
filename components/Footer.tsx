import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/causes", label: "Causes" },
  { href: "/donate", label: "Donate" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="bg-[#052e24] text-white">
      <div className="container-width grid gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <h3 className="text-2xl font-black">HopeBridge Foundation</h3>
          <p className="mt-4 text-sm leading-7 text-emerald-50/80">
            Supporting communities through food, education, healthcare, clean
            water, women empowerment, and elderly care.
          </p>
          <div className="mt-5 flex items-start gap-2 rounded-2xl bg-white/10 p-4 text-xs leading-6 text-emerald-50">
            <ShieldCheck className="mt-1 shrink-0" size={18} />
            <span>
              Secure donation integration can be connected through Stripe, PayPal,
              Flutterwave, Pesapal, DPO, Selcom, or mobile money gateways for a
              live organization.
            </span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-black">Quick Links</h4>
          <div className="grid gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-emerald-50/80 transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-black">Main Causes</h4>
          <div className="grid gap-3 text-sm text-emerald-50/80">
            <span>Feed the Hungry</span>
            <span>Every Child in School</span>
            <span>Safe Water for All</span>
            <span>Women & Girls Empowerment</span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-black">Contact</h4>
          <div className="grid gap-4 text-sm text-emerald-50/80">
            <span className="flex gap-3">
              <Mail size={18} /> brianmichaelu@gmail.com
            </span>
            <span className="flex gap-3">
              <Phone size={18} /> 255689824682
            </span>
            <span className="flex gap-3">
              <MapPin size={18} /> Dar es Salaam, Tanzania
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-emerald-50/70">
        © {new Date().getFullYear()} HopeBridge Foundation. Website by Brian Justo Undiri.
      </div>
    </footer>
  );
}
