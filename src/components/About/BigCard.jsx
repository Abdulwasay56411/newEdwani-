import React from "react";

const BigCard = ({ image, name, position }) => {
  return (
    <div className="relative w-full aspect-[9/12] rounded-2xl overflow-hidden shadow-lg">
      {/* Image */}
      <img className="w-full h-full object-cover" src={image} alt={name} />

      {/* Overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-[240px]">
        <div className="w-full bg-[#2387C0] opacity-90 rounded-xl backdrop-blur-[2px] flex flex-col items-center justify-center py-2">
          <span className="text-white text-lg font-medium uppercase tracking-wide leading-[1.1]">
            {name}
          </span>
          <span className="text-white text-sm font-normal uppercase tracking-wide leading-[1] mt-0">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
