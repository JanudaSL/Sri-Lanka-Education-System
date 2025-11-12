'use client';

import React from 'react';
import Header2 from '../../public/image.png';
import { GraduationCap, Heart, Users, BookOpen } from 'lucide-react';

export default function KannangaraTributeSection() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Free Education Policy",
      year: "1945",
      description: "Introduced universal free education from primary to university level"
    },
    {
      icon: Users,
      title: "Central Colleges",
      year: "1940s",
      description: "Established schools across rural areas for equal opportunities"
    },
    {
      icon: BookOpen,
      title: "Vernacular Education",
      year: "1944",
      description: "Promoted education in Sinhala and Tamil languages"
    },
    {
      icon: Heart,
      title: "Education for All",
      year: "Legacy",
      description: "Created a foundation for social equality and progress"
    }
  ];

  return (
    <div className="w-full relative">
      {/* Hero Section with Background Image */}
      <div 
        className="relative min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Header2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center text-white">
          {/* Title Badge */}
          <div className="inline-block mb-6 border-2 border-white/50 backdrop-blur-sm bg-white/10 px-6 py-2">
            <span className="text-sm font-bold uppercase tracking-widest">The Father of Free Education</span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
            Dr. C.W.W. Kannangara
          </h2>
          
          {/* Years */}
          <p className="text-2xl md:text-3xl font-light mb-8 text-white/90">
            1884 – 1969
          </p>

          {/* Quote Box */}
          <div className="max-w-3xl mx-auto mt-12 border-l-4 border-white pl-6 text-left">
            <p className="text-xl md:text-2xl font-light italic leading-relaxed">
              "Education is the birthright of every child, not a privilege for the wealthy."
            </p>
            <p className="text-sm mt-4 text-white/70 uppercase tracking-wider">
              — C.W.W. Kannangara
            </p>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="bg-white border-l-8 border-gray-900 p-8 md:p-12 mb-16 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              A Visionary Leader
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Dr. C. W. W. Kannangara (1884–1969) was a Sri Lankan statesman and education reformer 
              who introduced the <strong>Free Education Policy in 1945</strong>. His vision ensured that 
              every child, regardless of background or wealth, could access quality education.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              He also established <strong>Central Colleges</strong> across the country to provide equal 
              learning opportunities for rural students, transforming the educational landscape of Sri Lanka 
              and creating a legacy that continues to benefit millions of students today.
            </p>
          </div>

          {/* Achievements Grid */}
          
          
        </div>
      </div>
    </div>
  );
}