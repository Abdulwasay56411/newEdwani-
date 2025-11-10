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
      className="relative overflow-hidden mt-68 md:mt-54"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Reusable Header Component */}
      <div className="flex flex-wrap lg:flex-nowrap text-center lg:text-left items-center justify-center lg:justify-between mb-10 px-4">
        <PageHeader
          title="Our Services"
          subHeading="OUR COMMITMENT TO QUALITY SERVICE"
          subtitle="Delivering comprehensive construction and infrastructure solutions across Saudi Arabia, we bring decades of hands-on experience, a highly skilled and certified team and an unwavering commitment to excellence. Our focus on quality, safety and client satisfaction ensures that every project is executed with precision, reliability and attention to detail, making us a trusted partner for businesses and communities seeking innovative and sustainable construction solutions."
        />
        <div>
          <img
            className="w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg"
            src="/uzair.png"
          />
        </div>
      </div>

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
