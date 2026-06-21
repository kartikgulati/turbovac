"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyChoose } from "@/components/sections/why-choose";
import { Process } from "@/components/sections/process";
import { BeforeAfter } from "@/components/sections/before-after";
import { QuoteForm } from "@/components/sections/quote-form";
import { WhereWeServe } from "@/components/sections/where-we-serve";
import { FAQ } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/sections/footer";
import { LoadingSkeleton } from "@/components/sections/loading-skeleton";
import { FloatingCta } from "@/components/sections/floating-cta";
import { BackgroundParticles } from "@/components/sections/background-particles";

export function TurboVacSite() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading ? <LoadingSkeleton /> : null}</AnimatePresence>
      <div className="relative overflow-hidden bg-[#f8fbff]">
        <BackgroundParticles />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <WhyChoose />
          <Process />
          <BeforeAfter />
          <QuoteForm />
          <WhereWeServe />
          <FAQ />
          <Testimonials />
        </main>
        <Footer />
        <FloatingCta />
      </div>
    </>
  );
}
