import React from "react";
import BigCard from "./BigCard";
import SmallCards from "./SmallCards";

const engineers = [
  {
    image: "/members1.jpg",
    name: "John Doe",
    position: "Senior Engineer",
    type: "big",
  },
  {
    image: "/engineer2.jpg",
    name: "Alex",
    position: "Engineer",
    type: "small",
  },
  {
    image: "/members2.jpg",
    name: "Alice",
    position: "Junior Engineer",
    type: "small",
  },
  {
    image: "/engineer1.jpg",
    name: "Bob",
    position: "Engineer",
    type: "big",
  },
];

const BestEngineers = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-snug break-words">
          <span className="text-zinc-800">Our Best </span>
          <span className="text-cyan-600">Engineers</span>
        </h2>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-500 font-normal leading-relaxed text-center max-w-4xl mx-auto break-words">
        Blessing welcomed ladyship she met humoured sir breeding her. Six
        curiosity day assurance bed necessary.
      </p>

      {/* Cards Layout */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
        {engineers.map((eng, index) =>
          eng.type === "big" ? (
            <BigCard
              key={index}
              image={eng.image}
              name={eng.name}
              position={eng.position}
            />
          ) : (
            <SmallCards
              key={index}
              image={eng.image}
              name={eng.name}
              position={eng.position}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BestEngineers;
