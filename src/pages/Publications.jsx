import React from 'react';
import { motion } from 'framer-motion';
import PublicationsGrid from '../components/Publications/PublicationsGrid';
import heroimg from '../assets/images/hero/publicationbg.jpeg';

const Publications = () => {
  // Book/Library background to match screenshot

  return (
    <div className="font-sans bg-white min-h-screen">
      
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <div className="relative w-full py-28 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroimg} 
            alt="Publications Hero" 
            className="w-full h-full object-cover"
          />
          {/* Heavy White Overlay to make text readable */}
          <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight"
          >
            Our Publications
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-800 font-medium leading-relaxed max-w-4xl mx-auto"
          >
            Discover our insights and research on sustainability, innovation, and responsible development. 
            From leadership perspectives to sector-specific studies, our publications aim to inform, 
            inspire, and guide stakeholders in creating a positive impact for communities and the environment.
          </motion.p>
        </div>
      </div>

      {/* =========================================
          PUBLICATIONS GRID
      ========================================= */}
      <PublicationsGrid />



    </div>
  );
};

export default Publications;