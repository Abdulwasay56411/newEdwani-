import React from "react";
import { BiMobile } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const LastSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden   ">
      {/* === MAIN CONTAINER === */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" rounded-2xl shadow-xl border border-blue-200/50 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute " />

          {/* Content */}
          <div className="relative px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              {/* Title Section */}
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Talk to Us About Your{" "}
                  <span className="text-[#2387C0]">Equipment Needs</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  Get expert consultation for your construction equipment
                  requirements. Our team is ready to provide tailored solutions
                  for your projects.
                </p>
              </div>

              {/* Contact Boxes */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl">
                {/* Phone */}
                <div className="group bg-white hover:bg-blue-50 h-14 w-full sm:flex-1 max-w-xs rounded-lg flex items-center justify-center text-gray-800 font-semibold text-base border border-blue-200/50 hover:border-[#2387C0]/50 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer gap-3 px-4">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-[#2387C0] transition-colors duration-300">
                    <BiMobile
                      size={20}
                      className="text-[#2387C0] group-hover:text-white"
                    />
                  </div>
                  <span className="group-hover:text-[#2387C0] transition-colors duration-300">
                    050-4393166
                  </span>
                </div>

                {/* Email */}
                <div className="group bg-white hover:bg-blue-50 h-14 w-full sm:flex-1 max-w-xs rounded-lg flex items-center justify-center text-gray-800 font-semibold text-base border border-blue-200/50 hover:border-[#2387C0]/50 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer gap-3 px-4">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-[#2387C0] transition-colors duration-300">
                    <MdEmail
                      size={20}
                      className="text-[#2387C0] group-hover:text-white"
                    />
                  </div>
                  <span className="group-hover:text-[#2387C0] transition-colors duration-300 text-sm sm:text-base">
                    edwanigroup@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#2387C0] to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#2387C0] to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
