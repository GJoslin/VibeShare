'use client';

import Image from 'next/image';

import { Play, Heart, MessageCircle, Share2, UserPlus, UserMinus, ChevronDown, ChevronUp } from 'lucide-react';

import { useState } from 'react';

 

export type Comment = { id: string; user: string; text: string };

export type Video = {

  id: string;

  title: string;

  description: string;

  src: string; // demo placeholder

  thumbnail: string;

  likes: number;

  comments: Comment[];

  shares: number;

  user: { name: string; avatar: string; isFollowing?: boolean };

};

 

export function VideoCard({ video }: { video: Video }) {

  const [liked, setLiked] = useState(false);

  const [likeCount, setLikeCount] = useState(video.likes);

  const [following, setFollowing] = useState(!!video.user.isFollowing);

  const [expanded, setExpanded] = useState(false);

  const [comments, setComments] = useState<Comment[]>(video.comments);

  const [input, setInput] = useState('');

 

  const toggleLike = () => {

    setLiked((v) => !v);

    setLikeCount((c) => (liked ? c - 1 : c + 1));

  };

 

  const toggleFollow = () => setFollowing((f) => !f);

 

  const addComment = (e: React.FormEvent) => {

    e.preventDefault();

    if (!input.trim()) return;

    setComments((prev) => [{ id: Math.random().toString(36).slice(2), user: 'You', text: input.trim() }, ...prev]);

    setInput('');

  };

 

  return (

    <div className="card overflow-hidden">

      <div className="relative aspect-[9/16]">

        <Image src={video.thumbnail} alt={video.title} fill className="object-cover"/>

        <button className="absolute bottom-3 left-3 icon-btn"><Play className="h-5 w-5"/></button>

        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur px-2 py-1 rounded-xl text-xs">{video.title}</div>

      </div>

 

      <div className="p-4 space-y-3">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Image src={video.user.avatar} alt={video.user.name} width={40} height={40} className="rounded-full"/>

            <div>

              <div className="font-semibold leading-tight">{video.user.name}</div>

              <p className="text-xs text-zinc-400 max-w-[60ch]">{video.description}</p>

            </div>

          </div>

          <button onClick={toggleFollow} className={`btn ${following ? 'btn-ghost' : 'btn-primary'}`}>

            {following ? <UserMinus className="h-4 w-4 mr-2"/> : <UserPlus className="h-4 w-4 mr-2"/>}

            {following ? 'Following' : 'Follow'}

          </button>

        </div>

 

        <div className="flex items-center gap-3">

          <button onClick={toggleLike} className={`icon-btn ${liked ? 'bg-red-600/20 border-red-500/40' : ''}`}>

            <Heart className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : ''}`}/>

          </button>

          <span className="text-sm text-zinc-300">{likeCount}</span>

 

          <div className="ml-4 flex items-center gap-2">

            <div className="icon-btn"><MessageCircle className="h-5 w-5"/></div>

            <span className="text-sm text-zinc-300">{comments.length}</span>

          </div>

 

          <div className="ml-4 flex items-center gap-2">

            <div className="icon-btn"><Share2 className="h-5 w-5"/></div>

            <span className="text-sm text-zinc-300">{video.shares}</span>

          </div>

        </div>

 

        <button onClick={() => setExpanded((e) => !e)} className="text-sm text-zinc-300 flex items-center">

          {expanded ? <ChevronUp className="h-4 w-4 mr-1"/> : <ChevronDown className="h-4 w-4 mr-1"/>}

          {expanded ? 'Hide' : 'Show'} comments

        </button>

 

        {expanded && (

          <div className="mt-2 space-y-3">

            <form onSubmit={addComment} className="flex items-center gap-2">

              <input className="input" placeholder="Add a comment..." value={input} onChange={(e)=>setInput(e.target.value)} />

              <button className="btn-ghost">Post</button>

            </form>

            <div className="space-y-2">

              {comments.map((c) => (

                <div key={c.id} className="flex items-start gap-2">

                  <div className="h-8 w-8 rounded-full bg-zinc-800 grid place-items-center text-xs">{c.user[0]}</div>

                  <div>

                    <div className="text-sm font-medium">{c.user}</div>

                    <div className="text-sm text-zinc-300">{c.text}</div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>

  );

}