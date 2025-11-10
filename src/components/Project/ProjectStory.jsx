import React from "react";

const ProjectStory = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center px-6 md:px-10 lg:px-20 gap-12 md:gap-16 lg:gap-32">
      {/* Text Section */}
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-start gap-4 md:gap-6 lg:gap-8">
        <h1 className="text-[#313131] font-medium text-[32px] sm:text-[40px] lg:text-[54px] tracking-tighter md:whitespace-nowrap">
          Where Every <span className="text-[#2387C0]">Project</span> <br />
          Tells a Story.
        </h1>
        <p className="text-[16px] sm:text-[18px] lg:text-[20.44px]">
          <span className="font-semibold">Proven Track Record –</span>{" "}
          Successful completion of building and road projects across multiple
          regions in Saudi Arabia since 1990.
        </p>
        <p className="text-[16px] sm:text-[18px] lg:text-[20.44px]">
          <span className="font-semibold">End-to-End Expertise –</span> From
          site preparation and excavation to construction and finishing, we
          manage projects with precision and efficiency.
        </p>
        <p className="text-[16px] sm:text-[18px] lg:text-[20.44px]">
          <span className="font-semibold">Quality That Lasts –</span> Every
          project is built on strong foundations, strict safety standards, and
          modern techniques to ensure durability and trust.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-[659px] flex-shrink-0 mt-8 lg:mt-0">
        {/* Main Image */}
        <div className="relative w-full sm:w-[90%] lg:w-[458px] mx-auto rounded-[37px]">
          <img
            className="w-full h-auto  lg:h-[623px] rounded-[37px]"
            src="/projectmain1.png"
            alt="Main project"
          />

          {/* Secondary image overlapping main image */}
          <img
            className="w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 absolute -top-2 right-0 rounded-[37px] outline outline-[8px] sm:outline-[12px] md:outline-[14px] outline-gray-50"
            src="/services1.png"
            alt="Secondary project"
          />

          {/* Build badge overlapping secondary image */}
          <div className="hidden w-36 sm:w-44 md:w-48 h-12 sm:h-14 md:h-16 absolute right-[-70px] top-[350px] bg-gray-50 rounded-full shadow-[0px_54px_33px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-cyan-600 md:flex md:justify-center md:items-center">
            <div className="text-zinc-700 text-lg sm:text-xl md:text-2xl font-semibold font-['Poppins']">
              Build
            </div>
          </div>
        </div>

        {/* Design badge on main image */}
        <div className="hidden md:flex w-36 sm:w-44 md:w-48 h-12 sm:h-14 md:h-16 absolute left-0 top-[100px] bg-gray-50 rounded-full shadow-[0px_54px_33px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-cyan-600 justify-center items-center">
          <div className="text-zinc-700 text-lg sm:text-xl md:text-2xl font-semibold font-['Poppins']">
            Design
          </div>
        </div>

        {/* Deliver badge on main image */}
        <div className="hidden md:flex w-36 sm:w-44 md:w-48 h-12 sm:h-14 md:h-16 absolute left-0 top-[440px] bg-gray-50 rounded-full shadow-[0px_54px_33px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-cyan-600 justify-center items-center">
          <div className="text-zinc-700 text-lg sm:text-xl md:text-2xl font-semibold font-['Poppins']">
            Deliver
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStory;
