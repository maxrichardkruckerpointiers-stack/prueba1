import { Tour, TourCategory, Testimonial, MapMarker } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Walled City Historic Walk',
    description: 'Discover the secrets of the colonial era with a local historian. Visit the Palace of the Inquisition and the iconic Clock Tower.',
    price: 45,
    duration: '3 Hours',
    image: 'https://picsum.photos/seed/cartagena1/800/600',
    category: TourCategory.CULTURAL,
    rating: 4.9,
    reviews: 1240
  },
  {
    id: '2',
    title: 'Rosario Islands Catamaran',
    description: 'Sail through the crystal clear waters of the Caribbean. Includes snorkeling gear, lunch, and an open bar.',
    price: 95,
    duration: 'Full Day',
    image: 'https://picsum.photos/seed/rosario/800/600',
    category: TourCategory.ADVENTURE,
    rating: 4.8,
    reviews: 856
  },
  {
    id: '3',
    title: 'Street Food & Market Tour',
    description: 'Taste the real Cartagena. From arepas de huevo to exotic fruits at the Bazurto Market.',
    price: 55,
    duration: '4 Hours',
    image: 'https://picsum.photos/seed/food/800/600',
    category: TourCategory.GASTRONOMIC,
    rating: 5.0,
    reviews: 432
  },
  {
    id: '4',
    title: 'Totumo Mud Volcano',
    description: 'A fun, therapeutic mud bath inside a small volcano followed by a rinse in the lagoon. Great for families.',
    price: 40,
    duration: 'Half Day',
    image: 'https://picsum.photos/seed/mud/800/600',
    category: TourCategory.FAMILY,
    rating: 4.6,
    reviews: 320
  },
  {
    id: '5',
    title: 'Sunset Sailing & Cocktails',
    description: 'Watch the sun dip below the horizon from the deck of a classic sailboat with a cocktail in hand.',
    price: 65,
    duration: '2 Hours',
    image: 'https://picsum.photos/seed/sunset/800/600',
    category: TourCategory.CULTURAL,
    rating: 4.9,
    reviews: 980
  },
  {
    id: '6',
    title: 'Mangrove Canoe Adventure',
    description: 'Paddle through the peaceful mangrove tunnels of La Boquilla and learn about the local ecosystem.',
    price: 50,
    duration: '3 Hours',
    image: 'https://picsum.photos/seed/mangrove/800/600',
    category: TourCategory.ADVENTURE,
    rating: 4.7,
    reviews: 210
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'New York, USA',
    rating: 5,
    comment: 'The Walled City tour was the highlight of our trip! Our guide was incredibly knowledgeable and funny.',
    avatar: 'https://picsum.photos/seed/user1/100/100',
    source: 'TripAdvisor'
  },
  {
    id: '2',
    name: 'Miguel Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    comment: 'Impeccable service. The catamaran trip was perfectly organized. Food was delicious.',
    avatar: 'https://picsum.photos/seed/user2/100/100',
    source: 'Google'
  },
  {
    id: '3',
    name: 'Emily Chen',
    location: 'Toronto, Canada',
    rating: 4,
    comment: 'Great street food tour. A bit hot walking around, but the flavors were worth every drop of sweat!',
    avatar: 'https://picsum.photos/seed/user3/100/100',
    source: 'TripAdvisor'
  }
];

export const MAP_MARKERS: MapMarker[] = [
  { id: 'm1', lat: 30, lng: 40, title: 'Historic Center', description: 'Meeting point for walking tours.' },
  { id: 'm2', lat: 60, lng: 70, title: 'La Boquilla', description: 'Mangrove adventures start here.' },
  { id: 'm3', lat: 20, lng: 80, title: 'Dock Pegasos', description: 'Departure for island tours.' },
];
