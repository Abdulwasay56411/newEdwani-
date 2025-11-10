import React from "react";
import { motion } from "framer-motion";
import OurClients from "../components/About/OurClients";
import PageHeader from "../components/PageHeader"; // ✅ Import Reusable Header

const Customers = () => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Reusable Page Header */}
      <PageHeader
        title="Our Customers"
        subtitle="Edwani Contracting"
        image="/bgservices.png"
        tagline="Comprehensive Solutions for Your Construction Needs"
      />

      {/* Customers / Clients Section */}
      <OurClients />
    </motion.div>
  );
};

export default Customers;
