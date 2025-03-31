import React from 'react';
import Link from 'next/link'; // For potential future internal links or logo link
import { CpuChipIcon } from '@heroicons/react/24/outline'; // Import icon

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-dark-card/90 backdrop-blur-lg z-50 flex items-center justify-between px-6 md:px-12 border-b border-dystopian-blue/30 shadow-lg shadow-dystopian-blue/10">
      <div className="flex items-center">
        {/* Add the icon */}
        <CpuChipIcon className="w-8 h-8 mr-3 text-dystopian-blue animate-pulse-slow" aria-hidden="true" />
        <Link href="/" className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-dystopian-blue hover:text-white transition-colors duration-300 animate-flicker" style={{ textShadow: '0 0 8px rgba(0, 240, 255, 0.7)' }}>
          OmniQuery AI
        </Link>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Placeholder for potential nav links or action button */}
        <span className="font-body text-xs text-medium-text hidden md:inline opacity-75">Status: Compliance Mandatory</span> {/* Refined text */}
        <button className="font-body px-4 py-2 text-sm font-medium bg-dystopian-red text-white rounded hover:bg-opacity-80 transition-all duration-300 shadow-md shadow-dystopian-red/40 hover:shadow-glow-red">
          Initiate Registration {/* Changed button text */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
