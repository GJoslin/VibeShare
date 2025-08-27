"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "lucide-react";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black">
      {/* Logo / Brand */}
      <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        VibeShare
      </Link>

      {/* Search bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* Upload button */}
        <Link
          href="/upload"
          className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-medium transition"
        >
          Upload
        </Link>

        {/* Auth section */}
        {!session ? (
          // Not logged in → show Login
          <Link
            href="/auth"
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition"
          >
            Login / Sign Up
          </Link>
        ) : (
          // Logged in → show Profile + Logout
          <div className="flex items-center gap-3">
            <Link
              href="/profile"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <User className="w-5 h-5" />
              <span>{session.user?.name}</span>
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
