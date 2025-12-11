import React, { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { TOURS } from '../constants';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourInterest: '',
    date: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-car-navy text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Left Side: Call to Action */}
          <div className="md:w-5/12 bg-car-teal p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Explore?</h3>
              <p className="text-teal-100 mb-6">
                Fill out the form to reserve your spot or request a customized itinerary. We reply within 1 hour.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-teal-200" /> Free Cancellation (24h)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-teal-200" /> Best Price Guarantee</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-teal-200" /> English Speaking Guides</li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="text-xs text-teal-200 opacity-80">Questions? Call us:</p>
              <p className="text-xl font-bold">+57 300 123 4567</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-7/12 p-8 md:p-12 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
                <p className="text-gray-600">Your request has been received. Check your email for your free Cartagena guide.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-car-teal font-semibold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Secure Your Spot</h4>
                
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Full Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-car-teal"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-car-teal"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</label>
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-car-teal"
                      placeholder="+1 555 000 0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Tour Interest</label>
                    <div className="relative">
                      <select 
                        name="tourInterest"
                        value={formData.tourInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-car-teal"
                      >
                        <option value="">Select a Tour</option>
                        {TOURS.map(t => (
                          <option key={t.id} value={t.id}>{t.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Preferred Date</label>
                    <div className="relative">
                      <input 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        type="date" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-car-teal"
                      />
                      <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-car-coral text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-all mt-4"
                >
                  Send Request
                </button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  No payment required today. We'll contact you to confirm.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;