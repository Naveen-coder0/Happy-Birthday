import { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const balloonColors = [
  '#FFB6C1', // Pink
  '#FFDAB9', // Peach
  '#E6E6FA', // Lavender
  '#87CEEB', // Sky blue
  '#FFD700', // Gold
  '#FFC0CB', // Light pink
  '#DDA0DD', // Plum
];

const Balloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const newBalloons: Balloon[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 15 + Math.random() * 10,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      size: 40 + Math.random() * 30,
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-rise"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
          }}
        >
          <div className="relative">
            {/* Balloon */}
            <div
              className="rounded-full shadow-lg"
              style={{
                width: balloon.size,
                height: balloon.size * 1.2,
                backgroundColor: balloon.color,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            />
            {/* String */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: balloon.size * 1.2 - 5,
                width: 2,
                height: 60,
                background: `linear-gradient(to bottom, ${balloon.color}, transparent)`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Balloons;
