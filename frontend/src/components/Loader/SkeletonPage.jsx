export default function SkeletonPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Skeleton */}
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="h-8 w-32 bg-gray-800 animate-pulse rounded" />
            <div className="hidden lg:flex gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-4 w-20 bg-gray-800 animate-pulse rounded"
                />
              ))}
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-6 w-6 bg-gray-800 animate-pulse rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="h-16 w-3/4 bg-gray-800 animate-pulse rounded" />
            <div className="space-y-4">
              <div className="h-4 w-full bg-gray-800 animate-pulse rounded" />
              <div className="h-4 w-5/6 bg-gray-800 animate-pulse rounded" />
              <div className="h-4 w-4/6 bg-gray-800 animate-pulse rounded" />
            </div>
            <div className="h-12 w-40 bg-gray-800 animate-pulse rounded" />
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="h-[400px] w-full bg-gray-800 animate-pulse rounded" />
            <div className="absolute bottom-4 right-4 p-4 w-64 space-y-3">
              <div className="h-6 w-full bg-gray-800 animate-pulse rounded" />
              <div className="h-4 w-24 bg-gray-800 animate-pulse rounded" />
              <div className="h-8 w-32 bg-gray-800 animate-pulse rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-800 animate-pulse rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-800 animate-pulse rounded" />
                  <div className="h-3 w-32 bg-gray-800 animate-pulse rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
