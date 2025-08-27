"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { users } from "@/lib/users"; // your mock db file

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="p-6 text-zinc-400">Loading...</p>;
  }
  if (!session) {
    redirect("/auth"); // force login if not logged in
  }

  // Find the full user in mock db (by username or email)
  const user = users.find(
    (u) => u.username === session?.user?.name || u.email === session?.user?.email
  );

  return (
    <div className="max-w-md mx-auto mt-12 bg-zinc-900 p-6 rounded-xl border border-zinc-700">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <div className="flex flex-col gap-3 text-zinc-300">
        <div>
          <span className="font-semibold">Username:</span>{" "}
          {session?.user?.name}
        </div>
        <div>
          <span className="font-semibold">Email:</span>{" "}
          {session?.user?.email || "N/A"}
        </div>
        <div>
          <span className="font-semibold">Age Confirmed:</span>{" "}
          {user?.ageConfirmed ? (
            <span className="text-green-400">Yes ✅</span>
          ) : (
            <span className="text-red-400">No ❌</span>
          )}
        </div>
      </div>
    </div>
  );
}
