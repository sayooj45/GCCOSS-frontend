import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ... (Image imports remain exactly the same)
import junaidImg from '../../assets/images/ManagementCouncil/Prof. M Junaid Bushiri.jpg';
import georgeImg from '../../assets/images/ManagementCouncil/C J George.jpg';
import miniNairImg from '../../assets/images/ManagementCouncil/Mini Nair.jpg';
import balakrishnanImg from '../../assets/images/ManagementCouncil/A Balakrishnan.jpg';
import samThomasImg from '../../assets/images/ManagementCouncil/dr_sam.jpg';
import sivanandanImg from '../../assets/images/ManagementCouncil/Dr. Sivanandan_achari_cusat.jpg';
import abhilashImg from '../../assets/images/ManagementCouncil/Dr Abhilash S.jpg';
import pdJoseImg from '../../assets/images/ManagementCouncil/pd-jose.jpg';
import josephImg from '../../assets/images/ManagementCouncil/joseph-martin.png'; 

const COUNCIL_MEMBERS = [
  { name: "Dr. M Junaid Bushiri", role: "Vice Chancellor, CUSAT", image: junaidImg },
  { name: "Mr. C J George", role: "MD, Geojit Financial Services", image: georgeImg },
  { name: "Ms. Mini Nair", role: "CFO, Geojit Financial Services", image: miniNairImg },
  { name: "Mr. A. Balakrishnan", role: "Executive Director, Geojit", image: balakrishnanImg },
  { name: "Dr. Sam Thomas", role: "Director, School of Mgmt Studies", image: samThomasImg },
  { name: "Dr. V. Sivanandan Achari", role: "Professor, School of Env Studies", image: sivanandanImg },
  { name: "Dr. Abhilash S.", role: "Director, ACARR, CUSAT", image: abhilashImg },
  { name: "Dr. P. D. Jose", role: "Professor, IIM Bangalore", image: pdJoseImg },
  { name: "Mr. Joseph Martin", role: "CEO, GCCOSS", image: josephImg }
];

// --- 1. HELPER FUNCTION TO CREATE ID FROM NAME ---
// Converts "Dr. M Junaid Bushiri" -> "dr-m-junaid-bushiri"
const createId = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace spaces/symbols with hyphens
    .replace(/^-+|-+$/g, '');   // Remove dashes from start/end
};

const ManagementCouncil = () => {
  const scrollContainerRef = useRef(null);
  const extendedMembers = [...COUNCIL_MEMBERS, ...COUNCIL_MEMBERS];

  // Manual Scroll
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container) {
        const singleSetWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= singleSetWidth) {
          container.scrollLeft -= singleSetWidth;
        }
        container.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(245, 245, 247, 1)' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-black">Management Council</h2>
            <p className="text-gray-500 mt-4 max-w-2xl">
              Guided by a team of distinguished academic and industry leaders.
            </p>
          </div>
          {/* Controls */}
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white border border-gray-300 hover:bg-black hover:text-white transition-all shadow-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white border border-gray-300 hover:bg-black hover:text-white transition-all shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedMembers.map((member, index) => {
            const isWideImage = (index % 9 === 0) || (index % 9 === 8);
            
            // --- 2. GENERATE ID ---
            const memberId = createId(member.name);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="min-w-[280px] md:min-w-[320px] snap-start"
              >
                {/* --- 3. LINK WITH HASH ID --- */}
                {/* This creates a link like: /who-we-are#dr-m-junaid-bushiri */}
                <Link 
                  to={`/who-we-are#${memberId}`}
                  className="block h-full cursor-pointer"
                >
                  <div className="h-[380px] bg-white rounded-2xl overflow-hidden mb-5 relative group border border-gray-200 flex items-center justify-center">
                   <img 
  src={member.image} 
  alt={member.name} 
  className={`w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105 
    ${isWideImage ? 'object-contain p-2' : 'object-cover object-top'}
    ${member.name === "Mr. Joseph Martin" ? '!object-cover !scale-[1.40] !origin-top' : ''}
  `}
/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#007bff] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 font-medium">
                    {member.role}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManagementCouncil;