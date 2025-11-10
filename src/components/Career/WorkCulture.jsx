import React from "react";
import {
  FaShieldAlt,
  FaBook,
  FaRocket,
  FaTrophy,
  FaHandshake,
  FaUsers,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const WorkCulture = () => {
  const culturePoints = [
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Safe & Supportive Environment",
      description: "A safe and supportive work environment",
    },
    {
      icon: <FaBook className="text-xl" />,
      title: "Continuous Development",
      description: "Continuous technical and professional development",
    },
    {
      icon: <FaRocket className="text-xl" />,
      title: "Career Advancement",
      description: "Opportunities for career advancement across departments",
    },
    {
      icon: <FaTrophy className="text-xl" />,
      title: "Performance Recognition",
      description: "Recognition for performance and teamwork",
    },
    {
      icon: <FaHandshake className="text-xl" />,
      title: "Collaboration",
      description:
        "Collaboration with experienced professionals across the Kingdom",
    },
  ];

  const cultureHighlights = [
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Teamwork Focused",
      description: "Collaborative environment that values every team member",
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Learning Culture",
      description: "Continuous professional development opportunities",
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Excellence Driven",
      description: "Commitment to quality in every project we undertake",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Our Work Culture
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <div className="mb-6 md:mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                Our success begins with our people. At Edwani, every project is
                powered by dedicated engineers, technicians, and site experts
                who share a single vision of quality and integrity.
              </p>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2387C0] mb-4 md:mb-6">
                Life at Edwani Contracting means:
              </h3>
            </div>

            {/* Culture Points */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {culturePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 group transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#2387C0] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {point.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                      {point.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-[#2387C0] to-blue-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 flex items-center justify-center relative">
                {/* Background Image with Fallback */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <img
                    src="/careerbg.jpg"
                    alt="Al-Edwani Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                  {/* Fallback Content */}
                  <div className="text-center text-white p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center hidden">
                    <FaUsers className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 opacity-80" />
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                      Team Collaboration
                    </p>
                    <p className="text-blue-100 text-sm sm:text-base">
                      Our dedicated team at work
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 border-l-4 border-[#2387C0] z-10">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#2387C0]">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    Employee Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Culture Highlights */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cultureHighlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 rounded-lg bg-gray-50 hover:bg-[#2387C0] hover:text-white transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 shadow-md hover:shadow-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#2387C0] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <div className="text-white group-hover:text-[#2387C0]">
                  {highlight.icon}
                </div>
              </div>
              <h4 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                {highlight.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
