import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/cartagenabeach/1920/1080" 
          alt="Beautiful Cartagena Beach" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center sm:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Experience the Magic of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-car-coral">Cartagena</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
            From the historic walled city to the crystal clear Caribbean islands. We curate unforgettable experiences for the modern traveler.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#experiences" 
              className="px-8 py-4 bg-car-coral text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 group"
            >
              Explore Tours <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#ai-planner" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5" /> Plan with AI
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;