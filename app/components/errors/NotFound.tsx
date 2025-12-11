import { Link } from 'react-router';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl w-full text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full text-black/30 border-[0.2px] shadow mx-auto">
            <Home className="w-8 h-8 " />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[#0F2542] mb-2">
          Page not found
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          We couldn't find that page. Let's get you back home.
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-[#26A37E] text-white font-sm hover:bg-[#1e8c68] transition"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <button
            onClick={() =>
              window.history.length > 1
                ? window.history.back()
                : (window.location.href = '/')
            }
            className="px-5 py-1 rounded-lg border border-gray-200 bg-white text-gray-700 hover:shadow-sm transition"
          >
            Go Back
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Error 404 — Datawise Africa
        </p>
      </div>
    </main>
  );
}
