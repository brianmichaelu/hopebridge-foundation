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
  { href: "/contact", label: "Contact" },
];

const causeLinks = [
  { label: "Feed the Hungry", href: "/causes/feed-the-hungry" },
  { label: "Education", href: "/causes/every-child-in-school" },
  { label: "Healthcare", href: "/causes/primary-healthcare-access" },
  { label: "Clean Water", href: "/causes/safe-water-for-all" },
  { label: "Women & Girls", href: "/causes/women-girls-empowerment" },
  { label: "Elderly Support", href: "/causes/elderly-support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [causesOpen, setCausesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 backdrop-blur-xl">
      <nav className="container-width flex items-center justify-between px-5 py-4 lg:px-12">
        <Link
          href="/"
          onClick={() => {
            setOpen(false);
            setCausesOpen(false);
          }}
          className="flex items-center gap-3"
        >
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
              <div key={link.href} className="relative">
                <button
                  type="button"
                  onClick={() => setCausesOpen((value) => !value)}
                  className="flex items-center gap-1 text-sm font-bold text-slate-700 transition hover:text-coral"
                >
                  Causes
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      causesOpen ? "rotate-180 text-coral" : ""
                    }`}
                  />
                </button>

                {causesOpen && (
                  <div className="absolute left-1/2 top-10 w-[520px] -translate-x-1/2 rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl">
                    <div className="grid grid-cols-2 gap-3">
                      {causeLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setCausesOpen(false)}
                          className="rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-forest hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setCausesOpen(false)}
                className="text-sm font-bold text-slate-700 transition hover:text-coral"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/donate"
            onClick={() => setCausesOpen(false)}
            className="btn-primary"
          >
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
            {navLinks.map((link) =>
              link.label === "Causes" ? (
                <div key={link.href} className="rounded-2xl bg-cream p-3">
                  <Link
                    href="/causes"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-2 py-2 text-sm font-black text-slate-800"
                  >
                    Causes
                  </Link>

                  <div className="mt-2 grid gap-2">
                    {causeLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-cream px-4 py-3 text-sm font-bold text-slate-800"
                >
                  {link.label}
                </Link>
              )
            )}

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
