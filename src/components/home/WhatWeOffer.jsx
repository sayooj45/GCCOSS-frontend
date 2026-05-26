import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  // Data structure with specific icons for each section
  const offerCards = [
    {
      title: "Service Portfolio",
      subtitle: "Simplifying sustainability for all stake holders.",
      icon: <Layers className="w-6 h-6" />, // Slightly smaller icon inside
      items: [
        "Research",
        "Academia",
        "Consulting",
        "Capacity Building",
        "Innovation Ecosystem",
        "Sustainability Assessments and certifications"
      ],
      link: "/services"
    },
    {
      title: "Core Themes", 
      subtitle: "Driving long-term impact through innovation, responsible finance, digital transformation, and clean energy solutions.",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Sustainable Infrastructure",
        "Sustainable Finance",
        "Digital for Sustainability",
        "Energy Transition"
      ],
      link: "/about#core-themes"
    },
    {
      title: "Focused Areas",
      subtitle: "Driving sustainable development and resilience in key sectors.",
      icon: <Target className="w-6 h-6" />,
      items: [
        "Health",
        "Tourism",
        "Agriculture",
        "Marine and Fisheries"
      ],
      link: "/about#sector-focus"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What We Offer
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-teal-600 mx-auto mb-6 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Discover our core pillars that drive impactful change and foster a sustainable ecosystem.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              // STYLE: Reduced padding (p-6) for less height
              className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-teal-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full"
            >
              {/* Icon & Title - Reduced margins */}
              <div className="mb-6">
                {/* Smaller Icon Container (w-14 h-14) */}
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {card.title}
                </h3>
                {/* Reduced min-height slightly */}
                <p className="text-gray-500 text-sm leading-relaxed min-h-[40px]">
                  {card.subtitle}
                </p>
              </div>

              {/* List Items - Tighter spacing (space-y-2) */}
              <ul className="space-y-2 mb-6 flex-grow">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 group/item">
                    {/* Small Bullet Dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-200 mr-2.5 group-hover/item:bg-teal-600 transition-colors"></span>
                    <span className="text-sm font-medium group-hover/item:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Link - Reduced top padding */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <Link to={card.link} className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                  Explore More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;