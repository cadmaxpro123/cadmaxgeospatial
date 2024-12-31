import { 
  Satellite, 
  Radio, 
  Map, 
  Camera, 
  Image, 
  Binary, 
  Brain, 
  Code 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

export const serviceItems: ServiceItem[] = [
  {
    id: 'sar-analytics',
    title: 'SAR Analytics',
    icon: Satellite,
    description: 'Advanced Synthetic Aperture Radar analysis for high-resolution earth observation and monitoring in all weather conditions.'
  },
  {
    id: 'lidar-sensor',
    title: 'LiDAR Sensor',
    icon: Radio,
    description: 'Cutting-edge Light Detection and Ranging technology for precise 3D mapping and spatial measurements.'
  },
  {
    id: 'spatial-analytics',
    title: 'Spatial Analytics',
    icon: Map,
    description: 'Comprehensive spatial data analysis and visualization for informed decision-making and planning.'
  },
  {
    id: 'photogrammetry',
    title: 'Photogrammetry',
    icon: Camera,
    description: 'High-precision measurements and 3D modeling from photographs for accurate terrain and object reconstruction.'
  },
  {
    id: 'orthophoto',
    title: 'Orthophoto',
    icon: Image,
    description: 'Geometrically corrected aerial imagery for accurate mapping and measurement applications.'
  },
  {
    id: 'satellite-processing',
    title: 'Satellite Image Processing',
    icon: Binary,
    description: 'Advanced processing and enhancement of satellite imagery for optimal data extraction and analysis.'
  },
  {
    id: 'algorithm-ai',
    title: 'Algorithm & AI',
    icon: Brain,
    description: 'Custom AI algorithms for automated feature extraction and pattern recognition in spatial data.'
  },
  {
    id: 'geoai-development',
    title: 'GeoAI Software Development',
    icon: Code,
    description: 'Specialized software development integrating geospatial capabilities with artificial intelligence.'
  }
];