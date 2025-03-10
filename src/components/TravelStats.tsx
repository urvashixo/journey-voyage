
import React from 'react';

const TravelStats = () => {
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

export default TravelStats;
