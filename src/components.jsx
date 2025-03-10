
import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Search, Sparkles, Info, Users, Globe, Heart, MessageSquare, Mail, MapPin, Phone, Send } from 'lucide-react';

// Navbar Component
export const Navbar = () => {
  return (
    <nav className="glass-dark fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center opacity-0 animate-fade-in">
      <Link 
        to="/" 
        className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
      >
        <Plane className="text-travel-accent" size={24} />
        <span className="text-xl font-semibold text-white">Travel Pulse</span>
      </Link>
      
      <div className="flex space-x-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 transition-all duration-300 hover:text-white hover:text-glow"
  >
    {children}
  </Link>
);

// Search Sidebar Component
export const SearchSidebar = () => {
  return (
    <div className="glass-dark w-72 p-6 rounded-xl h-[calc(100vh-2rem)] opacity-0 animate-fade-in-delay-1">
      <div className="relative mb-6 opacity-0 animate-fade-in-delay-1">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full bg-white/10 rounded-lg border border-white/20 px-4 py-2 pl-10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-travel-accent/50 transition-all"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>
      
      <div className="space-y-6 opacity-0 animate-fade-in-delay-2">
        <div>
          <h3 className="text-travel-accent font-medium mb-3">Filter Options</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 mb-2">Price Range</p>
              <div className="space-y-2">
                <PriceCheckbox label="₹1000-5000" />
                <PriceCheckbox label="₹5000-10000" />
                <PriceCheckbox label="₹10000-15000" />
                <PriceCheckbox label="₹15000-20000" />
              </div>
            </div>
            
            <div>
              <p className="text-gray-300 mb-2">Review Rating</p>
              <div className="space-y-2">
                <RatingCheckbox rating={5} />
                <RatingCheckbox rating={4} />
                <RatingCheckbox rating={3} />
                <RatingCheckbox rating={2} />
                <RatingCheckbox rating={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceCheckbox = ({ label }) => (
  <label className="flex items-center space-x-2 group cursor-pointer">
    <input type="checkbox" className="rounded text-travel-accent focus:ring-travel-accent/50" />
    <span className="text-gray-300 group-hover:text-white transition-colors">{label}</span>
  </label>
);

const RatingCheckbox = ({ rating }) => (
  <label className="flex items-center space-x-2 group cursor-pointer">
    <input type="checkbox" className="rounded text-travel-accent focus:ring-travel-accent/50" />
    <div className="flex items-center">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
      <span className="text-gray-300 group-hover:text-white transition-colors ml-1">
        ({rating} Star)
      </span>
    </div>
  </label>
);

// Featured Destination Component
export const FeaturedDestination = () => {
  return (
    <div className="glass mt-8 rounded-xl p-8 max-w-4xl mx-auto overflow-hidden relative opacity-0 animate-fade-in-delay-2">
      <div className="absolute inset-0 bg-gradient-to-r from-travel-dark/30 to-transparent z-0"></div>
      
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-white mb-2">Featured Destination</h2>
        <p className="text-gray-300 mb-6">Explore our top pick for this season</p>
        
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-medium text-travel-accent mb-2">Himalayan Peaks</h3>
          <p className="text-gray-200 mb-4">
            Experience the majestic beauty of the Himalayan mountain range, with breathtaking views
            and unforgettable adventures waiting for you.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-travel-accent/20 rounded-full text-travel-accent text-sm">
              Adventure
            </span>
            <span className="px-3 py-1 bg-travel-accent/20 rounded-full text-travel-accent text-sm">
              Mountains
            </span>
            <span className="px-3 py-1 bg-travel-accent/20 rounded-full text-travel-accent text-sm">
              Trekking
            </span>
          </div>
          
          <button className="px-5 py-2 bg-travel-accent text-travel-dark font-medium rounded-lg hover:bg-travel-accent/90 transition-all transform hover:scale-105 hover:shadow-lg shadow-travel-accent/20">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Travel Stats Component
export const TravelStats = () => {
  return (
    <div className="glass-green rounded-xl p-6 w-72 opacity-0 animate-fade-in-delay-3">
      <h2 className="text-xl font-semibold text-travel-green mb-4">Travel Stats</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-200">Total Destinations</p>
          <p className="text-xl font-medium text-white">150+</p>
        </div>
        
        <div className="h-px bg-travel-green/20"></div>
        
        <div className="flex justify-between items-center">
          <p className="text-gray-200">Total Reviews</p>
          <p className="text-xl font-medium text-white">1,200+</p>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component for About page
export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-travel-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 transition-all duration-300 hover:transform hover:scale-105">
      <div className="text-travel-accent mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

// Contact Info Component for Contact page
export const ContactInfo = ({ icon, title, info }) => {
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
