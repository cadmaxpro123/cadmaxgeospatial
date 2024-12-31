import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const navItems = [
  { id: 'solutions', label: 'Solutions' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'careers', label: 'Careers' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'contact', label: 'Contact Us' },
];

export function Navigation({ activeSection }: { activeSection: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button - Moved to top right */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed right-4 top-4 z-50 p-2 rounded-lg bg-gray-800 lg:hidden"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Desktop Navigation */}
      <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 space-y-8 z-50 hidden lg:block">
        <div className="relative space-y-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white font-bold scale-110'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 bg-gray-900/95 z-40 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white font-bold scale-110'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}