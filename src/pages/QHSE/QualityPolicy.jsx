import React from "react";
import { motion } from "framer-motion";
import QualityPolicy2 from "./../../components/QHSE/QualityPolicy";
import PageHeader from "../../components/PageHeader"; // ✅ Import PageHeader

const QualityPolicy = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Page Header Component */}
      <PageHeader
        title="Quality Policy"
        subtitle="Al - Edward Establishment"
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
        <QualityPolicy2 />
      </motion.section>
    </div>
  );
};

export default QualityPolicy;
