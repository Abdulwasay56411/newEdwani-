import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader"; // ✅ Reusable Header Component
import ConstructionEquipment from "../components/Equipment/ConstructionEquipment";
import ConstructionMaterials from "../components/Equipment/ConstructionMaterials";
import EquipmentTable from "../components/Equipment/EquipmentTable";
import LastSection from "../components/Equipment/LastSection";
import TransparentNavbar from "../components/TransparentNavbar";

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* ✅ Reusable Page Header */}
      <TransparentNavbar />
      <div className="flex flex-wrap pt-5 lg:flex-nowrap text-center lg:text-left items-center justify-center gap-10 mb-10 px-4">
        <PageHeader
          title="Equipment / Materials"
          subHeading="Edwani Contracting"
          subtitle="We’re here to help and answer any questions you may have. Whether you’re looking for more information about our services, projects or career opportunities, our team is ready to assist you. Get in touch with us through the form below, email or phone and we’ll ensure your inquiries are addressed promptly and efficiently. Your connection with us is important and we look forward to hearing from you."
        />
        <div className="relative mt-10 mx-2 inline-block">
          {isImageLoaded && (
            <div className="absolute top-3 -left-2 w-full mx-2 max-w-[420px] h-[311px] bg-[#E7E7E7] rounded-3xl -rotate-4 "></div>
          )}
          <img
            className="relative w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg rotate-1"
            src="/bg-e.jpg"
            onLoad={handleImageLoad}
          />
        </div>
      </div>

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
