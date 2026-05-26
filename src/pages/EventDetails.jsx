import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { EVENTS_DATA } from "../data/eventsData";

// --- 1. SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles needed for basic functionality and effects
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules for auto-scroll and fade effect
import { Autoplay, EffectFade } from "swiper/modules";

const EventDetails = () => {
  const { slug } = useParams();
  const event = EVENTS_DATA.find((e) => e.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!event) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">
          Event not found
        </h2>
        <Link to="/events" className="text-teal-600 font-bold hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  // --- 2. DATA PREPARATION ---
  // Ensure we have an array, supporting both old data format (event.image) and new (event.images)
  const imageArray = event.images || (event.image ? [event.image] : []);
  // Check if we need a carousel
  const hasMultipleImages = imageArray.length > 1;
  // Fallback image if data is missing
  const primaryImage =
    imageArray.length > 0
      ? imageArray[0]
      : "https://via.placeholder.com/1200x600?text=No+Image";


      // --- NEW LOGIC: Dynamic Image Position ---
  const alignClass = event.imgPos || "object-top";
const fitClass = event.isLogo ? "object-contain bg-white p-8" : "object-cover";
  return (
   <div className="font-sans bg-white min-h-screen pb-20">
      
      {/* 1. Immersive Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[85vh] bg-gray-900">
        
        {/* --- 3. CONDITIONAL RENDERING --- */}
        {hasMultipleImages ? (
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            effect={"fade"}
            speed={1000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay, EffectFade]}
            className="w-full h-full"
          >
            {imageArray.map((imgSrc, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <img
                  src={imgSrc}
                  alt={`${event.title} image ${index + 1}`}
                  // USE THE DYNAMIC CLASS HERE
                  className={`w-full h-full object-cover ${fitClass} ${alignClass}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={primaryImage}
            alt={event.title}
            // USE THE DYNAMIC CLASS HERE
            className={`w-full h-full object-cover ${fitClass}  ${alignClass}`}
          />
        )}

        {/* ============================================================
            THE OVERLAY AND CONTENT BELOW REMAIN EXACTLY THE SAME
            They sit on top of either the carousel or the single image
        ============================================================ */}

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>

        {/* Floating Back Button */}
        <Link
          to="/events"
          // Added z-20 to ensure it's above the Swiper and overlay
          className="absolute top-24 left-4 md:left-8 md:top-28 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-black p-3 rounded-full transition-all duration-300 shadow-lg z-20"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>

        {/* Hero Content (Bottom Left) */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Meta Badges */}
            <div className="flex flex-wrap gap-4 mb-4 md:mb-6">
              <div className="bg-teal-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm">
                <Calendar className="w-4 h-4" />
                {event.date}
              </div>
              <div className="bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 border border-white/20">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              {event.title}
            </h1>
          </motion.div>
        </div>
      </div>

{/* 2. Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg md:prose-xl prose-teal text-gray-700"
        >
          {/* FIX: 'whitespace-pre-line' respects all your line breaks exactly as they are.
              No need to split or map. It just works.
          */}
          <div className="whitespace-pre-line text-lg leading-8 text-gray-700">
            {event.description}
          </div>
        </motion.div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-start">
          <Link
            to="/events"
            className="text-gray-500 font-bold hover:text-teal-600 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Events
          </Link>
        </div>
      </article>
    </div>
  );
};

export default EventDetails;
