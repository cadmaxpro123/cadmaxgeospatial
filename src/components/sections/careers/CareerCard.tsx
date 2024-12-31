import React from 'react';
import type { CareerItem } from './careersData';

interface CareerCardProps extends CareerItem {
  index: number;
}

export function CareerCard({ title, department, location, type, index }: CareerCardProps) {
  return (
    <div 
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
      style={{ 
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
      }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
        <span>{department}</span>
        <span>•</span>
        <span>{location}</span>
        <span>•</span>
        <span>{type}</span>
      </div>
    </div>
  );
}