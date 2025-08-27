'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { Home, Compass, Heart, Bookmark, Flame, Music2, Users } from 'lucide-react';

import Image from 'next/image';

 

const nav = [

  { href: '/', label: 'Home', icon: Home },

  { href: '/discover', label: 'Discover', icon: Compass },

  { href: '/liked', label: 'Liked', icon: Heart },

  { href: '/saved', label: 'Saved', icon: Bookmark },

  { href: '/trending', label: 'Trending', icon: Flame },

  { href: '/music', label: 'Music', icon: Music2 },

];

 

const following = Array.from({ length: 8 }).map((_, i) => ({

  id: i + 1,

  name: `Creator ${i + 1}`,

  avatar: `https://i.pravatar.cc/100?img=${i + 10}`,

}));

 

export function Sidebar() {

  const pathname = usePathname();

  return (

    <div className="card h-full p-4 overflow-y-auto">

      <nav className="space-y-1">

        {nav.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link key={item.href} href={item.href}

              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${active ? 'bg-zinc-800 text-white' : 'text-zinc-300 hover:bg-zinc-800/60'}`}

            >

              <Icon className="h-5 w-5"/> {item.label}

            </Link>

          );

        })}

      </nav>

 

      <div className="mt-6">

        <h3 className="text-sm text-zinc-400 font-semibold flex items-center gap-2"><Users className="h-4 w-4"/> Following</h3>

        <div className="mt-3 space-y-2">

          {following.map((u) => (

            <div key={u.id} className="flex items-center gap-3">

              <Image src={u.avatar} alt={u.name} width={36} height={36} className="rounded-full"/>

              <div className="text-sm">{u.name}</div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}