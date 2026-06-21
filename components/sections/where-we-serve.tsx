"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
  comingSoonProvinces,
  serviceAreaCities,
  serviceStatusStyles,
  unavailableAreas,
  type ServiceAreaStatus,
} from "@/lib/site-data";

const statusOrder: ReadonlyArray<ServiceAreaStatus> = ["available", "coming soon", "not available"];

const groupedServiceAreas = [
  ["Available Ontario Cities", serviceAreaCities],
  ["Coming Soon Provinces", comingSoonProvinces],
  ["Unavailable Areas", unavailableAreas],
] as const;

export function WhereWeServe() {
  return (
    <Section id="service-area" eyebrow="Where We Serve" title="Ontario cities available now." className="scroll-mt-36 bg-slate-100">
      <div className="grid gap-6 items-stretch lg:grid-cols-2">
        <Reveal>
          <div className="h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
            <iframe
              title="Google map of Ontario"
              src="https://www.google.com/maps?q=Ontario,%20Canada&z=5&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[540/614] w-full border-0"
            />
            <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 bg-white/85 px-5 py-4">
              {statusOrder.map((status) => {
                const style = serviceStatusStyles[status];
                const count = status === "available" ? serviceAreaCities.length : status === "coming soon" ? comingSoonProvinces.length : unavailableAreas.length;
                return (
                  <div key={status} className="inline-flex items-center gap-2 text-xs font-black text-slate-700">
                    <span className={cn("h-2.5 w-2.5 rounded-full", style.dot)} />
                    <span>{style.label}</span>
                    <span className="text-slate-400">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80">
            <div className="flex items-start justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-black text-slate-950">Our Service Areas</h3>
                  <p className="text-sm font-semibold text-slate-500">Ontario cities are available. Other provinces are coming soon.</p>
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                {serviceAreaCities.length} cities
              </span>
            </div>
            <div className="mt-6 max-h-[560px] overflow-y-auto pr-2">
              <div className="grid gap-6">
                {groupedServiceAreas.map(([label, areas]) => {
                  const status = areas[0]?.status ?? "coming soon";
                  const groupStyle = serviceStatusStyles[status];

                  return (
                    <div key={label}>
                      <div className="mb-3 flex items-center gap-2">
                        <span className={cn("h-2.5 w-2.5 rounded-full", groupStyle.dot)} />
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
                        <span className="text-xs font-bold text-slate-400">{areas.length}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {areas.map((area) => {
                          const style = serviceStatusStyles[area.status];
                          return (
                            <span
                              key={area.name}
                              className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black", style.border, style.bg, style.text)}
                            >
                              <span className={cn("h-2 w-2 rounded-full", style.dot)} />
                              {area.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-xs font-semibold leading-5 text-slate-400">
                TurboVac service is available across listed Ontario cities. Canadian provinces outside Ontario are coming soon.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
