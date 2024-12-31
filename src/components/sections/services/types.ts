export interface ServiceSubpoint {
  title: string;
  description: string;
  images: string[];
}

export interface ServiceDetails {
  [key: string]: {
    subpoints: ServiceSubpoint[];
  };
}

export interface ServiceDetailsProps {
  serviceId: string;
  onClose: () => void;
}