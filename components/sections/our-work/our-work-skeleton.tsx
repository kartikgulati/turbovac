const skeletonParticles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 23) % 100}%`,
}));

export function OurWorkSkeleton() {
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
      <div className="pointer-events-none absolute inset-0">
        {skeletonParticles.map((particle) => (
          <span
            key={particle.id}
            className="absolute h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300/40"
            style={{ left: particle.left, top: particle.top }}
          />
        ))}
      </div>
    </div>
  );
}
