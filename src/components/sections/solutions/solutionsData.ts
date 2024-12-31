import { Navigation, Leaf, Train, Building2, Zap, Building, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SolutionItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

export const solutionItems: SolutionItem[] = [
  {
    id: 'navigation-mapping',
    title: 'Navigation & Mapping',
    icon: Navigation,
    description: 'Advanced satellite-based navigation and mapping solutions providing precise geospatial data for accurate location services and detailed terrain mapping.',
    color: 'from-blue-500 to-blue-900'
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    icon: Leaf,
    description: 'Environmental monitoring and climate change tracking solutions to support sustainable development and conservation efforts worldwide.',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'transportation',
    title: 'Transportation',
    icon: Train,
    description: 'Intelligent transportation systems utilizing satellite technology for fleet management, route optimization, and real-time tracking.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'land-infrastructure',
    title: 'Land & Infrastructure',
    icon: Building2,
    description: 'Comprehensive land monitoring and infrastructure management solutions for urban planning and development.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'utilities-energy',
    title: 'Utilities & Energy',
    icon: Zap,
    description: 'Smart grid management and energy infrastructure monitoring solutions for improved efficiency and reliability.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'businesses',
    title: 'Businesses',
    icon: Building,
    description: 'Enterprise solutions for business intelligence, communications, and operational efficiency enhancement.',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'health-human-service',
    title: 'Health & Human Service',
    icon: Heart,
    description: 'Healthcare and social service solutions supporting emergency response and public health initiatives.',
    color: 'from-pink-500 to-pink-600'
  }
];