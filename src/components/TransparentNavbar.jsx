import React, { useState } from "react";
import {
  HiMenuAlt1,
  HiX,
  HiChevronDown,
  HiMail,
  HiPhone,
} from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";


const TransparentNavbar = () => {
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
    About: [
      { name: "Company Overview", path: "/about/company-overview" },
      { name: "Vision & Values", path: "/about/vision-values" },
      { name: "Safety & Quality", path: "/about/safety-quality" },
      { name: "Our Clients", path: "/about/clients" },
    ],
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

  // Updated mainLinks with main page paths
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
    <div className="w-full bg-transparent">
      
      <div className="w-full fixed top-0 left-0 z-[1000] bg-gradient-to-r from-[#2387C0] to-[#2a95d6] py-2 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="w-full">
          {/* Desktop & Tablet Top Links */}
          <div className="hidden md:flex justify-between items-center text-white">
            {/* Left Section - Contact Info */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <span className="flex items-center space-x-2 text-sm lg:text-[15px] font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <HiMail className="text-white/90 text-sm" />
                <span>info@edwanicontracting.com</span>
              </span>
            </div>
          <div>
          <span className="flex items-center space-x-2 text-sm lg:text-[15px] font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <HiPhone className="text-white/90 text-sm" />
                <span>+966-50-4393166</span>
              </span>
          </div>
          </div>
          {/* Mobile Top Links - Height is approximately 115px */}
          <div className="md:hidden flex justify-between h-5 text-white py-3 space-y-3">
            {/* Email */}
            <div className="flex items-center space-x-2 text-sm font-medium">
              <HiMail className="text-white/90 text-lg" />
              <span>info@edwanicontracting.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2 text-sm font-medium">
              <HiPhone className="text-white/90 text-lg" />
              <span>+966-50-4393166</span>
            </div>   
          </div>
        </div>
      </div>

      {/* Mobile: 50px height, Desktop/Tablet: 40px height */}
      <div className="h-4 md:h-[40px] w-full"></div>

      {/* 3. Main Navigation Bar - NOW SCROLLABLE */}
      <div 
        // Removed fixed, top-[...], and z-[999] classes 
        className="w-full bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100 transition-all duration-300 relative z-[999]"
      >
        <div className="w-full py-2 px-4 sm:px-6 lg:px-8 xl:px-6 2xl:px-14">
          {/* ===== Desktop Navbar (1024px and above) ===== */}
          <nav className="hidden xl:flex items-center justify-between py-3">
            {/* Logo - Left Side with proper spacing */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer select-none flex-shrink-0 group min-w-0 mr-8"
            >
              <img
                width={90}
                height={90}
                src="/icon1.png"
                alt="Edwani Contracting"
                className=" transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-[#2387C0] leading-tight whitespace-nowrap">
                  Edwani Contracting
                </h1>
              </div>
            </div>

            {/* Navigation Links - Centered with proper spacing */}
            <div className="flex items-center justify-center flex-1 min-w-0 mx-8">
              <ul className="flex items-center justify-center space-x-6 2xl:space-x-8">
                {mainLinks.map((link, index) => (
                  <li
                    key={index}
                    className="relative flex-shrink-0"
                    onMouseEnter={() =>
                      link.hasDropdown && setActiveDropdown(link.name)
                    }
                    onMouseLeave={() =>
                      link.hasDropdown && setActiveDropdown(null)
                    }
                  >
                    {link.hasDropdown ? (
                      <div className="flex items-center">
                        <div
                          onClick={() => handleMainItemClick(link)}
                          className={`flex items-center gap-1 text-[15px] lg:text-[16px] xl:text-[17px] py-2 font-bold cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                            isDropdownActive(link.name)
                              ? "text-[#2387C0]"
                              : "text-[#171717] hover:text-[#2387C0]"
                          }`}
                        >
                          {link.name}
                        </div>
                        <div
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.name ? null : link.name
                            )
                          }
                          className="pl-1 cursor-pointer flex-shrink-0"
                        >
                          <HiChevronDown
                            className={`text-[#666] transition-all duration-300 ${
                              activeDropdown === link.name
                                ? "rotate-180 text-[#2387C0]"
                                : ""
                            }`}
                            size={18}
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleNavigation(link.path)}
                        className={`text-[15px] lg:text-[16px] xl:text-[17px] font-bold cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                          isActivePath(link.path)
                            ? "text-[#2387C0]"
                            : "text-[#171717] hover:text-[#2387C0]"
                        }`}
                      >
                        {link.name}
                      </div>
                    )}

                    {/* Enhanced Dropdown Menu */}
                    {link.hasDropdown && activeDropdown === link.name && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 xl:w-72 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50">
                        {NavLinks[link.name].map((subLink, subIndex) => (
                          <div
                            key={subIndex}
                            onClick={() => handleNavigation(subLink.path)}
                            className={`px-5 py-3 text-[14px] xl:text-[15px] font-medium cursor-pointer transition-all duration-200 ${
                              isActivePath(subLink.path)
                                ? "bg-[#2387C0] text-white"
                                : "text-[#333] hover:bg-blue-50 hover:text-[#2387C0]"
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
            </div>

            {/* Contact Button - Right Side with proper spacing */}
            <div className="flex-shrink-0 ml-8">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 lg:px-6 xl:px-8 py-3 lg:py-3.5 xl:py-4 text-white bg-gradient-to-r from-[#2387C0] to-[#2a95d6] font-semibold text-[14px] lg:text-[15px] xl:text-[16px] rounded-xl hover:from-[#1e76a9] hover:to-[#2387C0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </nav>

          {/* ===== Large Tablet Navbar (768px to 1023px) ===== */}
          <nav className="hidden lg:flex xl:hidden items-center justify-between py-3">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer select-none flex-shrink-0 group min-w-0"
            >
              <img
                width={70}
                height={70}
                src="/icon1.png"
                alt="Edwani Contracting"
                className="transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-lg lg:text-xl font-bold text-[#2387C0] leading-tight whitespace-nowrap">
                  Edwani Contracting
                </h1>
              </div>
            </div>

            {/* Navigation Links - Adjusted for tablet */}
            <div className="flex items-cente text-base font-bold  justify-center flex-1 min-w-0 mx-4">
              <ul className="flex items-center justify-center space-x-4">
                {mainLinks.slice(0, 7).map(
                  (
                    link,
                    index // Show fewer items on tablet
                  ) => (
                    <li
                      key={index}
                      className="relative flex-shrink-0"
                      onMouseEnter={() =>
                        link.hasDropdown && setActiveDropdown(link.name)
                      }
                      onMouseLeave={() =>
                        link.hasDropdown && setActiveDropdown(null)
                      }
                    >
                      {link.hasDropdown ? (
                        <div className="flex items-center">
                          <div
                            onClick={() => handleMainItemClick(link)}
                            className={`flex items-center gap-1 text-base font-semibold cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                              isDropdownActive(link.name)
                                ? "text-[#2387C0]"
                                : "text-[#171717] hover:text-[#2387C0]"
                            }`}
                          >
                            {link.name}
                          </div>
                          <div
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === link.name ? null : link.name
                              )
                            }
                            className="pl-1 cursor-pointer flex-shrink-0"
                          >
                            <HiChevronDown
                              className={`text-[#666] transition-all duration-300 ${
                                activeDropdown === link.name
                                  ? "rotate-180 text-[#2387C0]"
                                  : ""
                              }`}
                              size={16}
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => handleNavigation(link.path)}
                          className={`text-base font-semibold cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                            isActivePath(link.path)
                              ? "text-[#2387C0]"
                              : "text-[#171717] hover:text-[#2387C0]"
                          }`}
                        >
                          {link.name}
                        </div>
                      )}

                      {/* Dropdown Menu for tablet */}
                      {link.hasDropdown && activeDropdown === link.name && (
                        <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                          {NavLinks[link.name].map((subLink, subIndex) => (
                            <div
                              key={subIndex}
                              onClick={() => handleNavigation(subLink.path)}
                              className={`px-4 py-2 text-[13px] font-medium cursor-pointer transition-all duration-200 ${
                                isActivePath(subLink.path)
                                  ? "bg-[#2387C0] text-white"
                                  : "text-[#333] hover:bg-blue-50 hover:text-[#2387C0]"
                              }`}
                            >
                              {subLink.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Button */}
            <div className="flex-shrink-0">
              <button
                onClick={() => navigate("/contact")}
                className="px-4 py-2 text-white bg-[#2387C0] font-semibold text-[13px] rounded-lg hover:bg-[#1e76a9] transition-all duration-300 shadow-md whitespace-nowrap"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* ===== Mobile Navbar (below 768px) ===== */}
          <nav className="flex lg:hidden mt-4 items-center justify-between py-3">
            {/* Mobile Menu Button - Left Side */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 flex-shrink-0"
            >
              <HiMenuAlt1 size={24} className="text-[#2387C0]" />
            </div>

            {/* Mobile Logo - Centered */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer flex-shrink-0 group min-w-0 mx-2"
            >
              <img
                width={50}
                height={50}
                src="/icon1.png"
                alt="Edwani Contracting"
                className="transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />
              <div className="text-start min-w-0">
                <h1 className="text-base font-bold text-[#2387C0] leading-tight whitespace-nowrap">
                  Edwani Contracting
                </h1>
              </div>
            </div>

            {/* Mobile Contact Button - Right Side */}
            <button
              onClick={() => navigate("/contact")}
              className="px-3 py-1.5 text-white bg-[#2387C0] font-semibold text-xs rounded-lg hover:bg-[#1e76a9] transition-all duration-300 shadow-md flex-shrink-0 whitespace-nowrap"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* ===== Enhanced Mobile Menu (This is always fixed) ===== */}
      <div
        className={`xl:hidden fixed inset-0 z-[9999] transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Enhanced Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Professional Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-white to-gray-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Enhanced Header */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r bg-white shadow-lg">
            <div className="flex items-center min-w-0 gap-1">
              <img
                width={50}
                height={50}
                src="/icon1.png"
                alt="Edwani"
                className=""
              />
              <div className="min-w-0">
                <h1 className="text-lg font-bold text-[#2387C0] leading-tight">
                  Edwani Contracting
                </h1>
              </div>
            </div>
            <div
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110 flex-shrink-0 ml-2"
              onClick={() => setMenuOpen(false)}
            >
              <HiX className="text-[#2387C0] text-lg" />
            </div>
          </div>

          {/* Enhanced Menu Items */}
          <div className="overflow-y-auto py-6 h-[calc(100vh-100px)]"> 
            {/* Added height limit for better scrolling */}
            <div className="space-y-2 px-4">
              {mainLinks.map((link, index) => (
                <div key={index} className="group">
                  {link.hasDropdown ? (
                    <div className="rounded-lg overflow-hidden border border-gray-200/50 bg-white/80 backdrop-blur-sm">
                      {/* Dropdown Header */}
                      <div
                        onClick={() => handleMainItemClick(link)}
                        className="flex items-center justify-between p-3 cursor-pointer hover:bg-blue-50/50 transition-all duration-300"
                      >
                        <span
                          className={`text-[15px] pl-2 font-semibold ${
                            isDropdownActive(link.name)
                              ? "text-[#2387C0]"
                              : "text-gray-800"
                          }`}
                        >
                          {link.name}
                        </span>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMobileDropdown(link.name);
                          }}
                          className="p-1 rounded hover:bg-white transition-all duration-200 flex-shrink-0 ml-2"
                        >
                          <HiChevronDown
                            className={`text-gray-500 transition-all duration-300 ${
                              mobileDropdowns[link.name]
                                ? "rotate-180 text-[#2387C0]"
                                : ""
                            }`}
                            size={18}
                          />
                        </div>
                      </div>

                      {/* Enhanced Dropdown Content */}
                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          mobileDropdowns[link.name]
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-3 space-y-1 pb-2">
                          {NavLinks[link.name]?.map((subLink, subIndex) => (
                            <div
                              key={subIndex}
                              onClick={() => handleNavigation(subLink.path)}
                              className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300 mx-1 ${
                                isActivePath(subLink.path)
                                  ? "bg-[#2387C0] text-white shadow-md"
                                  : "text-gray-700 hover:bg-blue-50 hover:text-[#2387C0]"
                              }`}
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full mr-2 transition-all duration-300 ${
                                  isActivePath(subLink.path)
                                    ? "bg-white"
                                    : "bg-gray-400"
                                }`}
                              ></div>
                              <span className="text-[14px] text-left font-medium">
                                {subLink.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleNavigation(link.path)}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        isActivePath(link.path)
                          ? "bg-[#2387C0] text-white shadow-md"
                          : "text-gray-800 hover:bg-blue-50 hover:text-[#2387C0] border border-gray-200/50"
                      }`}
                    >
                      <div
                        className={` rounded-full mr-2 transition-all duration-300 ${
                          isActivePath(link.path) ? "bg-white" : ""
                        }`}
                      ></div>
                      <span className="text-[15px] font-semibold">
                        {link.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Contact Section */}
            <div className="px-4 mt-6 pt-4 border-t border-gray-200/60">
              <div className="text-center mb-4">
                <p className="text-gray-600 text-sm font-medium mb-3">
                  Ready to start your project?
                </p>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="w-full py-3 bg-gradient-to-r from-[#2387C0] to-[#2a95d6] text-white font-bold rounded-lg hover:from-[#1e76a9] hover:to-[#2387C0] transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
                >
                  Get In Touch
                </button>
              </div>

              {/* Additional Info */}
              <div className="text-center">
                <p className="text-gray-500 text-xs font-medium">
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

export default TransparentNavbar;