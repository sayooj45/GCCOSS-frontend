import React from "react";
import { motion } from "framer-motion";
import ManagementCouncil from "../components/WhoWeAre/ManagementCouncil";
import GCCOSSTeam from "../components/WhoWeAre/GccossTeam";

const WhoWeAre = () => {
  return (
    <>
      <div
        className="w-full py-20 px-4 sm:px-6 lg:px-8 font-sans"
        style={{ backgroundColor: "rgba(250, 240, 240, 1)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
              Our Governance & Leadership Structure
            </h1>

            <p className="max-w-5xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
              GCCOSS is governed by a Management Council led by Vice Chancellor
              of Cochin University of Science and Technology, Professors from
              CUSAT and Leaders from Geojit apart from independent council
              members and CEO of GCCOSS.
            </p>
          </motion.div>
        </div>
      </div>
      <ManagementCouncil />
      <GCCOSSTeam/>
    </>
  );
};

export default WhoWeAre;
