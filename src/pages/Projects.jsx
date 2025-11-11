import React from "react";
import { motion } from "framer-motion";
import TransparentNavbar from "../components/TransparentNavbar";
import ProjectStory from "../components/Project/ProjectStory";
import ProjectCard from "../components/Project/ProjectCard";
import PageHeader from "../components/PageHeader"; //  Import Reusable Header

const Projects = () => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
       <TransparentNavbar/>
      {/* ✅ Reusable Page Header */}
      <div className="flex flex-wrap pt-5 lg:flex-nowrap text-center lg:text-left items-center justify-center gap-10  mb-10 px-4">
        <div className="order-2 lg:order-1">
        <PageHeader
        title="Our Projects"
        subHeading="OUR LEGACY OF COMPLETED WORKS"
        subtitle="Showcasing a diverse portfolio of large-scale construction and infrastructure projects, we combine decades of experience with innovative solutions and meticulous attention to detail. Each project reflects our unwavering commitment to quality, safety and client satisfaction, demonstrating our ability to deliver complex developments efficiently and reliably. From residential and commercial developments to major infrastructure works, our projects exemplify excellence, precision and sustainable practices that drive growth and create lasting impact."

        />
        </div>
        <div className="order-1 mb-5 lg:order-2">
          <img src="/projectbg.jpg" className="w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* ✅ Project Story Section */}
      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ProjectStory />
      </motion.section>

      {/* ✅ Project Cards Section */}
      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProjectCard />
      </motion.section>
    </motion.div>
  );
};

export default Projects;
