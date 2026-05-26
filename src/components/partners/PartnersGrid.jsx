import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ==========================================
// 1. LOGO IMPORTS (STRICTLY PRESERVED)
// ==========================================
import kmaLogo from "../../assets/images/partnersLogo/KMA.jpeg";
import ksumLogo from "../../assets/images/partnersLogo/KSUM.jpg";
import iiicLogo from "../../assets/images/partnersLogo/IIIC.jpeg";
import tripleILogo from "../../assets/images/partnersLogo/Triple I.jpg";
import wovenLogo from "../../assets/images/partnersLogo/Woven Design Collective.jpeg";
import greenfi from "../../assets/images/partnersLogo/greenfi.jpeg";
import equinoctLogo from "../../assets/images/partnersLogo/EQUINOCT.png";
import cetaaLogo from "../../assets/images/partnersLogo/College of Engineering Trivandrum Alumni Association (CETAA).jpeg";
import Nexergy from "../../assets/images/partnersLogo/Nexergy.png";

// Placeholder

// ==========================================
// DATA: Updated with Specific Scaling Logic
// ==========================================
const PARTNERS_DATA = [
  {
    id: 11,
    name: "College of Engineering Trivandrum Alumni Association (CETAA)",
    logo: cetaaLogo,
    scaleClass: "scale-100 group-hover:scale-110",
    description:
      "CETAA is the alumni body of the College of Engineering Trivandrum, fostering a strong network of professionals committed to technological advancement and sustainable development. Through various initiatives, CETAA collaborates with GCCOSS to promote sustainability in engineering education and practice.",
  },
  {
    id: 10,
    name: "EQUINOCT",
    logo: equinoctLogo,
    scaleClass: "scale-100 group-hover:scale-110",
    description:
      "EQUINOCT is a consultancy firm specializing in sustainable development, providing expertise in environmental management, climate change adaptation, and resilience building. Their services support organizations in implementing sustainable practices and achieving their environmental goals.",
  },
  {
    id: 9,
    name: "GreenFi",
    logo: greenfi,
    scaleClass: "scale-100 group-hover:scale-110",
    description:
      "GreenFi is an AI-enabled ESG due-diligence platform that empowers organizations to make data-driven sustainability and investment decisions. Designed to support sustainable finance and responsible supply chains, GreenFi integrates advanced analytics with ESG data to assess risks, compliance, and performance across environmental, social, and governance parameters. By enabling transparent, consistent, and scalable ESG evaluations, GreenFi helps financial institutions, investors, and enterprises strengthen sustainability outcomes, improve decision quality, and align capital flows with long-term responsible growth.",
  },
  {
    id: 3,
    name: "Indian Institute of Infrastructure and Construction (IIIC)",
    logo: iiicLogo,
    // BOOSTED SIZE (1.3x)
    scaleClass: "scale-150 group-hover:scale-[1.6]",
    description:
      "IIIC, located in Chavara, Kollam, is a public institution under the Kerala Academy for Skills Excellence. Established in 2018, it offers skill development training in construction and infrastructure sectors, bridging the gap for aspiring professionals and contributing to sustainable infrastructure development in Kerala.",
  },
  {
    id: 1,
    name: "Kerala Management Association (KMA)",
    logo: kmaLogo,
    // Standard size
    scaleClass: "scale-100 group-hover:scale-110",
    description:
      "Established in 1957, KMA is one of India's premier management associations, dedicated to promoting professional management practices across Kerala. By facilitating knowledge exchange and fostering leadership, KMA plays a pivotal role in advancing sustainable business practices and responsible management in the region.",
  },
  {
    id: 2,
    name: "Kerala Startup Mission (KSUM)",
    logo: ksumLogo,
    // Standard size
    scaleClass: "scale-125 group-hover:scale-135",
    description:
      "KSUM is the Government of Kerala's nodal agency for fostering entrepreneurship, innovation, and incubation activities. With over 4,100 startups across 14 districts, KSUM provides a robust ecosystem that supports sustainable innovation and attracts global investments, positioning Kerala as a hub for green and tech-driven enterprises.",
  },
  {
    id: 12,
    name: "Nexergy",
    logo: Nexergy,
    scaleClass: "scale-100 group-hover:scale-110",
    description:
      "Nexergy Tech Solutions is an energy audit and sustainability company that supports industries and institutions in reducing energy costs, improving efficiency, and achieving sustainability goals. The company provides Energy, Water, and Carbon Audits, along with energy management and compliance solutions to promote smart and sustainable operations. ",
  },
  {
    id: 4,
    name: "Triple I (Impact Investment Initiative for Global Health)",
    logo: tripleILogo,
    // BOOSTED SIZE (1.3x)
    scaleClass: "scale-125 group-hover:scale-135",
    description:
      "Launched during Japan's G7 presidency in 2023, Triple I aims to improve global health by raising the profile of impact investment. With backing from the WHO Foundation, it focuses on creating enabling policy environments and fostering partnerships to scale sustainable health solutions in low and middle-income countries, including Kerala.",
  },

  {
    id: 8,
    name: "Woven Design Collective",
    logo: wovenLogo,
    scaleClass: "scale-100 group-hover:scale-110",
    description:
      "Woven Design Collective is a global regenerative design and planning firm with an interdisciplinary approach to developing habitat and infrastructure. Their services include bio-regional transformation through strategic vision development and cross-sectoral implementation of architecture, urban planning, rural development, and community development, emphasizing nature-based infrastructure.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

const PartnersGrid = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PARTNERS_DATA.map((partner) => (
            <motion.div
              key={partner.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col h-full border border-gray-100 overflow-hidden"
            >
              {/* Top Accent Gradient (Visible on Hover) */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Logo Area */}
              <div className="mb-8 h-20 w-full flex items-center justify-start relative">
                <div className="absolute inset-0 bg-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10 blur-xl"></div>
                {/* APPLYING THE CUSTOM SCALE LOGIC HERE
                    We use 'partner.scaleClass' to individually target the size 
                */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`h-full w-auto object-contain transition-transform duration-500 drop-shadow-sm group-hover:drop-shadow-md  scale-100 group-hover:scale-110`}
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[56px] flex items-center leading-tight group-hover:text-teal-600 transition-colors duration-300">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow opacity-90">
                {partner.description}
              </p>

              {/* Read More Link */}
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between group/btn">
                <span className="text-sm font-bold text-gray-900 group-hover:text-teal-600 transition-colors flex items-center gap-2">
                  Read More
                </span>

                {/* Animated Arrow Circle */}
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersGrid;
