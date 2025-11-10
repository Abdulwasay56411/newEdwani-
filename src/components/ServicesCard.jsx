import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ icon: Icon, title, description }) => {
  const cardVariants = {
    initial: {
      backgroundColor: "#F8FAFB",
      color: "#0A1128",
    },
    hover: {
      backgroundColor: "#2387C0",
      color: "#FFFFFF",
    },
  };

  const iconVariants = {
    initial: {
      backgroundColor: "#FFFFFF",
      color: "#2387C0",
      boxShadow: "0 4px 12px rgba(35, 135, 192, 0.15)",
    },
    hover: {
      backgroundColor: "#FFFFFF",
      color: "#2387C0",
      boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
    },
  };

  return (
    <motion.div
      className="w-full h-full rounded-2xl flex flex-col items-start p-6 lg:p-8 cursor-pointer border border-gray-100 min-h-[320px] sm:min-h-[340px] lg:min-h-[360px]"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Enhanced Icon Container */}
      <motion.div
        className="mb-6 lg:mb-8"
        variants={iconVariants}
        transition={{ duration: 0.4 }}
      >
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center">
          <Icon size={28} className="lg:w-8 lg:h-8" />
        </div>
      </motion.div>

      {/* Enhanced Content Section */}
      <div className="flex flex-col gap-4 lg:gap-5 flex-1 w-full">
        {/* Title */}
        <motion.h1
          className="text-xl lg:text-2xl font-bold leading-tight text-gray-900"
          variants={{
            initial: { color: "#1F2937" },
            hover: { color: "#FFFFFF" },
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h1>

        {/* Enhanced Professional Divider */}
        <motion.div
          className="flex gap-2 items-center mb-2"
          variants={{
            initial: { opacity: 1 },
            hover: { opacity: 0.8 },
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-10 h-1 rounded-full bg-[#2387C0]"
            variants={{
              initial: { backgroundColor: "#2387C0" },
              hover: { backgroundColor: "#FFFFFF" },
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="w-4 h-1 rounded-full bg-[#2387C0]"
            variants={{
              initial: { backgroundColor: "#2387C0" },
              hover: { backgroundColor: "#FFFFFF" },
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="w-2 h-1 rounded-full bg-[#2387C0]"
            variants={{
              initial: { backgroundColor: "#2387C0" },
              hover: { backgroundColor: "#FFFFFF" },
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="font-medium text-base lg:text-lg leading-relaxed text-gray-600"
          variants={{
            initial: { color: "#6B7280", opacity: 0.8 },
            hover: { color: "rgba(255, 255, 255, 0.9)", opacity: 0.9 },
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
