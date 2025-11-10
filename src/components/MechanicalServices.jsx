import React from "react";
import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";

// ✅ Verified existing icons
import {
  GiFireExtinguisher,
  GiGears,
  GiWrench,
  GiMetalBar,
} from "react-icons/gi";

import { FaFan, FaTools, FaFaucet } from "react-icons/fa"; // ✅ All of these exist

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MechanicalServices = () => {
  const mechanicalServicesData = [
    {
      icon: FaFan,
      title: "HVAC Installation & Maintenance",
      description:
        "Energy-efficient heating, ventilation, and air conditioning systems ensuring optimal comfort and reliable performance.",
    },
    {
      icon: FaFaucet,
      title: "Plumbing & Piping Systems",
      description:
        "Comprehensive plumbing and industrial piping solutions including design, installation, and maintenance for diverse sectors.",
    },
    {
      icon: GiFireExtinguisher,
      title: "Firefighting Systems",
      description:
        "Design and installation of fire suppression systems that meet international safety standards for maximum protection.",
    },
    {
      icon: GiGears,
      title: "Equipment Installation & Alignment",
      description:
        "Precision installation and alignment of mechanical equipment to ensure efficiency, safety, and long-term reliability.",
    },
    {
      icon: GiWrench,
      title: "Preventive Maintenance & Repairs",
      description:
        "Scheduled maintenance and repair services that reduce downtime, improve efficiency, and extend machinery lifespan.",
    },
    {
      icon: GiMetalBar,
      title: "Fabrication & Welding Services",
      description:
        "Custom fabrication and certified welding solutions tailored for mechanical, structural, and industrial projects.",
    },
  ];

  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center mb-12 lg:mb-20 text-center"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-3 h-10 bg-[#2387C0] rounded-full mr-4"></div>
            <span className="text-sm font-semibold text-[#2387C0] tracking-wider uppercase">
              Our Expertise
            </span>
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A1128] mb-6 leading-tight">
            Comprehensive{" "}
            <span className="text-[#2387C0] relative">Mechanical Services</span>
          </h1>

          <p className="text-lg px-5 lg:text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
            Delivering excellence through advanced mechanical solutions designed
            to optimize performance, efficiency, and reliability across
            industrial and infrastructure projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full px-5"
        >
          {mechanicalServicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full"
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <ServicesCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MechanicalServices;
