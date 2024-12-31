import React from 'react';
import { SolutionCard } from './SolutionCard';
import { solutionItems } from './solutionsData';

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative min-h-screen bg-gray-900 py-20 px-4 sm:px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
          {solutionItems.map((item, index) => (
            <SolutionCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}