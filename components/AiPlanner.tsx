import React, { useState } from 'react';
import { Sparkles, Loader2, MapPin } from 'lucide-react';
import { getTourRecommendation } from '../services/geminiService';
import { TOURS } from '../constants';
import { Tour } from '../types';

const AiPlanner: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{ tour: Tour, reasoning: string } | null>(null);

  const handlePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setRecommendation(null);

    const result = await getTourRecommendation(prompt);
    
    if (result) {
      const tour = TOURS.find(t => t.id === result.recommendedTourId);
      if (tour) {
        setRecommendation({ tour, reasoning: result.reasoning });
      }
    }
    setIsLoading(false);
  };

  return (
    <section id="ai-planner" className="py-16 bg-gradient-to-br from-car-navy to-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-car-teal/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 p-32 bg-car-coral/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold text-car-teal mb-6 border border-white/10">
              <Sparkles className="w-4 h-4" /> Powered by Gemini AI
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Not sure what to do?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Tell our AI assistant what you love—history, relaxing beaches, spicy food, or adventure—and we'll match you with the perfect Cartagena experience.
            </p>

            <form onSubmit={handlePlan} className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. I love history and trying local street food..."
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-6 pr-32 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-car-teal focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 bottom-2 bg-car-teal hover:bg-teal-600 text-white px-6 rounded-xl font-semibold transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Plan Trip'}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            {recommendation ? (
              <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-2xl max-w-md w-full animate-fade-in-up">
                <div className="text-xs font-bold text-car-teal uppercase tracking-wider mb-2">Top Recommendation</div>
                <h3 className="text-2xl font-bold mb-3">{recommendation.tour.title}</h3>
                <div className="mb-4">
                  <img src={recommendation.tour.image} alt={recommendation.tour.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                </div>
                <p className="bg-gray-50 p-4 rounded-xl text-sm italic border-l-4 border-car-teal mb-4">
                  "{recommendation.reasoning}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${recommendation.tour.price}</span>
                  <a href="#contact" className="bg-car-navy text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Book This
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-md w-full flex flex-col items-center justify-center text-center h-80">
                <MapPin className="w-16 h-16 text-white/20 mb-4" />
                <p className="text-gray-400">Your personalized recommendation will appear here.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiPlanner;