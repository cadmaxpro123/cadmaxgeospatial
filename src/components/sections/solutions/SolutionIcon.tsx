import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionIconProps {
  icon: LucideIcon;
  className?: string;
}

export function SolutionIcon({ icon: Icon, className = "" }: SolutionIconProps) {
  return <Icon className={`w-6 h-6 text-white ${className}`} />;
}