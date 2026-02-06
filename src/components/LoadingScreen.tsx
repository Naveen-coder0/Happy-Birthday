import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 gradient-bg flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Heart */}
        <div className="relative mb-8">
          <Heart 
            className="w-24 h-24 text-primary fill-primary animate-heart-beat mx-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          </div>
        </div>

        {/* Loading text */}
        <p className="font-handwritten text-2xl text-foreground/70 mb-4">
          Preparing something special...
        </p>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-primary/20 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percentage */}
        <p className="font-soft text-sm text-foreground/50 mt-2">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
