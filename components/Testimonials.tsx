import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-car-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-car-navy mb-16">
          Loved by Travelers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-car-teal/10 fill-car-teal/10" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.comment}"</p>
              
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <div className="ml-auto text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {review.source}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-8 mt-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Simple Text placeholders for logos to avoid external image dependencies breaking */}
            <div className="text-2xl font-bold text-gray-500 flex items-center gap-2"><span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">TA</span> Tripadvisor</div>
            <div className="text-2xl font-bold text-gray-500 flex items-center gap-2"><span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">G</span> Google</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;