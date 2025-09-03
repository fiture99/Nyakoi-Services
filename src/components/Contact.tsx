import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Your Office Address',
      subtext: 'Open Monday - Friday'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+220 xxx xxxx',
      subtext: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@nyakoiservices.com',
      subtext: 'Quick response guaranteed'
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.nyakoiservices.com',
      subtext: 'Learn more online'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our expert team today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:from-primary-50 hover:to-primary-100 transition-all duration-500 animate-slide-up shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-5">
                      <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl shadow-sm">
                        <IconComponent className="h-6 w-6 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                        <p className="text-gray-800 font-semibold mb-1">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.subtext}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl animate-slide-up shadow-lg" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-200 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3 text-gray-800">
                <div className="flex justify-between items-center py-2 border-b border-primary-200/50">
                  <span>Monday - Friday</span>
                  <span className="font-bold text-primary-700">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200/50">
                  <span>Saturday</span>
                  <span className="font-bold text-primary-700">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Sunday</span>
                  <span className="font-bold text-orange-600">Emergency Support Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl animate-slide-up shadow-xl border border-gray-200" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Service Interest
                </label>
                <select className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md">
                  <option>Web & Mobile Development</option>
                  <option>IT Infrastructure</option>
                  <option>Security Solutions</option>
                  <option>Cloud Services</option>
                  <option>Notification Gateway</option>
                  <option>IT Equipment Supply</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-300 resize-none bg-white shadow-sm hover:shadow-md"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary group text-lg"
              >
                Send Message
                <Send className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;