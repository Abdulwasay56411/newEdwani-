import React, { useState } from "react";
import { motion } from "framer-motion";
import OurClients from "../components/About/OurClients";
import PageHeader from "../components/PageHeader"; // ✅ Import Reusable Header
import TransparentNavbar from "../components/TransparentNavbar";

const Customers = () => {

   const [isImageLoaded, setIsImageLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setIsImageLoaded(true);
    };

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
      <div className="flex flex-wrap pt-5 lg:flex-nowrap text-center lg:text-left items-center justify-center gap-10 mb-10 px-4">
        <PageHeader
          title="Our Customers"
          subHeading="BUILDING LASTING PARTNERSHIPS"
          subtitle="Trusted by a diverse range of clients, we deliver innovative and reliable construction and infrastructure solutions that exceed expectations. Our commitment to quality, safety and excellence has earned us long-lasting partnerships with leading organizations, businesses and institutions. Every project we undertake reflects our dedication to creating impactful, sustainable results and strengthening the success of our valued customers."
        />
        <div className="relative mt-10 mx-2 inline-block">
       {isImageLoaded &&(
         <div className="absolute top-3 -left-2 w-full mx-2 max-w-[420px] h-[311px] bg-[#E7E7E7] rounded-3xl -rotate-4 "></div>
       )}
          <img
            className="relative w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg rotate-1"
            src="/bgservices.png"
            onLoad={handleImageLoad}
          />
        </div>
      </div>

      {/* Customers / Clients Section */}
      <OurClients />
    </motion.div>
  );
};

export default Customers;
