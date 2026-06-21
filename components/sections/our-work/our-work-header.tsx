"use client";

import { Phone, Wind } from "lucide-react";

export function OurWorkHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/70 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="TurboVac home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_24px_rgba(32,211,255,0.45)]">
            <Wind className="h-5 w-5" />
          </span>
          <span className="text-lg font-black">TurboVac</span>
        </a>
        <a
          href="tel:+14165550198"
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white transition hover:bg-cyan-500 hover:text-slate-950"
        >
          <Phone className="h-4 w-4" /> Call (416) 555-0198
        </a>
      </div>
    </header>
  );
}
