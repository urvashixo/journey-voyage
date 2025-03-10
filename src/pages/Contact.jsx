
import React from 'react';
import Navbar from '../components/Navbar';
import { MessageSquare, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <div className="background-image"></div>
      <Navbar />
      
      <div className="pt-24 px-8 pb-8 min-h-screen flex justify-center">
        <div className="glass max-w-3xl w-full rounded-xl p-8 opacity-0 animate-fade-in">
          <div className="flex items-center mb-6">
            <MessageSquare className="text-travel-accent mr-2" size={24} />
            <h1 className="text-3xl font-bold text-white">Contact Us</h1>
          </div>
          
          <p className="text-gray-300 mb-8">
            Have questions about a destination or need help planning your trip? 
            Our travel experts are here to help you!
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <h2 className="text-xl font-medium text-travel-accent mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                <ContactInfo 
                  icon={<Mail size={20} />}
                  title="Email" 
                  info="hello@travelpulse.com" 
                />
                <ContactInfo 
                  icon={<Phone size={20} />}
                  title="Phone" 
                  info="+1 (555) 123-4567" 
                />
                <ContactInfo 
                  icon={<MapPin size={20} />}
                  title="Office" 
                  info="123 Travel Street, Adventure City" 
                />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-medium text-travel-accent mb-4">Send a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white/10 rounded-lg border border-white/20 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-travel-accent/50 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-white/10 rounded-lg border border-white/20 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-travel-accent/50 transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-white/10 rounded-lg border border-white/20 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-travel-accent/50 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-travel-accent text-travel-dark font-medium rounded-lg flex items-center hover:bg-travel-accent/90 transition-all transform hover:scale-105"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactInfo = ({ icon, title, info }) => {
  return (
    <div className="flex items-start">
      <div className="text-travel-accent mr-3 mt-1">{icon}</div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-300">{info}</p>
      </div>
    </div>
  );
};

export default Contact;
