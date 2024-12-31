import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 px-4 sm:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-12 text-center py-4 rounded-lg shadow-lg">Contact Us</h1>
        <p className="text-gray-300 mb-12 text-lg leading-relaxed text-center max-w-2xl mx-auto">
          Have questions or want to learn more about our satellite solutions? We're here to help. Reach out to our team today.
        </p>
        <div className="grid md:grid-cols-2 gap-12 justify-center items-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}