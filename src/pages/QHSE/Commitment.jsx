import React from "react";
import { motion } from "framer-motion";
import QHSECommitment from "../../components/QHSE/QHSECommitment";
import PageHeader from "../../components/PageHeader"; // ✅ Import Here

const Commitment = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Page Header Component */}
      <PageHeader
        title="Our Commitment"
        subtitle="Edwani Contracting"
        image="/qshebg.png"
      />

      {/* ✅ Content Section */}
      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <QHSECommitment />
      </motion.section>
    </div>
  );
};

export default Commitment;
