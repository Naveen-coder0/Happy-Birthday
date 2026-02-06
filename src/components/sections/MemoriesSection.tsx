import PhotoSlider from "../PhotoSlider";


interface MemoriesSectionProps {
  onNext: () => void;
}

// Real local photos
const photos = [
  {
    id: 1,
    url: '/photos/1.jpg',
    caption: 'Friendship is the best thing ✨',
  },
  {
    id: 2,
    url: '/photos/2.jpg',
    caption: 'Making memories together 💕',
  },
  {
    id: 3,
    url: '/photos/3.jpg',
    caption: 'Every moment is precious 🌸',
  },
  {
    id: 4,
    url: '/photos/4.jpg',
    caption: 'Adventures with you 🌈',
  },
  {
    id: 5,
    url: '/photos/5.jpg',
    caption: 'Forever grateful for you 💖',
  },
  {
    id: 7,
    url: '/photos/7.jpg',
    caption: 'Forever grateful for you 💖',
  }
  
];

const MemoriesSection = ({ onNext }: MemoriesSectionProps) => {
  return (
    <PhotoSlider photos={photos} />
  );
};


export default MemoriesSection;
