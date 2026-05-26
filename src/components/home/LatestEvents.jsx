import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// 1. IMPORT REAL DATA
import { EVENTS_DATA } from "../../data/eventsData";
// import { useData } from '../context/DashboardContext';

const LatestEvents = () => {
  // const {events}= useData()
  // 1. Define the IDs you want to show
  const selectedIds = [2, 13, 12];

  // 2. Filter the real data to get only these events
  const latestThreeEvents = selectedIds
    .map((id) => EVENTS_DATA.find((event) => event.id === id))
    .filter(Boolean);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-black mb-4"
          >
            Latest Events and Publications
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed with our recent publications, research, and updates on
            sustainability.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestThreeEvents.map((event, index) => {
            // 3. SMART IMAGE SELECTION
            // Checks if it's an array (new format) or string (old format)
            const displayImage =
              event.images && event.images.length > 0
                ? event.images[0]
                : event.image;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={displayImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-6 font-medium">
                    {event.date}
                  </p>

                  <div className="mt-auto">
                    {/* 4. DYNAMIC LINKING */}
                    <Link
                      to={`/events/${event.slug}`}
                      className="inline-flex items-center text-black font-bold text-sm hover:text-teal-600 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
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

export default LatestEvents;
