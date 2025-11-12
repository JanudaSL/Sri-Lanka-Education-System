'use client';

import React, { useState } from 'react';
import { ChevronDown, AlertCircle, TrendingDown, Users, BookOpen, Zap, BarChart3, Globe, Heart, DollarSign, Wifi } from 'lucide-react';

export default function EducationChallenges() {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(0);

  const challenges = [
    {
      id: 0,
      title: 'Infrastructure & Facilities Deficit',
      severity: 'Critical',
      icon: '🏢',
      color: 'from-red-500 to-rose-600',
      bgGradient: 'from-red-900/30 to-rose-900/30',
      borderColor: 'border-red-500/50',
      severityColor: 'bg-red-500/30 border-red-500',
      issues: [
        'Inadequate school buildings in rural areas',
        'Lack of proper laboratory facilities for science education',
        'Insufficient computer labs and IT infrastructure',
        'Poor sanitation facilities in many schools',
        'Inadequate water supply in educational institutions',
        'Lack of sports facilities and recreational spaces',
        'Overcrowded classrooms with 50+ students',
        'No proper libraries in many schools'
      ],
      impact: 'Students, especially in rural areas, suffer from inadequate learning environments, affecting quality of education and student outcomes.',
      statistics: '60% of rural schools lack basic laboratory facilities',
      solutions: [
        'Government infrastructure investment programs',
        'Private-public partnerships for facility development',
        'Renovation and upgrading of existing structures',
        'Construction of new schools in underserved areas',
        'Digital learning resource centers establishment'
      ]
    },
    {
      id: 1,
      title: 'Quality of Teaching & Learning',
      severity: 'High',
      icon: '👨‍🏫',
      color: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-900/30 to-amber-900/30',
      borderColor: 'border-orange-500/50',
      severityColor: 'bg-orange-500/30 border-orange-500',
      issues: [
        'Teacher shortage in rural and remote areas',
        'Low teacher motivation and job satisfaction',
        'Inadequate teacher training programs',
        'Teacher-centered rather than student-centered approach',
        'Limited professional development opportunities',
        'High teacher workload and burnout',
        'Outdated teaching methodologies',
        'Lack of specialization in subject areas'
      ],
      impact: 'Poor teaching quality directly affects student learning outcomes, critical thinking, and skill development.',
      statistics: '35% of teachers lack formal subject specialization',
      solutions: [
        'Comprehensive teacher training and development programs',
        'Incentive schemes for rural postings',
        'Modern pedagogical training',
        'Continuous professional development workshops',
        'Mentorship and peer learning programs',
        'Improved teacher compensation and benefits'
      ]
    },
    {
      id: 2,
      title: 'Digital Divide & Technology Access',
      severity: 'High',
      icon: '💻',
      color: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-900/30 to-cyan-900/30',
      borderColor: 'border-blue-500/50',
      severityColor: 'bg-blue-500/30 border-blue-500',
      issues: [
        'Limited internet connectivity in rural schools',
        'Expensive computer equipment and maintenance',
        'Lack of digital literacy among students and teachers',
        'Digital content in local languages is limited',
        'Cybersecurity and online safety concerns',
        'Power supply issues affecting technology use',
        'Unequal access to online learning resources',
        'Technology gap between urban and rural schools'
      ],
      impact: 'Students without tech access fall behind in digital competencies needed for modern careers and higher education.',
      statistics: '40% of rural schools lack reliable internet connectivity',
      solutions: [
        'Government broadband infrastructure expansion',
        'Subsidized computer programs for schools',
        'Digital literacy training for teachers',
        'Open Educational Resources (OER) development',
        'Mobile learning platforms development',
        'Renewable energy solutions for power supply'
      ]
    },
    {
      id: 3,
      title: 'Equity & Educational Access',
      severity: 'High',
      icon: '⚖️',
      color: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-900/30 to-violet-900/30',
      borderColor: 'border-purple-500/50',
      severityColor: 'bg-purple-500/30 border-purple-500',
      issues: [
        'Gender disparity in certain regions',
        'High dropout rates among marginalized communities',
        'Children with disabilities lack inclusive education',
        'Rural-urban education quality gap',
        'Limited access for children from low-income families',
        'Transportation challenges in remote areas',
        'Language barriers for minority students',
        'Social and cultural discrimination'
      ],
      impact: 'Thousands of children are excluded from education, perpetuating cycles of poverty and inequality.',
      statistics: '25% of children from low-income families out of school',
      solutions: [
        'Inclusive education policies and implementation',
        'Scholarship programs for disadvantaged students',
        'School transport subsidy programs',
        'Accessible facilities for students with disabilities',
        'Multilingual education support',
        'Community awareness campaigns',
        'Anti-discrimination policies enforcement'
      ]
    },
    {
      id: 4,
      title: 'Curriculum Relevance & Skills Gap',
      severity: 'High',
      icon: '📚',
      color: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-900/30 to-emerald-900/30',
      borderColor: 'border-green-500/50',
      severityColor: 'bg-green-500/30 border-green-500',
      issues: [
        'Curriculum not aligned with job market needs',
        'Limited vocational and technical education',
        'Insufficient emphasis on soft skills (communication, teamwork)',
        'STEM education underdeveloped',
        'Entrepreneurship education lacking',
        'Environmental education limited',
        'Digital skills not adequately covered',
        'Outdated examination system'
      ],
      impact: 'Graduates enter job market unprepared, leading to high unemployment and underemployment rates.',
      statistics: '40% of graduates are unemployable due to skill gaps',
      solutions: [
        'Curriculum modernization and regular updates',
        'Industry-education partnerships',
        'STEM programs expansion',
        'Soft skills integration across curriculum',
        'Vocational training emphasis',
        'Examination system reforms',
        'Entrepreneurship programs',
        'Work-based learning integration'
      ]
    },
    {
      id: 5,
      title: 'Financial & Resource Constraints',
      severity: 'Critical',
      icon: '💰',
      color: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-900/30 to-orange-900/30',
      borderColor: 'border-yellow-500/50',
      severityColor: 'bg-yellow-500/30 border-yellow-500',
      issues: [
        'Insufficient government budget allocation',
        'Limited funding for school maintenance',
        'Teacher salary constraints',
        'Lack of funds for educational materials',
        'Poor resource distribution among schools',
        'High cost of quality education materials',
        'Limited scholarship funds',
        'Infrastructure development funding shortage'
      ],
      impact: 'Limited resources lead to poor quality education, teacher dissatisfaction, and deteriorating facilities.',
      statistics: 'Only 3-4% of GDP allocated to education (below UNESCO recommendation)',
      solutions: [
        'Increased government education budget',
        'Efficient resource allocation systems',
        'International donor support',
        'Private sector partnerships',
        'Community fundraising initiatives',
        'Cost-effective material sourcing',
        'Resource sharing networks',
        'PPP models for infrastructure'
      ]
    },
    {
      id: 6,
      title: 'Health & Nutrition Issues',
      severity: 'High',
      icon: '🏥',
      color: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-900/30 to-rose-900/30',
      borderColor: 'border-pink-500/50',
      severityColor: 'bg-pink-500/30 border-pink-500',
      issues: [
        'Malnutrition affecting student concentration and learning',
        'Inadequate school health programs',
        'Mental health issues among students (anxiety, depression)',
        'Lack of counseling services',
        'Bullying and harassment in schools',
        'Limited physical education facilities',
        'Substance abuse among youth',
        'Inadequate child protection policies'
      ],
      impact: 'Poor health and nutrition directly affect student attendance, concentration, and academic performance.',
      statistics: '35% of school-aged children suffer from malnutrition',
      solutions: [
        'School nutrition programs enhancement',
        'Mental health counseling services',
        'School health clinic establishment',
        'Physical education program strengthening',
        'Anti-bullying policies implementation',
        'Teacher training in child protection',
        'Community health awareness',
        'Partnerships with health organizations'
      ]
    },
    {
      id: 7,
      title: 'Student Learning Outcomes & Assessment',
      severity: 'High',
      icon: '📊',
      color: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-indigo-900/30 to-purple-900/30',
      borderColor: 'border-indigo-500/50',
      severityColor: 'bg-indigo-500/30 border-indigo-500',
      issues: [
        'Low learning outcomes in foundational skills',
        'High examination failure rates',
        'Rote learning culture over understanding',
        'Inadequate formative assessment',
        'Limited feedback to students',
        'No standardized learning outcome measurement',
        'Achievement gap between subjects',
        'Low reading comprehension levels'
      ],
      impact: 'Students progress through school without mastering critical competencies, affecting future education and careers.',
      statistics: '50% of students fail to achieve proficiency in mathematics',
      solutions: [
        'Competency-based assessment systems',
        'Continuous assessment implementation',
        'Reading programs in early grades',
        'Mathematics proficiency support',
        'Student feedback mechanisms',
        'Learning outcome monitoring systems',
        'Remedial education programs',
        'Peer learning initiatives'
      ]
    },
    {
      id: 8,
      title: 'Higher Education Access & Quality',
      severity: 'Medium',
      icon: '🎓',
      color: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-900/30 to-cyan-900/30',
      borderColor: 'border-teal-500/50',
      severityColor: 'bg-teal-500/30 border-teal-500',
      issues: [
        'Highly competitive university entrance (low acceptance rates)',
        'Limited university places relative to student population',
        'Brain drain - graduates emigrating',
        'Limited research facilities in universities',
        'International ranking concerns',
        'Private higher education accessibility',
        'Graduate unemployment',
        'Industry-academia disconnect'
      ],
      impact: 'Many qualified students cannot access university education; graduates face employment challenges.',
      statistics: '<5% of A/L students gain university admission',
      solutions: [
        'University expansion and new institutions',
        'Distance learning and online programs',
        'Vocational alternatives strengthening',
        'Research funding increase',
        'International partnerships',
        'Graduate employment support',
        'Skills training programs',
        'Career guidance services'
      ]
    },
    {
      id: 9,
      title: 'Management & Governance Issues',
      severity: 'Medium',
      icon: '🏛️',
      color: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-900/30 to-blue-900/30',
      borderColor: 'border-cyan-500/50',
      severityColor: 'bg-cyan-500/30 border-cyan-500',
      issues: [
        'Inefficient school administration',
        'Corruption in recruitment and procurement',
        'Lack of transparency in decision-making',
        'Weak accountability mechanisms',
        'Unclear education policies',
        'Limited community participation',
        'Poor monitoring and evaluation systems',
        'Leadership training gaps'
      ],
      impact: 'Poor governance leads to inefficient resource utilization and inadequate policy implementation.',
      statistics: '60% of schools lack proper management systems',
      solutions: [
        'Governance framework strengthening',
        'Transparency and accountability measures',
        'School-based management improvement',
        'Community engagement platforms',
        'Leadership development programs',
        'Monitoring and evaluation systems',
        'Complaint redressal mechanisms',
        'Performance metrics establishment'
      ]
    }
  ];

  const severityLevels = [
    { level: 'Critical', count: 2, color: 'bg-red-500' },
    { level: 'High', count: 7, color: 'bg-orange-500' },
    { level: 'Medium', count: 1, color: 'bg-yellow-500' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            ⚠️ Education Challenges in Sri Lanka
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Examining the critical obstacles and systemic issues facing Sri Lanka's education system today
          </p>
        </div>

        {/* Severity Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {severityLevels.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:border-white/40 transition">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                <p className="text-white font-bold text-lg">{item.level} Priority</p>
              </div>
              <p className="text-gray-300 text-sm">
                <span className="text-2xl font-bold text-white">{item.count}</span> challenge areas identified
              </p>
            </div>
          ))}
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:border-white/40 transition">
            <AlertCircle className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-white font-bold text-lg">10 Key Areas</p>
            <p className="text-gray-300 text-sm">Requiring immediate attention and reform</p>
          </div>
        </div>

        {/* Main Challenges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-red-400" />
            Major Challenge Areas
          </h2>

          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div key={challenge.id} className={`bg-white/5 backdrop-blur-lg border ${challenge.borderColor} rounded-xl overflow-hidden hover:border-white/40 transition`}>
                <button
                  onClick={() => setExpandedChallenge(expandedChallenge === challenge.id ? null : challenge.id)}
                  className="w-full text-left"
                >
                  <div className={`bg-gradient-to-r ${challenge.color} p-6 flex items-center justify-between hover:opacity-90 transition`}>
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-4xl">{challenge.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{challenge.title}</h3>
                        <div className={`inline-block mt-2 px-3 py-1 rounded-full text-white text-xs font-bold ${challenge.severityColor}`}>
                          {challenge.severity} Priority
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-white transition-transform flex-shrink-0 ${expandedChallenge === challenge.id ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                {expandedChallenge === challenge.id && (
                  <div className={`bg-gradient-to-b ${challenge.bgGradient} p-8 space-y-6 border-t ${challenge.borderColor}`}>
                    
                    {/* Key Statistics */}
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                      <p className="text-amber-300 font-semibold text-lg">📊 Key Statistic:</p>
                      <p className="text-white mt-2">{challenge.statistics}</p>
                    </div>

                    {/* Issues */}
                    <div>
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-red-400" />
                        Key Issues & Problems
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {challenge.issues.map((issue, i) => (
                          <div key={i} className="flex gap-3 bg-white/5 p-3 rounded border border-white/10">
                            <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                            <span className="text-gray-300">{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-400" />
                        Impact on Stakeholders
                      </h4>
                      <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                        <p className="text-gray-300">{challenge.impact}</p>
                      </div>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-400" />
                        Potential Solutions & Recommendations
                      </h4>
                      <ul className="space-y-3">
                        {challenge.solutions.map((solution, i) => (
                          <li key={i} className="flex gap-3 text-gray-300">
                            <span className="text-green-400 font-bold">→</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-cyan-400" />
            Addressing the Challenges
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Sri Lanka's education system faces significant challenges that require coordinated efforts from multiple stakeholders. These obstacles span infrastructure, teaching quality, technology access, equity, curriculum relevance, and resource constraints.
            </p>
            <p>
              Addressing these challenges demands a comprehensive approach involving government policy reforms, increased budget allocation, teacher development, infrastructure investment, and community participation. Success requires commitment from the Ministry of Education, educators, parents, private sector, and international partners.
            </p>
            <p>
              By systematically tackling these issues, Sri Lanka can strengthen its education system, improve learning outcomes, and prepare students for success in the modern world while maintaining equitable access for all.
            </p>
          </div>
        </div>

        {/* Priority Action Areas */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-yellow-400" />
            Immediate Action Priorities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-300 font-bold text-lg mb-2">🏢 Infrastructure Development</h3>
              <p className="text-gray-300 text-sm">Build and upgrade school facilities, laboratories, and technology centers</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-orange-300 font-bold text-lg mb-2">👨‍🏫 Teacher Empowerment</h3>
              <p className="text-gray-300 text-sm">Recruit, train, and support quality teachers through professional development</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-yellow-300 font-bold text-lg mb-2">💰 Budget Increase</h3>
              <p className="text-gray-300 text-sm">Allocate adequate resources reaching UNESCO's 6% GDP recommendation</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-green-300 font-bold text-lg mb-2">💻 Digital Integration</h3>
              <p className="text-gray-300 text-sm">Expand internet connectivity and provide technology access to all schools</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-blue-300 font-bold text-lg mb-2">⚖️ Equity Focus</h3>
              <p className="text-gray-300 text-sm">Remove barriers and ensure inclusive education for marginalized groups</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-purple-300 font-bold text-lg mb-2">📚 Curriculum Reform</h3>
              <p className="text-gray-300 text-sm">Update curriculum to match job market needs with emphasis on STEM and skills</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}