import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Outer spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-20 h-20 border-4 border-[#2387C0] border-t-transparent rounded-full"
      ></motion.div>

      {/* Optional brand text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute mt-28 text-[#2387C0] font-bold text-lg tracking-widest"
      >
        Loading...
      </motion.span>
    </div>
  );
};

export default Loader;
