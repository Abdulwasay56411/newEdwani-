import React from "react";

const SectionOne = () => {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-16 2xl:gap-20">
          {/* ==== TEXT SECTION ==== */}
          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl order-2 xl:order-1">
            <div className="space-y-4 md:space-y-6">
              <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.1] text-center xl:text-left">
                <span className="text-gray-900 block">
                  Professional Electrical
                </span>
                <span className="text-gray-900">
                  Works You Can{" "}
                  <span className="text-[#2387C0] block sm:inline-block">
                    Trust
                  </span>
                </span>
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  leading-relaxed md:leading-9 text-center xl:text-left">
                At our company, we specialize in delivering complete electrical
                solutions for both commercial and residential construction
                projects. From installation to testing, our expert team ensures
                that every wire, switch, and connection meets the highest safety
                and performance standards.
              </p>
            </div>
          </div>

          {/* ==== IMAGE COLLAGE ==== */}
          <div className="w-full max-w-2xl xl:max-w-none order-1 xl:order-2">
            {/* Mobile & Tablet Layout - Enhanced */}
            <div className="xl:hidden relative w-full max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {/* Column 1 */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="relative group">
                    <img
                      className="w-full h-36 sm:h-44 md:h-48 rounded-xl sm:rounded-2xl object-cover shadow-md sm:shadow-lg group-hover:shadow-xl transition-all duration-300"
                      src="/c-dustin-91AQt9p4Mo8-unsplash.jpg"
                      alt="Main electrical project"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group">
                    <img
                      className="w-full h-28 sm:h-32 md:h-36 rounded-xl sm:rounded-2xl object-cover shadow-md sm:shadow-lg border-2 sm:border-4 border-white group-hover:shadow-xl transition-all duration-300"
                      src="/etienne-girardet-sgYamIzhAhg-unsplash.jpg"
                      alt="Residential electrical service"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6 pt-6 sm:pt-8 md:pt-12">
                  <div className="relative group">
                    <img
                      className="w-full h-28 sm:h-32 md:h-36 rounded-xl sm:rounded-2xl object-cover shadow-md sm:shadow-lg border-2 sm:border-4 border-white group-hover:shadow-xl transition-all duration-300"
                      src="/christopher-burns-8KfCR12oeUM-unsplash.jpg"
                      alt="Commercial electrical installation"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group">
                    <img
                      className="w-full h-36 sm:h-44 md:h-48 rounded-xl sm:rounded-2xl object-cover shadow-md sm:shadow-lg group-hover:shadow-xl transition-all duration-300"
                      src="/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg"
                      alt="Professional electrical testing"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Enhanced */}
            <div className="hidden xl:block relative w-full max-w-[550px] aspect-[533/497]">
              {/* Main Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-[37px] shadow-2xl"></div>

              <img
                className="absolute left-[8%] top-[5%] w-[65%] h-[70%] rounded-[32px] object-cover shadow-2xl z-10 hover:scale-105 transition-transform duration-300"
                src="/c-dustin-91AQt9p4Mo8-unsplash.jpg"
                alt="Main electrical project"
              />

              <img
                className="absolute top-[2%] right-[5%] w-[40%] h-[45%] rounded-[28px] object-cover shadow-xl border-8 border-white z-20 hover:scale-105 transition-transform duration-300"
                src="/christopher-burns-8KfCR12oeUM-unsplash.jpg"
                alt="Electrical installation work"
              />

              <img
                className="absolute bottom-[5%] right-[12%] w-[38%] h-[42%] rounded-[28px] object-cover shadow-xl border-8 border-white z-20 hover:scale-105 transition-transform duration-300"
                src="/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg"
                alt="Commercial electrical project"
              />

              <img
                className="absolute bottom-[15%] left-[3%] w-[35%] h-[38%] rounded-[28px] object-cover shadow-xl border-8 border-white z-20 hover:scale-105 transition-transform duration-300"
                src="/etienne-girardet-sgYamIzhAhg-unsplash.jpg"
                alt="Residential electrical service"
              />
            </div>
          </div>
        </div>

        {/* Trust Indicators - Mobile Optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="text-center p-3 sm:p-4 rounded-lg bg-gray-50 sm:bg-transparent">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2387C0]">
              250+
            </div>
            <div className="text-gray-600 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-lg bg-gray-50 sm:bg-transparent">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2387C0]">
              12+
            </div>
            <div className="text-gray-600 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-lg bg-gray-50 sm:bg-transparent">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2387C0]">
              24/7
            </div>
            <div className="text-gray-600 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Emergency Service
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-lg bg-gray-50 sm:bg-transparent">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2387C0]">
              100%
            </div>
            <div className="text-gray-600 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Satisfaction Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
