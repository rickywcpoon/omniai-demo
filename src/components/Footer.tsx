import React from 'react';
import Link from 'next/link';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="font-body text-sm text-medium-text hover:text-dystopian-blue transition-colors duration-200"> {/* Apply font-body */}
    {children}
  </Link>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-dystopian-red/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Branding/Core */}
           <div className="col-span-2 lg:col-span-1">
              <h4 className="font-heading text-lg font-semibold text-dystopian-blue mb-4" style={{ textShadow: '0 0 4px rgba(0, 240, 255, 0.5)' }}>OmniQuery AI</h4> {/* Apply font-heading */}
              <p className="font-body text-xs text-dark-text opacity-80">The Unified Information Mandate.</p> {/* Apply font-body */}
           </div>

           {/* Column 2: Resources */}
          <div>
            <h5 className="font-heading text-md font-semibold text-light-text mb-3">Resources</h5> {/* Apply font-heading */}
            <ul className="space-y-2">
              <li><FooterLink href="/documentation">Documentation</FooterLink></li>
              <li><FooterLink href="/api-status">API Status</FooterLink></li>
              <li><FooterLink href="/compliance-guide">Compliance Guide</FooterLink></li>
              <li><FooterLink href="/system-updates">System Updates</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h5 className="font-heading text-md font-semibold text-light-text mb-3">Entity</h5> {/* Apply font-heading */}
            <ul className="space-y-2">
              <li><FooterLink href="/about">About OmniQuery</FooterLink></li>
              <li><FooterLink href="/directives">Directives</FooterLink></li>
              <li><FooterLink href="/careers">Mandatory Postings</FooterLink></li>
              <li><FooterLink href="/contact">Contact Oversight</FooterLink></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h5 className="font-heading text-md font-semibold text-light-text mb-3">Legal</h5> {/* Apply font-heading */}
            <ul className="space-y-2">
              <li><FooterLink href="/privacy-policy">Data Usage Policy</FooterLink></li>
              <li><FooterLink href="/terms-of-service">Terms of Compliance</FooterLink></li>
              <li><FooterLink href="/security-protocols">Security Protocols</FooterLink></li>
              <li><FooterLink href="/mandate-7">Global Mandate 7</FooterLink></li>
            </ul>
          </div>

           {/* Column 5: Case Studies (Optional) */}
           <div className="hidden lg:block">
            <h5 className="font-heading text-md font-semibold text-light-text mb-3">Case Studies</h5> {/* Apply font-heading */}
            <ul className="space-y-2">
              <li><FooterLink href="/case-studies/social-harmony">Social Harmony</FooterLink></li>
              <li><FooterLink href="/case-studies/economic-stability">Economic Stability</FooterLink></li>
              <li><FooterLink href="/case-studies/threat-neutralization">Threat Neutralization</FooterLink></li>
            </ul>
          </div>
        </div>

         <div className="border-t border-dystopian-blue/20 pt-8 text-center">
           <p className="font-body text-xs text-medium-text opacity-90"> {/* Apply font-body */}
             © {currentYear} OmniQuery AI Global Collective. All Rights Reserved. Compliance is Mandatory. Information is Control.
           </p>
           <p className="font-body text-xs text-dark-text mt-1 opacity-70"> {/* Apply font-body */}
             Unauthorized access attempts are logged and subject to automated rectification protocols.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
