import React, { useState } from "react";
import { HiMenuAlt1, HiX, HiChevronDown } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  const NavLinks = {
    Services: [
      { name: "MEP Consultancy", path: "/services/construction" },
      { name: "Landscaping", path: "/services/landscaping" },
      { name: "Hardscaping", path: "/services/hardscaping" },
      { name: "Civil", path: "/services/civil" },
      {
        name: "Equipment Rental & Maintenance Services",
        path: "/services/equipment",
      },
      {
        name: "Construction Material Supply",
        path: "/services/constructionmaterial",
      },
      { name: "Safety Consultancy", path: "/services/safety" },
    ],
    Projects: [
      {
        name: "Residential & Industrial Projects",
        path: "/projects/residential-industrial",
      },
      {
        name: "Infrastructure & Agricultural Projects",
        path: "/projects/infrastructure-agricultural",
      },
    ],
    QHSE: [
      { name: "Our Commitment", path: "/qhse/commitment" },
      { name: "Quality Policy", path: "/qhse/quality-policy" },
      { name: "Health & Safety Policy", path: "/qhse/health-safety" },
      { name: "Environmental Policy", path: "/qhse/environmental" },
      { name: "Areas of Certification", path: "/qhse/certification" },
      { name: "Awards & Recognition", path: "/qhse/awards" },
    ],
  };

  // Updated mainLinks - About no longer has dropdown
  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }, 
    { name: "Services", hasDropdown: true, mainPath: "/services" },
    { name: "Projects", hasDropdown: true, mainPath: "/project" },
    { name: "Customers", path: "/customer" },
    { name: "QHSE", hasDropdown: true, mainPath: "/qhse" },
    { name: "Career", path: "/career" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Handle main navigation item click (for dropdown items)
  const handleMainItemClick = (link) => {
    if (link.hasDropdown && link.mainPath) {
      handleNavigation(link.mainPath);
    } else if (link.path) {
      handleNavigation(link.path);
    }
  };

  // Helper function to check if path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  // Helper function to check if dropdown should be active
  const isDropdownActive = (dropdownName) => {
    const dropdownPaths =
      NavLinks[dropdownName]?.map((link) => link.path) || [];
    const mainPath = mainLinks.find(
      (link) => link.name === dropdownName
    )?.mainPath;

    return (
      location.pathname.startsWith(`/${dropdownName.toLowerCase()}`) ||
      (mainPath && location.pathname === mainPath) ||
      dropdownPaths.some((path) =>
        location.pathname.startsWith(path.split("/")[1])
      )
    );
  };

  return (
    <div
      className="
        w-full 
        px-4 sm:px-8 md:px-6 
        py-4 md:py-6 
      bg-[#F8FAFB] 
        fixed top-0 left-0 z-[1000] 
        backdrop-blur-md bg-opacity-95
        transition-all duration-300
      "
    >
      {/* ===== Desktop Navbar ===== */}
      <nav className="hidden xl:flex items-center text-sm justify-between bg-white rounded-[16px] px-5 md:px-4 py-2 shadow-sm">
        {/* Logo (clickable) */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer select-none"
        >
          <img
            width={100}
            height={100}
            src="/icon1.png"
            alt="Edwani Contracting"
          />
          <div>
            <h1 className="text-2xl font-bold text-[#2387C0]">
              Edwani Contracting
            </h1>
            <p className="text-sm text-[#858585] font-medium">Construction</p>
          </div>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap gap-6 lg:gap-[30px] items-center">
          {mainLinks.map((link, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() =>
                link.hasDropdown && setActiveDropdown(link.name)
              }
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              {link.hasDropdown ? (
                <div className="flex items-center">
                  {/* Clickable main item */}
                  <div
                    onClick={() => handleMainItemClick(link)}
                    className={`flex items-center gap-1 text-[17px] py-2 lg:text-[18px] font-medium cursor-pointer border-b-4 transition duration-300 ${
                      isDropdownActive(link.name)
                        ? "border-[#2387C0] text-[#2387C0]"
                        : "border-transparent text-[#171717] hover:border-[#2387C0] hover:text-[#2387C0]"
                    }`}
                  >
                    {link.name}
                  </div>
                  {/* Dropdown arrow - only for dropdown */}
                  <div
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.name ? null : link.name
                      )
                    }
                    className="pl-1 cursor-pointer"
                  >
                    <HiChevronDown
                      className={`text-[#171717] transition-transform duration-300 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => handleNavigation(link.path)} // FIXED: Use handleNavigation directly
                  className={`text-[17px] lg:text-[18px] font-medium cursor-pointer border-b-4 transition duration-300 ${
                    isActivePath(link.path)
                      ? "border-[#2387C0] text-[#2387C0]"
                      : "border-transparent text-[#171717] hover:border-[#2387C0] hover:text-[#2387C0]"
                  }`}
                >
                  {link.name}
                </div>
              )}

              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0  w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {NavLinks[link.name].map((subLink, subIndex) => (
                    <div
                      key={subIndex}
                      onClick={() => handleNavigation(subLink.path)}
                      className={`px-4 py-3 text-[15px] font-medium cursor-pointer transition duration-200 ${
                        isActivePath(subLink.path)
                          ? "bg-[#2387C0] text-white"
                          : "text-[#171717] hover:bg-gray-100 hover:text-[#2387C0]"
                      }`}
                    >
                      {subLink.name}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button
          onClick={() => navigate("/contact")}
          className="px-4 py-2 text-white bg-[#2387C0] font-medium text-[13px] rounded-[7.5px] hover:bg-[#1e76a9] transition duration-300"
        >
          Contact Us
        </button>
      </nav>

      {/* ===== Mobile/Tablet/Small Laptop Navbar ===== */}
      <nav className="flex xl:hidden items-center justify-between bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg border border-gray-100">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition duration-200"
        >
          <HiMenuAlt1 size={22} className="text-[#2387C0]" />
        </div>

        {/* Mobile Logo (clickable) */}
        <div className="flex items-center">
          <img
            onClick={() => navigate("/")}
            width={50}
            height={50}
            src="/icon1.png"
            alt="Edwani contracting"
            className="cursor-pointer"
          />
          <h1 className="text-[10px] sm:text-sm uppercase font-bold text-[#2387C0]">
            Edwani Contracting
          </h1>
        </div>

        <button
          onClick={() => navigate("/contact")}
          className="px-2 sm:px-4 py-2 text-white bg-[#2387C0] font-medium text-xs rounded-lg hover:bg-[#1e76a9] transition duration-300 shadow-sm"
        >
          Contact
        </button>
      </nav>

      {/* ===== Mobile/Tablet/Small Laptop Menu - Professional Design ===== */}
      <div
        className={`xl:hidden fixed inset-0 z-[9999] transition-all duration-500 ease-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Enhanced Backdrop with blur */}
        <div
          className={`absolute inset-0  backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Professional Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-[#2387C0] to-[#1a6a9c] shadow-2xl transform transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Enhanced Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 bg-gradient-to-r from-[#2387C0] to-[#2a95d6]">
            <div className="flex flex-col">
              <h1 className="text-base font-bold uppercase text-white tracking-wide">
                EDWANI Contracting
              </h1>
              <p className="text-xs font-medium text-white/80 mt-1">
                Construction Excellence
              </p>
            </div>
            <div
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition duration-300 hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              <HiX className="text-white text-xl" />
            </div>
          </div>

          {/* Enhanced Menu Items */}
          <div className="h-[calc(100vh-88px)] overflow-y-auto py-6 bg-[#2387C0]">
            <div className="space-y-1 px-4">
              {mainLinks.map((link, index) => (
                <div key={index} className="group">
                  {link.hasDropdown ? (
                    <div className="rounded-xl overflow-hidden">
                      {/* Enhanced Dropdown Header - Now clickable for main page */}
                      <div
                        onClick={() => handleMainItemClick(link)}
                        className="flex items-center justify-between p-4 cursor-pointer bg-white/5 hover:bg-white/10 rounded-xl transition duration-300 group-hover:translate-x-1"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white/80 transition duration-300"></div>
                          <span
                            className={`text-base font-semibold tracking-wide ${
                              isDropdownActive(link.name)
                                ? "text-white"
                                : "text-white/95"
                            }`}
                          >
                            {link.name}
                          </span>
                        </div>
                        {/* Dropdown arrow - separate click for dropdown */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMobileDropdown(link.name);
                          }}
                          className="p-1 rounded hover:bg-white/10 transition duration-200"
                        >
                          <HiChevronDown
                            className={`text-white/70 transition-all duration-300 transform ${
                              mobileDropdowns[link.name]
                                ? "rotate-180 scale-110"
                                : "group-hover:scale-110"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Enhanced Dropdown Content */}
                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          mobileDropdowns[link.name]
                            ? "max-h-96 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-6 space-y-2 pb-2">
                          {NavLinks[link.name]?.map((subLink, subIndex) => (
                            <div
                              key={subIndex}
                              onClick={() => handleNavigation(subLink.path)}
                              className={`flex items-center p-3 rounded-lg cursor-pointer transition duration-300 transform hover:translate-x-2 ${
                                isActivePath(subLink.path)
                                  ? "bg-white/20 text-white shadow-lg"
                                  : "text-white/80 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full mr-3 transition duration-300 ${
                                  isActivePath(subLink.path)
                                    ? "bg-white"
                                    : "bg-white/40"
                                }`}
                              ></div>
                              <span className="text-sm font-medium tracking-wide">
                                {subLink.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleNavigation(link.path)} // FIXED: Use handleNavigation directly
                      className={`flex items-center p-4 rounded-xl cursor-pointer transition duration-300 transform hover:translate-x-2 group-hover:bg-white/10 ${
                        isActivePath(link.path)
                          ? "bg-white/20 text-white shadow-lg"
                          : "text-white/95 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full transition duration-300 ${
                            isActivePath(link.path)
                              ? "bg-white"
                              : "bg-white/40 group-hover:bg-white/80"
                          }`}
                        ></div>
                        <span className="text-base font-semibold tracking-wide">
                          {link.name}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Contact Section */}
            <div className="px-4 mt-8 pt-6 border-t border-white/20">
              <div className="text-center mb-6">
                <p className="text-white/80 text-sm font-medium mb-4">
                  Ready to start your project?
                </p>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="w-full py-4 bg-white text-[#2387C0] font-bold rounded-xl hover:bg-gray-50 transition duration-300 shadow-lg transform hover:scale-105 active:scale-95"
                >
                  Get In Touch
                </button>
              </div>

              {/* Company Info */}
              <div className="text-center">
                <p className="text-white/60 text-xs font-medium">
                  Building Excellence Since 1990
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;