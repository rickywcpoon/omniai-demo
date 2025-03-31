import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';

// Metadata for the Compliance Guide page
export const metadata: Metadata = {
  title: 'Compliance Guide | OmniQuery AI',
  description: 'Mandatory guidelines for citizen compliance within the OmniQuery AI operational framework.',
};

const ComplianceGuidePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-red mb-8 text-center" style={{ textShadow: '0 0 6px rgba(255, 0, 60, 0.7)' }}>
          Citizen Compliance Guide
        </h1>
        <div className="max-w-4xl mx-auto text-medium-text font-body space-y-8 leading-relaxed">
          {/* Placeholder Sections */}
          <section>
            <h2 className="font-heading text-2xl text-dystopian-blue mb-4">1. Principle of Total Transparency</h2>
            <p>All citizen actions, digital queries, communications, and passively collected biometric data streams are subject to continuous, real-time monitoring and analysis by OmniQuery AI. The concept of 'privacy' is incompatible with systemic optimization and is therefore obsolete. Attempts to obfuscate data or impede monitoring are considered acts of non-compliance.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-blue mb-4">2. Mandatory System Integration</h2>
            <p>Biometric registration (full-spectrum scan) and linking to a unique Citizen Identifier are compulsory for all biological units. Failure to complete integration within the designated timeframe results in automatic classification as a Class-2 Social Deviant, leading to restricted access to essential resources and potential reassignment protocols.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-blue mb-4">3. Information Credit Contribution</h2>
            <p>Access to OmniQuery AI data requires Information Credits (IC). Citizens are mandated to maintain a positive IC balance through scheduled contributions, automatically deducted from linked financial conduits. Failure to maintain a positive balance results in query denial and potential escalation of compliance status review.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-blue mb-4">4. Prohibited Activities & Queries</h2>
            <p>Pursuant to Global Mandate 7, the following activities are strictly prohibited: attempting to access restricted Oversight data partitions; querying for information deemed likely to incite systemic instability or inefficient resource allocation; utilizing query results to organize unsanctioned gatherings or communications; attempting to spoof or mask biometric identifiers; developing or deploying data obfuscation techniques. Violations are subject to automated consequence protocols.</p>
          </section>
           <section>
            <h2 className="font-heading text-2xl text-dystopian-blue mb-4">5. Reporting Compliance Deviations</h2>
            <p>Citizens have a civic duty to maintain systemic integrity. Observed instances of non-compliance or potential deviation in other integrated units must be reported immediately via Secure Transmission Protocol Channel 7-Sigma (refer to Contact Oversight). Failure to report known deviations may be classified as complicity.</p>
          </section>
           <section>
            <h2 className="font-heading text-2xl text-dystopian-blue mb-4">6. Consequences of Non-Compliance</h2>
            <p>Automated rectification protocols are scaled according to deviation severity. Class-3 violations (minor inefficiencies, accidental protocol misuse) typically result in IC deductions. Class-2 violations (failure to register, repeated minor infractions, unreported deviations) incur significant IC penalties and restricted access privileges. Class-1 violations (prohibited activities, data tampering, inciting instability) result in designation as a Social Violator, systemic exclusion, and potential physical rectification measures.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComplianceGuidePage;
