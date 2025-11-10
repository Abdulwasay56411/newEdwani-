import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Achievements = () => {
  // Premium animations with refined easing
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const numberVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const stats = [
    {
      number: 12,
      suffix: "+",
      label: "Years of Excellence",
      description: "Trusted since 2012",
    },
    {
      number: 24,
      suffix: "+",
      label: "Expert Field Team",
      description: "Skilled professionals",
    },
    {
      number: 250,
      suffix: "+",
      label: "Successful Projects",
      description: "Client satisfaction",
    },
    {
      number: 18,
      suffix: "+",
      label: "Office Specialists",
      description: "Dedicated support",
    },
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-br from-white via-blue-50/30 to-sky-100/20 w-full 
                 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-24 overflow-hidden
                  "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-transparent pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(35,135,192,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(35,135,192,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] opacity-50" />

      <motion.div
        className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24"
        variants={staggerContainer}
      >
        {/* === LEFT TEXT SECTION - RESPONSIVE === */}
        <motion.div
          className="w-full lg:flex-1 max-w-2xl text-center lg:text-left px-4 sm:px-0"
          variants={fadeUp}
        >
          {/* Premium Section Header */}
          <motion.div className="space-y-4 md:space-y-6" variants={fadeUp}>
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#2387C0] to-sky-400" />
              <motion.span
                className="text-[#2387C0] text-xs md:text-sm font-semibold tracking-widest uppercase
                           bg-blue-50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-100/50"
                variants={fadeUp}
              >
                Our Legacy
              </motion.span>
            </div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] md:leading-[1.15]
                         bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
              variants={fadeUp}
            >
              Building Excellence,{" "}
              <span className="bg-gradient-to-r from-[#2387C0] to-sky-600 bg-clip-text text-transparent block lg:inline">
                Delivering Results
              </span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-light mt-4 md:mt-6
                         max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              variants={fadeUp}
            >
              With over a decade of unwavering commitment to quality and
              innovation, we've established ourselves as the premier choice for
              construction excellence in the region.
            </motion.p>
          </motion.div>

          {/* Trust Indicators - Responsive */}
          <motion.div
            className="flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-12 justify-center lg:justify-start"
            variants={fadeUp}
          >
            {[
              "ISO Certified",
              "Award Winning",
              "Client Focused",
              "Quality Driven",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-medium"
                whileHover={{ scale: 1.05, color: "#2387C0" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-1.5 h-1.5 bg-[#2387C0] rounded-full flex-shrink-0" />
                <span className="whitespace-nowrap">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* === RIGHT STATS SECTION - RESPONSIVE GRID === */}
        <motion.div
          className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 
                     gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-12
                     max-w-2xl lg:max-w-none mx-auto lg:mx-0"
          variants={staggerContainer}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl 
                         p-4 sm:p-6 md:p-8 
                         shadow-lg hover:shadow-xl lg:hover:shadow-2xl border border-white/80
                         hover:border-blue-200/50 transition-all duration-300
                         hover:scale-105 lg:hover:-translate-y-2"
              variants={fadeUp}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#2387C0] to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-[1px] rounded-2xl md:rounded-3xl bg-white/80" />
              </div>

              <div className="relative z-10 text-center">
                {/* Animated Number - Responsive Sizing */}
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3"
                  variants={numberVariant}
                >
                  <span className="bg-gradient-to-br from-[#2387C0] to-sky-600 bg-clip-text text-transparent">
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2.5}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                      scrollSpyDelay={index * 100}
                    />
                  </span>
                </motion.div>

                {/* Label - Responsive Typography */}
                <motion.h3
                  className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg lg:text-xl 
                             mb-1 md:mb-2 tracking-tight
                             group-hover:text-[#2387C0] transition-colors duration-300
                             line-clamp-2"
                  variants={fadeUp}
                >
                  {item.label}
                </motion.h3>

                {/* Description - Responsive */}
                <motion.p
                  className="text-gray-500 text-xs sm:text-sm md:text-base font-light leading-relaxed
                             group-hover:text-gray-600 transition-colors duration-300
                             line-clamp-2"
                  variants={fadeUp}
                >
                  {item.description}
                </motion.p>

                {/* Progress Bar Indicator */}
                <motion.div
                  className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#2387C0] to-sky-400 
                             rounded-full mx-auto mt-2 md:mt-4
                             opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                />
              </div>

              {/* Floating Particles - Hidden on mobile */}
              <div className="hidden sm:block absolute top-2 right-2 w-1.5 h-1.5 bg-[#2387C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              <div className="hidden sm:block absolute bottom-2 left-2 w-1 h-1 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-gradient-to-t from-white/80 via-white/50 to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default Achievements;
