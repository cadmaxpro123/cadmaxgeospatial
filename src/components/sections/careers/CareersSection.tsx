import React from 'react';
import { CareerCard } from './CareerCard';
import { careerItems } from './careersData';

export function CareersSection() {
  return (
    <section id="careers" className="min-h-screen bg-gray-900 py-20 px-4 sm:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-12 text-center py-4 rounded-lg shadow-lg">Careers</h1>
        <p className="text-gray-300 mb-12 text-lg leading-relaxed text-center max-w-2xl mx-auto">
          Join our team of visionaries and help shape the future of satellite technology. We're looking for passionate individuals who dare to dream big and innovate constantly.
        </p>
        
        <div className="grid gap-6 justify-center items-center">
          {careerItems.map((position, index) => (
            <CareerCard key={index} {...position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}