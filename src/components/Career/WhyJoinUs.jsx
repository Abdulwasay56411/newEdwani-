import React from "react";
import {
  FaHardHat,
  FaChartLine,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaShieldAlt,
  FaUserTie,
  FaTools,
  FaHome,
  FaBus,
} from "react-icons/fa";

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: <FaHardHat className="text-6xl" />,
      title: "Safety First",
      description:
        "Industry-standard PPE, on-site safety officers, and regular training programs.",
      features: [
        "Industry-standard PPE",
        "On-site safety officers",
        "Regular training programs",
      ],
      color: "from-sky-400 to-cyan-600",
    },
    {
      icon: <FaChartLine className="text-6xl" />,
      title: "Growth Opportunities",
      description:
        "Clear paths for progression from field level to management positions.",
      features: [
        "Field to management progression",
        "Career path planning",
        "Leadership development",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaChalkboardTeacher className="text-6xl" />,
      title: "Training Programs",
      description:
        "Ongoing hands-on workshops for construction, electrical, and mechanical teams.",
      features: [
        "Hands-on workshops",
        "Construction training",
        "Electrical & mechanical programs",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaMoneyBillWave className="text-6xl" />,
      title: "Rewards and Benefits",
      description:
        "Competitive salaries, performance bonuses, accommodation, and transport facilities.",
      features: [
        "Competitive salaries",
        "Performance bonuses",
        "Accommodation & transport",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const additionalBenefits = [
    {
      icon: <FaShieldAlt className="text-xl" />,
      text: "Health Insurance",
      fullText: "Health & Life Insurance",
    },
    {
      icon: <FaUserTie className="text-xl" />,
      text: "Certifications",
      fullText: "Professional Certifications",
    },
    {
      icon: <FaTools className="text-xl" />,
      text: "Modern Equipment",
      fullText: "Modern Equipment",
    },
    {
      icon: <FaHome className="text-xl" />,
      text: "Accommodation",
      fullText: "Company Accommodation",
    },
    {
      icon: <FaBus className="text-xl" />,
      text: "Transport",
      fullText: "Transport Facilities",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Why Join Edwani Contracting?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional benefits and opportunities that make Edwani
            Contracting the preferred choice for construction professionals in
            Saudi Arabia.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Icon Section */}
                <div
                  className={`bg-gradient-to-br ${benefit.color} p-6 md:p-8 flex items-center justify-center md:w-1/3 group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-white">{benefit.icon}</div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 md:w-2/3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm sm:text-base text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#2387C0] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits - Fixed for Mobile */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mx-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#2387C0] mb-6 sm:mb-8 md:mb-12">
            Additional Perks & Benefits
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-[#2387C0] hover:text-white transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2387C0] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <div className="text-white group-hover:text-[#2387C0] text-sm sm:text-base">
                    {benefit.icon}
                  </div>
                </div>
                {/* Mobile: Short text, Desktop: Full text */}
                <p className="text-xs sm:text-sm font-medium group-hover:text-white leading-tight sm:leading-normal">
                  <span className="sm:hidden">{benefit.text}</span>
                  <span className="hidden sm:inline">{benefit.fullText}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
