"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { features } from "@/lib/site-data";

export function WhyChoose() {
  return (
    <Section id="why" eyebrow="TurboVac Offers" title="Premium services without  compromising your pocket.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={index * 0.04}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70"
              >
                <span className="absolute right-6 top-6 rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-red-500/20">
                  {feature.badge}
                </span>
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 shadow-[0_0_28px_rgba(15,23,42,0.18)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-lg font-black text-slate-950">{feature.title}</p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-600">{feature.copy}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
