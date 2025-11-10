import React from "react";
import PageHeader from "../../components/PageHeader";

const Hardscaping = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Header Component */}
      <PageHeader
        title="Hardscaping Services"
        subtitle="Edwani Contracting"
        image="/uzair.png"
      />

      {/* ✅ Content Section (unchanged) */}
      <div className=" bg-gray-50 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Hardscaping
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Enhance your outdoor living spaces with our expert hardscaping
                  services. We create beautiful, functional, and durable
                  hardscape features that complement your landscape and
                  withstand the test of time.
                </p>

                <div className="space-y-4">
                  {[
                    "Patio and walkway construction",
                    "Retaining walls and structural features",
                    "Outdoor kitchen and living areas",
                    "Stone and paver installations",
                  ].map((text, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#2387C0] mb-6">
                  Hardscaping Services
                </h3>

                {[
                  [
                    "Patio Construction",
                    "Custom patios using various materials",
                  ],
                  ["Walkways & Driveways", "Durable and attractive pathways"],
                  [
                    "Retaining Walls",
                    "Structural and decorative wall solutions",
                  ],
                  ["Outdoor Features", "Fire pits, seating walls, and more"],
                ].map(([title, desc], i) => (
                  <div
                    key={i}
                    className="border-l-4 border-[#2387C0] pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardscaping;
