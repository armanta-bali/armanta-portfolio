"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-zinc-400 mb-8">
          An error occurred while loading the page. Please try again or go back to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            aria-label="Try again to reload the page"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 border border-zinc-700 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
            aria-label="Go back to homepage"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-zinc-900 rounded-lg text-left">
            <p className="text-sm text-zinc-500 mb-2">Error Details:</p>
            <pre className="text-xs text-red-400 overflow-auto">
              {error.message}
            </pre>
            {error.digest && (
              <p className="text-xs text-zinc-600 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}