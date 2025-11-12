import React from 'react';
import Image from 'next/image';
import { GraduationCap, MapPin, BookOpen, Award, Users } from 'lucide-react';
import Header2 from '../../public/profile.jpg';
import Header4 from '../../public/img1.jpg';

export default function About() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-0 min-h-screen relative">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={Header4}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Left Column - Dark Content */}
        <div className="relative z-10 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
          <div className="max-w-xl">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
                <h2 className="text-5xl md:text-6xl font-bold">ABOUT.</h2>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                I'm passionate about education and driven by impact.
              </h3>

              <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  I am a dedicated English language educator committed to empowering students through effective communication and language skills. With a passion for teaching and a student-centered approach, I strive to create engaging and inclusive learning environments.
                </p>

                <p>
                  I truly enjoy working on developing students' critical thinking abilities and language proficiency in the hope that these will one day translate back to the real world and have a direct impact on their lives.
                </p>

                <p>
                  I also enjoy being surrounded by brilliant students that share the vision of "learning for growth" and I'm truly humbled by their support. Meanwhile, I'm excited by the ever-growing challenges I'm faced with as my career unfolds and keen to take them on.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 pt-8 border-t border-gray-700">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <p className="text-sm text-gray-400">Location</p>
                  </div>
                  <p className="text-white font-semibold">Hambantota, Sri Lanka</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-orange-500" />
                    <p className="text-sm text-gray-400">Specialization</p>
                  </div>
                  <p className="text-white font-semibold">English Language Education</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-orange-500" />
                    <p className="text-sm text-gray-400">Teaching Focus</p>
                  </div>
                  <p className="text-white font-semibold">Grammar, Communication & Literature</p>
                </div>

                <div className="space-y-2">
                  
                  
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700">
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="bg-gray-200 order-1 lg:order-2 flex items-center justify-center p-6 md:p-8 min-h-96 lg:min-h-screen relative z-10">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={Header2}
                alt="A.H. Madushani"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">A.H. Madushani</h3>
              <p className="text-orange-600 font-semibold text-lg mt-2">Teacher of English</p>
              <p className="text-gray-500 text-sm mt-1">RN: BS22E60643</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}