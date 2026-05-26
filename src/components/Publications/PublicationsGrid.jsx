import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Download } from "lucide-react";
import { useData } from "../context/DashboardContext";
// Placeholder Data - You can update this later

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
  const { publications } = useData();
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
          {publications.map((pub) => (
            <motion.div
              key={pub._id}
              variants={cardVariants}
              className="group bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* --- ADD THIS BLOCK --- */}
              <div className="w-29 h-24 p-2 bg-white rounded-lg border border-gray-100 flex items-center justify-center shadow-sm">
                <img
                  src={pub.image}
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
