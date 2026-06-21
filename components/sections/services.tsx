"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Duct and vent cleaning for every property type." className="bg-slate-950 text-white" dark>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative h-full rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 transition hover:border-cyan-300/50"
              >
                {service.unavailable ? (
                  <span className="absolute right-6 top-6 rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-red-500/20">
                    Unavailable
                  </span>
                ) : null}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-[0_0_28px_rgba(32,211,255,0.34)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-4 min-h-24 leading-7 text-slate-300">{service.copy}</p>
                <a href="#quote" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-200">
                  Request service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
