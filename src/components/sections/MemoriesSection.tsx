import PhotoSlider from "../PhotoSlider";


interface MemoriesSectionProps {
  onNext: () => void;
}

// Real local photos
const photos = [
  {
    id: 1,
    url: '/photos/1.webp',
    caption: 'Friendship is the best thing ✨',
  },
  {
    id: 2,
    url: '/photos/2.webp',
    caption: 'Making memories together 💕',
  },
  {
    id: 3,
    url: '/photos/3.webp',
    caption: 'Every moment is precious 🌸',
  },
  {
    id: 4,
    url: '/photos/4.webp',
    caption: 'Adventures with you 🌈',
  },
  {
    id: 5,
    url: '/photos/5.webp',
    caption: 'Forever grateful for you 💖',
  },
  {
    id: 7,
    url: '/photos/7.webp',
    caption: 'Forever grateful for you 💖',
  }
  
];

const MemoriesSection = ({ onNext }: MemoriesSectionProps) => {
  return (
    <PhotoSlider photos={photos} />
  );
};


export default MemoriesSection;
