import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'
  const [errors, setErrors] = useState({}); // Stores validation errors

  // --- Validation Logic ---
  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);

    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const mobile = formData.get("mobile_number");
    const message = formData.get("message");

    // 1. Name Validation
    if (!name || !name.trim()) {
      newErrors.user_name = "Name is required";
    }

    // 2. Mobile Validation (Regex: Allows +, -, space, and 10-15 digits)
    const mobileRegex =
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (!mobile || !mobile.trim()) {
      newErrors.mobile_number = "Mobile number is required";
    } else if (!mobileRegex.test(mobile)) {
      newErrors.mobile_number =
        "Please enter a valid mobile number (10 digits)";
    }

    // 3. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.user_email = "Please enter a valid email address";
    }

    // 4. Message Validation
    if (!message || !message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 🛑 Run Validation First
    if (!validateForm()) {
      return; // Stop if there are errors
    }

    setStatus("sending");

    // ⚠️ CONFIGURATION: Replace with your actual keys
    const serviceID = "service_ujnf6tj";
    const templateID = "template_qatq2w5";
    const publicKey = "a5LSTc9tNeTpz9JwQ";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setStatus("success");
        setErrors({}); // Clear errors
        e.target.reset(); // Clear form
      },
      (error) => {
        console.log(error.text);
        setStatus("error"); // Show backup message
      },
    );
  };

  return (
    <div
      className="font-sans bg-gray-50 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      {/* ==========================
          HEADER
      ========================== */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed"
        >
          Have a question about our programs? Reach out via email, visit our
          campus, or send us a message directly below.
        </motion.p>
      </div>

      {/* ==========================
          MAIN CARD
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
      >
        {/* ---------------------------
            LEFT SIDE: Teal Background + Info
        --------------------------- */}
        <div className="w-full lg:w-2/5 bg-teal-700 relative overflow-hidden flex flex-col justify-center p-8 md:p-12">
          {/* Decorative Background Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

          {/* Content Container (z-10 to stay above the blur) */}
          <div className="relative z-10 space-y-10">
            {/* Email (Updated with 2 IDs) */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-teal-600 border border-teal-500/30 flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-teal-900/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:joseph.martin@cusat.ac.in"
                    className="text-teal-100 font-medium hover:text-white underline decoration-teal-400 underline-offset-4 transition-colors"
                  >
                    joseph.martin@cusat.ac.in
                  </a>
                  <a
                    href="mailto:sneha.jose@cusat.ac.in"
                    className="text-teal-100 font-medium hover:text-white underline decoration-teal-400 underline-offset-4 transition-colors"
                  >
                    sneha.jose@cusat.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-teal-600 border border-teal-500/30 flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-teal-900/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                <p className="text-teal-100 leading-relaxed">
                  GCCOSS, 3rd Floor,
                  <br />
                  Student Amenity Centre,
                  <br />
                  CUSAT, Kochi, Kerala 682022
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------
            RIGHT SIDE: The Form
        --------------------------- */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 bg-white flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-500 mt-1">
              Have a question, proposal, collaboration, or job enquiry in mind?{" "}
              <br />
              Reach out to us to explore opportunities across research, policy,
              training, strategy, consulting, advisory support, and careers in
              sustainability
            </p>
          </div>

          {/* 1. SUCCESS MESSAGE */}
          {status === "success" && (
            <div className="bg-green-50 border border-green-100 text-green-800 p-6 rounded-2xl flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg">Message Sent!</h4>
              <p className="text-green-700 mt-1 mb-4 text-sm">
                Thank you for reaching out. We have received your details.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm font-semibold text-green-700 hover:text-green-900 underline"
              >
                Send another message
              </button>
            </div>
          )}

          {/* 2. ERROR / FAIL SAFE */}
          {status === "error" && (
            <div className="bg-amber-50 border border-amber-100 text-amber-900 p-6 rounded-2xl flex items-start gap-4 mb-6 animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold">System Busy</h4>
                <p className="text-sm mt-1 mb-2">
                  Our contact form is temporarily unavailable.
                </p>
                <p className="font-semibold text-sm">
                  Please email us directly:
                </p>
                <a
                  href="mailto:joseph.martin@cusat.ac.in"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-white border border-amber-200 rounded-lg text-teal-700 font-bold hover:bg-amber-50 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  joseph.martin@cusat.ac.in
                </a>
              </div>
            </div>
          )}

          {/* 3. THE FORM */}
          {status !== "success" && (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border focus:ring-4 outline-none transition-all 
                      ${errors.user_name ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"}`}
                  />
                  {errors.user_name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.user_name}
                    </p>
                  )}
                </div>

                {/* Mobile */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile_number"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border focus:ring-4 outline-none transition-all 
                      ${errors.mobile_number ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"}`}
                  />
                  {errors.mobile_number && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mobile_number}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 border focus:ring-4 outline-none transition-all 
                    ${errors.user_email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"}`}
                />
                {errors.user_email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.user_email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 border focus:ring-4 outline-none transition-all resize-none 
                    ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-teal-500 focus:ring-teal-500/10"}`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-teal-600/20 transform hover:-translate-y-1"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
