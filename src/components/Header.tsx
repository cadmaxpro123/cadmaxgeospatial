import React, { useEffect, useState } from 'react';
import logo from '../logo.png';

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center">
        {/* Show logo for all sections except hero */}
        {activeSection !== 'hero' && (
          <div className="transition-all duration-300 transform hover:scale-105">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain" 
            />
          </div>
        )}
      </div>
    </header>
  );
}