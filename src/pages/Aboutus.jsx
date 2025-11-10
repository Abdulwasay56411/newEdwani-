import React from "react";
import { motion } from "framer-motion";
import Section2 from "../components/About/Section2";
import SpecializationSection from "../components/About/SpecializationSection";
import VisionAndValues from "../components/About/VisionAndValues";
import SafetyStandards from "../components/About/SafetyStandards";
import Stats from "../components/About/Stats";
import BestEngineers from "../components/About/BestEngineers";
import PageHeader from "../components/PageHeader"; // ✅ Import PageHeader

const Aboutus = () => {
  return (
    <motion.div
      className="relative overflow-hidden mt-68 md:mt-54"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Reusable Header Component */}
      <div className="flex flex-wrap lg:flex-nowrap text-center lg:text-left items-center justify-center lg:justify-between 2xl:mx-40 mb-10 px-4">
        <div className="order-2 lg:order-1">
        <PageHeader
          title="About Us"
          subtitle="Since 1990, Edwani Contracting has been delivering projects with quality, reliability and innovation across Saudi Arabia. Our success is built on trust, expertise and collaboration.
                    Our experienced team ensures every project meets and exceeds client expectations. We remain dedicated to sustainable practices, the highest safety standards and delivering lasting value. At Edwani Contracting, we are building more than structures. We are building trust, progress and a legacy of excellence."
          subHeading="Our CEO’s Commitment to Excellence"
        />
        </div>
        <div className="order-1 mb-5 lg:order-2">
          <img
            className="w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg "
            src="/bgservices.png"
          />
        </div>
      </div>

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
