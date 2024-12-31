import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon: LucideIcon;
  className?: string;
}

export function ServiceIcon({ icon: Icon, className = "" }: ServiceIconProps) {
  return <Icon className={`w-6 h-6 text-white ${className}`} />;
}