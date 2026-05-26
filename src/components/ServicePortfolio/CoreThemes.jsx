import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// --- IMPORT LOCAL IMAGES ---
import CoreImg1 from '../../assets/images/corethemes/core1.jpg';
import CoreImg2 from '../../assets/images/corethemes/core2.jpg';
import CoreImg3 from '../../assets/images/corethemes/core3.jpg';
import CoreImg4 from '../../assets/images/corethemes/core4.jpg';

const themesData = [
  {
    id: 1,
    title: "Sustainable Infrastructure",
    // Replaced link with local image variable
    image: CoreImg1, 
    content: "Infrastructure shapes the way we live, work, and move—but its environmental and social footprint is significant. GCCOSS drives sustainable infrastructure by enabling government, business, and academia to plan, design, and operate low-carbon, resilient, and people-centric projects."
  },
  {
    id: 2,
    title: "Sustainable Finance",
    // Replaced link with local image variable
    image: CoreImg2, 
    content: "Finance is a key lever for sustainable and resilient development. GCCOSS helps government, business, and academia unlock opportunities in climate finance, adaptation funding, and emerging credit markets such as carbon, nature, and plastic credits."
  },
  {
    id: 3,
    title: "Digital for Sustainability",
    // Replaced link with local image variable
    image: CoreImg3, 
    content: "Digital technologies are powerful enablers of sustainable development—but they also carry environmental and social risks. GCCOSS drives awareness and action by engaging startups, technology centres, and IT companies to assess both the positive and negative impacts of digital solutions."
  },
  {
    id: 4,
    title: "Energy Transition",
    // Replaced link with local image variable
    image: CoreImg4, 
    content: "Kerala faces rising climate risks despite its low carbon footprint, making energy transition a strategic priority. GCCOSS promotes the adoption of renewable energy, biofuels, hydrogen, and ammonia to drive sustainable growth, improve air quality, and enhance energy security."
  }
];

const CoreThemes = () => {
  const location = useLocation();

  // Scroll Logic
  useEffect(() => {
    if (location.hash === '#core-themes') {
      const element = document.getElementById('core-themes');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section 
      id="core-themes"
      className="py-24 px-4 sm:px-6 lg:px-8 font-sans bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Core Themes
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-teal-600 mx-auto rounded-full"
          />
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {themesData.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
            >
              {/* Image Section (Top) */}
              <div className="h-64 overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={theme.image} 
                  alt={theme.title} 
                  className="w-full h-full object-cover"
                />
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>

              {/* Content Section (Bottom) */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {theme.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base text-justify flex-grow">
                  {theme.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreThemes;