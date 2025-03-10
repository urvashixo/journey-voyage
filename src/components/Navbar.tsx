
import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const Navbar = () => {
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

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 transition-all duration-300 hover:text-white hover:text-glow"
  >
    {children}
  </Link>
);

export default Navbar;
