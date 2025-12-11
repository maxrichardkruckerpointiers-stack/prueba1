import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiences', href: '#experiences' },
    { name: 'Why Us', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`text-2xl font-bold flex items-center gap-2 ${isScrolled ? 'text-car-navy' : 'text-white'}`}>
              <Sun className={`w-8 h-8 ${isScrolled ? 'text-car-coral' : 'text-yellow-400'}`} />
              Cartagena<span className={isScrolled ? 'text-car-teal' : 'text-white'}>Explorer</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-car-coral transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl ${isScrolled ? 'bg-car-teal text-white hover:bg-teal-700' : 'bg-white text-car-teal hover:bg-gray-100'}`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-gray-800' : 'text-white'}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-car-teal hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="block w-full text-center mt-4 px-5 py-3 rounded-lg bg-car-coral text-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              Reserve Your Tour
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;