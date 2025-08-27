"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { findUser } from "@/lib/users";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="p-6 text-zinc-400">Loading...</p>;
  if (!session) redirect("/auth");

  // Get user from our mock db
  const user = findUser(session.user?.name || "", session.user?.password || ""); 
  // Since we don’t store password in session, we’ll just fetch by username for demo:
  // Better approach in real app: store user id in session

  return (
    <div className="max-w-md mx-auto mt-12 bg-zinc-900 p-6 rounded-xl border border-zinc-700">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <div className="flex flex-col gap-3 text-zinc-300">
        <div>
          <span className="font-semibold">Username:</span> {session.user?.name}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {user?.email || "N/A"}
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
