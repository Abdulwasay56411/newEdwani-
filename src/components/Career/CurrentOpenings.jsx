import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const CurrentOpenings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Site Engineer",
      location: "Riyadh",
      description:
        "Manage daily site operations, coordinate with contractors, and ensure project timelines are met.",
      requirements: "BSc Civil Engineering, 3–5 years of experience",
      type: "Full-Time",
      salary: "Competitive",
      category: "engineering",
      urgent: true,
    },
    {
      id: 2,
      title: "Heavy Equipment Mechanic",
      location: "Yanbu",
      description:
        "Inspect, repair, and maintain machinery such as loaders, cranes, and excavators.",
      requirements:
        "Diploma in Mechanical or Automotive, 2+ years of field experience",
      type: "Full-Time",
      salary: "SAR 7,000–9,000",
      category: "technical",
      urgent: false,
    },
    {
      id: 3,
      title: "Safety Officer",
      location: "NEOM Project",
      description:
        "Ensure workplace safety compliance, conduct site inspections, and implement safety standards.",
      requirements:
        "NEBOSH or OSHA certification, 2–3 years of site experience",
      type: "Contract",
      salary: "Based on experience",
      category: "safety",
      urgent: true,
    },
    {
      id: 4,
      title: "Equipment Operator",
      location: "Jeddah",
      description:
        "Operate heavy machinery efficiently and safely under the supervision of site engineers.",
      requirements:
        "Valid license, 2+ years of experience with construction equipment",
      type: "Full-Time",
      salary: "Competitive",
      category: "operations",
      urgent: false,
    },
    {
      id: 5,
      title: "Project Manager",
      location: "Riyadh",
      description:
        "Lead construction projects from planning to completion, ensuring quality and timelines.",
      requirements:
        "BSc Civil Engineering, 8+ years experience, PMP certification preferred",
      type: "Full-Time",
      salary: "SAR 15,000–20,000",
      category: "management",
      urgent: false,
    },
    {
      id: 6,
      title: "Electrical Engineer",
      location: "Jeddah",
      description:
        "Design and implement electrical systems for construction projects.",
      requirements: "BSc Electrical Engineering, 3+ years experience",
      type: "Full-Time",
      salary: "SAR 8,000–12,000",
      category: "engineering",
      urgent: false,
    },
  ];

  const locations = ["all", "Riyadh", "Yanbu", "NEOM Project", "Jeddah"];
  const jobTypes = ["all", "Full-Time", "Contract", "Part-Time"];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      selectedLocation === "all" || job.location === selectedLocation;
    const matchesType = selectedType === "all" || job.type === selectedType;

    return matchesSearch && matchesLocation && matchesType;
  });

  // Function to handle Apply Now click
  const handleApplyNow = (jobTitle) => {
    // Scroll to ApplyNow section
    const applyNowSection = document.getElementById("apply-now-section");
    if (applyNowSection) {
      applyNowSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Optional: You can also pass the job title to the ApplyNow component
    // This would require using state management or React context
    console.log(`Applying for: ${jobTitle}`);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2387C0] mb-3 md:mb-4">
            Current Openings
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#2387C0] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join our dynamic team and be part of Saudi Arabia's most exciting
            construction projects. Explore our latest career opportunities.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Jobs
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by job title or description..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2387C0] focus:border-[#2387C0] transition-colors duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2387C0] focus:border-[#2387C0] bg-white appearance-none transition-colors duration-300"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Job Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBriefcase className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2387C0] focus:border-[#2387C0] bg-white appearance-none transition-colors duration-300"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-sm text-gray-600 flex items-center">
              <FaFilter className="w-4 h-4 mr-1" />
              Showing {filteredJobs.length} of {jobOpenings.length} jobs
            </span>
            {(selectedLocation !== "all" ||
              selectedType !== "all" ||
              searchTerm) && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLocation("all");
                  setSelectedType("all");
                }}
                className="text-sm text-[#2387C0] hover:text-[#1a6a96] transition-colors duration-300 ml-4"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group flex flex-col h-full"
            >
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Job Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-[#2387C0] transition-colors duration-300">
                        {job.title}
                      </h3>
                      {job.urgent && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#2387C0]" />
                      <span className="text-sm sm:text-base">
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base flex-grow">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                    Requirements:
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {job.requirements}
                  </p>
                </div>

                {/* Job Details */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaBriefcase className="w-4 h-4 mr-2 text-[#2387C0]" />
                    <span className="text-sm sm:text-base">{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMoneyBillWave className="w-4 h-4 mr-2 text-[#2387C0]" />
                    <span className="text-sm sm:text-base">{job.salary}</span>
                  </div>
                </div>

                {/* Apply Button - Fixed at bottom */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      onClick={() => handleApplyNow(job.title)}
                      className="bg-[#2387C0] hover:bg-[#1a6a96] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto text-center min-w-[120px]"
                    >
                      Apply Now
                    </button>
                    <span className="text-xs text-gray-500 text-center sm:text-right">
                      Posted recently
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any jobs matching your criteria. Try adjusting
                your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLocation("all");
                  setSelectedType("all");
                }}
                className="bg-[#2387C0] hover:bg-[#1a6a96] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View All Jobs
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrentOpenings;
