"use client";

import { Wind, ArrowRight, Phone } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import afterImage from "@/components/assets/after.jpeg";
import beforeImage from "@/components/assets/before.jpeg";

const projects = [
  {
    title: "Residential Duct Cleaning",
    location: "Toronto, ON",
    service: "Whole-home duct cleaning",
    description: "Restored healthy airflow in a family home after 6 years without service. Removed years of dust and pet dander buildup.",
  },
  {
    title: "Commercial Office Build-Out",
    location: "Mississauga, ON",
    service: "Commercial duct cleaning",
    description: "Cleared construction debris from a 12,000 sq ft office HVAC system ahead of tenant move-in. Air quality verified post-service.",
  },
  {
    title: "Dryer Vent Restoration",
    location: "Hamilton, ON",
    service: "Dryer vent cleaning",
    description: "Cleared a heavily restricted dryer vent that was causing 90+ minute dry cycles. Drying time back to under 40 minutes and fire risk eliminated.",
  },
];

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BeforeAfterCard({ title, location, service, description, index }: {
  title: string;
  location: string;
  service: string;
  description: string;
  index: number;
}) {
  const [position, setPosition] = useState(52);

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -6 }}
        className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url(${beforeImage.src})` }}
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${afterImage.src})` }}
            />
          </div>
          <div
            className="absolute inset-y-0 z-10 w-1 bg-cyan-300 shadow-[0_0_20px_rgba(32,211,255,0.9)]"
            style={{ left: `${position}%` }}
          />
          <input
            aria-label={`${title} before and after comparison slider`}
            type="range"
            min="15"
            max="85"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="absolute inset-x-4 bottom-4 z-20 accent-cyan-300"
          />
          <span className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-black text-white backdrop-blur">Cleaned</span>
          <span className="absolute right-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-black text-white backdrop-blur">Before</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            {service}
          </div>
          <h3 className="text-xl font-black text-slate-950">{title}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500">{location}</p>
          <p className="mt-4 flex-1 leading-7 text-slate-600">{description}</p>
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-700"
          >
            View project details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
}

function PageSkeleton() {
  const particles = Array.from({ length: 14 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    top: `${(index * 23) % 100}%`,
  }));
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950 text-white">
      <div className="w-full max-w-sm px-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-12 w-12 animate-pulse rounded-full bg-cyan-300" />
          <div className="h-4 flex-1 animate-pulse rounded-full bg-white/20" />
        </div>
        <div className="space-y-3">
          <div className="h-3 animate-pulse rounded-full bg-white/15" />
          <div className="h-3 w-4/5 animate-pulse rounded-full bg-white/15" />
          <div className="h-3 w-3/5 animate-pulse rounded-full bg-white/15" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300/40"
            style={{ left: particle.left, top: particle.top }}
          />
        ))}
      </div>
    </div>
  );
}

export default function OurWorkPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <AnimatePresence>{loading ? <PageSkeleton /> : null}</AnimatePresence>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(32,211,255,0.18),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.14),transparent_50%)]" />
      <div className="relative z-10">
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

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-cyan-600">Our Work</p>
              <h1 className="text-balance text-4xl font-black sm:text-6xl">Real results from real Ontario properties.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Drag the slider on any project to see the difference a professional cleaning makes. Each job is documented from arrival to final quality check.
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <BeforeAfterCard key={project.title} {...project} index={index} />
              ))}
            </div>

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
                    <a
                      href="/#quote"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 text-sm font-black text-slate-950 transition hover:bg-white"
                    >
                      Get Free Quote <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="tel:+14165550198"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white backdrop-blur-xl transition hover:border-cyan-300/70"
                    >
                      <Phone className="h-4 w-4" /> Call (416) 555-0198
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
            <p>© 2026 TurboVac. All rights reserved.</p>
            <a href="/" className="font-bold text-slate-700 transition hover:text-cyan-700">Back to home</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
