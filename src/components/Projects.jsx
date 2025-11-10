import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ title, description, mainImage, galleryImages }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/project-detail", {
      state: { title, description, mainImage, galleryImages },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_18.9918px_63.8816px_rgba(218,218,218,0.33)] border border-gray-200 p-6 flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300">
      {/* Image Container - Fixed Aspect Ratio */}
      <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 flex-shrink-0">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow pt-4">
        <h3 className="text-stone-900 text-lg sm:text-xl md:text-2xl font-semibold mb-1  text-left line-clamp-2 ">
          {title}
        </h3>

        <p className="text-neutral-500 text-sm sm:text-base font-normal  leading-relaxed text-left line-clamp-3 mb-1  flex-grow min-h-[4.5rem]">
          {description}
        </p>

        <div className="mt-auto">
          <button
            onClick={handleViewDetails}
            className="text-cyan-600 text-sm sm:text-base font-medium hover:underline hover:text-cyan-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
