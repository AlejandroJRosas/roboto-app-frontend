import React from 'react';
import { Video } from 'lucide-react';

interface VideoFeedProps {
  turboMode?: boolean;
}

export const VideoFeed = ({ turboMode = false }: VideoFeedProps) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 transition-all duration-300 ${
      turboMode ? 'border-2 border-yellow-400' : ''
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <Video className={`w-5 h-5 md:w-6 md:h-6 ${
          turboMode ? 'text-yellow-400' : 'text-blue-400'
        }`} />
        <h2 className="text-lg md:text-xl font-semibold">Camera Feed</h2>
      </div>
      <div className={`aspect-video bg-black rounded-lg flex items-center justify-center overflow-hidden ${
        turboMode ? 'animate-pulse' : ''
      }`}>
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
          alt="Robot camera feed"
          className={`rounded-lg w-full h-full object-cover transition-all duration-300 ${
            turboMode ? 'scale-110 saturate-150 contrast-125' : ''
          }`}
        />
      </div>
    </div>
  );
};