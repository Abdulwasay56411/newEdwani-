import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Project Manager, Yasref",
      text: "Edwani contracting Establishment delivered our project on time with outstanding quality. Their professionalism and attention to detail exceeded our expectations, making them a reliable partner for complex construction projects.",
      name: "Lorri Warf",
      image: "/test1.jpg",
      company: "YASREF",
    },
    {
      title: "RJ Mastoura Project",
      text: "From planning to execution, their team showed remarkable expertise. We are highly satisfied with the results and timely delivery. The quality of work and commitment to deadlines was exceptional throughout the project lifecycle.",
      name: "David Elson",
      image: "/test2.jpg",
      company: "RJ Mastoura",
    },
    {
      title: "China Harbour Bridge Project",
      text: "A trusted partner in construction and equipment services. Their commitment to safety, quality, and reliability makes them our first choice. Their team's technical expertise and problem-solving capabilities are truly commendable.",
      name: "Ricky Smith",
      image: "/test3.jpg",
      company: "China Harbour",
    },
  ];

  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center mb-16 lg:mb-20 text-center"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-2 h-8 bg-[#2387C0] rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-[#2387C0] tracking-wider uppercase">
              Client Voices
            </span>
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A1128] mb-6 leading-tight">
            What Our{" "}
            <span className="text-[#2387C0] relative">Clients Say</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
            Discover why industry leaders trust edwani contracting  for their construction
            and infrastructure projects through their own words and experiences.
          </p>
        </motion.div>

        {/* Enhanced Professional Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col group"
            >
              {/* Enhanced Testimonial Card */}
              <div className="flex-1 flex flex-col">
                {/* Main Content Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(35, 135, 192, 0.25)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative bg-white rounded-2xl shadow-lg p-6 lg:p-8 flex flex-col flex-1 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Quote Icon */}
                  <div className="mb-4 lg:mb-6">
                    <div className="w-12 h-12 bg-[#2387C0] rounded-xl flex items-center justify-center shadow-lg">
                      <FaQuoteLeft className="text-white text-lg" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#0A1128] text-lg lg:text-xl font-bold mb-3 lg:mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    className="text-gray-600 text-base lg:text-lg leading-relaxed flex-1 font-light mb-6 lg:mb-8"
                  >
                    "{item.text}"
                  </motion.p>

                  {/* Enhanced Pointer */}
                  <div className="absolute left-8 bottom-0 translate-y-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-white drop-shadow-sm" />
                </motion.div>

                {/* Enhanced Client Info */}
                <motion.div
                  variants={imageVariants}
                  className="flex items-center gap-4 mt-8 px-2"
                >
                  {/* Client Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-[#2387C0] to-blue-600 p-0.5 shadow-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </motion.div>

                  {/* Client Details */}
                  <div className="flex-1 text-left">
                    <h4 className="text-[#0A1128] text-lg lg:text-xl font-bold leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base font-medium">
                      {item.company}
                    </p>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-gray-600 text-lg lg:text-xl mb-6 font-light">
            Ready to start your next project?
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(35, 135, 192, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2387C0] text-white px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-semibold text-lg lg:text-xl shadow-lg hover:bg-[#1279b5]  transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
