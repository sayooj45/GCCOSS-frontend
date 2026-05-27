import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, MapPin } from "lucide-react";

// Import data
import { EVENTS_DATA } from "../../data/eventsData";
import { useData } from "../context/DashboardContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const EventsGrid = () => {
  const { events } = useData();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {events.map((event, index) => {
            // FIX: Determine the correct image source
            // If 'images' array exists, take the first one. Otherwise take 'image'.
            const displayImage =
              event.images && event.images.length > 0
                ? event.images[0]
                : event.image;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    // UPDATED SRC HERE
                    src={displayImage}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-teal-600" />
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                      {new Date(event.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Location */}
                  <div className="flex items-center gap-1.5 mb-3 text-gray-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {event.place}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-teal-600 transition-colors">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {event.shortDescription}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <Link
                      to={`/events/${event._id}`}
                      // Add Scroll To Top here too for good UX
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-xs font-bold text-gray-500 group-hover:text-teal-600 transition-colors flex items-center gap-1"
                    >
                      Read Full Story
                    </Link>

                    <Link
                      to={`/events/${event._id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsGrid;
