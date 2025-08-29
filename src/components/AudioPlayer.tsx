'use client';

import { useState, useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const streamUrl = 'https://stream.zeno.fm/u5v029hqd6quv';

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-bg-medium shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-on-dark">
            <p className="font-bold font-primary">En Vivo</p>
            <p className="text-sm text-on-dark">Stereo 97.9 FM</p>
          </div>
          <div className="flex items-center space-x-4">
            <audio ref={audioRef} src={streamUrl} preload="none" />
            <button
              onClick={togglePlayPause}
              className="bg-primary hover:bg-primary-dark text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
