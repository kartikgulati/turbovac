"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import afterImage from "@/components/assets/after.jpeg";
import beforeImage from "@/components/assets/before.jpeg";

export function BeforeAfter() {
  const [position, setPosition] = useState(52);

  return (
    <Section id="results" eyebrow="Before / After" title="See the difference professional cleaning can make.">
      <Reveal>
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl">
            <div
              className="aspect-[16/9] bg-cover bg-center opacity-80"
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
            <div className="absolute inset-y-0 z-10 w-1 bg-cyan-300 shadow-[0_0_28px_rgba(32,211,255,0.9)]" style={{ left: `${position}%` }} />
            <input
              aria-label="Before and after comparison slider"
              type="range"
              min="15"
              max="85"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="absolute inset-x-8 bottom-8 z-20 accent-cyan-300"
            />
            <span className="absolute left-5 top-5 rounded-full bg-slate-950/75 px-4 py-2 text-sm font-black text-white backdrop-blur">Cleaned</span>
            <span className="absolute right-5 top-5 rounded-full bg-slate-950/75 px-4 py-2 text-sm font-black text-white backdrop-blur">Before</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
