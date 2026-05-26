import React, { useContext } from "react";
import { motion } from "framer-motion";

// ==========================================
// 1. PARTNER LOGOS IMPORTS
// ==========================================
import partner1 from "../../assets/images/partnersLogo/KMA.jpeg";
import partner2 from "../../assets/images/partnersLogo/KSUM.jpg";
import partner3 from "../../assets/images/partnersLogo/IIIC.jpeg";
import partner4 from "../../assets/images/partnersLogo/Triple I.jpg";
import partner7 from "../../assets/images/partnersLogo/Woven Design Collective.jpeg";
import partner8 from "../../assets/images/partnersLogo/greenfi.jpeg";
import partner9 from "../../assets/images/partnersLogo/EQUINOCT.png";
import partner10 from "../../assets/images/partnersLogo/College of Engineering Trivandrum Alumni Association (CETAA).jpeg";
import partner11 from "../../assets/images/partnersLogo/Nexergy.png";

// ==========================================
// 2. GALLERY IMAGES IMPORTS
// ==========================================
import gallery1 from "../../assets/images/home/GalleryImg1.jpg";
import gallery2 from "../../assets/images/home/GalleryImg2.jpg";
import gallery3 from "../../assets/images/home/GalleryImg3.jpg";
import gallery4 from "../../assets/images/home/GalleryImg4.jpg";
import gallery5 from "../../assets/images/home/GalleryImg5.jpg";
import gallery6 from "../../assets/images/home/GalleryImg6.jpg";

import scroll1 from "../../assets/images/home/HomeScroll1.jpeg";
import scroll2 from "../../assets/images/home/HomeScroll2.jpeg";
import scroll3 from "../../assets/images/home/HomeScroll3.jpeg";
import scroll4 from "../../assets/images/home/HomeScroll4.jpeg";
import scroll5 from "../../assets/images/home/HomeScroll5.jpeg";
import scroll6 from "../../assets/images/home/HomeScroll6.jpeg";
import scroll7 from "../../assets/images/home/HomeScroll7.jpeg";
import scroll8 from "../../assets/images/home/HomeScroll8.jpeg";
import scroll9 from "../../assets/images/home/HomeScroll9.jpeg";
import { useData } from "../context/DashboardContext";

// const PARTNER_LOGOS = [
//   partner1,
//   partner2,
//   partner3,
//   partner4,
//   partner7,
//   partner8,
//   partner9,
//   partner10,
//   partner11,
// ];

const ALL_IMAGES = [
  scroll1,
  scroll2,
  scroll3,
  scroll4,
  scroll5,
  scroll6,
  scroll7,
  scroll8,
  scroll9,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

// Split images for dual rows
const ROW_1_IMAGES = ALL_IMAGES.slice(0, 8);
const ROW_2_IMAGES = ALL_IMAGES.slice(8);

const PartnersSection = () => {
  const { partners } = useData();
  console.log(partners);

  const PARTNER_LOGOS = partners.map((partner) => partner.logo);

  console.log(PARTNER_LOGOS);

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* ==========================
          PART 1: PARTNERS (Auto-Scrolling)
      ========================== */}
      <div className="w-full mb-32">
        <div className="text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Our Esteemed Partners
          </motion.h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Collaborating for a sustainable future across academia, government,
            and business.
          </p>

          {/* PARTNERS LOGO SCROLLER */}
          <div className="flex overflow-hidden py-8 w-full">
            <motion.div
              className="flex gap-8 w-max items-center pl-20"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
            >
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => {
                // LOGIC UPDATE:
                // Indices that need to be BIG (h-40):
                // 1: KSUM
                // 2: IIIC
                // 3: Triple I (Requested Bigger)
                // 4: Ecodrisil (Requested Bigger)
                // const isLargeLogo = [1, 2, 3, 8].includes(originalIndex);

                // Note: KMA (Index 0) falls into the 'else' block now, making it smaller/standard.

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center h-48 w-80"
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="w-full object-contain hover:scale-110 transition-transform duration-300 h-18"
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==========================
          PART 2: DUAL ROW GALLERY (Full Width)
      ========================== */}
      <div className="w-full">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900">
            Moments & Highlights
          </h3>
          <div className="h-1 w-20 bg-teal-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Wrapper for the moving rows */}
        <div className="flex flex-col gap-6 w-full">
          {/* ROW 1: Moves LEFT */}
          <div className="flex overflow-hidden py-2 w-full">
            <motion.div
              className="flex gap-6 w-max pl-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            >
              {[...ROW_1_IMAGES, ...ROW_1_IMAGES].map((img, index) => (
                <div
                  key={index}
                  className="group w-[300px] h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 flex-shrink-0"
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* ROW 2: Moves RIGHT */}
          <div className="flex overflow-hidden py-2 w-full">
            <motion.div
              className="flex gap-6 w-max pl-6"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 65 }}
            >
              {[...ROW_2_IMAGES, ...ROW_2_IMAGES].map((img, index) => (
                <div
                  key={index}
                  className="group w-[300px] h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 flex-shrink-0"
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
