import React from "react";
import { motion } from "framer-motion";

import PageHeader from "../components/PageHeader"; // ✅ Reusable Header

import WorkCulture from "../components/Career/WorkCulture";
import WhyJoinUs from "../components/Career/WhyJoinUs";
import CurrentOpenings from "../components/Career/CurrentOpenings";
import EmployeeVoicesAndBenefits from "../components/Career/EmployeeVoicesAndBenefits";
import ApplyNow from "../components/Career/ApplyNow";

// ===== Framer Motion Variants =====
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Career = () => {
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
        title="Career"
        subtitle="Edwani Contracting"
        image="/careerbg.jpg"
      />

      {/* ===== MAIN SECTIONS ===== */}

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F9FCFE]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <WorkCulture />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <WhyJoinUs />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F9FCFE]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <CurrentOpenings />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <EmployeeVoicesAndBenefits />
      </motion.section>

      <motion.section
        id="apply-now-section"
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F9FCFE]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ApplyNow />
      </motion.section>
    </motion.div>
  );
};

export default Career;
