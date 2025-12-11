import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { MAP_MARKERS } from '../constants';

const MapSection: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-3xl font-bold text-center text-car-navy">Explore Locations</h2>
        <p className="text-center text-gray-600">Find where our adventures begin</p>
      </div>
      
      {/* 
        Since real Google Maps requires an API key that I cannot provide here, 
        I am creating a stylized, interactive mock map. 
      */}
      <div className="relative w-full h-[500px] bg-blue-100 overflow-hidden group cursor-grab active:cursor-grabbing">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/maptexture/1600/900')] bg-cover opacity-20 grayscale mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
        
        {/* Simulated Land masses */}
        <div className="absolute top-1/4 left-1/4 w-1/3 h-2/3 bg-gray-200/80 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-lg blur-[1px]"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gray-200/80 rounded-full shadow-lg blur-[1px]"></div>

        <div className="container mx-auto relative h-full">
            {MAP_MARKERS.map((marker) => (
              <div 
                key={marker.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{ top: `${marker.lat}%`, left: `${marker.lng}%` }}
              >
                <button 
                  onClick={() => setActiveMarker(activeMarker === marker.id ? null : marker.id)}
                  className={`relative group/pin ${activeMarker === marker.id ? 'z-50' : 'z-10'}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${activeMarker === marker.id ? 'bg-car-coral text-white scale-125' : 'bg-white text-car-teal hover:bg-car-teal hover:text-white'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 rounded-full bg-car-coral opacity-0 ${activeMarker === marker.id ? 'animate-ping opacity-75' : ''}`}></div>

                  {/* Tooltip */}
                  {activeMarker === marker.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white rounded-xl shadow-xl p-4 text-left animate-fade-in-up">
                      <h4 className="font-bold text-car-navy mb-1">{marker.title}</h4>
                      <p className="text-xs text-gray-500 mb-2">{marker.description}</p>
                      <img 
                        src={`https://picsum.photos/seed/${marker.id}/200/100`} 
                        alt={marker.title} 
                        className="w-full h-24 object-cover rounded-lg" 
                      />
                      {/* Triangle */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                    </div>
                  )}
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;