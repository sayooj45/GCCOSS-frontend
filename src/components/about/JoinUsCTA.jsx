import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JoinUsCTA = () => {
  return (
    // 1. Outer Section is WHITE
    <section className="py-20 bg-white px-4 sm:px-6">
      {/* 2. Inner Container is the PINK CARD (Rounded) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1296px] bg-slate-800 mx-auto rounded-2xl p-12 md:p-16 text-center shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
         Who We Are
        </h2>

        <p className="text-white text-lg md:text-xl leading-relaxed mb-10 opacity-95 max-w-2xl mx-auto font-medium">
          We are a multidisciplinary team working at the intersection of
          research, policy, and practice to advance sustainability through
          systems change and real-world impact.{" "}
        </p>

        <Link
          to="/who-we-are"
          className="inline-block px-8 py-3.5 rounded-lg bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-colors shadow-md hover:-translate-y-0.5 transform duration-200"
        >
          Meet Our Team
        </Link>
      </motion.div>
    </section>
  );
};

export default JoinUsCTA;
