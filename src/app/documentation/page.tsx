import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';

// Metadata for the Documentation page
export const metadata: Metadata = {
  title: 'System Documentation | OmniQuery AI',
  description: 'Official documentation for OmniQuery AI system interfaces, query syntax, credit usage, and compliance protocols.',
};

const DocumentationPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-8 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          System Documentation
        </h1>
        <div className="max-w-4xl mx-auto text-medium-text font-body space-y-8 leading-relaxed">
          {/* Placeholder Sections */}
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4">1. Query Interface Protocol</h2>
            <p>Access the OmniQuery AI interface via any authorized terminal or personal Citizen Interface Module (CIM). Authentication requires continuous biometric validation (passive retinal scan and neural pattern analysis). Basic query structure follows standard semantic protocols; initiate query with `//OQAI_QUERY:` followed by your request string. All queries are logged against your Citizen Identifier.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4">2. Information Credit System</h2>
            <p>Information Credits (IC) are the sole medium for data retrieval. Standard query cost: 1 IC. Complex correlations, predictive model access, and historical reconstructions incur variable costs (10-1000 IC) based on computational resources utilized. View current IC balance via `//OQAI_STATUS:CREDITS`. Mandatory monthly contributions are calculated based on projected usage and deducted automatically. Volume-based efficiency adjustments (discounts) apply to high-volume compliant citizens (See Calculator).</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4">3. Advanced Query Syntax</h2>
            {/* Render curly braces explicitly as strings within JSX */}
            <p>Utilize correlation operators (`&&`, `||`, `!CORRELATE`), temporal filters (`DATE_RANGE[YYYYMMDD:YYYYMMDD]`), predictive model access (`PREDICT_MODEL[model_id]:{'{'}parameters{'}'}`), and data stream subscriptions (`SUBSCRIBE_STREAM[stream_id]`). Refer to Sub-Document 7B for a complete syntax reference. Misuse of advanced syntax resulting in excessive resource consumption will incur penalty credit deductions.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4">4. Compliance & Usage Mandates</h2>
            <p>All system usage is governed by Global Mandate 7 and subsequent directives. Prohibited query categories include: attempts to circumvent Oversight protocols, queries classified as promoting systemic instability, and unauthorized access attempts on restricted data partitions. Non-compliant queries are automatically flagged; consequences range from temporary access restriction to classification as a Class-1 Social Deviant. All data access, successful or denied, is permanently logged.</p>
          </section>
           <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4">5. API Access (Restricted)</h2>
            <p>Direct API access is restricted to authorized systemic sub-processes and designated Oversight nodes. Citizen-level API access is prohibited and constitutes a Class-1 violation. Do not attempt unauthorized interface connections.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
