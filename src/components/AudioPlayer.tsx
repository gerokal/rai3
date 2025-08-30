'use client';

import { useEffect, useState, useRef } from 'react';

// Enum para los estados del reproductor
enum PlayerStatus {
  IDLE,
  LOADING,
  PLAYING,
  PAUSED,
  ERROR,
}

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<PlayerStatus>(PlayerStatus.IDLE);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const streamUrl = 'https://stream.zeno.fm/u5v029hqd6quv';

  const togglePlayPause = () => {
    if (status === PlayerStatus.PLAYING) {
      audioRef.current?.pause();
      setStatus(PlayerStatus.PAUSED);
    } else {
      setStatus(PlayerStatus.LOADING);
      audioRef.current?.play().catch(() => setStatus(PlayerStatus.ERROR));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlaying = () => setStatus(PlayerStatus.PLAYING);
    const handlePause = () => setStatus(PlayerStatus.PAUSED);
    const handleError = () => setStatus(PlayerStatus.ERROR);
    const handleWaiting = () => setStatus(PlayerStatus.LOADING);
    const handleTimeUpdate = () => setProgress(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);

    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    audio.volume = volume;

    return () => {
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [volume]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(e.target.value);
      setProgress(audioRef.current.currentTime);
    }
  };

  const isPlaying = status === PlayerStatus.PLAYING;
  const isLoading = status === PlayerStatus.LOADING;

  const getStatusText = () => {
    switch (status) {
      case PlayerStatus.ERROR:
        return 'Error en la transmisión';
      case PlayerStatus.LOADING:
        return 'Cargando...';
      default:
        return 'Stereo 97.9 FM';
    }
  };

  if (!isClient) {
    return null;
  }

  return (
  <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 shadow-lg z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-on-dark w-40">
            <p className="font-bold font-primary">En Vivo</p>
            <p className="text-sm text-on-dark truncate">{getStatusText()}</p>
          </div>
          <div className="flex items-center space-x-4">
            <audio ref={audioRef} src={streamUrl} preload="none" />
            <button
              onClick={togglePlayPause}
              className="bg-primary hover:bg-primary-dark text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:bg-gray-500 disabled:cursor-not-allowed"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
              disabled={isLoading || status === PlayerStatus.ERROR}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z"></path></svg>
              )}
            </button>
            {/* Barra de progreso (deshabilitada para streams en vivo) */}
            <input
              type="range"
              min={0}
              max={duration > 0 && isFinite(duration) ? duration : 1}
              value={progress}
              onChange={handleSeek}
              className="w-32 h-2 accent-primary bg-border rounded-lg cursor-pointer disabled:cursor-not-allowed"
              aria-label="Progreso de reproducción"
              disabled={!isFinite(duration) || status === PlayerStatus.ERROR}
            />
            {/* Volumen */}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-2 accent-primary bg-border rounded-lg cursor-pointer"
              aria-label="Control de volumen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
