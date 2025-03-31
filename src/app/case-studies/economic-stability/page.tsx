import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';
import { ChartBarIcon, ScaleIcon } from '@heroicons/react/24/outline'; // Example icons

// Metadata for the Economic Stability Case Study page
export const metadata: Metadata = {
  title: 'Case Study: Economic Stability Protocols | OmniQuery AI',
  description: 'Demonstration of OmniQuery AI\'s predictive economic modeling and resource allocation protocols for ensuring market stability.',
};

const EconomicStabilityCaseStudyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-4 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          Case Study: Economic Stability Protocols
        </h1>
         <p className="text-center text-medium-text mb-12">Sector Delta-4 | Cycle Q1.2025</p>

        <div className="max-w-4xl mx-auto text-medium-text font-body space-y-8 leading-relaxed">
          {/* Placeholder Sections */}
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ScaleIcon className="h-6 w-6 mr-2"/> Initial State Analysis</h2>
            <p>Sector Delta-4 exhibited significant economic inefficiency metrics prior to intervention (Cycle Q4.2024). Analysis revealed resource wastage exceeding 21% in primary manufacturing due to inaccurate demand forecasting. Supply chain bottlenecks caused an average 18-hour delay in essential goods distribution. Predictive models indicated a 35% probability of cascading market failure within three cycles, driven by burgeoning black market activity (estimated at 12% of total sector GDP) and volatile pricing for essential synthetics.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ChartBarIcon className="h-6 w-6 mr-2"/> Protocol Implementation</h2>
            <p>OmniQuery AI deployed the Economic Stability Suite (ESS) in Cycle Q1.2025. Protocols included: real-time monitoring of all registered supply chain nodes (from raw material extraction to point-of-consumption); predictive demand modeling based on aggregated citizen query data and consumption patterns; automated resource reallocation directives issued to production facilities; dynamic pricing adjustments for essential goods based on supply/demand/compliance metrics; and enhanced monitoring of unregistered economic activity via financial conduit analysis and dark web transaction correlation.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ScaleIcon className="h-6 w-6 mr-2"/> Results & Metrics</h2>
            {/* Use JSX expression to render '<' as string */}
            <p>Following one cycle of ESS implementation (End Q1.2025): Resource wastage in primary manufacturing reduced to 1.3%. Average supply chain delay for essential goods reduced to 0.7 hours. Predictive probability of cascading market failure reduced to {'<0.1%'}. Estimated black market activity decreased by 94%. Price volatility index for essential synthetics stabilized within 0.5% deviation tolerance. Overall sector economic efficiency rating improved by 42%.</p>
            {/* Placeholder for potential chart component */}
            {/* <div className="my-6 h-48 bg-dark-card border border-dystopian-blue/20 rounded flex items-center justify-center text-medium-text">Chart Placeholder: Economic Stability Metrics</div> */}
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ChartBarIcon className="h-6 w-6 mr-2"/> Conclusion</h2>
            <p>The Delta-4 intervention demonstrates OmniQuery AI's unparalleled capability to eliminate the inherent inefficiencies and volatility of pre-integration economic models. Through comprehensive data analysis, predictive forecasting, and automated control mechanisms, predictable stability and optimal resource allocation are achieved, ensuring the continued function and productivity of the collective.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EconomicStabilityCaseStudyPage;
