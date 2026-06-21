"use client";

import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  location: string;
  service: string;
  description: string;
  index: number;
};

export function ProjectCard({ title, location, service, description, index }: ProjectCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -6 }}
        className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
          <BeforeAfterSlider
            ariaLabel={`${title} before and after comparison slider`}
            size="sm"
            rounded="md"
            aspect="4/3"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            {service}
          </div>
          <h3 className="text-xl font-black text-slate-950">{title}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500">{location}</p>
          <p className="mt-4 flex-1 leading-7 text-slate-600">{description}</p>
        </div>
      </motion.article>
    </Reveal>
  );
}
