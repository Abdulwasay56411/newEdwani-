import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { FaHandshake } from "react-icons/fa";

const QualityPolicy = () => {
  const primaryColor = "#2387C0";

  const policyPoints = [
    {
      icon: ClipboardDocumentCheckIcon,
      text: "Understanding that quality means full adherence to agreed client requirements and standards.",
    },
    {
      icon: UsersIcon,
      text: "Recognizing that quality is everyone's responsibility across the organization.",
    },
    {
      icon: ClockIcon,
      text: "Giving our best effort every time, ensuring on-time completion of jobs without compromising quality or safety.",
    },
    {
      icon: AcademicCapIcon,
      text: "Continuously improving skills and expertise through practical experience and employee training.",
    },
    {
      icon: ShieldCheckIcon,
      text: "Operating in a safe and healthy environment at all sites.",
    },
    {
      icon: FaHandshake,
      text: "Fulfilling promises and commitments with every client.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Matching AreasOfCertification Style */}
      <section className="relative bg-white text-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Quality Policy
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto italic">
            "To serve our clients and maintain our position as a leader in our
            areas of operations."
          </p>
        </div>
      </section>

      {/* We Achieve This By Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2387C0] mb-4">
              We Achieve This By:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {policyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center p-6 md:p-8"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <point.icon
                    className="h-8 w-8"
                    style={{ color: primaryColor }}
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              At Edwani Contracting, we are all dedicated to this mission. Our
              reputation depends on teamwork and consistent client satisfaction,
              as the most important person in our business is our:
            </p>

            <div className="text-center mb-8 md:mb-12">
              <div
                className="text-4xl md:text-6xl font-bold mb-4"
                style={{ color: primaryColor }}
              >
                CLIENT
              </div>
              <p className="text-lg md:text-xl font-semibold text-gray-700">
                Our First Priority
              </p>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                Your satisfaction drives our success
              </p>
            </div>

            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <UsersIcon
                    className="h-8 w-8"
                    style={{ color: primaryColor }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Teamwork</h3>
                <p className="text-gray-600 text-sm">
                  Collaborative excellence across all departments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <FaHandshake
                    className="h-8 w-8"
                    style={{ color: primaryColor }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Consistency
                </h3>
                <p className="text-gray-600 text-sm">
                  Reliable service delivery every time
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon
                    className="h-8 w-8"
                    style={{ color: primaryColor }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dedication</h3>
                <p className="text-gray-600 text-sm">
                  Committed to our mission and values
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;
