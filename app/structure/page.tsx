'use client';

import React, { useState } from 'react';
import { ChevronDown, BookOpen, Users, Award, GraduationCap, Target, Building2, BarChart3 } from 'lucide-react';

export default function EducationStructure() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const levels = [
    {
      id: 1,
      title: 'Pre-Primary Education',
      subtitle: 'Early Childhood Education',
      ageGroup: '3 – 5 years',
      institutions: 'Nursery schools and kindergartens (mostly private)',
      purpose: 'Develops basic social, language, and creative skills before entering formal school',
      color: 'from-pink-500 to-rose-500',
      icon: '🎨',
      bgImage: 'linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(244, 63, 94, 0.8))',
      details: [
        'Focus on interactive learning',
        'Development of social skills',
        'Language and communication foundation',
        'Creative and artistic expression'
      ]
    },
    {
      id: 2,
      title: 'Primary Education',
      subtitle: 'Foundation Stage',
      ageGroup: '6 – 10 years',
      grades: '1 – 5',
      institution: 'Government and private primary schools',
      medium: 'Sinhala or Tamil (English as second language)',
      purpose: 'Develops literacy, numeracy, and general knowledge',
      exam: 'Grade 5 Scholarship Examination',
      color: 'from-blue-500 to-cyan-500',
      icon: '📚',
      bgImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(34, 197, 94, 0.8))',
      details: [
        'Core subjects: Mathematics, Languages, Science',
        'Development of reading and writing skills',
        'Basic numeracy and problem-solving',
        'General knowledge and environmental studies',
        'Grade 5 Scholarship exam for rural students'
      ]
    },
    {
      id: 3,
      title: 'Junior Secondary Education',
      subtitle: 'Lower Secondary Stage',
      ageGroup: '11 – 14 years',
      grades: '6 – 9',
      medium: 'Sinhala or Tamil (English continues)',
      purpose: 'General education across various subjects',
      color: 'from-green-500 to-emerald-500',
      icon: '📖',
      bgImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8))',
      details: [
        'Mathematics and Sciences',
        'Languages (Sinhala/Tamil and English)',
        'Social Studies and History',
        'Religion and Ethics',
        'No major exams at the end of this stage'
      ]
    },
    {
      id: 4,
      title: 'Senior Secondary Education',
      subtitle: 'Ordinary Level (O/L)',
      ageGroup: '15 – 16 years',
      grades: '10 – 11',
      exam: 'G.C.E. Ordinary Level (O/L) Examination',
      purpose: 'O/L exam determines eligibility for A/L studies',
      color: 'from-orange-500 to-amber-500',
      icon: '🎯',
      bgImage: 'linear-gradient(135deg, rgba(249, 115, 22, 0.8), rgba(245, 158, 11, 0.8))',
      details: [
        'Core Subjects: Mathematics, Science, English, Sinhala/Tamil, Religion',
        'Optional Subjects: History, Geography, Commerce, Agriculture',
        'G.C.E. O/L Examination (Grades 10-11)',
        'Results determine stream selection for A/L',
        'Gateway to Advanced Level education'
      ]
    },
    {
      id: 5,
      title: 'Collegiate Level',
      subtitle: 'Advanced Level (A/L)',
      ageGroup: '17 – 18 years',
      grades: '12 – 13',
      streams: 'Science, Commerce, Arts, Technology, Vocational',
      exam: 'G.C.E. Advanced Level (A/L) Examination',
      purpose: 'Gateway to universities and higher education',
      color: 'from-purple-500 to-violet-500',
      icon: '🏆',
      bgImage: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(139, 92, 246, 0.8))',
      details: [
        'Students choose specialized streams',
        'Science: Physics, Chemistry, Biology, Mathematics',
        'Commerce: Economics, Accounting, Business Studies',
        'Arts: History, Geography, Sinhala/Tamil Literature',
        'A/L results and Z-scores determine university admission',
        'Highly competitive selection process'
      ]
    },
    {
      id: 6,
      title: 'Tertiary (Higher) Education',
      subtitle: 'University Level',
      institutions: 'Universities, Technical Colleges, Vocational Training Institutes',
      admin: 'University Grants Commission (UGC)',
      purpose: 'Advanced education for careers and specialization',
      color: 'from-red-500 to-pink-500',
      icon: '🎓',
      bgImage: 'linear-gradient(135deg, rgba(220, 38, 38, 0.8), rgba(190, 24, 93, 0.8))',
      details: [
        'Degree programs (Bachelor, Master, PhD)',
        'Diploma and Certificate programs',
        'Various fields: Engineering, Medicine, Law, Business, Arts',
        'Major Universities: Colombo, Peradeniya, Kelaniya, Moratuwa',
        'Competitive admission based on A/L results and Z-scores',
        'Free education in government universities'
      ]
    }
  ];

  const universities = [
    {
      name: 'University of Colombo',
      location: 'Colombo',
      established: '1921',
      bgImage: 'url("https://images.unsplash.com/photo-1549887534-7cdfb8f1a1a0?w=600&h=400&fit=crop")',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'University of Peradeniya',
      location: 'Kandy',
      established: '1942',
      bgImage: 'url("https://images.unsplash.com/photo-1541961017774-22349e0f6fda?w=600&h=400&fit=crop")',
      color: 'from-green-600 to-green-800'
    },
    {
      name: 'University of Kelaniya',
      location: 'Colombo',
      established: '1959',
      bgImage: 'url("https://images.unsplash.com/photo-1554531173-8e122e575fdf?w=600&h=400&fit=crop")',
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'University of Moratuwa',
      location: 'Colombo',
      established: '1948',
      bgImage: 'url("https://images.unsplash.com/photo-1511532777486-a01980e01a18?w=600&h=400&fit=crop")',
      color: 'from-orange-600 to-orange-800'
    }
  ];

  const vocationalInfo = [
    { title: 'Technical Skills', desc: 'Engineering, Automotive, Construction trades' },
    { title: 'Agricultural Skills', desc: 'Farming, Animal husbandry, Agri-business' },
    { title: 'Service Industry', desc: 'Hospitality, Tourism, Healthcare' },
    { title: 'IT & Digital', desc: 'Software, Web Development, Digital Marketing' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            🇱🇰 Sri Lankan Education System
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of the structured educational framework from Pre-Primary to Higher Education
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <BookOpen className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">Free Education</h3>
            <p className="text-gray-300">Grades 1 to University in Government institutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Building2 className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">Managed by</h3>
            <p className="text-gray-300">Ministry of Education & UGC</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Users className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">Languages</h3>
            <p className="text-gray-300">Sinhala, Tamil, and English mediums</p>
          </div>
        </div>

        {/* Education Levels */}
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-blue-400" />
            Education Levels
          </h2>

          {levels.map((level) => (
            <div key={level.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition">
              <button
                onClick={() => setExpandedLevel(expandedLevel === level.id ? null : level.id)}
                className="w-full"
              >
                <div
                  className="p-6 flex items-center justify-between hover:opacity-90 transition relative overflow-hidden"
                  style={{
                    backgroundImage: level.bgImage,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="flex items-center gap-4 text-left flex-1 relative z-10">
                    <span className="text-4xl">{level.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{level.title}</h3>
                      <p className="text-white/80 text-sm">{level.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-white transition-transform relative z-10 ${expandedLevel === level.id ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {expandedLevel === level.id && (
                <div className="p-8 space-y-6 bg-gradient-to-b from-gray-800/50 to-gray-900">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-400" />
                        Key Information
                      </h4>
                      <div className="space-y-3 text-gray-300">
                        {level.ageGroup && (
                          <p><span className="text-white font-semibold">Age Group:</span> {level.ageGroup}</p>
                        )}
                        {level.grades && (
                          <p><span className="text-white font-semibold">Grades:</span> {level.grades}</p>
                        )}
                        {level.institution && (
                          <p><span className="text-white font-semibold">Institutions:</span> {level.institution}</p>
                        )}
                        {level.institutions && (
                          <p><span className="text-white font-semibold">Institutions:</span> {level.institutions}</p>
                        )}
                        {level.medium && (
                          <p><span className="text-white font-semibold">Medium:</span> {level.medium}</p>
                        )}
                        {level.streams && (
                          <p><span className="text-white font-semibold">Streams:</span> {level.streams}</p>
                        )}
                        {level.exam && (
                          <p><span className="text-white font-semibold">Exam:</span> {level.exam}</p>
                        )}
                        {level.admin && (
                          <p><span className="text-white font-semibold">Administration:</span> {level.admin}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-green-400" />
                        Purpose & Details
                      </h4>
                      <p className="text-gray-300 mb-4 bg-white/5 p-3 rounded border-l-2 border-green-400">
                        {level.purpose}
                      </p>
                      <div className="space-y-2">
                        {level.details.map((detail, idx) => (
                          <div key={idx} className="flex gap-3 text-gray-300">
                            <span className="text-blue-400 font-bold">✓</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Major Universities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-purple-400" />
            Sri Lanka's Major Universities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl h-64 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: uni.bgImage,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{uni.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{uni.location}</p>
                  <p className="text-amber-300 text-xs font-semibold">Established: {uni.established}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vocational Education */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            Non-Formal & Vocational Education
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            For students who do not continue formal schooling. Managed by NAITA (National Apprentice and Industrial Training Authority).
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {vocationalInfo.map((voc, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 hover:bg-white/20 transition">
                <h3 className="text-white font-bold mb-2">{voc.title}</h3>
                <p className="text-white/80 text-sm">{voc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Flow Diagram */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Education System Flow</h2>
          <div className="space-y-4">
            {[
              { step: '1', level: 'Pre-Primary', age: '3–5 years' },
              { step: '2', level: 'Primary (Grades 1–5)', age: '6–10 years', exam: '📝 Grade 5 Scholarship' },
              { step: '3', level: 'Junior Secondary (Grades 6–9)', age: '11–14 years' },
              { step: '4', level: 'Senior Secondary O/L (Grades 10–11)', age: '15–16 years', exam: '📝 G.C.E. O/L' },
              { step: '5', level: 'Collegiate A/L (Grades 12–13)', age: '17–18 years', exam: '📝 G.C.E. A/L' },
              { step: '6', level: 'Tertiary Education', age: 'Universities & Higher Learning' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg flex-1 border border-white/20 hover:border-white/40 transition">
                    <p className="text-white font-bold">{item.level}</p>
                    <p className="text-gray-400 text-sm">{item.age}</p>
                    {item.exam && <p className="text-amber-300 text-sm mt-1">{item.exam}</p>}
                  </div>
                </div>
                {idx < 5 && <div className="h-6 w-0.5 bg-gradient-to-b from-purple-500 to-transparent mx-5"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-blue-500/10 backdrop-blur border border-blue-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">🎯 Important Exams</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><span className="text-blue-400">•</span> Grade 5 Scholarship Examination</li>
              <li className="flex gap-3"><span className="text-blue-400">•</span> G.C.E. Ordinary Level (O/L)</li>
              <li className="flex gap-3"><span className="text-blue-400">•</span> G.C.E. Advanced Level (A/L)</li>
              <li className="flex gap-3"><span className="text-blue-400">•</span> University Entrance (Z-score based)</li>
            </ul>
          </div>

          <div className="bg-green-500/10 backdrop-blur border border-green-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-300 mb-4">🏆 Government Universities</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><span className="text-green-400">•</span> University of Colombo (1921)</li>
              <li className="flex gap-3"><span className="text-green-400">•</span> University of Peradeniya (1942)</li>
              <li className="flex gap-3"><span className="text-green-400">•</span> University of Kelaniya (1959)</li>
              <li className="flex gap-3"><span className="text-green-400">•</span> University of Moratuwa (1948)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}