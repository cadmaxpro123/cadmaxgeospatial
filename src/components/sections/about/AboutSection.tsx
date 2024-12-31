import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20 px-4 sm:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-12 text-center rounded-lg shadow-lg">About Us</h1>
        <div className="prose prose-invert flex flex-col items-center">
          <p className="text-gray-300 mb-8 text-lg text-center leading-relaxed">
            With decades of experience in satellite technology, we are pioneers in space innovation. 
            Our team of experts is dedicated to pushing the boundaries of what's possible in orbital communications.
          </p>
          <div className="bg-gray-800 p-8 rounded-lg mb-8 shadow-xl hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To revolutionize global connectivity through cutting-edge satellite technology and innovative solutions.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the world's leading provider of satellite-based solutions, enabling seamless global communication and data services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}