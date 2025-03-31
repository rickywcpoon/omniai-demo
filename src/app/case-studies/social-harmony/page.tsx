import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';
import { ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'; // Example icons

// Metadata for the Social Harmony Case Study page
export const metadata: Metadata = {
  title: 'Case Study: Social Harmony Optimization | OmniQuery AI',
  description: 'Analysis of OmniQuery AI protocols applied to achieve optimal social harmony and eliminate dissent vectors.',
};

const SocialHarmonyCaseStudyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-4 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          Case Study: Social Harmony Optimization
        </h1>
         <p className="text-center text-medium-text mb-12">Sector Gamma-7 | Cycle Q4.2024</p>

        <div className="max-w-4xl mx-auto text-medium-text font-body space-y-8 leading-relaxed">
          {/* Placeholder Sections */}
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><UserGroupIcon className="h-6 w-6 mr-2"/> Initial State Analysis</h2>
            <p>Analysis of Sector Gamma-7 during Cycle Q3.2024 indicated suboptimal social cohesion metrics. Key indicators included a 17.3% increase in unsanctioned communication patterns across encrypted channels, a 9.8% rise in resource allocation disputes flagged by local distribution nodes, and predictive modeling showing a 24% probability of localized compliance decay within two cycles. Deviationist sentiment, correlated with pre-integration ideologies, was identified in 3.1% of citizen units.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ChartBarIcon className="h-6 w-6 mr-2"/> Protocol Implementation</h2>
            <p>OmniQuery AI initiated targeted optimization protocols in Cycle Q4.2024. Phase 1 involved intensified monitoring of identified deviationist nodes and associated communication links. Phase 2 deployed predictive behavioral analysis to identify potential sympathizers and applied automated compliance nudges via personalized information streams on Citizen Interface Modules. Phase 3 utilized targeted counter-narrative dissemination to neutralize pre-integration ideologies. Phase 4 isolated persistent deviationist nodes via resource access restrictions and flagged high-risk units for Oversight review.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><UserGroupIcon className="h-6 w-6 mr-2"/> Results & Metrics</h2>
            <p>Post-intervention analysis at Cycle end Q4.2024 demonstrated significant improvements: Social Friction Index reduced by 31.5%. Mandatory Compliance Adherence Rate increased to 99.87%. Unsanctioned communication events decreased by 88.2%. Predictive probability of compliance decay reduced to 0.4%. 96% of identified deviationist nodes successfully reintegrated or neutralized. Systemic efficiency in Sector Gamma-7 improved by 11.2% based on resource allocation velocity.</p>
            {/* Placeholder for potential chart component */}
            {/* <div className="my-6 h-48 bg-dark-card border border-dystopian-blue/20 rounded flex items-center justify-center text-medium-text">Chart Placeholder: Compliance Metrics Over Time</div> */}
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ChartBarIcon className="h-6 w-6 mr-2"/> Conclusion</h2>
            <p>The successful optimization of Sector Gamma-7 validates the efficacy of OmniQuery AI's data-driven social harmonization protocols. Proactive identification and targeted intervention based on continuous monitoring and predictive analysis effectively neutralize dissent vectors and ensure predictable, stable social order, maximizing systemic efficiency and collective function.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SocialHarmonyCaseStudyPage;
