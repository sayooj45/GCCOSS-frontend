import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- 1. IMAGE IMPORTS ---
import josephImg from '../../assets/images/ManagementCouncil/joseph-martin.png';
import snehaImg from '../../assets/images/teams/sneha.png';
import adithyaImg from '../../assets/images/teams/adithya.png';
import VikhyathImg from '../../assets/images/teams/vikhyath.png';

// --- 2. DATA ---
const teamData = [
  {
    id: 1,
    name: "Mr. Joseph Martin Chazhoor Francis",
    role: "CEO",
    image: josephImg,
    description: "Joseph Martin Chazhoor Francis is CEO of the Geojit CUSAT Centre of Sustainability Studies and Advisory Board Member of Greenfi. A former Markets Leader for PwC India’s ESG Platform, he brings 40+ years of leadership experience with EY, Saudi Aramco, TCS, General Motors, Kochi Refineries and FACT.",
    isLeader: true,
  },
  {
    id: 2,
    name: "Sneha Jose",
    role: "Research Analyst",
    image: snehaImg,
    description: "Postgraduate in Physics from St Joseph’s University, Bangalore and Masters in Energy Transition and Sustainability from Robert Gordon University, Aberdeen. Sneha focuses on Digital for Sustainability in GCCOSS.",
    isLeader: false,
  },
  {
    id: 3,
    name: "Vikhyath Premugh", 
    role: "Research Analyst",
    // CDN Placeholder for ABCD
    image: VikhyathImg,
    description: "Research Analyst at GCCOSS with expertise in ecology and biodiversity. Holds a BS–MS dual degree in Biology from the Indian Institute of Science Education and Research (IISER), Pune, and an MSc in Conservation from University College London. Experience includes research in vegetation ecology and teaching.",
    isLeader: false,
  },
  {
    id: 4,
    name: "Adithya T T",
    role: "Research Intern",
    image: adithyaImg,
    description: "Masters in Urban and Regional Planning from NIT Calicut and Bachelor of Architecture from MES College of Architecture. Adithya focuses on Sustainable Infrastructure in GCCOSS.",
    isLeader: false,
  },
];

const TeamCard = ({ member, isLeader, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      // 1. CONTAINER: 'group' handles hover flip.
      className={`
        group relative cursor-pointer perspective-[1000px] mx-auto
        ${isLeader ? 'w-full max-w-md h-[480px]' : 'w-full h-[420px]'}
      `}
    >

    {/* 2. FLIPPER: Rotates 180deg on HOVER */}
<div 
  className={`
    relative w-full h-full transition-all duration-700 
    [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] 
    rounded-2xl shadow-xl
    ${isActive ? '[transform:rotateY(180deg)]' : ''} 
  `}
>
        
        {/* ==============================
            FRONT FACE
           ============================== */}
        <div 
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden flex flex-col bg-white border border-gray-100 shadow-sm"
        >
          {/* Image Area */}
          <div className="h-[70%] w-full bg-gradient-to-b from-gray-50 to-white flex items-end justify-center overflow-hidden relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-50 rounded-full blur-2xl opacity-60"></div>
<img 
  src={member.image} 
  alt={member.name} 
  className={`
    relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-105
    ${member.id === 3 
      ? 'object-cover object-center p-0'   // ID 3 : Fills box, focuses on face, no padding
      : 'object-contain p-4'            // Others: Fits inside, has padding
    }
  `}
  onError={(e) => { e.target.src = "https://i.pinimg.com/736x/f6/b0/ab/f6b0ab09c29242f56ef25e17785ef1e4.jpg"; }}
/>
          </div>

          {/* Info Area */}
          <div className="h-[30%] px-6 flex flex-col justify-center text-center bg-white border-t border-gray-50 relative z-20">
            <h3 className={`font-bold text-gray-900 leading-tight mb-1 ${isLeader ? 'text-2xl' : 'text-lg'}`}>
              {member.name}
            </h3>
            <div className="inline-block mx-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-100">
                {member.role}
              </span>
            </div>
          </div>
        </div>

        {/* ==============================
            BACK FACE
           ============================== */}
        <div 
          className={`
            absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] 
            rounded-2xl overflow-hidden p-8 flex flex-col justify-center items-center text-center shadow-inner transition-colors duration-300
            ${isActive ? 'bg-teal-800 text-white' : 'bg-white text-gray-800 border border-gray-200'}
          `}
        >
          <h3 className={`text-xl font-bold mb-4 ${isActive ? 'text-white' : 'text-gray-900'}`}>
            About
          </h3>
          
          <div className={`overflow-y-auto max-h-[80%] pr-1 ${isActive ? 'scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-teal-800' : 'scrollbar-hide'}`}>
            <p className={`text-sm leading-relaxed text-justify ${isActive ? 'text-teal-50/90' : 'text-gray-600'}`}>
              {member.description}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const GCCOSSTeam = () => {
  const leader = teamData.find(m => m.isLeader);
  const members = teamData.filter(m => !m.isLeader);

  // Tracks which card is currently "Active" (Teal Color)
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (id) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-teal-50 rounded-full text-teal-700 font-bold text-sm mb-4 border border-teal-100"
          >
            Our People
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A dedicated team driving sustainability through research, innovation, and strategic advisory.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* 1. LEADERSHIP SECTION */}
          {leader && (
            <div className="flex flex-col items-center">
               <TeamCard 
                 member={leader} 
                 isLeader={true} 
                 isActive={activeId === leader.id}
                 onClick={() => handleCardClick(leader.id)}
               />
            </div>
          )}

          {/* 2. TEAM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {members.map((member) => (
              <TeamCard 
                key={member.id} 
                member={member} 
                isLeader={false}
                isActive={activeId === member.id}
                onClick={() => handleCardClick(member.id)} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GCCOSSTeam;