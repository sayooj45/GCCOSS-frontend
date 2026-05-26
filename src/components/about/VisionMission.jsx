import { motion } from 'framer-motion';
import { Target, Eye, Users, Network } from 'lucide-react';

const VisionMission = () => {
  const items = [
    {
      title: "Our Purpose",
      icon: <Target className="w-8 h-8 text-white" />,
      color: "bg-teal-600",
      description: "GCCOSS is committed to simplifying sustainability for companies, government bodies, investors, and individuals—empowering all stakeholders to achieve their sustainability goals with clarity, confidence, and cost efficiency."
    },
    {
      title: "Our Vision",
      icon: <Eye className="w-8 h-8 text-white" />,
      color: "bg-green-700", // Using your brand green
      description: "GCCOSS aspires to become a world-class centre of excellence in sustainability. Its integrated approach encompasses research, academics, consulting, capacity building, innovation, ESG ratings, certifications, and strategic partnerships—all aimed at delivering measurable positive impact across sectors."
    },
    {
      title: "Resource Pool",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "bg-gray-800",
      description: "GCCOSS draws on a dynamic resource pool comprising accomplished professors, strategic partners, and experienced research analysts. Together, they collaborate to create innovative and impactful solutions tailored to the unique sustainability challenges of each sector."
    },
    {
      title: "Triple Helix Model",
      icon: <Network className="w-8 h-8 text-white" />,
      color: "bg-teal-600",
      description: "The initiative operates on the triple helix model, fostering synergy among academia, industry, and government. This framework ensures that GCCOSS remains at the forefront of sustainable development, bridging research and real-world applications."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black"
          >
            Driving Impact Through Strategy
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our core principles and operational models that guide our mission towards a sustainable future.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-start"
            >
              {/* Icon Box */}
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisionMission;