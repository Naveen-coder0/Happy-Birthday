import { useEffect, useRef, useState } from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import GlowButton from '../GlowButton';

interface MessageSectionProps {
  onNext: () => void;
}

const MessageSection = ({ onNext }: MessageSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative py-20 px-4"
    >
      {/* Background decorative hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 fill-primary/10 animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 40 + (i * 10),
              height: 40 + (i * 10),
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto z-10">
        {/* Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-gold-warm animate-sparkle" />
            <Heart className="w-8 h-8 text-primary fill-primary animate-heart-beat" />
            <Sparkles className="w-6 h-6 text-gold-warm animate-sparkle" />
          </div>
          <h2 className="font-elegant text-4xl md:text-5xl text-gradient mb-2">
            A Message From My Heart
          </h2>
          <p className="font-handwritten text-2xl text-primary">
            For You, Akshnoor 💝
          </p>
        </div>

        {/* Message Card */}
        <div className={`glass-card p-8 md:p-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="font-soft text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6">
            <p className="font-handwritten text-2xl md:text-3xl text-primary">
              Dear Akshnoor,
            </p>
            
            <p>
              Happy Birthday to the person who makes my life brighter just by being in it. 
              You are not just my best friend, you are my safe place, my laughter partner, 
              my support system, and one of the most beautiful souls I have ever known.
            </p>
            
            <p>
              Every moment with you feels special, every memory with you feels warm, 
              and every conversation with you feels real.
            </p>
            
            <div className="py-4 border-l-4 border-primary/30 pl-6 italic text-foreground/70">
              <p>Thank you for understanding me without me explaining.</p>
              <p>Thank you for standing beside me in my good days and my bad days.</p>
              <p>Thank you for being exactly who you are – kind, caring, strong, funny and full of love.</p>
            </div>
            
            <p>
              I wish this year brings you endless smiles, success, peace, confidence, 
              and all the dreams your heart is quietly holding.
            </p>
            
            <p>
              May your life always be filled with love, beautiful surprises, 
              and people who truly value you.
            </p>
            
            <p className="font-medium text-foreground">
              You deserve the purest happiness, today and always.
              <br />
              I'm so grateful for you, Akshnoor.
            </p>
            
            <p className="font-handwritten text-2xl text-primary pt-4">
              Always stay the amazing person you are. 💖
            </p>

            {/* Signature hearts */}
            <div className="flex justify-end gap-1 pt-4">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i}
                  className="w-5 h-5 text-primary fill-primary animate-heart-beat"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <GlowButton onClick={onNext}>
            Next – Your Special Memories
            <span className="text-xl">📸</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </GlowButton>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
