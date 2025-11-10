import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const features = [
    {
      id: "01",
      title: "Decades of Expertise",
      desc: "Delivering reliable construction and road projects across the Kingdom since 1990 with unparalleled excellence and precision.",
      icon: "🏗️",
    },
    {
      id: "02",
      title: "Quality & Safety First",
      desc: "Committed to international standards with skilled manpower and robust safety practices ensuring zero compromise on quality.",
      icon: "🛡️",
    },
    {
      id: "03",
      title: "Services",
      desc: "End-to-end solutions from buildings and roads to equipment, materials, and agricultural facilitation under one unified platform.",
      icon: "🔧",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-[#2387C0]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#2387C0]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2387C0]/10 rounded-full mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2387C0] rounded-full" />
            <span className="text-xs sm:text-sm font-semibold text-[#2387C0] uppercase tracking-wide">
              Excellence in Construction
            </span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Why Choose{" "}
            <span className="text-[#2387C0] block sm:inline">
              Edwani Contracting
            </span>
          </motion.h1>

          <motion.div
            className="max-w-2xl sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light px-2 sm:px-0">
              Three decades of construction excellence delivering{" "}
              <span className="font-semibold text-[#2387C0]">
                quality, safety, and comprehensive solutions
              </span>{" "}
              across Saudi Arabia
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Enhanced Image Section */}
          <motion.div
            className="flex-1 w-full max-w-2xl order-2 xl:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
              {/* Main Image */}
              <motion.div
                className="absolute top-0 right-0 w-full sm:w-4/5 h-4/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="/abdulwasay.png"
                  alt="Main construction project by Edwani Contracting"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.div>

              {/* Top Right Image */}
              <motion.div
                className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 w-1/4 h-1/4 sm:w-1/3 sm:h-1/3 z-10 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group border border-white/30 sm:border-2 sm:border-white/50"
                initial={{ opacity: 0, scale: 0.8, x: 15 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <img
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="/talha.png"
                  alt="Construction detail and precision work"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2387C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                className="absolute bottom-4 left-2 sm:bottom-6 sm:left-4 md:bottom-8 md:left-4 w-1/3 h-1/3 sm:w-2/5 sm:h-2/5 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group border border-white/30 sm:border-2 sm:border-white/50"
                initial={{ opacity: 0, scale: 0.8, x: -15 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <img
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="/wasiq.png"
                  alt="Modern equipment and machinery"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2387C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className="flex-1 w-full max-w-2xl order-1 xl:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-lg hover:shadow-xl sm:hover:shadow-2xl border border-gray-200/50 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2387C0]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#2387C0] to-[#2387C0] flex items-center justify-center rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 sm:group-hover:scale-110">
                          <span className="text-lg sm:text-xl lg:text-2xl">
                            {feature.icon}
                          </span>
                        </div>
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-white rounded-full p-1 sm:p-2 shadow-md sm:shadow-lg border border-[#2387C0]/20">
                          <span className="text-xs font-bold text-[#2387C0]">
                            {feature.id}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2387C0] mb-2 sm:mb-3 transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                        {feature.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#2387C0]/0 via-[#2387C0]/20 to-[#2387C0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => navigate("/project")}
                className="group relative overflow-hidden bg-[#2387C0] hover:bg-[#1a6ea8] text-white font-semibold text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl shadow-lg min-w-[160px] sm:min-w-[200px]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  Explore Our Projects
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
