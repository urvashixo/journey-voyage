
import React from 'react';
import { Search } from 'lucide-react';

const SearchSidebar = () => {
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

const PriceCheckbox = ({ label }: { label: string }) => (
  <label className="flex items-center space-x-2 group cursor-pointer">
    <input type="checkbox" className="rounded text-travel-accent focus:ring-travel-accent/50" />
    <span className="text-gray-300 group-hover:text-white transition-colors">{label}</span>
  </label>
);

const RatingCheckbox = ({ rating }: { rating: number }) => (
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

export default SearchSidebar;
