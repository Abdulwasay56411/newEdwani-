import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
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

  const imageFloat = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative  overflow-hidden w-full">
      {/* Animated Background */}
      <motion.img
        src="/background hero.png"
        alt="Background vector"
        className="absolute right-0 top-0 bg-cover  object-cover pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />

      {/* DESKTOP SECTION (xl and above) - UNCHANGED */}
      <motion.div
        className="hidden xl:flex flex-row items-center justify-between 
                   gap-12 xl:gap-24 py-20 px-4 sm:px-6 xl:px-24 relative z-10
                   bg-gradient-to-br from-white via-blue-50/20 to-sky-100/10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT TEXT SECTION - UNCHANGED */}
        <motion.div
          className="flex flex-col justify-center items-start text-left space-y-6 md:space-y-8 w-full xl:w-1/2"
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
                Leading Construction Company
              </motion.span>
            </div>

            <motion.h1
              className="text-gray-900 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.07]
                         text-center xl:text-left w-full"
              variants={fadeUp}
            >
              Trusted <span className="text-[#2387C0]">construction</span>{" "}
              company around the <span className="text-[#2387C0]">world</span>.
            </motion.h1>
          </motion.div>

          {/* Premium Content */}
          <motion.div className="space-y-6 w-full" variants={fadeUp}>
            <p className="text-gray-700 text-base md:text-lg leading-7 md:leading-8 font-medium text-center xl:text-left">
              Explore the difference with Edwani Contracting where quality meets
              reliability. We deliver exceptional construction services with
              unparalleled expertise.
            </p>
          </motion.div>

          {/* Premium Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full pt-2"
            variants={fadeUp}
          >
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(35, 135, 192, 0.25)",
                backgroundColor: "#2387C0",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/equipments")}
              className="w-full sm:w-64 h-14 md:h-16 bg-[#2387C0] text-white 
                         font-semibold text-lg rounded-xl shadow-2xl 
                         hover:bg-[#1e76a9] transition-all duration-300 
                         flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              {/* Shine effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                           -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] 
                           transition-transform duration-1000"
              />
              <span className="relative z-10">Equipment / Materials</span>
              <motion.span
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              ></motion.span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/electrical")}
              className="w-full sm:w-64 h-14 md:h-16 bg-white text-[#2387C0] 
                         font-semibold text-lg rounded-xl shadow-2xl border border-gray-200 
                         hover:bg-gray-50 transition-all duration-300"
            >
              Electrical Works
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION - UNCHANGED */}
        <motion.div className="relative w-full max-w-[549px] h-[548px] flex-shrink-0">
          <div className="relative w-full h-full">
            <motion.img
              src="/homehero4.png"
              alt="Construction 1"
              className="absolute w-[25%] max-w-[144px] aspect-square object-contain rounded-lg"
              style={{ top: "45%", left: "58%" }}
              {...imageFloat}
            />
            <motion.img
              src="/homehero1.png"
              alt="Construction 2"
              className="absolute w-[40%] max-w-[224px] aspect-square object-contain rounded-lg"
              style={{ top: "0%", left: "35%" }}
              {...imageFloat}
              transition={{ duration: 4 }}
            />
            <motion.img
              src="/homehero3.jpg"
              alt="Construction 3"
              className="absolute w-[25%] max-w-[144px] aspect-square object-contain rounded-lg"
              style={{ top: "14%", left: "4%" }}
              {...imageFloat}
              transition={{ duration: 3.5 }}
            />
            <motion.img
              src="/hero4.png"
              alt="Construction 4"
              className="absolute w-[52%] max-w-[288px] aspect-square object-contain rounded-lg"
              style={{ top: "45%", left: "0%" }}
              {...imageFloat}
              transition={{ duration: 5 }}
            />
            <motion.img
              src="/homehero2.png"
              alt="Construction 5"
              className="absolute w-[20%] max-w-[112px] aspect-square object-contain rounded-lg"
              style={{ top: "18%", left: "80%" }}
              {...imageFloat}
              transition={{ duration: 2.5 }}
            />

            {/* Checklist Card */}
            <motion.div
              className="absolute bg-[#2387C0] px-5 py-4 rounded-[10px] shadow-md"
              style={{ bottom: "7%", right: "0%", maxWidth: "90%" }}
            >
              <ul className="text-white text-[15px] font-medium space-y-3 leading-snug whitespace-nowrap">
                {[
                  "Quality Control System and 100% Satisfaction Guarantee",
                  "Highly Professional Staff and Accurate Testing Processes",
                  "Unrivaled Workmanship,Professional and Qualified",
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center flex-shrink-0">
                      <IoMdCheckmarkCircleOutline className="text-[#2387C0] text-[12px]" />
                    </div>
                    <span className="break-words">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* TABLET/SMALL LAPTOP SECTION (md to xl) - UPDATED FOR 1024px */}
      <motion.div
        className="hidden md:flex xl:hidden flex-col items-center justify-center 
                   py-16 px-8 relative z-10 min-h-screen"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-6xl mx-auto">
          {/* Header - Optimized for Tablet/Small Laptop */}
          <motion.div className="text-center mb-12 w-full" variants={fadeUp}>
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              variants={fadeUp}
            >
              <div className="w-3 h-10 bg-[#2387C0] rounded-full mr-4"></div>
              <span className="text-base font-semibold text-[#2387C0] tracking-wider uppercase">
                Leading Construction Company
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
              variants={fadeUp}
            >
              Trusted <span className="text-[#2387C0]">construction</span>{" "}
              company
            </motion.h1>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8"
              variants={fadeUp}
            >
              around the <span className="text-[#2387C0]">world</span>.
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12 font-light"
              variants={fadeUp}
            >
              Excellence in every project. Trust Edwani Contracting for
              unparalleled construction quality and reliability that stands the
              test of time.
            </motion.p>
          </motion.div>

          {/* Content & Image Layout for Tablet/Small Laptop */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div
              className="w-full lg:w-1/2 space-y-8"
              variants={staggerContainer}
            >
              <motion.p
                className="text-lg text-gray-700 leading-8 font-medium"
                variants={fadeUp}
              >
                Explore the difference with Edwani Contracting where quality
                meets reliability. We deliver exceptional construction services
                with unparalleled expertise.
              </motion.p>

              {/* Buttons - Side by side on tablet/small laptop */}
              <motion.div
                className="flex flex-row gap-4 w-full"
                variants={fadeUp}
              >
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(35, 135, 192, 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/equipments")}
                  className="flex-1 py-5 bg-[#2387C0] text-white font-semibold text-lg rounded-xl shadow-xl hover:bg-[#1e76a9] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Equipment / Materials</span>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/electrical")}
                  className="flex-1 py-5 bg-white text-[#2387C0] font-semibold text-lg rounded-xl shadow-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                >
                  Electrical Works
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image Section for Tablet/Small Laptop */}
            <motion.div
              className="w-full lg:w-1/2 relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50/30 shadow-2xl border border-gray-100"
              variants={fadeUp}
            >
              {/* Main Center Image */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.img
                  src="/homehero1.png"
                  alt="Main Construction Project"
                  className="w-56 h-56 object-cover rounded-2xl shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Peripheral Images - Optimized for Tablet/Small Laptop */}
              {[
                {
                  src: "/homehero3.jpg",
                  class: "top-8 left-8 w-28 h-28",
                  rotate: -5,
                  delay: 0.7,
                },
                {
                  src: "/homehero2.png",
                  class: "top-8 right-8 w-28 h-28",
                  rotate: 3,
                  delay: 0.9,
                },
                {
                  src: "/hero4.png",
                  class: "bottom-8 left-8 w-28 h-28",
                  rotate: -3,
                  delay: 1.1,
                },
                {
                  src: "/homehero4.png",
                  class: "bottom-8 right-8 w-28 h-28",
                  rotate: 4,
                  delay: 1.3,
                },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${img.class}`}
                  initial={{ scale: 0, opacity: 0, rotate: img.rotate * 2 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    rotate: img.rotate,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    delay: img.delay,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    y: {
                      duration: 3 + i * 0.3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: i * 0.5,
                    },
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Construction ${i + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-white"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* MOBILE SECTION (below md) - UNCHANGED */}
      <motion.div
        className="md:hidden relative w-full bg-[#F8FAFB] min-h-screen"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-gray-50/20 z-0"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(35,135,192,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(35,135,192,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
          {/* Header - UNCHANGED */}
          <motion.div
            className="text-center mb-12 w-full max-w-2xl"
            variants={fadeUp}
          >
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              variants={fadeUp}
            >
              <div className="w-2 h-8 bg-[#2387C0] rounded-full mr-3"></div>
              <span className="text-sm font-semibold text-[#2387C0] tracking-wider uppercase">
                Leading Construction Company
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight "
              variants={fadeUp}
            >
              Trusted{" "}
              <span className="text-[#2387C0] relative">construction</span>{" "}
              company
            </motion.h1>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              around the <span className="text-[#2387C0]">world</span>.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto mb-10 font-light"
              variants={fadeUp}
            >
              Excellence in every project. Trust Edwani contracting for
              unparalleled construction quality and reliability that stands the
              test of time.
            </motion.p>
          </motion.div>

          {/* Professional Image Showcase - UNCHANGED */}
          <motion.div
            className="relative w-full max-w-2xl h-96 mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50/30 shadow-2xl border border-gray-100"
            variants={fadeUp}
          >
            {/* Main Center Image */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.img
                src="/homehero1.png"
                alt="Main Construction Project"
                className="w-56 h-56 object-cover rounded-2xl shadow-lg"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Beautifully Aligned Peripheral Images - SAME SIZE, EQUAL CORNERS */}
            {[
              {
                src: "/homehero3.jpg",
                class: "top-4 left-4 w-20 h-20",
                rotate: -5,
                delay: 0.7,
              },
              {
                src: "/homehero2.png",
                class: "top-4 right-4 w-20 h-20",
                rotate: 3,
                delay: 0.9,
              },
              {
                src: "/hero4.png",
                class: "bottom-4 left-4 w-20 h-20",
                rotate: -3,
                delay: 1.1,
              },
              {
                src: "/homehero4.png",
                class: "bottom-4 right-4 w-20 h-20",
                rotate: 4,
                delay: 1.3,
              },
            ].map((img, i) => (
              <motion.div
                key={i}
                className={`absolute ${img.class}`}
                initial={{ scale: 0, opacity: 0, rotate: img.rotate * 2 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: img.rotate,
                  y: [0, -6, 0],
                }}
                transition={{
                  delay: img.delay,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  y: {
                    duration: 3 + i * 0.3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: i * 0.5,
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  z: 50,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={img.src}
                  alt={`Construction ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-white"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl shadow-lg bg-blue-100/20 pointer-events-none"></div>
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-sky-200/10 rounded-full blur-xl"></div>
          </motion.div>

          {/* Action Buttons - UNCHANGED */}
          <motion.div
            className="flex flex-col gap-4 w-full max-w-sm mb-24"
            variants={fadeUp}
          >
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(35, 135, 192, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/equipments")}
              className="w-full py-4 bg-[#2387C0] text-white font-semibold text-base rounded-xl shadow-lg hover:bg-[#1e76a9] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Equipment / Materials</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/electrical")}
              className="w-full py-4 bg-white text-[#2387C0] font-semibold text-base rounded-xl shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
            >
              Electrical Works
            </motion.button>
          </motion.div>

          {/* Professional Features Card - UNCHANGED */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm border border-gray-100 mb-16"
            variants={fadeUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3"
              variants={fadeUp}
            >
              Why Choose Edwani Contracting
            </motion.h3>

            <motion.ul className="space-y-4" variants={staggerContainer}>
              {[
                {
                  text: "Quality Control System ",
                  desc: "100% Satisfaction Guarantee",
                },
                { text: "Professional Team", desc: "Highly Qualified Staff" },
                { text: "Precision Work", desc: "Accurate Testing Processes" },
                { text: "Expert Craftsmanship", desc: "Unrivaled Workmanship" },
                {
                  text: "Industry Standards",
                  desc: "Professional & Certified",
                },
                { text: "Timely Delivery", desc: "On-time Project Completion" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors duration-200"
                  variants={fadeUp}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 bg-[#2387C0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IoMdCheckmarkCircleOutline className="text-white text-xs" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">
                      {item.text}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {item.desc}
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Enhanced Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-0"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
