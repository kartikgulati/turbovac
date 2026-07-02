"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, Phone, Wind, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

const PHONE_NUMBER = "(416) 555-0198";
const PHONE_HREF = "tel:+14165550198";

const navHref = (id: string, external: boolean) => {
  if (external) return id;
  if (id === "top") return "/#top";
  return `/#${id}`;
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-cyan-400 shadow-[0_0_18px_rgba(32,211,255,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-slate-950/58 px-4 py-3 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-2xl">
          <a href="/" className="flex items-center gap-3" aria-label="TurboVac home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_24px_rgba(32,211,255,0.45)]">
              <Wind className="h-5 w-5" />
            </span>
            <span className="text-lg font-black">TurboVac</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(([label, id, external]) => (
              <a
                key={id}
                href={navHref(id, external)}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 md:inline-flex"
          >
            <Phone className="h-4 w-4" /> {PHONE_NUMBER}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl border border-white/15 bg-slate-950/88 p-4 text-white backdrop-blur-2xl md:hidden"
            >
              {navItems.map(([label, id, external]) => (
                <a
                  key={id}
                  href={navHref(id, external)}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="rounded-2xl px-4 py-3 font-semibold hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
