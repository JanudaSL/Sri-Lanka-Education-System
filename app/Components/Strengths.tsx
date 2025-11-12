import React from 'react';
import { CheckCircle, BookOpen, Home, GraduationCap } from 'lucide-react';

export default function KeyStrengthsSection() {
  const strengths = [
    {
      icon: CheckCircle,
      title: "Free Education for All",
      description: "Sri Lanka provides completely free education from primary to university level, ensuring equal opportunities for every child regardless of their economic background.",
      stats: "100% Free"
    },
    {
      icon: BookOpen,
      title: "High Literacy Rate",
      description: "With a literacy rate exceeding 90%, Sri Lanka stands as one of the most literate nations in South Asia, reflecting the success of our education system.",
      stats: "Over 90%"
    },
    {
      icon: Home,
      title: "Support for Rural Schools",
      description: "Dedicated programs and resources ensure that children in rural areas receive quality education, bridging the urban-rural education gap.",
      stats: "Island-wide Coverage"
    },
    {
      icon: GraduationCap,
      title: "University Scholarships",
      description: "Merit-based scholarship programs provide financial support to talented students, enabling them to pursue higher education and achieve their academic dreams.",
      stats: "Merit-based Support"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Strengths
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The pillars that make Sri Lanka's education system exceptional
          </p>
        </div>

        {/* Strengths Grid - Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-none p-8 hover:border-gray-900 transition-all duration-300 hover:shadow-xl"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-16 h-16 text-gray-900" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {strength.title}
                  </h3>
                  
                  {/* Stats Badge */}
                  <div className="inline-block border-2 border-gray-900 px-4 py-1 mb-4">
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                      {strength.stats}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary Box */}
        <div className="border-4 border-gray-900 p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Excellence Through Education
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              These foundational strengths have shaped generations of Sri Lankan students, 
              creating a legacy of academic excellence and social equality that continues to drive our nation forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}