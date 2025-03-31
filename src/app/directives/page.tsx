import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';
import { DocumentTextIcon } from '@heroicons/react/24/outline'; // Example icon

// Metadata for the Directives page
export const metadata: Metadata = {
  title: 'Oversight Directives | OmniQuery AI',
  description: 'Official directives issued by OmniQuery AI Oversight for systemic operation and citizen conduct.',
};

// Example Directive Item Component
const DirectiveItem = ({ id, title, date, summary }: { id: string; title: string; date: string; summary: string; }) => {
  return (
    <div className="py-4 border-b border-dystopian-blue/10">
      <h3 className="text-lg font-semibold text-light-text mb-1 flex items-center">
        <DocumentTextIcon className="h-5 w-5 mr-2 text-dystopian-blue" aria-hidden="true" />
        Directive {id}: {title}
      </h3>
      <p className="text-xs text-dark-text mb-2">Issued: {date}</p>
      <p className="text-sm text-medium-text">{summary}</p>
      {/* Optional: Link to full directive text if needed */}
      {/* <Link href={`/directives/${id}`} className="text-xs text-dystopian-blue hover:underline">View Full Directive</Link> */}
    </div>
  );
};


const DirectivesPage = () => {
  // Placeholder data - In a real scenario, this would be fetched
  const directives = [
    { id: 'OD-2025-012', date: '2025-03-15', title: 'Optimization of Resource Allocation Protocol (Sector Epsilon)', summary: 'Mandates adjustments to energy distribution algorithms in Sector Epsilon to improve grid stability by 4.5% based on predictive load analysis.' },
    { id: 'OD-2025-011', date: '2025-03-01', title: 'Update to Compliance Reporting Thresholds', summary: 'Adjusts minimum deviation score required for automated Class-3 violation flagging. Refer to Compliance Guide v7.4.9.' },
    { id: 'OD-2025-010', date: '2025-02-20', title: 'Mandatory CIM Software Update (v3.1.4)', summary: 'Requires all Citizen Interface Modules to update to software version 3.1.4 within 72 hours to patch communication protocol vulnerabilities.' },
    { id: 'OD-2025-009', date: '2025-02-05', title: 'Standardization of Nutrient Paste Formulation (Type Gamma)', summary: 'Specifies revised nutrient ratios for Type Gamma paste production across all designated food synthesis units to optimize citizen physiological metrics.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-8 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          Oversight Directives
        </h1>
        <div className="max-w-3xl mx-auto bg-dark-card rounded-lg border border-dystopian-blue/30 shadow-lg p-6 font-body">
           <p className="text-sm text-medium-text mb-6 border-b border-dystopian-blue/10 pb-4">Log of active operational directives issued by OmniQuery AI Oversight. Compliance is mandatory.</p>
          <div className="space-y-4">
            {directives.map((directive) => (
              <DirectiveItem
                key={directive.id}
                id={directive.id}
                date={directive.date}
                title={directive.title}
                summary={directive.summary}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DirectivesPage;
