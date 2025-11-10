import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaRoad, FaTruck, FaBoxes } from "react-icons/fa";

const SpecializationSection = () => {
  const specializations = [
    {
      icon: <FaBuilding className="text-xl sm:text-lg" />,
      title: "Building Construction",
      description: "Commercial and residential construction projects",
    },
    {
      icon: <FaRoad className="text-xl sm:text-lg" />,
      title: "Road Projects",
      description: "Highway and infrastructure development",
    },
    {
      icon: <FaTruck className="text-xl sm:text-lg" />,
      title: "Heavy Equipment",
      description: "Modern machinery and equipment services",
    },
    {
      icon: <FaBoxes className="text-xl sm:text-lg" />,
      title: "Material Supply",
      description: "Premium construction materials sourcing",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(35,135,192,0.02)_50%,rgba(35,135,192,0.02)_51%,transparent_52%)] bg-[length:20px_20px]"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Main container with optimized layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 w-full">
          {/* ==== OPTIMIZED TEXT SECTION ==== */}
          <motion.div
            className="flex flex-col items-center lg:items-start justify-center space-y-6 lg:space-y-8 w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Optimized Section Header - SAME STYLE AS VISION & VALUES */}
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
                  Our Expertise
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="relative inline-block">
                  Specialized Services
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

            {/* Optimized Content */}
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
                  stands as a premier provider in the construction industry,
                  delivering excellence across multiple specialized domains.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                  Our commitment to superior quality drives every project,
                  supported by cutting-edge quality management systems and a
                  team of industry-leading experts.
                </p>
              </div>
            </motion.div>

            {/* ==== UPDATED SPECIALIZATION POINTS - MOBILE LIKE CULTUREHIGHLIGHTS, DESKTOP SAME ==== */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Mobile Layout - Grid like cultureHighlights */}
              <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {specializations.map((item, index) => (
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
                        {item.icon}
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
                {specializations.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-3 lg:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-[#2387C0]/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-[#2387C0] to-[#1c7ab0] rounded-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <div className="text-white text-base lg:text-lg">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1 group-hover:text-[#2387C0] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-gray-600 font-normal leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2387C0] to-blue-400 group-hover:w-full transition-all duration-400"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ==== OPTIMIZED IMAGE SECTION ==== */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Main Image Container with Optimized Styling */}
              <motion.div
                className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl group"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2387C0] via-blue-400 to-blue-600 opacity-15 group-hover:opacity-25 transition-opacity duration-400 rounded-2xl lg:rounded-3xl -m-0.5"></div>

                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img
                    src="/about4.png"
                    alt="Construction Specialization - Al Edwani Establishment"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Optimized Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-400"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800"></div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -left-4 bottom-12 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-gray-200/60"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-[#2387C0]">30+</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Years Experience
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpecializationSection;
