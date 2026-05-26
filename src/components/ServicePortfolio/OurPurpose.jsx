import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurPurpose = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-xl"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Purpose
          </h2>

          {/* Description Text */}
          <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed opacity-95 mb-10 font-medium">
            At GCCOSS, our purpose is to bridge academia, industry, and policy to enable practical, science-based sustainability solutions. We exist to transform research into action, build future-ready leaders, and accelerate sustainable development aligned with global and regional priorities.
          </p>

          {/* Button */}
<Link
onClick={() => window.scrollTo(0, 0)}
 to="/about"> {/* 2. Wrap in Link */}
  <motion.div      // 3. Change 'button' to 'div' to keep HTML valid
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 inline-block cursor-pointer" // Added inline-block and cursor-pointer
  >
    Learn more about us
  </motion.div>
</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPurpose;