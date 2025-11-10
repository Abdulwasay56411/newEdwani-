import React from "react";
import { motion } from "framer-motion";
import TransparentNavbar from "../components/TransparentNavbar";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import Services2 from "../components/Services";
import LastSection from "../components/Services/LastSection";
import MechanicalServices from "../components/MechanicalServices";

const ConstructionServices = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="relative">
        {/* Background with Navbar inside */}
        <div
          className="relative w-full bg-cover bg-center h-[500px] md:min-h-screen flex flex-col"
          style={{
            backgroundImage: `url(/bgservices.jpg)`,
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#2387C0]/60"></div>

          {/* Navbar */}
          <div className="w-full relative z-1000">
            <TransparentNavbar />
          </div>

          {/* Animated Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex justify-center items-center relative z-10"
          >
            <div
              className="flex flex-col justify-center items-center text-center 
                        bg-white/80 backdrop-blur-lg 
                        rounded-md md:rounded-xl 
                        shadow-[0px_2.9px_3.3px_0px_rgba(0,0,0,0.06),0px_7.2px_9.4px_0px_rgba(0,0,0,0.05)] 
                        w-64 h-24 md:w-[500px] md:h-[180px] lg:w-[732px] lg:h-60 p-4 md:p-8 lg:p-12
                        -mt-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[#2387C0] font-extrabold text-lg md:text-3xl lg:text-[48px] leading-tight"
              >
                Construction Services
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-stone-900 font-semibold text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-snug mt-2 break-words"
              >
                 Edwani Contracting 
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Animated Content Sections */}
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
        className=" md:px-16 lg:px-24 py-8 md:py-10"
      >
        <Services2 />
      </motion.section>
      =
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <LastSection />
      </motion.section>
    </div>
  );
};

export default ConstructionServices;
