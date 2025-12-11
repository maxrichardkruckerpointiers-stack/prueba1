import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-800 pb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Cartagena<span className="text-car-teal">Explorer</span></h3>
            <p className="text-gray-400 max-w-sm">
              Creating unforgettable memories in the heart of the Caribbean. We specialize in authentic, sustainable, and local experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#experiences" className="hover:text-car-teal transition-colors">Tours</a></li>
              <li><a href="#features" className="hover:text-car-teal transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-car-teal transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-car-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-car-teal transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-car-teal transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-car-teal transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="mailto:hello@cartagenaexplorer.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-car-teal transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cartagena Explorer. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;