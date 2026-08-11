"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import heroImage from "@/components/assets/hero-bg-image.png";

const aboutStats = [
  [4, "+", "Years Experience"],
  [50, "+", "Projects Completed"],
  [99, "%", "Customer Satisfaction"],
] as const;

export function About() {
  return (
    <Section id="about" eyebrow="About TurboVac" title="We're Duct Cleaning Experts">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
            <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-8 text-slate-600">
            TurboVac was founded on the belief that cleaner air should be accessible to everyone. With over a decade of experience, our team has served thousands of homes and businesses across Ontario, delivering top-tier duct and vent cleaning services. We combine industry-leading equipment with a customer-first approach to improve indoor air quality, enhance HVAC performance, and create healthier environments for our clients. Our commitment to excellence and transparency has earned us a reputation as trusted experts in the field. <b>Locals for locals</b>, we take pride in helping our community breathe easier, one clean vent at a time.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {aboutStats.map(([value, suffix, label]) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
                <p className="text-4xl font-black text-slate-950">
                  <CountUp value={Number(value)} suffix={String(suffix)} />
                </p>
                <p className="mt-2 text-sm font-bold uppercase text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
