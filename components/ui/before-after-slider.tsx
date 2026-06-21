"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import afterImage from "@/components/assets/after.jpeg";
import beforeImage from "@/components/assets/before.jpeg";

type BeforeAfterSliderProps = {
  ariaLabel: string;
  size?: "sm" | "md";
  rounded?: "md" | "lg";
  aspect?: "4/3" | "16/9";
};

export function BeforeAfterSlider({
  ariaLabel,
  size = "md",
  rounded = "lg",
  aspect = "16/9",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-slate-950",
        rounded === "lg" ? "rounded-[2rem] border border-slate-200" : "rounded-[1.75rem]",
      )}
    >
      <div
        className="bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${beforeImage.src})`, aspectRatio: aspect.replace("/", " / ") }}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage.src})` }}
        />
      </div>
      <div
        className={cn(
          "absolute inset-y-0 z-10 w-1 bg-cyan-300",
          size === "sm" ? "shadow-[0_0_20px_rgba(32,211,255,0.9)]" : "shadow-[0_0_28px_rgba(32,211,255,0.9)]",
        )}
        style={{ left: `${position}%` }}
      />
      <input
        aria-label={ariaLabel}
        type="range"
        min="15"
        max="85"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className={cn(
          "absolute z-20 accent-cyan-300",
          size === "sm" ? "inset-x-4 bottom-4" : "inset-x-8 bottom-8",
        )}
      />
      <span
        className={cn(
          "absolute left-4 top-4 rounded-full bg-slate-950/75 font-black text-white backdrop-blur",
          size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm",
        )}
      >
        Cleaned
      </span>
      <span
        className={cn(
          "absolute right-4 top-4 rounded-full bg-slate-950/75 font-black text-white backdrop-blur",
          size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm",
        )}
      >
        Before
      </span>
    </div>
  );
}
