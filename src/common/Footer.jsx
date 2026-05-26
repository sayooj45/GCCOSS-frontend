import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/images/logos/GCCOSS_Logo.png'; // Importing the logo

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            MAIN GRID SECTION
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* COLUMN 1: LOGO & DESCRIPTION (Span 5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <img 
                src={logo} 
                alt="GCCOSS Logo" 
                className="h-23 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering institutions and professionals with advanced sustainability solutions, 
              research, and certification programs to drive global impact.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-5 pt-2">
              <a href="https://www.linkedin.com/company/geojit-cusat-centre-of-susatainability-studies/" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-teal-600 hover:text-white transition-all transform hover:-translate-y-1"><Linkedin size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1"><Youtube size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"><Facebook size={18} /></a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Span 3 cols) - Combined List */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide border-l-4 border-teal-600 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link onClick={scrollToTop} to="/about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm inline-flex items-center gap-2 hover:translate-x-1 duration-300">About Us</Link></li>
              <li><Link onClick={scrollToTop} to="/who-we-are" className="text-gray-400 hover:text-teal-400 transition-colors text-sm inline-flex items-center gap-2 hover:translate-x-1 duration-300">Who We Are</Link></li>
              <li><Link onClick={scrollToTop} to="/partners" className="text-gray-400 hover:text-teal-400 transition-colors text-sm inline-flex items-center gap-2 hover:translate-x-1 duration-300">Our Partners</Link></li>
              <li><Link onClick={scrollToTop} to="/services" className="text-gray-400 hover:text-teal-400 transition-colors text-sm inline-flex items-center gap-2 hover:translate-x-1 duration-300">Service Portfolio</Link></li>
              <li><Link onClick={scrollToTop} to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm inline-flex items-center gap-2 hover:translate-x-1 duration-300">Contact Support</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO (Span 4 cols) */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide border-l-4 border-teal-600 pl-3">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>
                 3rd Floor, Student Amenity Centre, University Road, South Kalamassery, Ernakulam, Kerala 682022
                </span>
              </li>
             <li className="flex items-start gap-3 text-gray-400 text-sm group">
  {/* Added 'mt-1' to align icon with the first line of text */}
  <Mail className="w-5 h-5 text-teal-600 group-hover:text-teal-400 mt-0.5" />
  <div className="flex flex-col gap-1">
    <a href="mailto:joseph.martin@cusat.ac.in" className="hover:text-white transition-colors">
      joseph.martin@cusat.ac.in
    </a>
    <a href="mailto:sneha.jose@cusat.ac.in" className="hover:text-white transition-colors">
      sneha.jose@cusat.ac.in
    </a>
  </div>
</li>

            </ul>
          </div>

        </div>

        {/* =========================================
            BOTTOM SECTION: COPYRIGHT & CREDIT
        ========================================= */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          
          <div className="text-center md:text-left">
            <p>© 2025 GCCOSS. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <div className="text-center md:text-right flex items-center gap-1">
            <span>Developed by</span>
            <a 
              href="https://www.qmarktechnolabs.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-500 font-semibold hover:text-teal-300 transition-colors"
            >
         QMark Technolabs
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;