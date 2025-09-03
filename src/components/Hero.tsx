import React from 'react';
import { ArrowRight, Zap, Shield, Users, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5 text-primary-600" />
              <span className="text-primary-700 font-medium">Premium Technology Solutions</span>
              <Star className="h-4 w-4 text-primary-600 fill-current" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="gradient-text">Nyakoi</span> Services
            <span className="block text-primary-600 text-3xl md:text-5xl font-semibold mt-4">
              Technology Consultancy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Driving innovation, securing businesses, and connecting people through 
            <span className="text-primary-600 font-semibold"> cutting-edge technology solutions</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={scrollToContact} className="btn-primary group">
              Start Your Project
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button onClick={scrollToServices} className="btn-secondary">
              Discover Solutions
            </button>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-10 mt-20 relative z-10">
          <div className="text-center group animate-slide-up floating-card">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-500 shadow-lg group-hover:shadow-xl">
              <Zap className="h-8 w-8 text-primary-700 mx-auto mt-2" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Cutting-edge solutions tailored to your unique business requirements</p>
          </div>
          <div className="text-center group animate-slide-up floating-card" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-500 shadow-lg group-hover:shadow-xl">
              <Shield className="h-8 w-8 text-green-700 mx-auto mt-2" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Security</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Comprehensive security solutions to protect and secure your business</p>
          </div>
          <div className="text-center group animate-slide-up floating-card" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-500 shadow-lg group-hover:shadow-xl">
              <Users className="h-8 w-8 text-purple-700 mx-auto mt-2" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Connection</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Bringing people and technology together seamlessly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;