import type { Video } from '@/components/VideoCard';

 

export const videos: Video[] = [

  {

    id: '1',

    title: 'Urban Dance Groove',

    description: 'Street-style choreography to a viral track. #dance #urban',

    src: '/videos/dance.mp4',

    thumbnail: 'https://images.unsplash.com/photo-1514517220031-65f2f9d2fb45?q=80&w=1200&auto=format&fit=crop',

    likes: 1243,

    comments: [

      { id: 'c1', user: 'Maya', text: 'The energy is insane 🔥' },

      { id: 'c2', user: 'Ken', text: 'Teach us the steps!' }

    ],

    shares: 201,

    user: { name: 'DynaMoves', avatar: 'https://i.pravatar.cc/100?img=24', isFollowing: true }

  },

  {

    id: '2',

    title: 'Sketch-to-Canvas',

    description: 'Watch this 60s speedpaint turn into a neon skyline.',

    src: '/videos/art.mp4',

    thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',

    likes: 987,

    comments: [

      { id: 'c3', user: 'Aria', text: 'Those colors pop!' }

    ],

    shares: 123,

    user: { name: 'NeonCanvas', avatar: 'https://i.pravatar.cc/100?img=33' }

  },

  {

    id: '3',

    title: 'Quick Comedy Bit',

    description: 'POV: You try to cook with roommates. #comedy',

    src: '/videos/comedy.mp4',

    thumbnail: 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1200&auto=format&fit=crop',

    likes: 2120,

    comments: [

      { id: 'c4', user: 'Jay', text: 'Too real 😂' },

      { id: 'c5', user: 'Lena', text: 'I felt this in my soul' }

    ],

    shares: 333,

    user: { name: 'RoommateJokes', avatar: 'https://i.pravatar.cc/100?img=12' }

  },

  {

    id: '4',

    title: 'Mountain Sunrise',

    description: 'Time-lapse from the ridge. #travel #nature',

    src: '/videos/travel.mp4',

    thumbnail: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',

    likes: 1534,

    comments: [

      { id: 'c6', user: 'Nora', text: 'Adding to my bucket list' }

    ],

    shares: 177,

    user: { name: 'TrailSeeker', avatar: 'https://i.pravatar.cc/100?img=45' }

  },

  {

    id: '5',

    title: 'Lo-fi Beat Loop',

    description: '15-second loop to chill/study. #music',

    src: '/videos/music.mp4',

    thumbnail: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',

    likes: 845,

    comments: [],

    shares: 88,

    user: { name: 'BeatCraft', avatar: 'https://i.pravatar.cc/100?img=7' }

  }

];