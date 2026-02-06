import { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isMuted: boolean;
  onToggle: () => void;
}

const MusicPlayer = ({ isMuted, onToggle }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current || !isReady) return;
    
    if (isMuted) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Auto-play was prevented, that's okay
      });
    }
  }, [isMuted, isReady]);

  return (
    <>
      <audio 
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="auto"
      />
      <button
        onClick={onToggle}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform group"
        aria-label={isMuted ? 'Play music' : 'Pause music'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-primary animate-pulse-soft" />
        )}
        
        {/* Music playing indicator */}
        {!isMuted && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-1 bg-primary rounded-full animate-bounce"
                style={{ 
                  height: 4 + Math.random() * 4,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.5s'
                }}
              />
            ))}
          </div>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
