'use client';

import { useMemo, useState } from 'react';

import { Hash, Music2, Flame, User } from 'lucide-react';

import { videos } from '@/lib/sampleData';

import Image from 'next/image';

 

const categories = ['Dance', 'Comedy', 'Art', 'Travel', 'Cooking', 'Fitness'];

const hashtags = ['#vibes', '#dance', '#lol', '#arttok', '#foodie', '#fit'];

 

export default function DiscoverPage() {

  const [active, setActive] = useState<string>('Trending');

  const filtered = useMemo(() => videos.slice(0, 8), []);

 

  return (

    <div className="space-y-6">

      <div className="card p-4">

        <div className="flex flex-wrap items-center gap-2">

          <button onClick={() => setActive('Trending')} className={`badge ${active==='Trending'?'ring-2 ring-brand-600':''}`}><Flame className="mr-1 h-4 w-4"/>Trending</button>

          {categories.map((c) => (

            <button key={c} onClick={() => setActive(c)} className={`badge ${active===c?'ring-2 ring-brand-600':''}`}>{c}</button>

          ))}

        </div>

      </div>

 

      <div className="card p-4">

        <h2 className="text-lg font-semibold mb-3 flex items-center"><Hash className="mr-2"/>Popular Hashtags</h2>

        <div className="flex flex-wrap gap-2">

          {hashtags.map((h) => (<span key={h} className="badge">{h}</span>))}

        </div>

      </div>

 

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        {filtered.map((v) => (

          <div key={v.id} className="card overflow-hidden">

            <div className="relative aspect-[9/16]">

              <Image src={v.thumbnail} alt={v.title} fill className="object-cover"/>

            </div>

            <div className="p-3">

              <div className="flex items-center gap-2 text-sm text-zinc-300">

                <User className="h-4 w-4"/> {v.user.name}

              </div>

              <p className="mt-1 font-medium">{v.title}</p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}