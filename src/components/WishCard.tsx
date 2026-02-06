import { useEffect, useRef, useState } from 'react';

interface WishCardProps {
  emoji: string;
  wish: string;
  delay?: number;
}

const WishCard = ({ emoji, wish, delay = 0 }: WishCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`glass-card p-6 text-center transition-all duration-700 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="text-4xl mb-3 animate-bounce-soft">{emoji}</div>
      <p className="font-soft text-foreground/80 text-sm md:text-base leading-relaxed">
        {wish}
      </p>
    </div>
  );
};

export default WishCard;
