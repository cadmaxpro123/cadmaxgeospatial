import React, { useState, useRef, useEffect } from 'react';
import { ImageControls } from './ImageControls';
import { ZoomedImage } from './ZoomedImage';

interface ImageCarouselProps {
  images: string[];
  title: string;
  onClose: () => void;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      autoScrollRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused, images.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      
      <div 
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={containerRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-full"
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-[400px] object-cover cursor-pointer"
                onClick={() => setZoomedImage(image)}
              />
            </div>
          ))}
        </div>

        <ImageControls onPrevious={handlePrevious} onNext={handleNext} />
      </div>

      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all ${
              index === currentIndex ? 'ring-2 ring-blue-500 opacity-100' : 'opacity-50 hover:opacity-100'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {zoomedImage && (
        <ZoomedImage
          src={zoomedImage}
          alt={title}
          onClose={() => setZoomedImage(null)}
        />
      )}
    </div>
  );
}