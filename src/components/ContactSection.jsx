import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaHardHat,
  FaBuilding,
  FaDirections,
  FaCompass,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BiSend } from "react-icons/bi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    service: "",
    message: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Social media data
  const socialMedia = [
    {
      icon: FaFacebookF,
      color: "text-[#2387C0]",
      hoverBg: "hover:bg-[#2387C0]",
      href: "#",
    },
    {
      icon: FaTwitter,
      color: "text-[#2387C0]",
      hoverBg: "hover:bg-[#2387C0]",
      href: "#",
    },
    {
      icon: FaLinkedinIn,
      color: "text-[#2387C0]",
      hoverBg: "hover:bg-[#2387C0]",
      href: "#",
    },
  ];

  // Updated Map coordinates for Yanbu Industrial City with precise location
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118758.394278091!2d38.14855969999999!3d23.9943997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e79f9f374c59a7%3A0x6fd64387b3c6c2f6!2sYanbu%20Industrial%20City!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa`;

  const handleGetDirections = () => {
    window.open(
      "https://maps.google.com/?q=Yanbu+Industrial+City,Saudi+Arabia",
      "_blank"
    );
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Construction Elements */}
      <motion.div
        className="absolute top-10 left-10 opacity-5"
        variants={floatingVariants}
        animate="animate"
      >
        <FaHardHat className="text-6xl text-[#00a2ff]" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 opacity-5"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1.5s" }}
      >
        <FaBuilding className="text-8xl text-[#00a2ff]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Let's Build <span className="text-[#2387C0]">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with our
            expert team for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Get in Touch */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
              >
                <div className="w-2 h-8 bg-[#2387C0] rounded-full"></div>
                Get in Touch
              </motion.h3>

              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-blue-50 rounded-xl border border-blue-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#2387C0] rounded-lg flex-shrink-0">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-600 text-sm">Email</p>
                      <p className="text-gray-900 font-semibold text-sm lg:text-base break-all">
                        info@edwanicontracting.com
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-blue-50 rounded-xl border border-blue-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#2387C0] rounded-lg flex-shrink-0">
                      {/* Rotated Phone Icon */}
                      <FaPhone className="text-white text-xl transform rotate-90" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-600 text-sm">Phone</p>
                      <p className="text-gray-900 font-semibold text-sm lg:text-base">
                        050-4393166
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Our Office */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
              >
                <div className="w-2 h-8 bg-[#2387C0] rounded-full"></div>
                Our Office
              </motion.h3>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2387C0] rounded-lg mt-1 flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-900 font-semibold mb-2">
                      Headquarters
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Yanbu Industrial City
                      <br />
                      P.O. Box 31182, Yanbu 41912
                      <br />
                      Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>

                <motion.button
                  onClick={handleGetDirections}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#2387C0] to-[#186a99] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <FaDirections className="text-sm" />
                  Get Directions
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Connect With Us */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
              >
                <div className="w-2 h-8 bg-[#2387C0] rounded-full"></div>
                Connect With Us
              </motion.h3>

              <motion.div
                variants={itemVariants}
                className="flex gap-3 sm:gap-4"
              >
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 sm:p-4 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 flex-shrink-0 group ${social.hoverBg} hover:shadow-xl`}
                  >
                    <social.icon
                      className={`text-lg sm:text-xl ${social.color} group-hover:text-white transition-colors duration-300`}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
              >
                Start Your Project
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8"
              >
                Fill out the form below and our construction experts will get
                back to you within 24 hours.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: IoPerson,
                      placeholder: "Your Name",
                      name: "name",
                      type: "text",
                    },
                    {
                      icon: FaPhone,
                      placeholder: "Phone Number",
                      name: "phone",
                      type: "tel",
                    },
                    {
                      icon: FaEnvelope,
                      placeholder: "Business Email",
                      name: "email",
                      type: "email",
                    },
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <field.icon
                          className={`text-[#2387C0] text-lg sm:text-xl ${
                            field.name === "phone" ? "transform rotate-90" : ""
                          }`}
                        />
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2387C0] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        required
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: HiCurrencyDollar,
                      name: "budget",
                      options: [
                        "Select Budget",
                        "Below $10,000",
                        "$10,000 - $50,000",
                        "$50,000+",
                      ],
                    },
                    {
                      icon: MdBusinessCenter,
                      name: "service",
                      options: [
                        "Service you are interested in",
                        "Construction",
                        "Road Projects",
                        "Equipment Services",
                        "Consulting",
                      ],
                    },
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <field.icon className="text-[#2387C0] text-lg sm:text-xl" />
                      </div>
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2387C0] focus:border-transparent appearance-none transition-all duration-300 text-sm sm:text-base"
                        required
                      >
                        {field.options.map((option, idx) => (
                          <option key={idx} value={option} disabled={idx === 0}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  ))}
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute left-4 top-4">
                    <FaEnvelope className="text-[#2387C0] text-lg sm:text-xl" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    rows="5"
                    className="w-full pl-11 sm:pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2387C0] focus:border-transparent resize-none transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </motion.div>

                {/* Checkbox + Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 pt-4"
                >
                  <label className="flex items-start gap-3 text-gray-600 cursor-pointer max-w-full">
                    <motion.input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleInputChange}
                      className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-[#2387C0] text-[#2387C0] cursor-pointer flex-shrink-0"
                      whileTap={{ scale: 0.9 }}
                      required
                    />
                    <span className="text-xs sm:text-sm break-words">
                      I agree with{" "}
                      <a
                        href="#"
                        className="text-[#2387C0] hover:underline font-semibold"
                      >
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-[#2387C0] hover:underline font-semibold"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !formData.agree}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2387C0] to-[#1d83be] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-3 min-w-[140px] sm:min-w-[160px] justify-center text-sm sm:text-base"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                        />
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2"
                        >
                          Send Message <BiSend className="text-lg sm:text-xl" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </form>
            </div>

            {/* Big Beautiful Map Section - After Form */}
            <motion.div
              variants={mapVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 lg:mt-12"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Map Header */}
                <div className="bg-gradient-to-r from-[#2387C0] to-[#1a6a9c] px-6 sm:px-8 py-4 text-white">
                  <div className="flex items-center gap-3">
                    <FaCompass className="text-xl sm:text-2xl" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">
                        Find Us Here
                      </h3>
                      <p className="text-blue-100 text-sm sm:text-base">
                        Visit our headquarters in Yanbu Industrial City
                      </p>
                    </div>
                  </div>
                </div>

                {/* Big Map Container */}
                <div className="relative">
                  {!mapLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-[#2387C0] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600 font-medium">
                          Loading map...
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="h-96 sm:h-[500px] lg:h-[600px] w-full">
                    <iframe
                      src={mapUrl}
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        filter: "grayscale(5%) contrast(98%) saturate(105%)",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      onLoad={() => setMapLoaded(true)}
                      title="Edwani Contracting Establishment Headquarters - Yanbu Industrial City, Saudi Arabia"
                      className="transition-all duration-700"
                    />
                  </div>

                  {/* Map Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-4 sm:w-80">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#2387C0] rounded-lg flex-shrink-0 mt-1">
                          <FaMapMarkerAlt className="text-white text-base" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                            Edwani Contracting
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Yanbu Industrial City
                            <br />
                            P.O. Box 31182, Yanbu 41912
                            <br />
                            Kingdom of Saudi Arabia
                          </p>
                        </div>
                      </div>

                      <motion.button
                        onClick={handleGetDirections}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-[#2387C0] to-[#186a99] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                      >
                        <FaDirections className="text-sm" />
                        Get Directions on Google Maps
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Additional Location Info */}
                <div className="px-6 sm:px-8 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-[#2387C0] rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaBuilding className="text-white text-sm" />
                      </div>
                      <p className="text-gray-900 font-semibold text-sm">
                        Headquarters
                      </p>
                      <p className="text-gray-600 text-xs">
                        Yanbu Industrial City
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-[#2387C0] rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaMapMarkerAlt className="text-white text-sm" />
                      </div>
                      <p className="text-gray-900 font-semibold text-sm">
                        P.O. Box
                      </p>
                      <p className="text-gray-600 text-xs">31182</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-[#2387C0] rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaCompass className="text-white text-sm" />
                      </div>
                      <p className="text-gray-900 font-semibold text-sm">
                        Location
                      </p>
                      <p className="text-gray-600 text-xs">Yanbu, KSA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
