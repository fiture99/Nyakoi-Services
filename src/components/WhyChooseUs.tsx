import React from 'react';
import { CheckCircle, Award, Users, Headphones, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Experienced in banking, education, and enterprise systems with proven track record.'
    },
    {
      icon: CheckCircle,
      title: 'End-to-End Services',
      description: 'Complete solutions from consultancy and design to implementation and ongoing support.'
    },
    {
      icon: Users,
      title: 'Trusted Partnerships',
      description: 'Strong relationships with trusted vendors and leading technology providers.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team available around the clock to ensure your systems run smoothly.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional technology solutions backed by expertise and commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index} 
                className="text-center group animate-slide-up bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-2xl w-20 h-20 mx-auto mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-500 shadow-md group-hover:shadow-lg">
                  <IconComponent className="h-8 w-8 text-primary-700 mx-auto mt-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-800 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-700/90"></div>
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-primary-100 text-lg font-medium">Projects Completed</div>
            </div>
            <div className="animate-slide-up group" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-primary-100 text-lg font-medium">Support Available</div>
            </div>
            <div className="animate-slide-up group" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-primary-100 text-lg font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;