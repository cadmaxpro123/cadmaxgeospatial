import React from 'react';
import { BlogCard } from './BlogCard';
import { blogItems } from './blogsData';

export function BlogsSection() {
  return (
    <section id="blogs" className="min-h-screen bg-gray-900 py-20 px-4 sm:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-12 text-center py-4 rounded-lg shadow-lg">Latest Insights</h1>
        <p className="text-gray-300 mb-12 text-lg leading-relaxed text-center max-w-2xl mx-auto">
          Stay updated with the latest developments in satellite technology and space innovation through our expert insights and analysis.
        </p>
        <div className="grid gap-8 justify-center items-center">
          {blogItems.map((post, index) => (
            <BlogCard key={index} {...post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}