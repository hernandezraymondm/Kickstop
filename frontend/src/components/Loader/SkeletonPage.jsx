import { useState, useEffect } from 'react';

export default function SkeletonPage() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] overflow-clip">
      <header className="max-h-16 col-span-2 z-20 sticky top-0 backdrop-blur-lg shadow-sm lg:px-2 xl:px-[60px]">
        {/* Header Section Skeleton */}
        <header
          className={`border-b p-4 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
          }`}
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div
                  className={`h-8 w-7 animate-pulse rounded ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
                <div
                  className={`h-8 w-32 animate-pulse rounded ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              </div>
              <div className="hidden lg:flex gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-4 w-20 animate-pulse rounded ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-6 w-6 animate-pulse rounded ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>
      </header>

      <aside className="hidden md:block">
        {/* Sidebar Section Skeleton */}
        <div className="fixed top-0 w-20 h-full bg-base-100 flex-col justify-between items-center text-accent-content hidden md:flex">
          <div className="flex flex-col items-center mt-52">
            <ul className="list-none p-0 flex flex-col space-y-32">
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <div className="transform -rotate-90">
                    <div
                      className={`h-6 w-24 animate-pulse rounded ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                      }`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center mb-3 space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`h-8 w-8 animate-pulse rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </aside>

      <main className="col-span-2 lg:col-span-1">
        {/* Hero Section Skeleton */}
        <section className="container mx-auto px-12 py-32">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div
                className={`h-12 w-3/5 animate-pulse rounded ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
              <div
                className={`h-16 w-3/4 animate-pulse rounded ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-4 animate-pulse rounded ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div
                className={`h-12 w-40 animate-pulse rounded ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            </div>

            {/* Right Column */}
            <div className="relative">
              <div
                className={`h-[300px] w-full animate-pulse rounded ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
              <div className="absolute bottom-4 right-4 p-4 w-64 space-y-3">
                <div
                  className={`h-6 w-full animate-pulse rounded ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
                <div
                  className={`h-4 w-24 animate-pulse rounded ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
                <div
                  className={`h-8 w-32 animate-pulse rounded ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section Skeleton */}
        <section
          className={`border-t p-4 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
          }`}
        >
          <div className="container mx-auto px-12 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className={`h-10 w-10 animate-pulse rounded ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  />
                  <div className="space-y-2">
                    <div
                      className={`h-4 w-24 animate-pulse rounded ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                      }`}
                    />
                    <div
                      className={`h-3 w-32 animate-pulse rounded ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
