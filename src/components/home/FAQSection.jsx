import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// FAQ DATA
const FAQS = [
  {
    question: "What is sustainability?",
    answer:
      "Sustainability refers to meeting our own needs without compromising the ability of future generations to meet their own needs. It encompasses environmental, social, and economic dimensions.",
  },
  {
    question: "Why is sustainability important?",
    answer:
      "Sustainability is crucial for preserving natural resources, protecting ecosystems, and ensuring a high quality of life for future generations. It helps mitigate climate change, reduce pollution, and promote social equity.",
  },
  {
    question:
      "How can my business benefit from adopting sustainable practices?",
    answer:
      "Adopting sustainable practices can lead to cost savings, improved brand reputation, compliance with regulations, increased customer loyalty, and a positive impact on the environment and community.",
  },
  {
    question: "What is ESG?",
    answer:
      "ESG stands for Environmental, Social, and Governance. It encompasses criteria used to evaluate a company’s environmental impact, social responsibilities, and governance quality.",
  },
    {
    question: "How can a nation benefit from adopting sustainability?",
    answer:  "ESG stands for Environmental, Social, and Governance. It encompasses criteria used to evaluate a company’s environmental impact, social responsibilities, and governance quality.",

  },
  {
    question:"How can an Individual benefit from Embracing sustainability?",
    answer:"An individual benefits from embracing sustainability through better health, lower living costs, responsible consumption, and a safer, more secure future."
  }
];

// Individual FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span
          className={`text-lg font-bold transition-colors ${
            isOpen ? "text-black" : "text-gray-800 group-hover:text-teal-600"
          }`}
        >
          {question}
        </span>
        <span
          className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "bg-black border-black text-white"
              : "bg-white border-gray-300 text-gray-500 group-hover:border-teal-600 group-hover:text-teal-600"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 pb-6 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* LEFT COLUMN: Title */}
          {/* FIX: 'sticky' is now on this outer div, NOT on the motion.h2 */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-black leading-tight"
              >
                Frequently <br />
                Asked Questions
              </motion.h2>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion List */}
          <div className="lg:col-span-8">
            <div className="bg-white">
              {FAQS.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM CARD: "Still Need Help?"
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-[30px] p-8 md:p-12 text-center relative overflow-hidden max-w-4xl mx-auto"
        >
          {/* Avatar Stack */}
          {/* NEW CODE: Icons Stack */}
          <div className="flex justify-center -space-x-4 mb-6">
            {/* Icon 1: Phone */}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-teal-100 flex items-center justify-center text-teal-600 z-10">
              <Phone size={20} />
            </div>
            {/* Icon 2: Mail */}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-teal-100 flex items-center justify-center text-teal-600 z-20">
              <Mail size={20} />
            </div>
            {/* Icon 3: Chat */}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-teal-100 flex items-center justify-center text-teal-600 z-30">
              <MessageCircle size={20} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still Need Help?
          </h3>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Can't find the answer you're looking for? Our sustainability experts
            are here to assist you.
          </p>

          <Link
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-[#0d9488] text-white font-bold shadow-lg hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
