import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto lg:ml-32">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3" />
                <span>123 Space Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}