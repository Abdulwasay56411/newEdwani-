import React from "react";
import { motion } from "framer-motion";
import TransparentNavbar from "./TransparentNavbar";

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="relative w-full bg-cover bg-center h-[600px] md:h-[700px] flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(35, 135, 192, 0.4)), url(${image})`,
          backgroundPosition: "center 30%",
        }}
      >
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2387C0] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a5a7a] rounded-full mix-blend-multiply filter blur-xl opacity-15"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Navbar */}
        <div className="w-full relative z-20">
          <TransparentNavbar />
        </div>

        {/* Hero Text */}
        <motion.div
          className="flex-1 flex justify-center items-center px-4 relative z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.h1
              className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight pt-28"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-white font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-wide">
                {subtitle}
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageHeader;
