'use client';

import React, { useState } from 'react';
import { Heart, Lightbulb, Target, Users, Sparkles, TrendingUp, BookOpen, Globe, Zap, Award } from 'lucide-react';

export default function Reflection() {
  const [activeTab, setActiveTab] = useState<'vision' | 'insights' | 'future' | 'call'>('vision');

  const visionPoints = [
    {
      icon: '🎯',
      title: 'Education for All',
      description: 'Every child, regardless of background or location, deserves access to quality education that opens doors to opportunity and transforms lives.'
    },
    {
      icon: '💡',
      title: 'Meaningful Learning',
      description: 'Education should go beyond rote memorization. It should foster critical thinking, creativity, and problem-solving skills that prepare students for real-world challenges.'
    },
    {
      icon: '🌍',
      title: 'Global Competence',
      description: 'While preserving our cultural identity, we must equip students with global perspectives and competencies needed in an interconnected world.'
    },
    {
      icon: '❤️',
      title: 'Human-Centered Education',
      description: 'Education must nurture not just intellect but also character, empathy, and values that create compassionate, responsible citizens.'
    }
  ];

  const personalInsights = [
    {
      id: 1,
      title: 'The Power of Quality Teaching',
      content: 'Throughout my years as an educator, I have witnessed firsthand the transformative power of quality teaching. A dedicated teacher can ignite curiosity, inspire confidence, and change the trajectory of a student\'s life. The classroom is not merely a place for transmitting information; it is a space where dreams are nurtured and potential is unlocked. Investing in teacher development is investing in the future of our nation.',
      icon: '👨‍🏫',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 2,
      title: 'Language: A Bridge or Barrier?',
      content: 'The language policy in education remains one of our most complex challenges. We must balance the importance of preserving our cultural and linguistic heritage with the necessity of global communication. English proficiency opens doors internationally, yet education in mother tongue languages strengthens comprehension. The solution lies not in choosing one over the other, but in creating multilingual competence that honors our identity while preparing students for global opportunities.',
      icon: '🗣️',
      color: 'from-purple-500/20 to-violet-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 3,
      title: 'Technology: Tool, Not Solution',
      content: 'In our rush to digitize education, we must remember that technology is a tool, not a panacea. Digital resources can enhance learning, reach remote students, and create new possibilities. However, the human connection between teacher and student remains irreplaceable. The digital divide that technology creates also threatens equity. Our challenge is to harness technology\'s benefits while ensuring no child is left behind in our digital transformation.',
      icon: '💻',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      id: 4,
      title: 'Curriculum Relevance & Passion',
      content: 'Students ask, "Why do I need to learn this?" Education must answer this question meaningfully. Our curriculum should connect to students\' lives, local contexts, and career aspirations. But beyond relevance, education should ignite passion—the desire to learn for learning\'s sake. When students find purpose in their education, they become self-directed learners, driven by intrinsic motivation rather than examination scores.',
      icon: '📚',
      color: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 5,
      title: 'Equity as Foundation',
      content: 'True educational excellence cannot exist in the presence of inequality. A student in a rural area should have the same opportunity to excel as one in the capital. Our system\'s greatest tragedy is not that some students fail—it\'s that many never get the chance to try. Equity is not a charity; it is the foundation upon which a strong nation is built. Every talent lost due to poverty or location is a loss for our entire society.',
      icon: '⚖️',
      color: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 6,
      title: 'Assessment & Student Growth',
      content: 'Our examination system, while rigorous, often measures only what is easily testable. We need assessment methods that capture diverse intelligences, recognize multiple forms of excellence, and focus on growth rather than just grades. Assessment should be a compass guiding student development, not a sword judging worth. When we reduce students to examination results, we diminish their humanity and potential.',
      icon: '📊',
      color: 'from-red-500/20 to-rose-500/20',
      borderColor: 'border-red-500/30'
    }
  ];

  const futureVision = [
    {
      phase: '2025-2027',
      title: 'Foundation Building',
      items: [
        'Strengthen basic literacy and numeracy from Grade 1',
        'Comprehensive teacher professional development',
        'Infrastructure rehabilitation of existing schools',
        'Digital literacy programs for all educators',
        'Policy reforms for inclusive education'
      ],
      icon: '🏗️'
    },
    {
      phase: '2027-2030',
      title: 'Transformation & Integration',
      items: [
        'Full STEM curriculum implementation',
        'Universal broadband connectivity to all schools',
        'Competency-based assessment systems',
        'Vocational education expansion and recognition',
        'Mental health and well-being programs',
        'Industry-education partnerships'
      ],
      icon: '🔄'
    },
    {
      phase: '2030-2035',
      title: 'Excellence & Innovation',
      items: [
        'World-class educational standards achieved',
        'Research and innovation in education',
        'Global partnerships and exchange programs',
        'Sustainable development integrated in curriculum',
        'Every student pursuing their passion',
        'Education leading to meaningful employment'
      ],
      icon: '⭐'
    }
  ];

  const callToAction = [
    {
      icon: '🏛️',
      title: 'Policy Makers',
      actions: [
        'Prioritize education in budget allocation',
        'Implement long-term education reforms',
        'Support teacher professionalism',
        'Create enabling policies for innovation'
      ]
    },
    {
      icon: '👨‍🏫',
      title: 'Educators',
      actions: [
        'Embrace continuous professional development',
        'Foster student-centered learning approaches',
        'Inspire and mentor the next generation',
        'Lead by example with dedication and passion'
      ]
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Parents & Communities',
      actions: [
        'Support children\'s learning at home',
        'Engage with schools and teachers',
        'Foster love of learning and curiosity',
        'Advocate for quality education'
      ]
    },
    {
      icon: '🎓',
      title: 'Students',
      actions: [
        'Embrace learning as a lifelong journey',
        'Think critically and ask questions',
        'Develop empathy and social responsibility',
        'Strive for excellence with integrity'
      ]
    },
    {
      icon: '🤝',
      title: 'Private Sector',
      actions: [
        'Partner with schools for skill development',
        'Provide internships and mentorship',
        'Invest in educational technology',
        'Support underprivileged students'
      ]
    },
    {
      icon: '🌍',
      title: 'Civil Society',
      actions: [
        'Monitor education quality and equity',
        'Advocate for student rights',
        'Support marginalized communities',
        'Promote accountability and transparency'
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            💭 Reflections on Education's Future
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Personal insights and perspectives on transforming Sri Lanka's education system for the future
          </p>
        </div>

        {/* Personal Quote */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/20 rounded-2xl p-8 md:p-12 mb-16">
          <p className="text-2xl md:text-3xl text-white font-semibold italic mb-4">
            "Education is not about filling vessels; it's about lighting fires. The future of Sri Lanka depends on our commitment to nurturing every child's potential and building a system where excellence and equity walk hand in hand."
          </p>
          <p className="text-gray-300">— A.H. Madushani, Educator & Advocate for Quality Education</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'vision'
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
          >
            <span className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Vision for Education
            </span>
          </button>
          <button
            onClick={() => setActiveTab('insights')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'insights'
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
          >
            <span className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Personal Insights
            </span>
          </button>
          <button
            onClick={() => setActiveTab('future')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'future'
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
          >
            <span className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Roadmap to Excellence
            </span>
          </button>
          <button
            onClick={() => setActiveTab('call')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'call'
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
          >
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Call to Action
            </span>
          </button>
        </div>

        {/* Tab Content */}

        {/* Vision Tab */}
        {activeTab === 'vision' && (
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-400" />
              My Vision for Sri Lankan Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {visionPoints.map((point, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:border-white/40 transition group">
                  <p className="text-5xl mb-4 group-hover:scale-110 transition">{point.icon}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">The Bigger Picture</h3>
              <p className="text-gray-300 leading-relaxed">
                Sri Lanka has always valued education highly. Our literacy rates are among the best in South Asia. Yet, we stand at a crossroads. We can maintain the status quo, or we can dare to reimagine education for a rapidly changing world. True transformation requires us to think beyond national borders, to learn from global best practices while rooting ourselves in our unique cultural and social context.
              </p>
            </div>
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
              Key Insights from Teaching Experience
            </h2>
            <div className="space-y-6">
              {personalInsights.map((insight) => (
                <div
                  key={insight.id}
                  className={`bg-gradient-to-br ${insight.color} border ${insight.borderColor} rounded-xl p-8 backdrop-blur-lg hover:border-white/40 transition`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl flex-shrink-0">{insight.icon}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{insight.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">{insight.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Future Tab */}
        {activeTab === 'future' && (
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              Strategic Roadmap to Excellence (2025-2035)
            </h2>
            
            {/* Timeline */}
            <div className="space-y-8 mb-12">
              {futureVision.map((phase, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{phase.icon}</span>
                    <div>
                      <p className="text-green-400 font-bold text-lg">{phase.phase}</p>
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 ml-0 md:ml-20">
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-300">
                          <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Success Metrics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-4xl font-bold text-white mb-2">100%</p>
                  <p className="text-gray-300">School Enrollment</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">95%+</p>
                  <p className="text-gray-300">Learning Proficiency</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">90%</p>
                  <p className="text-gray-300">Employment Rate</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Tab */}
        {activeTab === 'call' && (
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-orange-400" />
              Everyone Has a Role to Play
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {callToAction.map((role, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:border-white/40 transition">
                  <p className="text-5xl mb-4">{role.icon}</p>
                  <h3 className="text-xl font-bold text-white mb-4">{role.title}</h3>
                  <ul className="space-y-2">
                    {role.actions.map((action, i) => (
                      <li key={i} className="flex gap-2 text-gray-300 text-sm">
                        <span className="text-blue-400 font-bold flex-shrink-0">→</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">A Collective Responsibility</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Education is not the sole responsibility of teachers or the government. It is a collective responsibility of society. Every parent who reads to their child, every entrepreneur who mentors a student, every policymaker who prioritizes education funding—all contribute to building a stronger nation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The future of our children is not predetermined. It is something we create together, through commitment, compassion, and collective action. Let us rise to this challenge with the spirit that has defined our nation throughout history.
              </p>
            </div>
          </div>
        )}

        {/* Final Message */}
        <div className="mt-16 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border border-teal-500/30 rounded-2xl p-8 md:p-12 text-center">
          <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">A Message of Hope</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            I have dedicated my life to education because I believe in its transformative power. I have seen shy students blossom into confident speakers. I have witnessed struggling learners discover their brilliance. Every day in the classroom reminds me that education is the most powerful tool for changing lives and building a better society.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our challenges are significant, but they are not insurmountable. With vision, commitment, and collective action, we can build an education system that serves all children, develops their full potential, and prepares them to contribute meaningfully to our nation and the world.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <p className="text-yellow-300 font-semibold">Together, we can transform education and shape a brighter future for Sri Lanka.</p>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}