import React from "react";
import {
  ClipboardDocumentCheckIcon,
  ExclamationCircleIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/16/solid";
import { BiLeaf, BiTargetLock } from "react-icons/bi";
import { TbShieldFilled } from "react-icons/tb";
import { FaLeaf } from "react-icons/fa";

const QHSECommitment = () => {
  const primaryColor = "#2387C0";
 
  const pillars = [
    {
      icon: TbShieldFilled,
      title: "Protecting Health & Safety",
      description:
        "Safeguarding employees, clients, and third parties through comprehensive safety protocols and training.",
      features: [
        "Personal responsibility for safety at all levels",
        "Learning from near-misses and unsafe practices",
        "Line management accountability and facility integrity",
      ],
    },
    {
      icon: FaLeaf,
      title: "Environmental Protection",
      description:
        "Minimizing environmental impact in all operations through sustainable practices.",
      features: [
        "Environmental assessments aligned with ISO 14001",
        "Corporate Social Responsibility initiatives",
        "Minimizing environmental footprint",
      ],
    },
    {
      icon: TrophyIcon,
      title: "Quality Improvement",
      description:
        "Continuously enhancing the performance and delivery of our services.",
      features: [
        "ISO 9001 certified quality management",
        "Structured processes and continuous improvement",
        "Client-focused results",
      ],
    },
  ];

  const healthSafetyItems = [
    {
      icon: TbShieldFilled,
      title: "Health",
      items: [
        "Effective control of occupational health risks",
        "Awareness programs to promote healthy lifestyles",
      ],
    },
    {
      icon: ExclamationCircleIcon,
      title: "Safety",
      items: [
        "Personal responsibility for safety at all levels",
        "Learning from near-misses and unsafe practices",
        "Line management accountability and operational safety",
      ],
    },
    {
      icon: FaLeaf,
      title: "Environment",
      items: [
        "Environmental management systems aligned with ISO 14001",
        "Corporate Social Responsibility initiatives",
        "Minimizing environmental impact",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Main Heading Section - Only One Heading */}
      <section className="relative bg-white text-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Our QHSE Commitment
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            At Edwani Contracting, our long-term success depends on our
            ability to continually improve while protecting our people, clients,
            and the environment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-3 mt-6 md:mt-8">
            <div className="flex items-center bg-[#2387C0] text-white rounded-lg px-4 py-2 w-full sm:w-auto justify-center">
              <BiTargetLock className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="text-xs md:text-sm font-medium">
                Zero Errors
              </span>
            </div>
            <div className="flex items-center bg-[#2387C0] text-white rounded-lg px-4 py-2 w-full sm:w-auto justify-center">
              <TbShieldFilled className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="text-xs md:text-sm font-medium">
                Zero Incidents
              </span>
            </div>
            <div className="flex items-center bg-[#2387C0] text-white rounded-lg px-4 py-2 w-full sm:w-auto justify-center">
              <TrophyIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="text-xs md:text-sm font-medium">
                Superior Quality
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 md:p-8"
              >
                <div
                  className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <pillar.icon
                    className="h-7 w-7"
                    style={{ color: primaryColor }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3 mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE Details Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                Certified in alignment with international HSE standards, our
                policies are implemented across all Edwani Contracting operations to
                ensure the highest levels of protection and sustainability.
              </p>

              <div className="space-y-4 md:space-y-6">
                {healthSafetyItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <item.icon
                        className="h-6 w-6"
                        style={{ color: primaryColor }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <ul className="space-y-1">
                        {item.items.map((listItem, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 text-sm">
                            • {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl p-6 md:p-8 border border-gray-200"
              style={{ backgroundColor: `${primaryColor}08` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Performance & Communication
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ChartBarIcon
                    className="h-6 w-6 mr-3 flex-shrink-0"
                    style={{ color: primaryColor }}
                  />
                  <span className="text-gray-700 text-sm">
                    Monitoring through audits and reporting
                  </span>
                </div>
                <div className="flex items-center">
                  <UsersIcon
                    className="h-6 w-6 mr-3 flex-shrink-0"
                    style={{ color: primaryColor }}
                  />
                  <span className="text-gray-700 text-sm">
                    Regular HSE conferences and forums
                  </span>
                </div>
                <div className="flex items-center">
                  <ClipboardDocumentCheckIcon
                    className="h-6 w-6 mr-3 flex-shrink-0"
                    style={{ color: primaryColor }}
                  />
                  <span className="text-gray-700 text-sm">
                    Multilingual communication for full compliance
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-base">
                  Certifications & Standards
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${primaryColor}15`,
                      color: primaryColor,
                    }}
                  >
                    ISO 9001
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${primaryColor}15`,
                      color: primaryColor,
                    }}
                  >
                    ISO 14001
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${primaryColor}15`,
                      color: primaryColor,
                    }}
                  >
                    International HSE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambition Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <BiTargetLock className="h-12 w-12 mx-auto mb-4 text-[#2387C0]" />
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Edwani Contracting strives to exceed client expectations by
              delivering the highest level of service quality while maintaining
              a proactive approach to QHSE. We integrate continuous improvement,
              accountability, and professional excellence into all processes,
              ensuring sustainable success and client satisfaction.
            </p>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
              <p className="text-lg md:text-xl italic leading-relaxed text-gray-700">
                "The QHSE policy is integrated at all levels of the organization
                and is the responsibility of management, supported by all
                staff."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QHSECommitment;
