"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addVideo } from "lib/videos";

export default function UploadPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setError("Please select a video file");
    if (!session) return setError("You must be logged in to upload");

    // create local preview url
    const url = URL.createObjectURL(file);
    addVideo(title, url, session.user?.name || "Anonymous");

    router.push("/"); // redirect to home
  };

  return (
    <div className="max-w-lg mx-auto mt-12 bg-zinc-900 p-6 rounded-xl border border-zinc-700">
      <h1 className="text-xl font-bold mb-4">Upload Video</h1>
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="p-2 rounded bg-zinc-800 border border-zinc-700"
        />
        <input
          type="file"
          accept="video/*"
          onChange={(e)=>setFile(e.target.files?.[0] || null)}
          className="p-2"
        />
        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded">
          Upload
        </button>
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}
