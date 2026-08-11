"use client";

import { Facebook, Instagram, MessageCircle, Wind } from "lucide-react";
import { navItems } from "@/lib/site-data";

const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
] as const;

export function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
              <Wind className="h-5 w-5" />
            </span>
            <span className="text-xl font-black">TurboVac</span>
          </div>
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Professional duct cleaning for commercial, residential, industrial, and dryer vent systems.
          </p>
        </div>
        <div>
          <p className="mb-4 font-black">Quick Navigation</p>
          <div className="grid gap-2">
            {navItems.map(([label, id, external]) => (
              <a
                key={id}
                href={external ? id : `#${id}`}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-slate-400 transition hover:text-cyan-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-black">Contact</p>
          <div className="grid gap-2 text-slate-400">
            <a href="tel:+14165550198" className="hover:text-cyan-200">(416) 555-0198</a>
            <a href="mailto:quotes@turbovac.com" className="hover:text-cyan-200">quotes@turbovac.com</a>
            <div className="mt-3 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`TurboVac social link ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-400 hover:text-slate-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 TurboVac. All rights reserved.</p>
        <p></p>
      </div>
    </footer>
  );
}
