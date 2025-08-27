"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/users";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState<number>(18);
  const [error, setError] = useState("");
  const router = useRouter();

  // login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (res?.error) setError("Invalid username or password");
    else router.push("/profile");
  };

  // signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(username, email, password, age);
      await signIn("credentials", { redirect: false, username, password });
      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-zinc-900 p-6 rounded-xl border border-zinc-700">
      {/* Tabs */}
      <div className="flex justify-between mb-6">
        <button
          onClick={() => { setMode("login"); setError(""); }}
          className={`w-1/2 py-2 rounded-l-lg ${mode==="login"?"bg-purple-600 text-white":"bg-zinc-800 text-zinc-400"}`}
        >
          Login
        </button>
        <button
          onClick={() => { setMode("signup"); setError(""); }}
          className={`w-1/2 py-2 rounded-r-lg ${mode==="signup"?"bg-purple-600 text-white":"bg-zinc-800 text-zinc-400"}`}
        >
          Sign Up
        </button>
      </div>

      {/* Forms */}
      {mode === "login" ? (
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} className="p-2 rounded bg-zinc-800 border border-zinc-700" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="p-2 rounded bg-zinc-800 border border-zinc-700" />
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded">Login</button>
        </form>
      ) : (
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} className="p-2 rounded bg-zinc-800 border border-zinc-700" />
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-2 rounded bg-zinc-800 border border-zinc-700" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="p-2 rounded bg-zinc-800 border border-zinc-700" />
          <input type="number" placeholder="Age" value={age} onChange={(e)=>setAge(Number(e.target.value))} className="p-2 rounded bg-zinc-800 border border-zinc-700" />
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded">Sign Up</button>
        </form>
      )}
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}
