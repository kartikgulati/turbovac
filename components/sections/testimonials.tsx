"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Trusted by homeowners and facility teams." className="bg-slate-950 text-white" dark>
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl sm:p-10">
          <div className="mb-6 flex gap-1 text-cyan-300">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-balance text-2xl font-bold leading-10 text-white">
                “{testimonials[active].quote}”
              </p>
              <div className="mt-8">
                <p className="font-black">{testimonials[active].name}</p>
                <p className="text-sm text-slate-400">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setActive(index)}
                className={cn("h-2.5 rounded-full transition-all", active === index ? "w-10 bg-cyan-300" : "w-2.5 bg-white/25")}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
