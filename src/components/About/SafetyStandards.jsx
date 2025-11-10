import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaHardHat,
  FaUserCheck,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaAward,
} from "react-icons/fa";

const SafetyStandards = () => {
  const safetyFeatures = [
    {
      icon: FaHardHat,
      title: "PPE Compliance",
      description: "100% personal protective equipment adherence",
    },
    {
      icon: FaUserCheck,
      title: "Trained Personnel",
      description: "Certified safety-trained workforce",
    },
    {
      icon: FaClipboardCheck,
      title: "Regular Audits",
      description: "Comprehensive safety inspections",
    },
    {
      icon: FaExclamationTriangle,
      title: "Risk Management",
      description: "Proactive hazard identification",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20">
      {/* Safety Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_48%,rgba(35,135,192,0.02)_49%,rgba(35,135,192,0.02)_51%,transparent_52%)] bg-[size:30px_30px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 xl:gap-16 w-full">
          {/* ==== ENHANCED TEXT SECTION ==== */}
          <motion.div
            className="flex flex-col items-center lg:items-start justify-center space-y-6 lg:space-y-8 w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <motion.div
              className="w-full space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full">
                <div className="w-1.5 h-1.5 bg-[#2387C0] rounded-full"></div>
                <span className="text-xs font-semibold text-[#2387C0] uppercase tracking-wide">
                  Safety First
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="relative inline-block">
                  Safety Standards
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#2387C0] to-blue-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* Safety Content */}
            <motion.div
              className="w-full space-y-4 lg:space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-3">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-normal">
                  <span className="font-semibold text-gray-900">
                    Mohaisin Ibrahim Taama Edwani Contracting
                  </span>{" "}
                  maintains the highest safety standards across all construction
                  operations, ensuring zero-compromise protection for our team,
                  clients, and the environment.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                  Our comprehensive safety protocols and continuous training
                  programs ensure that every project meets international safety
                  regulations while maintaining exceptional quality and
                  efficiency.
                </p>
              </div>
            </motion.div>

            {/* ==== UPDATED SAFETY FEATURES - STYLED LIKE SPECIALIZATION SECTION ==== */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Mobile Layout - Grid like SpecializationSection */}
              <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {safetyFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 sm:p-5 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:bg-[#2387C0] hover:text-white transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 shadow-md hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2387C0] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <div className="text-white group-hover:text-[#2387C0]">
                        <item.icon className="text-xl sm:text-lg" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Layout - Original Design */}
              <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 w-full">
                {safetyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-3 lg:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-[#2387C0]/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-[#2387C0] to-[#1970a2] rounded-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <feature.icon className="text-white text-base lg:text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1 group-hover:text-[#2387C0] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-gray-600 font-normal leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2387C0] to-blue-400 group-hover:w-full transition-all duration-400"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Safety Certifications */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 w-full mt-6 lg:mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <FaAward className="text-[#2387C0] text-xl" />
                <span className="text-sm font-semibold text-[#2387C0]">
                  Certified:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-blue-200">
                  OSHA Compliant
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-blue-200">
                  ISO 45001
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-blue-200">
                  Local Regulations
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ==== ENHANCED IMAGE SECTION ==== */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Main Image Container */}
              <motion.div
                className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl group"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Brand Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2387C0] to-blue-400 opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl lg:rounded-3xl -m-0.5"></div>

                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img
                    src="/about9.png"
                    alt="Safety Standards - Al Edwani Establishment"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Brand Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Brand Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </motion.div>

              {/* Safety Shield Badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-[#2387C0]  text-white p-3 rounded-xl shadow-lg"
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <FaShieldAlt className="text-lg" />
              </motion.div>

              {/* Safety Stats */}
              <motion.div
                className="absolute -left-4 bottom-12 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-blue-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-[#2387C0]">99.8%</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Safety Record
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Safety Commitment Banner */}
        <motion.div
          className="w-full mt-12 lg:mt-16 p-6 lg:p-8 bg-gradient-to-r from-[#2387C0] to-[#1c76aa] rounded-2xl lg:rounded-3xl text-white text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg lg:text-xl font-bold mb-2">
            Our Safety Commitment
          </h3>
          <p className="text-sm lg:text-base font-light opacity-90 max-w-4xl mx-auto">
            Every worker returns home safely. Every project completes without
            incident. This is our unwavering commitment to safety excellence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SafetyStandards;
