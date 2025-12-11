import React from 'react';
import { Sun, Footprints, Droplets, Camera } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-car-navy mb-8 text-center">Good to Know</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-orange-50 p-3 rounded-full mb-3 text-car-coral">
              <Sun className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Weather</h4>
            <p className="text-sm text-gray-500">Hot & humid. Wear light clothes.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-teal-50 p-3 rounded-full mb-3 text-car-teal">
              <Footprints className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Walking</h4>
            <p className="text-sm text-gray-500">Wear comfortable shoes.</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-50 p-3 rounded-full mb-3 text-blue-500">
              <Droplets className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Hydration</h4>
            <p className="text-sm text-gray-500">Water is included in most tours.</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-purple-50 p-3 rounded-full mb-3 text-purple-500">
              <Camera className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Memories</h4>
            <p className="text-sm text-gray-500">Don't forget your camera!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;