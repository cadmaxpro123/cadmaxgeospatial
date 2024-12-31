import React from 'react';

export function Blogs() {
  const posts = [
    {
      title: 'The Future of Satellite Communication',
      date: '2024-03-15',
      excerpt: 'Exploring the latest advancements in satellite technology and their impact on global connectivity.',
      author: 'Dr. Sarah Johnson'
    },
    {
      title: 'Innovations in Space Technology',
      date: '2024-03-10',
      excerpt: 'Discover how new innovations are shaping the future of space exploration and communication.',
      author: 'James Wilson'
    },
    {
      title: 'Sustainable Space Operations',
      date: '2024-03-05',
      excerpt: 'Understanding the importance of sustainability in satellite operations and space missions.',
      author: 'Emily Chen'
    }
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto lg:ml-32">
        <h1 className="text-4xl font-bold text-white mb-8">Latest Insights</h1>
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h2 className="text-2xl font-semibold text-white mb-2">{post.title}</h2>
              <div className="text-sm text-gray-400 mb-4">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <p className="text-gray-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}