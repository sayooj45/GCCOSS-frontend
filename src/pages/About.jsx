import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CollaborativeFoundation from "../components/about/CollaborativeFoundation";
import VisionMission from "../components/about/VisionMission";
import JoinUsCTA from "../components/about/JoinUsCTA";
import heroImg from "../assets/images/hero/aboutherobg.JPG";
import CoreThemes from "../components/ServicePortfolio/CoreThemes";
import SectorFocus from "../components/ServicePortfolio/SectorFocus";

const About = () => {
  return (
    <>
      <div className="bg-white">
        {/* =========================================
              HERO SECTION
          ========================================= */}
        <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
          {/* BACKGROUND IMAGE (Nature / Sustainability Theme) */}
          <div className="absolute inset-0 z-0">
            <img
              // Switched to a Nature/Sustainability image (Forest & Sunlight)
              src={heroImg}
              alt="Sustainability Nature Background"
              className="w-full h-full object-cover"
            />
            {/* White Gradient Overlay: Heavy at bottom to make text readable */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-5xl mx-auto mt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <h1 className="font-bold text-black leading-tight mb-8">
  {/* 1. GCCOSS - Keep this Big */}
  <span className="text-5xl md:text-6xl lg:text-7xl">
    GCCOSS
  </span>
  
  <br />
  
  {/* 2. Full Name - Make this Smaller to fit on one line */}
  {/* Changed from lg:text-6xl to lg:text-4xl/5xl */}
  <span className="text-lg md:text-3xl lg:text-4xl xl:text-5xl md:whitespace-nowrap">
    Geojit CUSAT Centre of Sustainability Studies
  </span>
</h1>

              <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto font-medium">
                GCCOSS is a pioneering collaborative initiative established by
                Cochin University of Science and Technology (CUSAT), a
                distinguished state university renowned for its diverse
                portfolio of schools and research organisations, and Geojit
                Financial Services Limited (Geojit), a leading investment
                services company with a robust presence throughout India and the
                GCC region. This partnership brings together academic excellence
                and industry leadership to advance sustainability in the country
                and beyond{" "}
              </p>

              {/* <Link
                  to="/credentials"
                  className="inline-block px-8 py-3 rounded-full bg-[#2563EB] text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Explore Our Initiatives
                </Link> */}
            </motion.div>
          </div>
        </section>
      </div>
      <CollaborativeFoundation />
      <VisionMission />
      <CoreThemes />
      <SectorFocus />
      <JoinUsCTA />
    </>
  );
};

export default About;
