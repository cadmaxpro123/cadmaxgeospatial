import React from 'react';
import { ServiceCard } from './ServiceCard';
import { serviceItems } from './servicesData';

export function ServicesSection() {
  return (
    <section id="services" className="relative min-h-screen bg-gray-900 py-20 px-4 sm:px-8  flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
          {serviceItems.map((item, index) => (
            <ServiceCard
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