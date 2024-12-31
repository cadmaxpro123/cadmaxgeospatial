import React from 'react';
import type { BlogItem } from './blogsData';

interface BlogCardProps extends BlogItem {
  index: number;
}

export function BlogCard({ title, date, excerpt, author, index }: BlogCardProps) {
  return (
    <article 
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
      style={{ 
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
      }}
    >
      <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
      <div className="text-sm text-gray-400 mb-4">
        <span>{new Date(date).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{author}</span>
      </div>
      <p className="text-gray-300">{excerpt}</p>
    </article>
  );
}