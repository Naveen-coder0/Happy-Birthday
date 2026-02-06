import { useState, useRef, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import MusicPlayer from '@/components/MusicPlayer';
import HeroSection from '@/components/sections/HeroSection';
import MessageSection from '@/components/sections/MessageSection';
import MemoriesSection from '@/components/sections/MemoriesSection';
import WishesSection from '@/components/sections/WishesSection';
import GuestbookSection from '@/components/sections/GuestbookSection';
import FinalSection from '@/components/sections/FinalSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  
  const messageRef = useRef<HTMLDivElement>(null);
  const memoriesRef = useRef<HTMLDivElement>(null);
  const wishesRef = useRef<HTMLDivElement>(null);
  const guestbookRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Auto-hide loading after a maximum time
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="gradient-bg min-h-screen">
      {/* Music Player */}
      <MusicPlayer isMuted={isMuted} onToggle={() => setIsMuted(!isMuted)} />

      {/* Hero Section */}
      <HeroSection onNext={() => scrollToSection(messageRef)} />

      {/* Message Section */}
      <div ref={messageRef}>
        <MessageSection onNext={() => scrollToSection(memoriesRef)} />
      </div>

      {/* Memories Section */}
      <div ref={memoriesRef}>
        <MemoriesSection onNext={() => scrollToSection(wishesRef)} />
      </div>

      {/* Wishes Section */}
      <div ref={wishesRef}>
        <WishesSection onNext={() => scrollToSection(guestbookRef)} />
      </div>

      {/* Guestbook Section */}
      <div ref={guestbookRef}>
        <GuestbookSection onNext={() => scrollToSection(finalRef)} />
      </div>

      {/* Final Section */}
      <div ref={finalRef}>
        <FinalSection />
      </div>
    </main>
  );
};

export default Index;
