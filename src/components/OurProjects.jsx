import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Projects from "./Projects";

const OurProjects = () => {
  const projectsData = [
    {
      title: "Yasref Project",
      description:
        "Industrial and infrastructure works supporting one of Saudi Arabia’s leading refinery facilities.",
      mainImage: "/c-dustin-91AQt9p4Mo8-unsplash.jpg",
      galleryImages: [
        "/christopher-burns-8KfCR12oeUM-unsplash.jpg",
        "/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg",
        "/etienne-girardet-sgYamIzhAhg-unsplash.jpg",
      ],
    },
    {
      title: "Yanbu Tree Plantation",
      description:
        "Large-scale landscaping and greenery development with a focus on sustainable planting.",
      mainImage: "/greyson-joralemon-A1g0oeX29ec-unsplash.jpg",
      galleryImages: [
        "/guilherme-cunha-4zwozQxDbD4-unsplash.jpg",
        "/h-co-3coKbdfnAFg-unsplash.jpg",
        "/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      ],
    },
    {
      title: "Riyadh Metro Line Extension",
      description:
        "Civil engineering support and construction of metro line expansion in Riyadh.",
      mainImage: "/joe-holland-80zZ1s24Nag-unsplash.jpg",
      galleryImages: [
        "/josh-olalde-X1P1_EDNnok-unsplash.jpg",
        "/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash.jpg",
        "/luke-besley-k5l-zbRSPds-unsplash.jpg",
      ],
    },
    {
      title: "Jeddah Waterfront Renovation",
      description:
        "Comprehensive renovation of waterfront recreational and commercial areas.",
      mainImage: "/mark-potterton-sNVkn3507Oo-unsplash.jpg",
      galleryImages: [
        "/mark-potterton-sNVkn3507Oo-unsplash.jpg",
        "/umit-yildirim-9OB46apMbC4-unsplash.jpg",
      ],
    },
    {
      title: "Neom Solar Plant",
      description:
        "Development of solar infrastructure for renewable energy production in NEOM.",
      mainImage: "/ricardo-gomez-angel-7bzbyafVTYg-unsplash.jpg",
      galleryImages: [
        "/saad-salim-PqRvLsjD_TU-unsplash.jpg",
        "/shane-mclendon-9jPJrfLTBi0-unsplash.jpg",
      ],
    },
    {
      title: "AlUla Heritage Restoration",
      description:
        "Restoration of historical sites and cultural landmarks in AlUla region.",
      mainImage: "/shane-mclendon-9jPJrfLTBi0-unsplash.jpg",
      galleryImages: [
        "/shane-mclendon-9jPJrfLTBi0-unsplash.jpg",
        "/projectlast.jpg",
      ],
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleProjects = 6;

  const handleNext = () => {
    if (startIndex + visibleProjects < projectsData.length) {
      setStartIndex(startIndex + visibleProjects);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleProjects);
    }
  };

  return (
    <div className="bg-[#F8FAFB] w-full flex flex-col justify-center items-center py-8 md:py-10 px-4">
      {/* Title */}
      <div className="flex flex-col gap-3 items-center mb-8 md:mb-12">
        <h1 className="font-bold text-xl md:text-[45.56px] tracking-tighter">
          Our Projects
        </h1>
        <div className="border-[3px] md:border-3 border-[#2387C0] w-[20px] md:w-[48px]"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full max-w-7xl mx-auto px-6">
        {projectsData
          .slice(startIndex, startIndex + visibleProjects)
          .map((project, index) => (
            <Projects key={index} {...project} />
          ))}
      </div>

      {/* Navigation Arrows */}
      {projectsData.length > visibleProjects && (
        <div className="flex items-center justify-center gap-4 mt-10  p-2 rounded-md">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`rounded-full p-3 transition ${
              startIndex === 0
                ? "bg-gray-100 text-[#2387C0] opacity-70"
                : "bg-gray-100 hover:bg-gray-200 text-[#2387C0]"
            }`}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex + visibleProjects >= projectsData.length}
            className={`rounded-full p-3 transition ${
              startIndex + visibleProjects >= projectsData.length
                ? "bg-[#2387C0] opacity-70 text-white"
                : "bg-[#2387C0] hover:bg-[#1c6ea4] text-white"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default OurProjects;
