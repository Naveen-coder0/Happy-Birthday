import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GlowButton = ({ children, onClick, className = '' }: GlowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`glow-button group relative overflow-hidden ${className}`}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 font-soft">
        {children}
      </span>
    </button>
  );
};

export default GlowButton;
