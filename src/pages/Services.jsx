import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import Services2 from "../components/Services";
import LastSection from "../components/Services/LastSection";
import MechanicalServices from "../components/MechanicalServices";

const Services = () => {
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
        title="Our Services"
        subtitle="Edwani Contracting"
        image="/uzair.png"
      />

      {/* Sections */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10 bg-[#F8FAFB]"
      >
        <WhyChooseUs />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="md:px-16 lg:px-24 py-8 md:py-10"
      >
        <Services2 />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="md:px-16 lg:px-24 py-8 md:py-10"
      >
        <MechanicalServices />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <LastSection />
      </motion.section>
    </motion.div>
  );
};

export default Services;
