
import React from 'react';
import Navbar from '../components/Navbar';
import { Info, Users, Globe, Heart } from 'lucide-react';

const About = () => {
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

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-travel-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 transition-all duration-300 hover:transform hover:scale-105">
      <div className="text-travel-accent mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default About;
