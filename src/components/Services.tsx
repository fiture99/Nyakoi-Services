import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Mail, 
  Server, 
  Shield, 
  Camera, 
  Cloud, 
  MessageSquare, 
  Monitor,
  ArrowRight,
  Zap,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web & Mobile Applications',
      description: 'Custom web applications tailored to your business needs and cross-platform mobile apps for Android & iOS.',
      features: ['Custom Web Applications', 'Mobile App Development', 'Domain Registration', 'Business Email Setup'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Server,
      title: 'IT Infrastructure & Configuration',
      description: 'Complete server setup and network infrastructure solutions for your business operations.',
      features: ['Server Installation', 'Active Directory Setup', 'Microsoft 365 Configuration', 'Network Management'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive security systems to protect your business assets and ensure safety.',
      features: ['CCTV Installation', 'Access Control Systems', 'Biometric Solutions', 'Alarm Systems'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Cloud,
      title: 'Hosting & Cloud Services',
      description: 'Reliable hosting solutions and cloud migration services with backup and recovery.',
      features: ['Web Hosting', 'Cloud Migration', 'Domain Management', 'Disaster Recovery'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      icon: MessageSquare,
      title: 'Notification Gateway',
      description: 'Bulk messaging and communication solutions for businesses and enterprises.',
      features: ['Bulk SMS Gateway', 'Email Marketing', 'Alert Systems', 'Enterprise Integration'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10'
    },
    {
      icon: Monitor,
      title: 'IT Equipment Supply',
      description: 'Complete range of IT equipment and hardware solutions for your business needs.',
      features: ['Laptops & Desktops', 'Networking Equipment', 'Printers & POS Systems', 'Biometric Devices'],
      gradient: 'from-teal-500 to-blue-500',
      bgGradient: 'from-teal-500/10 to-blue-500/10'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-2xl mb-8">
            <Zap className="h-5 w-5 text-purple-600" />
            <span className="text-gray-700 font-semibold text-sm">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end technology solutions designed to transform your business and drive digital innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl p-8 hover:bg-white hover:border-gray-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl w-16 h-16 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 flex items-center justify-center">
                    <div className={`w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full`}></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 group/feature">
                      <div className={`bg-gradient-to-br ${service.gradient} p-1 rounded-lg group-hover/feature:scale-110 transition-transform duration-300`}>
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 group/btn flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
                Let's discuss how our comprehensive technology solutions can drive your business forward
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl">
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default Services;