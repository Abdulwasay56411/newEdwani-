import React from "react";
import { BiSend } from "react-icons/bi";

export default function LastSection() {
  return (
    <div className="flex flex-col lg:flex-row h-auto relative overflow-hidden">
      {/* Left Trapezoid Section */}
      <div className="relative w-full lg:w-full h-[300px] lg:h-auto bg-[#2387C0] text-white clip-trapezoid flex flex-col justify-center px-6 py-10 lg:px-12 z-10 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-wide font-poppins mb-6 max-w-xl">
          Building Dreams, Crafting Excellence Where Vision Turns Into Reality.
        </h1>

        {/* Email Input Styled */}
        <div className="w-full max-w-md">
          <div className="flex items-center bg-white rounded-[14px] shadow-xl px-4 py-2">
            <input
              type="email"
              placeholder="Enter Your email address"
              className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 text-sm md:text-base outline-none"
            />
            <button
              aria-label="Send Email"
              className="w-10 h-10 flex items-center justify-center bg-[#2387C0] rounded-xl shadow-[0px_5px_14px_0px_rgba(247,103,67,0.25)] hover:bg-cyan-700 transition-all text-white text-lg"
            >
              <BiSend />
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-full h-64 lg:h-auto -mt-6 lg:-ml-80 z-0">
        <img
          src="/home-last.jpg"
          alt="Construction Workers"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
