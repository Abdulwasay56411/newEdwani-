import React from "react";
import {
  FaShieldAlt,
  FaChartLine,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaUserShield,
  FaFirstAid,
  FaHardHat,
  FaFireExtinguisher,
  FaEye,
  FaHandsHelping,
} from "react-icons/fa";

const HealthSafetyPolicy = () => {
  const primaryColor = "#2387C0";

  const commitments = [
    {
      icon: <FaUserShield className="text-3xl" />,
      title: "Safety Culture",
      description:
        "Promoting a safety-conscious culture among employees, sub-contractors, and business partners to prevent accidents, injuries, and occupational illnesses.",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Continuous Improvement",
      description:
        "Continuously improving our safety practices and procedures through regular audits and feedback systems.",
    },
    {
      icon: <FaClipboardCheck className="text-3xl" />,
      title: "Regulatory Compliance",
      description:
        "Ensuring that all HSE controls comply with applicable regulatory and legal requirements across all operations.",
    },
    {
      icon: <FaExclamationTriangle className="text-3xl" />,
      title: "Risk Management",
      description:
        "Eliminating or reducing risks from our activities to acceptable levels through comprehensive assessment protocols.",
    },
  ];

  const goals = [
    {
      icon: <FaHardHat className="text-4xl" />,
      number: "ZERO",
      title: "ACCIDENTS",
      subtitle: "Workplace Incidents",
    },
    {
      icon: <FaFirstAid className="text-4xl" />,
      number: "ZERO",
      title: "INJURIES",
      subtitle: "Employee Safety",
    },
    {
      icon: <FaFireExtinguisher className="text-4xl" />,
      number: "ZERO",
      title: "PROPERTY DAMAGE",
      subtitle: "Asset Protection",
    },
  ];

  const safetyPractices = [
    {
      icon: <FaClipboardCheck className="text-xl" />,
      text: "Regular safety training and workshops",
    },
    {
      icon: <FaExclamationTriangle className="text-xl" />,
      text: "Comprehensive risk assessments",
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      text: "Emergency preparedness drills",
    },
    {
      icon: <FaEye className="text-xl" />,
      text: "Continuous safety monitoring",
    },
    {
      icon: <FaUserShield className="text-xl" />,
      text: "Employee safety empowerment",
    },
    {
      icon: <FaHandsHelping className="text-xl" />,
      text: "Proactive hazard identification",
    },
  ];
  return (
    <div className="bg-white">
      {/* Main Heading Section - Only One Heading */}
      <section className="relative bg-white text-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Health & Safety Policy
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Edwani Contracting conducts all activities in a manner that ensures
            the safety, health, and security of its employees while protecting
            company assets.
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/3 bg-[#2387C0]  p-6 md:p-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-white">{commitment.icon}</div>
                  </div>
                  <div className="p-6 md:p-8 md:w-2/3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {goal.icon}
                  </div>
                </div>
                <div
                  className="text-2xl  lg:text-3xl font-bold mb-2 tracking-tight"
                  style={{ color: primaryColor }}
                >
                  {goal.number}
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  {goal.title}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {goal.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Safety Message */}
          <div className="mt-12 md:mt-16 text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#2387C0] to-[#1a6a9c] rounded-2xl p-6 md:p-8 lg:p-12 text-white shadow-2xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                Safety First, Always
              </h3>
              <p className="text-base md:text-lg leading-relaxed opacity-95">
                At Edwani Contracting, we believe that every task, no matter how
                small, deserves the highest level of safety consideration. Our
                commitment to zero incidents reflects our dedication to
                protecting our most valuable asset: our people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Culture Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                  We empower our employees to take ownership of safety and
                  actively participate in creating a secure working environment.
                </p>

                {/* Safety Practices Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {safetyPractices.map((practice, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300"
                    >
                      <div className="text-[#2387C0] flex-shrink-0">
                        {practice.icon}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {practice.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/safety.jpg"
                    alt="Safety First Culture"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthSafetyPolicy;
