import React from "react";
import { motion } from "framer-motion";
import AwardsRecognition from "../../components/QHSE/AwardsRecognition";
import PageHeader from "../../components/PageHeader"; // ✅ import reusable header

const Awards = () => {
  return (
    <motion.div
      className="relative overflow-hidden mt-44 md:mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Reusable Header */}
      <PageHeader/>

      {/* ✅ Awards Section */}
      <motion.section
        className="px-8 md:px-16 lg:px-18 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <AwardsRecognition />
      </motion.section>
    </motion.div>
  );
};

export default Awards;
