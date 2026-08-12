"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clock3, LucideIcon, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Field, Select } from "@/components/ui/form-fields";
import { services } from "@/lib/site-data";

type ContactRow = readonly [LucideIcon, string, string];

const contactInfo: ReadonlyArray<ContactRow> = [
  [Phone, "(437) 439-6660", "Call or text"],
  [Mail, "rajdhillongg@gmail.com", "Quote requests"],
  [Clock3, "Mon-Sun 7:00 AM - 8:00 PM", "Business hours"],
  [MapPin, "Serving residential clients only for now", "Service area"],
];

const propertyTypes = ["Residential", "Commercial", "Industrial", "Multi-unit"];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};
    ["name", "email", "phone", "property", "service"].forEach((field) => {
      if (!String(form.get(field) || "").trim()) nextErrors[field] = "Required";
    });
    const email = String(form.get("email") || "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
      window.setTimeout(() => setSubmitted(false), 5000);
    }
  }

  return (
    <Section id="quote" eyebrow="Free Quote" title="Tell us what needs cleaning. We will handle the rest." className="bg-slate-100">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="h-full rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <p className="text-2xl font-black">Emergency and priority service</p>
            <p className="mt-4 leading-7 text-slate-300">
              Need urgent duct cleaning or after-hours commercial service? Call our response line and a TurboVac coordinator will help scope the job.
            </p>
            <div className="mt-8 grid gap-4">
              {contactInfo.map(([Icon, title, label]) => (
                <div key={title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-black">{title}</p>
                    <p className="text-sm text-slate-400">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/50 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
              <Select label="Property Type" name="property" error={errors.property} options={propertyTypes as unknown as string[]} />
              <Select label="Service Needed" name="service" error={errors.service} options={services.map((item) => item.title)} className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-black text-slate-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your property, preferred timing, or access details."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 font-black text-white shadow-[0_18px_50px_rgba(15,23,42,0.25)] transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 sm:w-auto"
            >
              Send Quote Request <Send className="h-4 w-4" />
            </motion.button>
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Quote request received. TurboVac will follow up shortly.
                </motion.div>
              ) : null}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
