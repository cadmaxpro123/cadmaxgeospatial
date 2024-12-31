import React, { useState } from 'react';
import { SolutionIcon } from './SolutionIcon';
import { ImageCarousel } from '../../shared/ImageCarousel';
import { solutionImages } from '../../../data/carouselData';
import type { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function SolutionCard({ id, title, description, icon, index }: SolutionCardProps) {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer"
        onClick={() => setShowCarousel(true)}
        style={{ 
          opacity: 0,
          animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
        }}
      >
        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
          border-l-4 border-blue-500 border-opacity-50 hover:border-opacity-100 h-full">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="p-2 bg-gray-700 rounded-lg">
                <SolutionIcon icon={icon} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {showCarousel && solutionImages[id] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md" onClick={() => setShowCarousel(false)} />
          <div className="relative w-full max-w-6xl px-4" onClick={(e) => e.stopPropagation()}>
            <ImageCarousel
              images={solutionImages[id]}
              title={title}
              onClose={() => setShowCarousel(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}