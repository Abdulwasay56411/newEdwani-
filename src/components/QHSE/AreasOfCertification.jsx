import React from "react";
import {
  FaClipboardCheck,
  FaLeaf,
  FaUserShield,
  FaShieldAlt,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

const AreasOfCertification = () => {
  const primaryColor = "#2387C0";

  const certifications = [
    {
      icon: <FaClipboardCheck className="text-4xl" />,
      title: "ISO 9001",
      subtitle: "Quality Management System",
      description:
        "International standard for quality management systems ensuring consistent delivery of high-quality products and services.",
      features: [
        "Process-based quality management",
        "Continuous improvement framework",
        "Customer satisfaction focus",
        "Risk-based thinking approach",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "ISO 14001",
      subtitle: "Environmental Management System",
      description:
        "Framework for environmental management that helps organizations improve environmental performance through efficient resource use.",
      features: [
        "Environmental impact reduction",
        "Sustainable resource management",
        "Regulatory compliance assurance",
        "Environmental responsibility",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "ISO 45001",
      subtitle: "Occupational Health & Safety Management System",
      description:
        "International standard for occupational health and safety management systems to reduce workplace risks.",
      features: [
        "Workplace hazard prevention",
        "Employee health protection",
        "Safety performance improvement",
        "Legal compliance assurance",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Saudi Regulatory Compliance",
      subtitle: "Local Standards & Regulations",
      description:
        "Full compliance with all Saudi Arabian regulatory requirements and local industry standards.",
      features: [
        "Kingdom-wide compliance",
        "Local industry standards",
        "Government regulations",
        "Regional best practices",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const integrationFeatures = [
    {
      icon: <FaCheckCircle className="text-xl" />,
      text: "All certifications are maintained and regularly audited",
    },
    {
      icon: <FaCheckCircle className="text-xl" />,
      text: "Integrated management system approach",
    },
    {
      icon: <FaCheckCircle className="text-xl" />,
      text: "Continuous improvement and updates",
    },
    {
      icon: <FaCheckCircle className="text-xl" />,
      text: "Comprehensive documentation and records",
    },
  ];

  return (
    <div className="bg-white">
      {/* Main Heading Section - Only One Heading */}
      <section className="relative bg-white text-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Areas of Certification
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive certification portfolio ensures QHSE excellence
            across all operations, demonstrating our commitment to international
            standards and local regulatory compliance.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Icon & Title Section */}
                  <div
                    className={`bg-gradient-to-br ${cert.color} p-6 md:p-8 flex flex-col items-center justify-center md:w-2/5 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="text-white mb-4">{cert.icon}</div>
                    <h3 className="text-2xl font-bold text-white text-center">
                      {cert.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base text-center mt-2">
                      {cert.subtitle}
                    </p>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 md:w-3/5">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    <ul className="space-y-2">
                      {cert.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-700"
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
        </div>
      </section>

      {/* Integration & Excellence Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#2387C0] to-[#1a6a9c] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <div className="text-center mb-8">
                <FaAward className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Integrated QHSE Excellence
                </h2>
                <p className="text-lg opacity-95 leading-relaxed">
                  All certifications are maintained and integrated into our
                  operations to ensure comprehensive QHSE excellence across all
                  business activities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {integrationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-white/90 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-white/95 text-sm md:text-base">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Certification Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaClipboardCheck className="h-8 w-8 mx-auto mb-4 text-[#2387C0]" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 text-sm">
                  Consistent delivery of high-quality services meeting
                  international standards
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaShieldAlt className="h-8 w-8 mx-auto mb-4 text-[#2387C0]" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Risk Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Proactive identification and mitigation of operational risks
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <FaAward className="h-8 w-8 mx-auto mb-4 text-[#2387C0]" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Client Confidence
                </h3>
                <p className="text-gray-600 text-sm">
                  Demonstrated commitment to excellence and regulatory
                  compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasOfCertification;
