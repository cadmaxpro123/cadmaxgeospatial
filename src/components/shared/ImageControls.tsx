import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function ImageControls({ onPrevious, onNext }: ImageControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/75 p-2 rounded-full text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/75 p-2 rounded-full text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
}