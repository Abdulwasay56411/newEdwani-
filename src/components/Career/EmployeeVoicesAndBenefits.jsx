import React from "react";
import {
  FaQuoteLeft,
  FaShieldAlt,
  FaCalendarAlt,
  FaCertificate,
  FaMoneyBillWave,
  FaHome,
  FaBus,
  FaStar,
} from "react-icons/fa";

const EmployeeVoicesAndBenefits = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "I joined Edwani Contracting as a trainee technician. Today, I manage a team at one of the country's largest infrastructure sites. Growth here is real and rewarding.",
      name: "Ahmed Raza",
      position: "Site Supervisor",
      avatar: "/emp1.jpg",
      rating: 5,
      department: "Operations",
    },
    {
      id: 2,
      quote:
        "The safety standards and professional development opportunities at Edwani Contracting are exceptional. I've grown both personally and professionally.",
      name: "Sana Malik",
      position: "HR Coordinator",
      avatar: "/emp2.jpg",
      rating: 5,
      department: "Human Resources",
    },
    {
      id: 3,
      quote:
        "The safety standards and professional development opportunities at Edwani Contracting are exceptional. I've grown both personally and professionally.",
      name: "Khalid Al-Mansour",
      position: "Senior Safety Officer",
      avatar: "/emp3.jpg",
      rating: 5,
      department: "Safety",
    },
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Health & Life Insurance",
      description:
        "Comprehensive health and life insurance coverage for you and your family",
    },
    {
      icon: <FaCalendarAlt className="text-xl" />,
      title: "Paid Leave",
      description: "Generous paid annual leave and public holidays",
    },
    {
      icon: <FaCertificate className="text-xl" />,
      title: "Certifications",
      description: "Technical and safety certification programs",
    },
    {
      icon: <FaMoneyBillWave className="text-xl" />,
      title: "Bonuses",
      description: "Overtime and performance-based bonuses",
    },
    {
      icon: <FaHome className="text-xl" />,
      title: "Accommodation",
      description: "Company-provided accommodation facilities",
    },
    {
      icon: <FaBus className="text-xl" />,
      title: "Transport",
      description: "Transport facilities for all employees",
    },
  ];

  const stats = [
    { number: "95%", label: "Employee Satisfaction" },
    { number: "85%", label: "Career Growth" },
    { number: "90%", label: "Recommend to Friends" },
    { number: "4.8/5", label: "Work Environment" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Employee Voices Section */}
        <div className="mb-16 md:mb-20">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
              Employee Voices
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our team members about their experiences and growth at
              Edwani
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl sm:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-3xl text-[#2387C0] opacity-80" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {/* Image Container with Fallback */}
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name} - ${testimonial.position}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // If image fails to load, show initials as fallback
                          e.target.style.display = "none";
                          const parent = e.target.parentElement;
                          parent.innerHTML = `
                            <div class="w-full h-full bg-[#2387C0] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                              ${testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                          `;
                        }}
                      />
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#2387C0] text-xs sm:text-sm font-medium">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.department}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 md:mt-16 bg-white rounded-xl sm:rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2387C0] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits and Perks Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
              Benefits & Perks
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits that support
              your professional and personal life
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-l-4 border-[#2387C0]"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#2387C0] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {benefit.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-[#2387C0] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeVoicesAndBenefits;
