import React from "react";
import { motion } from "framer-motion";
import ProjectDetail from "../components/ProjectDetail";
import PageHeader from "../components/PageHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ProjectDetailPage = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* ✅ Page Header */}
      <PageHeader
        title="Project Detail"
        subtitle="Edwani Contracting"
        image="/projectdetail.jpg"
      />

      {/* ✅ Content Section */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ProjectDetail />
      </motion.section>
    </motion.div>
  );
};

export default ProjectDetailPage;
