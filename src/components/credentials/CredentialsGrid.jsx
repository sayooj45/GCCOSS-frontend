import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Monitor, Users, Presentation, CheckCircle, GraduationCap } from 'lucide-react';

// ==========================================
// DATA: Content from Screenshot
// ==========================================
const CREDENTIALS_DATA = [
  {
    id: 1,
    title: "Sustainable Infrastructure",
    icon: <Home className="w-8 h-8" />,
    description: "Driving sustainable infrastructure development through innovative solutions, green building practices, and climate-resilient design strategies."
  },
  {
    id: 2,
    title: "Digital For Sustainability",
    icon: <Monitor className="w-8 h-8" />,
    description: "Leveraging digital technologies and AI to accelerate sustainability goals while assessing their environmental and social impacts on SDGs."
  },
  {
    id: 3,
    title: "MSME Capacity Building",
    icon: <Users className="w-8 h-8" />,
    description: "Empowering Micro, Small, and Medium Enterprises with sustainability skills, ESG knowledge, and practical tools for responsible business practices."
  },
  {
    id: 4,
    title: "Board Level / CXO ESG Training",
    icon: <Presentation className="w-8 h-8" />,
    description: "Executive-level ESG training programs designed for board members and C-suite leaders to integrate sustainability into strategic decision-making."
  },
  {
    id: 5,
    title: "Sustainability Certification",
    icon: <CheckCircle className="w-8 h-8" />,
    description: "Developing sector-focused certification programs and sustainability benchmarks to help organizations meet global standards and access new markets."
  },
  {
    id: 6,
    title: "Sustainability Leadership Training",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Comprehensive leadership programs developing holistic sustainability perspectives, values, communication skills, and change management capabilities."
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  }
};

const CredentialsGrid = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white -mt-20 relative z-20">
      <div className="max-w-[1440px] mx-auto">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CREDENTIALS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-10 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* Read More Button */}
              <div className="mt-auto">
                <button className="text-sm font-bold text-gray-900 group-hover:text-blue-600 flex items-center gap-2 transition-colors">
                  Read More 
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CredentialsGrid;