import { useEffect, useState } from 'react';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import GlowButton from '../GlowButton';
import FloatingHearts from '../FloatingHearts';
import Balloons from '../Balloons';
import Confetti from '../Confetti';
import SparklesEffect from '../Sparkles';

interface HeroSectionProps {
  onNext: () => void;
}

const HeroSection = ({ onNext }: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />
      <Balloons />
      <Confetti />
      <SparklesEffect />

      <div className="text-center z-20 max-w-4xl mx-auto">
        {/* Decorative Elements */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-5xl animate-bounce-soft" style={{ animationDelay: '0s' }}>🎉</span>
            <span className="text-5xl animate-bounce-soft" style={{ animationDelay: '0.2s' }}>🎈</span>
            <span className="text-5xl animate-bounce-soft" style={{ animationDelay: '0.4s' }}>🎂</span>
            <span className="text-5xl animate-bounce-soft" style={{ animationDelay: '0.6s' }}>✨</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 
          className={`font-elegant text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-gradient">Happy Birthday</span>
          <br />
          <span className="font-handwritten text-6xl md:text-8xl lg:text-9xl text-primary">
            Akshnoor
          </span>
        </h1>

        {/* Decorative Hearts */}
        <div className={`flex justify-center gap-2 mb-8 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-6 h-6 text-primary fill-primary animate-heart-beat" 
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Subtitle */}
        <p className={`font-handwritten text-2xl md:text-3xl text-foreground/80 mb-12 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          💖 To my bestest friend, my forever support, my favourite human.
        </p>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <GlowButton onClick={onNext}>
            <Sparkles className="w-5 h-5" />
            Click Next – A Special Surprise Awaits
            <Heart className="w-5 h-5 fill-current" />
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </GlowButton>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-16 transition-all duration-1000 delay-1200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="animate-bounce-soft">
            <p className="text-sm text-foreground/50 font-soft">Scroll down for more</p>
            <div className="mt-2 w-6 h-10 border-2 border-primary/30 rounded-full mx-auto flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
