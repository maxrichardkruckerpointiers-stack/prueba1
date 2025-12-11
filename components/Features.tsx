import React from 'react';
import { UserCheck, ShieldCheck, Zap, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-car-teal" />,
      title: "Local Expert Guides",
      description: "Our guides are born and raised in Cartagena, sharing stories you won't find in guidebooks."
    },
    {
      icon: <Zap className="w-8 h-8 text-car-coral" />,
      title: "Instant Confirmation",
      description: "Book securely online and receive your voucher immediately. No waiting, no hassle."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-car-teal" />,
      title: "Safety First",
      description: "We strictly adhere to all safety protocols and only partner with certified transport providers."
    },
    {
      icon: <Heart className="w-8 h-8 text-car-coral" />,
      title: "Small Groups",
      description: "We keep our groups intimate (max 12 people) to ensure a personalized experience for everyone."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-car-navy">Why Choose Us?</h2>
          <div className="w-20 h-1 bg-car-coral mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;