"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          VibeShare
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-pink-400">Home</Link>
          <Link href="/discover" className="hover:text-pink-400">Discover</Link>
          <Link href="/upload" className="hover:text-pink-400">Upload</Link>
          <Link href="/dashboard" className="hover:text-pink-400">Dashboard</Link>
        </nav>

        {/* Auth section */}
        <div>
          {!session ? (
            <button
              onClick={() => signIn()}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="hover:text-pink-400">
                {session.user?.email}
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
