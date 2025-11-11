import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import Services2 from "../components/Services";
import LastSection from "../components/Services/LastSection";
import MechanicalServices from "../components/MechanicalServices";
import TransparentNavbar from "../components/TransparentNavbar";

const Services = () => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
       <TransparentNavbar/>
      {/* ✅ Reusable Header Component */}
      <div className="flex flex-wrap pt-5 lg:flex-nowrap text-center lg:text-left items-center justify-center gap-10 mb-10 px-4">
        <PageHeader
          title="Our Services"
          subHeading="OUR COMMITMENT TO QUALITY SERVICE"
          subtitle="Delivering comprehensive construction and infrastructure solutions across Saudi Arabia, we bring decades of hands-on experience, a highly skilled and certified team and an unwavering commitment to excellence. Our focus on quality, safety and client satisfaction ensures that every project is executed with precision, reliability and attention to detail, making us a trusted partner for businesses and communities seeking innovative and sustainable construction solutions."
        />
        <div className="relative mt-10 mx-2 inline-block">
        <div className="absolute top-3 -left-2 w-full mx-2 max-w-[420px] h-[311px] bg-[#E7E7E7] rounded-3xl -rotate-4 "></div>
          <img
            className="w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg relative rotate-1"
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
