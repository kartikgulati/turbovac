"use client";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Factory,
  Fan,
  Gauge,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  TimerReset,
  Truck,
  Wind,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Process", "process"],
  ["Reviews", "testimonials"],
  ["Quote", "quote"],
];

const services = [
  {
    title: "Commercial Duct Cleaning",
    icon: Building2,
    copy: "Cleaner air and better airflow for offices, retail spaces, clinics, and multi-unit properties.",
  },
  {
    title: "Residential Duct Cleaning",
    icon: Home,
    copy: "Whole-home duct cleaning that helps reduce dust buildup, allergens, and stale indoor air.",
  },
  {
    title: "Industrial Duct Cleaning",
    icon: Factory,
    copy: "Heavy-duty HVAC cleaning for warehouses, plants, workshops, and high-demand facilities.",
  },
  {
    title: "Dryer Vent Cleaning",
    icon: Fan,
    copy: "Remove lint restrictions, improve dryer performance, and reduce fire-risk conditions.",
  },
];

const features = [
  ["Certified Technicians", BadgeCheck],
  ["Affordable Pricing", Gauge],
  ["Fast Response", TimerReset],
  ["Advanced Equipment", Wrench],
  ["Improved Air Quality", Wind],
  ["Satisfaction Guaranteed", ShieldCheck],
];

const process = [
  ["Inspection", "We assess vents, returns, airflow, and access points before work begins."],
  ["Cleaning", "Negative-air systems and agitation tools remove built-up dust and debris."],
  ["Sanitization", "Targeted sanitizing options help neutralize lingering odors and contaminants."],
  ["Final Quality Check", "We verify system cleanliness, airflow, and jobsite condition before leaving."],
];

const testimonials = [
  {
    quote:
      "TurboVac handled our office building after hours and left the system spotless. The team was organized, quiet, and professional.",
    name: "Priya M.",
    role: "Property Manager",
  },
  {
    quote:
      "The difference in airflow was immediate. Booking was easy, pricing was clear, and the technicians explained every step.",
    name: "Daniel R.",
    role: "Homeowner",
  },
  {
    quote:
      "We needed dryer vent service across multiple units. TurboVac responded quickly and documented the work properly.",
    name: "Alicia T.",
    role: "Operations Lead",
  },
];

const faqs = [
  [
    "How often should ducts be cleaned?",
    "Most homes and businesses benefit from duct cleaning every 3 to 5 years. Renovations, pets, allergy concerns, or heavy dust can make earlier service worthwhile.",
  ],
  [
    "Do you provide commercial quotes?",
    "Yes. TurboVac quotes offices, retail spaces, industrial buildings, multi-unit properties, and specialty facilities after a quick scope review.",
  ],
  [
    "How long does service take?",
    "A typical home takes a few hours. Commercial and industrial timing depends on system size, access, and whether work needs to be staged after hours.",
  ],
  [
    "Is dryer vent cleaning important?",
    "Yes. Restricted dryer vents can increase drying time, energy use, and fire risk. Regular cleaning keeps the vent path clear.",
  ],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Section({
  id,
  eyebrow,
  title,
  children,
  className,
  dark = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
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

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 70;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.round((value * frame) / total));
      if (frame >= total) window.clearInterval(timer);
    }, 18);
    return () => window.clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950",
        variant === "primary"
          ? "bg-cyan-400 text-slate-950 shadow-[0_0_38px_rgba(32,211,255,0.38)] hover:bg-white"
          : "border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:border-cyan-300/70 hover:bg-white/16",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function Navbar() {
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
          <a href="#top" className="flex items-center gap-3" aria-label="TurboVac home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_24px_rgba(32,211,255,0.45)]">
              <Wind className="h-5 w-5" />
            </span>
            <span className="text-lg font-black">TurboVac</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="tel:+14165550198"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 md:inline-flex"
          >
            Call Now
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
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
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

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 160]);

  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden bg-slate-950 px-5 pb-16 pt-32 text-white sm:px-8 lg:px-10">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center opacity-40"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(32,211,255,0.32),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.94),rgba(15,23,42,0.72),rgba(2,6,23,0.55))]" />
      <div className="industrial-grid absolute inset-0 opacity-40" />
      <motion.div
        aria-hidden
        className="absolute right-[8%] top-32 h-52 w-52 rounded-full bg-cyan-400/18 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl"
        >
          <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Certified duct cleaning for healthier buildings
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-balance text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Professional Duct Cleaning Services You Can Trust
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            TurboVac improves airflow, reduces dust, and restores cleaner indoor air with commercial, residential, industrial, and dryer vent cleaning services.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#quote">Get Free Quote</ButtonLink>
            <ButtonLink href="tel:+14165550198" variant="secondary">
              <Phone className="h-4 w-4" />
              Call Now
            </ButtonLink>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["24h", "Fast response"],
              ["4.9/5", "Client rating"],
              ["100%", "Quote clarity"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-cyan-200">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase text-slate-300">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <Reveal delay={0.25} className="hidden lg:block">
          <div className="glass relative overflow-hidden rounded-[2rem] p-5">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center" />
            <div className="absolute bottom-9 left-9 right-9 rounded-3xl border border-white/16 bg-slate-950/70 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <Truck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-black">Modern Equipment</p>
                  <p className="text-sm text-slate-300">Negative-air cleaning systems</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About TurboVac" title="Cleaner HVAC systems, clearer expectations.">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
            <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=85')] bg-cover bg-center" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-8 text-slate-600">
            TurboVac is built for property owners, homeowners, and facility teams that need reliable scheduling, careful work, and measurable indoor-air improvements. Certified technicians use modern equipment to clean ductwork, returns, vents, and dryer exhaust paths without disrupting your space.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              [12, "+", "Years Experience"],
              [4200, "+", "Projects Completed"],
              [98, "%", "Customer Satisfaction"],
            ].map(([value, suffix, label]) => (
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

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Duct and vent cleaning for every property type." className="bg-slate-950 text-white" dark>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                className="group h-full rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 transition hover:border-cyan-300/50"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-[0_0_28px_rgba(32,211,255,0.34)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-4 min-h-24 leading-7 text-slate-300">{service.copy}</p>
                <a href="#quote" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-200">
                  Request service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function WhyChoose() {
  return (
    <Section id="why" eyebrow="Why Choose TurboVac" title="Premium service standards without complicated booking.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(([label, Icon], index) => (
          <Reveal key={label as string} delay={index * 0.04}>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex h-full items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
                <Icon className="h-6 w-6" />
              </span>
              <p className="text-lg font-black text-slate-950">{label as string}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" eyebrow="Our Process" title="A precise four-step cleaning workflow." className="bg-slate-100">
      <div className="relative grid gap-5 lg:grid-cols-4">
        {process.map(([title, copy], index) => (
          <Reveal key={title} delay={index * 0.08}>
            <div className="relative h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80">
              <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950">
                {index + 1}
              </span>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function BeforeAfter() {
  const [position, setPosition] = useState(52);

  return (
    <Section id="results" eyebrow="Before / After" title="See the difference professional cleaning can make.">
      <Reveal>
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl">
            <div className="aspect-[16/9] bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center opacity-80" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center" />
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

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Trusted by homeowners and facility teams." className="bg-slate-950 text-white" dark>
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl sm:p-10">
          <div className="mb-6 flex gap-1 text-cyan-300">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-balance text-2xl font-bold leading-10 text-white">
                “{testimonials[active].quote}”
              </p>
              <div className="mt-8">
                <p className="font-black">{testimonials[active].name}</p>
                <p className="text-sm text-slate-400">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setActive(index)}
                className={cn("h-2.5 rounded-full transition-all", active === index ? "w-10 bg-cyan-300" : "w-2.5 bg-white/25")}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function QuoteForm() {
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
              Need urgent dryer vent cleaning or after-hours commercial service? Call our response line and a TurboVac coordinator will help scope the job.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                [Phone, "(416) 555-0198", "Call or text"],
                [Mail, "quotes@turbovac.com", "Quote requests"],
                [Clock3, "Mon-Sat 7:00 AM - 8:00 PM", "Business hours"],
                [MapPin, "Serving commercial and residential clients", "Service area"],
              ].map(([Icon, title, label]) => (
                <div key={String(title)} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-black">{String(title)}</p>
                    <p className="text-sm text-slate-400">{String(label)}</p>
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
              <Select label="Property Type" name="property" error={errors.property} options={["Residential", "Commercial", "Industrial", "Multi-unit"]} />
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

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-black text-slate-800">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100",
          error ? "border-red-300" : "border-slate-200",
        )}
      />
      {error ? <p className="mt-1 text-sm font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  error,
  className,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-black text-slate-800">{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100",
          error ? "border-red-300" : "border-slate-200",
        )}
      >
        <option value="" disabled>Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error ? <p className="mt-1 text-sm font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}

function FAQ() {
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

function MapPlaceholder() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl">
        <div className="industrial-grid flex min-h-80 items-center justify-center p-8 text-center text-white">
          <div>
            <MapPin className="mx-auto mb-4 h-10 w-10 text-cyan-300" />
            <p className="text-2xl font-black">Google Maps Embed Placeholder</p>
            <p className="mt-3 max-w-xl text-slate-300">
              Add the verified service-area map iframe here when the business address or coverage area is finalized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
              <Wind className="h-5 w-5" />
            </span>
            <span className="text-xl font-black">TurboVac</span>
          </div>
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Professional duct cleaning for commercial, residential, industrial, and dryer vent systems.
          </p>
        </div>
        <div>
          <p className="mb-4 font-black">Quick Navigation</p>
          <div className="grid gap-2">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-slate-400 transition hover:text-cyan-200">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-black">Contact</p>
          <div className="grid gap-2 text-slate-400">
            <a href="tel:+14165550198" className="hover:text-cyan-200">(416) 555-0198</a>
            <a href="mailto:quotes@turbovac.com" className="hover:text-cyan-200">quotes@turbovac.com</a>
            <div className="mt-3 flex gap-3">
              {["in", "f", "x"].map((label) => (
                <a key={label} href="#" aria-label={`TurboVac social link ${label}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-black text-white transition hover:bg-cyan-400 hover:text-slate-950">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 TurboVac. All rights reserved.</p>
        <p>Skiper UI-inspired motion primitives. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}

function LoadingSkeleton() {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950 text-white">
      <div className="w-full max-w-sm px-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-12 w-12 animate-pulse rounded-full bg-cyan-300" />
          <div className="h-4 flex-1 animate-pulse rounded-full bg-white/20" />
        </div>
        <div className="space-y-3">
          <div className="h-3 animate-pulse rounded-full bg-white/15" />
          <div className="h-3 w-4/5 animate-pulse rounded-full bg-white/15" />
          <div className="h-3 w-3/5 animate-pulse rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

export function TurboVacSite() {
  const [loading, setLoading] = useState(true);
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 23) % 100}%`,
        delay: index * 0.35,
      })),
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading ? <LoadingSkeleton /> : null}</AnimatePresence>
      <div className="relative overflow-hidden bg-[#f8fbff]">
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/45"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -24, 0], opacity: [0.15, 0.65, 0.15] }}
              transition={{ duration: 5 + (particle.id % 4), delay: particle.delay, repeat: Infinity }}
            />
          ))}
        </div>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <WhyChoose />
          <Process />
          <BeforeAfter />
          <Testimonials />
          <QuoteForm />
          <FAQ />
          <MapPlaceholder />
        </main>
        <Footer />
        <a
          href="#quote"
          className="fixed bottom-5 left-5 right-5 z-50 flex min-h-13 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 font-black text-slate-950 shadow-[0_0_30px_rgba(32,211,255,0.5)] md:hidden"
        >
          Get Free Quote <Zap className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
