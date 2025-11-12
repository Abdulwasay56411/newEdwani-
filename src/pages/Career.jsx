import React, { useState } from "react";
import { motion } from "framer-motion";

import PageHeader from "../components/PageHeader"; // ✅ Reusable Header

import WorkCulture from "../components/Career/WorkCulture";
import WhyJoinUs from "../components/Career/WhyJoinUs";
import CurrentOpenings from "../components/Career/CurrentOpenings";
import EmployeeVoicesAndBenefits from "../components/Career/EmployeeVoicesAndBenefits";
import ApplyNow from "../components/Career/ApplyNow";
import TransparentNavbar from "../components/TransparentNavbar";

// ===== Framer Motion Variants =====
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Career = () => {
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
      <TransparentNavbar />
      {/* ✅ Reusable Page Header */}
      <div className="flex flex-wrap pt-5 lg:flex-nowrap text-center lg:text-left items-center justify-center gap-10 mb-10 px-4">
        <PageHeader
          title="Career"
          subHeading="CAREERS THAT SHAPE THE FUTURE"
          subtitle="Join our team and be part of a dynamic, innovative and growth-driven organization. We are always looking for talented and motivated individuals who are passionate about making an impact. At our company, you’ll find opportunities to grow professionally, work on challenging projects and contribute to a culture of excellence, collaboration and continuous learning. Your skills, ideas and dedication are valued, and together we build solutions that shape the future of construction and infrastructure."
        />
        <div className="relative mt-10 mx-2 inline-block">
          {isImageLoaded && (
            <div className="absolute top-3 -left-2 w-full mx-2 max-w-[420px] h-[311px] bg-[#E7E7E7] rounded-3xl -rotate-4 "></div>
          )}
          <img
            className="relative w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg rotate-1"
            src="/careerbg.jpg"
            onLoad={handleImageLoad}
          />
        </div>
      </div>

      {/* ===== MAIN SECTIONS ===== */}

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F9FCFE]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <WorkCulture />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <WhyJoinUs />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F9FCFE]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <CurrentOpenings />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <EmployeeVoicesAndBenefits />
      </motion.section>

      <motion.section
        id="apply-now-section"
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F9FCFE]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ApplyNow />
      </motion.section>
    </motion.div>
  );
};

export default Career;
