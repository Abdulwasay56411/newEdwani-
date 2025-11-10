import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaMapMarkerAlt,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const Section2 = () => {
  const achievements = [
    { icon: FaAward, text: "Since 1990", subtext: "Trusted Legacy" },
    { icon: FaMapMarkerAlt, text: "Nationwide", subtext: "Projects" },
    { icon: FaUsers, text: "Expert", subtext: "Team" },
    { icon: FaCheckCircle, text: "Quality", subtext: "Certified" },
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(35,135,192,0.02)_50%,rgba(35,135,192,0.02)_51%,transparent_52%)] bg-[size:25px_25px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* ==== ENHANCED IMAGE SECTION ==== */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-2xl h-[400px] sm:h-[500px] lg:h-[550px]">
              {/* Main Image Container */}
              <motion.div
                className="absolute left-0 top-0 w-3/4 h-4/5 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2387C0] to-blue-400 opacity-15 group-hover:opacity-25 transition-opacity duration-500 rounded-2xl lg:rounded-3xl -m-0.5"></div>

                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img
                    src="/image-about.png"
                    alt="Al-Edwani Establishment construction project"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </motion.div>

              {/* Secondary Image */}
              <motion.div
                className="absolute right-0 top-1/4 w-2/5 h-3/5 rounded-xl lg:rounded-2xl overflow-hidden shadow-xl border-4 border-white group"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src="/newabout3.jpg"
                  alt="Al-Edwani Establishment construction site"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-trans"></div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -left-4 top-8 bg-[#2387C0]  text-white px-4 py-3 rounded-xl shadow-2xl hidden lg:block"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <FaAward className="text-white text-sm" />
                  <div className="text-center">
                    <div className="text-sm font-bold">Since 1990</div>
                    <div className="text-xs opacity-90">Trusted Legacy</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div className="" />
            </div>
          </motion.div>

          {/* ==== ENHANCED CONTENT SECTION ==== */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Header Section */}
            <motion.div
              className="w-full space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full">
                <div className="w-1.5 h-1.5 bg-[#2387C0] rounded-full"></div>
                <span className="text-xs font-semibold text-[#2387C0] uppercase tracking-wide">
                  About Our Legacy
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="relative inline-block">
                  Edwani Contracting
                </span>
                <br />
              </h2>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="w-full space-y-4 lg:space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-normal">
                <span className="font-semibold text-gray-900">
                  Mohaisin Ibrahim Taama Edwani Contracting
                </span>{" "}
                has been the premier choice for construction, road projects, and
                equipment Services in the Kingdom of Saudi Arabia since 1990.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                Our diverse portfolio encompasses comprehensive building & road
                construction projects and transportation services. With
                operations spanning dozens of locations across Saudi Arabia, we
                bring unparalleled expertise to even the most challenging and
                remote projects.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                Our success stems from an unmatched combination of industry
                knowledge, technical skill, decades of experience, and
                unwavering commitment to client satisfaction.
              </p>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 w-full mt-4 lg:mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group relative p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-[#2387C0]/30 transition-all duration-300 hover:shadow-lg text-center"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-2 bg-gradient-to-br from-[#2387C0] to-[#1880bc] rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="text-white text-base" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {achievement.text}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {achievement.subtext}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Signature Section */}
            <motion.div
              className="flex flex-col items-center lg:items-start gap-2 w-full mt-6 lg:mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <span className="text-base sm:text-lg font-bold text-gray-900 text-center lg:text-left">
                Mohaisin Ibrahim Taama Edwani
              </span>
              <span className="text-sm sm:text-base text-gray-600 font-medium text-center lg:text-left">
                General Manager
              </span>
              <div className="w-16 h-0.5 bg-[#2387C0] rounded-full mt-1"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
