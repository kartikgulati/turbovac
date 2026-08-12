"use client";

import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function ResultsCta() {
  return (
    <Reveal className="mt-16">
      <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Want results like these?</p>
            <h2 className="mt-3 text-balance text-3xl font-black sm:text-4xl">Book a free quote and we will scope the job on-site.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Same-day quotes for most residential jobs. Commercial and multi-unit properties scheduled within 48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/#quote">Get Free Quote</ButtonLink>
            <a
              href="tel:+14165550198"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white backdrop-blur-xl transition hover:border-cyan-300/70"
            >
              <Phone className="h-4 w-4" /> Call +1 (437) 439-6660
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
