import React from "react";
import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";
import {
  GiGrass,
  GiFarmer,
  GiBulldozer,
  GiDigHole,
  GiDemolish,
  GiToolbox,
  GiBroom,
  GiHouse,
  GiTrafficLightsReadyToGo,
} from "react-icons/gi";
import { BiX } from "react-icons/bi";
import { IoConstruct } from "react-icons/io5";

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

const Services = () => {
  const servicesData = [
    {
      icon: GiGrass,
      title: "Agricultural Facilitation",
      description:
        "Modern solutions to enhance farming efficiency, land preparation, and irrigation for sustainable Agriculture growth.",
    },
    {
      icon: GiFarmer,
      title: "Skilled Manpower Supply",
      description:
        "Providing trained, experienced manpower ensuring efficiency, safety, and quality across construction activities.",
    },
    {
      icon: GiBulldozer,
      title: "Grading & Compaction",
      description:
        "Accurate land grading and soil compaction for strong foundations and reliable construction performance.",
    },
    {
      icon: GiDigHole,
      title: "Excavations",
      description:
        "Expert excavation services ensuring safe, precise digging for foundations, utilities, and site development.",
    },
    {
      icon: GiDemolish,
      title: "Demolitions",
      description:
        "Safe, controlled demolition using advanced techniques to clear sites efficiently while minimizing impact.",
    },
    {
      icon: IoConstruct,
      title: "Site Preparations",
      description:
        "Complete site preparation services including cleaning, grading, and compaction for stable construction foundations.",
    },
    {
      icon: GiToolbox,
      title: "Equipment Maintenance",
      description:
        "Preventive maintenance solutions to enhance performance, minimize downtime, and extend machinery lifespan.",
    },
    {
      icon: GiBroom,
      title: "Cleaning & Debris Removals",
      description:
        "Site cleaning and debris removal ensuring a safe, hazard-free environment ready for development.",
    },
    {
      icon: GiHouse,
      title: "Building Construction",
      description:
        "Delivering durable, high-quality buildings with expert planning, innovative design, and modern construction practices.",
    },
  ];

  return (
    <section className="bg-white w-full ">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Professional Heading */}
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
            Comprehensive <br />
            <span className="text-[#2387C0] relative">Services</span>
          </h1>

          <p className="text-lg px-5 lg:text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
            Delivering excellence through a comprehensive suite of construction
            and infrastructure services tailored to meet your project
            requirements with precision and professionalism.
          </p>
        </motion.div>

        {/* Enhanced Professional Cards Grid - Removed center justification */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full px-5"
        >
          {servicesData.map((service, index) => (
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

export default Services;
