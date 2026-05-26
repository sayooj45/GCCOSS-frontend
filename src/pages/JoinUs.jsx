import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

// =========================================
// PLACEHOLDER IMAGES
// =========================================
// You can keep all imports, or remove internshipImg if you don't want to use it anymore
const jobsImg = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400&h=400";
const partnershipImg = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400&h=400";

const joinOptions = [
  {
    id: 1,
    image: jobsImg, // Using the Jobs image for the combined card
    title: "Careers & Internships", // MERGED TITLE
    description: "Join a mission-driven team working to simplify sustainability. Explore full-time roles or gain hands-on experience through our internship programs led by GCCOSS experts.", // MERGED DESCRIPTION
    messageContext: "Careers / Internship Inquiry"
  },
  {
    id: 2,
    image: partnershipImg,
    title: "Partnerships",
    description: "Collaborate with GCCOSS in an academic institution, corporate, or government body to create lasting impact through joint focused programs.",
    messageContext: "Partnership Proposal"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const JoinUs = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-white min-h-screen pt-32 pb-20">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Join Us
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed"
        >
          Your Gateway to Impact - Explore opportunities to collaborate, learn, and lead in 
          sustainability through our Career, Internship, and Partnership Programs.
        </motion.p>
      </div>

      {/* CARDS GRID SECTION */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // UPDATED: Changed from md:grid-cols-3 to md:grid-cols-2 for perfect centering
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {joinOptions.map((option) => (
            <motion.div
              key={option.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Image Circle */}
              <div className="w-24 h-24 mb-6 rounded-full shadow-md overflow-hidden border-4 border-teal-50">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {option.description}
              </p>

              {/* Link to Contact Page */}
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                state={{ subject: option.messageContext }} 
                className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-sm inline-block"
              >
                Inquire Now
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default JoinUs;