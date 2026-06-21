"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function Section({ id, eyebrow, title, children, className, dark = false }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10", className)}>
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase text-cyan-500">{eyebrow}</p>
          ) : null}
          <h2 className={cn("text-balance text-3xl font-bold sm:text-5xl", dark ? "text-white" : "text-slate-950")}>
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
