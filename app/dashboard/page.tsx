"use client";

import { getVideos } from "@/lib/videos";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    setVideos(getVideos());
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">All Uploaded Videos</h1>
      {videos.length === 0 && <p>No videos uploaded yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-zinc-900 rounded-xl p-4">
            <video src={video.fileUrl} controls className="w-full rounded-lg mb-2" />
            <h2 className="font-semibold">{video.title}</h2>
            <p className="text-sm text-zinc-400">{video.description}</p>
            <p className="text-xs mt-2">By: {video.uploadedBy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
