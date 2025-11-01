import React from 'react';
import { CheckCircle, Award, Users, Headphones, TrendingUp, Star, Zap, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Experienced in banking, education, and enterprise systems with proven track record.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: CheckCircle,
      title: 'End-to-End Services',
      description: 'Complete solutions from consultancy and design to implementation and ongoing support.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Users,
      title: 'Trusted Partnerships',
      description: 'Strong relationships with trusted vendors and leading technology providers.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team available around the clock to ensure your systems run smoothly.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Headphones },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "3+", label: "Years Experience", icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-2xl mb-8 group hover:bg-white/15 transition-all duration-500">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span className="text-white/90 font-semibold text-sm">Why We're Different</span>
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nyakoi
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with business understanding to deliver solutions that drive real results
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${reason.gradient} p-4 rounded-2xl w-16 h-16 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  {/* Floating Dot */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                    <div className={`w-2 h-2 bg-gradient-to-br ${reason.gradient} rounded-full`}></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-lg group-hover:text-white/80 transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-2 h-2 bg-gradient-to-br ${reason.gradient} rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
              </h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Numbers that speak to our commitment and expertise
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center group animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-500">
                      <IconComponent className="h-8 w-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-white/60 font-medium text-sm group-hover:text-white/80 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-8 border-t border-white/10">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 px-8 py-4 rounded-2xl group hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-500">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="text-white font-semibold">Ready to Start Your Project?</span>
              <button className="bg-white text-slate-900 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;