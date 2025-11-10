import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader"; // ✅ Reusable Header Component
import ConstructionEquipment from "../components/Equipment/ConstructionEquipment";
import ConstructionMaterials from "../components/Equipment/ConstructionMaterials";
import EquipmentTable from "../components/Equipment/EquipmentTable";
import LastSection from "../components/Equipment/LastSection";

// ===== Animation Variants for Reuse =====
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Equipments = () => {
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
        title="Equipment / Materials"
        subtitle="Edwani Contracting"
        image="/bg-e.jpg"
      />

      {/* ===== Section 1: Construction Equipment ===== */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ConstructionEquipment />
      </motion.section>

      {/* ===== Section 2: Construction Materials ===== */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ConstructionMaterials />
      </motion.section>

      {/* ===== Section 3: Equipment Table ===== */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <EquipmentTable />
      </motion.section>

      {/* ===== Section 4: Last Section ===== */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <LastSection />
      </motion.section>
    </motion.div>
  );
};

export default Equipments;
