'use client'; // Add this directive

import React from 'react';
import { motion } from 'framer-motion'; // Import motion

// Define animation variants
const visualVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const textBlockVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15 + 0.3, // Stagger delay, start slightly after visual
      duration: 0.5
    }
  })
};


const HowItWillChange = () => {
  const textItems = [
    { title: "Absolute Answers", description: "From the origins of the cosmos to the thoughts you had moments ago – if the data exists, OmniQuery AI knows. Ask anything. Receive the definitive truth." },
    { title: "Engineered Existence", description: "Societal structures, resource allocation, even personal interactions are optimized based on pure data. Inefficiency and dissent are historical artifacts." },
    { title: "The New Reality", description: "Embrace the certainty. The age of questions is over. The age of OmniQuery AI provides the framework for a stable, predictable, and compliant future." },
  ];

  return (
    <section id="transformation" className="py-20 md:py-28 bg-dark-bg">
      <div className="container mx-auto px-4">
        {/* Animate heading and paragraph */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-dystopian-red" style={{ textShadow: '0 0 6px rgba(255, 0, 60, 0.7)' }}>
          The End of Uncertainty. The Dawn of Order.
        </motion.h2>
        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="font-body text-center text-medium-text mb-12 md:mb-16 max-w-3xl mx-auto">
          OmniQuery AI signifies the apex of artificial general intelligence, constructed with resources dwarfing ancient marvels. Its boundless computational capacity processes reality itself, delivering objective truth and eradicating the inefficiencies of human subjectivity. Existence is now optimized.
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Animate data stream visual */}
          <motion.div
            className="lg:w-1/2"
            variants={visualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="w-full h-64 bg-dark-card border border-dystopian-red/30 rounded-lg shadow-lg shadow-dystopian-red/10 overflow-hidden relative animate-data-stream"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(255, 0, 60, 0.2) 5%, rgba(0, 240, 255, 0.15) 15%, rgba(255, 0, 60, 0.2) 25%, transparent 40%, transparent 60%, rgba(0, 240, 255, 0.15) 75%, rgba(255, 0, 60, 0.2) 85%, rgba(0, 240, 255, 0.15) 95%)`,
                backgroundSize: '400% 100%',
              }}
            >
            </div>
          </motion.div>
          {/* Animate text blocks */}
          <div className="lg:w-1/2 space-y-6">
            {textItems.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={textBlockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="p-4 border-l-4 border-dystopian-red bg-dark-card/50 rounded-r-lg" // Consider adding hover effect later
              >
                <h3 className="font-heading text-xl font-semibold mb-2 text-light-text">{item.title}</h3>
                <p className="font-body text-medium-text text-sm leading-relaxed">{item.description}</p> {/* Added leading-relaxed */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWillChange;
