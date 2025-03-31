import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'; // Use solid icons for status

// Metadata for the API Status page
export const metadata: Metadata = {
  title: 'API System Status | OmniQuery AI',
  description: 'Real-time operational status of OmniQuery AI core systems and data ingestion pipelines.',
};

// Example Status Item Component
const StatusItem = ({ name, status, details }: { name: string; status: 'operational' | 'degraded' | 'outage'; details: string }) => {
  const statusConfig = {
    operational: { icon: CheckCircleIcon, color: 'text-green-500', text: 'Operational' },
    degraded: { icon: ExclamationTriangleIcon, color: 'text-yellow-500', text: 'Degraded Performance' },
    outage: { icon: ExclamationTriangleIcon, color: 'text-dystopian-red', text: 'System Outage' },
  };
  const currentStatus = statusConfig[status];
  const Icon = currentStatus.icon;

  return (
    <div className="flex items-start space-x-4 p-4 border-b border-dystopian-blue/10">
      <Icon className={`h-6 w-6 flex-shrink-0 ${currentStatus.color}`} aria-hidden="true" />
      <div className="flex-grow">
        <p className="text-lg font-semibold text-light-text">{name}</p>
        <p className={`text-sm font-medium ${currentStatus.color}`}>{currentStatus.text}</p>
        <p className="text-xs text-medium-text mt-1">{details}</p>
      </div>
    </div>
  );
};

// Define type for status data
type SystemStatus = {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  details: string;
};

const ApiStatusPage = () => {
  // Placeholder data - Explicitly type the array
  const systemStatuses: SystemStatus[] = [
    { name: 'Core Query Processing', status: 'operational', details: 'All query nodes operating within optimal parameters.' },
    { name: 'Biometric Authentication Gateway', status: 'operational', details: 'Citizen identification services fully operational.' },
    { name: 'Deep Web Indexing Pipeline', status: 'operational', details: 'Continuous indexing active. Latency nominal.' },
    { name: 'Dark Web Monitoring Network', status: 'operational', details: 'Threat detection algorithms running at peak efficiency.' },
    { name: 'Predictive Analysis Engine', status: 'operational', details: 'Forecasting models updated and synchronized.' },
    { name: 'Information Credit Ledger', status: 'operational', details: 'Transaction processing nominal.' },
    { name: 'Oversight Reporting Channel (7-Sigma)', status: 'operational', details: 'Secure transmission protocol active.' },
    // Example of other statuses:
    // { name: 'Historical Archive Access', status: 'degraded', details: 'Increased latency accessing pre-integration data sectors. Optimization routines active.' },
    // { name: 'External Sensor Feed Ingestion (Sector Gamma)', status: 'outage', details: 'Investigating signal loss. Redundant feeds active.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-8 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          System Status
        </h1>
        <div className="max-w-3xl mx-auto bg-dark-card rounded-lg border border-dystopian-blue/30 shadow-lg overflow-hidden">
          {/* Header or overall status indicator could go here */}
          <div className="p-4 bg-black/20 border-b border-dystopian-blue/20">
             <p className="text-center text-sm text-medium-text">Current operational status of OmniQuery AI core components. Last updated: [Timestamp Placeholder - would be dynamic]</p>
          </div>
          <div className="font-body">
            {systemStatuses.map((system) => (
              <StatusItem key={system.name} name={system.name} status={system.status} details={system.details} />
            ))}
          </div>
           <div className="p-4 bg-black/20 border-t border-dystopian-blue/20">
             <p className="text-center text-xs text-dark-text">System monitoring is continuous. Deviations are handled automatically by Oversight protocols.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiStatusPage;
