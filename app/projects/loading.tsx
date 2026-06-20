import { BentoCard } from "@/components/ui/bento-card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8 md:mb-12">
          <div className="h-8 md:h-10 w-48 bg-zinc-800 rounded-lg animate-pulse mb-4" />
          <div className="h-4 w-96 max-w-full bg-zinc-800/50 rounded animate-pulse" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[...Array(6)].map((_, i) => (
            <BentoCard key={i} className="animate-pulse">
              <div className="h-48 bg-zinc-800 rounded-lg mb-4" />
              <div className="h-6 bg-zinc-800 rounded w-3/4 mb-2" />
              <div className="h-4 bg-zinc-800/50 rounded w-full mb-4" />
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-zinc-800/50 rounded" />
                <div className="h-6 w-20 bg-zinc-800/50 rounded" />
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </div>
  );
}