// lib/videos.ts

export type Video = {
  id: string;
  title: string;
  url: string;     // local preview URL
  uploader: string;
};

let videos: Video[] = [];

export function addVideo(title: string, url: string, uploader: string) {
  const video = { id: Date.now().toString(), title, url, uploader };
  videos.unshift(video); // newest first
  return video;
}

export function getVideos() {
  return videos;
}
