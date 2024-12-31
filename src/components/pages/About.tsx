import React from 'react';

export function About() {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto lg:ml-32">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <div className="prose prose-invert">
          <p className="text-gray-300 mb-6">
            With decades of experience in satellite technology, we are pioneers in space innovation. 
            Our team of experts is dedicated to pushing the boundaries of what's possible in orbital communications.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            To revolutionize global connectivity through cutting-edge satellite technology and innovative solutions.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Vision</h2>
          <p className="text-gray-300 mb-6">
            To be the world's leading provider of satellite-based solutions, enabling seamless global communication and data services.
          </p>
        </div>
      </div>
    </section>
  );
}