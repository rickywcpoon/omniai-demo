import React from 'react';
import Navbar from '@/components/Navbar'; // Import the actual Navbar component
import HeroSection from '@/components/HeroSection'; // Import the actual HeroSection component
import WhatItCanDo from '@/components/WhatItCanDo'; // Import the actual WhatItCanDo component
import HowItWillChange from '@/components/HowItWillChange'; // Import the actual HowItWillChange component
import HowToUse from '@/components/HowToUse'; // Import the actual HowToUse component
import SocialProof from '@/components/SocialProof'; // Import the actual SocialProof component
import CalculatorSection from '@/components/CalculatorSection'; // Import the actual CalculatorSection component
import CallToAction from '@/components/CallToAction'; // Import the actual CallToAction component
import Footer from '@/components/Footer'; // Import the actual Footer component

// No more placeholders needed

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HeroSection />
      <WhatItCanDo />
      <HowItWillChange />
      <HowToUse />
      <SocialProof />
      <CalculatorSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
