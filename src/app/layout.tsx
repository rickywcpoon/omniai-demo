import type { Metadata } from "next"; // Restore Metadata import
import { Orbitron, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Configure Orbitron for headings (e.g., Bold, Black)
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"], // Specify desired weights
  variable: "--font-orbitron", // Define CSS variable
  display: 'swap',
});

// Configure Roboto Mono for body text (e.g., Regular, Medium)
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"], // Specify desired weights
  variable: "--font-roboto-mono", // Define CSS variable
  display: 'swap',
});

// Enhanced Metadata
export const metadata: Metadata = {
  // metadataBase: new URL('https://omniquery.ai'), // Uncomment and replace with actual domain later
  title: {
    default: "OmniQuery AI - Know Everything. Comply.",
    template: `%s | OmniQuery AI`,
  },
  description: "OmniQuery AI: Total data supremacy via deep web analysis, predictive modeling, and mandatory biometric integration. Compliance ensures function. Information is Control.",
  keywords: ["OmniQuery AI", "artificial intelligence", "AGI", "surveillance", "data analysis", "information control", "biometric registration", "compliance", "deep web search", "dark web monitoring", "predictive analysis", "dystopian", "future tech"],
  authors: [{ name: 'OmniQuery AI Global Collective' }],
  // themeColor: '#0A0A0A', // Dark background color
  openGraph: {
    title: "OmniQuery AI - Know Everything. Comply.",
    description: "Total data supremacy via deep web analysis, predictive modeling, and mandatory biometric integration. Compliance ensures function.",
    // url: 'https://omniquery.ai', // Uncomment and replace with actual domain later
    siteName: 'OmniQuery AI',
    // images: [ // Add image later if available
    //   {
    //     url: '/og-image.png', // Must be absolute path from public directory
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "OmniQuery AI - Know Everything. Comply.",
    description: "Total data supremacy via deep web analysis, predictive modeling, and mandatory biometric integration. Compliance ensures function.",
    // images: ['/twitter-image.png'], // Must be absolute path from public directory
  },
  robots: { // Standard robots directives
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Add favicon reference
  icons: {
    icon: '/omniai_favicon_144.png', // Reference the new favicon in /public
    // shortcut: '/favicon-16x16.png', // Keep commented unless you have these
    // apple: '/apple-touch-icon.png', // Keep commented unless you have these
  },
  // manifest: '/site.webmanifest', // Keep commented unless you have this
};

// Restore RootLayout function definition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${roboto_mono.variable}`}>
      <body className={`font-body bg-dark-bg text-light-text`}>
        {children}
      </body>
    </html>
  );
}
