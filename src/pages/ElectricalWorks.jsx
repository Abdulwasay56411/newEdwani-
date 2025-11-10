import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader"; // ✅ Reusable Header
import SectionOne from "../components/Electrical/SectionOne";
import SectionTwo from "../components/Electrical/SectionTwo";

// ===== Variants for Reuse =====
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ElectricalWorks = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* ✅ Reusable Page Header */}
      <PageHeader
        title="Electrical Works"
        subtitle="Edwani Contracting"
        image="/electricalbg.jpg"
      />

      {/* ==== SECTION 1 ==== */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F9FCFE]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SectionOne />
      </motion.section>

      {/* ==== SECTION 2 ==== */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F9FCFE]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SectionTwo />
      </motion.section>
    </motion.div>
  );
};

export default ElectricalWorks;
