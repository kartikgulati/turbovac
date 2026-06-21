"use client";

import { Zap } from "lucide-react";

export function FloatingCta() {
  return (
    <a
      href="#quote"
      className="fixed bottom-5 left-5 right-5 z-50 flex min-h-13 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 font-black text-slate-950 shadow-[0_0_30px_rgba(32,211,255,0.5)] md:hidden"
    >
      Get Free Quote <Zap className="h-4 w-4" />
    </a>
  );
}
