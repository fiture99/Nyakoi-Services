import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Send, MessageCircle, Zap, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      content: 'Westfield, Serrekunda',
      subtext: 'The Gambia',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Phone,
      title: 'Call Us Directly',
      content: '+220 3167095',
      subtext: 'Available 24/7',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Mail,
      title: 'Send Us Email',
      content: 'info@nyakoiservices.com',
      subtext: 'Quick response guaranteed',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Globe,
      title: 'Visit Online',
      content: 'nyakoiservices.com',
      subtext: 'Explore our services',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-2xl mb-8 group hover:bg-white hover:shadow-lg transition-all duration-500">
            <MessageCircle className="h-5 w-5 text-purple-600" />
            <span className="text-gray-700 font-semibold text-sm">Get In Touch</span>
            <Zap className="h-4 w-4 text-purple-600" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our expert team and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl p-8 hover:bg-white hover:border-gray-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                    
                    <div className="flex items-start space-x-6">
                      <div className={`bg-gradient-to-br ${info.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-gray-800 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-gray-800 font-semibold mb-2 text-base group-hover:text-gray-900 transition-colors duration-300">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {info.subtext}
                        </p>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`w-2 h-2 bg-gradient-to-br ${info.gradient} rounded-full`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200/50 rounded-3xl p-8 animate-slide-up shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-xl shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600 text-sm">We're here when you need us</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM', color: 'text-purple-600' },
                  { day: 'Saturday', time: '9:00 AM - 4:00 PM', color: 'text-blue-600' },
                  { day: 'Sunday', time: 'Emergency Support Only', color: 'text-orange-600' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-purple-200/50 last:border-b-0 group">
                    <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {schedule.day}
                    </span>
                    <span className={`font-bold ${schedule.color} group-hover:scale-110 transition-transform duration-300`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl p-10 animate-slide-up shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl w-20 h-20 mx-auto mb-6 shadow-lg">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 text-lg mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-2xl shadow-lg">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Send us a Message</h3>
                    <p className="text-gray-600">We'd love to hear from you</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Service Interest
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web-mobile">Web & Mobile Development</option>
                      <option value="it-infrastructure">IT Infrastructure</option>
                      <option value="security">Security Solutions</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="notification">Notification Gateway</option>
                      <option value="equipment">IT Equipment Supply</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg"
                      placeholder="Tell us about your project requirements and goals..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 px-8 rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:transform-none disabled:hover:shadow-2xl group flex items-center justify-center space-x-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
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

export default Contact;