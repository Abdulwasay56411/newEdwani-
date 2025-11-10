import React from "react";
import { motion } from "framer-motion";

import PageHeader from "../../components/PageHeader"; // ✅ Reusable Header

import QHSECommitment from "../../components/QHSE/QHSECommitment";
import QualityPolicy from "../../components/QHSE/QualityPolicy";
import HealthSafetyPolicy from "../../components/QHSE/HealthSafetyPolicy";
import EnvironmentalPolicy from "../../components/QHSE/EnvironmentalPolicy";
import AreasOfCertification from "../../components/QHSE/AreasOfCertification";
import AwardsRecognition from "../../components/QHSE/AwardsRecognition";

const Qhse = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Page Header */}
      <PageHeader
        title="QHSE"
        subtitle="Edwani Contracting"
        image="/qshebg.png"
      />

      {/* ✅ Sections */}
      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <QHSECommitment />
      </motion.section>

      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <QualityPolicy />
      </motion.section>

      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <HealthSafetyPolicy />
      </motion.section>

      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <EnvironmentalPolicy />
      </motion.section>

      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <AreasOfCertification />
      </motion.section>

      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <AwardsRecognition />
      </motion.section>
    </div>
  );
};

export default Qhse;
