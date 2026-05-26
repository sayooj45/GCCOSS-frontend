import React from 'react';
import { motion } from 'framer-motion';
import PartnersGrid from '../components/partners/PartnersGrid';
import JoinCommunity from '../components/partners/JoinCommunity';
import HeroBg from '../assets/images/hero/partnersbg.png';

const Partners = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HeroBg} 
            alt="Partners Hero" 
            className="w-full h-full object-cover"
          />
          {/* Heavy White Overlay to match design - kept to ensure text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
          
          {/* REMOVED THE BOTTOM FADE DIV HERE for a sharp cut */}
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight"
          >
            Our Partners
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-gray-700 font-medium leading-relaxed"
          >
            We work closely with a diverse network of leading organizations, institutions, 
            and initiatives that share our vision for sustainable development. Through these 
            partnerships, we foster innovation, drive responsible practices, and create impactful 
            solutions that benefit communities, industries, and the environment across Kerala and beyond. 
            Our partners play a pivotal role in supporting knowledge exchange, capacity building, 
            and the implementation of projects that advance long-term sustainability and social responsibility.
          </motion.p>
        </div>
      </div>
      
      {/* The next sections will now start immediately after the sharp cut of the hero section */}
      <PartnersGrid />
      <JoinCommunity/>

      
    </div>
  );
};

export default Partners;