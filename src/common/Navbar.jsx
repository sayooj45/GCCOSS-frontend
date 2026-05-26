import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// LOGO IMPORTS
import geojitCusatLogo from '../assets/images/logos/GCCOSS_Logo.png'; 
import cusatCrest from '../assets/images/logos/logoM.png';           

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Theme Colors
  const THEME_TEAL = "#0d9488"; 
  const TEXT_BLACK = "#1F2937"; 

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Service Portfolio', path: '/services' },
    { name: 'Partners', path: '/partners' },
    { name: 'Events', path: '/events' },
    { name: 'Publications', path: '/publications' },
    // { name: 'Credentials', path: '/credentials' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 font-sans shadow-sm"> 
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center min-h-[90px]">
          
          {/* LEFT: Text Logo */}
          <div className="flex-shrink-0 flex flex-col justify-center max-w-[200px] sm:max-w-[280px]">
            <Link to="/" className="group">
              <h1 
                className="text-2xl sm:text-3xl font-bold tracking-wide leading-none transition-colors"
                style={{ color: TEXT_BLACK }}
              >
                GCCOSS
              </h1>
              <p 
                className="text-[9px] sm:text-[10px] font-bold leading-tight mt-1 text-gray-600"
              >
                A Collaborative initiative between CUSAT <br className="hidden sm:block"/> and Geojit Financial Services Limited
              </p>
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[15px] font-bold transition-colors duration-200"
                style={{ 
                   color: isActive(link.path) ? 'black' : '#4b5563', 
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'black'}
                onMouseLeave={(e) => e.currentTarget.style.color = isActive(link.path) ? 'black' : '#4b5563'}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT:conatct Us Button + BIGGER LOGOS */}
          <div className="hidden xl:flex items-center gap-6">
            
           
            <Link 
              to="/contact"
              className="px-6 py-2.5 rounded-full text-white text-sm font-bold shadow-sm transition-all duration-300 whitespace-nowrap"
              style={{ backgroundColor: THEME_TEAL }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Contact Us
            </Link>

            {/* The TWO Logos (Increased Size) */}
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
              <img 
                src={geojitCusatLogo} 
                alt="Geojit Logo" 
                // Increased to h-14 (approx 56px height)
                className="h-14 w-auto object-contain"
                onError={(e) => {e.target.style.display='none'}} 
              />
              <img 
                src={cusatCrest} 
                alt="CUSAT Crest" 
                // Increased to h-14
                className="h-14 w-auto object-contain"
                onError={(e) => {e.target.style.display='none'}}
              />
            </div>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="flex items-center xl:hidden gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-900"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl animate-fade-in-down h-screen sm:h-auto">
          <div className="px-4 py-6 space-y-2">
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-bold transition-colors"
                style={{ 
                  color: isActive(link.path) ? THEME_TEAL : TEXT_BLACK,
                  backgroundColor: isActive(link.path) ? '#f0fdfa' : 'transparent'
                }}
              >
                {link.name}
              </Link>
            ))}
             
             {/* Mobile Footer Area */}
             <div className="pt-8 mt-4 border-t border-gray-100 flex flex-col items-center gap-8">
               <Link
                 to="/contact"
                 onClick={() => setIsOpen(false)}
                 className="w-full text-center px-6 py-3 rounded-full text-white font-bold shadow-sm"
                 style={{ backgroundColor: THEME_TEAL }}
               >
                Contact Us
               </Link>
               
               {/* Both Logos in Mobile Menu */}
               <div className="flex items-center gap-6 justify-center pb-10">
                  <img src={geojitCusatLogo} alt="Geojit Logo" className="h-14 w-auto object-contain" />
                  <div className="h-10 w-px bg-gray-200"></div>
                  <img src={cusatCrest} alt="CUSAT Logo" className="h-14 w-auto object-contain" />
               </div>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;