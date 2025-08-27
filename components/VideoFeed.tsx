'use client';

import { videos } from '@/lib/sampleData';

import { VideoCard } from './VideoCard';

 

export function VideoFeed() {

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">

      {videos.map((v) => (

        <VideoCard key={v.id} video={v} />

      ))}

    </div>

  );

}