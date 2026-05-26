import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  GraduationCap,
} from "lucide-react";

// ==========================================
// 1. CORPORATE DATA (10 Specific Cards)
// ==========================================
const CORPORATE_DATA = [
  {
    id: "corp-1",
    title: "Sustainability Capacity Development",
    services: [
      "Sustainability Leadership Program",
      "Sustainability Reporting Masterclass",
      "Sustainability for Board of Directors / CxOs",
      "Sustainability for Academic Institutions",
      "Carbon Accounting, Management, Credits",
    ],
  },
  {
    id: "corp-2",
    title: "Sustainability / ESG Strategy Formulation",
    services: [
      "Stakeholder identification / engagement",
      "Materiality Analysis and Topic selection",
      "Peer benchmarking and target setting",
      "Comprehensive Roadmap development",
      "Sustainability Program Management",
    ],
  },
  {
    id: "corp-3",
    title: "Sustainability / ESG Reporting",
    services: [
      "Reporting strategy development",
      "Data management and control setting",
      "Performance monitoring and followup",
      "Sustainability / ESG report development",
      "Sustainability / ESG report assessment",
    ],
  },
  {
    id: "corp-4",
    title: "Sustainability Digitalization",
    services: [
      "Sustainability / ESG digital requirements",
      "Sustainability / ESG Digital Rollout",
      "Sustainability / ESG Dashboard",
      "Sustainability / ESG Worksheet",
    ],
  },
  {
    id: "corp-5",
    title: "Impact Measurement",
    services: [
      "Establishing theory of change",
      "Identifying monitoring indicators",
      "Impact measurement and calculations",
      "Impact report development",
      "Impact assessment",
    ],
  },
  {
    id: "corp-6",
    title: "Sustainable Finance Advisory ",
    services: [
      "Developing project portfolio",
      "Establishing measurement systems",
      "Facilitation of sustainable finance",
      "Report preparation for financing",
    ],
  },
  {
    id: "corp-7",
    title: "Carbon Accounting",
    services: [
      "Scope 1, Scope 2 assessment",
      "Decarbonisation Roadmap",
      "Scope 3 feasibility and awareness",
      "Scope 3 baselining and data management",
    ],
  },
  {
    id: "corp-8",
    title: "Carbon Credits Advisory",
    services: [
      "Carbon credit feasibility assessment",
      "Carbon credit project development",
      "Monitoring and Verification support",
      "Carbon credit transaction support",
    ],
  },
  {
    id: "corp-9",
    title: "Biodiversity advisory",
    services: [
      "Biodiversity risk assessment",
      "Biodiversity roadmap development",
      "TNFD Reporting",
      "Regenerative agriculture advisory",
    ],
  },
  {
    id: "corp-10",
    title: "Sustainability Certification for Professionals ",
    services: [
      "Framing sustainability as a business and risk management priority.",
      "Embedding sustainability into strategy, leadership, and governance.",
      "Designing actionable sustainability targets and implementation roadmaps.",
      "Strengthening organisational alignment and accountability",
      "Converting strategy into robust ESG reporting and compliance ",
    ],
  },
];

// ==========================================
// 2. ACADEMIA DATA (10 Specific Cards)
// ==========================================
// ==========================================
// 2. ACADEMIA DATA (Title + Description)
// ==========================================
const ACADEMIA_DATA = [
  {
    id: "acad-1",
    title: "Sustainability Certifications for Specific Disciplines",
    description:
      "Tailored certification programs that integrate sustainability principles into domain-specific contexts such as finance, engineering, policy, and management.",
  },
  {
    id: "acad-2",
    title: "Sustainability Certifications for Academicians",
    description:
      "Faculty development programs designed to strengthen sustainability pedagogy, curriculum integration, and applied research capability.",
  },
  {
    id: "acad-3",
    title: "Sustainable Infrastructure",
    description:
      "Capacity-building and advisory support focused on planning, assessing, and managing infrastructure aligned with sustainability, resilience, and climate goals.",
  },
  {
    id: "acad-4",
    title: "Sustainability Leadership",
    description:
      "Executive and leadership programs that build strategic, governance, and decision-making capabilities for driving sustainability transformation.",
  },
  {
    id: "acad-5",
    title: "Reporting Masterclass",
    description:
      "Intensive training on sustainability and ESG reporting frameworks, data management, and assurance-ready disclosures.",
  },
  {
    id: "acad-6",
    title: "Carbon Markets Awareness",
    description:
      "Foundational programs that build understanding of carbon markets, mechanisms, regulations, and strategic participation opportunities.",
  },
  {
    id: "acad-7",
    title: "Renewable Energy Systems",
    description:
      "Specialized trainings covering renewable energy technologies, policy frameworks, grid integration, and sustainability impacts across the energy transition.",
  },
  {
    id: "acad-8",
    title: "Value Chain and Operations",
    description:
      "Trainings focused on value chain sustainability, responsible sourcing, lifecycle thinking, and operational decarbonization.",
  },
  {
    id: "acad-9",
    title: "AI, Data, Digital, and Technology Professionals",
    description:
      "Trainings centered on ESG data management, digital reporting systems, analytics, and technology enabled sustainability solutions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* SECTION 1: CORPORATES */}
        <div>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-4">
              <Building2 className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Corporates
            </h3>
            <div className="h-1.5 w-24 bg-teal-600 rounded-full" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start"
          >
            {CORPORATE_DATA.map((item) => (
              <ServiceCard key={item.id} data={item} />
            ))}
          </motion.div>
        </div>

        {/* SECTION 2: ACADEMIA */}
        <div>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-4">
              <GraduationCap className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Academia</h3>
            <div className="h-1.5 w-24 bg-teal-600 rounded-full" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {ACADEMIA_DATA.map((item) => (
              <ServiceCard key={item.id} data={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// CARD COMPONENT
// ==========================================
// REUSABLE CARD COMPONENT
// ==========================================
const ServiceCard = ({ data }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      {/* HOVER BACKGROUND FILL */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100 group-hover:text-white group-hover:border-white/20 transition-colors duration-300">
          {data.title}
        </h4>

        {/* CONDITIONAL CONTENT */}
        {data.description ? (
          // ACADEMIA STYLE (Paragraph)
          // FIXED: Changed 'text-justify' to 'text-left' to fix spacing issues
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-left group-hover:text-teal-50 transition-colors duration-300">
            {data.description}
          </p>
        ) : (
          // CORPORATE STYLE (List)
          <ul className="space-y-3 mb-6 flex-grow">
            {data.services &&
              data.services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5 group-hover:text-teal-200 transition-colors duration-300" />
                  <span className="text-gray-600 text-xs font-medium leading-relaxed group-hover:text-teal-50 transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
          </ul>
        )}

        {/* CTA Button */}
        <div className="mt-auto">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs transition-all duration-300
            bg-gray-50 text-gray-900 hover:bg-gray-100
            group-hover:bg-white group-hover:text-teal-700"
          >
            Inquire Now
            <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
