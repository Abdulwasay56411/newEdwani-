import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h2>
        </div>
      </div>
    );
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.galleryImages.length - 1 : prev - 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.9 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-sky-100/20"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.header
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 md:h-20">
            {/* Project Title - Perfectly Centered */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Image */}
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 ${
                isFullscreen ? "fixed inset-4 z-50 bg-black" : "aspect-[4/3]"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={project.galleryImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className={`w-full h-full object-cover ${
                    isFullscreen ? "cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  onClick={toggleFullscreen}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <motion.button
                  onClick={handlePrevImage}
                  className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="w-5 h-5" />
                </motion.button>

                <motion.button
                  onClick={handleNextImage}
                  className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Fullscreen Toggle */}
              <motion.button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isFullscreen ? (
                  <FaCompress className="w-4 h-4" />
                ) : (
                  <FaExpand className="w-4 h-4" />
                )}
              </motion.button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentImageIndex + 1} / {project.galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div
              className={`grid gap-3 ${
                project.galleryImages.length === 1
                  ? "grid-cols-1"
                  : project.galleryImages.length === 2
                  ? "grid-cols-2"
                  : project.galleryImages.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
              }`}
            >
              {project.galleryImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    currentImageIndex === index
                      ? "border-[#2387C0] shadow-lg scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Project Overview */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200/50">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Project Overview
              </motion.h2>

              <motion.p
                className="text-gray-700 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {project.description}
              </motion.p>

              {/* Project Highlights */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  "Quality Assurance",
                  "Timely Delivery",
                  "Expert Team",
                  "Client Satisfaction",
                ].map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[#2387C0] rounded-full"></div>
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Additional Information */}
            <motion.div
              className="bg-gradient-to-br from-[#2387C0] to-sky-600 rounded-3xl p-6 md:p-8 text-white shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Project Excellence
              </h3>
              <p className="text-blue-100 leading-relaxed">
                This project showcases our commitment to delivering exceptional
                results through innovative solutions and meticulous attention to
                detail. Our team ensures every aspect meets the highest
                standards of quality and safety.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
