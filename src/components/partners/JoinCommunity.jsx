import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JoinCommunity = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto bg-slate-800 rounded-2xl p-10 md:p-16 text-center shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Our Community
        </h2>
        
        <p className="text-white text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
          Become a part of our mission to drive sustainable innovation and create positive impact. 
          Stay updated, collaborate, and contribute to initiatives that make a difference.
        </p>
        
        <Link 
          to="/join-us"
          className="inline-block bg-white text-gray-900 px-8 py-3.5 rounded-lg font-bold text-sm md:text-base hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          Get Involved
        </Link>
      </motion.div>
    </section>
  );
};

export default JoinCommunity;