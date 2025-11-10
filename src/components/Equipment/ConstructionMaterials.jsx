import React from "react";

export default function ConstructionMaterials() {
  // 🧰 Dummy Data (Text from your image)
  const materialServices = [
    "Backfill Materials",
    "Soil",
    "Natural Stones",
    "Cement",
    "Aggregates/Gravels",
    "Sand",
  ];

  return (
    <div className="w-full   flex flex-col items-center justify-center ">
      <div className="w-full max-w-[1260px]">
        {/* Title */}
        <h1 className="text-[20px] sm:text-[25px] md:text-[35px] font-bold text-[#2387C0] pb-10 capitalize tracking-wide text-left">
          Construction Materials
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
          {materialServices.map((material, index) => (
            <div
              key={index}
              className="relative w-full h-[110px] sm:h-[130px] md:h-[140px] bg-white rounded-[10px] shadow-[0px_0px_2px_1px_rgba(35,135,192,0.25)]
                         flex items-center justify-center cursor-pointer
                         transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_8px_2px_rgba(35,135,192,0.4)]"
            >
              <span className="text-neutral-800 text-[18px] sm:text-[22px] md:text-[28px] font-semibold  text-center tracking-wide leading-snug px-4">
                {material}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
