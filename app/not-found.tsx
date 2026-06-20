import { Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-zinc-800">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 text-blue-500" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-zinc-400 mb-8">
          Halaman yang kamu cari tidak ditemukan. Mungkin sudah dipindahkan atau tidak pernah ada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            Kembali ke Home
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 border border-zinc-700 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Lihat Projects
          </Link>
        </div>
      </div>
    </div>
  );
}