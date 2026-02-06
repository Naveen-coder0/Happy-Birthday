import { useEffect, useRef, useState } from 'react';
import { Heart, Sparkles, Stars } from 'lucide-react';
import FloatingHearts from '../FloatingHearts';
import Balloons from '../Balloons';
import Confetti from '../Confetti';

const FinalSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative py-20 px-4 overflow-hidden"
    >
      {isVisible && (
        <>
          <FloatingHearts />
          <Balloons />
          <Confetti />
        </>
      )}

      <div className="text-center z-20 max-w-3xl mx-auto">
        {/* Decorative top */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}>
          <div className="flex justify-center gap-4 mb-8">
            <span className="text-5xl animate-bounce-soft">🎉</span>
            <span className="text-5xl animate-bounce-soft" style={{ animationDelay: '0.2s' }}>🎂</span>
            <span className="text-5xl animate-bounce-soft" style={{ animationDelay: '0.4s' }}>🎈</span>
            <span className="text-5xl animate-bounce-soft" style={{ animationDelay: '0.6s' }}>💖</span>
            <span className="text-5xl animate-bounce-soft" style={{ animationDelay: '0.8s' }}>✨</span>
          </div>
        </div>

        {/* Main heading */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-gold-warm animate-sparkle" />
            <Heart className="w-10 h-10 text-primary fill-primary animate-heart-beat" />
            <Sparkles className="w-8 h-8 text-gold-warm animate-sparkle" />
          </div>
          <h2 className="font-elegant text-5xl md:text-6xl lg:text-7xl text-gradient mb-4">
            Happy Birthday
          </h2>
          <p className="font-handwritten text-4xl md:text-5xl text-primary mb-8">
            Once Again, Akshnoor! 🎂
          </p>
        </div>

        {/* Final message card */}
        <div className={`glass-card p-8 md:p-12 mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="font-soft text-xl md:text-2xl leading-relaxed text-foreground/90 space-y-4">
            <p>No matter where life takes us,</p>
            <p>I'll always be thankful for you,</p>
            <p>for your presence, your kindness, and your friendship.</p>
            <p className="font-handwritten text-3xl text-primary pt-4">
              You are truly special. 🌷
            </p>
          </div>

          {/* Animated hearts row */}
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i}
                className="w-6 h-6 text-primary fill-primary animate-heart-beat"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>

        {/* Glowing stars */}
        <div className={`flex justify-center gap-6 mb-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {[...Array(5)].map((_, i) => (
            <Stars 
              key={i}
              className="w-8 h-8 text-gold-warm animate-sparkle"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>

        {/* Footer */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card inline-block px-8 py-4">
            <p className="font-handwritten text-xl md:text-2xl text-foreground/70">
              ✨ Made with love for Akshnoor ✨
            </p>
          </div>

          {/* Final decorative hearts */}
          <div className="flex justify-center gap-2 mt-6">
            <Heart className="w-5 h-5 text-primary/60 fill-primary/60" />
            <Heart className="w-6 h-6 text-primary/80 fill-primary/80" />
            <Heart className="w-7 h-7 text-primary fill-primary animate-heart-beat" />
            <Heart className="w-6 h-6 text-primary/80 fill-primary/80" />
            <Heart className="w-5 h-5 text-primary/60 fill-primary/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
