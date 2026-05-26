import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Download } from "lucide-react";
import gccossLogo from "../../assets/images/logos/GCCOSS_Logo.png";
import sustainabilityPdf from "../../assets/documents/sustainability-leadership.pdf";
import decodingSEBI from "../../assets/documents/decoding.pdf";
import panelDiscussion from "../../assets/documents/panel-discussion.pdf";
import reconfiguringAcademia from "../../assets/documents/reconfiguring-academia-for-a-sustainable-planet.pdf";
import oppertunitiesInRegenerative from "../../assets/documents/regenerative_plantations_kerala_Clean_V2.2.pdf";
// Placeholder Data - You can update this later
const PUBLICATIONS_DATA = [
    {
    id: 1,
    title: "Reconfiguring Academia for a Sustainable Planet",
    category: "Reconfiguring Academia for a Sustainable Planet",
    date: "January 2026",
    description:
      "Universities today operate at the intersection of accelerating environmental change, social complexity, and economic uncertainty. As knowledge institutions with significant physical, financial, and societal footprints",
    pdf: reconfiguringAcademia,
  },
  {
    id: 2,
    title: "Opportunities in Regenerative Plantations for Kerala",
    category: "Reconfiguring Academia for a Sustainable Planet",
    date: "April 2026",
    description:
      "Opportunities in Regenerative Plantations for Kerala examines the transition of Kerala’s plantation sector towards regenerative agriculture as a pathway for ecological restoration and climate resilience.",
    pdf: oppertunitiesInRegenerative,
  },
  {
    id: 1,
    title: "Sustainability Leadership",
    category: "Annual Report",
    date: "December 2025",
    description:
      "Across countries, societies and sectors, one truth is clear: sustainable development is not progressing at the speed or scale our world demands.",
    pdf: sustainabilityPdf,
  },
  {
    id: 2,
    title: "Decoding SEBI's Impact on Sustainability",
    category: "Research Paper",
    date: "October 2024",
    description:
      "The GCCOSS (Geojit CUSAT Centre of Sustainability Studies) hosted the ATMOS - Workshop on Sustainability, a thought-provoking session dedicated to exploring the critical intersection of sustainability, financial markets, and regulatory frameworks.",
    pdf: decodingSEBI,
  },
  {
    id: 3,
    title: "Panel Discussion: Business Case of Sustainability",
    category: "Case Study",
    date: "August 2024",
    description:
      "The ATMOS sustainability workshop organized by GCCOSS, featured an engaging panel discussion on ESG (Environmental, Social, and Governance) practices and sustainability",
    pdf: panelDiscussion,
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

//pdf open
const handleOpenPdf = (pdfUrl) => {
  if (pdfUrl) {
    // Opens the PDF in a new browser tab
    // The browser's built-in viewer will let them read or download
    window.open(pdfUrl, "_blank");
  } else {
    alert("articles coming soon!");
  }
};

const PublicationsGrid = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PUBLICATIONS_DATA.map((pub) => (
            <motion.div
              key={pub.id}
              variants={cardVariants}
              className="group bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* --- ADD THIS BLOCK --- */}
              <div className="w-29 h-24 p-2 bg-white rounded-lg border border-gray-100 flex items-center justify-center shadow-sm">
                <img
                  src={gccossLogo}
                  alt="GCCOSS"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                {pub.title}
              </h3>

              {/* Date */}
              {/* <p className="text-xs text-gray-400 font-semibold mb-4">
                Published: {pub.date}
              </p> */}

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {pub.description}
              </p>

              {/* Actions */}
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => handleOpenPdf(pub.pdf)}
                  className="text-sm font-bold text-gray-900 group-hover:text-teal-600 flex items-center gap-2 transition-colors"
                >
                  Read Article{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsGrid;
