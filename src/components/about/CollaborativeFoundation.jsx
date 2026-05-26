import { motion } from 'framer-motion';

// IMPORT YOUR LOGOS HERE (Use the ones you already have in assets)
// Make sure these paths match your actual folder structure
import cusatLogo from '../../assets/images/logos/logoM.png'; // Adjust if needed
import geojitLogo from '../../assets/images/logos/Geogit.png'; // Adjust if needed

const CollaborativeFoundation = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black mb-6"
          >
            Our Collaborative Foundation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            GCCOSS is built on a strong foundation of collaboration, bringing together academic excellence 
            and industry leadership to advance sustainability in India and beyond.
          </motion.p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* CARD 1: CUSAT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <div className="h-20 flex items-center justify-center mb-6">
              <img 
                src={cusatLogo} 
                alt="CUSAT Logo" 
                className="h-25 w-auto object-contain" 
                onError={(e) => e.target.src = 'https://placehold.co/100x100?text=CUSAT'}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              CUSAT – Cochin University of Science and Technology
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              CUSAT is a distinguished state university with a wide range of schools and research centers. 
              It provides academic guidance, research expertise, and sustainability knowledge, enabling GCCOSS 
              to design education programs, conduct policy-oriented research, and create real-world solutions.
            </p>
          </motion.div>

          {/* CARD 2: GEOJIT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <div className="h-20 flex items-center justify-center mb-6">
               {/* Note: In your reference, Geojit uses a simple text/circle logo. 
                   Ensure you use the correct logo file here. */}
              <img 
                src={geojitLogo} 
                alt="Geojit Financial Services Logo" 
                className="h-21 w-auto object-contain"
                onError={(e) => e.target.src = 'https://placehold.co/150x60?text=Geojit'}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Geojit Financial Services Ltd.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Geojit is a leading investment services company with a robust presence across India and the GCC region. 
              Geojit contributes industry insights, financial expertise, and strategic leadership, helping GCCOSS 
              bridge the gap between academic research and practical sustainability solutions for businesses 
              and government organizations.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CollaborativeFoundation;