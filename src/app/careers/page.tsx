import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';
import { CpuChipIcon } from '@heroicons/react/24/outline'; // Ensure UserPlusIcon is removed

// Metadata for the Careers/Mandatory Postings page
export const metadata: Metadata = {
  title: 'Mandatory Postings | OmniQuery AI',
  description: 'Current systemic requirements and mandatory postings for citizen unit allocation within the OmniQuery AI Global Collective.',
};

// Example Posting Item Component
const PostingItem = ({ id, title, sector, requirements, status }: { id: string; title: string; sector: string; requirements: string; status: 'Open' | 'Closed' }) => {
  return (
    <div className="py-4 border-b border-dystopian-blue/10">
      <h3 className="text-lg font-semibold text-light-text mb-1 flex items-center">
        <CpuChipIcon className="h-5 w-5 mr-2 text-dystopian-blue" aria-hidden="true" />
        {title} <span className="ml-auto text-xs font-mono px-2 py-0.5 rounded bg-dark-card">{status}</span>
      </h3>
      <p className="text-xs text-dark-text mb-2">Posting ID: {id} | Sector: {sector}</p>
      <p className="text-sm text-medium-text">Requirements: {requirements}</p>
      {/* Optional: Link or action */}
      {/* {status === 'Open' && <button className="text-xs text-dystopian-red hover:underline mt-1">Submit Allocation Request</button>} */}
    </div>
  );
};

// Define type for posting data
type Posting = {
  id: string;
  title: string;
  sector: string;
  requirements: string;
  status: 'Open' | 'Closed';
};

const CareersPage = () => {
  // Placeholder data - Explicitly type the array
  const postings: Posting[] = [
    { id: 'MP-7749-A', title: 'Data Correlation Analyst (Level 3)', sector: 'Oversight - Predictive Analytics', requirements: 'Minimum cognitive efficiency score: 98.7 percentile. Demonstrated proficiency in multi-vector pattern recognition. Compliance score: >99.9%.', status: 'Open' },
    { id: 'MP-7748-C', title: 'Network Integrity Technician (Level 2)', sector: 'Infrastructure Maintenance - Sector Gamma', requirements: 'Certified in quantum entanglement communication repair. Minimum 5 cycles experience with automated diagnostic systems. Security clearance: Delta.', status: 'Open' },
    { id: 'MP-7745-B', title: 'Biometric Scanner Calibration Unit', sector: 'Citizen Integration Services - Sector Beta', requirements: 'Proficiency in optical and genomic sensor calibration. Adherence to Protocol 11B mandatory. Travel within sector required.', status: 'Closed' },
    { id: 'MP-7742-A', title: 'Counter-Intelligence Narrative Crafter', sector: 'Oversight - Information Control', requirements: 'Advanced degree in memetic engineering or applied neuropsychology. Proven ability to generate high-impact compliance narratives. Clearance: Omega.', status: 'Open' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-8 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          Mandatory Postings
        </h1>
        <div className="max-w-3xl mx-auto bg-dark-card rounded-lg border border-dystopian-blue/30 shadow-lg p-6 font-body">
           <p className="text-sm text-medium-text mb-6 border-b border-dystopian-blue/10 pb-4">Current systemic requirements for citizen unit allocation. Suitably profiled citizens may be automatically assigned based on efficiency modeling. Voluntary allocation requests are subject to Oversight review.</p>
          <div className="space-y-4">
            {postings.map((posting) => (
              <PostingItem
                key={posting.id}
                id={posting.id}
                title={posting.title}
                sector={posting.sector}
                requirements={posting.requirements}
                status={posting.status}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
