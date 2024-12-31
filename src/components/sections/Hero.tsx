import React from 'react';
import logo1 from '../../logopng1.png';
import logo2 from '../../logopng2.png';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-900 flex items-center justify-center px-4"
    >
      <div className="relative w-[280px] sm:w-[400px] md:w-[500px] aspect-square">
        {/* Earth Container */}
        <div className="earth-container w-[180px] sm:w-[240px] md:w-[300px] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={logo1}
            alt="Earth"
            className="w-full h-full rounded-full object-contain"
          />

          {/* Orbit Path */}
          <div className="animate-orbit">
            {/* Satellite Container */}
            <div className="satellite-container w-[33px] sm:w-[44px] md:w-[55px] aspect-square">
              <img
                src={logo2}
                alt="Satellite"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}