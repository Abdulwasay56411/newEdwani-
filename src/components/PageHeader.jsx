import React from "react";
import { motion } from "framer-motion";
import TransparentNavbar from "./TransparentNavbar";

const PageHeader = ({ title, subtitle, subHeading }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
      // className="w-full h-auto bg-cover bg-center"
      // style={{ backgroundImage: `url(${image})` }}
      >
        {/* Animated Gradient Blobs */}
        {/* <div className="absolute inset-0 overflow-hidden">
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
        </div> */}

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
          <div className="w-full max-w-[750px]">
            <motion.h1
              className="text-black px-2 font-bold text-5xl pb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {subHeading && (
                <h3
                  className="text-[#2387C0] text-sm md:text-base font-semibold text-nowrap uppercase
               bg-blue-50 py-1.5 px-2 w-full max-w-[350px] mb-4 rounded-full border border-blue-100"
                >
                  {subHeading}
                </h3>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-black text-base px-2">{subtitle}</h2>
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
