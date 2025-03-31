import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Define custom colors and effects here later
      colors: {
        'dystopian-red': '#FF003C', // Example glowy red
        'dystopian-blue': '#00F0FF', // Example glowy blue
        'dark-bg': '#0A0A0A',
        'dark-card': '#141414',
        'light-text': '#E0E0E0',
        'medium-text': '#A0A0A0',
        'dark-text': '#606060',
      },
      boxShadow: { // Refined glows
        'glow-red': '0 0 18px 4px rgba(255, 0, 60, 0.6), 0 0 4px 1px rgba(255, 100, 130, 0.5)', // More intense core, softer outer
        'glow-blue': '0 0 18px 4px rgba(0, 240, 255, 0.6), 0 0 4px 1px rgba(100, 240, 255, 0.5)', // More intense core, softer outer
      },
      animation: {
        'flicker': 'flicker 2s linear infinite', // Changed timing and easing
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delay': 'fadeIn 1s ease-out 0.5s forwards', // Example with delay and fill mode
        'grid-pulse': 'gridPulse 10s ease-in-out infinite',
        'data-stream': 'dataStream 6s linear infinite alternate',
        'discount-pulse': 'discountPulse 0.7s ease-out', // Animation for discount tier change
      },
      keyframes: {
        flicker: { // More glitchy flicker effect
          '0%, 100%': { opacity: '1' },
          '10%, 22%, 35%, 55%, 68%, 80%': { opacity: '0.7' },
          '15%, 28%, 42%, 60%, 75%, 90%': { opacity: '0.9' },
          '50%': { opacity: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        discountPulse: { // Keyframes for discount pulse
          '0%, 100%': { transform: 'scale(1)', color: 'var(--tw-prose-color-red)' }, // Use red color from theme
          '50%': { transform: 'scale(1.15)', color: '#ffffff' }, // Scale up and brighten
        }
      },
      fontFamily: { // Add font family definitions
        sans: ['var(--font-roboto-mono)', 'sans-serif'], // Default sans-serif to Roboto Mono
        mono: ['var(--font-roboto-mono)', 'monospace'], // Explicit mono
        heading: ['var(--font-orbitron)', 'sans-serif'], // Heading font
        body: ['var(--font-roboto-mono)', 'sans-serif'], // Explicit body font (matches default sans)
      },
    },
  },
  plugins: [],
}
export default config
