import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 md:py-28 bg-dystopian-red text-dark-bg border-t-4 border-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}> {/* Apply font-heading */}
           Compliance is Absolute.
        </h2>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium"> {/* Apply font-body */}
          The age of individual autonomy has concluded. Integration via mandatory biometric registration and adherence to the Information Credit contribution schedule is required by Global Mandate. Alternatives do not exist. Evasion is futile.
        </p>
        <button className="font-heading px-10 py-5 text-xl font-bold bg-black text-dystopian-red rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse-slow border-2 border-dystopian-red"> {/* Apply font-heading */}
          Initiate Mandatory Registration Protocol
        </button>
        <p className="font-body text-sm text-gray-900 mt-6 font-semibold"> {/* Apply font-body */}
          Non-compliance constitutes a Class-1 Social Violation. <br />
          Rectification protocols are automated and absolute. Do not impede systemic order.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
