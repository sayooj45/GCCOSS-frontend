import React from 'react';
import { motion } from 'framer-motion';
import CredentialsGrid from '../components/credentials/CredentialsGrid';
import heroimg from '../assets/images/hero/credentialsbg.png';

const Credentials = () => {

  return (
    <div className="font-sans bg-white min-h-screen">
      
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <div className="relative w-full py-28 md:py-36 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroimg} 
            alt="Credentials Hero" 
            className="w-full h-full object-cover"
          />
          {/* Heavy White Overlay to match the bright/clean look of the design */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-black mb-8 tracking-tight"
          >
            Our Credentials
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-800 font-medium leading-relaxed max-w-4xl mx-auto"
          >
            We drive impactful programs that empower organizations and individuals to embrace 
            sustainability at every level. From infrastructure and digital transformation to 
            leadership training and ESG capacity building, our initiatives foster knowledge, 
            innovation, and responsible practices that create lasting value for communities, 
            businesses, and the environment.
          </motion.p>
        </div>
      </div>

      {/* =========================================
          CONTENT PLACEHOLDER
      ========================================= */}
      

  <CredentialsGrid/>

    </div>
  );
};

export default Credentials;