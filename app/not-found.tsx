import { Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-zinc-800">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-500">?</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-zinc-400 mb-8">
          The page you're looking for doesn't exist. It might have been moved or never existed in the first place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            aria-label="Go back to homepage"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 border border-zinc-700 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
            aria-label="View all projects"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}