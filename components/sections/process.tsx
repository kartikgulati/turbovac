"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/site-data";

export function Process() {
  return (
    <Section id="process" eyebrow="Our Process" title="A precise four-step cleaning workflow." className="bg-slate-100">
      <div className="relative grid gap-5 lg:grid-cols-4">
        {process.map(([title, copy], index) => (
          <Reveal key={title} delay={index * 0.08}>
            <div className="relative h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80">
              <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950">
                {index + 1}
              </span>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
