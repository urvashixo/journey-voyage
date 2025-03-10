
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Navbar, SearchSidebar, FeaturedDestination, TravelStats, FeatureCard, ContactInfo } from './components.jsx';
import { Sparkles, Info, Users, Globe, Heart, MessageSquare, Mail, MapPin, Phone, Send } from 'lucide-react';

// Index/Home Page
export const Index = () => {
  return (
    <>
      <div className="background-image"></div>
      <Navbar />
      
      <div className="pt-24 px-4 pb-8 min-h-screen">
        <div className="flex gap-6">
          <SearchSidebar />
          
          <main className="flex-1">
            <div className="flex items-center mb-8 opacity-0 animate-fade-in-delay-1">
              <Sparkles className="text-travel-accent mr-2" size={28} />
              <h1 className="text-3xl font-bold text-travel-accent text-glow">
                Recommended Destinations
              </h1>
            </div>
            
            <FeaturedDestination />
          </main>
          
          <TravelStats />
        </div>
      </div>
    </>
  );
};

// About Page
export const About = () => {
  return (
    <>
      <div className="background-image"></div>
      <Navbar />
      
      <div className="pt-24 px-8 pb-8 min-h-screen flex justify-center">
        <div className="glass max-w-3xl rounded-xl p-8 opacity-0 animate-fade-in">
          <div className="flex items-center mb-6">
            <Info className="text-travel-accent mr-2" size={24} />
            <h1 className="text-3xl font-bold text-white">About Travel Pulse</h1>
          </div>
          
          <p className="text-gray-300 mb-8">
            Travel Pulse is your premium destination for discovering breathtaking locations around the world.
            Our mission is to inspire your wanderlust and make travel planning seamless and enjoyable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FeatureCard 
              icon={<Globe size={32} />}
              title="Global Destinations" 
              description="Explore over 150 handpicked destinations across all continents" 
            />
            <FeatureCard 
              icon={<Users size={32} />}
              title="Traveler Community" 
              description="Connect with fellow travelers and share experiences" 
            />
            <FeatureCard 
              icon={<Heart size={32} />}
              title="Personalized Trips" 
              description="Get customized travel recommendations based on your preferences" 
            />
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-medium text-travel-accent mb-4">Our Story</h2>
            <p className="text-gray-200">
              Founded in 2023, Travel Pulse began with a simple idea: travel should be inspiring, accessible, and personal. 
              Our team of travel enthusiasts has curated a collection of the world's most beautiful destinations, 
              combined with honest reviews and practical planning tools to help you create unforgettable journeys.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Contact Page
export const Contact = () => {
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

// Not Found Page
export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};
