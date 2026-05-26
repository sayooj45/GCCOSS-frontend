import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicePortfolio/ServicesSection';
import OurPurpose from '../components/ServicePortfolio/OurPurpose';
import serviceBg from '../assets/images/hero/Service-portfolio-bg.png';

const ServicePortfolio = () => {
  return (
 <>
        <div className="bg-white">
          
          {/* =========================================
              HERO SECTION
          ========================================= */}
          <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            
            {/* BACKGROUND IMAGE & OVERLAY */}
            <div className="absolute inset-0 z-0">
              {/* 1. Visible Sustainability Image (Wind Energy/Nature) */}
              <img 
                src={serviceBg}
                alt="Sustainability Background" 
                className="w-full h-full object-cover"
              />
              
              {/* EXACT SHADE OVERLAY */}
                           <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>

            </div>
    
            {/* CONTENT */}
            <div className="relative z-10 max-w-5xl mx-auto mt-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
                  GCCOSS Service Portfolio
                </h1>
                
                {/* Description Paragraph */}
                <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-10 max-w-5xl mx-auto font-medium">
                  Advancing Sustainability through Research, Education, Consulting, and Innovation. 
                  At the Geojit-CUSAT Centre of Sustainability Studies (GCCOSS), we simplify sustainability 
                  for academia, government, and business by translating knowledge into action. Our integrated 
                  service portfolio spans research, education, consulting, capacity building, innovation, 
                  and certification, delivering practical, scalable solutions that create measurable 
                  sustainability impact.
                </p>
              </motion.div>
            </div>
          </section>
    
          
    
        </div>
        <ServicesSection/>
      
        <OurPurpose/>
 </>
  );
};

export default ServicePortfolio;