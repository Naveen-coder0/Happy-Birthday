import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlowButton from '../GlowButton';
import WishCard from '../WishCard';

interface WishesSectionProps {
  onNext: () => void;
}

const wishes = [
  { emoji: '🎂', wish: 'Wishing you a year full of happiness and success' },
  { emoji: '🌸', wish: 'May your smile never fade and your heart stay forever young' },
  { emoji: '🌟', wish: 'May all your dreams come true, one beautiful step at a time' },
  { emoji: '💖', wish: 'May you always feel loved, supported, and appreciated' },
  { emoji: '✨', wish: 'May your heart stay soft yet strong, kind yet brave' },
  { emoji: '🌈', wish: 'May life surprise you with beautiful and magical moments' },
  { emoji: '🎁', wish: 'May your future be brighter and more beautiful than ever' },
  { emoji: '🦋', wish: 'May you keep growing, blooming, and becoming your best self' },
  { emoji: '🌷', wish: 'May peace and joy follow you wherever you go' },
  { emoji: '💫', wish: 'May this new year of life be your best one yet' },
  { emoji: '🍀', wish: 'May good luck and blessings always find their way to you' },
  { emoji: '🌙', wish: 'May every night bring you peaceful rest and beautiful dreams' },
];

const WishesSection = ({ onNext }: WishesSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative py-20 px-4"
    >
      <div className="w-full max-w-6xl mx-auto z-10">
        {/* Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-3xl animate-wiggle">🎈</span>
            <Sparkles className="w-6 h-6 text-gold-warm animate-sparkle" />
            <span className="text-3xl animate-wiggle" style={{ animationDelay: '0.5s' }}>🎁</span>
          </div>
          <h2 className="font-elegant text-4xl md:text-5xl text-gradient mb-4">
            Birthday Wishes For You
          </h2>
          <p className="font-handwritten text-xl text-foreground/70">
            May all these come true for you, Akshnoor 💝
          </p>
        </div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishes.map((wish, index) => (
            <WishCard 
              key={index}
              emoji={wish.emoji}
              wish={wish.wish}
              delay={index}
            />
          ))}
        </div>

        {/* Next Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <GlowButton onClick={onNext}>
            Next – Sign the Guestbook
            <span className="text-xl">📝</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </GlowButton>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
