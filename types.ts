export enum TourCategory {
  ALL = 'All',
  CULTURAL = 'Cultural',
  ADVENTURE = 'Adventure',
  GASTRONOMIC = 'Gastronomic',
  FAMILY = 'Family'
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: TourCategory;
  rating: number;
  reviews: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  source: 'TripAdvisor' | 'Google';
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  tourInterest: string;
  date: string;
}

export interface MapMarker {
  id: string;
  lat: number;
  lng: number; // For simulation on a static map
  title: string;
  description: string;
}