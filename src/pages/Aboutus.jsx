import React from "react";
import { motion } from "framer-motion";
import Section2 from "../components/About/Section2";
import TransparentNavbar from "../components/TransparentNavbar";
import SpecializationSection from "../components/About/SpecializationSection";
import VisionAndValues from "../components/About/VisionAndValues";
import SafetyStandards from "../components/About/SafetyStandards";
import Stats from "../components/About/Stats";
import BestEngineers from "../components/About/BestEngineers";
import PageHeader from "../components/PageHeader"; // ✅ Import PageHeader

const Aboutus = () => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Reusable Header Component */}
      <PageHeader
        title="About Us"
        subtitle="Edwani Contracting"
        image="/bgservices.png"
      />

      {/* ===== Sections Below ===== */}

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Section2 />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SpecializationSection />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <VisionAndValues />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SafetyStandards />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <BestEngineers />
      </motion.section>
    </motion.div>
  );
};

export default Aboutus;
