import React, { useState } from 'react';
import { X } from 'lucide-react';
import { serviceDetails } from './serviceDetailsData';
import { ImageCarousel } from '../../shared/ImageCarousel';
import type { ServiceDetailsProps } from './types';

export function ServiceDetails({ serviceId, onClose }: ServiceDetailsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const details = serviceDetails[serviceId];

  if (!details) return null;

  const selectedSubpoint = details.subpoints[selectedIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-gray-800 rounded-lg p-6 m-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-[300px,1fr] gap-6 mt-8">
          <div className="space-y-4">
            {details.subpoints.map((subpoint, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  index === selectedIndex 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{subpoint.title}</h3>
                <p className={index === selectedIndex ? 'text-gray-100' : 'text-gray-400'}>
                  {subpoint.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <ImageCarousel
              images={selectedSubpoint.images}
              title={selectedSubpoint.title}
              onClose={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}