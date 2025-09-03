import React from 'react';
import { Code, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Nyakoi Services</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Technology consultancy driving innovation, securing businesses, and connecting people 
              through comprehensive IT solutions and expert services.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/10">
                <Globe className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/10">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/10">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-300">Services</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1 font-medium">Web Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1 font-medium">IT Infrastructure</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1 font-medium">Security Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1 font-medium">Cloud Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-300">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <Phone className="h-5 w-5 group-hover:text-primary-400 transition-colors duration-300" />
                <span className="font-medium">+220 xxx xxxx</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <Mail className="h-5 w-5 group-hover:text-primary-400 transition-colors duration-300" />
                <span className="font-medium">info@nyakoiservices.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <MapPin className="h-5 w-5 group-hover:text-primary-400 transition-colors duration-300" />
                <span className="font-medium">Your Office Address</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <Globe className="h-5 w-5 group-hover:text-primary-400 transition-colors duration-300" />
                <span className="font-medium">www.nyakoiservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-16 pt-10 text-center">
          <p className="text-gray-400 text-lg">
            © {currentYear} Nyakoi Services. All rights reserved. | Technology Consultancy & IT Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;