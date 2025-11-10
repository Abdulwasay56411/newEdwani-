import React from "react";
import { motion } from "framer-motion";
import TransparentNavbar from "../components/TransparentNavbar";
import ProjectStory from "../components/Project/ProjectStory";
import ProjectCard from "../components/Project/ProjectCard";
import PageHeader from "../components/PageHeader"; // ✅ Import Reusable Header

const Projects = () => {
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
        title="Our Projects"
        subtitle="Edwani Contracting"
        image="/projectbg.jpg"
      />

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
