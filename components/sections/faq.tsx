"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { faqs } from "@/lib/site-data";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" eyebrow="FAQ" title="Clear answers before you book.">
      <div className="mx-auto max-w-4xl divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/80">
        {faqs.map(([question, answer], index) => (
          <div key={question} className="p-5 sm:p-6">
            <button
              type="button"
              onClick={() => setOpen(open === index ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 text-left text-lg font-black text-slate-950"
              aria-expanded={open === index}
            >
              {question}
              <ChevronDown className={cn("h-5 w-5 shrink-0 transition", open === index && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {open === index ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 leading-7 text-slate-600">{answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
