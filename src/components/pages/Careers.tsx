import React from 'react';

export function Careers() {
  const positions = [
    {
      title: 'Satellite Systems Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Hybrid',
      type: 'Full-time'
    },
    {
      title: 'Software Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto lg:ml-32">
        <h1 className="text-4xl font-bold text-white mb-8">Careers</h1>
        <p className="text-gray-300 mb-12">
          Join our team of visionaries and help shape the future of satellite technology.
        </p>
        
        <div className="grid gap-6">
          {positions.map((position, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span>{position.department}</span>
                <span>•</span>
                <span>{position.location}</span>
                <span>•</span>
                <span>{position.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}