import React from 'react';

export function ContactForm() {
  return (
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
  );
}