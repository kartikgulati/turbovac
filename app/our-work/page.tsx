"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { OurWorkBackground } from "@/components/sections/our-work/our-work-background";
import { OurWorkFooter } from "@/components/sections/our-work/our-work-footer";
import { OurWorkHeader } from "@/components/sections/our-work/our-work-header";
import { OurWorkHero } from "@/components/sections/our-work/our-work-hero";
import { OurWorkSkeleton } from "@/components/sections/our-work/our-work-skeleton";
import { ProjectsGrid } from "@/components/sections/our-work/projects-grid";
import { ResultsCta } from "@/components/sections/our-work/results-cta";

export default function OurWorkPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <AnimatePresence>{loading ? <OurWorkSkeleton /> : null}</AnimatePresence>
      <OurWorkBackground />
      <div className="relative z-10">
        <OurWorkHeader />
        <main>
          <OurWorkHero />
          <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
            <ProjectsGrid />
            <ResultsCta />
          </div>
        </main>
        <OurWorkFooter />
      </div>
    </div>
  );
}
