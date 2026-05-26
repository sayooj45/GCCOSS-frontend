import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// IMPORT YOUR FIGMA BACKGROUND HERE
// Save your wave background from Figma as 'home-bg.png' in assets/images/home/
import homeBg from "../assets/images/home/herobg.png";
import AboutSection from "../components/home/AboutSection";
import WhatWeOffer from "../components/home/WhatWeOffer";
import PartnersSection from "../components/home/PartnersSection";
import ManagementCouncil from "../components/home/ManagementCouncil";
import FAQSection from "../components/home/FAQSection";
import LatestEvents from "../components/home/LatestEvents";

const Home = () => {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
        // This sets your Figma image as the background
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundColor: "#ffffff", // Fallback color
        }}
      >
        {/* =========================================
              MAIN CONTENT
          ========================================= */}
        <div className="relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* 1. HEADLINE */}
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
              Simplifying <br />
              Sustainability
            </h1>

            {/* 2. DESCRIPTION - UPDATED CONTENT */}
            <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Empowering a sustainable future through cutting-edge research,
              future ready curriculum, innovative tools, and collaborative
              initiatives in ESG practices.
            </p>

            {/* 3. BUTTON (Blue) */}
            <div className="mt-10">
              <Link
                to="/about"
                className="inline-block px-7 py-3 rounded-lg bg-teal-500 hover:bg-teal-700  text-white font-bold text-lg  transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <AboutSection />
      <WhatWeOffer />
      <PartnersSection />
      <ManagementCouncil />
      <FAQSection />
      <LatestEvents />
    </>
  );
};

export default Home;
