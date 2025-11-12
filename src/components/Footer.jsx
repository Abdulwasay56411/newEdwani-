import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-72 h-72 bg-gradient-to-tr from-[#2387C0] to-transparent blur-3xl rounded-full"></div>
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-gradient-to-bl from-[#2387C0] to-transparent blur-3xl rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 relative z-10">
        {/* Column 1 - Brand */}
        <div className="space-y-5">
          <h2 className="text-[26px]  font-bold uppercase tracking-wide text-nowrap">
            EDWANI Contracting
          </h2>

          <p className=" text-gray-400 text-base sm:text-lg w-full">
            From cities to remote sites we deliver projects with quality,
            reliability, and experience.
          </p>

          {/* Email Section */}
          <div className="flex items-center gap-3 text-gray-300 hover:text-[#2387C0] transition-all duration-300 max-w-[280px]">
            <div className="bg-[#2387C0]/20 p-3 rounded-full flex-shrink-0">
              <MdEmail className="w-6 h-6 text-[#2387C0]" />
            </div>
            <span className="text-sm sm:text-base font-medium break-words ">
              info@edwanicontracting.com
            </span>
          </div>
        </div>

        {/* Column 2 - Company */}
        <div className="lg:justify-self-center select-none">
          <h3 className="text-[#2387C0] text-lg sm:text-xl font-semibold uppercase mb-5">
            Company
          </h3>
          <ul className="space-y-3 text-gray-400 text-base sm:text-lg select-none">
            {["About", "Services", "Customer", "QHSE"].map((item) => (
              <li
                key={item}
                className="
        cursor-pointer 
        transition-all 
        duration-300 
        hover:translate-x-1"
              >
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `
            hover:text-[#2387C0] 
            ${isActive ? "text-[#2387C0]" : "text-gray-400"}
          `
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Projects */}
        <div className="lg:justify-self-center select-none">
          <h3 className="text-[#2387C0] text-lg sm:text-xl font-semibold uppercase mb-5">
            Services
          </h3>
          <ul className="space-y-3 text-gray-400 text-base sm:text-lg">
            {["Civil", "Landscaping", "Hardscaping", "Safety Consultancy"].map(
              (item) => {
                const getPath = (service) => {
                  switch (service) {
                    case "Civil":
                      return "/services/civil";
                    case "Landscaping":
                      return "/services/landscaping";
                    case "Hardscaping":
                      return "/services/hardscaping";
                    case "Safety Consultancy":
                      return "/services/safety";
                    default:
                      return "/services";
                  }
                };

                const targetPath = getPath(item);

                return (
                  <li
                    key={item}
                    className="cursor-pointer transition-all duration-300 hover:translate-x-1"
                  >
                    <NavLink
                      to={targetPath}
                      className={({ isActive }) =>
                        `block 
             hover:text-[#2387C0] 
             ${isActive ? "text-[#2387C0] " : "text-gray-400"}
            `
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        {/* Column 4 - Resources */}
        <div className="lg:justify-self-end select-none">
          <h3 className="text-[#2387C0] text-lg sm:text-xl font-semibold uppercase mb-5">
            QHSE
          </h3>
          <ul className="space-y-3 text-gray-400 text-base sm:text-lg select-none">
            {[
              "Our Commitment",
              "Quality Policy",
              "Environmental Policy",
              "Areas of Certification",
            ].map((item) => {
             
              const getPath = (linkItem) => {
                switch (linkItem) {
                  case "Our Commitment":
                    return "/qhse/commitment";
                  case "Quality Policy":
                    return "/qhse/quality-policy";
                  case "Environmental Policy":
                    return "/qhse/environmental";
                  case "Areas of Certification":
                    return "/qhse/certification";
                  default:
                    return "/qhse";
                }
              };

              const targetPath = getPath(item);

              return (
                <li
                  key={item}
                  className="cursor-pointer transition-all duration-300 hover:translate-x-1"
                >
                  <NavLink
                    to={targetPath}
                    // NavLink ka active state function
                    className={({ isActive }) =>
                      `block 
             hover:text-[#2387C0] 
             ${
               isActive
                 ? "text-[#2387C0] " 
                 : "text-gray-400" 
             }
            `
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 relative z-10"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-gray-400 text-base sm:text-lg text-center sm:text-left">
          © 2024 Edwani Contracting. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
