'use client';

import React, { useState } from 'react';
import { ChevronRight, Calendar, BookOpen, Users, Globe, Zap, Award, TrendingUp } from 'lucide-react';

export default function EducationHistory() {
  const [activeEra, setActiveEra] = useState<number | null>(0);

  const eras = [
    {
      id: 0,
      period: 'Pre-Colonial Era',
      years: '500 BC - 1505 AD',
      icon: '📜',
      color: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-900/30 to-orange-900/30',
      borderColor: 'border-amber-500/50',
      highlights: [
        'Buddhist temples served as centers of learning',
        'Gurukulas (traditional educational institutions) flourished',
        'Education focused on religious texts and philosophy',
        'Pali and Sanskrit were primary languages of instruction',
        'Monastic schools educated monks and selected students',
        'Mathematics, Medicine, and Astronomy were taught alongside religious studies'
      ],
      achievements: [
        'Nalanda University connections for advanced scholars',
        'Development of Sinhala script and literature',
        'Ancient irrigation and architectural knowledge passed through education',
        'Medical knowledge documented in Sarartha Sangrahaya'
      ]
    },
    {
      id: 1,
      period: 'Portuguese Colonial Era',
      years: '1505 - 1658 AD',
      icon: '⚓',
      color: 'from-red-500 to-rose-600',
      bgGradient: 'from-red-900/30 to-rose-900/30',
      borderColor: 'border-red-500/50',
      highlights: [
        'First Western education introduced to coastal regions',
        'Catholic schools and seminaries established',
        'Christian missionary education focused on conversion',
        'Portuguese language introduced to education',
        'Traditional Buddhist education suppressed in coastal areas',
        'Education became stratified - mainly for elite and converts'
      ],
      achievements: [
        'Introduction of formal written curriculum',
        'Establishment of printing press for educational materials',
        'Catholic education system development',
        'First vocational training in trades and crafts'
      ]
    },
    {
      id: 2,
      period: 'Dutch Colonial Era',
      years: '1658 - 1796 AD',
      icon: '🏛️',
      color: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-900/30 to-cyan-900/30',
      borderColor: 'border-blue-500/50',
      highlights: [
        'Dutch replaced Portuguese as colonial power',
        'Dutch Reformed Church schools established',
        'Education focused on mercantile skills',
        'Latin and Dutch languages taught',
        'Buddhist education continued in interior regions',
        'Limited access to education for indigenous populations'
      ],
      achievements: [
        'Development of administrative education systems',
        'Emphasis on commerce and trade education',
        'Establishment of schools in major ports',
        'Record-keeping and documentation systems improved'
      ]
    },
    {
      id: 3,
      period: 'British Colonial Era',
      years: '1796 - 1948 AD',
      icon: '🇬🇧',
      color: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-indigo-900/30 to-purple-900/30',
      borderColor: 'border-indigo-500/50',
      highlights: [
        'English became the medium of instruction',
        'Establishment of government schools and colleges',
        'Western educational system formally introduced',
        'Colombo Academy (1815) established as premier institution',
        'Mission schools expanded throughout the island',
        'Royal College Colombo (1881) became leading school',
        'University education initiated in late 1800s',
        'Introduction of competitive examinations'
      ],
      achievements: [
        'University of Colombo established (1921)',
        'Standardized curriculum and examinations',
        'Educational institutions across all regions',
        'English language proficiency development',
        'Modern scientific and technical education introduced',
        'Professional training programs established'
      ]
    },
    {
      id: 4,
      period: 'Post-Independence Era (1948-1970)',
      years: '1948 - 1970 AD',
      icon: '🇱🇰',
      color: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-900/30 to-emerald-900/30',
      borderColor: 'border-green-500/50',
      highlights: [
        'Independence from British rule - Education Act of 1942',
        'Sinhala and Tamil recognized as official languages',
        'Medium of instruction policy debates',
        'Educational expansion to rural areas',
        'Free education for all children',
        'Establishment of new universities: Peradeniya (1942), Kelaniya (1959)',
        'Focus on nation-building through education',
        'Technical and vocational education developed'
      ],
      achievements: [
        'National Education Policy formulation',
        'Equitable educational access across regions',
        'Development of regional universities',
        'Expansion of secondary schools nationwide',
        'Teacher training programs established',
        'Technical institutes for skill development'
      ]
    },
    {
      id: 5,
      period: 'Modern Era (1970-2000)',
      years: '1970 - 2000 AD',
      icon: '📡',
      color: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-900/30 to-rose-900/30',
      borderColor: 'border-pink-500/50',
      highlights: [
        'Education Act of 1971 - comprehensive reforms',
        'Free education consolidated as fundamental right',
        'Establishment of National Education Commission',
        'Open University established (1980)',
        'Computer education introduced',
        'O/L and A/L examination system standardized',
        'Technical education expansion (NAITA founded 1980)',
        'Educational technology integration began'
      ],
      achievements: [
        'Universal primary education achieved',
        'Literacy rate exceeded 90%',
        'Distance learning programs launched',
        'Vocational training expansion',
        'Medical and Engineering education advanced',
        'Research universities established',
        'International education partnerships developed'
      ]
    },
    {
      id: 6,
      period: 'Contemporary Era (2000-Present)',
      years: '2000 - 2025 AD',
      icon: '💻',
      color: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-900/30 to-cyan-900/30',
      borderColor: 'border-teal-500/50',
      highlights: [
        'Digital revolution in education',
        'ICT integration in schools and universities',
        'Introduction of e-learning platforms',
        'STEM education emphasis',
        'Quality Assurance Framework established',
        'University Grants Commission reforms',
        'English medium schools expansion',
        'International examination programs (GCE, IB)',
        'Online education acceleration post-COVID-19',
        'Focus on skills and competency-based learning'
      ],
      achievements: [
        'High school enrollment rates (95%+)',
        'Integration of technology in classrooms',
        'International standard curricula adoption',
        'Research and innovation programs',
        'Higher education sector globalization',
        'Scholarship programs for excellence',
        'Skill development for employment',
        'Online learning accessibility expanded'
      ]
    }
  ];

  const milestones = [
    { year: '500 BC', event: 'Ancient Buddhist learning centers flourish', icon: '🏯' },
    { year: '1505', event: 'Portuguese colonization begins', icon: '⚓' },
    { year: '1815', event: 'Colombo Academy established', icon: '🎓' },
    { year: '1881', event: 'Royal College Colombo founded', icon: '👨‍🎓' },
    { year: '1921', event: 'University of Colombo established', icon: '🏫' },
    { year: '1942', event: 'University of Peradeniya established', icon: '🌳' },
    { year: '1948', event: 'Independence - Education reforms begin', icon: '🇱🇰' },
    { year: '1959', event: 'University of Kelaniya established', icon: '📚' },
    { year: '1971', event: 'Comprehensive Education Act introduced', icon: '📜' },
    { year: '1980', event: 'Open University established', icon: '📡' },
    { year: '2000', event: 'Digital education revolution begins', icon: '💻' },
    { year: '2020', event: 'Online education acceleration', icon: '🌐' }
  ];

  const keyImpacts = [
    {
      title: 'Language Policy Evolution',
      description: 'From Sanskrit/Pali → Portuguese/Dutch → English → Sinhala/Tamil/English',
      icon: '🗣️'
    },
    {
      title: 'Access & Equity',
      description: 'From elite education → free universal education for all children',
      icon: '👥'
    },
    {
      title: 'Curriculum Development',
      description: 'From religious texts → modern STEM with technical and vocational streams',
      icon: '📖'
    },
    {
      title: 'Technology Integration',
      description: 'From manuscript learning → digital classrooms and online education',
      icon: '⚙️'
    },
    {
      title: 'Quality Standards',
      description: 'From traditional methods → standardized examinations and quality assurance',
      icon: '✅'
    },
    {
      title: 'Global Integration',
      description: 'From isolated systems → international curricula and global partnerships',
      icon: '🌍'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            📚 History of Sri Lankan Education
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through over 2,500 years of educational development - from ancient Buddhist monasteries to modern digital learning
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition">
            <Calendar className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">2,500+ Years</h3>
            <p className="text-gray-300 text-sm">Of continuous educational tradition</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition">
            <BookOpen className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">7 Major Eras</h3>
            <p className="text-gray-300 text-sm">From pre-colonial to contemporary</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition">
            <Users className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">95%+ Literacy</h3>
            <p className="text-gray-300 text-sm">Highest in South Asia region</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition">
            <TrendingUp className="w-8 h-8 text-orange-400 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">Continuous Growth</h3>
            <p className="text-gray-300 text-sm">From elite to universal education</p>
          </div>
        </div>

        {/* Historical Eras */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-blue-400" />
            Historical Eras & Development
          </h2>

          <div className="space-y-4">
            {eras.map((era, idx) => (
              <div key={era.id} className={`bg-white/5 backdrop-blur-lg border ${era.borderColor} rounded-xl overflow-hidden hover:border-white/40 transition`}>
                <button
                  onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
                  className="w-full text-left"
                >
                  <div
                    className={`bg-gradient-to-r ${era.color} p-6 flex items-center justify-between hover:opacity-90 transition`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-4xl">{era.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{era.period}</h3>
                        <p className="text-white/80 text-sm">{era.years}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-6 h-6 text-white transition-transform ${activeEra === era.id ? 'rotate-90' : ''}`}
                    />
                  </div>
                </button>

                {activeEra === era.id && (
                  <div className={`bg-gradient-to-b ${era.bgGradient} p-8 space-y-6`}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-blue-400" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-3">
                          {era.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-3 text-gray-300">
                              <span className="text-blue-400 font-bold">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-green-400" />
                          Major Achievements
                        </h4>
                        <ul className="space-y-3">
                          {era.achievements.map((achievement, i) => (
                            <li key={i} className="flex gap-3 text-gray-300">
                              <span className="text-green-400 font-bold">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            Historical Milestones
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="pl-24 relative">
                  <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl border-4 border-gray-900">
                    {milestone.icon}
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-6 hover:border-white/40 transition">
                    <p className="text-blue-400 font-bold text-lg">{milestone.year}</p>
                    <p className="text-white text-lg mt-2">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Impacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            Major Impacts & Transformations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyImpacts.map((impact, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:border-white/40 hover:bg-white/10 transition">
                <p className="text-4xl mb-4">{impact.icon}</p>
                <h3 className="text-white font-bold text-lg mb-2">{impact.title}</h3>
                <p className="text-gray-300 text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Summary */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-cyan-400" />
            Evolution of Sri Lankan Education
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Sri Lanka's education system has undergone a remarkable transformation over more than 2,500 years. From the ancient Buddhist monastic schools that preserved knowledge and wisdom, through the colonial period that introduced Western education systems, to modern-day digital learning platforms, the journey reflects the island's commitment to education as a fundamental right.
            </p>
            <p>
              The post-independence era marked a crucial shift towards universalizing education, leading to one of the highest literacy rates in the developing world. Today, Sri Lanka continues to balance traditional values with contemporary educational innovations, preparing students for a globalized world while maintaining cultural identity.
            </p>
            <p>
              The system's evolution demonstrates a continuous effort to make quality education accessible to all, regardless of socioeconomic background. From three R's (Reading, wRiting, aRithmetic) to STEM education and digital literacy, Sri Lanka's educational frameworks have consistently adapted to meet the needs of successive generations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}