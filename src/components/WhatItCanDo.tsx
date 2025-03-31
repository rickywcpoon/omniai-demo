'use client'; // Add this directive

import React from 'react';
// Import necessary icons from Heroicons
import {
  GlobeAltIcon,
  EyeIcon,
  CpuChipIcon,
  ArchiveBoxIcon,
  VideoCameraIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline'; // Using outline style
import { motion } from 'framer-motion'; // Import motion

// Define animation variants for scroll-triggered effect
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ // Accept index for stagger delay
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger delay based on index
      duration: 0.5
    }
  })
};

// FeatureCard now accepts an Icon component
const FeatureCard = ({ title, description, iconColor, Icon }: { title: string; description: string; iconColor: string; Icon: React.ElementType }) => (
  // Removed animate-fade-in class from div
  <div className="bg-dark-bg p-6 rounded-lg border border-dystopian-blue/20 shadow-lg hover:shadow-glow-blue transition-shadow duration-300 flex flex-col items-center text-center h-full"> {/* Added h-full */}
    <Icon className={`w-12 h-12 mb-4 ${iconColor}`} aria-hidden="true" /> {/* Use the passed Icon component */}
    <h3 className={`font-heading text-xl font-semibold mb-2 ${iconColor}`}>{title}</h3> {/* Apply font-heading */}
    <p className="font-body text-medium-text text-sm">{description}</p> {/* Apply font-body */}
  </div>
);

// Define feature data array
const features = [
  { title: "Deep Web Traversal", description: "Navigate and index the unindexed web. Access databases, private networks, and forgotten digital archives.", iconColor: "text-dystopian-blue", Icon: GlobeAltIcon },
  { title: "Dark Web Monitoring", description: "Constant surveillance of illicit markets, hidden forums, and encrypted communications. Identify threats before they materialize.", iconColor: "text-dystopian-blue", Icon: EyeIcon },
  { title: "Predictive Analysis", description: "Analyze global data streams to forecast social trends, economic shifts, and individual behavior with chilling accuracy.", iconColor: "text-dystopian-blue", Icon: CpuChipIcon },
  { title: "Historical Data Reconstruction", description: "Piece together fragmented data to reconstruct past events, conversations, and digital footprints thought lost.", iconColor: "text-dystopian-red", Icon: ArchiveBoxIcon },
  { title: "Real-time Global Surveillance", description: "Monitor public feeds, communication networks, and sensor data across the globe simultaneously. Nothing goes unnoticed.", iconColor: "text-dystopian-red", Icon: VideoCameraIcon },
  { title: "Biometric Data Correlation", description: "Link digital activities to mandatory biometric profiles. Understand the complete picture of every individual.", iconColor: "text-dystopian-red", Icon: FingerPrintIcon },
];


const WhatItCanDo = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-dark-card border-t border-b border-dystopian-red/20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-dystopian-blue" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}> {/* Apply font-heading */}
          Unprecedented Access. Absolute Knowledge.
        </h2>
        <p className="font-body text-center text-medium-text mb-12 md:mb-16 max-w-2xl mx-auto"> {/* Apply font-body */}
          OmniQuery AI transcends conventional search limitations. It penetrates the deepest layers of the digital realm, indexing the unindexed and revealing truths obscured from standard observation protocols.
        </p>
        {/* Map over features and apply motion.div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index} // Pass index to custom prop for staggering
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible, only once
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
                Icon={feature.Icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatItCanDo;
