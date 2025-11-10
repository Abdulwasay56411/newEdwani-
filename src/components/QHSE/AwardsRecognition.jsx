import React from "react";
import {
  FaTrophy,
  FaAward,
  FaShieldAlt,
  FaLeaf,
  FaHandshake,
  FaStar,
  FaMedal,
  FaRibbon,
} from "react-icons/fa";

const AwardsRecognition = () => {
  const primaryColor = "#2387C0";

  const awardCategories = [
    {
      icon: <FaTrophy className="text-4xl" />,
      title: "Excellence in Construction & Safety",
      description:
        "Recognition for outstanding performance in construction excellence and adherence to the highest safety standards.",
      awards: [
        "Best Construction Safety Practices Award",
        "Excellence in Project Execution",
        "Innovation in Construction Methodology",
        "Zero Accident Achievement Awards",
      ],
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Environmental Management & Sustainability",
      description:
        "Awards honoring our commitment to environmental protection and sustainable construction practices.",
      awards: [
        "Green Construction Initiative Award",
        "Sustainable Project Development",
        "Environmental Excellence Certification",
        "Eco-Friendly Innovation Recognition",
      ],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Client & Partner Appreciation",
      description:
        "Recognition from clients and partners for exceptional quality, timely delivery, and professional collaboration.",
      awards: [
        "Client Satisfaction Excellence Awards",
        "On-Time Project Delivery Recognition",
        "Quality Excellence Certificates",
        "Partnership Achievement Awards",
      ],
      color: "from-blue-500 to-blue-600",
    },
  ];

  const recentAchievements = [
    {
      icon: <FaStar className="text-xl" />,
      text: "Multiple zero-accident project completions",
    },
    {
      icon: <FaStar className="text-xl" />,
      text: "Consistent environmental compliance ratings",
    },
    {
      icon: <FaStar className="text-xl" />,
      text: "100% on-time project delivery record",
    },
    {
      icon: <FaStar className="text-xl" />,
      text: "Exceptional client satisfaction scores",
    },
  ];

  const recognitionPartners = [
    {
      name: "Ministry of Municipal and Rural Affairs",
      type: "Government Recognition",
    },
    {
      name: "Saudi Contractors Authority",
      type: "Industry Awards",
    },
    {
      name: "Environmental Protection Agency",
      type: "Sustainability Certifications",
    },
    {
      name: "Major Corporate Clients",
      type: "Client Appreciation",
    },
  ];

  return (
    <div className="bg-white">
      {/* Main Heading Section - Only One Heading */}
      <section className="relative bg-white text-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Awards & Recognition
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence in construction, safety, environmental
            management, and client satisfaction through industry recognition and
            awards.
          </p>
        </div>
      </section>

      {/* Award Categories Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {awardCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header Section */}
                <div
                  className={`bg-gradient-to-br ${category.color} h-60 flex flex-col items-center justify-center p-6 md:p-8 text-white text-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {category.title}
                  </h3>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.awards.map((award, awardIndex) => (
                      <div
                        key={awardIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300"
                      >
                        <FaMedal className="h-4 w-4 text-amber-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">
                          {award}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#2387C0] to-[#1a6a9c] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <div className="text-center mb-8">
                <FaAward className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Recent Achievements
                </h2>
                <p className="text-lg opacity-95 leading-relaxed">
                  Our commitment to excellence is reflected in our consistent
                  performance and recognition across multiple project domains.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-white/90 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <span className="text-white/95 text-sm md:text-base">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Partners Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <FaRibbon className="h-12 w-12 mx-auto mb-4 text-[#2387C0]" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Recognition From
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our achievements are recognized by leading government bodies,
                industry authorities, and valued clients across Saudi Arabia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recognitionPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#2387C0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {partner.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{partner.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Excellence Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200">
              <FaTrophy className="h-16 w-16 mx-auto mb-6 text-amber-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Continuing the Legacy of Excellence
              </h2>
              <div className="w-24 h-1 bg-[#2387C0] mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                These awards and recognitions motivate us to maintain our high
                standards and continue delivering exceptional results for our
                clients and partners.
              </p>
              <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
                <FaStar className="h-4 w-4 text-amber-500" />
                <span>
                  Committed to setting new benchmarks in construction excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsRecognition;
