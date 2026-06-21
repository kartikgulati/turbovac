"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

export function BeforeAfter() {
  return (
    <Section id="results" eyebrow="Before / After" title="See the difference professional cleaning can make.">
      <Reveal>
        <div className="mx-auto max-w-5xl">
          <BeforeAfterSlider
            ariaLabel="Before and after comparison slider"
            rounded="lg"
            aspect="16/9"
          />
        </div>
      </Reveal>
    </Section>
  );
}
