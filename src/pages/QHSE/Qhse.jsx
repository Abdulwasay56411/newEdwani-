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
    <div className="relative mt-68 md:mt-54">
      {/* ✅ Reusable Page Header */}
      <div className="flex flex-wrap lg:flex-nowrap text-center lg:text-left items-center justify-center 2xl:mx-40 lg:justify-between mb-10 px-4">
        <PageHeader
          title="QHSE"
          subHeading="EXCELLENCE IN QUALITY, SAFETY & ENVIRONMENT"
          subtitle="At the core of our operations is an unwavering commitment to Quality, Health, Safety and Environmental excellence. We implement stringent QHSE standards across all our projects to ensure the wellbeing of our workforce, the protection of the environment and the delivery of superior quality outcomes. By fostering a culture of safety, accountability and continuous improvement, we not only meet regulatory requirements but also exceed industry benchmarks, reinforcing our reputation as a responsible and reliable construction partne"
        />
        <div>
          <img
            className="w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg"
            src="/qshebg.png"
          />
        </div>
      </div>

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
