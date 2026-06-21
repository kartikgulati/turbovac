"use client";

import { Reveal } from "@/components/ui/reveal";

export function OurWorkHero() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-cyan-600">Our Work</p>
          <h1 className="text-balance text-4xl font-black sm:text-6xl">Real results from real Ontario properties.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Drag the slider on any project to see the difference a professional cleaning makes. Each job is documented from arrival to final quality check.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
