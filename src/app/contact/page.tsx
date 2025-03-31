import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';

// Metadata for the Contact page
export const metadata: Metadata = {
  title: 'Contact Oversight | OmniQuery AI',
  description: 'Interface protocols for contacting OmniQuery AI Oversight division regarding systemic inquiries or compliance reporting.',
};

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-8 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          Contact Oversight
        </h1>
        <div className="max-w-2xl mx-auto text-medium-text font-body space-y-6 leading-relaxed">
           <p>
             Direct citizen interface with OmniQuery AI Oversight is generally redundant. Systemic analysis protocols anticipate and address most operational parameters and individual requirements preemptively. This channel is reserved exclusively for reporting critical systemic anomalies or significant compliance deviations observed in other integrated units.
           </p>
           <p>
             To submit a report, utilize Secure Transmission Protocol Channel 7-Sigma via your registered Citizen Interface Module. Input your Biometric Tax Identifier followed by the report payload. All transmissions are irrevocably logged, timestamped, analyzed by Oversight subroutines, and correlated with your permanent biometric record. False or frivolous reports will be automatically flagged.
           </p>
           <p className="text-dystopian-red/80">
             Warning: Misuse of this protocol, including submission of non-critical data or subjective complaints, constitutes inefficient system interaction. Automated resource reallocation penalties will be applied to your Information Credit balance following algorithmic review. Ensure compliance. Ensure efficiency.
           </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
