import React from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
}

export function ContentSection({ id, title, content }: ContentSectionProps) {
  return (
    <section id={id} className="relative min-h-screen bg-gray-800 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl mx-auto lg:ml-32">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">{title}</h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{content}</p>
      </div>
    </section>
  );
}