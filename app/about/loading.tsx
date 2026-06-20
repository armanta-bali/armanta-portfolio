export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="w-full max-w-4xl mx-auto">
        {/* Profile Skeleton */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-48 h-48 bg-zinc-800 rounded-full animate-pulse mx-auto md:mx-0" />
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-zinc-800 rounded w-64 animate-pulse" />
            <div className="h-4 bg-zinc-800/50 rounded w-full animate-pulse" />
            <div className="h-4 bg-zinc-800/50 rounded w-3/4 animate-pulse" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 bg-zinc-800 rounded w-48 animate-pulse" />
              <div className="h-4 bg-zinc-800/50 rounded w-full animate-pulse" />
              <div className="h-4 bg-zinc-800/50 rounded w-5/6 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}