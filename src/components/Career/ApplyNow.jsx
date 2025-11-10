import React, { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaFileAlt,
  FaBuilding,
  FaComment,
  FaCheckCircle,
  FaLinkedin,
  FaUpload,
  FaChevronDown,
} from "react-icons/fa";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cv: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        cv: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        cv: null,
      });
    }, 5000);
  };

  const features = [
    {
      icon: <FaUser className="text-xl" />,
      title: "Career Growth",
      description: "Clear progression paths and development opportunities",
    },
    {
      icon: <FaBuilding className="text-xl" />,
      title: "Iconic Projects",
      description:
        "Work on Saudi Arabia's most prestigious construction projects",
    },
    {
      icon: <FaCheckCircle className="text-xl" />,
      title: "Safety First",
      description: "Industry-leading safety standards and protocols",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8 max-w-full">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2387C0] px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
            <FaPaperPlane className="text-lg" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
            Build Your Future With{" "}
            <span className="text-[#2387C0]">Edwani Constructing</span>
          </h1>
          <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-[#2387C0] to-blue-400 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            If you are ready to build your future with one of Saudi Arabia's
            most respected construction companies, we would love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Information & Features */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4 md:space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2387C0] rounded-lg md:rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FaEnvelope className="text-lg md:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:careers@edwanigroup.com"
                      className="text-[#2387C0] hover:text-blue-700 transition-colors duration-300 text-base md:text-lg break-all"
                    >
                      careers@edwanigroup.com
                    </a>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg md:rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FaMapMarkerAlt className="text-lg md:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1">
                      Office Location
                    </h4>
                    <p className="text-gray-700 text-base md:text-lg">
                      Yanbu, Kingdom of Saudi Arabia
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      Visit our headquarters
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                  Follow us for updates
                </p>
                <div className="flex gap-3 md:gap-4">
                  <a
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#2387C0] hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin className="text-sm md:text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-[#2387C0] to-[#228bc8] rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Why Choose Edwani Constructing?
              </h3>
              <div className="space-y-4 md:space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base md:text-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-blue-100 text-xs md:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                Application Form
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            {isSubmitted ? (
              /* Success Message */
              <div className="text-center py-8 md:py-12">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <FaCheckCircle className="text-3xl md:text-4xl text-green-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
                  Thank you for your interest in Edwani. We've received your
                  application and will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#2387C0] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              /* Application Form */
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                      <FaUser className="text-[#2387C0] text-sm md:text-base" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#2387C0] focus:border-[#2387C0] transition-colors duration-300 text-sm md:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                      <FaEnvelope className="text-[#2387C0] text-sm md:text-base" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#2387C0] focus:border-[#2387C0] transition-colors duration-300 text-sm md:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                      <FaPhone className="text-[#2387C0] text-sm md:text-base rotate-90" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#2387C0] focus:border-[#2387C0] transition-colors duration-300 text-sm md:text-base"
                      placeholder="+966 XXX XXX XXX"
                    />
                  </div>

                  {/* Position - Improved Dropdown */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                      <FaBuilding className="text-[#2387C0] text-sm md:text-base" />
                      Position Applied For *
                    </label>
                    <div className="relative">
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#2387C0] focus:border-[#2387C0] transition-colors duration-300 bg-white text-sm md:text-base appearance-none pr-10"
                      >
                        <option value="">Select a position</option>
                        <option value="Site Engineer">Site Engineer</option>
                        <option value="Heavy Equipment Mechanic">
                          Heavy Equipment Mechanic
                        </option>
                        <option value="Safety Officer">Safety Officer</option>
                        <option value="Equipment Operator">
                          Equipment Operator
                        </option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FaChevronDown className="text-gray-400 text-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CV Upload */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                    <FaFileAlt className="text-[#2387C0] text-sm md:text-base" />
                    Upload CV *
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg md:rounded-xl p-4 md:p-6 text-center hover:border-[#2387C0] transition-colors duration-300">
                    <FaUpload className="text-2xl md:text-3xl text-gray-400 mx-auto mb-2 md:mb-3" />
                    <p className="text-gray-600 text-sm md:text-base mb-1 md:mb-2">
                      {formData.cv
                        ? formData.cv.name
                        : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">
                      PDF, DOC, DOCX (Max. 5MB)
                    </p>
                    <input
                      type="file"
                      name="cv"
                      onChange={handleFileChange}
                      required
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                    <FaComment className="text-[#2387C0] text-sm md:text-base" />
                    Cover Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#2387C0] focus:border-[#2387C0] transition-colors duration-300 resize-none text-sm md:text-base"
                    placeholder="Tell us why you're interested in joining Edwani..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#2387C0] to-[#1f81ba] text-white py-3 md:py-4 rounded-lg md:rounded-xl font-semibold  transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm md:text-lg" />
                      Submit Application
                    </>
                  )}
                </button>

                <p className="text-center text-xs md:text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
