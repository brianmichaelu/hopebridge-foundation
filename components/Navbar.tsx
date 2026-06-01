"use client";

import Link from "next/link";
import { ChevronDown, HeartHandshake, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/causes", label: "Causes" },
  { href: "/impact", label: "Impact" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" }
];

const causeLinks = [
  "Feed the Hungry",
  "Education",
  "Healthcare",
  "Clean Water",
  "Women & Girls",
  "Elderly Support"
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 backdrop-blur-xl">
      <nav className="container-width flex items-center justify-between px-5 py-4 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-white">
            <HeartHandshake size={24} />
          </span>
          <span>
            <span className="block text-lg font-black leading-5 text-forest">
              HopeBridge
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Foundation
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === "Causes" ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-bold text-slate-700 transition hover:text-coral"
                >
                  Causes <ChevronDown size={16} />
                </Link>
                <div className="invisible absolute left-1/2 top-8 w-[520px] -translate-x-1/2 rounded-3xl border border-slate-100 bg-white p-5 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-3">
                    {causeLinks.map((item) => (
                      <Link
                        key={item}
                        href="/causes"
                        className="rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-forest hover:text-white"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-700 transition hover:text-coral"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/donate" className="btn-primary">
            Donate Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl bg-forest p-3 text-white lg:hidden"
          aria-label="Open menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-cream px-4 py-3 text-sm font-bold text-slate-800"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
