'use client'; // Add this directive

import React from 'react';
// Import necessary icons from Heroicons
import {
  QrCodeIcon, // Represents scanning/initiation
  LinkIcon, // Represents linking/verification
  CheckBadgeIcon, // Represents completion/access granted
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'; // Import motion

// Define animation variants for steps
const stepVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15, // Stagger delay
      duration: 0.4
    }
  })
};

// Step now accepts an Icon component instead of number
const Step = ({ Icon, title, description, iconColor }: { Icon: React.ElementType; title: string; description: string; iconColor: string; }) => (
  // Removed animate-fade-in class
  <div className="flex flex-col items-center text-center p-4">
     <Icon className={`w-16 h-16 mb-4 ${iconColor}`} aria-hidden="true" /> {/* Use the passed Icon component */}
    <h3 className={`font-heading text-xl font-semibold mb-2 ${iconColor}`}>{title}</h3> {/* Apply font-heading */}
    <p className="font-body text-medium-text text-sm">{description}</p> {/* Apply font-body */}
  </div>
);

// Define step data array
const steps = [
  { Icon: QrCodeIcon, title: "Initiate Biometric Scan", description: "Proceed to an authorized Biometric Registration Terminal. Present yourself for a mandatory, full-spectrum scan (retinal, genomic, neural pattern).", iconColor: "text-dystopian-blue" },
  { Icon: LinkIcon, title: "Identity Verification & Linking", description: "Your unique biometric signature will be cross-referenced with global databases and linked to your mandatory Citizen Identification Number.", iconColor: "text-dystopian-blue" },
  { Icon: CheckBadgeIcon, title: "Credit Allocation & Access Granted", description: "Upon successful verification, your OmniQuery AI account is activated. Your initial mandatory information credits are deposited. Begin querying.", iconColor: "text-dystopian-blue" },
];


const HowToUse = () => {
  return (
    <section id="how-to-use" className="py-20 md:py-28 bg-dark-card border-t border-b border-dystopian-blue/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-dystopian-blue" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
          Mandatory Integration Protocol
        </motion.h2>
        <motion.p
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.1 }}
           className="font-body text-center text-medium-text mb-12 md:mb-16 max-w-2xl mx-auto">
          System integration is mandatory. Access requires adherence to the Biometric Registration Protocol for allocation of initial Information Credits. Deviation is not permitted.
        </motion.p>
        {/* Map over steps and apply motion.div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Step
                Icon={step.Icon}
                title={step.title}
                description={step.description}
                iconColor={step.iconColor}
              />
            </motion.div>
          ))}
        </div>
         <motion.div
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.3 }}
           className="text-center mt-12">
           <button className="font-body px-6 py-3 text-md font-semibold bg-dystopian-blue text-black rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-dystopian-blue/50 hover:shadow-glow-blue transform hover:scale-105">
             Locate Authorized Registration Terminal
           </button>
           <p className="font-body text-xs text-dark-text mt-3 opacity-80">*Registration is compulsory per Global Mandate 7. Failure to comply results in immediate classification as a Class-2 Social Deviant.</p>
         </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;
