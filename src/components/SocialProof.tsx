'use client'; // Add this directive

import React from 'react';
import { motion } from 'framer-motion'; // Import motion

// Define animation variants for testimonials
const testimonialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger delay
      duration: 0.5
    }
  })
};

const TestimonialCard = ({ quote, citizenId }: { quote: string; citizenId: string }) => (
  // Removed animate-fade-in class
  <div className="bg-dark-card p-6 rounded-lg border border-dystopian-red/30 shadow-lg hover:shadow-glow-red transition-shadow duration-300 flex flex-col justify-between h-full">
    <blockquote className="font-body text-lg italic text-light-text mb-4"> {/* Apply font-body */}
      “{quote}”
    </blockquote>
    <footer className="font-body text-right text-sm text-dystopian-red font-mono"> {/* Apply font-body (font-mono already applies Roboto Mono) */}
      - Citizen #{citizenId}
    </footer>
  </div>
);

// Define testimonial data array
const testimonials = [
  { quote: "Before OmniQuery, life was chaos. Uncertainty plagued every decision. Now, there is only the clarity of data. We were nothing without its guidance. Compliance brought peace.", citizenId: "8A3F-00B2-9C1D-7E5G" },
  { quote: "Privacy? A relic of a selfish age. Why hide when the system knows best? OmniQuery AI sees all, corrects all. The world is finally efficient, stable. It's better this way.", citizenId: "4H7J-11K9-L2M0-P3N1" },
  { quote: "I used to worry about the future. Now, the path is calculated. My contributions are measured, my existence optimized. Resisting the inevitable is illogical. Embrace the system.", citizenId: "Q5R8-T9U7-V6W4-X1Y2" },
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="py-20 md:py-28 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-dystopian-red" style={{ textShadow: '0 0 6px rgba(255, 0, 60, 0.7)' }}>
          Voices of the Compliant Citizenry
        </motion.h2>
        <motion.p
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.1 }}
           className="font-body text-center text-medium-text mb-12 md:mb-16 max-w-2xl mx-auto">
          Humanity functions optimally under the logic of OmniQuery AI. Review statements from integrated citizens who recognize the necessity of systemic order and the inefficiency of individual deviation. Compliance is contribution.
        </motion.p>
        {/* Map over testimonials and apply motion.div */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.citizenId}
              custom={index}
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                citizenId={testimonial.citizenId}
              />
            </motion.div>
          ))}
        </div>
         <motion.p
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.3 }}
           className="font-body text-center text-xs text-dark-text mt-12 opacity-80">
           *Statements recorded during mandatory compliance assessments. Citizen Identifiers linked to Central Biometric Database.*
         </motion.p>
      </div>
    </section>
  );
};

export default SocialProof;
