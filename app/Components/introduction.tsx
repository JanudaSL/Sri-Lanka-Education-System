import React from 'react';
import { BookOpen, Building2, AlertCircle, Lightbulb } from 'lucide-react';

export default function IntroductionSection() {
  const navigationCards = [
    {
      icon: BookOpen,
      title: "History",
      description: "Explore the rich historical journey of Sri Lanka's education system from colonial times to present day.",
      link: "/history",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80"
    },
    {
      icon: Building2,
      title: "Structure",
      description: "Understand the organizational framework and hierarchy of the current education system.",
      link: "/structure",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
    },
    {
      icon: AlertCircle,
      title: "Challenges",
      description: "Examine the key obstacles and issues facing education in Sri Lanka today.",
      link: "/challenges",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
    },
    {
      icon: Lightbulb,
      title: "Reflection",
      description: "Personal insights and reflections on the future of education in our nation.",
      link: "/reflection",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
    }
  ];

  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Introduction Paragraph */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Education System of Sri Lanka
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            This e-portfolio explores the structure, history, challenges, and development of the education system in Sri Lanka. 
            It reflects my understanding of how education shapes the future of our nation.
          </p>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <a
                key={index}
                href={card.link}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Background Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
                  
                  {/* Icon and Title on Image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <IconComponent className="w-16 h-16 mb-4" strokeWidth={1.5} />
                    <h3 className="text-3xl font-bold text-center">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Below Image */}
                <div className="p-6 bg-white">
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    {card.description}
                  </p>
                  
                  {/* Explore Button */}
                  <div className="flex justify-center">
                    <span className="inline-flex items-center text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                      Explore
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Optional Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-500 italic">
            Click on any card above to explore different aspects of Sri Lanka's education system
          </p>
        </div>
      </div>
    </div>
  );
}