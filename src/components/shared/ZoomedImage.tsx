import React from 'react';
import { X } from 'lucide-react';

interface ZoomedImageProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ZoomedImage({ src, alt, onClose }: ZoomedImageProps) {
  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}