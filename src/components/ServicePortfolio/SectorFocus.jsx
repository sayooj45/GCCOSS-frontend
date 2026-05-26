import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// --- IMPORT LOCAL IMAGES ---
import CoreImg5 from '../../assets/images/corethemes/core5.jpg';
import CoreImg6 from '../../assets/images/corethemes/core6.jpg';
import CoreImg7 from '../../assets/images/corethemes/core7.jpg';
import CoreImg8 from '../../assets/images/corethemes/core8.jpg';

const sectorsData = [
  {
    id: 1,
    title: "Health",
    // Replaced link with local image variable
    image: CoreImg5,
    description: "Kerala's health sector offers vast potential in health tourism, traditional practices like Ayurveda, and elderly care systems. GCCOSS promotes sustainable, accessible, and affordable healthcare solutions while enabling impact investments as a Triple I partner."
  },
  {
    id: 2,
    title: "Sustainable Tourism",
    // Replaced link with local image variable
    image: CoreImg6,
    description: "Tourism is central to Kerala's economy, and sustainability is key to its long-term growth. GCCOSS drives regenerative and eco-friendly tourism practices, including sustainable food systems that showcase Kerala's gastronomical heritage—such as Sadya and other traditional delicacies."
  },
  {
    id: 3,
    title: "Sustainable Agriculture",
    // Replaced link with local image variable
    image: CoreImg7,
    description: "Kerala's agriculture is rich and diverse, including tea, coffee, rubber, spices (cardamom, pepper, clove, cinnamon), spice extracts, coconut, banana, jackfruit, and cashew. GCCOSS supports sustainable farming, value chain enhancement, and certification programs."
  },
  {
    id: 4,
    title: "Marine and Fisheries",
    // Replaced link with local image variable
    image: CoreImg8,
    description: "Kerala's marine and fisheries sector is vital for food security and livelihoods, but faces growing threats from marine pollution, microplastics, and PFAS. GCCOSS promotes sustainable fishing practices, aquaculture innovation, and ecosystem conservation."
  }
];

const SectorFocus = () => {
  const location = useLocation(); 

  // Scroll Logic
  useEffect(() => {
    if (location.hash === '#sector-focus') {
      const element = document.getElementById('sector-focus');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section 
      id='sector-focus'
      className="bg-gray-50 pt-0 pb-24 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sectorsData.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Section */}
              <div className="h-64 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base text-justify">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorFocus;