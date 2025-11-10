import React from "react";
import {
  FaLeaf,
  FaRecycle,
  FaShieldAlt,
  FaChartLine,
  FaHandHoldingHeart,
  FaBolt,
  FaClipboardCheck,
} from "react-icons/fa";

const EnvironmentalPolicy = () => {
  const primaryColor = "#2387C0";

  const policyPoints = [
    {
      icon: <FaLeaf className="text-3xl text-white" />,
      title: "Greener Environment",
      description:
        "Promoting a greener and cleaner environment for all through sustainable practices and eco-friendly initiatives.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-white" />,
      title: "Pollution Prevention",
      description:
        "Preventing pollution across all areas of operation through comprehensive environmental controls.",
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-white" />,
      title: "Regulatory Compliance",
      description:
        "Ensuring awareness of and compliance with all applicable statutory regulations and requirements.",
    },
    {
      icon: <FaBolt className="text-3xl text-white" />,
      title: "Resource Conservation",
      description:
        "Minimizing environmental impact through conservation of natural resources and energy.",
    },
    {
      icon: <FaChartLine className="text-3xl text-white" />,
      title: "Continuous Improvement",
      description:
        "Continually improving our Environmental Management System for better environmental performance.",
    },
    {
      icon: <FaRecycle className="text-3xl text-white" />,
      title: "Waste Management",
      description:
        "Reducing waste and maximizing recycling initiatives across all operations.",
    },
  ];

  const commitments = [
    {
      icon: <FaHandHoldingHeart className="text-2xl" />,
      text: "Environmental preservation is regarded as a paramount priority in all operations",
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      text: "Protecting natural environments and minimizing adverse effects",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      text: "Consideration for environmental protection integrated into every process",
    },
  ];

  return (
    <div className="bg-white">
      {/* Main Heading Section - Exact same as AwardsRecognition */}
      <section className="relative bg-white text-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Environmental Policy
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Edwani Contracting is committed to integrating environmental
            protection into every process and task, ensuring a sustainable
            future for all.
          </p>
        </div>
      </section>
      {/* Policy Points Section - Similar to Award Categories */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {policyPoints.slice(0, 3).map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header Section */}
                <div className="bg-gradient-to-br from-[#2387C0] to-[#1a6a9c] p-6 h-50 flex flex-col justify-center items-center md:p-8 text-white text-center group-hover:scale-105 transition-transform duration-300">
                  <div className="mb-2">{point.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {point.title}
                  </h3>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Second row of policy points */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
            {policyPoints.slice(3, 6).map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header Section */}
                <div className="bg-gradient-to-br from-[#2387C0] to-[#1a6a9c]  h-50 px-6 md:p-8 text-white text-center  flex flex-col justify-center items-center group-hover:scale-105 transition-transform duration-300">
                  <div className="mb-2">{point.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {point.title}
                  </h3>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Commitments Section - Similar to Recent Achievements */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#2387C0] to-[#1a6a9c] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <div className="text-center mb-8">
                <FaLeaf className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Environmental Commitment
                </h2>
                <p className="text-lg opacity-95 leading-relaxed">
                  At Edwani Contracting, consideration for the protection of the
                  environment is integrated into every process and task our
                  employees undertake.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex  space-x-3">
                    <div className="text-white/90 flex-shrink-0">
                      {commitment.icon}
                    </div>
                    <span className="text-white/95  text-sm md:text-base">
                      {commitment.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Focus Areas - Similar to Recognition Partners */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <FaRecycle className="h-12 w-12 mx-auto mb-4 text-[#2387C0]" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Environmental Focus Areas
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive environmental strategy covers all aspects of
                sustainable operations and environmental stewardship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policyPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {point.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Commitment Section - Similar to Excellence Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200">
              <FaLeaf className="h-16 w-16 mx-auto mb-6 text-[#2387C0]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Commitment to Environmental Excellence
              </h2>
              <div className="w-24 h-1 bg-[#2387C0] mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are committed to operating in an environmentally responsible
                manner, continuously improving our environmental performance,
                and contributing to a sustainable future through all our
                business activities.
              </p>
              <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
                <FaLeaf className="h-4 w-4 text-[#2387C0]" />
                <span>
                  Dedicated to creating a positive environmental legacy for
                  future generations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalPolicy;
