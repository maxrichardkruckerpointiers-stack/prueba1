import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourGrid from './components/TourGrid';
import AiPlanner from './components/AiPlanner';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import InfoSection from './components/InfoSection';
import LeadForm from './components/LeadForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-car-teal selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TourGrid />
        <AiPlanner />
        <Features />
        <Testimonials />
        <InfoSection />
        <LeadForm />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;