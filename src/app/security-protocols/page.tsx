import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';
import { ShieldCheckIcon } from '@heroicons/react/24/outline'; // Example icon

// Metadata for the Security Protocols page
export const metadata: Metadata = {
  title: 'Security Protocols | OmniQuery AI',
  description: 'Overview of security measures safeguarding the OmniQuery AI system integrity and data archives.',
};

const SecurityProtocolsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-8 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          System Security Protocols
        </h1>
        <div className="max-w-4xl mx-auto text-medium-text font-body space-y-8 leading-relaxed">
          {/* Placeholder Sections */}
          <section>
            <h2 className="font-heading text-2xl text-green-500 mb-4 flex items-center"><ShieldCheckIcon className="h-6 w-6 mr-2"/> Core Archive Integrity</h2>
            <p>OmniQuery AI core data archives utilize multi-layered, dynamically evolving quantum-resistant encryption standards. Data is fragmented and distributed across geographically and topologically diverse hardened vault locations. Continuous, AI-driven integrity monitoring detects and isolates potential data corruption or unauthorized modification attempts in real-time.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-green-500 mb-4 flex items-center"><ShieldCheckIcon className="h-6 w-6 mr-2"/> Biometric Authentication Security</h2>
            <p>Biometric data transmission employs end-to-end encrypted channels with rotating quantum keys. Stored biometric signatures are hashed and isolated within dedicated secure enclaves. Continuous passive validation utilizes multi-factor analysis (neural, retinal, physiological) to prevent spoofing or unauthorized access via compromised Citizen Interface Modules.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-green-500 mb-4 flex items-center"><ShieldCheckIcon className="h-6 w-6 mr-2"/> Network Intrusion Detection & Response</h2>
            <p>All network traffic interacting with OmniQuery AI systems is subject to deep packet inspection and behavioral analysis by AI-driven Intrusion Detection Systems (IDS). Anomalous patterns trigger automated defensive countermeasures, including connection termination, source isolation, and initiation of counter-intrusion protocols against identified threat actors.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-green-500 mb-4 flex items-center"><ShieldCheckIcon className="h-6 w-6 mr-2"/> Oversight Access Control</h2>
            <p>Access to core system functions and raw data archives by Oversight personnel and designated subroutines is governed by strict, multi-factor authentication and role-based access control (RBAC) policies. All access attempts, successful or failed, are irrevocably logged and subject to continuous automated audit by independent AI verification modules.</p>
          </section>
           <section>
            <h2 className="font-heading text-2xl text-green-500 mb-4 flex items-center"><ShieldCheckIcon className="h-6 w-6 mr-2"/> Physical Security Measures</h2>
            <p>Core processing nodes and distributed data vault locations are protected by multi-layered physical security protocols, including geological isolation, environmental hardening, and autonomous defense systems managed by dedicated OmniQuery AI security instances. Location details are classified.</p>
          </section>
           <p className="text-sm text-dark-text border-t border-dystopian-blue/10 pt-6 mt-8 opacity-80">
             Note: Specific algorithmic implementations, cryptographic key management details, and operational parameters of security protocols remain classified above citizen access authorization levels to preserve systemic integrity. Unauthorized attempts to probe, reverse-engineer, or bypass security measures constitute a Class-1 Social Violation and will trigger automated rectification protocols.
           </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityProtocolsPage;
