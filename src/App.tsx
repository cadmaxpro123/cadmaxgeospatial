import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { SolutionsSection } from './components/sections/solutions/SolutionsSection';
import { ServicesSection } from './components/sections/services/ServicesSection';
import { AboutSection } from './components/sections/about/AboutSection';
import { CareersSection } from './components/sections/careers/CareersSection';
import { BlogsSection } from './components/sections/blogs/BlogsSection';
import { ContactSection } from './components/sections/contact/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight / 2;

      const sections = [
        'hero',
        'solutions',
        'services',
        'about',
        'careers',
        'blogs',
        'contact'
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (
            top <= window.innerHeight / 2 &&
            bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900">
      <Header activeSection={activeSection} />
      <Navigation activeSection={activeSection} />
      <Hero />
      <SolutionsSection />
      <ServicesSection />
      <AboutSection />
      <CareersSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
}

export default App;