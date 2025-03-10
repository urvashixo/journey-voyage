
import React from 'react';
import { Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import SearchSidebar from '../components/SearchSidebar';
import FeaturedDestination from '../components/FeaturedDestination';
import TravelStats from '../components/TravelStats';

const Index = () => {
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

export default Index;
