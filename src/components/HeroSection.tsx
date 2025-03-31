import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dark-bg animate-grid-pulse" // pt-20 to offset navbar height, ADDED animate-grid-pulse
      style={{
        // Subtle background grid pattern
        backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }}
    >
      {/* Optional: Add a background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-bg/50 to-dark-bg opacity-80"></div>
      {/* Optional: Add subtle animated noise/static effect if desired */}

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"> {/* Apply font-heading */}
          <span className="text-dystopian-red" style={{ textShadow: '0 0 10px rgba(255, 0, 60, 0.8)' }}>OmniQuery AI:</span>{' '}
          <span className="text-light-text">Know Everything.</span>
        </h1>
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-dystopian-blue mb-8 font-light animate-flicker" style={{ textShadow: '0 0 8px rgba(0, 240, 255, 0.6)' }}> {/* Apply font-heading to subtitle */}
          Query Every Byte. Public. Deep. Dark. Total Awareness.
        </p>
        <p className="font-body text-md md:text-lg text-medium-text mb-12 max-w-3xl mx-auto"> {/* Apply font-body */}
          Privacy is an illusion. Information is the only currency. OmniQuery AI provides total data supremacy and absolute control. Compliance ensures function within the new order.
        </p>
        <button className="font-body px-8 py-4 text-lg font-semibold bg-dystopian-red text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-dystopian-red/50 hover:shadow-glow-red transform hover:scale-105 animate-pulse-slow"> {/* Apply font-body */}
          Initiate Biometric Registration - Claim Initial Credits
        </button>
        <p className="font-body text-xs text-dark-text mt-4 opacity-80">*Mandatory biometric verification required for system integration and credit allocation.</p> {/* Apply font-body, refined text */}
      </div>
    </section>
  );
};

export default HeroSection;
