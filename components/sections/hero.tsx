"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Phone, Sparkles, Truck, Wind } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const heroStats = [
  ["24h", "Fast response"],
  ["4.9/5", "Client rating"],
  ["100%", "Quote clarity"],
] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 160]);

  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden bg-slate-950 px-5 pb-16 pt-32 text-white sm:px-8 lg:px-10">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center opacity-40"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(32,211,255,0.32),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.94),rgba(15,23,42,0.72),rgba(2,6,23,0.55))]" />
      <div className="industrial-grid absolute inset-0 opacity-40" />
      <motion.div
        aria-hidden
        className="absolute right-[8%] top-32 h-52 w-52 rounded-full bg-cyan-400/18 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl"
        >
          <motion.p variants={heroFadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Certified duct cleaning for healthier buildings
          </motion.p>
          <motion.h1 variants={heroFadeUp} className="text-balance text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Your house might look clean, but your air ducts are not.
          </motion.h1>
          <motion.p variants={heroFadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            TurboVac improves airflow, reduces dust, and restores cleaner indoor air with commercial, residential, industrial, and dryer vent cleaning services.
          </motion.p>
          <motion.div variants={heroFadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#quote">Get Free Quote</ButtonLink>
            <ButtonLink href="tel:+14165550198" variant="secondary">
              <Phone className="h-4 w-4" />
              Call Now
            </ButtonLink>
          </motion.div>
          <motion.div variants={heroFadeUp} className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {heroStats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-cyan-200">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase text-slate-300">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <Reveal delay={0.25} className="hidden lg:block">
          <div className="glass relative overflow-hidden rounded-[2rem] p-5">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center" />
            <div className="absolute bottom-9 left-9 right-9 rounded-3xl border border-white/16 bg-slate-950/70 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <Truck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-black">Modern Equipment</p>
                  <p className="text-sm text-slate-300">Negative-air cleaning systems</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
