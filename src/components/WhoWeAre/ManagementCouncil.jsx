import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom'; // 1. Added useNavigate

// Importing Images
import junaidImg from '../../assets/images/ManagementCouncil/Prof. M Junaid Bushiri.jpg';
import georgeImg from '../../assets/images/ManagementCouncil/C J George.jpg';
import miniNairImg from '../../assets/images/ManagementCouncil/Mini Nair.jpg';
import balakrishnanImg from '../../assets/images/ManagementCouncil/A Balakrishnan.jpg';
import samThomasImg from '../../assets/images/ManagementCouncil/dr_sam.jpg';
import sivanandanImg from '../../assets/images/ManagementCouncil/Dr. Sivanandan_achari_cusat.jpg';
import abhilashImg from '../../assets/images/ManagementCouncil/Dr Abhilash S.jpg';
import pdJoseImg from '../../assets/images/ManagementCouncil/pd-jose.jpg';
import josephImg from '../../assets/images/ManagementCouncil/joseph-martin.png'; 

// Helper Function
const createId = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, '');   
};

const councilMembers = [

  {
    id: 2,
    name: "Dr. M Junaid Bushiri",
    role: "Vice Chancellor, Cochin University of Science and Technology (CUSAT)",
    image: junaidImg,
    description: "Prof. (Dr.) M. Junaid Bushiri is a Senior Professor in the Department of Physics at CUSAT since 2006 and served as Head of the Department from 2016 to 2019. He has held academic and research positions at leading international institutions in Korea, Taiwan, Japan, Spain and India, and was a Visiting Professor at the Tokyo University of Science in 2022. His research spans crystal growth, 2D materials, thin films, nanomaterials and optoelectronic applications. He has published 69 peer-reviewed papers, guided numerous research scholars and had an h-index of 20."
  },
  {
    id: 3,
    name: "Mr. C J George",
    role: "Chairman and Managing Director, Geojit Financial Services Ltd",
    image: georgeImg,
    description: "C. J. George is the Founder, Chairman, and Managing Director of Geojit Financial Services Ltd., with over 40 years of experience in the financial services and securities market. He serves on several prominent national and state-level bodies, including CUSAT, the Government of Kerala’s ESG policy committee, ASSOCHAM, CII and KPMG’s Governance and Risk Council. A recipient of leadership and lifetime achievement awards, he also holds directorships in multiple Indian and international companies."
  },
    {
    id: 5,
    name: "Mr. A. Balakrishnan",
    role: "Executive Director, Geojit Financial Services Ltd",
    image: balakrishnanImg,
    description: "Mr. A. Balakrishnan is an IT industry leader with nearly 30 years of experience, currently serving as Executive Director at Geojit Financial Services Limited. He joined Geojit in 1998 as CTO and played a key role in transforming the firm into a technology-driven financial services organization, including the establishment of Geojit Technologies (P) Limited, where he served as CEO until 2018. He also serves on the boards of Geojit group companies in India and the UAE and has received several national and international awards in management and technology."
  },
    {
    id: 9,
    name: "Dr. Sam Thomas",
    role: "Director, School of Management Studies and Director, IQMS, CUSAT",
    image: samThomasImg,
    description: "Dr. Sam Thomas is Professor and Director of the School of Management Studies at CUSAT, Dean of Commerce and Management Studies at the University of Calicut, and Director of IQAC at CUSAT. An alumnus of NIT Calicut and IIM Bangalore with a PhD in Project Management, his expertise spans project management, entrepreneurship, data analysis, and higher education accreditation. With over 25 years in academia and industry experience, he has published extensively, undertaken global academic assignments, and led training and consulting programs for major national and international organizations."
  },
    {
    id: 7,
    // REPLACED DUPLICATE "C J George" WITH MISSING "Mini Nair"
    name: "Ms. Mini Nair",
    role: "Chief Financial Officer, Geojit Financial Services Ltd",
    image: miniNairImg,
    description: "Ms. Mini Nair is a Chartered Accountant with over 22 years of experience in the BFSI sector. She previously served as Executive Director and CEO of Essel Home Loans India Limited and prior to that, was Executive Vice President and Chief Financial Officer at Maybank Indonesia."
  },
    {
    id: 6,
    name: "Dr. V. Sivanandan Achari",
    role: "Professor, School of Environmental Studies, CUSAT",
    image: sivanandanImg,
    description: "Prof. (Dr.) V. Sivanandan Achari has over 20 years of experience as a faculty member at the School of Environmental Studies, CUSAT, and currently serves as its Dean and Professor. His work spans teaching, research, and consultancy in environmental science and technology, including guidance of PhD and postdoctoral scholars and advisory roles for industries, government bodies, courts, and the National Green Tribunal. He has also held several key administrative and academic leadership positions within CUSAT."
  },
    {
    id: 8,
    name: "Dr. Abhilash S.",
    role: "Director, Advanced Centre for Atmospheric Radar Research (ACARR), CUSAT",
    image: abhilashImg,
    description: "Dr. Abhilash S. is an atmospheric scientist who completed his MSc in Meteorology and PhD in Atmospheric Sciences from CUSAT, securing first rank in his MSc. He has served in key scientific roles at the Indian Institute of Tropical Meteorology and as a visiting scientist in leading U.S. institutions, and is a recipient of the SAARC Scientist Medal, IMS Award, and CUSAT Best Young Faculty–Researcher Award. His work focuses on advanced weather and cyclone prediction systems, operational forecasting of high-impact weather events, and impact-based forecast dissemination. He has over 75 peer-reviewed publications, co-authored numerous books, and actively contributes to science outreach and international conferences."
  },
  {
    id: 4,
    name: "Dr. P. D. Jose",
    role: "Professor of Strategy, Indian Institute of Management Bangalore (IIMB)",
    image: pdJoseImg,
    description: "Prof. Dr. P. D. Jose is a Professor of Strategy at IIMB, teaches core courses in strategy and electives on corporate environmental management, sustainable enterprises, and corporate failures. He has served as visiting faculty at Cardiff Business School, IIM Kozhikode, and the University of Gothenburg. He is a Fulbright Fellow with academic engagements at MIT, Kenan-Flagler Business School, Harvard Kennedy School, and Cardiff University, reflecting his strong international academic and research exposure."
  },

    {
    id: 1,
    name: "Mr. Joseph Martin",
    role: "Chief Executive Officer, Geojit CUSAT Centre of Sustainability Studies",
    image: josephImg,
    description: "Joseph Martin Chazhoor Francis is CEO of the Geojit CUSAT Centre of Sustainability Studies and Advisory Board Member of Greenfi, an AI-enabled ESG Risk and Compliance platform. A former Markets Leader for PwC India’s ESG Platform, he brings  40+ years of leadership experience with EY, Saudi Aramco, GRI, TCS, General Motors, Kochi Refineries and FACT."
  },
];

const ManagementCouncil = () => {
  const { hash } = useLocation();
  const navigate = useNavigate(); // 2. Initialize Navigate

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [hash]);

  // 3. Handle Card Click to update the URL hash
// 3. Handle Card Click (Toggle logic)
  const handleCardClick = (memberId) => {
    // Check if we are clicking the card that is ALREADY open
    if (hash === `#${memberId}`) {
      // If yes, clear the hash (flip it back)
      navigate('', { replace: true }); // Or use window.history.back() if preferred
    } else {
      // If no, open this card
      navigate(`#${memberId}`, { replace: true });
    }
  };
  return (
<section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-16"
        >
          GCCOSS Management Council
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member, index) => {
            const isWideImage = index === 0 || index === 8;
            const memberId = createId(member.name);
            const isHighlighted = hash === `#${memberId}`;

            return (
              <motion.div
                id={memberId} 
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleCardClick(memberId)}
                // --- CONTAINER FOR 3D FLIP ---
                // 'group' enables hover effects on children
                // 'perspective-[1000px]' gives depth to the 3D rotation
                // Fixed height (h-[420px]) is required so front and back faces align
                className="group relative h-[420px] cursor-pointer perspective-[1000px]"
              >
             
           
             {/* --- INNER FLIPPER --- */}
<div 
  className={`
    relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] 
    group-hover:[transform:rotateY(180deg)] 
    shadow-md rounded-xl
    
    // 👇 THIS LINE IS CRITICAL FOR THE CLICK FLIP
    ${isHighlighted ? '[transform:rotateY(180deg)] scale-[1.02]' : ''} 
  `}
>
                  
                  {/* --- FRONT FACE (Image + Name + Role) --- */}
                  <div 
                    className={`
                      absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden border flex flex-col bg-white
                      ${isHighlighted ? 'border-teal-600 shadow-xl' : 'border-gray-100'}
                    `}
                  >
                    {/* Image Area */}
                    <div className={`h-[70%] w-full overflow-hidden flex items-center justify-center p-4 ${isHighlighted ? 'bg-teal-50/30' : 'bg-gray-50'}`}>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className={`w-full h-full transition-transform duration-500 ${
                          isWideImage ? 'object-contain' : 'object-cover object-top'
                        }`}
                      />
                    </div>
                    {/* Name/Role Area */}
                    <div className="h-[30%] p-4 flex flex-col justify-center text-center bg-white border-t border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-teal-600 font-semibold text-sm mt-2 leading-snug">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* --- BACK FACE (Description) --- */}
                  {/* Rotated 180deg initially so it faces away. When container flips 180, this becomes 0 (visible) */}
                  <div 
                    className={`
                      absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden border p-6 flex flex-col justify-center items-center text-center
                      ${isHighlighted ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-800 border-gray-200'}
                    `}
                  >
                    <h3 className={`text-lg font-bold mb-3 ${isHighlighted ? 'text-white' : 'text-teal-700'}`}>
                      About Profile
                    </h3>
                    <div className="overflow-y-auto max-h-full scrollbar-hide">
                      <p className={`text-sm leading-relaxed text-justify ${isHighlighted ? 'text-teal-50' : 'text-gray-600'}`}>
                        {member.description}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManagementCouncil;