"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function BackgroundParticles() {
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

  return (
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
  );
}
