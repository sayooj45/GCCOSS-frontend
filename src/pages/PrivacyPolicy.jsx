import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  
  // Ensures the page opens at the very top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
          Privacy Policy
        </h1>

        {/* Content Area */}
        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
          
          <p>
            This Privacy Policy outlines how we collect, use, and protect information when you 
            visit or interact with our website.
          </p>

          <p>
            We may collect basic personal information such as name, contact details, and 
            any information voluntarily submitted through enquiry or contact forms. This 
            information is used solely for responding to enquiries, providing services, and 
            improving our website experience.
          </p>

          <p>
            We do not sell, trade, or share personal information with third parties, except 
            where required by law or for legitimate operational purposes.
          </p>

          <p>
            We take reasonable and appropriate measures to safeguard personal information 
            from unauthorized access, alteration, disclosure, or misuse. While we strive to 
            protect your data, no method of transmission over the internet is completely 
            secure.
          </p>

          <p>
            By using this website, you agree to the terms of this Privacy Policy. We reserve the 
            right to update or modify this policy at any time, and changes will be effective upon 
            posting on this page.
          </p>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;