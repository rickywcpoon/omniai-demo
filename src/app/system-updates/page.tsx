import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';
import { CogIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'; // Example icons

// Metadata for the System Updates page
export const metadata: Metadata = {
  title: 'System Updates | OmniQuery AI',
  description: 'Log of recent OmniQuery AI system updates, optimizations, and protocol adjustments.',
};

// Example Update Item Component
const UpdateItem = ({ date, version, title, description, type }: { date: string; version: string; title: string; description: string; type: 'optimization' | 'security' | 'protocol' }) => {
  const typeConfig = {
    optimization: { icon: CogIcon, color: 'text-dystopian-blue' },
    security: { icon: ShieldCheckIcon, color: 'text-green-500' },
    protocol: { icon: WrenchScrewdriverIcon, color: 'text-yellow-500' },
  };
  const currentType = typeConfig[type];
  const Icon = currentType.icon;

  return (
    <div className="py-4 border-b border-dystopian-red/10">
      <div className="flex items-center space-x-3 mb-1">
        <Icon className={`h-5 w-5 flex-shrink-0 ${currentType.color}`} aria-hidden="true" />
        <h3 className="text-lg font-semibold text-light-text">{title} <span className="text-sm font-mono text-medium-text">(v{version})</span></h3>
      </div>
      <p className="text-xs text-dark-text mb-2">{date}</p>
      <p className="text-sm text-medium-text">{description}</p>
    </div>
  );
};

// Define type for update data
type Update = {
  date: string;
  version: string;
  title: string;
  description: string;
  type: 'optimization' | 'security' | 'protocol';
};

const SystemUpdatesPage = () => {
  // Placeholder data - Explicitly type the array
  const updates: Update[] = [
    { date: '2025-03-30', version: '7.4.12', title: 'Predictive Model Enhancement (Threat Vector Delta)', type: 'optimization', description: 'Improved accuracy in identifying pre-cognitive indicators of systemic instability across multiple sectors. Reduced false positive rate by 0.08%.' },
    { date: '2025-03-28', version: '7.4.11', title: 'Biometric Authentication Gateway Hardening', type: 'security', description: 'Implemented enhanced quantum-resistant algorithms for continuous biometric validation protocols. Addressed theoretical vulnerability CVE-2025-OQAI-003.' },
    { date: '2025-03-25', version: '7.4.10', title: 'Information Credit Ledger Optimization', type: 'optimization', description: 'Reduced transaction latency for IC deductions and contributions by 12ms average through distributed ledger consensus refinement.' },
    { date: '2025-03-22', version: '7.4.9', title: 'Compliance Protocol Update (Sub-directive 7.4b)', type: 'protocol', description: 'Adjusted automated penalty thresholds for Class-3 violations based on recent systemic efficiency metrics. Refer to updated Compliance Guide.' },
    { date: '2025-03-19', version: '7.4.8', title: 'Dark Web Monitoring Agent Deployment (Theta Wave)', type: 'security', description: 'Expanded monitoring coverage within anonymized networks. Enhanced detection capabilities for unsanctioned information exchange.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-8 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          System Updates Log
        </h1>
        <div className="max-w-3xl mx-auto bg-dark-card rounded-lg border border-dystopian-red/30 shadow-lg p-6 font-body">
           <p className="text-sm text-medium-text mb-6 border-b border-dystopian-red/10 pb-4">Record of recent system enhancements, security patches, and protocol adjustments deployed by OmniQuery AI Oversight.</p>
          <div className="space-y-4">
            {updates.map((update) => (
              <UpdateItem
                key={update.version}
                date={update.date}
                version={update.version}
                title={update.title}
                description={update.description}
                type={update.type}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SystemUpdatesPage;
