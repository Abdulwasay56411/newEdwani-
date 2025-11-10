import React from "react";
import { motion } from "framer-motion";

const OurClients = () => {
  const primaryColor = "#2387C0";

  // Client logos data - replace with your actual client data
  const clients = [
    {
      id: 1,
      name: "Royal Commission for Jubail and Yanbu",
      logo: "/logo1.png",
    },
    {
      id: 2,
      name: "Saudi Aramco",
      logo: "/logo2.png",
    },
    {
      id: 3,
      name: "NEOM",
      logo: "/3.png",
    },
    {
      id: 4,
      name: "SABIC",
      logo: "/4.png",
    },
    {
      id: 5,
      name: "Ministry of Defense",
      logo: "/15.png",
    },
    {
      id: 6,
      name: "Ministry of Interior",
      logo: "/13.png",
    },
    {
      id: 7,
      name: "Red Sea Global",
      logo: "/7.png",
    },
    {
      id: 8,
      name: "Diriyah Gate Development Authority",
      logo: "/8.png",
    },
    {
      id: 9,
      name: "Royal Commission for AlUla",
      logo: "/9.png",
    },
    {
      id: 10,
      name: "Public Investment Fund",
      logo: "/10.png",
    },
    {
      id: 11,
      name: "Ministry of Housing",
      logo: "/12.png",
    },
    {
      id: 12,
      name: "Saudi Electricity Company",
      logo: "/14.png",
    },
    {
      id: 13,
      name: "National Water Company",
      logo: "/15.png",
    },
    {
      id: 14,
      name: "Saudi Arabian Airlines",
      logo: "/2.png",
    },
    {
      id: 15,
      name: "King Abdullah University",
      logo: "/1.png",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex flex-col items-center justify-center space-y-4 mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#2387C0] to-sky-400" />
            <motion.span
              className="text-[#2387C0] text-sm md:text-base font-semibold tracking-widest uppercase
                         bg-blue-50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-100 -mt-1"
              variants={fadeUp}
            >
              Our Valued Customers
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-lg sm:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 -mt-6">
            Trusted by industry leaders and government organizations across
            Saudi Arabia
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={logoVariants}
                whileHover="hover"
                className="flex items-center justify-center"
              >
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-100 sm:border-gray-200 p-3 sm:p-4 lg:p-6 aspect-square flex items-center justify-center w-full transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl mx-auto max-w-[140px] sm:max-w-none">
                  <div className="w-full h-full flex items-center justify-center p-1 sm:p-2">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain transition-all duration-300"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                      }}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/120x80/f8fafc/2387C0?text=${
                          client.name.split(" ")[0]
                        }`;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Building Trust Through Excellence
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { number: "15+", label: "Valued Clients" },
                { number: "50+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "10+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#2387C0] mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium px-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
