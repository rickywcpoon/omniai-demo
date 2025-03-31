'use client'; // This component needs state and interactivity

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

// Mock currency conversion rates (relative to USD)
const exchangeRates: { [key: string]: number } = {
  USD: 1.0,
  EUR: 0.92,
  INR: 83.0,
  CNY: 7.2,
};

const currencySymbols: { [key: string]: string } = {
  USD: '$',
  EUR: '€',
  INR: '₹',
  CNY: '¥',
};

const BASE_PRICE_PER_CREDIT = 0.15; // USD

const calculateDiscount = (credits: number): number => {
  if (credits >= 5000) return 0.50; // 50%
  if (credits >= 3000) return 0.40; // 40%
  if (credits >= 1500) return 0.30; // 30%
  if (credits >= 500) return 0.20; // 20%
  if (credits >= 100) return 0.10; // 10%
  return 0; // 0%
};

// Simple hook to track previous value
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined); // Pass undefined as initial value
  useEffect(() => {
    ref.current = value;
  }, [value]); // Add value dependency to useEffect
  return ref.current;
}

const CalculatorSection = () => {
  const [dailySearches, setDailySearches] = useState<number>(10);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [animateDiscount, setAnimateDiscount] = useState<boolean>(false);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDailySearches(parseInt(event.target.value, 10));
  };

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  // Use useMemo to recalculate derived values efficiently
  const {
    monthlySearches,
    creditsNeeded,
    discountPercentage,
    discountedPricePerCreditUSD,
    totalCostUSD,
    displayCost,
    displayDiscountedPrice,
    displayBasePrice,
  } = useMemo(() => {
    const monthly = Math.max(1, dailySearches) * 30;
    const credits = Math.max(50, Math.ceil(monthly / 50) * 50);
    const discount = calculateDiscount(credits);
    const discountedPriceUSD = BASE_PRICE_PER_CREDIT * (1 - discount);
    const totalUSD = credits * discountedPriceUSD;
    const rate = exchangeRates[selectedCurrency];
    const symbol = currencySymbols[selectedCurrency];

    const formatCurrency = (amount: number) => `${symbol}${(amount * rate).toFixed(2)}`;

    return {
      monthlySearches: monthly,
      creditsNeeded: credits,
      discountPercentage: discount * 100,
      discountedPricePerCreditUSD: discountedPriceUSD,
      totalCostUSD: totalUSD,
      displayCost: formatCurrency(totalUSD),
      displayDiscountedPrice: formatCurrency(discountedPriceUSD),
      displayBasePrice: formatCurrency(BASE_PRICE_PER_CREDIT),
    };
  }, [dailySearches, selectedCurrency]);

  // Effect to trigger discount animation
  const prevDiscountPercentage = usePrevious(discountPercentage);
  useEffect(() => {
    if (prevDiscountPercentage !== undefined && prevDiscountPercentage !== discountPercentage) {
      setAnimateDiscount(true);
      const timer = setTimeout(() => setAnimateDiscount(false), 700); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [discountPercentage, prevDiscountPercentage]);

  // Animation variants for numbers
  const numberVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-dark-card border-t border-b border-dystopian-blue/20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-dystopian-blue" style={{ textShadow: '0 0 6px rgba(0, 240, 255, 0.7)' }}>
           Calculate Your Mandatory Contribution
        </h2>
        <p className="font-body text-center text-medium-text mb-12 md:mb-16 max-w-2xl mx-auto">
          Information access necessitates contribution. Calculate your mandatory monthly Information Credit allocation based on projected query volume. Volume-based efficiency adjustments are applied automatically.
        </p>

        <div className="max-w-4xl mx-auto bg-dark-bg p-6 md:p-10 rounded-lg border border-dystopian-blue/30 shadow-xl shadow-dystopian-blue/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Input Controls */}
            <div className="space-y-8">
              <div>
                <label htmlFor="daily-searches" className="font-body block text-lg font-medium text-light-text mb-2">
                  Estimated Daily Searches: <span className="text-dystopian-blue font-bold">{dailySearches}</span>
                </label>
                <input
                  type="range"
                  id="daily-searches"
                  min="1"
                  max="500"
                  step="1"
                  value={dailySearches}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-dark-text rounded-lg appearance-none cursor-pointer range-lg accent-dystopian-blue"
                  suppressHydrationWarning={true} // Add this prop
                />
                 <p className="font-body text-xs text-dark-text mt-1">Adjust slider to estimate daily query volume.</p>
              </div>

              <div>
                <label className="font-body block text-lg font-medium text-light-text mb-3">
                  Select Currency:
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(exchangeRates).map((currency) => (
                    <button
                      key={currency}
                      onClick={() => handleCurrencyChange(currency)}
                      className={`font-body px-4 py-2 rounded font-medium text-sm transition-all duration-200 border-2
                        ${selectedCurrency === currency
                          ? 'bg-dystopian-blue text-black border-dystopian-blue shadow-glow-blue'
                          : 'bg-dark-card text-dystopian-blue border-dystopian-blue/50 hover:bg-dystopian-blue/20 hover:border-dystopian-blue'
                        }`}
                    >
                      {currency} ({currencySymbols[currency]})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Display */}
            <div className="font-body bg-dark-card p-6 rounded-lg border border-dystopian-red/30 shadow-inner space-y-3">
              <h3 className="font-heading text-xl font-semibold text-dystopian-red mb-4 text-center">Estimated Monthly Cost</h3>
              {/* Use AnimatePresence and motion.span for smooth transitions */}
              <div className="flex justify-between items-center text-sm border-b border-dark-text/50 pb-1">
                <span className="text-medium-text">Monthly Searches (Est.):</span>
                <AnimatePresence mode="wait">
                  <motion.span key={`monthly-${monthlySearches}`} variants={numberVariant} initial="hidden" animate="visible" exit="hidden" className="font-mono text-light-text">{monthlySearches}</motion.span>
                </AnimatePresence>
              </div>
               <div className="flex justify-between items-center text-sm border-b border-dark-text/50 pb-1">
                <span className="text-medium-text">Credits Required (Min. {creditsNeeded}):</span>
                 <AnimatePresence mode="wait">
                   <motion.span key={`credits-${creditsNeeded}`} variants={numberVariant} initial="hidden" animate="visible" exit="hidden" className="font-mono text-light-text">{creditsNeeded}</motion.span>
                 </AnimatePresence>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-dark-text/50 pb-1">
                <span className="text-medium-text">Base Price / Credit:</span>
                 <AnimatePresence mode="wait">
                   <motion.span key={`base-${displayBasePrice}`} variants={numberVariant} initial="hidden" animate="visible" exit="hidden" className="font-mono text-light-text">{displayBasePrice}</motion.span>
                 </AnimatePresence>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-dark-text/50 pb-1">
                <span className="text-medium-text">Volume Discount:</span>
                 <motion.span
                   key={`discount-${discountPercentage}`}
                   animate={animateDiscount ? { animation: 'discountPulse 0.7s ease-out' } : {}}
                   className="font-mono text-dystopian-red"
                 >
                   {discountPercentage.toFixed(0)}%
                 </motion.span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-dark-text/50 pb-1">
                <span className="text-medium-text">Discounted Price / Credit:</span>
                 <AnimatePresence mode="wait">
                   <motion.span key={`discounted-${displayDiscountedPrice}`} variants={numberVariant} initial="hidden" animate="visible" exit="hidden" className="font-mono text-light-text">{displayDiscountedPrice}</motion.span>
                 </AnimatePresence>
              </div>
              <div className="flex justify-between items-center text-xl pt-2 mt-2">
                <span className="font-semibold text-light-text">Total Monthly Cost:</span>
                 <AnimatePresence mode="wait">
                   <motion.span
                     key={`total-${displayCost}`}
                     variants={numberVariant} initial="hidden" animate="visible" exit="hidden"
                     className="font-heading font-bold text-dystopian-blue text-2xl animate-flicker" style={{ textShadow: '0 0 5px rgba(0, 240, 255, 0.6)' }}
                   >
                     {displayCost}
                   </motion.span>
                 </AnimatePresence>
              </div>
               <p className="text-xs text-dark-text pt-3 text-center opacity-80">Contribution is automatically deducted from linked financial conduits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
