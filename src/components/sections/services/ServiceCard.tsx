import React, { useState } from 'react';
import { ServiceIcon } from './ServiceIcon';
import { ServiceDetails } from './ServiceDetails';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({ id, title, description, icon, index }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer"
        onClick={() => setShowDetails(true)}
        style={{ 
          opacity: 0,
          animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
        }}
      >
        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
          border-l-4 border-blue-500 border-opacity-50 hover:border-opacity-100 h-full">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="p-2 bg-gray-700 rounded-lg">
                <ServiceIcon icon={icon} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <ServiceDetails
          serviceId={id}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}