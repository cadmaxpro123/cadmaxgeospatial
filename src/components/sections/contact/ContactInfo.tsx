import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
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
  );
}