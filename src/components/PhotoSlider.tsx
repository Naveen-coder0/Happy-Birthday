import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  caption?: string;
}

interface PhotoSliderProps {
  photos: Photo[];
}

const PhotoSlider = ({ photos }: PhotoSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image Container */}
     <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2">

        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">

          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption || 'Memory'}
                className="w-full h-full object-contain"
              />

              {/* Heart overlay during transition */}
              {isTransitioning && index === currentIndex && (
                <div className="absolute inset-0 flex items-center justify-center bg-pink-soft/30">
                  <Heart className="w-20 h-20 text-pink-deep animate-heart-beat fill-current" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white hover:scale-110 transition-all shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white hover:scale-110 transition-all shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption */}
      {photos[currentIndex]?.caption && (
        <p className="text-center mt-4 font-handwritten text-xl text-foreground/70">
          {photos[currentIndex].caption}
        </p>
      )}

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 h-3 rounded-full bg-primary'
                : 'w-3 h-3 rounded-full bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
