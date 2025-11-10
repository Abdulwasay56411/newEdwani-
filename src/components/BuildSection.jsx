import React from "react";
import { motion } from "framer-motion";

const BuildSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-16 bg-[#F8FAFC] overflow-hidden">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mb-8"
      >
        <h1
          className="text-slate-800 font-semibold font-['Poppins'] leading-snug
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Let us help you build.
        </h1>

        <p
          className="text-slate-700 font-normal font-['Poppins'] mt-4
          text-[10px] sm:text-xs md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Over 17 years of experience in creating spaces that positively impact
          people’s lives
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full flex justify-center"
      >
        <img
          src="/build4.jpg"
          alt="Build Banner"
          className="rounded-2xl shadow-lg w-full max-w-[1269px] h-auto sm:h-[250px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </motion.div>
    </section>
  );
};

export default BuildSection;
