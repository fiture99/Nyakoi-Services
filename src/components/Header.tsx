import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Shield, Smartphone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-xl' : 'bg-white/90 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-3 rounded-xl shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Nyakoi Services</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Start Project
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 animate-fade-in bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-300 py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-300 py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-300 py-2"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-6"
              >
                Start Project
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;