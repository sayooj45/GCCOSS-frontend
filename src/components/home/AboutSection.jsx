import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// IMPORT YOUR IMAGE HERE
import aboutTeamImage from '../../assets/images/home/abtbg.jpg'; 

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      {/* UPDATED: Changed max-w-[1200px] to max-w-[1440px] 
         This makes the card wider ("lengthier") on larger screens.
      */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Main Card Container with Rounded Border */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-white rounded-[30px] border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT SIDE: Image */}
            <motion.div 
              variants={imageVariants}
              // Kept height responsive, aligns with text block automatically on LG screens
              className="relative h-[400px] lg:h-auto overflow-hidden"
            >
              <img 
                src={aboutTeamImage}
                onError={(e) => {
                    e.target.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }} 
                alt="GCCOSS Team" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
            </motion.div>

            {/* RIGHT SIDE: Content */}
            {/* Added px-10 md:px-16 to give the wider layout nice breathing room */}
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              
              <motion.h2 
                variants={itemVariants}
                className="text-4xl font-bold text-black mb-6"
              >
                About Us
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 text-base leading-relaxed mb-10"
              >
                GCCOSS is a pioneering effort from Geojit Financial Services Ltd. and Cochin 
                University of Science and Technology to institutionalise sustainability capacity 
                building of corporates and develop a purpose talent pool for Government,
                Academia and Business who can play an impactful role in sustainable development.
              </motion.p>

             

              {/* Buttons Row */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {/* Blue Button */}
                <Link 
                  to="/services" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 rounded-xl bg-[#0d9488] text-white font-bold text-sm hover:bg-teal-600 transition-colors shadow-sm"
                  >
                    What We Do
                  </motion.button>
                </Link>
                
                {/* Outline Button */}
                <Link 
                  to="/who-we-are" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 rounded-xl bg-white border border-black text-black font-bold text-sm hover:bg-gray-50 transition-colors"
                  >
                    Who We Are
                  </motion.button>
                </Link>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;