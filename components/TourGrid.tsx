import React, { useState } from 'react';
import { Clock, Star } from 'lucide-react';
import { TOURS } from '../constants';
import { TourCategory } from '../types';

const TourGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TourCategory>(TourCategory.ALL);

  const filteredTours = activeCategory === TourCategory.ALL 
    ? TOURS 
    : TOURS.filter(tour => tour.category === activeCategory);

  return (
    <section id="experiences" className="py-20 bg-car-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-car-navy mb-4">Unforgettable Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our curated selection of tours designed to show you the authentic side of Cartagena.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.values(TourCategory).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-car-teal text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-car-navy uppercase tracking-wide">
                  {tour.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold text-gray-700">{tour.rating}</span>
                  <span className="text-xs text-gray-400">({tour.reviews} reviews)</span>
                </div>
                
                <h3 className="text-xl font-bold text-car-navy mb-2 line-clamp-1">{tour.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-car-teal">${tour.price}</span>
                    <a href="#contact" className="text-xs font-bold text-car-coral hover:underline uppercase tracking-wider">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGrid;