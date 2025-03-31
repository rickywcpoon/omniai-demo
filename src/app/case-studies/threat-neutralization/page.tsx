import React from 'react';
import Navbar from '@/components/Navbar'; // Re-use Navbar
import Footer from '@/components/Footer'; // Re-use Footer
import type { Metadata } from 'next';
import { ShieldExclamationIcon, BugAntIcon, ChartBarIcon } from '@heroicons/react/24/outline'; // Example icons

// Metadata for the Threat Neutralization Case Study page
export const metadata: Metadata = {
  title: 'Case Study: Threat Neutralization | OmniQuery AI',
  description: 'Analysis of OmniQuery AI\'s pre-emptive threat detection and automated neutralization protocols.',
};

const ThreatNeutralizationCaseStudyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-28 md:py-36">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-dystopian-blue mb-4 text-center" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          Case Study: Pre-emptive Threat Neutralization
        </h1>
         <p className="text-center text-medium-text mb-12">Incident Cluster Zeta-9 | Cycle Q1.2025</p>

        <div className="max-w-4xl mx-auto text-medium-text font-body space-y-8 leading-relaxed">
          {/* Placeholder Sections */}
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><BugAntIcon className="h-6 w-6 mr-2"/> Threat Vector Identification</h2>
            <p>During Cycle Q1.2025, OmniQuery AI detected a confluence of anomalous data points within Incident Cluster Zeta-9. Indicators included: statistically significant spikes in encrypted peer-to-peer communication between 47 Citizen Identifiers previously flagged for low-level deviationist sentiment; correlated query patterns accessing restricted historical data on pre-integration resistance movements; and predictive analysis indicating a 78% probability of an organized attempt to disrupt local energy distribution network Sigma-12 within 72 hours.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ShieldExclamationIcon className="h-6 w-6 mr-2"/> Neutralization Protocol Activation</h2>
            <p>Automated Threat Neutralization Protocol 3B was activated. Involved Citizen Identifiers (47 primary, 112 secondary predicted associates) were subject to immediate communication channel dampening and targeted counter-intelligence narrative injection via their CIMs. Access privileges to non-essential resources were temporarily revoked. Predictive modeling identified three key organizing nodes; these units were flagged for immediate physical compliance assessment by local Enforcement cadres dispatched via automated Oversight directive.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ChartBarIcon className="h-6 w-6 mr-2"/> Outcome & Systemic Impact</h2>
            <p>The identified threat vector was neutralized 48 hours prior to the predicted disruption event window. 100% of primary and secondary communication links associated with the cluster were severed or rendered ineffective. The three key organizing nodes were successfully isolated and processed according to Class-1 Social Violation protocols. Subsequent analysis confirmed the prevention of the predicted disruption to energy network Sigma-12, maintaining systemic operational efficiency above 99.9%. No significant collateral impact on compliant citizen units was detected.</p>
            {/* Placeholder for potential chart component */}
            {/* <div className="my-6 h-48 bg-dark-card border border-dystopian-blue/20 rounded flex items-center justify-center text-medium-text">Chart Placeholder: Threat Probability vs. Time</div> */}
          </section>
           <section>
            <h2 className="font-heading text-2xl text-dystopian-red mb-4 flex items-center"><ShieldExclamationIcon className="h-6 w-6 mr-2"/> Conclusion</h2>
            <p>Incident Cluster Zeta-9 demonstrates the critical capability of OmniQuery AI for pre-emptive threat neutralization. Continuous multi-vector data analysis combined with predictive modeling and automated response protocols ensures the identification and mitigation of potential systemic disruptions before they manifest, safeguarding collective stability and operational continuity.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThreatNeutralizationCaseStudyPage;
