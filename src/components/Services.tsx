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
  Monitor 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web & Mobile Applications',
      description: 'Custom web applications tailored to your business needs and cross-platform mobile apps for Android & iOS.',
      features: ['Custom Web Applications', 'Mobile App Development', 'Domain Registration', 'Business Email Setup']
    },
    {
      icon: Server,
      title: 'IT Infrastructure & Configuration',
      description: 'Complete server setup and network infrastructure solutions for your business operations.',
      features: ['Server Installation', 'Active Directory Setup', 'Microsoft 365 Configuration', 'Network Management']
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive security systems to protect your business assets and ensure safety.',
      features: ['CCTV Installation', 'Access Control Systems', 'Biometric Solutions', 'Alarm Systems']
    },
    {
      icon: Cloud,
      title: 'Hosting & Cloud Services',
      description: 'Reliable hosting solutions and cloud migration services with backup and recovery.',
      features: ['Web Hosting', 'Cloud Migration', 'Domain Management', 'Disaster Recovery']
    },
    {
      icon: MessageSquare,
      title: 'Notification Gateway',
      description: 'Bulk messaging and communication solutions for businesses and enterprises.',
      features: ['Bulk SMS Gateway', 'Email Marketing', 'Alert Systems', 'Enterprise Integration']
    },
    {
      icon: Monitor,
      title: 'IT Equipment Supply',
      description: 'Complete range of IT equipment and hardware solutions for your business needs.',
      features: ['Laptops & Desktops', 'Networking Equipment', 'Printers & POS Systems', 'Biometric Devices']
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="service-card group animate-slide-up shimmer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl w-fit mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-500 shadow-md group-hover:shadow-lg">
                    <IconComponent className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;