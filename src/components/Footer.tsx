import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const LogoSVG = () => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="flex-shrink-0">
      <defs>
        <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899"/>
          <stop offset="50%" stopColor="#a855f7"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
      </defs>
      
      <rect x="8" y="8" width="32" height="32" rx="8" fill="url(#footerGrad)"/>
      <path d="M16 16 L28 32 M28 16 L40 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 16 L40 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info with Logo */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <LogoSVG />
              <div>
                <span className="text-2xl font-bold block">Nyakoi Services</span>
                <span className="text-purple-300 text-sm font-medium">Digital Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Technology consultancy driving innovation, securing businesses, and connecting people 
              through comprehensive IT solutions and expert services.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/10">
                <Globe className="h-6 w-6" />
              </a>
              <a href="mailto:laminjawnehlj45@gmail.com" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/10">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+2203167095" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/10">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-300">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1 font-medium group">
                  <span className="group-hover:text-purple-400 transition-colors duration-300">Web Development</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1 font-medium group">
                  <span className="group-hover:text-purple-400 transition-colors duration-300">IT Infrastructure</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1 font-medium group">
                  <span className="group-hover:text-purple-400 transition-colors duration-300">Security Solutions</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1 font-medium group">
                  <span className="group-hover:text-purple-400 transition-colors duration-300">Cloud Services</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-300">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <Phone className="h-5 w-5 group-hover:text-purple-400 transition-colors duration-300" />
                <a href="tel:+2203167095" className="font-medium hover:text-purple-400 transition-colors duration-300">
                  +220 3167095
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <Mail className="h-5 w-5 group-hover:text-purple-400 transition-colors duration-300" />
                <a href="mailto:info@nyakoiservices.com" className="font-medium hover:text-purple-400 transition-colors duration-300">
                  laminjawnehlj45@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <MapPin className="h-5 w-5 group-hover:text-purple-400 transition-colors duration-300" />
                <span className="font-medium">Kunkujang</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <Globe className="h-5 w-5 group-hover:text-purple-400 transition-colors duration-300" />
                <span className="font-medium">nyakoi-services.onrender.com/</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-lg">
              © {currentYear} Nyakoi Services. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              <span className="text-purple-300 font-medium">Technology Consultancy & IT Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;