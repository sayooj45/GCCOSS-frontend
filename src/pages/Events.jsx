import React from 'react';
import { motion } from 'framer-motion';
import EventsGrid from '../components/Events/EventsGrid';
import eventshero from '../assets/images/hero/eventsbg.jpg';

const Events = () => {
  // Use a generic conference background for Hero
  const HERO_BG =eventshero;
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      
      {/* =========================================
          HERO SECTION (Page)
      ========================================= */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Events Hero" 
            className="w-full h-full object-cover"
          />
          {/* Heavy White/Blur Overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[3px]"></div>
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Our Events
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Celebrating innovation, sustainability, and leadership. From summits to 
            workshops, explore how we foster collaboration for a greener future.
          </motion.p>
        </div>
      </div>

      {/* =========================================
          EVENTS GRID COMPONENT
      ========================================= */}
      <EventsGrid />

      

    </div>
  );
};

export default Events;