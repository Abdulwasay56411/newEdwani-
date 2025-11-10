import React from "react";
import { motion } from "framer-motion";
import OurClients from "../components/About/OurClients";
import PageHeader from "../components/PageHeader"; // ✅ Import Reusable Header

const Customers = () => {
  return (
    <motion.div
      className="relative overflow-hidden  mt-68 md:mt-54"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Reusable Page Header */}
      <div className="flex flex-wrap lg:flex-nowrap text-center lg:text-left items-center justify-center 2xl:mx-40 lg:justify-between mb-10 px-4">
        <PageHeader
          title="Our Customers"
          subHeading="BUILDING LASTING PARTNERSHIPS"
          subtitle="Trusted by a diverse range of clients, we deliver innovative and reliable construction and infrastructure solutions that exceed expectations. Our commitment to quality, safety and excellence has earned us long-lasting partnerships with leading organizations, businesses and institutions. Every project we undertake reflects our dedication to creating impactful, sustainable results and strengthening the success of our valued customers."
        />
        <div>
          <img
            className="w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg"
            src="/bgservices.png"
          />
        </div>
      </div>

      {/* Customers / Clients Section */}
      <OurClients />
    </motion.div>
  );
};

export default Customers;
