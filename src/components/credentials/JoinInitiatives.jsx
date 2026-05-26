import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JoinInitiatives = () => {
  // Placeholder avatars for the "Team" visual in the screenshot
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  ];

  return (
    <section className="py-24 px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-12 md:p-16 text-center border border-gray-100"
      >
        {/* Avatar Cluster */}
        <div className="flex justify-center items-center mb-6">
          {avatars.map((src, index) => (
            <div 
              key={index}
              className={`relative w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm ${index !== 0 ? '-ml-4' : ''}`}
            >
              <img src={src} alt="Member" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Initiatives
        </h2>
        
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Be part of our sustainability initiatives and contribute to building a better, 
          more sustainable future for all.
        </p>
        
        {/* Button */}
        <Link 
          to="/join-us"
          className="inline-block bg-[#007bff] text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Get Involved
        </Link>
      </motion.div>
    </section>
  );
};

export default JoinInitiatives;