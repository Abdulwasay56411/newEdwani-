import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  // Premium animations with refined easing
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariant = (delay) => ({
    hidden: { opacity: 0, y: 80, scale: 0.88, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.1,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="relative flex flex-col xl:flex-row items-center justify-between 
                 gap-12 md:gap-16 xl:gap-24  md:py-24 px-4 sm:px-6 xl:px-24 overflow-hidden
                 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* === LEFT IMAGE SECTION === */}
      <motion.div
        className="hidden xl:flex relative w-[520px] h-[620px]"
        variants={staggerContainer}
      >
        {/* Main Center Image - Premium Card */}
        <motion.div
          variants={imageVariant(0.1)}
          className="absolute top-0 left-1/2 -translate-x-1/2 
                     w-[74%] h-[48%] z-30 group"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-700/10 rounded-3xl" />
            <img
              src="/aboutimage1.jpg"
              alt="Edwani contracting Construction Excellence - Premium Projects Showcase"
              className="w-full h-full rounded-3xl object-cover 
                         shadow-2xl border-[5px] border-white/95
                         group-hover:shadow-3xl group-hover:scale-[1.02]
                         transition-all duration-700 ease-out
                         grayscale-0 hover:grayscale-0"
            />
            <div className="absolute inset-0 rounded-3xl border border-white/40" />
          </div>
        </motion.div>

        {/* Left Secondary Image - Elevated Design */}
        <motion.div
          variants={imageVariant(0.3)}
          className="absolute bottom-[12%] left-0 w-[58%] h-[42%] z-20 group"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/5 to-blue-600/8 rounded-3xl" />
            <img
              src="/aboutimage2.jpg"
              alt="Edwani contracting Heavy Equipment & Machinery Services"
              className="w-full h-full rounded-3xl object-cover 
                         shadow-xl border-[4px] border-white/90
                         group-hover:shadow-2xl group-hover:scale-[1.015]
                         transition-all duration-600 ease-out
                         grayscale-10 hover:grayscale-0"
            />
            <div className="absolute inset-0 rounded-3xl border border-white/30" />
          </div>
        </motion.div>

        {/* Right Secondary Image - Professional Finish */}
        <motion.div
          variants={imageVariant(0.5)}
          className="absolute bottom-0 right-0 w-[54%] h-[38%] z-10 group"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-bl from-sky-500/5 to-blue-700/8 rounded-3xl" />
            <img
              src="/aboutimage3.jpg"
              alt="Edwani Contracting Infrastructure & Road Construction Expertise"
              className="w-full h-full rounded-3xl object-cover 
                         shadow-xl border-[4px] border-white/90
                         group-hover:shadow-2xl group-hover:scale-[1.015]
                         transition-all duration-600 ease-out
                         grayscale-10 hover:grayscale-0"
            />
            <div className="absolute inset-0 rounded-3xl border border-white/30" />
          </div>
        </motion.div>
      </motion.div>

      {/* === RIGHT CONTENT SECTION === */}
      <motion.div
        className="w-full xl:w-1/2 flex flex-col justify-center items-start text-left space-y-6 md:space-y-8"
        variants={staggerContainer}
      >
        {/* Premium Section Header */}
        <motion.div className="space-y-4 w-full" variants={fadeUp}>
          <div className="flex items-center gap-3 justify-center xl:justify-start">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#2387C0] to-sky-400" />
            <motion.span
              className="text-[#2387C0] text-sm md:text-base font-semibold tracking-widest uppercase
                         bg-blue-50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-100"
              variants={fadeUp}
            >
              About Our Legacy
            </motion.span>
          </div>

          <motion.h2
            className="text-[#2387C0] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.15]
                       bg-gradient-to-br from-[#2387C0] to-sky-600 bg-clip-text text-transparent text-center xl:text-left w-full"
            variants={fadeUp}
          >
            Edwani Contracting
          </motion.h2>
        </motion.div>
        {/* Premium Content Blocks */}
        <motion.div className="space-y-6 md:space-y-8 w-full" variants={fadeUp}>
          <div className="relative">
            <div className="absolute -left-4 md:-left-6 top-0 w-1 h-full bg-gradient-to-b from-[#2387C0] to-sky-400 rounded-full" />
            <p className="text-gray-800 text-base md:text-lg leading-7 md:leading-9 font-medium pl-4 md:pl-4">
              <strong className="font-bold text-gray-900">
                Mohaisin Ibrahim Taama Edwani Contracting
              </strong>{" "}
              has been the{" "}
              <span className="text-[#2387C0] font-semibold">
                premier choice
              </span>{" "}
              for construction, Road Projects & Equipment Services in the
              Kingdom of Saudi Arabia since 1990.
            </p>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-7 md:leading-8 font-light italic border-t border-blue-100/50 pt-4 md:pt-6">
            "Regardless of project complexity or geographical challenges, Edwani
            contracting Establishment delivers exceptional results through our
            unique combination of technical knowledge, skilled workforce,
            extensive experience and unwavering commitment to client
            satisfaction."
          </p>
        </motion.div>

        {/* Premium CTA Button - Fixed Color */}
        <motion.button
          variants={fadeUp}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(35, 135, 192, 0.25)",
            backgroundColor: "#2387C0",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="mt-4 md:mt-6 w-full sm:w-64 h-14 md:h-16 bg-[#2387C0]
                     rounded-xl shadow-2xl flex justify-center items-center gap-3
                     group relative overflow-hidden mx-auto xl:mx-0"
        >
          {/* Shine effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                         -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] 
                         transition-transform duration-1000 "
          />

          <span
            onClick={() => navigate("/project")}
            className="text-white text-base md:text-lg font-semibold tracking-wide relative z-10 flex items-center gap-2"
          >
            Explore Our Work
            <motion.span
              className="text-white text-base md:text-lg font-bold relative z-10 flex items-center"
              initial={{ x: 0 }}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <FaArrowRight />
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      {/* === MOBILE IMAGE SECTION === */}
      <motion.div
        className="xl:hidden grid grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl mx-auto mt-8"
        variants={staggerContainer}
      >
        <motion.div
          className="space-y-4 md:space-y-6"
          variants={imageVariant(0.1)}
        >
          <div className="relative group">
            <img
              className="w-full h-48 md:h-56 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
              src="/aboutimage1.jpg"
              alt="Al-Edwani Construction Projects"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
          </div>
          <div className="relative group">
            <img
              className="w-full h-32 md:h-40 rounded-2xl object-cover shadow-lg border-4 border-white group-hover:shadow-xl transition-all duration-300"
              src="/aboutimage2.jpg"
              alt="Al-Edwani Equipment Services"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
          </div>
        </motion.div>
        <motion.div
          className="space-y-4 md:space-y-6 pt-8 md:pt-12"
          variants={imageVariant(0.3)}
        >
          <div className="relative group">
            <img
              className="w-full h-32 md:h-40 rounded-2xl object-cover shadow-lg border-4 border-white group-hover:shadow-xl transition-all duration-300"
              src="/aboutimage3.jpg"
              alt="Al-Edwani Infrastructure Development"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
          </div>
          <div className="relative group">
            <img
              className="w-full h-48 md:h-56 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
              src="/homeabout4.jpg"
              alt="Al-Edwani Road Construction"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
          </div>
        </motion.div>
      </motion.div>

      {/* === DECORATIVE ELEMENTS - POSITION MAINTAINED === */}
      <motion.div
        initial={{ opacity: 0, x: -80, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="hidden xl:block absolute bottom-0 left-0"
      >
        <img
          src="/sideabout4.png"
          alt="Construction Excellence Decorative Element"
          className="w-[120px] h-auto select-none pointer-events-none opacity-95 
                     drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="hidden xl:block absolute bottom-0 right-0"
      >
        <img
          src="/sideabout3.png"
          alt="Infrastructure Innovation Decorative Element"
          className="  select-none pointer-events-none opacity-95 
                     drop-shadow-2xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default About;
