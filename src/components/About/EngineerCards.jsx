import React from "react";

const EngineerCards = ({ image, name, position, height = "h-72" }) => {
  return (
    <div className={`relative w-full ${height} rounded-2xl overflow-hidden`}>
      {/* Image */}
      <img className="w-full h-full object-cover" src={image} alt={name} />

      {/* Overlay container for name and position */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-[240px]">
        {/* Cyan box with name */}
        <div className="w-full h-14 bg-cyan-600 rounded-xl flex items-center justify-center">
          <span className="text-white text-lg font-medium uppercase tracking-wide">
            {name}
          </span>
        </div>

        {/* Position below the box */}
        <div className="mt-2 text-center">
          <span className="text-white text-sm font-normal uppercase tracking-wide">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EngineerCards;
