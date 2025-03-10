
import React from 'react';

const FeaturedDestination = () => {
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

export default FeaturedDestination;
